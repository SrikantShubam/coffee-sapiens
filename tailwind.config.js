// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#F7F3F0',
        secondary: '#D19364',
        tertiary: '#FCF7F3',
        dark: '#DAD1CA',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        righteous: ['Righteous', 'cursive'],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.dark'),
            h1: {
              fontFamily: theme('fontFamily.roboto'),
              color: theme('colors.black'),
              fontWeight: '700',
            },
            h2: {
              fontFamily: theme('fontFamily.inter'),
              color: theme('colors.black'),
              fontWeight: '600',
            },
            p: {
              fontFamily: theme('fontFamily.roboto'),
              color: theme('colors.black'),
              lineHeight: '1.75',
            },
            blockquote: {
              fontFamily: theme('fontFamily.roboto'),
              fontStyle: 'italic',
              borderLeftColor: theme('colors.secondary'),
              backgroundColor: theme('colors.tertiary'),
              padding: '0.5rem ',
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'), // Ensure this plugin is installed and included
    require('@tailwindcss/aspect-ratio'), // Already included as per your config
  ],
}
