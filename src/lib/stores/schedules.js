import { writable } from 'svelte/store';

const schedules = [
	// {
	// 	id: 0,
	// 	description: 'Practice',
	// 	field: '1',
	// 	location: 'Fair Oaks Park',
	// 	jersey: 'N/A',
	// 	googleMapsLink: 'https://maps.app.goo.gl/CZ59fg1mAq48eDaM6',
	// 	imageUrl: '/images/fair_oaks.jpg',
	// 	date: '4/13/24',
	// 	time: '9:00 AM',
	// 	isGame: false
	// },
	{
		id: 1,
		description: 'Pride',
		field: '1',
		location: 'McInnish Sporrts Complex',
		jersey: 'Gray',
		googleMapsLink: 'https://goo.gl/maps/EeTL6Zy5ErWWM2nF9',
		imageUrl: '/images/mckinnish.jpg',
		date: '5/4/24',
		time: '8:00 AM',
		isGame: true
	},
	{
		id: 2,
		description: 'Homies',
		field: '1',
		location: 'McInnish Sporrts Complex',
		jersey: 'Gray',
		googleMapsLink: 'https://goo.gl/maps/EeTL6Zy5ErWWM2nF9',
		imageUrl: '/images/mckinnish.jpg',
		date: '5/4/24',
		time: '9:00 AM',
		isGame: true
	},
	{
		id: 3,
		description: 'Base Invaders',
		field: '1',
		location: 'McInnish Sporrts Complex',
		jersey: 'Gray',
		googleMapsLink: 'https://goo.gl/maps/EeTL6Zy5ErWWM2nF9',
		imageUrl: '/images/mckinnish.jpg',
		date: '5/4/24',
		time: '12:00 PM',
		isGame: true
	},
	{
		id: 4,
		description: 'Base Invaders',
		field: '1',
		location: 'McInnish Sporrts Complex',
		jersey: 'Yellow',
		googleMapsLink: 'https://goo.gl/maps/EeTL6Zy5ErWWM2nF9',
		imageUrl: '/images/mckinnish.jpg',
		date: '5/5/24',
		time: '1:00 PM',
		isGame: true
	},
	{
		id: 5,
		description: 'Twisted Tea',
		field: '2',
		location: 'McInnish Sporrts Complex',
		jersey: 'Yellow',
		googleMapsLink: 'https://goo.gl/maps/EeTL6Zy5ErWWM2nF9',
		imageUrl: '/images/mckinnish.jpg',
		date: '5/5/24',
		time: '2:00 PM',
		isGame: true
	},
	{
		id: 6,
		description: 'Twisted Tea',
		field: '2',
		location: 'McInnish Sporrts Complex',
		jersey: 'Yellow',
		googleMapsLink: 'https://goo.gl/maps/EeTL6Zy5ErWWM2nF9',
		imageUrl: '/images/mckinnish.jpg',
		date: '5/5/24',
		time: '3:00 PM',
		isGame: true
	}
];

const schedulesStore = writable(schedules);

export default schedulesStore;
