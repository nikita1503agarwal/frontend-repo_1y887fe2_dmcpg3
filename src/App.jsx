import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ParallaxHero from './components/ParallaxHero'
import CartDrawer from './components/CartDrawer'
import FooterRetro from './components/FooterRetro'
import NavbarSoft from './components/NavbarSoft'
import CategoriesPage from './components/CategoriesPage'
import SubcategoriesPage from './components/SubcategoriesPage'
import ProductsPage from './components/ProductsPage'

function Home({ onOpenCart, darkMode, onToggleTheme }) {
  return (
    <>
      <ParallaxHero
        onOpenCart={onOpenCart}
        onOpenAccount={() => alert('Mock login/register modal')}
        darkMode={darkMode}
        onToggleTheme={onToggleTheme}
      />
      <div className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-semibold tracking-tight">Welcome</h2>
        <p className="mt-2 text-slate-600 dark:text-slate-300">Explore categories to find pixel graphics, audio packs, and templates.</p>
      </div>
    </>
  )
}

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const [cart, setCart] = useState([])

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
  }, [darkMode])

  const handleAdd = (p) => {
    setCart((c) => {
      const exist = c.find((i) => i.id === p.id)
      if (exist) return c.map((i) => (i.id === p.id ? { ...i, qty: (i.qty || 1) + 1 } : i))
      return [...c, { ...p, qty: 1 }]
    })
    setCartOpen(true)
  }

  const handleRemove = (id) => setCart((c) => c.filter((i) => i.id !== id))

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[radial-gradient(circle_at_20%_10%,#fce7f3_0%,transparent_25%),radial-gradient(circle_at_80%_0%,#e0f2fe_0%,transparent_25%),radial-gradient(circle_at_50%_100%,#dcfce7_0%,transparent_25%)] dark:bg-[radial-gradient(circle_at_20%_10%,#1f1630_0%,transparent_25%),radial-gradient(circle_at_80%_0%,#0d1b2a_0%,transparent_25%),radial-gradient(circle_at_50%_100%,#0f2d22_0%,transparent_25%)] text-slate-900 dark:text-slate-100">
        <NavbarSoft darkMode={darkMode} onToggleTheme={() => setDarkMode((d) => !d)} onOpenCart={() => setCartOpen(true)} />
        <Routes>
          <Route path="/" element={<Home onOpenCart={() => setCartOpen(true)} darkMode={darkMode} onToggleTheme={() => setDarkMode((d) => !d)} />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/categories/:categoryId" element={<SubcategoriesPage />} />
          <Route path="/categories/:categoryId/:subId" element={<ProductsPage onAdd={handleAdd} />} />
        </Routes>
        <FooterRetro />
        <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} items={cart} onRemove={handleRemove} />
      </div>
    </BrowserRouter>
  )
}

export default App
