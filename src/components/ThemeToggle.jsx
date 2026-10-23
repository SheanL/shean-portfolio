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
        border: '1px solid transparent',
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
          width: '2.7rem',
          height: '1.25rem',
          padding: '0.1rem',
          borderRadius: '999px',
          background: 'transparent',
          boxSizing: 'border-box',
        }}
      >
        <span
          aria-hidden="true"
          style={{
            zIndex: 1,
            width: '0.72rem',
            height: '0.72rem',
            borderRadius: '50%',
            background: theme === 'light' ? '#7c3aed' : 'rgba(128, 128, 128, 0.75)',
            opacity: 1,
          }}
        />
        <span
          aria-hidden="true"
          style={{
            zIndex: 1,
            width: '0.72rem',
            height: '0.72rem',
            borderRadius: '50%',
            background: theme === 'dark'
              ? 'linear-gradient(to right, #7c3aed 50%, transparent 50%)'
              : 'linear-gradient(to right, rgba(128, 128, 128, 0.75) 50%, transparent 50%)',
            opacity: 1,
          }}
        />
        <span
          style={{
            position: 'absolute',
            left: '0.1rem',
            width: '0.72rem',
            height: '0.72rem',
            borderRadius: '50%',
            background: 'transparent',
            transform: theme === 'dark' ? 'translateX(1.75rem)' : 'translateX(0)',
            transition: 'transform 0.2s ease',
          }}
        />
      </span>
    </button>
  );
}
