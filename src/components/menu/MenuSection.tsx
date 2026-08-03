import type { MenuProduct } from '../../types/menu'
import { ProductCard } from './ProductCard'

export function MenuSection({ id, title, intro, products }: { id: string; title: string; intro?: string; products: MenuProduct[] }) {
  return (
    <section className="menu-section" id={id} aria-labelledby={`${id}-title`}>
      <header className="section-heading">
        <p className="section-kicker">Menú</p>
        <div>
          <h2 id={`${id}-title`}>{title}</h2>
          {intro ? <p>{intro}</p> : null}
        </div>
      </header>
      <div className="product-list">
        {products.map((product) => <ProductCard product={product} key={product.id} />)}
      </div>
    </section>
  )
}
