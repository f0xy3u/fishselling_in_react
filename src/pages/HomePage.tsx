import { useState } from 'react'
import { useOutletContext, Link } from 'react-router-dom'
import { FilterButton, NewsletterForm, ProductCard } from '../components/shared'
import type { SiteContext } from '../components/SiteLayout'
import { products } from '../data/site'
import type { Category } from '../data/site'

export function HomePage() {
  const { addToCart } = useOutletContext<SiteContext>()
  const [filter, setFilter] = useState<'all' | Category>('all')
  const visibleProducts =
    filter === 'all' ? products : products.filter((product) => product.category === filter)

  return (
    <>
      <section className="mx-auto flex max-w-7xl flex-col gap-16 overflow-hidden px-6 pb-24 pt-12 md:flex-row md:items-center md:px-8 md:py-32">
        <div className="w-full md:w-1/2">
          <span className="mb-6 inline-flex rounded-full bg-[#6ff7ee] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.24em] text-[#00201e]">
            Přímo z moře
          </span>
          <h1 className="mb-8 text-5xl font-black leading-[1.05] tracking-tight text-[#161d1c] md:text-7xl">
            Čerstvý ze <span className="italic text-[#006a65]">sítě</span> přímo k vaším dveřím.
          </h1>
          <p className="mb-10 max-w-md text-lg leading-relaxed text-[#3c4948]">
            Zažijte chuť oceánu, udržitelně sklizené a doručeného během 24 hodin po chycení.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#shop"
              className="inline-flex rounded-full bg-gradient-to-br from-[#006a65] to-[#00b5ad] px-10 py-4 font-bold text-white shadow-lg shadow-[#006a65]/20 transition active:scale-95"
            >
              Nakupuj dnešní úlovek
            </a>
            <Link
              to="/about"
              className="inline-flex rounded-full bg-[#fe7e4f] px-10 py-4 font-bold text-[#6b1f00] transition hover:brightness-110 active:scale-95"
            >
              Náš příběh
            </Link>
          </div>
        </div>

        <div className="relative w-full md:w-1/2">
          <div className="absolute -right-10 -top-10 h-64 w-64 rounded-full bg-[#6ff7ee]/20 blur-3xl" aria-hidden="true" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl shadow-black/10 rotate-2 transition-transform duration-700 hover:rotate-0">
            <img
              alt="Gourmet seafood platter with fresh oysters, chilled shrimp, and lemon wedges on a bed of ice"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlvasXY8sKgg9sAoHHYeB1ffwEuhw8bWoIGMweCweQtL887dRTJ1w8libB8lgjG9gpk6tjzQMNV8kCHtUm9H_yvn3fwQ1yBo-Ne-JsqILsZk4BCVBNj9vvYxFTia8UkpExifz4iJxy_IGkct12_k3jGVcnSwOK2t9Fa90GmCU71XgB2Lz3L5LU5bFVZgSKq71JayLT7z3tqIM6mCtiz8u1Sx0zsWRZhutZarC_befg-y4trpYiwV0PSaZWAXqfQBtiDXk-lsFazMc"
              className="h-full w-full object-cover"
              loading="eager"
            />
          </div>
          <div className="absolute -bottom-8 -left-8 hidden max-w-[200px] rounded-2xl border border-white/40 bg-white p-6 shadow-xl shadow-black/10 md:block">
            <div className="mb-2 flex items-center gap-2">
              <span className="material-symbols-outlined fill-1 text-[#a43c12]">stars</span>
              <span className="text-xs font-bold text-[#161d1c]">Daily Freshness</span>
            </div>
            <p className="text-[10px] uppercase tracking-[0.24em] text-[#3c4948]">Verified Sustainable</p>
          </div>
        </div>
      </section>

      <section id="shop" className="rounded-t-3xl bg-[#eff5f3] py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="mb-4 text-3xl font-black tracking-tight md:text-5xl">Dnešní úlovek</h2>
              <p className="max-w-md text-[#3c4948]">Ručně vybrané našimi odborníky každé ráno. Omezené množství k dispozici.</p>
            </div>

            <div className="flex gap-2" role="tablist" aria-label="Product category filter">
              <FilterButton active={filter === 'all'} onClick={() => setFilter('all')}>
                Vše
              </FilterButton>
              <FilterButton active={filter === 'fish'} onClick={() => setFilter('fish')}>
                Ryby
              </FilterButton>
              <FilterButton active={filter === 'shellfish'} onClick={() => setFilter('shellfish')}>
                Mušle 
              </FilterButton>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
            {visibleProducts.map((product) => (
              <ProductCard key={product.name} product={product} onAdd={addToCart} />
            ))}
          </div>
        </div>
      </section>

      <section id="newsletter" className="px-6 py-24 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="rounded-3xl border border-white/50 bg-white p-8 shadow-lg shadow-black/5 md:p-12">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#006a65] to-[#00b5ad]">
              <span className="material-symbols-outlined text-3xl text-white">mail</span>
            </div>
            <h2 className="mb-4 text-3xl font-black tracking-tight md:text-4xl">Zůstej v obraze</h2>
            <p className="mb-8 leading-relaxed text-[#3c4948]">
              Buďte první, kdo bude mít informace o nejnovějších úlovech a speciálních nabídkách.
            </p>
            <NewsletterForm />
          </div>
        </div>
      </section>
    </>
  )
}
