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
        background: 'rgba(128, 128, 128, 0.08)',
        border: '1px solid rgba(128, 128, 128, 0.35)',
        cursor: 'pointer',
        fontSize: '0.8rem',
        padding: '0.2rem 0.35rem',
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
          width: '2.35rem',
          height: '1.05rem',
          padding: '0.12rem',
          borderRadius: '999px',
          background: 'rgba(128, 128, 128, 0.35)',
          boxSizing: 'border-box',
        }}
      >
        <span
          aria-hidden="true"
          style={{
            zIndex: 1,
            width: '0.58rem',
            height: '0.58rem',
            borderRadius: '50%',
            background: 'rgba(90, 90, 90, 0.85)',
            opacity: theme === 'light' ? 1 : 0.55,
          }}
        />
        <span
          aria-hidden="true"
          style={{
            zIndex: 1,
            width: '0.58rem',
            height: '0.58rem',
            borderRadius: '50%',
            background: 'linear-gradient(to right, rgba(90, 90, 90, 0.85) 50%, transparent 50%)',
            opacity: theme === 'dark' ? 1 : 0.55,
          }}
        />
        <span
          style={{
            position: 'absolute',
            left: '0.12rem',
            width: '0.6rem',
            height: '0.6rem',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.9)',
            transform: theme === 'dark' ? 'translateX(1.28rem)' : 'translateX(0)',
            transition: 'transform 0.2s ease',
          }}
        />
      </span>
    </button>
  );
}
