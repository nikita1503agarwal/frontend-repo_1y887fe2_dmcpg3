import { useParams } from 'react-router-dom'
import { getCategory, getSubcategory } from './storeData'
import { motion } from 'framer-motion'
import { ChevronLeft, Plus } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function ProductsPage({ onAdd }) {
  const { categoryId, subId } = useParams()
  const category = getCategory(categoryId)
  const subcat = getSubcategory(categoryId, subId)

  if (!category || !subcat) {
    return (
      <main className="mx-auto max-w-4xl px-4 py-10">
        <p className="text-slate-600 dark:text-slate-300">Products not found.</p>
        <Link className="text-fuchsia-600" to={`/categories/${categoryId}`}>Back</Link>
      </main>
    )
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <div className="mb-6 flex items-center justify-between">
        <Link to={`/categories/${category.id}`} className="inline-flex items-center gap-1 px-3 py-2 rounded-xl bg-white/60 dark:bg-slate-800/60 shadow-inner">
          <ChevronLeft className="h-4 w-4" /> Back
        </Link>
        <h1 className="text-2xl font-semibold tracking-tight">{category.name} / {subcat.name}</h1>
        <div />
      </div>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        {subcat.products.map((p, idx) => (
          <motion.div
            key={p.id}
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: idx * 0.05 }}
            className="rounded-2xl p-5 bg-white/70 dark:bg-slate-900/60 shadow-[inset_2px_2px_8px_rgba(255,255,255,0.5),inset_-6px_-6px_16px_rgba(0,0,0,0.25),0_12px_30px_rgba(99,102,241,0.25)] border border-white/30 dark:border-white/10"
          >
            <div className="aspect-video rounded-xl bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 shadow-inner" />
            <h3 className="mt-4 text-lg font-medium">{p.name}</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">${p.price}</p>
            <div className="mt-4">
              <button
                onClick={() => onAdd?.(p)}
                className="inline-flex items-center gap-1 px-4 py-2 rounded-xl bg-gradient-to-br from-fuchsia-300 to-indigo-300 dark:from-fuchsia-600 dark:to-indigo-700 text-slate-900 dark:text-white shadow-[0_8px_24px_rgba(99,102,241,0.35),inset_2px_2px_8px_rgba(255,255,255,0.5),inset_-6px_-6px_12px_rgba(0,0,0,0.2)]"
              >
                <Plus className="h-4 w-4" /> Add to cart
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  )
}
