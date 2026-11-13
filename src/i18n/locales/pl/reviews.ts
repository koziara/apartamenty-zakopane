// Guest review texts by review id and rating labels by source (names, dates and scores live in src/lists/reviews.json)
export const reviewTexts: Record<number, string> = {
  "1": "Świetna lokalizacja, cudowne pokoje. Widok z okna super. Spokojna okolica ale wszędzie można dojść na pieszo.",
  "2": "Piękne wyposażenie, meble w stylu zakopiańskim. Lokalizacja bardzo dobra, blisko na szlak, do centrum i do sklepu. Cisza i spokój. Poranna kawa na tarasie z widokiem na Giewont super!",
  "3": "Dla nas miejsce idealne. Dla jednych może za daleko od centrum, ale dla nas ta cisza, szybkie wyjście na szlaki oraz fakt, że jest się z dala od całego zgiełku sprawiły, ze czuliśmy się komfortowo. Pokoje piękne, czyściutkie, a łóżka...ach nie chciało się wstawać. Jednak widok Giewontu motywował każdego dnia.",
  "4": "To miejsce było przepiękne. Szlak turystyczny był w pobliżu, podobnie jak centrum miasta. Pokoje były przestronne i zawierały wszystko, czego potrzebowaliśmy. Styl jest tradycyjnie polski, co sprawiało, że czuliśmy się jak w innym kraju! Widok z pokoju jest przepiękny, z widokiem na góry. Chętnie tu wrócę."
};

export const scoreLabels: Record<string, string> = {
  "Booking.com": "Wyjątkowy",
  "Google Maps": "Doskonały"
};
