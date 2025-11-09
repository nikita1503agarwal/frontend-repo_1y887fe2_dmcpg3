export default function FooterRetro() {
  return (
    <footer className="relative mt-20">
      <div className="absolute -inset-x-10 -top-8 h-24 bg-gradient-to-r from-fuchsia-500/20 via-cyan-400/20 to-emerald-400/20 blur-2xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 py-12 rounded-t-[2rem] bg-slate-50 dark:bg-slate-900 shadow-[0_-10px_30px_rgba(0,0,0,0.1)]">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
          <div>
            <p className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 to-cyan-400">Digital Store Hub</p>
            <p className="text-slate-500 mt-2">Top-ups, subscriptions, data, PPOB — all in one nostalgic hub.</p>
          </div>
          <div className="text-sm text-slate-500">
            <p>Contact: hello@digitalhub.example</p>
            <p className="mt-1">© {new Date().getFullYear()} Digital Store Hub</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
