import { writable } from 'svelte/store';

const events = [
	{
		id: 1,
		title: 'Scavenger Hunt',
		info: [
			'Join us for our first PSSA Sc4venger Hunt where teams will compete in various games and try to find hidden objects and clues in the fastest time.',
			'This event will take place at S4. Doors open at 6pm and games begin at 7pm. $10 Cover'
		],
		location: 'S4',
		googleMapsLink: 'https://goo.gl/maps/2AVGQVJKvnBvWs558',
		imageUrl: '/images/scavengerHunt.jpg',
		date: '5/7/23',
		time: '7:00 PM'
	},
	{
		id: 2,
		title: 'Uniform Night',
		info: ['Wear your Jersey', 'Sign In', 'Be social'],
		location: 'The Hidden Door',
		googleMapsLink: 'https://maps.app.goo.gl/2b3wxqKPhDSfNWYBA',
		imageUrl: '/images/uniform.jpg',
		date: '2/8/2025',
		time: '6:00 - 9:00 PM'
	}
];

const eventsStore = writable(events);

export default eventsStore;
