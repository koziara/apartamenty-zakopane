// Language-neutral assets and map searches. Text lives in i18n/locales/.
// An empty photo uses the illustrated placeholder.
export type Trail = {
  id: string;
  mapQuery: string;
  photo: string;
  photoAlt: string;
  illustration: 'valley' | 'waterfall' | 'summit' | 'forest';
};

export const trails: Trail[] = [
  {
    id: 'strazyska',
    mapQuery: 'Wejście do Doliny Strążyskiej, Zakopane',
    photo: '/img/trails/dolina-strazyska.jpg',
    photoAlt: 'Drewniane szałasy na Polanie Strążyskiej na tle Giewontu.',
    illustration: 'valley',
  },
  {
    id: 'siklawica',
    mapQuery: 'Wodospad Siklawica, Tatry',
    photo: '/img/trails/siklawica.jpg',
    photoAlt: 'Wodospad Siklawica spływający po skalnej ścianie.',
    illustration: 'waterfall',
  },
  {
    id: 'sarnia',
    mapQuery: 'Sarnia Skała, Tatry',
    photo: '/img/trails/sarnia-skala.jpg',
    photoAlt: 'Widok na Giewont ze skalistego szlaku przy Sarniej Skale.',
    illustration: 'summit',
  },
  {
    id: 'ku-dziurze',
    mapQuery: 'Dolina ku Dziurze, Zakopane',
    photo: '/img/trails/dolina-ku-dziurze.jpg',
    photoAlt: 'Widok z wnętrza jaskini Dziura na otaczający ją las.',
    illustration: 'forest',
  },
  {
    id: 'bialego',
    mapQuery: 'Wejście do Doliny Białego, Zakopane',
    photo: '/img/trails/dolina-bialego.jpg',
    photoAlt: 'Drewniany mostek wśród skalnych ścian w Dolinie Białego.',
    illustration: 'forest',
  },
  {
    id: 'za-bramka',
    mapQuery: 'Dolina Za Bramką, Zakopane',
    photo: '/img/trails/dolina-za-bramka.jpg',
    photoAlt: 'Leśna ścieżka i mostek między skałami w Dolinie Za Bramką.',
    illustration: 'valley',
  },
  {
    id: 'pod-reglami',
    mapQuery: 'Droga pod Reglami, Zakopane',
    photo: '/img/trails/droga-pod-reglami.jpg',
    photoAlt: 'Droga pod Reglami biegnąca skrajem lasu i polany.',
    illustration: 'forest',
  },
  {
    id: 'malej-laki',
    mapQuery: 'Wejście do Doliny Małej Łąki, Zakopane',
    photo: '/img/trails/dolina-malej-laki.jpg',
    photoAlt: 'Wielka Polana Małołącka z ławkami i panoramą tatrzańskich szczytów.',
    illustration: 'valley',
  },
];

export const trailMapUrl = (query: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
