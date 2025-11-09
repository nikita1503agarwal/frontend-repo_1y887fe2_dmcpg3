import { Link, NavLink } from 'react-router-dom'
import { ShoppingCart, Moon, Sun, Home, Grid3X3 } from 'lucide-react'

export default function NavbarSoft({ darkMode, onToggleTheme, onOpenCart }) {
  return (
    <header className="sticky top-0 z-40 supports-[backdrop-filter]:bg-white/50 dark:supports-[backdrop-filter]:bg-slate-900/40 backdrop-blur-md border-b border-white/20 dark:border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-xl shadow-[inset_4px_4px_10px_rgba(255,255,255,0.6),inset_-6px_-6px_12px_rgba(0,0,0,0.08),0_8px_20px_rgba(99,102,241,0.35)] bg-gradient-to-br from-pink-200 to-indigo-200 dark:from-indigo-700 dark:to-purple-700" />
          <span className="font-semibold tracking-tight text-slate-800 dark:text-slate-100">RetroMart</span>
        </Link>
        <nav className="flex items-center gap-2">
          <NavLink
            to="/"
            className={({ isActive }) => `flex items-center gap-1 px-3 py-2 rounded-xl text-sm transition-colors ${isActive ? 'bg-white/60 dark:bg-slate-800/60 shadow-inner' : 'hover:bg-white/50 dark:hover:bg-slate-800/40'}`}
          >
            <Home className="h-4 w-4" /> Home
          </NavLink>
          <NavLink
            to="/categories"
            className={({ isActive }) => `flex items-center gap-1 px-3 py-2 rounded-xl text-sm transition-colors ${isActive ? 'bg-white/60 dark:bg-slate-800/60 shadow-inner' : 'hover:bg-white/50 dark:hover:bg-slate-800/40'}`}
          >
            <Grid3X3 className="h-4 w-4" /> Categories
          </NavLink>
        </nav>
        <div className="flex items-center gap-2">
          <button
            onClick={onToggleTheme}
            className="px-3 py-2 rounded-xl bg-white/60 dark:bg-slate-800/60 hover:bg-white/80 dark:hover:bg-slate-800/80 transition shadow-[inset_2px_2px_6px_rgba(255,255,255,0.6),inset_-4px_-4px_10px_rgba(0,0,0,0.12)]"
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <button
            onClick={onOpenCart}
            className="px-3 py-2 rounded-xl bg-gradient-to-br from-fuchsia-300 to-indigo-300 dark:from-fuchsia-600 dark:to-indigo-700 text-slate-900 dark:text-white shadow-[0_10px_30px_rgba(99,102,241,0.35),inset_2px_2px_8px_rgba(255,255,255,0.5),inset_-6px_-6px_12px_rgba(0,0,0,0.2)]"
          >
            <ShoppingCart className="h-4 w-4" />
          </button>
        </div>
      </div>
    </header>
  )
}
