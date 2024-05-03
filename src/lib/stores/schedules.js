import { writable } from 'svelte/store';

const schedules = [

	{
		id: 1,
		description: 'Diesel',
		field: '2',
		location: 'Spirit Park',
		jersey: 'Black',
		googleMapsLink: 'https://maps.app.goo.gl/GVmAxY3ir2Z6E9JF6',
		imageUrl: '/images/spirit_park.jpg',
		date: '5/4/24',
		time: '12:00 AM',
		isGame: true
	},
	{
		id: 2,
		description: 'Crew',
		field: '2',
		location: 'Spirit Park',
		jersey: 'Black',
		googleMapsLink: 'https://maps.app.goo.gl/GVmAxY3ir2Z6E9JF6',
		imageUrl: '/images/spirit_park.jpg',
		date: '5/4/24',
		time: '1:00 PM',
		isGame: true
	},
	{
		id: 3,
		description: 'Osos',
		field: '5',
		location: 'McInnish Sports Complex',
		jersey: 'Gray',
		googleMapsLink: 'https://goo.gl/maps/EeTL6Zy5ErWWM2nF9',
		imageUrl: '/images/mckinnish.jpg',
		date: '5/5/24',
		time: '1:00 PM',
		isGame: true
	},
	{
		id: 4,
		description: 'Kats',
		field: '5',
		location: 'McInnish Sports Complex',
		jersey: 'Gray',
		googleMapsLink: 'https://goo.gl/maps/EeTL6Zy5ErWWM2nF9',
		imageUrl: '/images/mckinnish.jpg',
		date: '5/5/24',
		time: '2:00 PM',
		isGame: true
	},

];

const schedulesStore = writable(schedules);

export default schedulesStore;
