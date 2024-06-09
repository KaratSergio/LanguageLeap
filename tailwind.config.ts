import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        textColor: 'rgba(18, 20, 23, 0.8)',
        borderColor: 'rgba(18, 20, 23, 0.1)',
        titleColor: '#121417',
        btnColor: '#F4C550',
      },
      width: {
        'text-modal': '438px',
      },
      maxWidth: {
        'text-modal': '438px',
      },
      padding: {
        '18': '18px',
      },
      margin: {
        '18': '18px',
      },
      borderRadius: {
        '30': '30px',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      fontSize: {
        '40px': '40px',
      },
      lineHeight: {
        '48px': '48px',
        '22px': '22px',
      },
      letterSpacing: {
        '-2': '-0.02em',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;
