import { writable } from 'svelte/store';

const schedules = [
	{
		description: 'Practice - Preston Hollow',
		location: '1',
		date: '4/15/23',
		time: '1:00 PM'
	},
	{
		description: 'Base Invaders',
		location: '1',
		date: '4/16/23',
		time: '11:00 AM'
	},
	{
		description: 'Home Runs & Harmony',
		location: '1',
		date: '4/16/23',
		time: '12:00 PM'
	},
	{
		description: 'Home Runs & Harmony',
		location: '2',
		date: '4/23/23',
		time: '8:00 AM'
	},
	{
		description: 'Base Invaders',
		location: '2',
		date: '4/23/23',
		time: '9:00 AM'
	},
	{
		description: 'E Division Bye Week',
		location: '-',
		jersey: '-',
		date: '4/30/23',
		time: '-'
	}
];

const schedulesStore = writable(schedules);

export default schedulesStore;
