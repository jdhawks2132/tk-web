import { writable } from 'svelte/store';

const schedules = [
	{
		id: 4,
		description: 'Practice @ Churchill Park',
		field: '1',
		location: 'Churchill Park',
		jersey: 'N/A',
		googleMapsLink: 'https://maps.app.goo.gl/1UkqybxdtQxVVKpk7',
		imageUrl: '/images/churchill_park.jpeg',
		date: '3/16/24',
		time: '10:00 AM',
		isGame: false
	},
	{
		id: 9,
		description: 'Twisted Tea',
		field: '2',
		location: 'McInnish Sporrts Complex',
		jersey: 'Gray',
		googleMapsLink: 'https://goo.gl/maps/EeTL6Zy5ErWWM2nF9',
		imageUrl: '/images/mckinnish.jpg',
		date: '3/17/24',
		time: '10:00 AM',
		isGame: true
	},
	{
		id: 10,
		description: 'Base Invaders',
		field: '1',
		location: 'McInnish Sporrts Complex',
		jersey: 'Gray',
		googleMapsLink: 'https://goo.gl/maps/EeTL6Zy5ErWWM2nF9',
		imageUrl: '/images/mckinnish.jpg',
		date: '3/17/24',
		time: '11:00 AM',
		isGame: true
	}
];

const schedulesStore = writable(schedules);

export default schedulesStore;
