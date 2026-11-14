import apartments from './apartments';
import { reviewTexts, scoreLabels } from './reviews';
import terms from './terms';
import privacy from './privacy';
import photoAlts from './photoAlts';
import nearbyTrails from './nearbyTrails.json';

// Polish is the default language and the master shape: every other language must define the same keys
const pl = {
  meta: {
    title: "Apartamenty Dolina Strążyska | Noclegi blisko szlaków w Zakopanem",
    description: "Komfortowe apartamenty w Zakopanem blisko Doliny Strążyskiej. Idealne dla par i rodzin. Bezpłatny parking, Wi-Fi i bliskość górskich szlaków. Sprawdź dostępność!",
    ogTitle: 'Apartamenty Dolina Strążyska - Zakopane',
    contactTitle: "Kontakt i dojazd | Apartamenty Dolina Strążyska - Zakopane",
    contactDescription: "Skontaktuj się z Apartamentami Dolina Strążyska w Zakopanem. Sprawdź adres, numer telefonu i wskazówki dojazdu. Znajdziesz nas przy ul. Strążyskiej 4A.",
    reservationTitle: "Rezerwacja apartamentów w Zakopanem | Dolina Strążyska",
    reservationDescription: "Zarezerwuj apartament w Zakopanem blisko Doliny Strążyskiej. Widoki na Tatry, bezpłatny parking i Wi-Fi. Wybierz termin i sprawdź dostępność!",
    apartments: {
      "1": {
        "title": "Apartament 5 osób, 45 m², balkon i widok na Tatry | Dolina Strążyska",
        "description": "Komfortowy apartament dla 5 osób w Zakopanem, blisko Doliny Strążyskiej. 45 m², balkon z widokiem na Tatry, wyposażona kuchnia i bezpłatny parking. Sprawdź dostępność!"
      },
      "2": {
        "title": "Apartament dla 4 osób z balkonem i widokiem na Tatry | Dolina Strążyska",
        "description": "Apartament dla 4 osób w Zakopanem, blisko Doliny Strążyskiej. Balkon z widokiem na Tatry, wyposażona kuchnia, bezpłatny parking i Wi-Fi. Zarezerwuj pobyt!"
      },
      "3": {
        "title": "Rodzinny apartament 5 osób, balkon i widok na Tatry | Dolina Strążyska",
        "description": "Rodzinny apartament dla 5 osób w Zakopanem. 43 m², balkon z widokiem na Tatry, wyposażona kuchnia i bezpłatny parking. Blisko Doliny Strążyskiej i górskich szlaków."
      },
      "4": {
        "title": "Apartament 5 osób z balkonem i widokiem na Tatry | Dolina Strążyska - Błękitny",
        "description": "Przestronny apartament dla 5 osób w Zakopanem. 43 m², balkon z widokiem na Tatry, wyposażona kuchnia i Wi-Fi. Blisko Doliny Strążyskiej. Sprawdź dostępność!"
      },
      "5": {
        "title": "Studio dla 2 osób z widokiem na Tatry | Dolina Strążyska",
        "description": "Przytulne studio dla 2 osób w Zakopanem, idealne dla par. Widok na Tatry, wyposażony aneks kuchenny i bezpłatny parking. Blisko Doliny Strążyskiej i szlaków."
      },
      "6": {
        "title": "Apartament dla 4 osób z widokiem na Tatry | Dolina Strążyska",
        "description": "Komfortowy apartament dla 4 osób w Zakopanem. Widok na Tatry, wyposażona kuchnia, Wi-Fi i bezpłatny parking. Blisko Doliny Strążyskiej. Zarezerwuj pobyt!"
      }
    } as Record<number, { title: string; description: string }>,
    notFoundTitle: 'Nie znaleziono strony - Apartamenty Dolina Strążyska',
  },
  brand: {
    name: 'Apartamenty Dolina Strążyska',
    home: 'Apartamenty Dolina Strążyska - strona główna',
  },
  common: {
    backToTop: 'Wróć na górę',
    price: '{price} zł',
    bookOnline: 'Rezerwuj online',
    checkAvailability: 'Sprawdź dostępność',
  },
  nav: {
    apartments: 'Apartamenty',
    reservations: 'Rezerwacje',
    contact: 'Kontakt',
    openMenu: 'Otwórz menu',
    closeMenu: 'Zamknij menu',
  },
  language: {
    label: 'Język',
  },
  hero: {
    titleLine1: 'Twoje miejsce w Zakopanem',
    subtitle: 'Góralski klimat, widoki na Tatry i spokojny wypoczynek. Odkryj komfortowe apartamenty blisko górskich szlaków i centrum Zakopanego.',
    arrival: 'Data przyjazdu',
    departure: 'Data wyjazdu',
  },
  dateModal: {
    label: 'Wybór terminu',
    pickArrival: 'Wybierz datę przyjazdu.',
    pickDeparture: 'Wybierz datę wyjazdu.',
  },
  apartmentsSection: {
    title: 'Nasze apartamenty w Zakopanem',
    intro: 'Indywidualnie urządzone wnętrza, ręcznie rzeźbione meble i wyjątkowy góralski charakter. Wybierz apartament idealny na Twój pobyt w Zakopanem.',
    facts: {
      capacity: 'Do {count} osób',
      wifi: 'Bezpłatne Wi‑Fi',
      parking: 'Parking',
      trails: 'Blisko szlaków',
    },
  },
  card: {
    capacity: 'do {count} osób',
    defaultHighlight: 'Widok na góry',
    view: 'Zobacz apartament',
    previousPhoto: 'Poprzednie zdjęcie',
    nextPhoto: 'Następne zdjęcie',
    photoOf: 'Zdjęcie {current} z {total}',
  },
  facilities: {
    title: 'Wszystko dla Twojej wygody',
    intro: 'Zadbaliśmy o detale, aby Twój pobyt w Zakopanem był jak najbardziej komfortowy.',
    items: {
      parking: { title: 'Bezpłatny parking', text: 'Monitorowany, prywatny, na terenie obiektu.' },
      wifi: { title: 'Bezpłatne Wi-Fi', text: 'Dostępne dla wszystkich gości.' },
      kitchen: { title: 'Aneks kuchenny', text: 'W pełni wyposażony, w każdym apartamencie.' },
      checkin: { title: 'Elastyczne zameldowanie', text: 'Zameldowanie dopasowane do godziny Twojego przyjazdu.' },
      trails: { title: 'Blisko szlaków', text: 'Dolina Strążyska w zasięgu spaceru' },
    },
  },
  reviews: {
    title: 'Opinie naszych gości',
    intro: 'Zobacz, co goście najbardziej cenią w Apartamentach Dolina Strążyska.',
    count: { one: '{count} opinia', few: '{count} opinie', many: '{count} opinii', other: '{count} opinii' },
    texts: reviewTexts,
    scoreLabels,
  },
  location: {
    title: 'Blisko Tatr, niedaleko centrum',
    subtitle: 'Spokojna okolica, blisko szlaków i najważniejszych atrakcji Zakopanego.',
    distancesLabel: 'Orientacyjny czas pieszo',
    walking: 'ok. {minutes} min pieszo',
    places: {
      krupowki: 'Krupówki',
      valley: 'Wejście do Doliny Strążyskiej',
      museum: 'Muzeum Karola Szymanowskiego',
    },
    directions: 'Zobacz dojazd',
    mapAlt: 'Mapa lokalizacji Apartamentów Dolina Strążyska w Zakopanem',
  },
  footer: {
    links: 'Linki',
    contact: 'Kontakt',
    englishLabel: 'English · WhatsApp:',
  },
  contact: {
    title: 'Skontaktuj się z nami',
    intro: 'Masz pytania dotyczące pobytu? Chętnie pomożemy i doradzimy w wyborze apartamentu.',
    detailsTitle: 'Skontaktuj się z nami',
    detailsIntro: 'Jesteśmy tutaj, aby odpowiedzieć na Twoje pytania.',
    phone: 'Telefon',
    englishChannel: 'Kontakt po angielsku',
    email: 'E-mail',
    follow: 'Obserwuj nas',
    whatsappPolish: 'WhatsApp po polsku',
    locationTitle: 'Nasza lokalizacja',
    openMapAria: 'Zobacz lokalizację apartamentów w Mapach Google',
    mapAlt: 'Mapa okolicy apartamentów Dolina Strążyska w Zakopanem',
    openMap: 'Otwórz w Mapach Google',
    locationText: 'W spokojnej części Zakopanego, blisko tatrzańskich szlaków.',
    directions: 'Wyznacz trasę',
    planTitle: 'Zaplanuj swój pobyt',
    planText: 'Wybierz termin i znajdź apartament dla siebie.',
  },
  reservation: {
    back: 'Wróć do apartamentów',
    title: 'Zarezerwuj swój pobyt',
    intro: 'Wybierz termin i apartament. Do zobaczenia w Zakopanem.',
    bookingLabel: 'Rezerwacja apartamentu',
    help: 'Potrzebujesz pomocy z rezerwacją?',
    writeToUs: 'Napisz do nas',
  },
  documents: {
    termsTitle: 'Regulamin',
    privacyTitle: 'Polityka prywatności',
    close: 'Zamknij dokument',
    terms,
    privacy,
  },
  details: {
    photoNavigation: "Nawigacja po zdjęciach",
    previousPhoto: 'Poprzednie zdjęcie',
    nextPhoto: 'Następne zdjęcie',
    openFullscreen: 'Otwórz pełny ekran',
    closeFullscreen: 'Zamknij pełny ekran',
    thumbnailAlt: '{title} - miniatura {number}',
    factsLabel: 'Parametry apartamentu',
    capacity: 'do {count} osób',
    mountainView: 'widok na góry',
    amenitiesLabel: 'Udogodnienia apartamentu',
    amenities: {
      bathroom: 'Prywatna łazienka',
      kitchen: 'W pełni wyposażony aneks kuchenny',
      parking: 'Bezpłatny parking na miejscu',
      balcony: 'Balkon',
      rooms: { one: '{count} pokój', few: '{count} pokoje', many: '{count} pokoi', other: '{count} pokoi' },
    },
    priceFrom: 'Cena od',
    perNight: '/doba',
    directBooking: 'Rezerwując bezpośrednio, zapłacisz mniej.',
    bookOnline: 'Zarezerwuj online',
    about: 'O apartamencie',
    expand: 'Rozwiń opis',
    collapse: 'Zwiń opis',
    sleeping: 'Gdzie możesz spać?',
    whatYouFind: 'Co znajdziesz?',
  },
  rooms: {
    names: {
      livingRoom: 'Salon',
      bedroom: 'Sypialnia',
      studio: 'Studio',
    },
    beds: {
      sofa: 'Sofa rozkładana',
      couch: 'Kanapa rozkładana',
      single: 'Łóżko pojedyncze',
      double: 'Łóżko podwójne',
      largeDouble: 'Duże łóżko podwójne',
    },
    guests: { one: '{count} osoba', few: '{count} osoby', many: '{count} osób', other: '{count} osoby' },
  },
  equipment: {
    living: 'Salon',
    kitchen: 'Aneks kuchenny',
    bathroom: 'Łazienka',
    misc: 'Pozostałe',
  },
  accessories: {
    1: 'Telewizor',
    2: 'Wi-Fi',
    3: 'Ręczniki',
    4: 'Suszarka do włosów',
    5: 'Czajnik',
    6: 'Zestaw do kawy i herbaty',
    7: 'Płyta indukcyjna',
    8: 'Lodówka',
    9: 'Bezpłatny parking',
    10: 'Widok na góry',
    11: 'Monitoring na terenie posesji',
  },
  errorPage: {
    title: 'Nie znaleziono strony',
    text: 'Strona, której szukasz, nie istnieje lub została przeniesiona.',
    home: 'Wróć na stronę główną',
  },
  apartments,
  photoAlts,
  nearbyTrails,
};

export default pl;
