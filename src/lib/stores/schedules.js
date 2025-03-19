import { writable } from 'svelte/store';

const schedules = [
	{
		id: 13,
		description: 'Practice',
		field: '1',
		location: 'Walnut Hill Park',
		jersey: 'N/A',
		googleMapsLink: 'https://maps.app.goo.gl/xVbKHZu3anJYkwUQ8',
		imageUrl: '/images/walnut_hill.jpg',
		date: '3/20/2025',
		time: '7:00 PM',
		isGame: false
	},
	{
		id: 14,
		description: 'Vengeance',
		field: '1',
		location: 'McInnish Sports Complex',
		jersey: 'White',
		googleMapsLink: 'https://goo.gl/maps/EeTL6Zy5ErWWM2nF9',
		imageUrl: '/images/mckinnish.jpg',
		date: '3/23/2025',
		time: '11:00 AM',
		isGame: true
	},
	{
		id: 16,
		description: 'Pride',
		field: '1',
		location: 'McInnish Sports Complex',
		jersey: 'White',
		googleMapsLink: 'https://goo.gl/maps/EeTL6Zy5ErWWM2nF9',
		imageUrl: '/images/mckinnish.jpg',
		date: '3/23/2025',
		time: '12:00 PM',
		isGame: true
	}
];

const schedulesStore = writable(schedules);

export default schedulesStore;
