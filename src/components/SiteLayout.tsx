import { useEffect, useMemo, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import type { CartItem, Product } from '../data/site'

export type SiteContext = {
  addToCart: (product: Product) => void
}

export function SiteLayout() {
  const location = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const [toast, setToast] = useState('')
  const [cart, setCart] = useState<CartItem[]>([])

  useEffect(() => {
    if (location.hash) {
      const target = document.querySelector(location.hash)
      target?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      return
    }

    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname, location.hash])

  useEffect(() => {
    document.body.style.overflow = cartOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [cartOpen])

  useEffect(() => {
    if (!toast) {
      return
    }

    const timer = window.setTimeout(() => setToast(''), 2200)
    return () => window.clearTimeout(timer)
  }, [toast])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setCartOpen(false)
        setMobileOpen(false)
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  const cartCount = useMemo(() => cart.reduce((sum, item) => sum + item.qty, 0), [cart])
  const cartTotal = useMemo(() => cart.reduce((sum, item) => sum + item.price * item.qty, 0), [cart])

  const addToCart = (product: Product) => {
    setCart((current) => {
      const existing = current.find((item) => item.name === product.name)
      if (existing) {
        return current.map((item) =>
          item.name === product.name ? { ...item, qty: item.qty + 1 } : item,
        )
      }

      return [...current, { ...product, qty: 1 }]
    })

    setToast(`${product.name} added to cart`)
  }

  const removeFromCart = (name: string) => {
    setCart((current) => current.filter((item) => item.name !== name))
    setToast(`${name} removed from cart`)
  }

  const outletContext: SiteContext = { addToCart }

  return (
    <div className="min-h-screen bg-[#f4fbf9] font-['Plus_Jakarta_Sans',sans-serif] text-[#161d1c]">
      <a
        href="#main-content"
        className="absolute left-4 top-0 z-[60] -translate-y-full rounded-b-xl bg-[#006a65] px-5 py-3 text-sm font-bold text-white transition-transform focus:translate-y-0"
      >
        Skip to main content
      </a>

      <header className="sticky top-0 z-50 border-b border-white/40 bg-[#ecfdf5]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-8">
          <Link to="/" className="text-2xl font-black tracking-tight text-[#0f766e]">
            Fin & Gill
          </Link>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
            <NavLink to="/" end className={navClass}>
              Shop
            </NavLink>
            <NavLink to="/recipes" className={navClass}>
              Recipes
            </NavLink>
            <NavLink to="/about" className={navClass}>
              About Our Fishermen
            </NavLink>
            <a href="/#newsletter" className={linkClass}>
              Newsletter
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <button
              type="button"
              className="relative rounded-full p-2 text-[#0f766e] transition hover:bg-[#6ff7ee]/25 active:scale-95"
              aria-label="Open shopping cart"
              onClick={() => setCartOpen(true)}
            >
              <span className="material-symbols-outlined">shopping_cart</span>
              {cartCount > 0 ? (
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#fe7e4f] text-[10px] font-black text-[#662200]">
                  {cartCount}
                </span>
              ) : null}
            </button>

            <button
              type="button"
              className="rounded-full p-2 text-[#0f766e] transition hover:bg-[#6ff7ee]/25 active:scale-95"
              aria-label="Account"
            >
              <span className="material-symbols-outlined">account_circle</span>
            </button>

            <button
              type="button"
              className="rounded-full p-2 text-[#0f766e] transition hover:bg-[#6ff7ee]/25 active:scale-95 md:hidden"
              aria-label="Open navigation menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              onClick={() => setMobileOpen((current) => !current)}
            >
              <span className="material-symbols-outlined">{mobileOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </div>

        <div
          id="mobile-menu"
          className={`${mobileOpen ? 'max-h-72 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden px-6 pb-2 transition-all duration-300 md:hidden`}
        >
          <div className="flex flex-col gap-1 rounded-2xl bg-white p-4 shadow-lg shadow-black/5">
            <NavLink to="/" end className={mobileNavClass}>
              Shop
            </NavLink>
            <NavLink to="/recipes" className={mobileNavClass}>
              Recipes
            </NavLink>
            <NavLink to="/about" className={mobileNavClass}>
              About Our Fishermen
            </NavLink>
            <a href="/#newsletter" className={mobileLinkClass} onClick={() => setMobileOpen(false)}>
              Newsletter
            </a>
          </div>
        </div>
      </header>

      <main id="main-content">
        <Outlet context={outletContext} />
      </main>

      <footer className="mt-20 rounded-t-[3rem] bg-[#d9f99d]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-8 py-16 text-center md:flex-row md:px-12 md:text-left">
          <div className="text-xl font-bold text-[#134e4a]">Fin & Gill</div>
          <nav className="flex flex-wrap justify-center gap-8" aria-label="Footer navigation">
            <Link to="/about" className={footerLinkClass}>
              Sustainability
            </Link>
            <a href="#" className={footerLinkClass}>
              Shipping
            </a>
            <a href="/#newsletter" className={footerLinkClass}>
              Contact
            </a>
            <a href="#" className={footerLinkClass}>
              Terms
            </a>
          </nav>
          <div className="text-xs uppercase tracking-[0.24em] text-[#0f766e]">© 2025 Fin & Gill. Sustainably Sourced.</div>
        </div>
      </footer>

      <div
        className={`${cartOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'} fixed inset-0 z-50 bg-[#161d1c]/40 transition-opacity`}
        aria-hidden="true"
        onClick={() => setCartOpen(false)}
      />

      <aside
        className={`${cartOpen ? 'translate-x-0' : 'translate-x-full'} fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-white shadow-2xl shadow-black/20 transition-transform duration-300`}
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between border-b border-black/5 px-8 py-6">
          <h2 className="text-xl font-bold">Your Cart</h2>
          <button
            type="button"
            className="rounded-full p-2 text-[#3c4948] transition hover:bg-[#e3e9e8]"
            aria-label="Close cart"
            onClick={() => setCartOpen(false)}
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-8 py-6">
          {cart.length === 0 ? (
            <p className="py-12 text-center text-[#3c4948]">Your cart is empty. Start shopping!</p>
          ) : (
            <div className="space-y-4">
              {cart.map((item) => (
                <div key={item.name} className="flex items-center justify-between border-b border-black/5 py-4">
                  <div className="pr-4">
                    <h3 className="text-sm font-bold">{item.name}</h3>
                    <p className="text-xs text-[#3c4948]">
                      ${item.price.toFixed(2)} × {item.qty}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-[#006a65]">
                      ${(item.price * item.qty).toFixed(2)}
                    </span>
                    <button
                      type="button"
                      className="rounded-full p-2 text-[#3c4948] transition hover:bg-[#ffdad6] hover:text-[#ba1a1a]"
                      aria-label={`Remove ${item.name} from cart`}
                      onClick={() => removeFromCart(item.name)}
                    >
                      <span className="material-symbols-outlined text-sm">delete</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className={`${cart.length === 0 ? 'hidden' : 'block'} border-t border-black/5 px-8 py-6`}>
          <div className="mb-6 flex items-center justify-between">
            <span className="font-medium text-[#3c4948]">Total</span>
            <span className="text-2xl font-black text-[#006a65]">${cartTotal.toFixed(2)}</span>
          </div>
          <button
            type="button"
            className="w-full rounded-full bg-gradient-to-br from-[#006a65] to-[#00b5ad] px-8 py-4 font-bold text-white shadow-lg shadow-[#006a65]/20 transition active:scale-95"
          >
            Checkout
          </button>
        </div>
      </aside>

      {toast ? (
        <div className="fixed bottom-6 right-6 z-[60] rounded-2xl bg-[#161d1c] px-4 py-3 text-sm font-medium text-white shadow-2xl shadow-black/20">
          {toast}
        </div>
      ) : null}
    </div>
  )
}

const navClass = ({ isActive }: { isActive: boolean }) =>
  `${isActive ? 'border-b-2 border-[#fe7e4f] font-bold text-[#0f766e]' : 'font-medium text-[#134e4a]/70'} text-sm tracking-tight transition-colors hover:text-[#a43c12]`

const mobileNavClass = ({ isActive }: { isActive: boolean }) =>
  `${isActive ? 'bg-[#6ff7ee]/20 font-bold text-[#0f766e]' : 'text-[#134e4a]/70'} rounded-xl px-4 py-3 text-sm transition-colors hover:bg-[#6ff7ee]/20`

const linkClass = 'text-sm font-medium tracking-tight text-[#134e4a]/70 transition-colors hover:text-[#a43c12]'
const mobileLinkClass = 'rounded-xl px-4 py-3 text-sm text-[#134e4a]/70 transition-colors hover:bg-[#6ff7ee]/20 hover:text-[#0f766e]'
const footerLinkClass = 'text-xs uppercase tracking-[0.24em] text-[#134e4a]/60 opacity-80 transition-opacity hover:underline hover:opacity-100'
