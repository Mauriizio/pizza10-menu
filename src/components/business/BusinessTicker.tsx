import { business } from '../../config/business'

const tickerItems = [
  { label: 'DIRECCIÓN', value: business.address },
  { label: 'HORARIO', value: business.hours },
  { label: 'SERVICIO', value: business.service },
]

function TickerSequence({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <span className="ticker-sequence" aria-hidden={duplicate ? 'true' : undefined}>
      {tickerItems.map((item) => (
        <span className="ticker-item" key={item.label}>
          <span className="ticker-label">{item.label}:</span>{' '}
          <span>{item.value}</span>
          <span className="ticker-separator" aria-hidden="true">•</span>
        </span>
      ))}
    </span>
  )
}

export function BusinessTicker() {
  return (
    <aside className="business-ticker" aria-label="Información del negocio">
      <div className="ticker-track">
        <TickerSequence />
        <TickerSequence duplicate />
      </div>
    </aside>
  )
}
