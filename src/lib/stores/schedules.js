import { writable } from 'svelte/store';

const schedules = [
	{
		id: 6,
		description: 'Homies',
		field: '4',
		location: 'McInnish Sports Complex',
		jersey: 'White',
		googleMapsLink: 'https://goo.gl/maps/EeTL6Zy5ErWWM2nF9',
		imageUrl: '/images/mckinnish.jpg',
		date: '5/4/2025',
		time: '8:00 AM',
		isGame: true
	},
	{
		id: 8,
		description: 'Twisted Tea',
		field: '4',
		location: 'McInnish Sports Complex',
		jersey: 'White',
		googleMapsLink: 'https://goo.gl/maps/EeTL6Zy5ErWWM2nF9',
		imageUrl: '/images/mckinnish.jpg',
		date: '5/4/2025',
		time: '10:00 AM',
		isGame: true
	}
];

const schedulesStore = writable(schedules);

export default schedulesStore;
