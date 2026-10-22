import React, { useState, useEffect } from 'react';

export default function LanguageToggle() {
  const [lang, setLang] = useState('en');

  useEffect(() => {
    // Read saved language from localStorage or default to 'en'
    const savedLang = localStorage.getItem('lang') || 'en';
    setLang(savedLang);
    document.documentElement.setAttribute('lang', savedLang);
  }, []);

  const toggleLanguage = () => {
    const nextLang = lang === 'en' ? 'nl' : 'en';
    setLang(nextLang);
    localStorage.setItem('lang', nextLang);
    document.documentElement.setAttribute('lang', nextLang);
    // Dispatch a custom event so all client components update immediately
    window.dispatchEvent(new CustomEvent('languageChange', { detail: { lang: nextLang } }));
  };

  return (
    <button
      onClick={toggleLanguage}
      style={{
        background: 'none',
        border: '1px solid rgba(120, 120, 120, 0.3)',
        borderRadius: '20px',
        cursor: 'pointer',
        fontSize: '0.85rem',
        fontWeight: 'bold',
        padding: '0.25rem 0.65rem',
        color: 'inherit',
        marginLeft: '0.75rem',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '4px',
        transition: 'all 0.2s ease',
      }}
      aria-label="Switch Language EN / NL"
      title={lang === 'en' ? 'Switch to Dutch' : 'Switch to English'}
    >
      <span style={{ opacity: lang === 'en' ? 1 : 0.4, color: lang === 'en' ? 'var(--accent)' : 'inherit' }}>EN</span>
      <span style={{ opacity: 0.3 }}>/</span>
      <span style={{ opacity: lang === 'nl' ? 1 : 0.4, color: lang === 'nl' ? 'var(--accent)' : 'inherit' }}>NL</span>
    </button>
  );
}
