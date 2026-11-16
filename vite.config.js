import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Public URL of the site. Social previews (WhatsApp, etc.) need absolute image URLs.
// Set SITE_URL in the hosting build settings, e.g. SITE_URL=https://tudominio.com
// Without it, the deployment URL of Cloudflare Pages / Netlify / Vercel is used when available.
const siteUrl = (
  process.env.SITE_URL ||
  process.env.CF_PAGES_URL ||
  (process.env.NETLIFY && process.env.URL) ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL && `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`) ||
  ''
).replace(/\/$/, '')

const PRELOAD_FONTS = /(archivo-latin-wdth-normal|chivo-mono-latin-wght-normal)[^/]*\.woff2$/

function seo() {
  return {
    name: 'adurix-seo',
    transformIndexHtml: {
      order: 'post',
      handler(html, ctx) {
        const tags = []

        // Preload the two main font files so headlines never flash in a fallback face.
        for (const file of Object.keys(ctx.bundle ?? {})) {
          if (PRELOAD_FONTS.test(file)) {
            tags.push({
              tag: 'link',
              attrs: { rel: 'preload', as: 'font', type: 'font/woff2', href: `/${file}`, crossorigin: true },
              injectTo: 'head',
            })
          }
        }

        if (siteUrl) {
          html = html.replaceAll('content="/og.jpg"', `content="${siteUrl}/og.jpg"`)
        }
        // Canonical only when the final domain was set explicitly.
        if (process.env.SITE_URL) {
          tags.push({ tag: 'link', attrs: { rel: 'canonical', href: `${siteUrl}/` }, injectTo: 'head' })
          tags.push({ tag: 'meta', attrs: { property: 'og:url', content: `${siteUrl}/` }, injectTo: 'head' })
        }

        tags.push({
          tag: 'script',
          attrs: { type: 'application/ld+json' },
          children: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ProfessionalService',
            name: 'ADURIX',
            alternateName: 'ADURIX · Creative Dev Studio',
            description:
              'Estudio de diseño y desarrollo web: tiendas online, sistemas de pedidos para gastronomía, sitios corporativos y software a medida.',
            telephone: '+5493517705849',
            address: { '@type': 'PostalAddress', addressLocality: 'Córdoba', addressCountry: 'AR' },
            areaServed: ['AR', 'Worldwide'],
            availableLanguage: ['es', 'en'],
            ...(siteUrl && { url: `${siteUrl}/`, image: `${siteUrl}/og.jpg`, logo: `${siteUrl}/icon-512.png` }),
          }),
          injectTo: 'head',
        })

        return { html, tags }
      },
    },
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), seo()],
})
