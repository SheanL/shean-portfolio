import React, { useState, useEffect } from 'react';

export default function ProjectCarousel({ slides = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lang, setLang] = useState('en');

  useEffect(() => {
    const savedLang = localStorage.getItem('lang') || 'en';
    setLang(savedLang);

    const handleLangChange = (e) => {
      if (e.detail && e.detail.lang) {
        setLang(e.detail.lang);
      }
    };
    window.addEventListener('languageChange', handleLangChange);
    return () => window.removeEventListener('languageChange', handleLangChange);
  }, []);

  if (!slides || slides.length === 0) return null;

  const currentSlide = slides[currentIndex];

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div style={{
      maxWidth: '850px',
      margin: '1.5rem auto',
      background: 'rgba(255,255,255,0.02)',
      borderRadius: '14px',
      border: '1px solid rgba(140, 140, 140, 0.25)',
      padding: '1.25rem',
      boxShadow: '0 6px 24px rgba(0, 0, 0, 0.08)',
    }}>
      {/* Slide Image Container with Navigation Arrows */}
      <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '10px', background: '#0b0c10', minHeight: '320px' }}>
        <img
          src={currentSlide.image}
          alt={lang === 'nl' ? currentSlide.titleNl : currentSlide.titleEn}
          style={{
            width: '100%',
            height: 'auto',
            maxHeight: '520px',
            objectFit: 'contain',
            display: 'block',
          }}
        />

        {/* Previous Button Arrow */}
        <button
          onClick={prevSlide}
          aria-label="Previous Slide"
          style={{
            position: 'absolute',
            top: '50%',
            left: '16px',
            transform: 'translateY(-50%)',
            background: 'rgba(0, 0, 0, 0.75)',
            color: '#ffffff',
            border: '1px solid rgba(255, 255, 255, 0.4)',
            borderRadius: '50%',
            width: '46px',
            height: '46px',
            fontSize: '1.5rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)',
            backdropFilter: 'blur(4px)',
            zIndex: 999,
          }}
        >
          &#10094;
        </button>

        {/* Next Button Arrow */}
        <button
          onClick={nextSlide}
          aria-label="Next Slide"
          style={{
            position: 'absolute',
            top: '50%',
            right: '16px',
            transform: 'translateY(-50%)',
            background: 'rgba(0, 0, 0, 0.75)',
            color: '#ffffff',
            border: '1px solid rgba(255, 255, 255, 0.4)',
            borderRadius: '50%',
            width: '46px',
            height: '46px',
            fontSize: '1.5rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)',
            backdropFilter: 'blur(4px)',
            zIndex: 999,
          }}
        >
          &#10095;
        </button>

        {/* Counter Badge */}
        <div style={{
          position: 'absolute',
          bottom: '12px',
          right: '12px',
          background: 'rgba(0, 0, 0, 0.8)',
          color: '#ffffff',
          padding: '4px 12px',
          borderRadius: '16px',
          fontSize: '0.85rem',
          fontWeight: '600',
          letterSpacing: '0.5px',
          zIndex: 20,
        }}>
          {currentIndex + 1} / {slides.length}
        </div>
      </div>

      {/* Control Buttons & Indicators Bar */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '1.25rem 0 0.75rem 0',
        gap: '1rem',
      }}>
        <button
          onClick={prevSlide}
          style={{
            padding: '0.55rem 1.2rem',
            background: 'transparent',
            border: '1.5px solid #596aff',
            color: '#596aff',
            borderRadius: '20px',
            fontWeight: '600',
            cursor: 'pointer',
            fontSize: '0.88rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
          }}
        >
          &larr; {lang === 'nl' ? 'Vorige Stap' : 'Previous Step'}
        </button>

        {/* Dots */}
        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', justifyContent: 'center' }}>
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              style={{
                width: idx === currentIndex ? '20px' : '8px',
                height: '8px',
                borderRadius: '8px',
                border: 'none',
                background: idx === currentIndex ? '#596aff' : 'rgba(150, 150, 150, 0.4)',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
              }}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          style={{
            padding: '0.55rem 1.2rem',
            background: '#596aff',
            color: '#ffffff',
            border: 'none',
            borderRadius: '20px',
            fontWeight: '600',
            cursor: 'pointer',
            fontSize: '0.88rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
          }}
        >
          {lang === 'nl' ? 'Volgende Stap' : 'Next Step'} &rarr;
        </button>
      </div>

      {/* Dynamic Caption & Explanation Box */}
      <div className="carousel-caption-box" style={{
        marginTop: '0.75rem',
        padding: '0.5rem 0',
      }}>
        <style>{`
          .carousel-caption-box {
            background: transparent;
            border: none;
          }
          .carousel-caption-title {
            color: #0f172a;
          }
          .carousel-caption-desc {
            color: #334155;
          }
          html.dark .carousel-caption-box,
          .dark .carousel-caption-box {
            background: transparent !important;
            border: none !important;
          }
          html.dark .carousel-caption-title,
          .dark .carousel-caption-title {
            color: #ffffff !important;
          }
          html.dark .carousel-caption-desc,
          .dark .carousel-caption-desc {
            color: #f1f5f9 !important;
          }
        `}</style>
        <h4 className="carousel-caption-title" style={{ margin: '0 0 0.4rem 0', fontSize: '1.05rem', fontWeight: '700' }}>
          {lang === 'nl' ? currentSlide.titleNl : currentSlide.titleEn}
        </h4>
        <p className="carousel-caption-desc" style={{ margin: 0, fontSize: '0.92rem', lineHeight: '1.55' }}>
          {lang === 'nl' ? currentSlide.descNl : currentSlide.descEn}
        </p>
      </div>
    </div>
  );
}
