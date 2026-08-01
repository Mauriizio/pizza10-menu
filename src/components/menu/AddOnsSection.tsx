import { addOns } from '../../data/menu'
import { formatPrice } from '../../utils/formatPrice'

export function AddOnsSection() {
  return (
    <section className="section-shell scroll-mt-24" id="adicionales" aria-labelledby="adicionales-title">
      <div className="rounded-3xl border border-lime-400/20 bg-lime-400/[0.045] p-5 sm:p-7">
        <p className="eyebrow text-lime-300">Para completar tu pizza</p>
        <div className="mt-2 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="section-title mt-0" id="adicionales-title">Adicionales</h2>
          <p className="text-lg font-black text-lime-300">Cada adicional: {formatPrice(addOns.pricePerItem)}</p>
        </div>
        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Adicionales disponibles">
          {addOns.items.map((item) => <li className="rounded-full border border-white/10 bg-zinc-950/60 px-4 py-2 text-sm font-semibold text-zinc-200" key={item}>{item}</li>)}
        </ul>
      </div>
    </section>
  )
}
