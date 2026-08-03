import { addOns } from '../../data/menu'
import { formatPrice } from '../../utils/formatPrice'

export function AddOnsSection() {
  return (
    <section className="menu-section add-ons" id="adicionales" aria-labelledby="adicionales-title">
      <header className="section-heading">
        <p className="section-kicker">Para tu pizza</p>
        <div>
          <h2 id="adicionales-title">Adicionales</h2>
          <p>Cada adicional cuesta individualmente {formatPrice(addOns.pricePerItem)}.</p>
        </div>
      </header>
      <ul aria-label="Adicionales disponibles">
        {addOns.items.map((item) => <li key={item}>{item}<strong>{formatPrice(addOns.pricePerItem)}</strong></li>)}
      </ul>
    </section>
  )
}
