import { ValueCard } from '../components/shared'

export function AboutPage() {
  return (
    <>
      <section className="mx-auto flex max-w-7xl flex-col gap-16 px-6 py-16 md:flex-row md:items-center md:px-8 md:py-24">
        <div className="w-full md:w-1/2">
          <h1 className="mb-6 text-5xl font-black leading-tight tracking-tight md:text-6xl">
            Zachováváme <span className="italic text-[#006a65]">OCEÁN </span> pro budoucí generace
          </h1>
          <p className="mb-8 text-lg leading-relaxed text-[#3c4948]">
            At Fin & Gill, we believe that the best seafood comes from those who treat the water with respect. We bypass the
            massive commercial operations and partner exclusively with independent, generational fishermen who use sustainable
            harvesting methods.
          </p>
          <p className="mb-8 text-lg leading-relaxed text-[#3c4948]">
            By cutting out the middlemen, we ensure that our coastal partners are paid fairly for their hard work, and you
            get access to the freshest catch possible, often delivered to your door within 24 hours of leaving the water.
          </p>
          <div className="flex items-center gap-4 font-bold text-[#006a65]">
            <span className="material-symbols-outlined text-3xl">verified</span>
            100% Traceable Catch
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <div className="relative aspect-square overflow-hidden rounded-3xl shadow-2xl shadow-black/10">
            <div className="absolute inset-x-0 bottom-0 top-1/2 z-10 bg-gradient-to-t from-black/60 to-transparent" />
            <img
              src="https://i.ibb.co/hxFQxVjV/matej.png"
              alt="Fisherman standing on a dock with nets"
              className="h-full w-full object-cover object-top"
            />
            <div className="absolute bottom-6 left-6 z-20">
              <h2 className="text-xl font-bold text-white">Matěj Rybář</h2>
              <p className="text-sm text-white/80">Very capable fisherman and active student</p>
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-t-3xl bg-[#eff5f3] py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-black tracking-tight md:text-5xl">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 gap-16 text-center md:grid-cols-3">
            <ValueCard icon="set_meal" title="Sustainably Caught" color="primary">
              No bottom trawling. No overfished species. Only line-caught or sustainably farmed seafood that respects ocean ecosystems.
            </ValueCard>
            <ValueCard icon="local_shipping" title="Cold-Chain Fresh" color="secondary">
              Temperature-controlled from the dock to your door. We ensure our catch stays below peak temperatures to maintain just-caught quality.
            </ValueCard>
            <ValueCard icon="cooking" title="Chef-Ready Quality" color="primary">
              The same premium cuts and whole fish preferred by the region&apos;s top seafood restaurants, now available to home cooks.
            </ValueCard>
          </div>
        </div>
      </section>
    </>
  )
}
