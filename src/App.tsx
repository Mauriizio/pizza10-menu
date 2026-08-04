import { BusinessDetails } from './components/business/BusinessDetails'
import { BusinessTicker } from './components/business/BusinessTicker'
import { ContactActions } from './components/contact/ContactActions'
import { AddOnsSection } from './components/menu/AddOnsSection'
import { CategoryNav } from './components/menu/CategoryNav'
import { MenuSection } from './components/menu/MenuSection'
import { products } from './data/menu'

const byCategory = (category: 'pizzas' | 'postres' | 'panaderia') =>
  products.filter((product) => product.category === category)

export default function App() {
  return (
    <div className="site-shell">
      <BusinessTicker />
      <header className="site-header">
        <img className="header-logo" src="/images/logo-con-slogan.png" alt="PIZZA 10 — Sabor de otro planeta" width="1536" height="1024" />
      </header>

      <main id="inicio">
        <section className="menu-hero" aria-labelledby="page-title">
          <div className="hero-copy">
            <h1 id="page-title">PIZZA 10</h1>
            <p>Menú</p>
            <span>Elige tu pizza favorita</span>
          </div>
        </section>

        <CategoryNav />

        <div className="menu-content">
          <MenuSection id="pizzas" title="Pizzas" intro="Todas nuestras pizzas son de tamaño familiar." products={byCategory('pizzas')} />
          <AddOnsSection />
          <div className="lower-menu-grid">
            <MenuSection id="postres" title="Postres" products={byCategory('postres')} />
            <MenuSection id="panaderia" title="Panadería" products={byCategory('panaderia')} />
          </div>
        </div>
      </main>

      <section className="business-info-footer" id="informacion" aria-labelledby="business-info-title">
        <div className="footer-inner">
          <div>
            <p className="section-kicker">Información</p>
            <h2 id="business-info-title">Datos de PIZZA 10</h2>
          </div>
          <BusinessDetails />
        </div>
      </section>

      <footer className="signature-footer">
        Web hecha por <a href="https://maurizio.dev/" target="_blank" rel="noopener noreferrer">Maurizio Caballero</a>
      </footer>

      <ContactActions />
    </div>
  )
}
