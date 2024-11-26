import type { Config } from 'tailwindcss'


const config :Config  = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'selector',
  prefix: 'sbl-',
  theme: {
    extend: {
      screens: {
        mobile: { max: '639px' },
        tablet: { min: '640px', max: '1024px' },
        laptop: { min: '1025px', max: '1368px' }
      },
      colors: {
        primary: {
          10: '#E9EAED',
          25: '#C5C8D0',
          50: '#8C91A0',
          75: '#535C72',
          hover: '#96E08E',
          over: '#070a12',
          DEFAULT: '#B0F9A8'
        },
        secondary: {
          10: '#E6FCF7',
          25: '#BFF5EA',
          50: '#7FEBD5',
          75: '#40E2C1',
          over: '#00C39B',
          disabled: '#BFF5EA',
          DEFAULT: '#FFFF00'
        },
        alternative: {
          10: '#FFF5E6',
          50: '#FFC981',
          DEFAULT: '#FF9505'
        },
        alternative2: {
          10: '#FDF2F7',
          50: '#EB80B3',
          DEFAULT: '#D90368'
        },
        neutral: {
          10: '#F8F8F8',
          25: '#E2E2E2',
          50: '#C4C4C4',
          75: '#787878',
          100: '#f5f7fb',
          DEFAULT: '#1F1F1F'
        },
        danger: {
          10: '#FCEFF0',
          over: '#b01c23',
          DEFAULT: '#DB222A'
        },
        warning: {
          10: '#FFF6ED',
          DEFAULT: '#FF7D00'
        },
        success: {
          10: '#EAFBF5',
          over: '#00b35c',
          DEFAULT: '#00D770'
        },
        info: {
          10: '#F0F4FF',
          20: '#1E78FF',
          DEFAULT: '#2667FF'
        },
        blank: {
          over: '#e6e6e6',
          DEFAULT: '#FFFFFF'
        },
        black: {
          text: '#222',
          DEFAULT: '#495057'
        },
        blue: {
          DEFAULT: '#0069AA'
        },
        gray: {
          DEFAULT: '#787878'
        },
        green: {
          DEFAULT: '#00D770'
        },
        orange: {
          DEFAULT: '#FF7D00'
        },
        red: {
          DEFAULT: '#DB222A'
        },
        background: '#F9FAFB',
        backgroundPanel: '#f4f7fa',
        text: {
          50: '#495057',
          hyperlink: '#2667FF',
          DEFAULT: '#333333'
        }
      }
    },
    fontFamily: {
      roboto: ['var(--font-roboto)'],
      itim: ['var(--font-itim)']
    },
    lineHeight: {
      '1-75': '1.172rem',
      '2-5': '2.5rem'
    }
  },
  plugins: []
}

export default config
