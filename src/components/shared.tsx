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
      className={`${active ? 'bg-[#6ff7ee] dark:bg-[#006a65] text-[#00201e] dark:text-[#6ff7ee]' : 'bg-[#dde4e2] dark:bg-gray-800 text-[#3c4948] dark:text-gray-300'} rounded-full px-4 py-2 text-xs font-bold transition-all hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#006a65] dark:focus-visible:ring-[#6ff7ee]`}
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
    <article className={`${wideClass} group overflow-hidden rounded-3xl bg-white dark:bg-gray-800 p-4 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#006a65]/10 dark:hover:shadow-[#6ff7ee]/5 border border-transparent dark:border-gray-700`}>
      <div className={`${aspectClass} mb-6 overflow-hidden rounded-2xl relative`}>
        <div className="absolute inset-0 bg-[#006a65]/0 transition-colors duration-300 group-hover:bg-[#006a65]/10 dark:group-hover:bg-[#6ff7ee]/10 z-10 pointer-events-none rounded-2xl" />
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
      </div>
      <div className="flex items-start justify-between gap-4 px-4 pb-4">
        <div>
          <h3 className={`${titleClass} mb-2 font-bold dark:text-white transition-colors`}>{product.name}</h3>
          <p className={`${descClass} text-[#3c4948] dark:text-gray-300 transition-colors`}>{product.description}</p>
          <span className={`${priceClass} font-black text-[#006a65] dark:text-[#6ff7ee] transition-colors`}>
            ${product.price.toFixed(2)} <span className="text-sm font-medium text-[#3c4948] dark:text-gray-400">{product.unit}</span>
          </span>
        </div>
        <button
          type="button"
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#fe7e4f] dark:bg-[#d95a2b] text-[#6b1f00] dark:text-white transition-all hover:scale-110 hover:brightness-110 active:scale-95 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#fe7e4f]"
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
          className="w-full rounded-full border border-[#dde4e2] dark:border-gray-600 bg-[#eff5f3] dark:bg-gray-700 px-6 py-4 text-[#161d1c] dark:text-white outline-none transition focus:border-[#006a65] dark:focus:border-[#6ff7ee] focus:ring-2 focus:ring-[#006a65]/20 dark:focus:ring-[#6ff7ee]/20"
        />
        {error ? <p className="ml-4 mt-2 text-xs text-[#ba1a1a] dark:text-red-400">{error}</p> : null}
      </div>
      <button
        type="submit"
        className="whitespace-nowrap rounded-full bg-gradient-to-br from-[#006a65] to-[#00b5ad] px-8 py-4 font-bold text-white shadow-lg shadow-[#006a65]/20 transition-all hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#00b5ad]"
      >
        Odebírat
      </button>
      {success ? <p className="sm:col-span-2 text-left font-bold text-[#006a65] dark:text-[#6ff7ee]">{success}</p> : null}
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
  const colorClass = color === 'primary' 
    ? 'bg-[#6ff7ee]/30 text-[#006a65] dark:bg-[#006a65]/40 dark:text-[#6ff7ee]' 
    : 'bg-[#ffdbcf]/40 text-[#a43c12] dark:bg-[#a43c12]/40 dark:text-[#ffdbcf]'

  return (
    <div className="flex flex-col items-center group">
      <div className={`${colorClass} mb-6 flex h-16 w-16 items-center justify-center rounded-full transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6`} aria-hidden="true">
        <span className="material-symbols-outlined text-3xl">{icon}</span>
      </div>
      <h3 className="mb-4 text-xl font-bold dark:text-white transition-colors">{title}</h3>
      <p className="text-sm leading-relaxed text-[#3c4948] dark:text-gray-300 transition-colors">{children}</p>
    </div>
  )
}
