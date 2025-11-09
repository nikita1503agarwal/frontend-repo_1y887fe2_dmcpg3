import { useEffect, useMemo, useState } from 'react'
import ParallaxHero from './components/ParallaxHero'
import CategorySection from './components/CategorySection'
import CartDrawer from './components/CartDrawer'
import FooterRetro from './components/FooterRetro'

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
    <div className="min-h-screen bg-[radial-gradient(circle_at_20%_10%,#fce7f3_0%,transparent_25%),radial-gradient(circle_at_80%_0%,#e0f2fe_0%,transparent_25%),radial-gradient(circle_at_50%_100%,#dcfce7_0%,transparent_25%)] dark:bg-[radial-gradient(circle_at_20%_10%,#1f1630_0%,transparent_25%),radial-gradient(circle_at_80%_0%,#0d1b2a_0%,transparent_25%),radial-gradient(circle_at_50%_100%,#0f2d22_0%,transparent_25%)] text-slate-900 dark:text-slate-100">
      <ParallaxHero
        darkMode={darkMode}
        onToggleTheme={() => setDarkMode((d) => !d)}
        onOpenCart={() => setCartOpen(true)}
        onOpenAccount={() => alert('Mock login/register modal')}
      />
      <CategorySection onAddToCart={handleAdd} />
      <FooterRetro />
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} items={cart} onRemove={handleRemove} />
    </div>
  )
}

export default App
