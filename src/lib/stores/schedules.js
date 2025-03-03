import { writable } from 'svelte/store';

const schedules = [
	{
		id: 10,
		description: 'Twisted Tea',
		field: '1',
		location: 'McInnish Sports Complex',
		jersey: 'Black',
		googleMapsLink: 'https://goo.gl/maps/EeTL6Zy5ErWWM2nF9',
		imageUrl: '/images/mckinnish.jpg',
		date: '3/9/2025',
		time: '8:00 AM',
		isGame: true
	},
	{
		id: 12,
		description: 'Homies',
		field: '2',
		location: 'McInnish Sports Complex',
		jersey: 'White',
		googleMapsLink: 'https://goo.gl/maps/EeTL6Zy5ErWWM2nF9',
		imageUrl: '/images/mckinnish.jpg',
		date: '3/9/2025',
		time: '10:00 AM',
		isGame: true
	},
	{
		id: 14,
		description: 'Vengeance',
		field: '1',
		location: 'McInnish Sports Complex',
		jersey: 'Black',
		googleMapsLink: 'https://goo.gl/maps/EeTL6Zy5ErWWM2nF9',
		imageUrl: '/images/mckinnish.jpg',
		date: '3/16/2025',
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
		date: '3/16/2025',
		time: '12:00 PM',
		isGame: true
	}
];

const schedulesStore = writable(schedules);

export default schedulesStore;
