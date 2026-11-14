import type { Messages } from '../../types';
import apartments from './apartments';
import { reviewTexts, scoreLabels } from './reviews';
import terms from './terms';
import privacy from './privacy';
import photoAlts from './photoAlts';
import nearbyTrails from './nearbyTrails.json';

const en: Messages = {
  meta: {
    title: "Apartamenty Dolina Strążyska | Apartments Near Hiking Trails in Zakopane",
    description: "Comfortable apartments in Zakopane near Strążyska Valley. Perfect for couples and families. Free parking, Wi-Fi and nearby mountain trails. Check availability!",
    ogTitle: 'Dolina Strążyska Apartments - Zakopane',
    contactTitle: "Contact & Directions | Apartamenty Dolina Strążyska - Zakopane",
    contactDescription: "Contact Apartamenty Dolina Strążyska in Zakopane. Find our address, phone number and directions. Visit us at 4A Strążyska Street, Zakopane.",
    reservationTitle: "Book Apartments in Zakopane | Dolina Strążyska",
    reservationDescription: "Book an apartment in Zakopane near Strążyska Valley. Enjoy Tatra Mountain views, free parking and Wi-Fi. Choose your dates and check availability!",
    apartments: {
      "1": {
        "title": "Apartment for 5, 45 m², Balcony & Tatra Views | Dolina Strążyska",
        "description": "Comfortable apartment for 5 guests in Zakopane, near Strążyska Valley. 45 m², balcony with Tatra Mountain views, equipped kitchen and free parking. Check availability!"
      },
      "2": {
        "title": "Apartment for 4 with Balcony & Tatra Views | Dolina Strążyska",
        "description": "Apartment for 4 guests in Zakopane, near Strążyska Valley. Balcony with Tatra Mountain views, equipped kitchen, free parking and Wi-Fi. Book your stay!"
      },
      "3": {
        "title": "Family Apartment for 5 with Balcony & Tatra Views | Dolina Strążyska",
        "description": "Family apartment for 5 guests in Zakopane. 43 m², balcony with Tatra Mountain views, equipped kitchen and free parking. Close to Strążyska Valley and hiking trails."
      },
      "4": {
        "title": "Apartment for 5 with Balcony & Tatra Views | Dolina Strążyska - Sky Blue Apartment",
        "description": "Spacious apartment for 5 guests in Zakopane. 43 m², balcony with Tatra Mountain views, equipped kitchen and Wi-Fi. Near Strążyska Valley. Check availability!"
      },
      "5": {
        "title": "Studio for 2 with Tatra Mountain Views | Dolina Strążyska",
        "description": "Cozy studio for 2 guests in Zakopane, perfect for couples. Tatra Mountain views, equipped kitchenette and free parking. Near Strążyska Valley and hiking trails."
      },
      "6": {
        "title": "Apartment for 4 with Tatra Mountain Views | Dolina Strążyska",
        "description": "Comfortable apartment for 4 guests in Zakopane. Tatra Mountain views, equipped kitchen, Wi-Fi and free parking. Near Strążyska Valley. Book your stay!"
      }
    },
    notFoundTitle: 'Page not found - Dolina Strążyska Apartments',
  },
  brand: {
    name: 'Dolina Strążyska Apartments',
    home: 'Dolina Strążyska Apartments - home page',
  },
  common: {
    backToTop: 'Back to top',
    price: '{price} PLN',
    bookOnline: 'Book online',
    checkAvailability: 'Check availability',
  },
  nav: {
    apartments: 'Apartments',
    reservations: 'Reservations',
    contact: 'Contact',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
  },
  language: {
    label: 'Language',
  },
  hero: {
    titleLine1: 'Your place in Zakopane',
    subtitle: 'Traditional highlander charm, views of the Tatra Mountains, and a peaceful getaway. Discover comfortable apartments close to mountain trails and the center of Zakopane.',
    arrival: 'Check-in date',
    departure: 'Check-out date',
  },
  dateModal: {
    label: 'Choose dates',
    pickArrival: 'Select your check-in date.',
    pickDeparture: 'Select your check-out date.',
  },
  apartmentsSection: {
    title: 'Our apartments in Zakopane',
    intro: 'Individually decorated interiors, hand-carved furniture and a unique highlander character. Choose the perfect apartment for your stay in Zakopane.',
    facts: {
      capacity: 'Up to {count} guests',
      wifi: 'Free Wi‑Fi',
      parking: 'Parking',
      trails: 'Close to the trails',
    },
  },
  card: {
    capacity: 'up to {count} guests',
    defaultHighlight: 'Mountain view',
    view: 'View apartment',
    previousPhoto: 'Previous photo',
    nextPhoto: 'Next photo',
    photoOf: 'Photo {current} of {total}',
  },
  facilities: {
    title: 'Everything for your comfort',
    intro: 'We have taken care of the details to make your stay in Zakopane as comfortable as possible.',
    items: {
      parking: { title: 'Free parking', text: 'Monitored, private, on the premises.' },
      wifi: { title: 'Free Wi-Fi', text: 'Available to all guests.' },
      kitchen: { title: 'Kitchenette', text: 'Fully equipped, in every apartment.' },
      checkin: { title: 'Flexible check-in', text: 'Check-in tailored to your arrival time.' },
      trails: { title: 'Close to the trails', text: 'Strążyska Valley within walking distance' },
    },
  },
  reviews: {
    title: 'What our guests say',
    intro: 'See what guests appreciate most about Dolina Strążyska Apartments.',
    count: { one: '{count} review', other: '{count} reviews' },
    texts: reviewTexts,
    scoreLabels,
  },
  location: {
    title: 'Close to the Tatras, not far from the centre',
    subtitle: 'A quiet neighbourhood, close to the trails and the most important attractions of Zakopane.',
    distancesLabel: 'Approximate walking time',
    walking: 'approx. {minutes} min on foot',
    places: {
      krupowki: 'Krupówki',
      valley: 'Entrance to Strążyska Valley',
      museum: 'Karol Szymanowski Museum',
    },
    directions: 'Get directions',
    mapAlt: 'Map showing the location of Dolina Strążyska Apartments in Zakopane',
  },
  footer: {
    links: 'Links',
    contact: 'Contact',
    englishLabel: 'English · WhatsApp:',
  },
  contact: {
    title: 'Get in touch',
    intro: 'Have questions about your stay? We are happy to help and advise you on choosing an apartment.',
    detailsTitle: 'Get in touch',
    detailsIntro: 'We are here to answer your questions.',
    phone: 'Phone',
    englishChannel: 'Contact in English',
    email: 'E-mail',
    follow: 'Follow us',
    whatsappPolish: 'WhatsApp (Polish)',
    locationTitle: 'Our location',
    openMapAria: 'View the location of the apartments on Google Maps',
    mapAlt: 'Map of the area around Dolina Strążyska Apartments in Zakopane',
    openMap: 'Open in Google Maps',
    locationText: 'In a quiet part of Zakopane, close to the Tatra trails.',
    directions: 'Get directions',
    planTitle: 'Plan your stay',
    planText: 'Choose your dates and find the apartment for you.',
  },
  reservation: {
    back: 'Back to apartments',
    title: 'Book your stay',
    intro: 'Choose your dates and apartment. See you in Zakopane.',
    bookingLabel: 'Apartment booking',
    help: 'Need help with your booking?',
    writeToUs: 'Write to us',
  },
  documents: {
    termsTitle: 'Terms and Conditions',
    privacyTitle: 'Privacy Policy',
    close: 'Close document',
    terms,
    privacy,
  },
  details: {
    photoNavigation: "Photo navigation",
    previousPhoto: 'Previous photo',
    nextPhoto: 'Next photo',
    openFullscreen: 'Open full screen',
    closeFullscreen: 'Close full screen',
    thumbnailAlt: '{title} - thumbnail {number}',
    factsLabel: 'Apartment details',
    capacity: 'up to {count} guests',
    mountainView: 'mountain view',
    amenitiesLabel: 'Apartment amenities',
    amenities: {
      bathroom: 'Private bathroom',
      kitchen: 'Fully equipped kitchenette',
      parking: 'Free on-site parking',
      balcony: 'Balcony',
      rooms: { one: '{count} room', other: '{count} rooms' },
    },
    priceFrom: 'From',
    perNight: '/night',
    directBooking: 'Book directly and pay less.',
    bookOnline: 'Book online',
    about: 'About the apartment',
    expand: 'Show more',
    collapse: 'Show less',
    sleeping: 'Where can you sleep?',
    whatYouFind: 'What you will find',
  },
  rooms: {
    names: {
      livingRoom: 'Living room',
      bedroom: 'Bedroom',
      studio: 'Studio',
    },
    beds: {
      sofa: 'Sofa bed',
      couch: 'Sofa bed',
      single: 'Single bed',
      double: 'Double bed',
      largeDouble: 'Large double bed',
    },
    guests: { one: '{count} guest', other: '{count} guests' },
  },
  equipment: {
    living: 'Living room',
    kitchen: 'Kitchenette',
    bathroom: 'Bathroom',
    misc: 'Other',
  },
  accessories: {
    1: 'TV',
    2: 'Wi-Fi',
    3: 'Towels',
    4: 'Hairdryer',
    5: 'Kettle',
    6: 'Coffee and tea set',
    7: 'Induction hob',
    8: 'Fridge',
    9: 'Free parking',
    10: 'Mountain view',
    11: 'CCTV on the premises',
  },
  errorPage: {
    title: 'Page not found',
    text: 'The page you are looking for does not exist or has been moved.',
    home: 'Back to the home page',
  },
  apartments,
  photoAlts,
  nearbyTrails,
};

export default en;
