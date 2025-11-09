import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import { ShoppingCart, User, Sun, Moon } from 'lucide-react'

export default function ParallaxHero({ onOpenCart, onOpenAccount, darkMode = false, onToggleTheme = () => {} }) {
  return (
    <section className="relative h-[78vh] w-full overflow-hidden flex items-center justify-center">
      {/* 3D Spline Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VyGeZv58yuk8j7Yy/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient + grain overlays (non-blocking for interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white/20 dark:from-[#0b1220cc] dark:via-transparent dark:to-[#0b122099]" />
      <div className="pointer-events-none absolute inset-0" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)', backgroundSize: '4px 4px' }} />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-6xl font-extrabold tracking-tight select-none"
          style={{ textShadow: '0 8px 28px rgba(99,102,241,0.40), 0 2px 0 rgba(255,255,255,0.15)' }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 via-cyan-300 to-emerald-300 dark:from-fuchsia-300 dark:via-cyan-200 dark:to-emerald-200">
            Futuristic Digital Store
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-4 text-lg md:text-xl text-slate-700/85 dark:text-slate-200/80 max-w-3xl mx-auto"
        >
          Interactive 3D landing with soft claymorphism and retro vibes. Explore categories, subcategories, and products with smooth transitions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <button
            onClick={onOpenCart}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl text-slate-800 dark:text-slate-100 bg-slate-50/80 dark:bg-slate-800/60 backdrop-blur-md shadow-[8px_8px_20px_#cbd5e1,-8px_-8px_20px_#ffffff] dark:shadow-[8px_8px_20px_#0b1220,-8px_-8px_20px_#1f2937] hover:scale-[1.02] transition-transform"
          >
            <ShoppingCart className="w-5 h-5" /> View Cart
          </button>
          <button
            onClick={onOpenAccount}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl text-white bg-gradient-to-r from-fuchsia-500 to-cyan-400 shadow-lg shadow-fuchsia-500/30 hover:shadow-xl hover:shadow-cyan-400/30 transition"
          >
            <User className="w-5 h-5" /> Account
          </button>
          <button
            onClick={onToggleTheme}
            aria-label="Toggle theme"
            className="inline-flex items-center gap-2 px-4 py-3 rounded-2xl text-slate-800 dark:text-slate-100 bg-slate-50/80 dark:bg-slate-800/60 backdrop-blur-md shadow-[8px_8px_20px_#cbd5e1,-8px_-8px_20px_#ffffff] dark:shadow-[8px_8px_20px_#0b1220,-8px_-8px_20px_#1f2937]"
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />} {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </motion.div>
      </div>
    </section>
  )
}
