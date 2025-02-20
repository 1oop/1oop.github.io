import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#d4d4d4',
            'code::before': {
              content: '""'
            },
            'code::after': {
              content: '""'
            },
            pre: {
              backgroundColor: '#1e1e1e',
              color: '#d4d4d4',
            },
            code: {
              color: '#ce9178',
              backgroundColor: '#1e1e1e',
            },
            h1: {
              color: '#9cdcfe',
            },
            h2: {
              color: '#ce9178',
            },
            h3: {
              color: '#569cd6',
            },
            a: {
              color: '#64dd17',
              '&:hover': {
                color: '#64dd17',
                textDecoration: 'underline',
              },
            },
            strong: {
              color: '#ce9178',
            },
          }
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};

export default config;
