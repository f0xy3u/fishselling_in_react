import { useState } from 'react'
import type { Product } from '../data/site'
import type { FormEvent } from 'react'

export function FilterButton({
  active,
  onClick,
  children,
}: {
  active: boolean
  onClick: () => void
  children: string
}) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      onClick={onClick}
      className={`${active ? 'bg-[#6ff7ee] text-[#00201e]' : 'bg-[#dde4e2] text-[#3c4948]'} rounded-full px-4 py-2 text-xs font-bold transition-colors`}
    >
      {children}
    </button>
  )
}

export function ProductCard({ product, onAdd }: { product: Product; onAdd: (product: Product) => void }) {
  const wideClass = product.size === 'wide' ? 'md:col-span-8' : 'md:col-span-4'
  const aspectClass = product.size === 'wide' ? 'aspect-[16/9]' : 'aspect-square'
  const titleClass = product.size === 'wide' ? 'text-2xl' : 'text-lg'
  const descClass = product.size === 'wide' ? 'text-sm mb-4' : 'text-xs mb-3'
  const priceClass = product.size === 'wide' ? 'text-xl' : 'text-lg'

  return (
    <article className={`${wideClass} group overflow-hidden rounded-3xl bg-white p-4 shadow-sm transition-all duration-500 hover:shadow-xl hover:shadow-[#006a65]/5`}>
      <div className={`${aspectClass} mb-6 overflow-hidden rounded-2xl`}>
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="flex items-start justify-between gap-4 px-4 pb-4">
        <div>
          <h3 className={`${titleClass} mb-2 font-bold`}>{product.name}</h3>
          <p className={`${descClass} text-[#3c4948]`}>{product.description}</p>
          <span className={`${priceClass} font-black text-[#006a65]`}>
            ${product.price.toFixed(2)} <span className="text-sm font-medium text-[#3c4948]">{product.unit}</span>
          </span>
        </div>
        <button
          type="button"
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#fe7e4f] text-[#6b1f00] transition hover:scale-110 active:scale-95"
          aria-label={`Přidat ${product.name} do košíku`}
          onClick={() => onAdd(product)}
        >
          <span className="material-symbols-outlined">add_shopping_cart</span>
        </button>
      </div>
    </article>
  )
}

export function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const submitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const trimmed = email.trim()
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    setError('')
    setSuccess('')

    if (!trimmed) {
      setError('Zadejte prosím e-mailovou adresu.')
      return
    }

    if (!emailRegex.test(trimmed)) {
      setError('Zadejte prosím platnou e-mailovou adresu.')
      return
    }

    setSuccess(`Vítejte na palubě. Novinky budeme posílat na ${trimmed}.`)
    setEmail('')
  }

  return (
    <form className="flex flex-col gap-4 sm:flex-row" onSubmit={submitForm} noValidate>
      <div className="flex-1 text-left">
        <label htmlFor="email-input" className="sr-only">
          E-mailová adresa
        </label>
        <input
          id="email-input"
          type="email"
          placeholder="vas@email.cz"
          autoComplete="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="w-full rounded-full border border-[#dde4e2] bg-[#eff5f3] px-6 py-4 text-[#161d1c] outline-none transition focus:border-[#006a65] focus:ring-2 focus:ring-[#006a65]/20"
        />
        {error ? <p className="ml-4 mt-2 text-xs text-[#ba1a1a]">{error}</p> : null}
      </div>
      <button
        type="submit"
        className="whitespace-nowrap rounded-full bg-gradient-to-br from-[#006a65] to-[#00b5ad] px-8 py-4 font-bold text-white shadow-lg shadow-[#006a65]/20 transition active:scale-95"
      >
        Odebírat
      </button>
      {success ? <p className="sm:col-span-2 text-left font-bold text-[#006a65]">{success}</p> : null}
    </form>
  )
}

export function ValueCard({
  icon,
  title,
  color,
  children,
}: {
  icon: string
  title: string
  color: 'primary' | 'secondary'
  children: string
}) {
  const colorClass = color === 'primary' ? 'bg-[#6ff7ee]/30 text-[#006a65]' : 'bg-[#ffdbcf]/40 text-[#a43c12]'

  return (
    <div className="flex flex-col items-center">
      <div className={`${colorClass} mb-6 flex h-16 w-16 items-center justify-center rounded-full`} aria-hidden="true">
        <span className="material-symbols-outlined text-3xl">{icon}</span>
      </div>
      <h3 className="mb-4 text-xl font-bold">{title}</h3>
      <p className="text-sm leading-relaxed text-[#3c4948]">{children}</p>
    </div>
  )
}
