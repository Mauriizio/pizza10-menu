export function formatPrice(price: number): string {
  if (!Number.isInteger(price) || price < 0) {
    throw new Error('El precio debe ser un número entero positivo.')
  }

  return `${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')} pesos`
}
