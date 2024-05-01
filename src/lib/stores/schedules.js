import { writable } from 'svelte/store';

const schedules = [

	{
		id: 1,
		description: 'Diesel',
		field: 'TBD',
		location: 'Spirit Park',
		jersey: 'Black',
		googleMapsLink: 'https://maps.app.goo.gl/GVmAxY3ir2Z6E9JF6',
		imageUrl: '/images/spirit_park.jpg',
		date: '5/4/24',
		time: '11:00 AM',
		isGame: true
	},
	{
		id: 2,
		description: 'Crew',
		field: 'TBD',
		location: 'Spirit Park',
		jersey: 'Black',
		googleMapsLink: 'https://maps.app.goo.gl/GVmAxY3ir2Z6E9JF6',
		imageUrl: '/images/spirit_park.jpg',
		date: '5/4/24',
		time: '2:00 PM',
		isGame: true
	}

];

const schedulesStore = writable(schedules);

export default schedulesStore;
