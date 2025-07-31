import { writable } from 'svelte/store';

const summerSchedules = [
  {
    id: 7,
    description: 'Hoochies',
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
    id: 8,
    description: 'The Farm Team',
    field: '3',
    location: 'Mike Lewis Park, Grand Prairie',
    jersey: 'TBD',
    googleMapsLink: 'https://g.co/kgs/KhbNkt3',
    imageUrl: '/images/mike_lewis.jpg',
    date: '8/6/2025',
    time: '9:00 PM',
    isGame: true
  },
  {
    id: 9,
    description: 'Saloon Boys',
    field: '3',
    location: 'Mike Lewis Park, Grand Prairie',
    jersey: 'TBD',
    googleMapsLink: 'https://g.co/kgs/KhbNkt3',
    imageUrl: '/images/mike_lewis.jpg',
    date: '8/13/2025',
    time: '8:00 PM',
    isGame: true
  },
  {
    id: 10,
    description: 'Bandidos',
    field: '3',
    location: 'Mike Lewis Park, Grand Prairie',
    jersey: 'TBD',
    googleMapsLink: 'https://g.co/kgs/KhbNkt3',
    imageUrl: '/images/mike_lewis.jpg',
    date: '8/13/2025',
    time: '9:00 PM',
    isGame: true
  },
  {
    id: 11,
    description: 'Homies',
    field: '3',
    location: 'Mike Lewis Park, Grand Prairie',
    jersey: 'TBD',
    googleMapsLink: 'https://g.co/kgs/KhbNkt3',
    imageUrl: '/images/mike_lewis.jpg',
    date: '8/20/2025',
    time: '7:00 PM',
    isGame: true
  },
  {
    id: 12,
    description: 'Sky Blue',
    field: '3',
    location: 'Mike Lewis Park, Grand Prairie',
    jersey: 'TBD',
    googleMapsLink: 'https://g.co/kgs/KhbNkt3',
    imageUrl: '/images/mike_lewis.jpg',
    date: '8/20/2025',
    time: '8:00 PM',
    isGame: true
  }
];

const summerScheduleStore = writable(summerSchedules);

export default summerScheduleStore;
