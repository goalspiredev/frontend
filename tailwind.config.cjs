/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				mainWhite: '#FAFAFA',
				mainRed: '#EB4F4F',
				mainGray: '#454545'
			},
			fontFamily: {
				quicksand: ['Quicksand', 'sans-serif'],
				comfortaa: ['Comfortaa', 'cursive']
			}
		}
	},
	plugins: []
};
