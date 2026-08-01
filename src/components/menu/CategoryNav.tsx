import { categories } from '../../data/menu'

export function CategoryNav() {
  return (
    <nav className="sticky top-0 z-30 border-y border-white/8 bg-zinc-950/92 backdrop-blur-xl" aria-label="Categorías del menú">
      <div className="scrollbar-none mx-auto flex max-w-6xl gap-2 overflow-x-auto px-4 py-3 sm:px-6">
        {categories.map((category) => (
          <a className="shrink-0 rounded-full border border-white/10 px-4 py-2.5 text-sm font-bold text-zinc-200 transition hover:border-orange-400/60 hover:bg-orange-500/10 hover:text-orange-200" href={`#${category.id}`} key={category.id}>
            {category.label}
          </a>
        ))}
      </div>
    </nav>
  )
}
