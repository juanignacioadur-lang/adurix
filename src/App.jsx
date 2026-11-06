import React, { useState } from 'react';
import {
  Code2, Globe, ArrowUpRight, Sparkles, CheckCircle2,
  ShoppingBag, Utensils, Calendar, Layers, Cpu, Zap,
  ShieldCheck, MessageCircle, Star, Terminal, Smartphone,
  Briefcase, Send, Menu, X, ChevronRight, ExternalLink
} from 'lucide-react';

const WHATSAPP_NUMBER = '5493517705849';

const CONTENT = {
  es: {
    nav: {
      work: 'Proyectos',
      services: 'Soluciones',
      experience: 'Trayectoria',
      reviews: 'Referencias',
      quote: 'Cotizar Proyecto',
      cta: 'Hablemos'
    },
    hero: {
      badge: 'DISPONIBLE PARA NUEVOS PROYECTOS · ARGENTINA & GLOBAL',
      title1: 'INGENIERÍA WEB',
      title2: '& DISEÑO DIGITAL',
      title3: 'QUE VENDE 24/7.',
      subtitle:
        'En ADURIX diseñamos y programamos plataformas web ultra-rápidas, tiendas E-Commerce, sistemas gastronómicos autogestionables y software a medida. Sin plantillas lentas ni comisiones mensuales.',
      ctaPrimary: 'Explorar Portfolio en Vivo',
      ctaSecondary: 'Cotizar por WhatsApp',
      stats: [
        { value: '+35', label: 'Proyectos Desplegados' },
        { value: '< 0.6s', label: 'Tiempo de Carga Edge' },
        { value: '100%', label: 'Código a Medida & Escalable' },
        { value: '24/7', label: 'Infraestructura Cloud' }
      ]
    },
    portfolio: {
      eyebrow: 'CASOS DE ÉXITO & DESARROLLOS',
      title: 'PROYECTOS REALES EN PRODUCCIÓN',
      subtitle: 'Hacé clic en cualquiera de nuestros desarrollos destacados para probar su velocidad, diseño e interactividad en tiempo real.',
      liveBtn: 'Visitar Sitio en Vivo',
      caseBtn: 'Arquitectura Verificada',
      items: [
        {
          title: 'Santos Food Club',
          category: 'Gastronomía · Web App & Panel Admin',
          url: 'https://santos-web.pages.dev',
          isLive: true,
          badge: 'Caso Destacado',
          description:
            'Plataforma integral de pedidos online con estética Retro Diner. Incluye personalizador de adicionales, cálculo por zonas, pago por transferencia con copia en 1 clic, envío de comanda estructurada a WhatsApp y Panel de Administración en la nube (stock, precios, secciones y doble turno horario en vivo).',
          stack: ['React 19', 'Supabase Cloud', 'Tailwind CSS', 'WhatsApp API', 'Cloudflare Edge'],
          accent: 'from-emerald-500/20 to-amber-500/10 border-emerald-500/30',
          previewBg: 'bg-[#083821]',
          previewTitle: 'SANTOS',
          previewSub: 'LOMITERÍA & FOOD CLUB'
        },
        {
          title: 'Cosquín Joven Producciones',
          category: 'Eventos & Entretenimiento · Plataforma Oficial',
          url: 'https://cosquinjovenproducciones.com',
          isLive: true,
          badge: 'Sitio Oficial .COM',
          description:
            'Plataforma institucional y centro de información para productora nacional de eventos y espectáculos artísticos. Optimizada para alto tráfico simultáneo desde móviles, cronogramas, convocatorias y contacto directo.',
          stack: ['React', 'Vite', 'Responsive UI', 'SEO Avanzado', 'SSL / CDN Global'],
          accent: 'from-purple-500/20 to-pink-500/10 border-purple-500/30',
          previewBg: 'bg-gradient-to-br from-indigo-950 to-purple-950',
          previewTitle: 'COSQUÍN JOVEN',
          previewSub: 'PRODUCCIONES'
        },
        {
          title: 'Mundo Xbox Store',
          category: 'E-Commerce Gaming · Catálogo Digital',
          url: 'https://mundoxbox.store',
          isLive: true,
          badge: 'Tienda .STORE',
          description:
            'Tienda online de videojuegos y membresías digitales con filtros instantáneos, buscador en tiempo real, carrito persistente y flujo de compra automatizado para maximizar la conversión en redes sociales.',
          stack: ['React', 'E-Commerce Engine', 'Dark UI', 'Dynamic Filtering', 'Checkout Directo'],
          accent: 'from-lime-500/20 to-emerald-500/10 border-lime-500/30',
          previewBg: 'bg-gradient-to-br from-zinc-900 via-emerald-950 to-black',
          previewTitle: 'MUNDO XBOX',
          previewSub: 'DIGITAL STORE'
        },
        {
          title: 'NovaMed · Turnos & Clínicas',
          category: 'Salud & Servicios · Sistema de Reservas',
          url: null,
          isLive: false,
          badge: 'Sistema Interno',
          description:
            'Agenda digital autogestionable para centros médicos, barberías y estudios profesionales. Confirmación automática por WhatsApp, bloqueo de feriados y panel de profesionales.',
          stack: ['React', 'PostgreSQL', 'Calendario Real-Time', 'Recordatorios'],
          accent: 'from-sky-500/20 to-blue-500/10 border-sky-500/30',
          previewBg: 'bg-gradient-to-br from-slate-900 to-sky-950',
          previewTitle: 'NOVAMED',
          previewSub: 'BOOKING SYSTEM'
        },
        {
          title: 'Altura Real Estate',
          category: 'Inmobiliaria & Desarrollos · Portal Catálogo',
          url: null,
          isLive: false,
          badge: 'B2B / Portal',
          description:
            'Catálogo de propiedades con filtro por ubicación, moneda (USD/ARS), galería de alta resolución ultra-comprimida, mapa interactivo y derivación directa a cada agente comercial.',
          stack: ['Next / React', 'Filtros Multicriterio', 'Galería HD', 'Lead Capture'],
          accent: 'from-amber-500/20 to-orange-500/10 border-amber-500/30',
          previewBg: 'bg-gradient-to-br from-neutral-900 to-stone-900',
          previewTitle: 'ALTURA',
          previewSub: 'REAL ESTATE'
        },
        {
          title: 'Kinetix Gym & Fitness Club',
          category: 'Deporte & Membresías · Landing + Planes',
          url: null,
          isLive: false,
          badge: 'Alta Conversión',
          description:
            'Landing page de alto impacto visual con comparador de pases mensuales, grillas de horarios por sede y alta de socios directo por transferencia.',
          stack: ['Motion UI', 'Mobile-First', 'Conversion Funnel', 'Panel dePlanes'],
          accent: 'from-rose-500/20 to-red-500/10 border-rose-500/30',
          previewBg: 'bg-gradient-to-br from-zinc-950 to-rose-950',
          previewTitle: 'KINETIX',
          previewSub: 'FITNESS CLUB'
        }
      ]
    },
    services: {
      eyebrow: '¿QUÉ PODEMOS CONSTRUIR JUNTOS?',
      title: 'SOLUCIONES DIGITALES A MEDIDA',
      subtitle: 'Desde una página institucional que posicione tu marca hasta un sistema completo con base de datos en la nube.',
      cards: [
        {
          icon: Utensils,
          title: 'Sistemas Gastronómicos & Comandas',
          priceTag: '0% Comisión por venta',
          desc: 'Tu propio sistema de pedidos online para restaurantes, lomiterías, pizzerías, bares y dark kitchens. El cliente elige platos y adicionales, transfiere a tu Alias y recibís la comanda perfecta en WhatsApp.',
          features: [
            'Panel Admin para pausar stock y cambiar precios en 1 clic',
            'Personalizador de ingredientes y extras por plato',
            'Cálculo de envío y horarios de doble turno automáticos',
            'Pago directo a tu cuenta bancaria / Mercado Pago'
          ]
        },
        {
          icon: ShoppingBag,
          title: 'Tiendas E-Commerce & Catálogos',
          priceTag: 'Ventas Automatizadas',
          desc: 'Tiendas online veloces para marcas de indumentaria, tecnología, gaming, distribuidoras mayoristas y comercios que quieren vender sin depender de responder cada precio por privado.',
          features: [
            'Catálogo autogestionable con buscador y filtros por categoría',
            'Carrito de compras persistente y descuentos por oferta',
            'Diseño adaptado 100% a iPhone, Android y Desktop',
            'Integración con WhatsApp y medios de pago'
          ]
        },
        {
          icon: Globe,
          title: 'Webs Corporativas, Eventos & Landings',
          priceTag: 'Presencia Oficial',
          desc: 'Sitios institucionales de alto impacto para productoras de eventos, empresas, profesionales, inmobiliarias, gimnasios y marcas que buscan autoridad, velocidad y posicionamiento en Google.',
          features: [
            'Diseño UI/UX exclusivo alineado a la identidad de tu marca',
            'Optimización SEO técnico para aparecer en Google',
            'Animaciones fluidas a 60 FPS y carga instantánea',
            'Dominio propio (.com / .com.ar) + Certificado SSL seguro'
          ]
        },
        {
          icon: Cpu,
          title: 'Sistemas Web & Software a Medida',
          priceTag: 'Full-Stack Cloud',
          desc: 'Desarrollamos paneles de control, sistemas de gestión de órdenes, agendas de turnos, intranets y aplicaciones web conectadas a bases de datos PostgreSQL en tiempo real.',
          features: [
            'Base de datos en la nube con respaldo y seguridad RLS',
            'Paneles de finanzas, métricas de ventas e historial',
            'Acceso protegido por credenciales para tu equipo',
            'Escalable a medida que tu negocio crece'
          ]
        }
      ]
    },
    experience: {
      eyebrow: 'EXPERIENCIA & TRAYECTORIA',
      title: 'CÓDIGO SÓLIDO, RESULTADOS REALES',
      items: [
        {
          period: '2024 — PRESENTE',
          role: 'Founder & Lead Full-Stack Developer',
          company: 'ADURIX · Creative Dev Studio',
          desc: 'Dirección técnica y diseño de plataformas web comerciales, tiendas de comercio electrónico y sistemas gastronómicos en la nube para clientes de Argentina y el exterior.'
        },
        {
          period: '2023 — 2024',
          role: 'Frontend & UI/UX Architect',
          company: 'Desarrollos E-Commerce & Entretenimiento',
          desc: 'Lanzamiento de portales de alto tráfico como Cosquín Joven Producciones y tiendas digitales especializadas como Mundo Xbox Store, optimizando tiempos de carga móvil por debajo de 1 segundo.'
        },
        {
          period: '2022 — 2023',
          role: 'Web Developer Freelance',
          company: 'Soluciones Digitales para Comercios y PyMEs',
          desc: 'Digitalización de catálogos, menús interactivos QR y páginas de aterrizaje (Landing Pages) orientadas a conversión directa por WhatsApp.'
        }
      ]
    },
    reviews: {
      eyebrow: 'REFERENCIAS VERIFICADAS',
      title: 'LO QUE DICEN NUESTROS CLIENTES',
      list: [
        {
          name: 'Dirección General',
          biz: 'Cosquín Joven Producciones',
          url: 'https://cosquinjovenproducciones.com',
          text: '“Necesitábamos una plataforma oficial que soportara miles de consultas desde celulares durante los eventos y mostrara toda nuestra identidad profesional. En Adurix resolvieron todo en tiempo récord.”'
        },
        {
          name: 'Administración',
          biz: 'Mundo Xbox Store',
          url: 'https://mundoxbox.store',
          text: '“Antes perdíamos horas pasando precios por Instagram. Con la tienda online los clientes arman el carrito solos y nos llega el pedido listo para cobrar. Nos multiplicó las ventas.”'
        },
        {
          name: 'Gerencia Operativa',
          biz: 'Santos · Lomitería & Food Club',
          url: 'https://santos-web.pages.dev',
          text: '“Dejamos de renegar con PDFs que nadie leía. Ahora los clientes piden desde la web, copian el alias y a la cocina le cae el ticket detallado por WhatsApp. Poder pausar stock desde el celu en plena noche es un 10.”'
        }
      ]
    },
    quote: {
      eyebrow: 'COTIZADOR INTERACTIVO EN 30 SEGUNDOS',
      title: 'ARMEMOS TU PROYECTO HOY',
      subtitle: 'Seleccioná qué tipo de solución buscás y enviá la consulta directo a nuestro WhatsApp para recibir una propuesta a medida.',
      step1: '1. ¿Qué necesita tu negocio?',
      types: [
        'Sistema Gastronómico / Menú con Carrito',
        'Tienda Online / E-Commerce',
        'Web Empresarial / Eventos / Landing Page',
        'Sistema a Medida / Otro Desarrollo'
      ],
      step2: '2. Nombre de tu marca o rubro',
      placeholderName: 'Ej: Lomitería Don Juan / Tienda de Ropa / Mi Empresa',
      step3: '3. Contanos brevemente qué tenés en mente (opcional)',
      placeholderDetails: 'Ej: Queremos que los clientes pidan por la web y poder cambiar los precios desde un panel...',
      submitBtn: 'Enviar Consulta por WhatsApp'
    },
    footer: {
      rights: 'Todos los derechos reservados.',
      madeWith: 'Desarrollado en Córdoba, Argentina para todo el mundo.'
    }
  },

  en: {
    nav: {
      work: 'Work',
      services: 'Solutions',
      experience: 'Experience',
      reviews: 'Reviews',
      quote: 'Get a Quote',
      cta: "Let's Talk"
    },
    hero: {
      badge: 'AVAILABLE FOR NEW PROJECTS · WORLDWIDE REMOTE',
      title1: 'WEB ENGINEERING',
      title2: '& DIGITAL DESIGN',
      title3: 'THAT SELLS 24/7.',
      subtitle:
        'At ADURIX we design and build ultra-fast web platforms, E-Commerce stores, self-managed restaurant ordering systems, and custom cloud software. Zero bloated templates, zero monthly commissions.',
      ctaPrimary: 'Explore Live Portfolio',
      ctaSecondary: 'Chat on WhatsApp',
      stats: [
        { value: '+35', label: 'Deployed Projects' },
        { value: '< 0.6s', label: 'Edge Load Time' },
        { value: '100%', label: 'Custom Scalable Code' },
        { value: '24/7', label: 'Cloud Infrastructure' }
      ]
    },
    portfolio: {
      eyebrow: 'CASE STUDIES & PRODUCTION WORK',
      title: 'LIVE PROJECTS IN PRODUCTION',
      subtitle: 'Click on any of our featured deployments to test their speed, UI/UX design, and real-time interactivity.',
      liveBtn: 'Visit Live Website',
      caseBtn: 'Verified Architecture',
      items: [
        {
          title: 'Santos Food Club',
          category: 'Food & Beverage · Ordering Web App & Admin CMS',
          url: 'https://santos-web.pages.dev',
          isLive: true,
          badge: 'Featured Case',
          description:
            'Full-featured online ordering platform with a Retro Diner aesthetic. Includes a customizer for extras, delivery zone calculator, 1-click bank transfer copy, structured WhatsApp kitchen ticket generator, and a real-time Cloud Admin Dashboard (stock toggle, pricing, categories, and split-shift schedules).',
          stack: ['React 19', 'Supabase Cloud', 'Tailwind CSS', 'WhatsApp API', 'Cloudflare Edge'],
          accent: 'from-emerald-500/20 to-amber-500/10 border-emerald-500/30',
          previewBg: 'bg-[#083821]',
          previewTitle: 'SANTOS',
          previewSub: 'FOOD CLUB & DINER'
        },
        {
          title: 'Cosquín Joven Producciones',
          category: 'Events & Entertainment · Official Platform',
          url: 'https://cosquinjovenproducciones.com',
          isLive: true,
          badge: 'Official .COM',
          description:
            'Corporate platform and information hub for a major national event & festival production company. Engineered for high concurrent mobile traffic, schedules, registrations, and instant contact.',
          stack: ['React', 'Vite', 'Responsive UI', 'Technical SEO', 'Global CDN'],
          accent: 'from-purple-500/20 to-pink-500/10 border-purple-500/30',
          previewBg: 'bg-gradient-to-br from-indigo-950 to-purple-950',
          previewTitle: 'COSQUÍN JOVEN',
          previewSub: 'PRODUCTIONS'
        },
        {
          title: 'Mundo Xbox Store',
          category: 'Gaming E-Commerce · Digital Storefront',
          url: 'https://mundoxbox.store',
          isLive: true,
          badge: 'Live .STORE',
          description:
            'Digital video game and membership e-commerce store featuring instant category filtering, real-time search, persistent cart, and an automated checkout flow built to maximize social media conversion.',
          stack: ['React', 'E-Commerce Engine', 'Dark UI', 'Dynamic Filtering', 'Direct Checkout'],
          accent: 'from-lime-500/20 to-emerald-500/10 border-lime-500/30',
          previewBg: 'bg-gradient-to-br from-zinc-900 via-emerald-950 to-black',
          previewTitle: 'MUNDO XBOX',
          previewSub: 'DIGITAL STORE'
        },
        {
          title: 'NovaMed · Clinics & Booking',
          category: 'Healthcare & Services · Booking System',
          url: null,
          isLive: false,
          badge: 'Internal System',
          description:
            'Self-managed appointment scheduling platform for clinics, studios, and professionals. Automated WhatsApp confirmations, holiday blocking, and staff management.',
          stack: ['React', 'PostgreSQL', 'Real-Time Calendar', 'Automated Alerts'],
          accent: 'from-sky-500/20 to-blue-500/10 border-sky-500/30',
          previewBg: 'bg-gradient-to-br from-slate-900 to-sky-950',
          previewTitle: 'NOVAMED',
          previewSub: 'BOOKING SYSTEM'
        },
        {
          title: 'Altura Real Estate',
          category: 'Real Estate · Property Portal',
          url: null,
          isLive: false,
          badge: 'B2B Portal',
          description:
            'High-speed property catalog with multi-currency filtering, ultra-compressed HD galleries, interactive location mapping, and direct agent lead routing.',
          stack: ['Next / React', 'Multi-Filter', 'HD Galleries', 'Lead Capture'],
          accent: 'from-amber-500/20 to-orange-500/10 border-amber-500/30',
          previewBg: 'bg-gradient-to-br from-neutral-900 to-stone-900',
          previewTitle: 'ALTURA',
          previewSub: 'REAL ESTATE'
        },
        {
          title: 'Kinetix Gym & Fitness Club',
          category: 'Fitness & Memberships · High-Conversion Web',
          url: null,
          isLive: false,
          badge: 'High Conversion',
          description:
            'High-impact landing page with membership tier comparison, branch class schedules, and instant online member onboarding.',
          stack: ['Motion UI', 'Mobile-First', 'Conversion Funnel', 'Plans CMS'],
          accent: 'from-rose-500/20 to-red-500/10 border-rose-500/30',
          previewBg: 'bg-gradient-to-br from-zinc-950 to-rose-950',
          previewTitle: 'KINETIX',
          previewSub: 'FITNESS CLUB'
        }
      ]
    },
    services: {
      eyebrow: 'WHAT WE BUILD',
      title: 'TAILORED DIGITAL SOLUTIONS',
      subtitle: 'From high-converting corporate websites to full-stack cloud applications with real-time databases.',
      cards: [
        {
          icon: Utensils,
          title: 'Restaurant Ordering Systems & CMS',
          priceTag: '0% Sales Commission',
          desc: 'Your own online ordering platform for restaurants, burger joints, pizzerias, and dark kitchens. Customers customize their meals, pay directly to your account, and send structured tickets to your kitchen WhatsApp.',
          features: [
            'Cloud Admin Panel to pause stock & update prices in 1 click',
            'Custom toppings & modifiers per dish',
            'Automated delivery zones & split-shift store hours',
            'Direct payments to your bank account'
          ]
        },
        {
          icon: ShoppingBag,
          title: 'E-Commerce Stores & Digital Catalogs',
          priceTag: 'Automated Sales',
          desc: 'Blazing-fast online stores for retail brands, electronics, gaming stores, wholesalers, and businesses looking to automate orders without answering repetitive DMs.',
          features: [
            'Self-managed catalog with instant search & category filters',
            'Persistent shopping cart & discount badges',
            '100% responsive across iPhone, Android & Desktop',
            'Seamless WhatsApp & payment gateway integration'
          ]
        },
        {
          icon: Globe,
          title: 'Corporate Websites, Events & Landings',
          priceTag: 'Official Brand Presence',
          desc: 'High-impact websites for event producers, companies, agencies, real estate, and professionals seeking authority, speed, and top Google rankings.',
          features: [
            'Bespoke UI/UX design aligned with your brand identity',
            'Technical SEO optimization for Google visibility',
            'Smooth 60 FPS animations & sub-second loading',
            'Custom domain (.com / local) + Free SSL security'
          ]
        },
        {
          icon: Cpu,
          title: 'Custom Web Apps & Cloud Software',
          priceTag: 'Full-Stack Cloud',
          desc: 'We build admin dashboards, order management systems, booking platforms, and custom web applications powered by real-time PostgreSQL databases.',
          features: [
            'Cloud database with Row-Level Security (RLS)',
            'Financial dashboards, sales metrics & order history',
            'Password-protected staff & admin portals',
            'Built to scale effortlessly with your business'
          ]
        }
      ]
    },
    experience: {
      eyebrow: 'TRACK RECORD & EXPERIENCE',
      title: 'SOLID ENGINEERING, REAL RESULTS',
      items: [
        {
          period: '2024 — PRESENT',
          role: 'Founder & Lead Full-Stack Developer',
          company: 'ADURIX · Creative Dev Studio',
          desc: 'Technical direction, UI/UX architecture, and full-stack development of commercial web platforms, e-commerce stores, and cloud restaurant systems for local and international clients.'
        },
        {
          period: '2023 — 2024',
          role: 'Frontend & UI/UX Architect',
          company: 'E-Commerce & Entertainment Platforms',
          desc: 'Launched high-traffic platforms including Cosquín Joven Producciones and specialized digital storefronts like Mundo Xbox Store, achieving sub-second mobile load times.'
        },
        {
          period: '2022 — 2023',
          role: 'Full-Stack Web Developer',
          company: 'Digital Solutions for SMBs & Brands',
          desc: 'Built interactive digital catalogs, QR ordering menus, and high-converting landing pages integrated with WhatsApp Business workflows.'
        }
      ]
    },
    reviews: {
      eyebrow: 'CLIENT REFERENCES',
      title: 'TRUSTED BY REAL BUSINESSES',
      list: [
        {
          name: 'Executive Board',
          biz: 'Cosquín Joven Producciones',
          url: 'https://cosquinjovenproducciones.com',
          text: '“We needed an official platform capable of handling thousands of mobile visitors during our events while showcasing our brand identity. Adurix delivered ahead of schedule.”'
        },
        {
          name: 'Store Management',
          biz: 'Mundo Xbox Store',
          url: 'https://mundoxbox.store',
          text: '“We used to spend hours replying to price inquiries on Instagram. With our new store, customers build their own cart and send us ready-to-pay orders. Sales grew immediately.”'
        },
        {
          name: 'Operations Manager',
          biz: 'Santos · Food Club',
          url: 'https://santos-web.pages.dev',
          text: '“We ditched static PDFs. Now customers customize their burgers on the web, copy our bank alias, and our kitchen receives a clean ticket on WhatsApp. Pausing out-of-stock items from my iPhone mid-shift is a game changer.”'
        }
      ]
    },
    quote: {
      eyebrow: 'INTERACTIVE PROJECT ESTIMATOR',
      title: "LET'S BUILD YOUR PROJECT",
      subtitle: 'Select what your business needs and send your inquiry directly to our WhatsApp for a tailored proposal.',
      step1: '1. What does your business need?',
      types: [
        'Restaurant Ordering System / Digital Menu',
        'Online Store / E-Commerce Catalog',
        'Corporate Website / Events / Landing Page',
        'Custom Web App / Other Software'
      ],
      step2: '2. Your Brand Name or Industry',
      placeholderName: 'e.g., Burger Club / Tech Store / Event Agency',
      step3: '3. Tell us briefly about your project (optional)',
      placeholderDetails: 'e.g., We want customers to order online and manage prices from an admin panel...',
      submitBtn: 'Send Inquiry via WhatsApp'
    },
    footer: {
      rights: 'All rights reserved.',
      madeWith: 'Engineered in Córdoba, Argentina for clients worldwide.'
    }
  }
};

