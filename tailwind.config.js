/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Light theme colors
        'accent-blue': '#3B82F6',
        'accent-purple': '#A855F7',
        'accent-green': '#10B981',
        'accent-orange': '#F59E0B',
        'accent-red': '#EF4444',
        'accent-pink': '#EC4899',
        'accent-cyan': '#06B6D4',
      },
      fontFamily: {
        'space-grotesk': ['Space Grotesk', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'sm': '0 1px 2px rgba(0,0,0,0.05)',
        'md': '0 4px 6px rgba(0,0,0,0.1)',
        'lg': '0 10px 15px rgba(0,0,0,0.1)',
        'card': '0 4px 12px rgba(0,0,0,0.08)',
      },
      backgroundImage: {
        'gradient-blue': 'linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)',
        'gradient-purple': 'linear-gradient(135deg, #A855F7 0%, #9333EA 100%)',
        'gradient-green': 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
        'gradient-orange': 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
        'gradient-red': 'linear-gradient(135deg, #EF4444 0%, #DC2626 100%)',
        'gradient-pink': 'linear-gradient(135deg, #EC4899 0%, #DB2777 100%)',
        'gradient-cyan': 'linear-gradient(135deg, #06B6D4 0%, #0891B2 100%)',
        'gradient-blue-section': 'linear-gradient(135deg, #3B82F6 0%, #1E40AF 100%)',
      },
    },
  },
  plugins: [],
}
