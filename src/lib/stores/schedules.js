import { writable } from 'svelte/store';

const schedules = [
	{
		id: 4,
		description: 'Scrimmage vs. Pride',
		field: '5',
		location: 'McInnish Sports Complex',
		jersey: 'N/A',
		googleMapsLink: 'https://goo.gl/maps/EeTL6Zy5ErWWM2nF9',
		imageUrl: '/images/mckinnish.jpg',
		date: '7/20/2025',
		time: '9AM - 11AM',
		isGame: false
	},
	{
		id: 5,
		description: 'Practice',
		field: 'TBD',
		location: 'McInnish Sports Complex',
		jersey: 'N/A',
		googleMapsLink: 'https://goo.gl/maps/EeTL6Zy5ErWWM2nF9',
		imageUrl: '/images/mckinnish.jpg',
		date: '8/3/2025',
		time: 'TBD',
		isGame: false
	},
	{
		id: 6,
		description: 'Practice',
		field: 'TBD',
		location: 'McInnish Sports Complex',
		jersey: 'N/A',
		googleMapsLink: 'https://goo.gl/maps/EeTL6Zy5ErWWM2nF9',
		imageUrl: '/images/mckinnish.jpg',
		date: '8/17/2025',
		time: 'TBD',
		isGame: false
	},
	{
		id: 7,
		description: 'Practice',
		field: 'TBD',
		location: 'McInnish Sports Complex',
		jersey: 'N/A',
		googleMapsLink: 'https://goo.gl/maps/EeTL6Zy5ErWWM2nF9',
		imageUrl: '/images/mckinnish.jpg',
		date: '9/7/2025',
		time: 'TBD',
		isGame: false
	},
	{
		id: 8,
		description: 'Practice',
		field: 'TBD',
		location: 'McInnish Sports Complex',
		jersey: 'N/A',
		googleMapsLink: 'https://goo.gl/maps/EeTL6Zy5ErWWM2nF9',
		imageUrl: '/images/mckinnish.jpg',
		date: '9/14/2025',
		time: 'TBD',
		isGame: false
	}
];

const schedulesStore = writable(schedules);

export default schedulesStore;
