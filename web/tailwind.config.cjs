/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [    "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {

    },
    colors:{
      'site-blue': "#1A0C9A",
      'site-black-dark': "#201F1F",
      'sideBar-hover':"rgb(0, 0, 0, 0.14)",
      'white':"#F1F1F1",
    }
  },
  plugins: [],
}
