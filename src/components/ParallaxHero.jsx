import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Rocket, ShoppingCart, User } from 'lucide-react'

export default function ParallaxHero({ onOpenCart, onOpenAccount, darkMode, onToggleTheme }) {
  const layer1Ref = useRef(null)
  const layer2Ref = useRef(null)

  useEffect(() => {
    const handleMove = (e) => {
      const { innerWidth, innerHeight } = window
      const x = (e.clientX - innerWidth / 2) / innerWidth
      const y = (e.clientY - innerHeight / 2) / innerHeight
      if (layer1Ref.current) {
        layer1Ref.current.style.transform = `translate3d(${x * 20}px, ${y * 20}px, 0)`
      }
      if (layer2Ref.current) {
        layer2Ref.current.style.transform = `translate3d(${x * -30}px, ${y * -30}px, 0)`
      }
    }
    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [])

  return (
    <section className="relative h-[70vh] w-full overflow-hidden flex items-center justify-center">
      {/* Animated gradient backdrop with grain */}
      <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-400/40 via-indigo-400/40 to-cyan-400/40 dark:from-fuchsia-700/40 dark:via-indigo-800/40 dark:to-cyan-700/40 animate-pulse" />
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)', backgroundSize: '3px 3px' }} />

      {/* Parallax pixel skyline layers */}
      <div ref={layer1Ref} className="absolute inset-x-0 bottom-[-10%] mx-auto w-[140%] h-[55%] opacity-50">
        <div className="w-full h-full bg-gradient-to-t from-indigo-900/60 to-transparent blur-3xl rounded-[6rem]" />
      </div>
      <div ref={layer2Ref} className="absolute inset-x-0 -bottom-10 mx-auto w-[120%] h-[45%] opacity-60">
        <div className="w-full h-full bg-[linear-gradient(135deg,#7c3aed33_25%,transparent_25%),linear-gradient(225deg,#22d3ee33_25%,transparent_25%),linear-gradient(45deg,#a78bfa33_25%,transparent_25%),linear-gradient(315deg,#f472b633_25%,#11182711_25%)] bg-[length:40px_40px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold tracking-tight select-none"
          style={{ textShadow: '0 6px 24px rgba(255, 105, 180, 0.45), 0 2px 0 rgba(255,255,255,0.2)' }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 via-cyan-300 to-emerald-300 dark:from-fuchsia-300 dark:via-cyan-200 dark:to-emerald-200">
            Digital Store Hub
          </span>
        </motion.h1>
        <p className="mt-4 text-lg md:text-xl text-slate-700/80 dark:text-slate-200/80 max-w-3xl mx-auto">
          Modern yet nostalgic marketplace for game top-ups, premium apps, data packages, and PPOB services.
        </p>

        <div className="mt-8 flex items-center justify-center gap-3">
          <button onClick={onOpenCart} className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl text-slate-800 dark:text-slate-100 bg-slate-50/80 dark:bg-slate-800/60 backdrop-blur-md shadow-[8px_8px_20px_#cbd5e1,-8px_-8px_20px_#ffffff] dark:shadow-[8px_8px_20px_#0b1220,-8px_-8px_20px_#1f2937] hover:scale-[1.02] transition-transform">
            <ShoppingCart className="w-5 h-5" /> View Cart
          </button>
          <button onClick={onOpenAccount} className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl text-white bg-gradient-to-r from-fuchsia-500 to-cyan-400 shadow-lg shadow-fuchsia-500/30 hover:shadow-xl hover:shadow-cyan-400/30 transition">
            <User className="w-5 h-5" /> Account
          </button>
          <button onClick={onToggleTheme} aria-label="Toggle theme" className="inline-flex items-center gap-2 px-4 py-3 rounded-2xl text-slate-800 dark:text-slate-100 bg-slate-50/80 dark:bg-slate-800/60 backdrop-blur-md shadow-[8px_8px_20px_#cbd5e1,-8px_-8px_20px_#ffffff] dark:shadow-[8px_8px_20px_#0b1220,-8px_-8px_20px_#1f2937]">
            <Rocket className="w-5 h-5" /> {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </div>
    </section>
  )
}
