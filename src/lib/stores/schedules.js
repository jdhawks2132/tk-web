import { writable } from 'svelte/store';

const schedules = [
	{
		id: 0,
		description: 'Practice',
		field: '2',
		location: 'Churchill Park',
		jersey: 'N/A',
		googleMapsLink: 'https://maps.app.goo.gl/1UkqybxdtQxVVKpk7',
		imageUrl: '/images/churchill_park.jpeg',
		date: '4/6/24',
		time: '9:00 AM',
		isGame: false
	},

	{
		id: 5,
		description: 'Oh Honey',
		field: '3',
		location: 'McInnish Sporrts Complex',
		jersey: 'Gray',
		googleMapsLink: 'https://goo.gl/maps/EeTL6Zy5ErWWM2nF9',
		imageUrl: '/images/mckinnish.jpg',
		date: '4/7/24',
		time: '10:30 AM',
		isGame: true
	},
	{
		id: 6,
		description: 'Titans',
		field: '2',
		location: 'McInnish Sporrts Complex',
		jersey: 'Gray',
		googleMapsLink: 'https://goo.gl/maps/EeTL6Zy5ErWWM2nF9',
		imageUrl: '/images/mckinnish.jpg',
		date: '4/7/24',
		time: '12:30 PM',
		isGame: true
	},
	{
		id: 7,
		description: 'Peaches',
		field: '1',
		location: 'McInnish Sporrts Complex',
		jersey: 'Yellow',
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
		jersey: 'Yellow',
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
