/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
        accent: {
          DEFAULT: '#007AFF',
          dark: '#0056CC',
          light: '#4DA2FF',
        },
        text: {
          primary: '#0a0a0a',
          secondary: '#525252',
        },
        surface: {
          primary: '#ffffff',
          secondary: '#fafafa',
          tertiary: '#fdfdfd',
        },
        success: {
          50: '#f0fdf4',
          500: '#22c55e',
          700: '#15803d',
        },
        warning: {
          50: '#fffbeb',
          500: '#f59e0b',
          700: '#b45309',
        },
        error: {
          50: '#fef2f2',
          500: '#ef4444',
          700: '#b91c1c',
        },
      },
      fontFamily: {
        heading: ['-apple-system', 'BlinkMacSystemFont', 'SF Pro Display', 'Segoe UI', 'Roboto', 'sans-serif'],
        body: ['-apple-system', 'BlinkMacSystemFont', 'SF Pro Text', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      fontSize: {
        'display-large': ['4rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-medium': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'display-small': ['2.25rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
        'headline-large': ['2rem', { lineHeight: '1.3', letterSpacing: '-0.005em' }],
        'headline-medium': ['1.75rem', { lineHeight: '1.4', letterSpacing: '0em' }],
        'headline-small': ['1.5rem', { lineHeight: '1.4', letterSpacing: '0em' }],
        'title-large': ['1.375rem', { lineHeight: '1.4', letterSpacing: '0em' }],
        'title-medium': ['1.125rem', { lineHeight: '1.5', letterSpacing: '0.01em' }],
        'body-large': ['1rem', { lineHeight: '1.6', letterSpacing: '0.01em' }],
        'body-medium': ['0.875rem', { lineHeight: '1.6', letterSpacing: '0.01em' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        'soft': '0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.1)',
        'medium': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'large': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'apple': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'glow': '0 0 20px rgba(0, 122, 255, 0.15)',
        'floating': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'apple': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'glow': '0 0 20px rgba(0, 122, 255, 0.15)',
        'floating': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      },
      backdropBlur: {
        'xs': '2px',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'slide-in-left': 'slideInLeft 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'slide-in-right': 'slideInRight 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'scale-in': 'scaleIn 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'float': 'float 6s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
        'bounce-soft': 'bounceSoft 2s ease-in-out infinite',
        'text-reveal': 'textReveal 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
        'marquee': 'marquee 25s linear infinite',
        'gradient-shift': 'gradientShift 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        bounceSoft: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        textReveal: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
};