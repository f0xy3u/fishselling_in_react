import { useState, useMemo } from 'react'
import { useOutletContext, Link } from 'react-router-dom'
import { FilterButton, NewsletterForm, ProductCard } from '../components/shared'
import type { SiteContext } from '../components/SiteLayout'
import { products } from '../data/site'
import type { Category } from '../data/site'

export function HomePage() {
  const { addToCart } = useOutletContext<SiteContext>()
  const [filter, setFilter] = useState<'all' | Category>('all')
  const [searchQuery, setSearchQuery] = useState('')

  const visibleProducts = useMemo(() => {
    return products.filter((product) => {
      const matchCategory = filter === 'all' || product.category === filter
      const matchSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.description.toLowerCase().includes(searchQuery.toLowerCase())
      return matchCategory && matchSearch
    })
  }, [filter, searchQuery])

  return (
    <>
      <section className="mx-auto flex max-w-7xl flex-col gap-16 overflow-x-clip px-6 pb-24 pt-12 md:flex-row md:items-center md:px-8 md:py-32">
        <div className="w-full md:w-1/2" data-aos="fade-right">
          <span className="mb-6 inline-flex rounded-full bg-[#6ff7ee] dark:bg-[#006a65] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.24em] text-[#00201e] dark:text-[#6ff7ee]">
            Přímo z moře
          </span>
          <h1 className="mb-8 text-5xl font-black leading-[1.05] tracking-tight text-[#161d1c] dark:text-white md:text-7xl">
            Čerstvý ze <span className="italic text-[#006a65] dark:text-[#6ff7ee]">sítě</span> přímo k vaším dveřím.
          </h1>
          <p className="mb-10 max-w-md text-lg leading-relaxed text-[#3c4948] dark:text-gray-300">
            Zažijte chuť oceánu, udržitelně sklizené a doručeného během 24 hodin po chycení.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#shop"
              className="inline-flex rounded-full bg-gradient-to-br from-[#006a65] to-[#00b5ad] px-10 py-4 font-bold text-white shadow-lg shadow-[#006a65]/20 transition-all hover:scale-105 hover:shadow-[#006a65]/40 active:scale-95 focus-visible:ring-4 focus-visible:ring-[#6ff7ee]"
            >
              Nakupuj dnešní úlovek
            </a>
            <Link
              to="/about"
              className="inline-flex rounded-full bg-[#fe7e4f] dark:bg-[#d95a2b] px-10 py-4 font-bold text-[#6b1f00] dark:text-white transition-all hover:scale-105 hover:brightness-110 active:scale-95 focus-visible:ring-4 focus-visible:ring-[#fe7e4f]"
            >
              Náš příběh
            </Link>
          </div>
        </div>

        <div className="relative w-full md:w-1/2" data-aos="fade-left" data-aos-delay="200">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl shadow-black/10 rotate-2 transition-transform duration-700 hover:rotate-0">
            <img
              alt="Gurmánský talíř s čerstvými ústřicemi, chlazenými krevetami a citronem na ledu"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlvasXY8sKgg9sAoHHYeB1ffwEuhw8bWoIGMweCweQtL887dRTJ1w8libB8lgjG9gpk6tjzQMNV8kCHtUm9H_yvn3fwQ1yBo-Ne-JsqILsZk4BCVBNj9vvYxFTia8UkpExifz4iJxy_IGkct12_k3jGVcnSwOK2t9Fa90GmCU71XgB2Lz3L5LU5bFVZgSKq71JayLT7z3tqIM6mCtiz8u1Sx0zsWRZhutZarC_befg-y4trpYiwV0PSaZWAXqfQBtiDXk-lsFazMc"
              className="h-full w-full object-cover transition-transform duration-1000 hover:scale-110"
              loading="eager"
            />
          </div>
          <div className="absolute -bottom-8 -left-8 hidden max-w-[200px] rounded-2xl border border-white/40 bg-white dark:bg-gray-800 dark:border-gray-700 p-6 shadow-xl shadow-black/10 md:block" data-aos="fade-up" data-aos-delay="400">
            <div className="mb-2 flex items-center gap-2">
              <span className="material-symbols-outlined fill-1 text-[#a43c12] dark:text-[#fe7e4f]">stars</span>
              <span className="text-xs font-bold text-[#161d1c] dark:text-white">Denní čerstvost</span>
            </div>
            <p className="text-[10px] uppercase tracking-[0.24em] text-[#3c4948] dark:text-gray-400">Ověřeně udržitelné</p>
          </div>
        </div>
      </section>

      <section id="shop" className="rounded-t-3xl bg-[#eff5f3] dark:bg-gray-900 py-24 transition-colors">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="mb-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between" data-aos="fade-up">
            <div className="flex-1">
              <h2 className="mb-4 text-3xl font-black tracking-tight dark:text-white md:text-5xl">Dnešní úlovek</h2>
              <p className="max-w-md text-[#3c4948] dark:text-gray-300">Ručně vybrané našimi odborníky každé ráno. Omezené množství k dispozici.</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">search</span>
                <input 
                  type="text" 
                  placeholder="Hledat..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full sm:w-64 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 py-2.5 pl-10 pr-4 text-sm outline-none transition-all focus:border-[#006a65] focus:ring-2 focus:ring-[#006a65]/20 dark:text-white dark:focus:ring-[#6ff7ee]/20"
                />
              </div>
              <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0" role="tablist" aria-label="Filtr kategorie produktů">
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
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-12" data-aos="fade-up" data-aos-delay="200">
            {visibleProducts.length > 0 ? (
              visibleProducts.map((product) => (
                <ProductCard key={product.name} product={product} onAdd={addToCart} />
              ))
            ) : (
              <div className="col-span-full py-12 text-center text-gray-500 dark:text-gray-400">
                Nenašli jsme žádné produkty odpovídající hledání "{searchQuery}".
              </div>
            )}
          </div>
        </div>
      </section>

      <section id="newsletter" className="px-6 py-24 md:px-8 dark:bg-gray-900 transition-colors">
        <div className="mx-auto max-w-2xl text-center" data-aos="zoom-in">
          <div className="rounded-3xl border border-white/50 dark:border-gray-700 bg-white dark:bg-gray-800 p-8 shadow-lg shadow-black/5 md:p-12 transition-colors">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#006a65] to-[#00b5ad]">
              <span className="material-symbols-outlined text-3xl text-white">mail</span>
            </div>
            <h2 className="mb-4 text-3xl font-black tracking-tight dark:text-white md:text-4xl">Zůstej v obraze</h2>
            <p className="mb-8 leading-relaxed text-[#3c4948] dark:text-gray-300">
              Buďte první, kdo bude mít informace o nejnovějších úlovech a speciálních nabídkách.
            </p>
            <NewsletterForm />
          </div>
        </div>
      </section>
    </>
  )
}