// Logo oficial de ADURIX — CREATIVE DEV STUDIO
function AdurixLogo() {
  return (
    <div className="flex items-center gap-3 select-none group">
      <div className="relative grid size-10 sm:size-11 place-items-center rounded-xl bg-gradient-to-br from-emerald-400 to-teal-600 text-black shadow-[0_0_25px_rgba(16,185,129,0.35)] transition-transform duration-300 group-hover:scale-105">
        <Code2 className="size-6 stroke-[2.5]" />
      </div>
      <div className="flex flex-col text-left">
        <span className="font-adurix text-xl sm:text-2xl tracking-tight text-white leading-none">
          ADURIX
        </span>
        <span className="font-code text-[9px] sm:text-[10px] font-bold tracking-[0.22em] text-emerald-400 uppercase mt-1 leading-none">
          CREATIVE DEV STUDIO
        </span>
      </div>
    </div>
  );
}

export default function App() {
  const [lang, setLang] = useState('es');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = CONTENT[lang];

  // Estados del cotizador interactivo
  const [selectedType, setSelectedType] = useState(0);
  const [brandName, setBrandName] = useState('');
  const [projectDetails, setProjectDetails] = useState('');
  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const offset = 80;
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        const elementRect = element.getBoundingClientRect().top;
        const offsetPosition = Math.max(0, elementRect + currentScroll - offset);

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 150);
  };
  const handleSendQuote = (e) => {
    e.preventDefault();
    const chosenService = t.quote.types[selectedType];
    const msg =
      lang === 'es'
        ? `¡Hola ADURIX! 👋\n\nQuiero cotizar un proyecto web:\n• *Solución:* ${chosenService}\n• *Marca / Rubro:* ${brandName || 'A definir'}\n• *Detalles:* ${projectDetails || 'Me gustaría recibir asesoramiento.'}`
        : `Hi ADURIX! 👋\n\nI'd like to get a quote for a web project:\n• *Solution:* ${chosenService}\n• *Brand / Industry:* ${brandName || 'TBD'}\n• *Details:* ${projectDetails || 'I would love to discuss the details.'}`;

    window.open(
      `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(msg)}`,
      '_blank'
    );
  };

  const quickWhatsApp = (serviceName) => {
    const msg =
      lang === 'es'
        ? `¡Hola ADURIX! Vi su portfolio y me interesa consultar por: *${serviceName}*.`
        : `Hi ADURIX! I saw your portfolio and I'm interested in: *${serviceName}*.`;
    window.open(
      `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(msg)}`,
      '_blank'
    );
  };

  return (
    <div className="min-h-screen bg-[#07070b] text-zinc-100 flex flex-col justify-between relative overflow-x-clip">
      {/* Fondo de grilla técnica + Halos de luz */}
      <div className="bg-tech-grid pointer-events-none fixed inset-0 z-0" aria-hidden="true" />
      <div
        className="pointer-events-none fixed -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full opacity-25 blur-[130px] z-0"
        style={{ background: 'radial-gradient(circle, #10b981 0%, #6366f1 55%, transparent 100%)' }}
        aria-hidden="true"
      />

      {/* ================= NAVBAR ================= */}
      {/* ================= NAVBAR ================= */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07070b]/85 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-8">
          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(false);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="focus:outline-none cursor-pointer"
          >
            <AdurixLogo />
          </button>

          {/* Links Desktop */}
          <nav className="hidden lg:flex items-center gap-8 text-xs font-bold uppercase tracking-widest text-zinc-400">
            <button type="button" onClick={() => scrollToSection('work')} className="hover:text-white transition-colors cursor-pointer uppercase">{t.nav.work}</button>
            <button type="button" onClick={() => scrollToSection('services')} className="hover:text-white transition-colors cursor-pointer uppercase">{t.nav.services}</button>
            <button type="button" onClick={() => scrollToSection('experience')} className="hover:text-white transition-colors cursor-pointer uppercase">{t.nav.experience}</button>
            <button type="button" onClick={() => scrollToSection('reviews')} className="hover:text-white transition-colors cursor-pointer uppercase">{t.nav.reviews}</button>
            <button type="button" onClick={() => scrollToSection('quote')} className="hover:text-emerald-400 transition-colors cursor-pointer uppercase">{t.nav.quote}</button>
          </nav>

          {/* Selector de Idioma ES / EN + CTA */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <div className="flex items-center rounded-full border border-white/15 bg-zinc-900/90 p-1 text-[11px] font-code font-bold">
              <button
                type="button"
                onClick={() => setLang('es')}
                className={`px-2.5 py-1 rounded-full transition-all cursor-pointer ${
                  lang === 'es' ? 'bg-emerald-400 text-black shadow-sm' : 'text-zinc-400 hover:text-white'
                }`}
              >
                ES
              </button>
              <button
                type="button"
                onClick={() => setLang('en')}
                className={`px-2.5 py-1 rounded-full transition-all cursor-pointer ${
                  lang === 'en' ? 'bg-emerald-400 text-black shadow-sm' : 'text-zinc-400 hover:text-white'
                }`}
              >
                EN
              </button>
            </div>

            <button
              type="button"
              onClick={() => scrollToSection('quote')}
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs font-extrabold uppercase tracking-wider text-black hover:bg-emerald-400 transition-all shadow-[0_0_25px_rgba(255,255,255,0.15)] cursor-pointer"
            >
              <span>{t.nav.cta}</span>
              <ArrowUpRight className="size-4 stroke-[2.5]" />
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="grid size-10 place-items-center rounded-xl border border-white/15 bg-zinc-900 text-white lg:hidden cursor-pointer"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {/* Menú Móvil */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-white/10 bg-[#0b0b12] px-6 py-5 space-y-3 text-left">
            {[
              { id: 'work', label: t.nav.work },
              { id: 'services', label: t.nav.services },
              { id: 'experience', label: t.nav.experience },
              { id: 'reviews', label: t.nav.reviews },
              { id: 'quote', label: t.nav.quote }
            ].map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left py-2.5 text-sm font-bold uppercase tracking-wider text-zinc-200 hover:text-emerald-400 border-b border-white/5 cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* ================= HERO SECTION ================= */}
      <main className="relative z-10 flex-1">
        <section className="mx-auto max-w-7xl px-4 sm:px-8 pt-12 sm:pt-20 pb-16 sm:pb-24 text-left">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-[10px] sm:text-xs font-code font-bold uppercase tracking-widest text-emerald-300 mb-6">
            <span className="size-2 rounded-full bg-emerald-400 animate-ping" />
            <span>{t.hero.badge}</span>
          </div>

          <h1 className="font-adurix text-4xl sm:text-6xl lg:text-7xl uppercase leading-[0.95] tracking-tight text-white max-w-5xl">
            <span className="block">{t.hero.title1}</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-200 to-indigo-400">
              {t.hero.title2}
            </span>
            <span className="block">{t.hero.title3}</span>
          </h1>

          <p className="mt-6 max-w-2xl text-sm sm:text-lg text-zinc-400 leading-relaxed font-medium">
            {t.hero.subtitle}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href="#work"
              className="inline-flex items-center justify-center gap-2.5 rounded-2xl bg-emerald-400 hover:bg-emerald-300 text-black font-extrabold text-xs sm:text-sm uppercase tracking-wider px-8 py-4 transition-all shadow-[0_10px_35px_rgba(16,185,129,0.3)]"
            >
              <span>{t.hero.ctaPrimary}</span>
              <ArrowUpRight className="size-4 stroke-[2.5]" />
            </a>

            <button
              type="button"
              onClick={() => quickWhatsApp('Consulta General de Proyecto Web')}
              className="inline-flex items-center justify-center gap-2.5 rounded-2xl border border-white/15 bg-white/5 hover:bg-white/10 text-white font-bold text-xs sm:text-sm uppercase tracking-wider px-8 py-4 transition-all cursor-pointer"
            >
              <MessageCircle className="size-4 text-emerald-400" />
              <span>{t.hero.ctaSecondary}</span>
            </button>
          </div>

          {/* Métricas del Estudio */}
          <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
            {t.hero.stats.map((st, i) => (
              <div
                key={i}
                className="rounded-2xl border border-white/10 bg-zinc-900/60 p-5 backdrop-blur-md"
              >
                <div className="font-adurix text-2xl sm:text-4xl text-white">{st.value}</div>
                <div className="mt-1 font-code text-[11px] uppercase tracking-wider text-zinc-400">
                  {st.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= PORTFOLIO EN VIVO ================= */}
        <section id="work" className="mx-auto max-w-7xl px-4 sm:px-8 py-16 sm:py-24 border-t border-white/10 text-left scroll-mt-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="font-code text-xs font-bold uppercase tracking-[0.25em] text-emerald-400 block mb-2">
                {t.portfolio.eyebrow}
              </span>
              <h2 className="font-adurix text-3xl sm:text-5xl uppercase text-white">
                {t.portfolio.title}
              </h2>
            </div>
            <p className="max-w-md text-xs sm:text-sm text-zinc-400">
              {t.portfolio.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.portfolio.items.map((item, idx) => (
              <div
                key={idx}
                className={`group rounded-3xl border bg-gradient-to-b ${item.accent} bg-zinc-900/80 p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.7)]`}
              >
                <div>
                  {/* Mockup de Cabecera del Proyecto */}
                  <div className={`relative h-44 w-full rounded-2xl ${item.previewBg} border border-white/10 overflow-hidden flex flex-col items-center justify-center p-4 text-center mb-5`}>
                    <div className="absolute top-3 left-3 flex items-center gap-1.5">
                      <span className="size-2.5 rounded-full bg-red-400/70" />
                      <span className="size-2.5 rounded-full bg-amber-400/70" />
                      <span className="size-2.5 rounded-full bg-emerald-400/70" />
                    </div>
                    <span className="absolute top-2.5 right-3 rounded-full bg-black/50 backdrop-blur-md border border-white/15 px-2.5 py-0.5 font-code text-[10px] font-bold text-emerald-300">
                      {item.badge}
                    </span>

                    <div className="font-adurix text-2xl sm:text-3xl text-white tracking-tight">
                      {item.previewTitle}
                    </div>
                    <div className="font-code text-[10px] tracking-[0.25em] text-white/70 uppercase mt-1">
                      {item.previewSub}
                    </div>
                  </div>

                  <span className="font-code text-[10px] uppercase tracking-widest text-emerald-400 font-bold block">
                    {item.category}
                  </span>
                  <h3 className="font-adurix text-xl sm:text-2xl text-white mt-1">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 space-y-4">
                  <div className="flex flex-wrap gap-1.5">
                    {item.stack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="rounded-lg bg-black/40 border border-white/10 px-2.5 py-1 font-code text-[10px] text-zinc-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {item.isLive ? (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-white hover:bg-emerald-400 text-black font-extrabold text-xs uppercase tracking-wider py-3 px-4 transition-colors"
                    >
                      <span>{t.portfolio.liveBtn}</span>
                      <ExternalLink className="size-3.5 stroke-[2.5]" />
                    </a>
                  ) : (
                    <button
                      type="button"
                      onClick={() => quickWhatsApp(item.title)}
                      className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 text-zinc-200 font-bold text-xs uppercase tracking-wider py-3 px-4 transition-colors cursor-pointer"
                    >
                      <CheckCircle2 className="size-3.5 text-emerald-400" />
                      <span>{t.portfolio.caseBtn} · {t.nav.cta}</span>
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= SOLUCIONES & SERVICIOS ================= */}
        <section id="services" className="mx-auto max-w-7xl px-4 sm:px-8 py-16 sm:py-24 border-t border-white/10 text-left scroll-mt-20">
          <div className="mb-12">
            <span className="font-code text-xs font-bold uppercase tracking-[0.25em] text-emerald-400 block mb-2">
              {t.services.eyebrow}
            </span>
            <h2 className="font-adurix text-3xl sm:text-5xl uppercase text-white">
              {t.services.title}
            </h2>
            <p className="mt-2 max-w-2xl text-xs sm:text-sm text-zinc-400">
              {t.services.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.services.cards.map((card, i) => {
              const Icon = card.icon;
              return (
                <div
                  key={i}
                  className="rounded-3xl border border-white/10 bg-zinc-900/70 p-6 sm:p-8 flex flex-col justify-between hover:border-emerald-500/40 transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-5">
                      <div className="grid size-12 place-items-center rounded-2xl bg-emerald-400/15 border border-emerald-400/30 text-emerald-400">
                        <Icon className="size-6" />
                      </div>
                      <span className="rounded-full bg-emerald-400/10 border border-emerald-400/30 px-3 py-1 font-code text-[10px] font-bold uppercase tracking-wider text-emerald-300">
                        {card.priceTag}
                      </span>
                    </div>

                    <h3 className="font-adurix text-xl sm:text-2xl text-white">
                      {card.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-zinc-400 leading-relaxed">
                      {card.desc}
                    </p>

                    <ul className="mt-5 space-y-2.5">
                      {card.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5 text-xs text-zinc-200">
                          <CheckCircle2 className="size-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    type="button"
                    onClick={() => quickWhatsApp(card.title)}
                    className="mt-7 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 hover:bg-emerald-400 hover:text-black text-white font-bold text-xs uppercase tracking-wider py-3.5 px-5 transition-all cursor-pointer"
                  >
                    <span>{t.nav.quote}: {card.title}</span>
                    <ChevronRight className="size-4" />
                  </button>
                </div>
              );
            })}
          </div>
        </section>

        {/* ================= EXPERIENCIA & TRAYECTORIA ================= */}
        <section id="experience" className="mx-auto max-w-7xl px-4 sm:px-8 py-16 sm:py-24 border-t border-white/10 text-left scroll-mt-20">
          <div className="mb-12">
            <span className="font-code text-xs font-bold uppercase tracking-[0.25em] text-emerald-400 block mb-2">
              {t.experience.eyebrow}
            </span>
            <h2 className="font-adurix text-3xl sm:text-5xl uppercase text-white">
              {t.experience.title}
            </h2>
          </div>

          <div className="space-y-4">
            {t.experience.items.map((exp, idx) => (
              <div
                key={idx}
                className="rounded-3xl border border-white/10 bg-zinc-900/60 p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div className="space-y-1 md:w-1/3">
                  <span className="inline-block rounded-lg bg-emerald-400/10 border border-emerald-400/30 px-3 py-1 font-code text-[11px] font-bold text-emerald-300">
                    {exp.period}
                  </span>
                  <h3 className="font-adurix text-lg sm:text-xl text-white pt-1">
                    {exp.role}
                  </h3>
                  <p className="font-code text-xs text-zinc-400">{exp.company}</p>
                </div>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed md:w-2/3">
                  {exp.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= REFERENCIAS DE CLIENTES ================= */}
        <section id="reviews" className="mx-auto max-w-7xl px-4 sm:px-8 py-16 sm:py-24 border-t border-white/10 text-left scroll-mt-20">
          <div className="mb-12">
            <span className="font-code text-xs font-bold uppercase tracking-[0.25em] text-emerald-400 block mb-2">
              {t.reviews.eyebrow}
            </span>
            <h2 className="font-adurix text-3xl sm:text-5xl uppercase text-white">
              {t.reviews.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.reviews.list.map((rev, idx) => (
              <div
                key={idx}
                className="rounded-3xl border border-white/10 bg-zinc-900/70 p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-4">
                    {[...Array(5)].map((_, s) => (
                      <Star key={s} className="size-4 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-200 italic leading-relaxed">
                    {rev.text}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <strong className="block text-xs font-bold text-white">{rev.biz}</strong>
                    <span className="text-[11px] text-zinc-400">{rev.name}</span>
                  </div>
                  <a
                    href={rev.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 hover:text-emerald-300 text-xs font-code flex items-center gap-1"
                  >
                    <span>Web</span>
                    <ArrowUpRight className="size-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= COTIZADOR INTERACTIVO ================= */}
        <section id="quote" className="mx-auto max-w-4xl px-4 sm:px-8 py-16 sm:py-24 scroll-mt-20">
          <div className="rounded-[32px] border-2 border-emerald-500/30 bg-gradient-to-b from-zinc-900 to-[#090910] p-6 sm:p-10 text-left shadow-[0_25px_70px_rgba(16,185,129,0.12)]">
            <span className="font-code text-xs font-bold uppercase tracking-[0.25em] text-emerald-400 block mb-2">
              {t.quote.eyebrow}
            </span>
            <h2 className="font-adurix text-2xl sm:text-4xl uppercase text-white">
              {t.quote.title}
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-zinc-400">
              {t.quote.subtitle}
            </p>

            <form onSubmit={handleSendQuote} className="mt-8 space-y-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-3">
                  {t.quote.step1}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {t.quote.types.map((typeLabel, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setSelectedType(idx)}
                      className={`p-3.5 rounded-2xl border text-left text-xs font-bold transition-all cursor-pointer flex items-center justify-between ${
                        selectedType === idx
                          ? 'border-emerald-400 bg-emerald-400/15 text-white shadow-md'
                          : 'border-white/10 bg-black/40 text-zinc-400 hover:border-white/25 hover:text-white'
                      }`}
                    >
                      <span>{typeLabel}</span>
                      <CheckCircle2
                        className={`size-4 shrink-0 ${
                          selectedType === idx ? 'text-emerald-400' : 'text-zinc-700'
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-2">
                  {t.quote.step2}
                </label>
                <input
                  type="text"
                  value={brandName}
                  onChange={(e) => setBrandName(e.target.value)}
                  placeholder={t.quote.placeholderName}
                  className="w-full rounded-xl border border-white/15 bg-black/60 px-4 py-3 text-sm text-white placeholder-zinc-500 focus:border-emerald-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-2">
                  {t.quote.step3}
                </label>
                <textarea
                  rows={3}
                  value={projectDetails}
                  onChange={(e) => setProjectDetails(e.target.value)}
                  placeholder={t.quote.placeholderDetails}
                  className="w-full rounded-xl border border-white/15 bg-black/60 px-4 py-3 text-sm text-white placeholder-zinc-500 focus:border-emerald-400 focus:outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2.5 rounded-2xl bg-emerald-400 hover:bg-emerald-300 text-black font-extrabold text-xs sm:text-sm uppercase tracking-wider py-4 px-6 transition-all cursor-pointer shadow-[0_10px_30px_rgba(16,185,129,0.3)]"
              >
                <MessageCircle className="size-5 fill-black" />
                <span>{t.quote.submitBtn}</span>
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* ================= FOOTER ================= */}
      <footer className="relative z-10 border-t border-white/10 bg-[#050508] py-10 px-4 sm:px-8">
        <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <AdurixLogo />
          <div className="text-xs text-zinc-500 space-y-1 sm:text-right">
            <p>© {new Date().getFullYear()} ADURIX Creative Dev Studio. {t.footer.rights}</p>
            <p className="font-code text-[11px] text-zinc-400">{t.footer.madeWith}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}