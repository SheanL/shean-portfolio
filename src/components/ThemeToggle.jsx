import React, { useState, useEffect } from 'react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Check huidig thema na mounten op client
    if (document.documentElement.classList.contains('dark')) {
      setTheme('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (theme === 'light') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setTheme('dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setTheme('light');
    }
  };

  return (
    <button
      onClick={toggleTheme}
      style={{
        background: 'transparent',
        border: 0,
        cursor: 'pointer',
        fontSize: '0.8rem',
        padding: '0.2rem 0',
        color: 'inherit',
        marginLeft: 0,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '20px',
        transition: 'all 0.2s ease',
      }}
      aria-label="Toggle Dark Mode"
      title={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
    >
      <span
        aria-hidden="true"
        style={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '3.4rem',
          height: '1.55rem',
          padding: '0.18rem',
          borderRadius: '999px',
          background: 'rgba(128, 128, 128, 0.08)',
          border: '1px solid rgba(128, 128, 128, 0.45)',
          boxSizing: 'border-box',
        }}
      >
        <span
          aria-hidden="true"
          style={{
            zIndex: 1,
            width: '0.9rem',
            height: '0.9rem',
            borderRadius: '50%',
            background: theme === 'light'
              ? 'radial-gradient(circle at 68% 30%, rgba(255,255,255,0.45) 0 7%, transparent 8%), radial-gradient(circle at 35% 68%, rgba(255,255,255,0.3) 0 9%, transparent 10%), #7c3aed'
              : 'radial-gradient(circle at 68% 30%, rgba(255,255,255,0.35) 0 7%, transparent 8%), radial-gradient(circle at 35% 68%, rgba(255,255,255,0.2) 0 9%, transparent 10%), rgba(128, 128, 128, 0.85)',
          }}
        />
        <span
          aria-hidden="true"
          style={{
            zIndex: 1,
            width: '0.9rem',
            height: '0.9rem',
            borderRadius: '50%',
            background: theme === 'dark'
              ? 'radial-gradient(circle at 35% 50%, #7c3aed 0 52%, transparent 54%)'
              : 'radial-gradient(circle at 35% 50%, rgba(128, 128, 128, 0.85) 0 52%, transparent 54%)',
          }}
        />
        <span
          style={{
            position: 'absolute',
            top: '0.1rem',
            left: '0.1rem',
            width: '1.35rem',
            height: '1.35rem',
            borderRadius: '999px',
            border: '1px solid rgba(124, 58, 237, 0.65)',
            background: 'rgba(124, 58, 237, 0.12)',
            transform: theme === 'dark' ? 'translateX(1.85rem)' : 'translateX(0)',
            transition: 'transform 0.25s ease',
          }}
        />
      </span>
    </button>
  );
}
