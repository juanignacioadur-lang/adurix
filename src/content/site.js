import { es } from './es.js';
import { en } from './en.js';

export const CONTENT = { es, en };
export const LANGS = ['es', 'en'];

export const WHATSAPP_NUMBER = '5493517705849';
export const WHATSAPP_DISPLAY = '+54 9 351 770 5849';
export const TIME_ZONE = 'America/Argentina/Cordoba';

export const waLink = (message) =>
  `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(message)}`;

// Real captures of the live sites (see src/assets/work).
const files = import.meta.glob('../assets/work/*.{avif,webp}', {
  eager: true,
  query: '?url',
  import: 'default',
});
const img = (name) => ({
  avif: files[`../assets/work/${name}.avif`],
  webp: files[`../assets/work/${name}.webp`],
});

const shots = (id) => ({
  desktop: img(`${id}-desktop`), // 1600 × 1000
  desktopSm: img(`${id}-desktop-sm`), // 960 × 600
  scroll: img(`${id}-scroll`), // 1440 wide, tall page capture
  phone: img(`${id}-phone`), // 600 × 1298
  phoneScroll: img(`${id}-phone-scroll`), // 600 × 4000
});

// Language-independent data for each case study, keyed by the id used in the copy.
export const PROJECTS = {
  santos: {
    url: 'https://santosfood.club',
    domain: 'santosfood.club',
    stage: '#f5b82e',
    stageInk: '#0c0c0d',
    scrollRatio: 1440 / 2700,
    shots: shots('santos'),
  },
  cosquin: {
    url: 'https://cosquinjovenproducciones.com',
    domain: 'cosquinjovenproducciones.com',
    stage: '#c40d12',
    stageInk: '#ffffff',
    scrollRatio: 1440 / 3000,
    shots: shots('cosquin'),
  },
  xbox: {
    url: 'https://mundoxbox.store',
    domain: 'mundoxbox.store',
    stage: '#107c10',
    stageInk: '#ffffff',
    scrollRatio: 1440 / 3000,
    shots: shots('xbox'),
  },
};

// Order of the phones on the hero stage (the bright one sits in the middle).
export const HERO_PHONES = ['cosquin', 'santos', 'xbox'];
