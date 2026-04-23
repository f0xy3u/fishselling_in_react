import { recipes } from '../data/site'

export function RecipesPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-24">
      <div className="mb-16 text-center" data-aos="fade-up">
        <h1 className="mb-6 text-5xl font-black tracking-tight dark:text-white md:text-6xl transition-colors">
          Naše oblíbené <span className="italic text-[#006a65] dark:text-[#6ff7ee]">recepty</span>
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-[#3c4948] dark:text-gray-300 transition-colors">
          Naučte se připravit čerstvý úlovek podle jednoduchých receptů doporučených šéfkuchaři, které nechají vyniknout přirozenou chuť mořských plodů.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {recipes.map((recipe, i) => (
          <div key={recipe.title} data-aos="fade-up" data-aos-delay={i * 100}>
            <article
              className="h-full group overflow-hidden rounded-3xl border border-black/5 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#006a65]/10 dark:hover:shadow-[#6ff7ee]/5"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <div className="absolute left-4 top-4 z-10 rounded-full bg-white/90 dark:bg-gray-900/90 px-3 py-1 text-xs font-bold uppercase tracking-[0.24em] text-[#a43c12] dark:text-[#fe7e4f] backdrop-blur-sm transition-colors">
                  {recipe.time}
                </div>
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h2 className="mb-3 text-2xl font-bold dark:text-white transition-colors">{recipe.title}</h2>
                <p className="mb-6 text-sm leading-relaxed text-[#3c4948] dark:text-gray-300 transition-colors">{recipe.description}</p>
                <a href="#" className="inline-flex items-center gap-2 font-bold text-[#006a65] dark:text-[#6ff7ee] transition-colors hover:text-[#a43c12] dark:hover:text-[#fe7e4f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#006a65] rounded-sm">
                  Zobrazit recept <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">arrow_forward</span>
                </a>
              </div>
            </article>
          </div>
        ))}

        <div data-aos="fade-up" data-aos-delay={recipes.length * 100}>
          <article className="h-full overflow-hidden rounded-3xl border border-black/5 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl dark:hover:shadow-[#6ff7ee]/5">
            <div className="relative flex aspect-[16/10] items-center justify-center bg-[#dde4e2] dark:bg-gray-700 transition-colors duration-300">
              <span className="material-symbols-outlined text-6xl text-[#bbc9c7] dark:text-gray-500 transition-colors duration-300">set_meal</span>
            </div>
            <div className="p-6">
              <div className="mb-4 h-4 w-16 rounded-full bg-[#dde4e2] dark:bg-gray-700 transition-colors duration-300" />
              <div className="mb-3 h-6 w-3/4 rounded-full bg-[#dde4e2] dark:bg-gray-700 transition-colors duration-300" />
              <div className="mb-6 h-20 w-full rounded-2xl bg-[#dde4e2] dark:bg-gray-700 transition-colors duration-300" />
              <div className="h-4 w-24 rounded-full bg-[#dde4e2] dark:bg-gray-700 transition-colors duration-300" />
            </div>
          </article>
        </div>
      </div>
    </main>
  )
}
