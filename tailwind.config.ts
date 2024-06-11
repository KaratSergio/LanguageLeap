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
        mainBlack: '#121417',
        btnColorY: '#F4C550',
        btnColorYh: '#FFDC86',
        yellowLight: '#FBE9BA',
        pinkBg: '#F8F8F8',
      },
      width: {
        'text-modal': '438px',
        'nav-bar': '1184px',
        'nav-page': '661px',
        'nav-auth': '255px',
        'nav-btn-reg': '166px',
        '1288': '1288px',
        '720': '720px',
        '568': '568px',
        '548': '548px',
        '471': '471px',
      },
      maxWidth: {
        'text-modal': '438px',
      },
      padding: {
        '18': '18px',
        '10': '10px',
        '14': '12px',
        '39': '39px',
        '88': '88px',
        '98': '98px',
        '108': '108px',
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
