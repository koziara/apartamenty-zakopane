import type { ApartmentText } from '../../types';

// Apartment copy by apartmentId (see src/lists/apartmentList.json for the language-neutral data)
const apartments: Record<number, ApartmentText> = {
  "1": {
    "title": "Apartament Pomarańczowy",
    "size": "45 m²",
    "description": "Apartament Pomarańczowy wyróżnia się ciepłą kolorystyką, dużą ilością naturalnego światła i przytulną atmosferą. Połączenie pomarańczowych i bordowych akcentów z jasnym drewnem oraz tradycyjnymi zakopiańskimi detalami nadaje wnętrzu wyjątkowy charakter.\n\nSzczególną uwagę przyciągają ręcznie rzeźbione drewniane meble, które podkreślają regionalny styl apartamentu. Starannie dobrane dodatki, wzorzyste tkaniny i ciepłe barwy tworzą przestrzeń, w której można poczuć prawdziwy klimat Podhala, nie rezygnując z codziennej wygody.\n\nDuże okna wpuszczają do środka naturalne światło, a przytulna część wypoczynkowa zachęca do wspólnego spędzania czasu. To miejsce zarówno na spokojny poranek przy kawie, jak i odpoczynek po dniu pełnym górskich wędrówek.\n\nApartament Pomarańczowy będzie doskonałym wyborem dla osób, które cenią domową atmosferę, oryginalne wnętrza i wypoczynek w otoczeniu tatrzańskiej przyrody.",
    "floor": "Parter",
    "highlight": "Jasne wnętrze",
    "equipment": {
      "living": [
        "Rozkładana sofa",
        "Fotele",
        "Stolik kawowy",
        "Stół jadalniany",
        "Telewizor"
      ],
      "kitchen": [
        "Lodówka",
        "Płyta indukcyjna",
        "Czajnik elektryczny",
        "Naczynia",
        "Przybory kuchenne"
      ],
      "bathroom": [
        "Prywatna łazienka z prysznicem",
        "Ręczniki",
        "Suszarka do włosów"
      ],
      "misc": [
        "Wi-Fi",
        "Ręcznie wykonane drewniane meble",
        "Balkon",
        "Widok na góry",
        "Bezpłatny monitorowany parking"
      ]
    }
  },
  "2": {
    "title": "Apartament Turkusowy",
    "size": "36 m²",
    "description": "Apartament Turkusowy wyróżnia się eleganckim połączeniem jasnego drewna, naturalnych materiałów i charakterystycznych turkusowych akcentów. Jego przytulne wnętrze łączy tradycyjny styl zakopiański z nowoczesną wygodą, tworząc idealne miejsce na spokojny wypoczynek w otoczeniu Tatr.\n\nWyjątkowego charakteru nadają mu ręcznie rzeźbione drewniane meble, ozdobne belki sufitowe i starannie dobrane dekoracje inspirowane kulturą Podhala. Turkusowe fotele i sofa wprowadzają do wnętrza świeżość, a ciepłe odcienie drewna sprawiają, że całość jest niezwykle przytulna.\n\nDzięki południowej ekspozycji duże okna wpuszczają do środka mnóstwo naturalnego światła. Dodatkowym atutem apartamentu jest balkon, na którym można rozpocząć dzień od porannej kawy, podziwiając górskie krajobrazy, lub odpocząć po dniu spędzonym na tatrzańskich szlakach.\n\nPrzemyślany układ wnętrza zapewnia komfort zarówno podczas wspólnego spędzania czasu, jak i chwil odpoczynku. Przytulna część wypoczynkowa oraz przestrzeń jadalniana zachęcają do spokojnych wieczorów i wspólnych posiłków w wyjątkowej atmosferze.\n\nApartament Turkusowy to doskonała propozycja dla par i rodzin, które szukają połączenia góralskiego klimatu, wygody i bliskości tatrzańskiej przyrody.",
    "floor": "Parter",
    "highlight": "Balkon z widokiem",
    "equipment": {
      "living": [
        "Rozkładana sofa",
        "Fotele",
        "Stolik kawowy",
        "Stół jadalniany",
        "Telewizor"
      ],
      "kitchen": [
        "Lodówka",
        "Płyta indukcyjna",
        "Czajnik elektryczny",
        "Naczynia",
        "Przybory kuchenne"
      ],
      "bathroom": [
        "Prywatna łazienka z prysznicem",
        "Ręczniki",
        "Suszarka do włosów"
      ],
      "misc": [
        "Wi-Fi",
        "Ręcznie wykonane drewniane meble",
        "Balkon",
        "Widok na góry",
        "Bezpłatny monitorowany parking"
      ]
    }
  },
  "3": {
    "title": "Apartament Ochra",
    "size": "43 m²",
    "description": "Apartament Ochra zachwyca ciepłą kolorystyką, naturalnym drewnem i przytulną atmosferą inspirowaną tradycyjnym stylem zakopiańskim. Jasne ściany, drewniane wykończenia i charakterystyczne odcienie ochry tworzą harmonijną przestrzeń, w której można poczuć prawdziwy klimat Podhala.\n\nSzczególnego uroku nadają mu ręcznie wykonane drewniane meble, ozdobne detale i starannie dobrane dodatki. Przytulna część wypoczynkowa z kanapami w ciepłych barwach zachęca do wspólnego spędzania czasu, a duże okna wypełniają wnętrze naturalnym światłem.\n\nJednym z największych atutów apartamentu jest balkon z widokiem na malowniczą okolicę. To doskonałe miejsce na poranną kawę, chwilę wytchnienia na świeżym powietrzu lub odpoczynek po dniu pełnym tatrzańskich wędrówek.\n\nApartament Ochra świetnie sprawdzi się podczas pobytu z rodziną lub grupą przyjaciół. Jego przestrzeń sprzyja wspólnym posiłkom, rozmowom i spokojnym wieczorom, tworząc idealne warunki do wypoczynku w wyjątkowej atmosferze Zakopanego.",
    "floor": "Parter",
    "highlight": "Dodatkowe łóżko",
    "equipment": {
      "living": [
        "Dwie rozkładane kanapy",
        "Fotele",
        "Stolik kawowy",
        "Stół jadalniany",
        "Telewizor"
      ],
      "kitchen": [
        "Lodówka",
        "Płyta indukcyjna",
        "Czajnik elektryczny",
        "Naczynia",
        "Przybory kuchenne"
      ],
      "bathroom": [
        "Prywatna łazienka z prysznicem",
        "Ręczniki",
        "Suszarka do włosów"
      ],
      "misc": [
        "Wi-Fi",
        "Ręcznie wykonane drewniane meble",
        "Balkon",
        "Widok na góry",
        "Bezpłatny monitorowany parking"
      ]
    }
  },
  "4": {
    "title": "Apartament Błękitny",
    "size": "43 m²",
    "description": "Apartament Błękitny znajduje się na pierwszym piętrze i wyróżnia się ciepłym, drewnianym wnętrzem z błękitnymi akcentami. Ręcznie rzeźbione meble w regionalnym stylu nadają mu niepowtarzalny, górski charakter.\n\nW części dziennej czeka wygodna rozkładana sofa, na której mogą spać dwie osoby, oraz telewizor na wieczorny relaks. W aneksie kuchennym znajdziesz lodówkę, płytę indukcyjną i czajnik.\n\nOsobna sypialnia z łóżkiem dwuosobowym i jednoosobowym zapewnia spokojny odpoczynek po całym dniu wędrówek. Prywatna łazienka jest wyposażona w ręczniki i suszarkę do włosów, a z balkonu rozciąga się widok na góry.\n\nApartament Błękitny będzie dobrym wyborem dla rodzin i grup przyjaciół, którzy chcą wypocząć w Zakopanem w domowej, góralskiej atmosferze. Do dyspozycji gości są bezpłatne Wi-Fi i monitorowany parking.",
    "equipment": {
      "living": [
        "Rozkładana sofa",
        "Fotele",
        "Stolik kawowy",
        "Stół jadalniany",
        "Telewizor"
      ],
      "kitchen": [
        "Lodówka",
        "Płyta indukcyjna",
        "Czajnik elektryczny",
        "Naczynia",
        "Przybory kuchenne"
      ],
      "bathroom": [
        "Prywatna łazienka z prysznicem",
        "Ręczniki",
        "Suszarka do włosów"
      ],
      "misc": [
        "Wi-Fi",
        "Ręcznie wykonane drewniane meble",
        "Balkon",
        "Widok na góry",
        "Bezpłatny monitorowany parking"
      ]
    }
  },
  "5": {
    "title": "Apartament Szary",
    "size": "ok. 16 m²",
    "description": "Apartament Szary to kameralna, przytulna przestrzeń stworzona z myślą o wypoczynku we dwoje. Stonowana kolorystyka, subtelne odcienie szarości i spokojna atmosfera tworzą idealne warunki na romantyczny weekend lub dłuższy pobyt w Zakopanem.\n\nEleganckie, harmonijne wnętrze sprzyja relaksowi i pozwala oderwać się od codziennego pośpiechu. To miejsce, w którym można cieszyć się spokojnymi porankami przy wspólnej kawie, odpoczywać po górskich wędrówkach i spędzać wieczory tylko we dwoje.\n\nBliskość tatrzańskich szlaków oraz centrum Zakopanego sprawia, że apartament doskonale łączy możliwość aktywnego wypoczynku z chwilami spokoju i prywatności.\n\nApartament Szary będzie idealnym wyborem dla par, które szukają przytulnego miejsca na wspólny wypoczynek w wyjątkowej atmosferze Podhala.",
    "highlight": "Studio",
    "equipment": {
      "living": [
        "Fotele",
        "Stolik kawowy",
        "Stół jadalniany",
        "Telewizor"
      ],
      "kitchen": [
        "Lodówka",
        "Płyta indukcyjna",
        "Czajnik elektryczny",
        "Naczynia",
        "Przybory kuchenne"
      ],
      "bathroom": [
        "Prywatna łazienka z prysznicem",
        "Ręczniki",
        "Suszarka do włosów"
      ],
      "misc": [
        "Wi-Fi",
        "Ręcznie wykonane drewniane meble",
        "Widok na góry",
        "Bezpłatny monitorowany parking"
      ]
    }
  },
  "6": {
    "title": "Apartament Niebieski",
    "size": "26 m²",
    "description": "Apartament Niebieski łączy przytulność zakopiańskich wnętrz ze świeżością i spokojem niebieskiej kolorystyki. Inspiracją dla jego charakteru jest atmosfera górskiego wypoczynku, w którym można zapomnieć o codziennych obowiązkach i w pełni cieszyć się chwilami spędzonymi w Tatrach.\n\nDelikatne odcienie niebieskiego wprowadzają do wnętrza poczucie harmonii, a naturalne materiały i regionalne akcenty nadają mu ciepły, domowy charakter. Całość tworzy przestrzeń zachęcającą do odpoczynku, spokojnych poranków i przyjemnych wieczorów.\n\nApartament sprzyja zarówno aktywnemu wypoczynkowi, jak i chwilom relaksu. Po dniu spędzonym na odkrywaniu górskich szlaków i uroków Zakopanego można wrócić do przytulnego wnętrza, odpocząć i zaplanować kolejne atrakcje.\n\nApartament Niebieski to propozycja dla osób, które lubią jasne, spokojne aranżacje i szukają miejsca łączącego górski klimat z codzienną wygodą.",
    "highlight": "Łóżko i sofa",
    "equipment": {
      "living": [
        "Rozkładana sofa",
        "Fotele",
        "Stolik kawowy",
        "Stół jadalniany",
        "Telewizor"
      ],
      "kitchen": [
        "Lodówka",
        "Płyta indukcyjna",
        "Czajnik elektryczny",
        "Naczynia",
        "Przybory kuchenne"
      ],
      "bathroom": [
        "Prywatna łazienka z prysznicem",
        "Ręczniki",
        "Suszarka do włosów"
      ],
      "misc": [
        "Wi-Fi",
        "Ręcznie wykonane drewniane meble",
        "Widok na góry",
        "Bezpłatny monitorowany parking"
      ]
    }
  }
};

export default apartments;
