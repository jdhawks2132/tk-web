import { writable } from 'svelte/store';

const schedules = [
	{
		id: 13,
		description: 'Practice',
		field: 'TBD',
		location: 'McInnish Sports Complex',
		jersey: 'N/A',
		googleMapsLink: 'https://goo.gl/maps/EeTL6Zy5ErWWM2nF9',
		imageUrl: '/images/mckinnish.jpg',
		date: '3/20/2025',
		time: 'TBD',
		isGame: false
	},
	{
		id: 14,
		description: 'Vengeance',
		field: '1',
		location: 'McInnish Sports Complex',
		jersey: 'Black',
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
		jersey: 'Black',
		googleMapsLink: 'https://goo.gl/maps/EeTL6Zy5ErWWM2nF9',
		imageUrl: '/images/mckinnish.jpg',
		date: '3/23/2025',
		time: '12:00 PM',
		isGame: true
	}
];

const schedulesStore = writable(schedules);

export default schedulesStore;
