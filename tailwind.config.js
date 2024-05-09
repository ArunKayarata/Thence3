/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'covered-by-your-grace': ['Covered By Your Grace', 'sans-serif'],
        'manrope': ['Manrope', 'sans-serif'],
        'switzer': ['Switzer', 'sans-serif'],
      },
      colors: {
        customColor: '#E8EEE7',
        bordercolor:'#D7D7D7',
        answercolor:'#617275',
        questioncolor:'#1C1C1C',
        whatsonyourmind:'#9E9D9D',
        contactdiv:'#F5F5F5',
        offercolor:'#828282',
        savingbg:'#002E18',
        dollarcolor:'##FFFFFF',
        million:'#A6A3A0',
        textcolor:'#CCCCCC',
        bordershadow:'#1E1E1E',
        Submitcolor:'#C9C9C9',
        successcolor:'#727272',
        carouselcolor:'#E4E3E3',
        hovercolor:'#4E4E4E',
        buttonhover:'#EAEAEA'
      },
    },
  },
  plugins: [],
}

