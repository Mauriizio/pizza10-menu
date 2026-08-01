import type { MenuProduct } from '../../types/menu'
import { formatPrice } from '../../utils/formatPrice'

export function ProductCard({ product }: { product: MenuProduct }) {
  return (
    <article className={`product-card ${product.featured ? 'featured-card' : ''}`}>
      <div className="flex items-start justify-between gap-3">
        <div>
          {product.featured && <p className="eyebrow mb-2">Especial de la casa</p>}
          <h3 className="text-xl font-black tracking-tight text-white">{product.name}</h3>
        </div>
        {product.priceVerificationRequired && <span className="verification-badge">Precio por confirmar</span>}
      </div>
      {product.familySize && <p className="mt-2 text-xs font-bold uppercase tracking-[0.12em] text-amber-300">Tamaño familiar</p>}
      {product.description && <p className="mt-3 text-sm leading-6 text-zinc-300">{product.description}</p>}
      {product.presentation && (
        <p className="mt-3 text-sm leading-6 text-zinc-300">
          <span className="font-bold text-zinc-100">Presentación:</span> {product.presentation}
        </p>
      )}
      {product.options && (
        <p className="mt-3 text-sm leading-6 text-zinc-300">
          <span className="font-bold text-zinc-100">{product.optionsLabel}:</span> {product.options.join(', ')}.
        </p>
      )}
      <p className="mt-5 text-xl font-black text-orange-300">{formatPrice(product.price)}</p>
    </article>
  )
}
