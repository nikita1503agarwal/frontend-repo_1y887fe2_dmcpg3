import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Folder, ChevronDown, ChevronRight, Gamepad2, Smartphone, Diamond, Zap } from 'lucide-react'

const defaultData = [
  {
    id: 'games',
    name: 'Game Top-up',
    icon: Gamepad2,
    subcategories: [
      { id: 'mlbb', name: 'Mobile Legends', products: [{ id: 'mlbb-86', name: '86 Diamonds', price: 23000 }, { id: 'mlbb-172', name: '172 Diamonds', price: 45000 }] },
      { id: 'genshin', name: 'Genshin Impact', products: [{ id: 'gen-60', name: '60 Crystals', price: 15000 }, { id: 'gen-300', name: '300 Crystals', price: 70000 }] },
    ],
  },
  {
    id: 'apps',
    name: 'Premium Apps',
    icon: Diamond,
    subcategories: [
      { id: 'spotify', name: 'Spotify', products: [{ id: 'spot-1m', name: '1 Month', price: 54000 }] },
      { id: 'netflix', name: 'Netflix', products: [{ id: 'nflx-1m', name: '1 Month', price: 75000 }] },
    ],
  },
  {
    id: 'data',
    name: 'Internet Packages',
    icon: Smartphone,
    subcategories: [
      { id: 'telkomsel', name: 'Telkomsel', products: [{ id: 'tsel-10', name: '10 GB', price: 45000 }, { id: 'tsel-25', name: '25 GB', price: 90000 }] },
      { id: 'xl', name: 'XL', products: [{ id: 'xl-7', name: '7 GB', price: 30000 }] },
    ],
  },
  {
    id: 'ppob',
    name: 'PPOB Services',
    icon: Zap,
    subcategories: [
      { id: 'pln', name: 'PLN Token', products: [{ id: 'pln-50', name: '50k', price: 52000 }, { id: 'pln-100', name: '100k', price: 102000 }] },
      { id: 'pulsa', name: 'Pulsa', products: [{ id: 'pulsa-25', name: '25k', price: 26000 }] },
    ],
  },
]

export default function CategorySection({ onAddToCart }) {
  const [active, setActive] = useState('games')
  const [openSubs, setOpenSubs] = useState({})

  const categories = defaultData

  return (
    <section className="relative py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-100 mb-8">
          Categories
        </h2>

        {/* Category tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {categories.map((c) => {
            const Icon = c.icon
            const isActive = active === c.id
            return (
              <button
                key={c.id}
                onClick={() => setActive(c.id)}
                className={`group relative rounded-3xl p-5 text-left transition-all ${
                  isActive
                    ? 'bg-slate-50 dark:bg-slate-800/70 shadow-[8px_8px_20px_#cbd5e1,-8px_-8px_20px_#ffffff] dark:shadow-[8px_8px_20px_#0b1220,-8px_-8px_20px_#1f2937]'
                    : 'bg-slate-50/70 dark:bg-slate-800/40 shadow-[6px_6px_16px_#cbd5e1aa,-6px_-6px_16px_#ffffff55] dark:shadow-[6px_6px_16px_#0b1220aa,-6px_-6px_16px_#1f293755] hover:scale-[1.01]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-2xl bg-gradient-to-br from-fuchsia-400/30 to-cyan-400/30 text-fuchsia-600 dark:text-cyan-200 shadow-inner">
                    <Icon className="w-6 h-6" />
                  </span>
                  <div>
                    <p className="font-semibold">{c.name}</p>
                    <p className="text-xs text-slate-500">{c.subcategories.length} subcats</p>
                  </div>
                </div>
              </button>
            )
          })}
        </div>

        {/* Subcategories */}
        <div className="space-y-4">
          {categories
            .find((c) => c.id === active)
            ?.subcategories.map((s) => {
              const isOpen = openSubs[s.id]
              return (
                <div key={s.id} className="rounded-3xl p-5 bg-slate-50 dark:bg-slate-800/60 shadow-[8px_8px_20px_#cbd5e1,-8px_-8px_20px_#ffffff] dark:shadow-[8px_8px_20px_#0b1220,-8px_-8px_20px_#1f2937]">
                  <button
                    onClick={() => setOpenSubs((o) => ({ ...o, [s.id]: !o[s.id] }))}
                    className="w-full flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <Folder className="w-5 h-5 text-slate-500" />
                      <span className="font-semibold">{s.name}</span>
                    </div>
                    {isOpen ? <ChevronDown /> : <ChevronRight />}
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
                      >
                        {s.products.map((p) => (
                          <ProductCard key={p.id} product={p} onAdd={() => onAddToCart(p)} />
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
        </div>
      </div>
    </section>
  )
}

function ProductCard({ product, onAdd }) {
  return (
    <div className="group rounded-3xl p-4 bg-slate-50 dark:bg-slate-800/70 shadow-[6px_6px_16px_#cbd5e1,-6px_-6px_16px_#ffffff] dark:shadow-[6px_6px_16px_#0b1220,-6px_-6px_16px_#1f2937] transition hover:scale-[1.01]">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-fuchsia-400 to-cyan-400 p-[2px]">
          <div className="w-full h-full rounded-[1rem] bg-slate-50 dark:bg-slate-900 flex items-center justify-center text-xs font-semibold text-slate-700 dark:text-slate-200">
            IMG
          </div>
        </div>
        <div className="flex-1">
          <p className="font-semibold">{product.name}</p>
          <p className="text-sm text-slate-500">ID / Number</p>
        </div>
        <p className="font-bold text-fuchsia-600 dark:text-cyan-300">Rp {product.price.toLocaleString()}</p>
      </div>

      <div className="mt-3 grid grid-cols-2 gap-2">
        <input placeholder="User / ID" className="col-span-2 rounded-2xl px-4 py-2 bg-slate-100/70 dark:bg-slate-900/60 shadow-inner outline-none focus:ring-2 focus:ring-fuchsia-400/60" />
        <input type="number" defaultValue={1} min={1} className="rounded-2xl px-4 py-2 bg-slate-100/70 dark:bg-slate-900/60 shadow-inner outline-none" />
        <button onClick={onAdd} className="rounded-2xl px-4 py-2 bg-gradient-to-r from-fuchsia-500 to-cyan-400 text-white shadow-lg shadow-fuchsia-500/30">
          Add to Cart
        </button>
      </div>
    </div>
  )
}
