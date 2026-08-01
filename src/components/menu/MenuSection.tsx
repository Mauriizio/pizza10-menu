import type { MenuProduct } from '../../types/menu'
import { ProductCard } from './ProductCard'

export function MenuSection({ id, title, intro, products }: { id: string; title: string; intro: string; products: MenuProduct[] }) {
  return (
    <section className="section-shell scroll-mt-24" id={id} aria-labelledby={`${id}-title`}>
      <div className="mb-7 max-w-2xl">
        <p className="eyebrow">Menú</p>
        <h2 className="section-title" id={`${id}-title`}>{title}</h2>
        <p className="mt-2 text-sm leading-6 text-zinc-400">{intro}</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => <ProductCard product={product} key={product.id} />)}
      </div>
    </section>
  )
}
