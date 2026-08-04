import { Clock3, MapPin, Phone, ShoppingBag } from 'lucide-react'
import { business, phoneUrl } from '../../config/business'

const details = [
  { icon: MapPin, label: 'Dirección', value: business.address },
  { icon: Clock3, label: 'Horario', value: business.hours },
  { icon: ShoppingBag, label: 'Servicio', value: business.service },
  { icon: Phone, label: 'Teléfono', value: business.phoneDisplay, href: phoneUrl },
]

export function BusinessDetails() {
  return (
    <dl className="business-details">
      {details.map(({ icon: Icon, label, value, href }) => (
        <div key={label}>
          <Icon aria-hidden="true" size={19} />
          <span>
            <dt>{label}</dt>
            <dd>{href ? <a href={href}>{value}</a> : value}</dd>
          </span>
        </div>
      ))}
    </dl>
  )
}
