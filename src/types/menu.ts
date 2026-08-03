export type CategoryId = 'pizzas' | 'adicionales' | 'postres' | 'panaderia'

export interface MenuProduct {
  id: string
  name: string
  description?: string
  presentation?: string
  price: number
  category: Exclude<CategoryId, 'adicionales'>
  featured?: boolean
  familySize?: boolean
  optionsLabel?: string
  options?: string[]
  iconSrc?: string
}

export interface MenuCategory {
  id: CategoryId
  label: string
}

export interface AddOnGroup {
  pricePerItem: number
  items: string[]
}
