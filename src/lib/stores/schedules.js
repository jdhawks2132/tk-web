import { writable } from 'svelte/store';

const schedules = [
	{
		id: 0,
		description: 'Practice',
		field: '1',
		location: 'Fair Oaks Park',
		jersey: 'N/A',
		googleMapsLink: 'https://maps.app.goo.gl/CZ59fg1mAq48eDaM6',
		imageUrl: '/images/fair_oaks.jpg',
		date: '4/13/24',
		time: '9:00 AM',
		isGame: false
	},
	{
		id: 7,
		description: 'Peaches',
		field: '1',
		location: 'McInnish Sporrts Complex',
		jersey: 'Black',
		googleMapsLink: 'https://goo.gl/maps/EeTL6Zy5ErWWM2nF9',
		imageUrl: '/images/mckinnish.jpg',
		date: '4/14/24',
		time: '11:00 AM',
		isGame: true
	},
	{
		id: 8,
		description: 'Vengeance',
		field: '2',
		location: 'McInnish Sporrts Complex',
		jersey: 'Black',
		googleMapsLink: 'https://goo.gl/maps/EeTL6Zy5ErWWM2nF9',
		imageUrl: '/images/mckinnish.jpg',
		date: '4/14/24',
		time: '12:00 PM',
		isGame: true
	},
	{
		id: 1,
		description: 'Twisted Tea',
		field: '2',
		location: 'McInnish Sporrts Complex',
		jersey: 'Gray',
		googleMapsLink: 'https://goo.gl/maps/EeTL6Zy5ErWWM2nF9',
		imageUrl: '/images/mckinnish.jpg',
		date: '4/20/24',
		time: '10:00 AM',
		isGame: true
	},
	{
		id: 2,
		description: 'Base Invaders',
		field: '1',
		location: 'McInnish Sporrts Complex',
		jersey: 'Gray',
		googleMapsLink: 'https://goo.gl/maps/EeTL6Zy5ErWWM2nF9',
		imageUrl: '/images/mckinnish.jpg',
		date: '4/20/24',
		time: '11:00 AM',
		isGame: true
	},
	{
		id: 9,
		description: 'Pride',
		field: '2',
		location: 'McInnish Sporrts Complex',
		jersey: 'Gray',
		googleMapsLink: 'https://goo.gl/maps/EeTL6Zy5ErWWM2nF9',
		imageUrl: '/images/mckinnish.jpg',
		date: '4/21/24',
		time: '9:00 AM',
		isGame: true
	},
	{
		id: 10,
		description: 'Homies',
		field: '2',
		location: 'McInnish Sporrts Complex',
		jersey: 'Gray',
		googleMapsLink: 'https://goo.gl/maps/EeTL6Zy5ErWWM2nF9',
		imageUrl: '/images/mckinnish.jpg',
		date: '4/21/24',
		time: '10:00 AM',
		isGame: true
	},
	{
		id: 11,
		description: 'Twisted Tea',
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
		id: 12,
		description: 'Base Invaders',
		field: '2',
		location: 'McInnish Sporrts Complex',
		jersey: 'Yellow',
		googleMapsLink: 'https://goo.gl/maps/EeTL6Zy5ErWWM2nF9',
		imageUrl: '/images/mckinnish.jpg',
		date: '5/5/24',
		time: '2:00 PM',
		isGame: true
	}
];

const schedulesStore = writable(schedules);

export default schedulesStore;
