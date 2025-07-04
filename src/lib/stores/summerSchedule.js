import { writable } from 'svelte/store';

const summerSchedules = [
	{
		id: 1,
		description: 'Sky Blue',
		field: '2',
		location: 'Mike Lewis Park, Grand Prairie',
		jersey: 'TBD',
		googleMapsLink: 'https://g.co/kgs/KhbNkt3',
		imageUrl: '/images/mike_lewis.jpg',
		date: '7/9/2025',
		time: '7:00 PM',
		isGame: true
	},
	{
		id: 2,
		description: 'Homies',
		field: '2',
		location: 'Mike Lewis Park, Grand Prairie',
		jersey: 'TBD',
		googleMapsLink: 'https://g.co/kgs/KhbNkt3',
		imageUrl: '/images/mike_lewis.jpg',
		date: '7/9/2025',
		time: '9:00 PM',
		isGame: true
	},
	{
		id: 3,
		description: 'Baddies & Daddies',
		field: '1',
		location: 'Mike Lewis Park, Grand Prairie',
		jersey: 'TBD',
		googleMapsLink: 'https://g.co/kgs/KhbNkt3',
		imageUrl: '/images/mike_lewis.jpg',
		date: '7/16/2025',
		time: '7:00 PM',
		isGame: true
	},
	{
		id: 4,
		description: 'Team Krush',
		field: '1',
		location: 'Mike Lewis Park, Grand Prairie',
		jersey: 'TBD',
		googleMapsLink: 'https://g.co/kgs/KhbNkt3',
		imageUrl: '/images/mike_lewis.jpg',
		date: '7/16/2025',
		time: '8:00 PM',
		isGame: true
	},
	{
		id: 5,
		description: 'Hoochies',
		field: '3',
		location: 'Mike Lewis Park, Grand Prairie',
		jersey: 'TBD',
		googleMapsLink: 'https://g.co/kgs/KhbNkt3',
		imageUrl: '/images/mike_lewis.jpg',
		date: '7/23/2025',
		time: '8:00 PM',
		isGame: true
	},
	{
		id: 6,
		description: 'The Farm Team',
		field: '3',
		location: 'Mike Lewis Park, Grand Prairie',
		jersey: 'TBD',
		googleMapsLink: 'https://g.co/kgs/KhbNkt3',
		imageUrl: '/images/mike_lewis.jpg',
		date: '7/23/2025',
		time: '9:00 PM',
		isGame: true
	},
	{
		id: 7,
		description: 'Saloon Boys',
		field: '3',
		location: 'Mike Lewis Park, Grand Prairie',
		jersey: 'TBD',
		googleMapsLink: 'https://g.co/kgs/KhbNkt3',
		imageUrl: '/images/mike_lewis.jpg',
		date: '7/30/2025',
		time: '8:00 PM',
		isGame: true
	},
	{
		id: 8,
		description: 'Bandidos',
		field: '3',
		location: 'Mike Lewis Park, Grand Prairie',
		jersey: 'TBD',
		googleMapsLink: 'https://g.co/kgs/KhbNkt3',
		imageUrl: '/images/mike_lewis.jpg',
		date: '7/30/2025',
		time: '9:00 PM',
		isGame: true
	},
	{
		id: 9,
		description: 'Homies',
		field: '3',
		location: 'Mike Lewis Park, Grand Prairie',
		jersey: 'TBD',
		googleMapsLink: 'https://g.co/kgs/KhbNkt3',
		imageUrl: '/images/mike_lewis.jpg',
		date: '8/6/2025',
		time: '7:00 PM',
		isGame: true
	},
	{
		id: 10,
		description: 'Sky Blue',
		field: '3',
		location: 'Mike Lewis Park, Grand Prairie',
		jersey: 'TBD',
		googleMapsLink: 'https://g.co/kgs/KhbNkt3',
		imageUrl: '/images/mike_lewis.jpg',
		date: '8/6/2025',
		time: '8:00 PM',
		isGame: true
	},
	{
		id: 11,
		description: 'Playoffs Rainout #1 or #2',
		field: 'TBD',
		location: 'Mike Lewis Park, Grand Prairie',
		jersey: 'TBD',
		googleMapsLink: 'https://g.co/kgs/KhbNkt3',
		imageUrl: '/images/mike_lewis.jpg',
		date: '8/20/2025',
		time: '6:30 PM – 10:30 PM',
		isGame: true
	},
	{
		id: 12,
		description: 'Playoffs Rainout #2',
		field: 'TBD',
		location: 'Mike Lewis Park, Grand Prairie',
		jersey: 'TBD',
		googleMapsLink: 'https://g.co/kgs/KhbNkt3',
		imageUrl: '/images/mike_lewis.jpg',
		date: '8/28/2025',
		time: '6:30 PM – 10:30 PM',
		isGame: true
	}
];

const summerScheduleStore = writable(summerSchedules);

export default summerScheduleStore;
