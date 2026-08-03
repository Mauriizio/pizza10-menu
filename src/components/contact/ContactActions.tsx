import { MessageCircle, Phone } from 'lucide-react'
import { phoneUrl, whatsappUrl } from '../../config/business'

export function ContactActions() {
  return (
    <aside className="contact-bar" aria-label="Acciones de contacto">
      <a className="call-action" href={phoneUrl} aria-label="Llamar a PIZZA 10">
        <Phone aria-hidden="true" size={21} />
        Llamar
      </a>
      <a className="whatsapp-action" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Pedir por WhatsApp">
        <MessageCircle aria-hidden="true" size={22} />
        Pedir por WhatsApp
      </a>
    </aside>
  )
}
