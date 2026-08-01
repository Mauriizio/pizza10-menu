import { BusinessDetails } from './components/business/BusinessDetails'
import { ContactActions } from './components/contact/ContactActions'
import { AddOnsSection } from './components/menu/AddOnsSection'
import { CategoryNav } from './components/menu/CategoryNav'
import { MenuSection } from './components/menu/MenuSection'
import { business } from './config/business'
import { products } from './data/menu'

const byCategory = (category: 'pizzas' | 'postres' | 'panaderia') => products.filter((product) => product.category === category)

export default function App() {
  return (
    <div className="min-h-screen overflow-hidden">
      <header className="hero relative">
        <div className="relative mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 sm:py-14 md:grid-cols-[1.2fr_0.8fr] md:items-center lg:py-20">
          <div>
            <p className="eyebrow">Menú · Tamaño familiar</p>
            <h1 className="sr-only">PIZZA 10</h1>
            <img className="brand-logo mt-3" src="/images/logotipo.png" alt="PIZZA 10" width="1536" height="1024" />
            <p className="mt-2 text-xl font-extrabold text-amber-300 sm:text-2xl">{business.slogan}</p>
            <p className="mt-4 max-w-xl text-base leading-7 text-zinc-300">Sabores abundantes, ingredientes irresistibles y una misión clara: llevar una gran pizza hasta tu mesa.</p>
            <div className="mt-7"><ContactActions /></div>
          </div>
          <div className="glass-panel"><BusinessDetails /></div>
        </div>
      </header>

      <CategoryNav />

      <main>
        <MenuSection id="pizzas" title="Pizzas familiares" intro="Todas nuestras pizzas se preparan en tamaño familiar." products={byCategory('pizzas')} />
        <AddOnsSection />
        <MenuSection id="postres" title="Postres" intro="Opciones dulces para cerrar el viaje." products={byCategory('postres')} />
        <MenuSection id="panaderia" title="Panadería" intro="Preparaciones horneadas y artesanales." products={byCategory('panaderia')} />
      </main>

      <footer className="border-t border-white/8 bg-black/30">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 md:py-14">
          <p className="eyebrow">Información del negocio</p>
          <h2 className="mb-7 mt-2 text-2xl font-black text-white">Estamos listos para recibir tu pedido</h2>
          <BusinessDetails compact />
          <p className="mt-8 text-sm text-zinc-500">© {new Date().getFullYear()} {business.name}</p>
        </div>
      </footer>

      <ContactActions mobileBar />
    </div>
  )
}
