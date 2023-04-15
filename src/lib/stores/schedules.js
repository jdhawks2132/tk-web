import { writable } from 'svelte/store';

const schedules = [
	{
		id: 1,
		description: 'Practice - Preston Hollow',
		location: 'Preston Hollow Park',
		field: '1',
		jersey: 'N/A',
		googleMapsLink: 'https://goo.gl/maps/u4dYRsTXGddFwkd99',
		imageUrl: '/images/prestonHollow.jpg',
		date: '4/15/23',
		time: '1:00 PM'
	},
	{
		id: 2,
		description: 'Base Invaders',
		field: '1',
		location: 'McInnish Sports Complex',
		jersey: 'Gray',
		googleMapsLink: 'https://goo.gl/maps/EeTL6Zy5ErWWM2nF9',
		imageUrl: '/images/mckinnish.jpg',
		date: '4/16/23',
		time: '11:00 AM'
	},
	{
		id: 3,
		description: 'Home Runs & Harmony',
		field: '1',
		location: 'McInnish Sports Complex',
		jersey: 'Gray',
		googleMapsLink: 'https://goo.gl/maps/EeTL6Zy5ErWWM2nF9',
		imageUrl: '/images/mckinnish.jpg',
		date: '4/16/23',
		time: '12:00 PM'
	},
	{
		id: 4,
		description: 'Home Runs & Harmony',
		field: '2',
		location: 'McInnish Sports Complex',
		jersey: 'Yellow',
		googleMapsLink: 'https://goo.gl/maps/EeTL6Zy5ErWWM2nF9',
		imageUrl: '/images/mckinnish.jpg',
		date: '4/23/23',
		time: '8:00 AM'
	},
	{
		id: 5,
		description: 'Base Invaders',
		field: '2',
		location: 'McInnish Sports Complex',
		jersey: 'Yellow',
		googleMapsLink: 'https://goo.gl/maps/EeTL6Zy5ErWWM2nF9',
		imageUrl: '/images/mckinnish.jpg',
		date: '4/23/23',
		time: '9:00 AM'
	}
];

const schedulesStore = writable(schedules);

export default schedulesStore;
