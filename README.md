# PIZZA 10 — menú web

Primera versión funcional del menú de PIZZA 10, optimizada para móviles y acceso mediante QR.

## Requisitos

- Node.js 22.12 o superior (Vite 8 requiere Node 20.19+ o 22.12+)
- npm 10 o superior

## Instalación y ejecución

```bash
npm install
npm run dev
```

Vite mostrará la URL local, normalmente `http://localhost:5173`.

Para comprobar tipos y crear un build de producción:

```bash
npm run typecheck
npm run build
```

El resultado queda en `dist/`. Puede revisarse con `npm run preview`.

## Estructura

```text
src/
  components/
    business/   Información del negocio
    contact/    CTA de llamada y WhatsApp
    menu/       Navegación, secciones y tarjetas
  config/       Configuración comercial central
  data/         Productos y categorías
  styles/       Estilos generales
  types/        Modelos TypeScript
  utils/        Formato central de precios
```

## Cómo actualizar contenido

- **Productos, descripciones y precios:** `src/data/menu.ts`.
- **Dirección, horario y servicio:** `src/config/business.ts`.
- **Teléfono:** cambia `phoneDisplay` y `phoneInternational` en `src/config/business.ts`. Las URLs de llamada y WhatsApp se reconstruyen automáticamente.
- **Mensaje de WhatsApp:** cambia `whatsappMessage` en `src/config/business.ts`. `encodeURIComponent` se encarga de codificarlo en la URL.

Los precios deben seguir siendo números enteros. No añadas puntos o símbolos al dato: `price: 10000` se presenta automáticamente como `10.000 pesos`.

## Despliegue futuro en Vercel

Cuando se autorice, importa el repositorio en Vercel. El framework debería detectarse como Vite, el comando de build será `npm run build` y el directorio de salida `dist`. No se requieren variables de entorno para esta versión. Después de contar con una URL definitiva se podrá generar el QR por separado.

## Recursos visuales y optimización

Los PNG públicos se encuentran en `public/images/` y Vite los copia sin modificaciones a `dist/images/`. Para esta primera versión se conservan los PNG originales. Antes del lanzamiento definitivo mediante QR conviene generar alternativas WebP o AVIF y servirlas con fallback PNG para reducir la transferencia en redes móviles.

## Datos confirmados

- Pizza Planeta cuesta 20.000 pesos.
- Pizza Cósmica cuesta 20.000 pesos.
- No existen precios pendientes de confirmación.
