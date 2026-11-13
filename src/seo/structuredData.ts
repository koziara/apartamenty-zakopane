import apartmentList from '../lists/apartmentList.json';
import { SITE_URL } from './PageMeta';

const address = {
  '@type': 'PostalAddress',
  streetAddress: 'Strążyska 4A',
  postalCode: '34-500',
  addressLocality: 'Zakopane',
  addressCountry: 'PL',
};

const sameAs = [
  'https://www.facebook.com/profile.php?id=100094365950629',
  'https://www.instagram.com/apartamenty_dolina_strazyska',
];

export const lodgingJsonLd = (name: string, description: string, url: string, inLanguage: string) => {
  const prices = apartmentList.map(a => a.price);
  return {
    '@context': 'https://schema.org',
    '@type': 'LodgingBusiness',
    '@id': `${SITE_URL}/#lodging`,
    name,
    description,
    url,
    inLanguage,
    image: `${SITE_URL}/img/house.webp`,
    logo: `${SITE_URL}/img/logo-dark.png`,
    telephone: '+48607601471',
    email: 'biurodolinastrazyska@gmail.com',
    address,
    priceRange: `${Math.min(...prices)}–${Math.max(...prices)} PLN`,
    currenciesAccepted: 'PLN',
    amenityFeature: [
      { '@type': 'LocationFeatureSpecification', name: 'Free parking', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Wi-Fi', value: true },
    ],
    sameAs,
  };
};

export const apartmentJsonLd = (
  apartment: (typeof apartmentList)[number],
  text: { title: string; description: string; size: string },
  url: string,
  inLanguage: string,
) => {
  const sqm = parseFloat(text.size.match(/\d+(?:[.,]\d+)?/)?.[0].replace(',', '.') ?? '');
  return {
    '@context': 'https://schema.org',
    '@type': 'Apartment',
    name: text.title,
    description: text.description.split('\n\n')[0],
    url,
    inLanguage,
    image: [apartment.photo, apartment.photo2, apartment.photo3, apartment.photo4, apartment.photo5, apartment.photo6, apartment.photo7]
      .filter((photo): photo is string => typeof photo === 'string' && photo.length > 0)
      .map(photo => SITE_URL + photo),
    numberOfRooms: apartment.noOfRooms,
    occupancy: { '@type': 'QuantitativeValue', maxValue: Number(apartment.capacity) },
    ...(sqm ? { floorSize: { '@type': 'QuantitativeValue', value: sqm, unitCode: 'MTK' } } : {}),
    address,
    containedInPlace: { '@id': `${SITE_URL}/#lodging` },
  };
};
