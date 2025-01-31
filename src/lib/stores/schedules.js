import { writable } from 'svelte/store';

const schedules = [
	{
		id: 4,
		description: 'Opening Day',
		field: 'TBD',
		location: 'McInnish Sports Complex',
		jersey: 'TBD',
		googleMapsLink: 'https://goo.gl/maps/EeTL6Zy5ErWWM2nF9',
		imageUrl: '/images/mckinnish.jpg',
		date: '2/16/2025',
		time: 'TBD',
		isGame: true
	},
	{
		id: 5,
		description: 'Week 2',
		field: 'TBD',
		location: 'McInnish Sports Complex',
		jersey: 'TBD',
		googleMapsLink: 'https://goo.gl/maps/EeTL6Zy5ErWWM2nF9',
		imageUrl: '/images/mckinnish.jpg',
		date: '2/23/2025',
		time: 'TBD',
		isGame: true
	}
];

const schedulesStore = writable(schedules);

export default schedulesStore;
