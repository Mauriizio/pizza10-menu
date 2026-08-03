import { Info } from 'lucide-react'
import { BusinessDetails } from './components/business/BusinessDetails'
import { ContactActions } from './components/contact/ContactActions'
import { AddOnsSection } from './components/menu/AddOnsSection'
import { CategoryNav } from './components/menu/CategoryNav'
import { MenuSection } from './components/menu/MenuSection'
import { business } from './config/business'
import { products } from './data/menu'

const byCategory = (category: 'pizzas' | 'postres' | 'panaderia') =>
  products.filter((product) => product.category === category)

export default function App() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href="#inicio" aria-label="PIZZA 10, ir al inicio">
            <img src="/images/logotipo.png" alt="Logotipo de PIZZA 10" width="1536" height="1024" />
            <span>
              <strong>PIZZA 10</strong>
              <small>{business.slogan}</small>
            </span>
          </a>
          <a className="info-link" href="#informacion">
            <Info aria-hidden="true" size={20} />
            Ver info
          </a>
        </div>
      </header>

      <main id="inicio">
        <section className="menu-hero" aria-labelledby="page-title">
          <div className="hero-copy">
            <p>Menú</p>
            <h1 id="page-title">Elige tu pizza favorita</h1>
          </div>
        </section>

        <CategoryNav />

        <div className="menu-content">
          <MenuSection id="pizzas" title="Pizzas" intro="Todas nuestras pizzas son de tamaño familiar." products={byCategory('pizzas')} />
          <AddOnsSection />
          <MenuSection id="postres" title="Postres" products={byCategory('postres')} />
          <MenuSection id="panaderia" title="Panadería" products={byCategory('panaderia')} />
        </div>
      </main>

      <footer id="informacion">
        <div className="footer-inner">
          <div>
            <p className="section-kicker">Información</p>
            <h2>Datos de PIZZA 10</h2>
          </div>
          <BusinessDetails />
          <p className="phone-display">Teléfono: {business.phoneDisplay}</p>
        </div>
      </footer>

      <ContactActions />
    </div>
  )
}
