# Reglas permanentes de PIZZA 10

## Stack y alcance

- Usar Vite, React, TypeScript y Tailwind CSS. Lucide React solo para iconos útiles.
- Mantener una aplicación estática, mobile-first y de una sola página.
- No agregar backend, base de datos, autenticación, CMS, carrito, checkout, pagos, gestores de estado ni librerías pesadas.
- No usar imágenes externas ni copiar o publicar el pendón de referencia.

## Arquitectura

- La información comercial se modifica únicamente en `src/config/business.ts`.
- Los productos se modifican en `src/data/menu.ts`; nunca se escriben directamente en JSX.
- Los precios son enteros y se renderizan exclusivamente con `formatPrice` de `src/utils/formatPrice.ts`.
- Mantener separados tipos, datos, configuración, componentes del negocio, menú, contacto y estilos.

## Reglas comerciales

- Deben existir exactamente dos CTA comerciales globales: `Llamar` y `Pedir por WhatsApp`.
- Ambos usan 04125855815 (`tel:+584125855815` y `wa.me/584125855815`).
- No agregar CTA dentro de tarjetas de producto.
- Mostrar precios como `10.000 pesos`: sin `$`, códigos de moneda, comas ni decimales.
- Todas las pizzas son familiares y deben mostrar `Tamaño familiar`.
- Pizza Planeta y Pizza Cósmica tienen precio confirmado de 20.000 pesos; no existen precios pendientes de confirmación.
- Cada adicional cuesta individualmente 3.500 pesos.
- No crear recargos ni variantes de precio para opciones, sabores o rellenos.
- Las categorías son Pizzas, Adicionales, Postres y Panadería. Focaccia pertenece a Panadería.
- El único mensaje de servicio es `Solo pedidos a domicilio y retiro en tienda`.
- Dirección: `Unidad vecinal lote 6 número 6`.
- Horario: `Todos los días de 3:00 PM a 1:00 AM`.

## Calidad

- Conservar HTML semántico, foco visible, contraste suficiente, áreas táctiles cómodas, safe areas y soporte para movimiento reducido.
- Antes de entregar cambios ejecutar `npm run typecheck` y `npm run build`.
- No desplegar, publicar, crear dominios ni generar QR sin solicitud explícita.
