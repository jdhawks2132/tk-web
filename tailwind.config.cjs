/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'charcoal-gray': '#383637',
				'medium-gray': '#bebfc1',
				'light-gray': '#e7e7e9',
				'snapchat-yellow': '#f0d564',
				'honey-yellow': '#d6a137'
			}
		}
	},
	plugins: []
};
