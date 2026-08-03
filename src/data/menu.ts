import type { AddOnGroup, MenuCategory, MenuProduct } from '../types/menu'

export const categories: MenuCategory[] = [
  { id: 'pizzas', label: 'Pizzas' },
  { id: 'adicionales', label: 'Adicionales' },
  { id: 'postres', label: 'Postres' },
  { id: 'panaderia', label: 'Panadería' },
]

export const products: MenuProduct[] = [
  { id: 'pizza-10', name: 'Pizza 10', description: 'Base de pizza italiana con salsa napolitana, peperoni, mozzarella y orégano.', price: 10000, category: 'pizzas', featured: true, familySize: true, iconSrc: '/images/menu-icons/1-pizza-10.png' },
  { id: 'pizza-sideral', name: 'Pizza Sideral', description: 'Base de pizza italiana con pollo a la bechamel, mozzarella, orégano y maíz.', price: 25000, category: 'pizzas', familySize: true, iconSrc: '/images/menu-icons/2-pizza-sideral.png' },
  { id: 'pizza-planeta', name: 'Pizza Planeta', description: 'Base de pizza italiana con mozzarella, orégano, peperoni y bordes rellenos de queso derretido.', price: 20000, category: 'pizzas', familySize: true, iconSrc: '/images/menu-icons/3-pizza-planeta.png' },
  { id: 'pizza-cosmica', name: 'Pizza Cósmica', description: 'Base de pizza italiana con salsa agridulce, pollo, maíz, orégano y mozzarella.', price: 20000, category: 'pizzas', familySize: true, iconSrc: '/images/menu-icons/4-pizza-cosmica.png' },
  { id: 'pizza-platillo', name: 'Pizza Platillo', description: 'Base de pizza italiana con salsa bechamel, pollo, maíz, mozzarella, orégano y borde relleno de queso.', price: 25000, category: 'pizzas', familySize: true, iconSrc: '/images/menu-icons/5-pizza-platillo.png' },
  { id: 'pizza-big-bang', name: 'Pizza Big Bang', description: 'Base de pizza italiana con pollo, salsa dulce de la casa, mozzarella, champiñón, maíz y orégano.', price: 30000, category: 'pizzas', familySize: true, iconSrc: '/images/menu-icons/6-pizza-bigbang.png' },
  { id: 'pizza-saturno', name: 'Pizza Saturno', description: 'Base de pizza italiana, mozzarella, guayaba y borde relleno de guayaba y queso.', price: 25000, category: 'pizzas', familySize: true, iconSrc: '/images/menu-icons/7-pizza-saturno.png' },
  { id: 'pizzalate', name: 'Pizzalate', description: 'Base de pizza italiana con chocolate, trozos de galleta y caramelo, con borde relleno de Nutella o chocolate.', price: 30000, category: 'pizzas', familySize: true, iconSrc: '/images/menu-icons/8-pizzalate.png' },
  { id: 'pizza-estrella', name: 'Pizza Estrella', description: 'Base de pizza italiana con salsa de la casa, maíz, piña y mozzarella.', price: 20000, category: 'pizzas', familySize: true, iconSrc: '/images/menu-icons/9-pizza-estrella.png' },
  { id: 'croissant', name: 'Croissant', price: 7500, category: 'postres', optionsLabel: 'Opciones', options: ['Chocolate', 'Nutella', 'Arequipe', 'Frutos secos', 'Explosión de frutas'] },
  { id: 'pie-frito', name: 'Pie frito', presentation: 'Caja de 5 unidades', price: 25000, category: 'postres', optionsLabel: 'Sabores', options: ['Manzana', 'Caramelo', 'Chocolate', 'Fresa', 'Piña', 'Mora', 'Parchita'] },
  { id: 'american-roll', name: 'American Roll', presentation: 'Caja de 5 unidades', price: 25000, category: 'postres', optionsLabel: 'Opciones', options: ['Chocolate', 'Frutas', 'Nutella', 'Arequipe', 'Galletas', 'Frutos secos'] },
  { id: 'galletas-rellenas', name: 'Galletas rellenas', presentation: 'Caja de 10 unidades', price: 30000, category: 'postres', optionsLabel: 'Sabores', options: ['Chocolate', 'Piña', 'Arequipe', 'Dulce de leche', 'Nutella', 'Coco'] },
  { id: 'focaccia', name: 'Focaccia', price: 10000, category: 'panaderia', optionsLabel: 'Opciones', options: ['Aceitunas', 'Queso', 'Mozzarella', 'Maíz', 'Pollo', 'Vegetales'] },
  { id: 'hogaza', name: 'Hogaza', price: 15000, category: 'panaderia', optionsLabel: 'Opciones', options: ['Aceitunas', 'Queso', 'Cebolla', 'Semillas', 'Frutos secos', 'Integral'] },
  { id: 'pan-chocolate-frances', name: 'Pan de chocolate francés', price: 5000, category: 'panaderia' },
  { id: 'pan-chocolate-chispas', name: 'Pan de chocolate y chispas en masa dulce', presentation: 'Caja de 10 unidades', price: 15000, category: 'panaderia' },
]

export const addOns: AddOnGroup = {
  pricePerItem: 3500,
  items: ['Salami', 'Pimentón', 'Aceitunas', 'Champiñón'],
}
