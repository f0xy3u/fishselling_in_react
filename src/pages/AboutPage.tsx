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
            U Fin & Gill, věříme, že nejlepší mořské plody pocházejí od těch, kteří ohleduplně nakládají s vodou. Obcházíme
            masivní obchodní operace a partneríme výhradně s nezávislými, generačními rybáři, kteří používají udržitelné
            metody sběru.
          </p>
          <p className="mb-8 text-lg leading-relaxed text-[#3c4948]">
            Tím, že vyloučíme prostředníky, zajišťujeme, že naše pobřežní partneři jsou spravedlivě placeni za svou tvrdou práci, a vy
            dostanete nejčerstvější úlovek možný.
          </p>
          <div className="flex items-center gap-4 font-bold text-[#006a65]">
            <span className="material-symbols-outlined text-3xl">verified</span>
            100% Dohledatelný úlovky
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <div className="relative aspect-square overflow-hidden rounded-3xl shadow-2xl shadow-black/10">
            <div className="absolute inset-x-0 bottom-0 top-1/2 z-10 bg-gradient-to-t from-black/60 to-transparent" />
            <img
              src="https://i.ibb.co/hxFQxVjV/matej.png"
              alt="Rybář stojící na molu se sítěmi"
              className="h-full w-full object-cover object-top"
            />
            <div className="absolute bottom-6 left-6 z-20">
              <h2 className="text-xl font-bold text-white">Denis Hřešníček</h2>
              <p className="text-sm text-white/80">Velmi schopný rybář a aktivní student</p>
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-t-3xl bg-[#eff5f3] py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-black tracking-tight md:text-5xl">Naše zásady</h2>
          </div>
          <div className="grid grid-cols-1 gap-16 text-center md:grid-cols-3">
            <ValueCard icon="set_meal" title="Udržitelný lov" color="primary">
              Žádné vlečné sítě při dně. Žádné nadměrně lovené druhy. Jen ryby ulovené na udici nebo z udržitelných chovů, které respektují mořské ekosystémy.
            </ValueCard>
            <ValueCard icon="local_shipping" title="Čerstvost v chlazeném řetězci" color="secondary">
              Teplotně kontrolováno od mola až k vašim dveřím. Dbáme na to, aby úlovek zůstal při optimální teplotě a zachoval kvalitu čerstvě ulovených ryb.
            </ValueCard>
            <ValueCard icon="cooking" title="Kvalita jako pro šéfkuchaře" color="primary">
              Stejné prémiové porce i celé ryby, které preferují nejlepší restaurace s mořskými plody v regionu, nyní dostupné i pro domácí vaření.
            </ValueCard>
          </div>
        </div>
      </section>
    </>
  )
}
