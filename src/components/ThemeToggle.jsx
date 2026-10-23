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
        background: 'rgba(125, 90, 180, 0.08)',
        border: '1px solid rgba(125, 90, 180, 0.35)',
        cursor: 'pointer',
        fontSize: '0.8rem',
        padding: '0.2rem 0.35rem',
        color: 'inherit',
        marginLeft: 0,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '20px',
        gap: '0.3rem',
        transition: 'all 0.2s ease',
      }}
      aria-label="Toggle Dark Mode"
      title={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
    >
      <span aria-hidden="true" style={{ opacity: theme === 'light' ? 0.45 : 1 }}>☾</span>
      <span
        aria-hidden="true"
        style={{
          display: 'flex',
          alignItems: 'center',
          width: '1.55rem',
          height: '0.85rem',
          padding: '0.12rem',
          borderRadius: '999px',
          background: 'rgba(125, 90, 180, 0.35)',
          boxSizing: 'border-box',
        }}
      >
        <span
          style={{
            width: '0.6rem',
            height: '0.6rem',
            borderRadius: '50%',
            background: '#7c3aed',
            transform: theme === 'dark' ? 'translateX(0.7rem)' : 'translateX(0)',
            transition: 'transform 0.2s ease',
          }}
        />
      </span>
      <span aria-hidden="true" style={{ opacity: theme === 'dark' ? 0.45 : 1 }}>◐</span>
    </button>
  );
}
