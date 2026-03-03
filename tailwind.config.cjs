/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			screens: {
				sm: '601px',
				md: '961px',
				lg: '1200px'
			}
		}
	},
	plugins: []
};
