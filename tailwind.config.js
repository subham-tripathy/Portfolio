/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    function ({addUtilities}) {
        const newUtilities = {
          
          ".text-shadow-sm":{
            textShadow: "0 1px 2px rgb(0 0 0 )",
          },

          ".text-shadow":{
          	textShadow: "0 1px 3px rgb(0 0 0 ), 0 1px 2px rgb(0 0 0 )"
          },
        
          ".text-shadow-md":{
          	textShadow: "0 4px 6px rgb(0 0 0 ), 0 2px 4px rgb(0 0 0 )"
          },
        
          ".text-shadow-lg":{
          	textShadow: "0 10px 15px rgb(0 0 0 ), 0 4px 6px rgb(0 0 0 )"
          },
        
          ".text-shadow-xl":{
          	textShadow: "0 20px 25px rgb(0 0 0 ), 0 8px 10px rgb(0 0 0 )"
          },
        
          ".text-shadow-2xl":{
          	textShadow: "0 25px 50px rgb(0 0 0 )"
          },
        
          ".text-shadow-none":{
          	textShadow: "0 0 #0000"
          }
















        };
      addUtilities(newUtilities,["responsive", "hover"]);
    },
  ],
}
