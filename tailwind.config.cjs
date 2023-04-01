/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'charcoal-gray': '#2D2D2D',
				'medium-gray': '#9B9B9B',
				'light-gray': '#F2F2F2',
				'snapchat-yellow': '#FFFC00',
				'honey-yellow': '#FFB100'
			}
		}
	},
	plugins: []
};
