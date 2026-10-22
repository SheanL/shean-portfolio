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
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        fontSize: '1.2rem',
        padding: '0.5rem',
        color: 'inherit',
        marginLeft: '1rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%',
        backgroundColor: theme === 'dark' ? '#333' : '#f0f0f0'
      }}
      aria-label="Toggle Dark Mode"
    >
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  );
}
