import { MessageCircle, Phone } from 'lucide-react'
import { phoneUrl, whatsappUrl } from '../../config/business'

export function ContactActions({ mobileBar = false }: { mobileBar?: boolean }) {
  return (
    <div className={mobileBar ? 'contact-bar md:hidden' : 'hidden gap-3 md:flex'} aria-label="Acciones de contacto">
      <a className="button button-secondary" href={phoneUrl} aria-label="Llamar a PIZZA 10">
        <Phone aria-hidden="true" size={19} />
        Llamar
      </a>
      <a className="button button-primary" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Pedir por WhatsApp">
        <MessageCircle aria-hidden="true" size={20} />
        Pedir por WhatsApp
      </a>
    </div>
  )
}
