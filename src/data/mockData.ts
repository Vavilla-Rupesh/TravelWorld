export interface Flight {
  id: string;
  airline: string;
  logo: string;
  from: string;
  to: string;
  departure: string;
  arrival: string;
  duration: string;
  price: number;
  stops: number;
  class: string;
  seatsLeft: number;
}

export interface Hotel {
  id: string;
  name: string;
  image: string;
  location: string;
  rating: number;
  price: number;
  amenities: string[];
  discount?: number;
}

export interface Bus {
  id: string;
  operator: string;
  from: string;
  to: string;
  departure: string;
  arrival: string;
  duration: string;
  price: number;
  seatsAvailable: number;
  type: string;
  rating: number;
}

export interface Train {
  id: string;
  name: string;
  number: string;
  from: string;
  to: string;
  departure: string;
  arrival: string;
  duration: string;
  classes: { type: string; price: number; available: number }[];
  days: string[];
}

export interface Package {
  id: string;
  name: string;
  image: string;
  destination: string;
  duration: string;
  price: number;
  rating: number;
  highlights: string[];
  itinerary: { day: number; title: string; activities: string[] }[];
}

export const mockFlights: Flight[] = [
  {
    id: 'FL001',
    airline: 'SkyWings',
    logo: '✈️',
    from: 'DEL',
    to: 'BOM',
    departure: '06:00',
    arrival: '08:30',
    duration: '2h 30m',
    price: 4500,
    stops: 0,
    class: 'Economy',
    seatsLeft: 12,
  },
  {
    id: 'FL002',
    airline: 'AirVista',
    logo: '🛫',
    from: 'DEL',
    to: 'BOM',
    departure: '09:15',
    arrival: '11:45',
    duration: '2h 30m',
    price: 3800,
    stops: 0,
    class: 'Economy',
    seatsLeft: 8,
  },
  {
    id: 'FL003',
    airline: 'CloudJet',
    logo: '✈️',
    from: 'DEL',
    to: 'BOM',
    departure: '14:30',
    arrival: '17:00',
    duration: '2h 30m',
    price: 5200,
    stops: 0,
    class: 'Economy',
    seatsLeft: 25,
  },
];

export const mockHotels: Hotel[] = [
  {
    id: 'HT001',
    name: 'Grand Palace Hotel',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop',
    location: 'Mumbai, Maharashtra',
    rating: 4.5,
    price: 3500,
    amenities: ['WiFi', 'Pool', 'Spa', 'Gym', 'Restaurant'],
    discount: 20,
  },
  {
    id: 'HT002',
    name: 'Seaside Resort',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&h=600&fit=crop',
    location: 'Goa',
    rating: 4.8,
    price: 4200,
    amenities: ['WiFi', 'Beach Access', 'Pool', 'Bar', 'Restaurant'],
    discount: 15,
  },
  {
    id: 'HT003',
    name: 'Mountain View Inn',
    image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&h=600&fit=crop',
    location: 'Shimla, Himachal Pradesh',
    rating: 4.3,
    price: 2800,
    amenities: ['WiFi', 'Mountain View', 'Fireplace', 'Restaurant'],
  },
];

export const mockBuses: Bus[] = [
  {
    id: 'BUS001',
    operator: 'Royal Travels',
    from: 'Delhi',
    to: 'Jaipur',
    departure: '22:00',
    arrival: '05:30',
    duration: '7h 30m',
    price: 800,
    seatsAvailable: 15,
    type: 'AC Sleeper',
    rating: 4.2,
  },
  {
    id: 'BUS002',
    operator: 'Express Travels',
    from: 'Delhi',
    to: 'Jaipur',
    departure: '23:30',
    arrival: '06:45',
    duration: '7h 15m',
    price: 950,
    seatsAvailable: 8,
    type: 'Volvo AC',
    rating: 4.5,
  },
];

export const mockTrains: Train[] = [
  {
    id: 'TR001',
    name: 'Rajdhani Express',
    number: '12301',
    from: 'New Delhi',
    to: 'Mumbai Central',
    departure: '16:55',
    arrival: '08:35',
    duration: '15h 40m',
    classes: [
      { type: '3AC', price: 1850, available: 45 },
      { type: '2AC', price: 2650, available: 12 },
      { type: '1AC', price: 4500, available: 5 },
    ],
    days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  },
];

export const mockPackages: Package[] = [
  {
    id: 'PKG001',
    name: 'Kashmir Paradise',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
    destination: 'Srinagar, Kashmir',
    duration: '5 Days / 4 Nights',
    price: 25000,
    rating: 4.7,
    highlights: ['Houseboat Stay', 'Shikara Ride', 'Gulmarg Visit', 'All Meals'],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Srinagar',
        activities: ['Airport pickup', 'Check-in to houseboat', 'Shikara ride', 'Welcome dinner'],
      },
      {
        day: 2,
        title: 'Gulmarg Excursion',
        activities: ['Drive to Gulmarg', 'Gondola ride', 'Snow activities', 'Return to Srinagar'],
      },
    ],
  },
  {
    id: 'PKG002',
    name: 'Goa Beach Escape',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&h=600&fit=crop',
    destination: 'Goa',
    duration: '4 Days / 3 Nights',
    price: 18000,
    rating: 4.6,
    highlights: ['Beach Resort', 'Water Sports', 'Night Cruise', 'All Breakfasts'],
    itinerary: [
      {
        day: 1,
        title: 'Arrival & Beach Time',
        activities: ['Airport pickup', 'Resort check-in', 'Beach relaxation', 'Sunset viewing'],
      },
    ],
  },
];
