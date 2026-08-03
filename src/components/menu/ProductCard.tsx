import type { MenuProduct } from '../../types/menu'
import { formatPrice } from '../../utils/formatPrice'

export function ProductCard({ product }: { product: MenuProduct }) {
  return (
    <article className={`product-row ${product.featured ? 'featured-product' : ''}`}>
      {product.iconSrc ? (
        <span className="product-icon">
          <img src={product.iconSrc} alt="" width="128" height="128" loading={product.featured ? 'eager' : 'lazy'} decoding="async" />
        </span>
      ) : null}
      <div className="product-copy">
        {product.featured ? <p className="house-special">Especial de la casa</p> : null}
        <div className="product-heading">
          <h3>{product.name}</h3>
          <span aria-hidden="true" />
          <p className="price">{formatPrice(product.price)}</p>
        </div>
        {product.familySize ? <p className="family-label">Tamaño familiar</p> : null}
        {product.description ? <p className="description">{product.description}</p> : null}
        {product.presentation ? <p className="detail"><strong>Presentación:</strong> {product.presentation}</p> : null}
        {product.options ? <p className="detail"><strong>{product.optionsLabel}:</strong> {product.options.join(', ')}.</p> : null}
      </div>
    </article>
  )
}
