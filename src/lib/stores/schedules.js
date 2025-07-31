import { writable } from 'svelte/store';

const schedules = [
	{
		id: 5,
		description: 'Practice',
		field: 'TBD',
		location: 'Churchill Park',
		jersey: 'N/A',
		googleMapsLink: 'https://maps.app.goo.gl/uELcw8GbhMREaAKM7',
		imageUrl: '/images/churchill_park.jpg',
		date: '8/3/2025',
		time: '9:00 AM',
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
