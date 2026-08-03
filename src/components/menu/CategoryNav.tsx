import { CakeSlice, CirclePlus, Pizza, Sandwich } from 'lucide-react'
import { categories } from '../../data/menu'

const icons = { pizzas: Pizza, adicionales: CirclePlus, postres: CakeSlice, panaderia: Sandwich }

export function CategoryNav() {
  return (
    <nav className="category-nav" id="categorias" aria-label="Categorías del menú">
      <div>
        {categories.map((category, index) => {
          const Icon = icons[category.id]
          return (
            <a className={index === 0 ? 'active' : ''} href={`#${category.id}`} key={category.id}>
              <Icon aria-hidden="true" size={18} />
              {category.label}
            </a>
          )
        })}
      </div>
    </nav>
  )
}
