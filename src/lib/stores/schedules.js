import { writable } from 'svelte/store';

const schedules = [
	{
		id: 1,
		description: 'Field Day (not required)',
		field: 'TBD',
		location: 'McInnish Sports Complex',
		jersey: 'NA',
		googleMapsLink: 'https://goo.gl/maps/EeTL6Zy5ErWWM2nF9',
		imageUrl: '/images/mckinnish.jpg',
		date: '1/5/25',
		time: '9:00 AM',
		isGame: false
	},
	{
		id: 2,
		description: 'Practice',
		field: '5',
		location: 'McInnish Sports Complex',
		jersey: 'NA',
		googleMapsLink: 'https://goo.gl/maps/EeTL6Zy5ErWWM2nF9',
		imageUrl: '/images/mckinnish.jpg',
		date: '1/5/25',
		time: '11:00 AM',
		isGame: false
	},
	{
		id: 3,
		description: 'Field Day (not required)',
		field: 'TBD',
		location: 'McInnish Sports Complex',
		jersey: 'NA',
		googleMapsLink: 'https://goo.gl/maps/EeTL6Zy5ErWWM2nF9',
		imageUrl: '/images/mckinnish.jpg',
		date: '1/12/25',
		time: '9:00 AM',
		isGame: false
	},
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
