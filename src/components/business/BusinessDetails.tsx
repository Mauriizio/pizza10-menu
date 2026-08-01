import { Clock3, MapPin, ShoppingBag } from 'lucide-react'
import { business } from '../../config/business'

export function BusinessDetails({ compact = false }: { compact?: boolean }) {
  const details = [
    { icon: MapPin, label: 'Dirección', value: business.address },
    { icon: Clock3, label: 'Horario', value: business.hours },
    { icon: ShoppingBag, label: 'Servicio', value: business.service },
  ]

  return (
    <dl className={compact ? 'grid gap-4 md:grid-cols-3' : 'grid gap-3'}>
      {details.map(({ icon: Icon, label, value }) => (
        <div className="flex items-start gap-3" key={label}>
          <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-full bg-orange-500/12 text-orange-300">
            <Icon aria-hidden="true" size={18} />
          </span>
          <div>
            <dt className="text-xs font-bold uppercase tracking-[0.12em] text-zinc-400">{label}</dt>
            <dd className="mt-0.5 text-sm leading-6 text-zinc-100">{value}</dd>
          </div>
        </div>
      ))}
    </dl>
  )
}
