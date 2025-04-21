/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#6DE1D2',
          DEFAULT: '#53D3C2',
          dark: '#3AC5B2'
        },
        accent: {
          light: '#FFE363',
          DEFAULT: '#FFD63A',
          dark: '#F2C811'
        },
        alert: {
          light: '#F97A7A',
          DEFAULT: '#F75A5A',
          dark: '#D63F3F'
        },
        dark: {
          bg: '#222831',
          surface: '#2C3440',
          border: '#3A4250'
        },
        light: {
          bg: '#F8FAFC',
          surface: '#FFFFFF',
          border: '#E2E8F0'
        },
        text: {
          dark: '#0F172A',
          muted: '#64748B',
          light: '#EEEEEE'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        }
      }
    },
  },
  plugins: [],
};