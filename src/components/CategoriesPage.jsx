import { Link } from 'react-router-dom'
import { storeData } from './storeData'
import { motion } from 'framer-motion'
import { Grid3X3, ChevronRight } from 'lucide-react'

export default function CategoriesPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold tracking-tight flex items-center gap-2">
          <Grid3X3 className="h-6 w-6 text-fuchsia-500" /> Categories
        </h1>
        <p className="text-slate-600 dark:text-slate-300 mt-2">Browse all product families with a soft, retro vibe.</p>
      </div>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        {storeData.map((cat, idx) => (
          <motion.div
            key={cat.id}
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: idx * 0.05 }}
            className="rounded-2xl p-5 bg-white/70 dark:bg-slate-900/60 shadow-[inset_2px_2px_8px_rgba(255,255,255,0.5),inset_-6px_-6px_16px_rgba(0,0,0,0.25),0_12px_30px_rgba(99,102,241,0.25)] border border-white/30 dark:border-white/10"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-xl font-medium">{cat.name}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{cat.blurb}</p>
              </div>
            </div>
            <div className="mt-5 flex justify-end">
              <Link
                to={`/categories/${cat.id}`}
                className="inline-flex items-center gap-1 px-4 py-2 rounded-xl bg-gradient-to-br from-fuchsia-300 to-indigo-300 dark:from-fuchsia-600 dark:to-indigo-700 text-slate-900 dark:text-white shadow-[0_8px_24px_rgba(99,102,241,0.35),inset_2px_2px_8px_rgba(255,255,255,0.5),inset_-6px_-6px_12px_rgba(0,0,0,0.2)]"
              >
                Explore <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  )
}
