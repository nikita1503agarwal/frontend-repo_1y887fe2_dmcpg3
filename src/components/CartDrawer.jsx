import { motion, AnimatePresence } from 'framer-motion'
import { Trash2, X } from 'lucide-react'

export default function CartDrawer({ open, onClose, items, onRemove }) {
  const total = items.reduce((a, b) => a + b.price * (b.qty || 1), 0)

  return (
    <AnimatePresence>
      {open && (
        <motion.aside
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', stiffness: 280, damping: 28 }}
          className="fixed top-0 right-0 h-full w-full max-w-md z-50 bg-slate-50/90 dark:bg-slate-900/90 backdrop-blur-xl shadow-2xl"
        >
          <div className="flex items-center justify-between px-6 h-16">
            <h3 className="text-xl font-bold">Your Cart</h3>
            <button onClick={onClose} className="p-2 rounded-xl bg-slate-200/60 dark:bg-slate-800 shadow-inner">
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="px-6 pb-28 overflow-y-auto space-y-3">
            {items.length === 0 && (
              <p className="text-slate-500">Your cart is empty.</p>
            )}
            {items.map((it) => (
              <div key={it.id} className="rounded-2xl p-4 bg-slate-100/70 dark:bg-slate-800/70 shadow-[inset_6px_6px_14px_#0b1220aa, inset_-6px_-6px_14px_#1f293766]">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold">{it.name}</p>
                    <p className="text-sm text-slate-500">Qty {it.qty || 1}</p>
                  </div>
                  <p className="font-bold">Rp {(it.price * (it.qty || 1)).toLocaleString()}</p>
                </div>
                <button onClick={() => onRemove(it.id)} className="mt-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-200/60 dark:bg-slate-700 text-slate-700 dark:text-slate-200">
                  <Trash2 className="w-4 h-4" /> Remove
                </button>
              </div>
            ))}
          </div>
          <div className="absolute bottom-0 inset-x-0 p-6 bg-slate-50/70 dark:bg-slate-900/70 backdrop-blur-md border-t border-white/10">
            <div className="flex items-center justify-between mb-4">
              <span className="text-slate-500">Total</span>
              <span className="text-2xl font-extrabold">Rp {total.toLocaleString()}</span>
            </div>
            <button className="w-full rounded-2xl py-3 bg-gradient-to-r from-fuchsia-500 to-cyan-400 text-white font-semibold shadow-lg">
              Checkout
            </button>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  )
}
