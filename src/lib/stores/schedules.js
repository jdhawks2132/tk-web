import { writable } from 'svelte/store';

const schedules = [
	{
		id: 2,
		description: 'Big D',
		field: '2',
		location: 'McInnish Sports Complex',
		jersey: 'White',
		googleMapsLink: 'https://goo.gl/maps/EeTL6Zy5ErWWM2nF9',
		imageUrl: '/images/mckinnish.jpg',
		date: '4/6/2025',
		time: '8:00 AM',
		isGame: true
	},
	{
		id: 4,
		description: 'Pride',
		field: '3',
		location: 'McInnish Sports Complex',
		jersey: 'White',
		googleMapsLink: 'https://goo.gl/maps/EeTL6Zy5ErWWM2nF9',
		imageUrl: '/images/mckinnish.jpg',
		date: '4/6/2025',
		time: '9:00 AM',
		isGame: true
	}
];

const schedulesStore = writable(schedules);

export default schedulesStore;
