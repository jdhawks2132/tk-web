import { writable } from 'svelte/store';

const schedules = [
	{
		id: 5,
		description: 'Home Runs & Harmony',
		field: '2',
		location: 'McInnish Sports Complex',
		jersey: 'Yellow',
		googleMapsLink: 'https://goo.gl/maps/EeTL6Zy5ErWWM2nF9',
		imageUrl: '/images/mckinnish.jpg',
		date: '5/6/23',
		time: '8:00 AM',
		isGame: true
	},
	{
		id: 6,
		description: 'Base Invaders',
		field: '2',
		location: 'McInnish Sports Complex',
		jersey: 'Yellow',
		googleMapsLink: 'https://goo.gl/maps/EeTL6Zy5ErWWM2nF9',
		imageUrl: '/images/mckinnish.jpg',
		date: '5/6/23',
		time: '9:00 AM',
		isGame: true
	},
	{
		id: 7,
		description: 'Angels',
		field: '4',
		location: 'McInnish Sports Complex',
		jersey: 'Gray',
		googleMapsLink: 'https://goo.gl/maps/EeTL6Zy5ErWWM2nF9',
		imageUrl: '/images/mckinnish.jpg',
		date: '5/7/23',
		time: '9:00 AM',
		isGame: true
	},
	{
		id: 8,
		description: 'Diesel E',
		field: '4',
		location: 'McInnish Sports Complex',
		jersey: 'Gray',
		googleMapsLink: 'https://goo.gl/maps/EeTL6Zy5ErWWM2nF9',
		imageUrl: '/images/mckinnish.jpg',
		date: '5/7/23',
		time: '10:00 AM',
		isGame: true
	},
	{
		id: 9,
		description: 'Angels',
		field: '2',
		location: 'McInnish Sports Complex',
		jersey: 'Yellow',
		googleMapsLink: 'https://goo.gl/maps/EeTL6Zy5ErWWM2nF9',
		imageUrl: '/images/mckinnish.jpg',
		date: '5/14/23',
		time: '12:00 PM',
		isGame: true
	},
	{
		id: 10,
		description: 'Diesel E',
		field: '2',
		location: 'McInnish Sports Complex',
		jersey: 'Yellow',
		googleMapsLink: 'https://goo.gl/maps/EeTL6Zy5ErWWM2nF9',
		imageUrl: '/images/mckinnish.jpg',
		date: '5/14/23',
		time: '2:00 PM',
		isGame: true
	}
];

const schedulesStore = writable(schedules);

export default schedulesStore;
