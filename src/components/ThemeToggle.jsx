import React, { useState, useEffect } from 'react';

export default function ThemeToggle() {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const syncTheme = () => {
            const isDark = document.documentElement.classList.contains('dark');
            setTheme(isDark ? 'dark' : 'light');
        };

        syncTheme();

        document.addEventListener('astro:after-swap', syncTheme);
        return () => document.removeEventListener('astro:after-swap', syncTheme);
    }, []);

    const toggleTheme = () => {
        const nextTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(nextTheme);

        if (nextTheme === 'dark') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
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
                padding: 0,
                lineHeight: 0,
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
                    padding: '0.15rem',
                    borderRadius: '999px',
                    background: 'rgba(128, 128, 128, 0.08)',
                    border: '1px solid rgba(128, 128, 128, 0.45)',
                    boxSizing: 'border-box',
                }}
            >
                {/* LINKS: Maan (Dark Mode) */}
                <span
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '0.325rem',
                        zIndex: 1,
                        width: '1rem',
                        height: '1rem',
                        display: 'grid',
                        placeItems: 'center',
                        color: theme === 'dark' ? '#7c3aed' : 'rgba(128, 128, 128, 0.85)',
                        transform: 'translateY(-50%)',
                        transition: 'color 0.25s ease',
                    }}
                >
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                        <path d="M15.7 3.3a8.8 8.8 0 1 0 5 16.2A9.2 9.2 0 0 1 15.7 3.3Z" />
                    </svg>
                </span>

                {/* RECHTS: Zon (Light Mode) */}
                <span
                    style={{
                        position: 'absolute',
                        top: '50%',
                        right: '0.325rem',
                        zIndex: 1,
                        width: '1rem',
                        height: '1rem',
                        display: 'grid',
                        placeItems: 'center',
                        color: theme === 'light' ? '#7c3aed' : 'rgba(128, 128, 128, 0.85)',
                        transform: 'translateY(-50%)',
                        transition: 'color 0.25s ease',
                    }}
                >
                    <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor">
                        <circle cx="12" cy="12" r="8.5" />
                        <circle cx="9" cy="9" r="1.2" fill="rgba(255,255,255,0.28)" />
                        <circle cx="15.5" cy="14.5" r="1.4" fill="rgba(255,255,255,0.22)" />
                    </svg>
                </span>

                {/* SLIDER-PILL */}
                <span
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '0.15rem',
                        width: '1.35rem',
                        height: '1.35rem',
                        borderRadius: '999px',
                        boxSizing: 'border-box',
                        border: '1px solid rgba(124, 58, 237, 0.65)',
                        background: 'rgba(124, 58, 237, 0.12)',
                        transform: theme === 'dark'
                            ? 'translate(0, -50%)'        // Links in Dark Mode
                            : 'translate(1.75rem, -50%)', // Rechts in Light Mode (Beginstand)
                        transition: 'transform 0.25s ease',
                    }}
                />
            </span>
        </button>
    );
}