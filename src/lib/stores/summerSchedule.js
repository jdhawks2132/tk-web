import { writable } from 'svelte/store';

const summerSchedules = [
	{
		id: 1,
		description: 'Opening Day – Week 1',
		field: 'TBD',
		location: 'Mike Lewis Park, Grand Prairie',
		jersey: 'TBD',
		googleMapsLink: 'https://g.co/kgs/KhbNkt3',
		imageUrl: '/images/mike_lewis.jpg',
		date: '7/9/2025',
		time: '6:30 PM – 10:30 PM',
		isGame: true
	},
	{
		id: 2,
		description: 'Week 2',
		field: 'TBD',
		location: 'Mike Lewis Park, Grand Prairie',
		jersey: 'TBD',
		googleMapsLink: 'https://g.co/kgs/KhbNkt3',
		imageUrl: '/images/mike_lewis.jpg',
		date: '7/16/2025',
		time: '6:30 PM – 10:30 PM',
		isGame: true
	},
	{
		id: 3,
		description: 'Week 3',
		field: 'TBD',
		location: 'Mike Lewis Park, Grand Prairie',
		jersey: 'TBD',
		googleMapsLink: 'https://g.co/kgs/KhbNkt3',
		imageUrl: '/images/mike_lewis.jpg',
		date: '7/23/2025',
		time: '6:30 PM – 10:30 PM',
		isGame: true
	},
	{
		id: 4,
		description: 'Week 4',
		field: 'TBD',
		location: 'Mike Lewis Park, Grand Prairie',
		jersey: 'TBD',
		googleMapsLink: 'https://g.co/kgs/KhbNkt3',
		imageUrl: '/images/mike_lewis.jpg',
		date: '7/30/2025',
		time: '6:30 PM – 10:30 PM',
		isGame: true
	},
	{
		id: 5,
		description: 'Week 5',
		field: 'TBD',
		location: 'Mike Lewis Park, Grand Prairie',
		jersey: 'TBD',
		googleMapsLink: 'https://g.co/kgs/KhbNkt3',
		imageUrl: '/images/mike_lewis.jpg',
		date: '8/6/2025',
		time: '6:30 PM – 10:30 PM',
		isGame: true
	},
	{
		id: 6,
		description: 'Playoffs or Rainout #1',
		field: 'TBD',
		location: 'Mike Lewis Park, Grand Prairie',
		jersey: 'TBD',
		googleMapsLink: 'https://g.co/kgs/KhbNkt3',
		imageUrl: '/images/mike_lewis.jpg',
		date: '8/13/2025',
		time: '6:30 PM – 10:30 PM',
		isGame: true
	},
	{
		id: 7,
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
		id: 8,
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
