/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./src/**/**/*.{html,ts}",
    "./src/**/**/**/*.{html,ts}",
    "./src/**/**/**/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'oso-crikoso': "url('https://img.asmedia.epimg.net/resizer/f4HDtSPjEasJj8B_cXPKpra1CC4=/360x203/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/HCIDPA5EIZBOZMVBB6UA4JNWDU.jpg'"
      },
      animation: {
        fade: 'fadeIn .5s ease-in-out',
      },

      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      },

    },
  },
  plugins: [],
}

