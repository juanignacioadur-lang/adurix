import { useEffect, useState } from 'react';
import { CONTENT, LANGS } from './content/site.js';
import { Contact } from './components/Contact.jsx';
import { Footer } from './components/Footer.jsx';
import { Header } from './components/Header.jsx';
import { Hero } from './components/Hero.jsx';
import { Services } from './components/Services.jsx';
import { Studio } from './components/Studio.jsx';
import { Work } from './components/Work.jsx';

const STORAGE_KEY = 'adurix:lang';

// ?lang=en wins, then the visitor's last choice, then the browser language.
function initialLang() {
  try {
    const fromUrl = new URLSearchParams(window.location.search).get('lang');
    if (LANGS.includes(fromUrl)) return fromUrl;
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (LANGS.includes(saved)) return saved;
  } catch {
    // storage unavailable (private mode): fall through to the browser language
  }
  const prefs = navigator.languages?.length ? navigator.languages : [navigator.language || 'es'];
  return prefs.some((l) => l.toLowerCase().startsWith('es')) ? 'es' : 'en';
}

export default function App() {
  const [lang, setLang] = useState(initialLang);
  const t = CONTENT[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = t.meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', t.meta.description);
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // ignore: the choice just won't persist
    }
  }, [lang, t]);

  return (
    <>
      <Header t={t} lang={lang} setLang={setLang} />
      <main id="main">
        <Hero t={t} lang={lang} />
        <Work t={t} />
        <Services t={t} />
        <Studio t={t} />
        <Contact t={t} />
      </main>
      <Footer t={t} />
    </>
  );
}
