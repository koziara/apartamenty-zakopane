import type { ApartmentText } from '../../types';

// Apartment copy by apartmentId (see src/lists/apartmentList.json for the language-neutral data)
const apartments: Record<number, ApartmentText> = {
  1: {
    title: 'Orange Apartment',
    size: '45 m²',
    description: 'The Orange Apartment stands out with its warm colour palette, plenty of natural light and a cosy atmosphere. The combination of orange and burgundy accents with light wood and traditional Zakopane details gives the interior a unique character.\n\nParticular attention is drawn by the hand-carved wooden furniture, which highlights the regional style of the apartment. Carefully chosen accessories, patterned textiles and warm colours create a space where you can feel the true atmosphere of the Podhale region without giving up everyday comfort.\n\nLarge windows let in natural light, and the cosy lounge area invites you to spend time together. It is a place for a quiet morning over coffee as well as for resting after a day of mountain hiking.\n\nThe Orange Apartment will be an excellent choice for those who value a homely atmosphere, original interiors and relaxing amid the nature of the Tatras.',
    floor: 'Ground floor',
    highlight: 'Bright interior',
    equipment: {
      living: ['Sofa bed', 'Armchairs', 'Coffee table', 'Dining table', 'TV'],
      kitchen: ['Fridge', 'Induction hob', 'Electric kettle', 'Tableware', 'Kitchen utensils'],
      bathroom: ['Private bathroom with shower', 'Towels', 'Hairdryer'],
      misc: ['Wi-Fi', 'Handmade wooden furniture', 'Balcony', 'Mountain view', 'Free monitored parking'],
    },
  },
  2: {
    title: 'Turquoise Apartment',
    size: '36 m²',
    description: 'The Turquoise Apartment stands out with an elegant combination of light wood, natural materials and distinctive turquoise accents. Its cosy interior blends the traditional Zakopane style with modern comfort, creating an ideal place for a peaceful rest amid the Tatras.\n\nIts unique character comes from hand-carved wooden furniture, decorative ceiling beams and carefully chosen decorations inspired by the culture of the Podhale region. Turquoise armchairs and a sofa bring freshness to the interior, while the warm shades of wood make the whole space exceptionally cosy.\n\nThanks to its southern exposure, the large windows let in plenty of natural light. An additional asset of the apartment is the balcony, where you can start the day with a morning coffee admiring the mountain scenery, or relax after a day spent on the Tatra trails.\n\nThe well-thought-out layout ensures comfort both for time spent together and for moments of rest. The cosy lounge area and dining space invite quiet evenings and shared meals in a special atmosphere.\n\nThe Turquoise Apartment is an excellent choice for couples and families looking for a combination of mountain character, comfort and closeness to the nature of the Tatras.',
    floor: 'Ground floor',
    highlight: 'Balcony with a view',
    equipment: {
      living: ['Sofa bed', 'Armchairs', 'Coffee table', 'Dining table', 'TV'],
      kitchen: ['Fridge', 'Induction hob', 'Electric kettle', 'Tableware', 'Kitchen utensils'],
      bathroom: ['Private bathroom with shower', 'Towels', 'Hairdryer'],
      misc: ['Wi-Fi', 'Handmade wooden furniture', 'Balcony', 'Mountain view', 'Free monitored parking'],
    },
  },
  3: {
    title: 'Ochre Apartment',
    size: '43 m²',
    description: 'The Ochre Apartment delights with its warm colours, natural wood and a cosy atmosphere inspired by the traditional Zakopane style. Light walls, wooden finishes and characteristic shades of ochre create a harmonious space where you can feel the true atmosphere of the Podhale region.\n\nIts special charm comes from handmade wooden furniture, decorative details and carefully chosen accessories. The cosy lounge area with couches in warm colours invites you to spend time together, and the large windows fill the interior with natural light.\n\nOne of the greatest assets of the apartment is the balcony with a view of the picturesque surroundings. It is an excellent place for a morning coffee, a moment of rest in the fresh air or relaxing after a day of Tatra hikes.\n\nThe Ochre Apartment is a great fit for a stay with family or a group of friends. Its space is conducive to shared meals, conversations and quiet evenings, creating ideal conditions for rest in the special atmosphere of Zakopane.',
    floor: 'Ground floor',
    highlight: 'Extra bed',
    equipment: {
      living: ['Two sofa beds', 'Armchairs', 'Coffee table', 'Dining table', 'TV'],
      kitchen: ['Fridge', 'Induction hob', 'Electric kettle', 'Tableware', 'Kitchen utensils'],
      bathroom: ['Private bathroom with shower', 'Towels', 'Hairdryer'],
      misc: ['Wi-Fi', 'Handmade wooden furniture', 'Balcony', 'Mountain view', 'Free monitored parking'],
    },
  },
  4: {
    title: 'Sky Blue Apartment',
    size: '43 m²',
    description: 'The Sky Blue Apartment is on the first floor and stands out with its warm, wooden interior and sky-blue accents. Hand-carved furniture in the regional style gives it a one-of-a-kind mountain character.\n\nThe living area has a comfortable sofa bed that sleeps two, and a TV for relaxing in the evening. The kitchenette has a fridge, an induction hob and a kettle.\n\nThe separate bedroom, with a double and a single bed, is the perfect place to rest after a full day of hiking. The private bathroom comes with towels and a hair dryer, and the balcony looks out onto the mountains.\n\nThe Sky Blue Apartment is a good choice for families and groups of friends who want a homely, highlander-style stay in Zakopane. Guests get free Wi-Fi and monitored parking.',
    equipment: {
      living: ['Sofa bed', 'Armchairs', 'Coffee table', 'Dining table', 'TV'],
      kitchen: ['Fridge', 'Induction hob', 'Electric kettle', 'Tableware', 'Kitchen utensils'],
      bathroom: ['Private bathroom with shower', 'Towels', 'Hairdryer'],
      misc: ['Wi-Fi', 'Handmade wooden furniture', 'Balcony', 'Mountain view', 'Free monitored parking'],
    },
  },
  5: {
    title: 'Grey Apartment',
    size: 'approx. 16 m²',
    description: 'The Grey Apartment is an intimate, cosy space created for a rest for two. A subdued colour palette, subtle shades of grey and a calm atmosphere create ideal conditions for a romantic weekend or a longer stay in Zakopane.\n\nThe elegant, harmonious interior is conducive to relaxation and lets you escape the daily rush. It is a place where you can enjoy quiet mornings over a shared coffee, rest after mountain hikes and spend evenings just the two of you.\n\nThe proximity of the Tatra trails and the centre of Zakopane means the apartment combines the possibility of active leisure with moments of peace and privacy.\n\nThe Grey Apartment will be an ideal choice for couples looking for a cosy place to relax together in the special atmosphere of the Podhale region.',
    highlight: 'Studio',
    equipment: {
      living: ['Armchairs', 'Coffee table', 'Dining table', 'TV'],
      kitchen: ['Fridge', 'Induction hob', 'Electric kettle', 'Tableware', 'Kitchen utensils'],
      bathroom: ['Private bathroom with shower', 'Towels', 'Hairdryer'],
      misc: ['Wi-Fi', 'Handmade wooden furniture', 'Mountain view', 'Free monitored parking'],
    },
  },
  6: {
    title: 'Blue Apartment',
    size: '26 m²',
    description: 'The Blue Apartment combines the cosiness of Zakopane interiors with the freshness and calm of a blue colour scheme. Its character is inspired by the atmosphere of a mountain getaway, where you can forget about daily duties and fully enjoy the moments spent in the Tatras.\n\nDelicate shades of blue bring a sense of harmony to the interior, while natural materials and regional accents give it a warm, homely feel. The whole creates a space that invites rest, quiet mornings and pleasant evenings.\n\nThe apartment suits both active holidays and moments of relaxation. After a day spent discovering mountain trails and the charms of Zakopane, you can return to the cosy interior, rest and plan the next attractions.\n\nThe Blue Apartment is for people who like bright, calm arrangements and are looking for a place that combines a mountain atmosphere with everyday comfort.',
    highlight: 'Bed and sofa',
    equipment: {
      living: ['Sofa bed', 'Armchairs', 'Coffee table', 'Dining table', 'TV'],
      kitchen: ['Fridge', 'Induction hob', 'Electric kettle', 'Tableware', 'Kitchen utensils'],
      bathroom: ['Private bathroom with shower', 'Towels', 'Hairdryer'],
      misc: ['Wi-Fi', 'Handmade wooden furniture', 'Mountain view', 'Free monitored parking'],
    },
  },
};

export default apartments;
