import { writable } from 'svelte/store';

const schedules = [
	{
		id: 14,
		description: 'Big D',
		field: '5',
		location: 'McInnish Sports Complex',
		jersey: 'Black',
		googleMapsLink: 'https://goo.gl/maps/EeTL6Zy5ErWWM2nF9',
		imageUrl: '/images/mckinnish.jpg',
		date: '3/30/2025',
		time: '12:00 PM',
		isGame: true
	},
	{
		id: 16,
		description: 'Twisted Tea',
		field: '4',
		location: 'McInnish Sports Complex',
		jersey: 'Black',
		googleMapsLink: 'https://goo.gl/maps/EeTL6Zy5ErWWM2nF9',
		imageUrl: '/images/mckinnish.jpg',
		date: '3/30/2025',
		time: '1:00 PM',
		isGame: true
	}
];

const schedulesStore = writable(schedules);

export default schedulesStore;
