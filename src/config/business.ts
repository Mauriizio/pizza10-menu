export const business = {
  name: 'PIZZA 10',
  slogan: '¡Sabor de otro planeta!',
  phoneDisplay: '04125855815',
  phoneInternational: '584125855815',
  address: 'Unidad vecinal lote 6 número 6',
  hours: 'Todos los días de 3:00 PM a 1:00 AM',
  service: 'Solo pedidos a domicilio y retiro en tienda',
  whatsappMessage: 'Hola, vengo del menú web de PIZZA 10 y quiero realizar un pedido.',
} as const

export const phoneUrl = `tel:+${business.phoneInternational}`
export const whatsappUrl = `https://wa.me/${business.phoneInternational}?text=${encodeURIComponent(business.whatsappMessage)}`
