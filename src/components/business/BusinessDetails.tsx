import { Clock3, MapPin, ShoppingBag } from 'lucide-react'
import { business } from '../../config/business'

const details = [
  { icon: MapPin, label: 'Dirección', value: business.address },
  { icon: Clock3, label: 'Horario', value: business.hours },
  { icon: ShoppingBag, label: 'Servicio', value: business.service },
]

export function BusinessDetails() {
  return (
    <dl className="business-details">
      {details.map(({ icon: Icon, label, value }) => (
        <div key={label}>
          <Icon aria-hidden="true" size={19} />
          <span>
            <dt>{label}</dt>
            <dd>{value}</dd>
          </span>
        </div>
      ))}
    </dl>
  )
}
