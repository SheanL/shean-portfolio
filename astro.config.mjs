// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
    site: 'https://example.com',
    integrations: [mdx(), sitemap(), react()],
    fonts: [
        {
            provider: fontProviders.local(),
            name: 'Atkinson',
            cssVariable: '--font-atkinson',
            fallbacks: ['sans-serif'],
            options: {
                variants: [
                    {
                        src: ['./src/assets/fonts/atkinson-regular.woff'],
                        weight: 400,
                        style: 'normal',
                        display: 'swap',
                    },
                    {
                        src: ['./src/assets/fonts/atkinson-bold.woff'],
                        weight: 700,
                        style: 'normal',
                        display: 'swap',
                    },
                ],
            },
        },
        {
            provider: fontProviders.local(),
            name: 'Lazy Dog',
            cssVariable: '--font-lazy-dog',
            fallbacks: ['cursive'],
            options: {
                variants: [
                    {
                        src: ['./src/assets/fonts/lazy-dog.woff'],
                        weight: 400,
                        style: 'normal',
                        display: 'swap',
                    },
                ],
            },
        },
        {
            provider: fontProviders.google(),
            name: 'Instrument Serif',
            cssVariable: '--font-instrument-serif',
            weights: [400],
            styles: ['normal', 'italic'],
            subsets: ['latin'],
            fallbacks: ['Georgia', 'serif'],
        },
    ],
});