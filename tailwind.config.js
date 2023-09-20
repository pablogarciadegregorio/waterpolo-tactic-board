/** @type {import('tailwindcss').Config} */

export default {

  content: ['./src/**/*.{html,js,jsx}',
            
            './src/components/**/*.{html,js.jsx}',
            './src/pages/**/*.{html,js,jsx}',
          ],
  theme: {

    extend: {
      
    colors: {

      "local": "#1d4ed8",
      
    },

      
    },
  },
  plugins: [],
}

