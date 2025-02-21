
export const links = [
    {
      name: "Naslovna",
      hash: "#naslovna",
    },
    {
      name: "Pogodnosti",
      hash: "#pogodnosti",
    },
    {
      name: "Cjenovnik",
      hash: "#cjenovnik",
    },
    {
      name: "Pitanja",
      hash: "#pitanja",
    },
    
  ] as const;

 export const faqs = [
    {
      question: "Šta je Ordinacija CMS?",
      answer:
        "OrdinacijaCMS je napredan, ali jednostavan sistem za upravljanje privatnim ordinacijama i klinikama. Pruža vam alate za vođenje medicinske dokumentacije, upravljanje pacijentima, zakazivanje pregleda i sigurno pohranjivanje podataka. Dizajniran je tako da smanji administrativne zadatke i poboljša produktivnost medicinskog osoblja, omogućavajući im da se fokusiraju na pacijente.",
    },
    {
      question: "Koliko dugo traje probni period?",
      answer:
        "OrdinacijaCMS nudi 30 dana besplatnog probnog perioda bez ikakvih obaveza. Tokom ovog perioda imate pristup svim funkcionalnostima aplikacije kako biste testirali njene mogućnosti i procijenili koliko vam može olakšati rad. Nakon isteka probnog perioda, možete se odlučiti za nastavak korištenja kroz jedan od dostupnih planova pretplate.",
    },
    {
      question: "Da li mogu otkazati svoju pretplatu u svakom trenutku?",
      answer: "Da, možete otkazati svoju pretplatu u bilo kojem trenutku, bez dodatnih troškova. Nakon otkazivanja, vaš pristup aplikaciji će ostati aktivan do kraja vašeg trenutnog plaćenog perioda. Nakon toga, aplikacija će biti zaključana, ali podaci će biti sačuvani u slučaju da želite ponovo aktivirati uslugu.",
    },
    {
      question: "da li su moji podaci sigurno sa Ordinacija CMS?",
      answer:
        "Apsolutno! Sigurnost vaših podataka je naš prioritet. OrdinacijaCMS koristi napredne metode enkripcije kako bi zaštitio sve medicinske i poslovne informacije. Svi podaci su sigurno pohranjeni na serverima sa redovnim sigurnosnim backup-ima, osiguravajući da nikada ne izgubite važne informacije. ",
    },
    {
      question: "Do li nudite korisničku podršku?",
      answer:
        "Naravno! Naš tim korisničke podrške je tu da vam pomogne sa svim pitanjima i tehničkim problemima. Možete nas kontaktirati putem e-maila ili chata, a naš stručni tim će vam se javiti u najkraćem mogućem roku. Naša podrška je dostupna 24/7",
    },
    {
      question: "Koristim vašu aplikaciju neko vrijeme i imam puno podataka. Kako mogu sačuvati svoje podatke ako odlučim prestati koristiti aplikaciju?",
      answer:
        "OrdinacijaCMS vam omogućava da izvezete sve svoje podatke u CSV  format kako biste ih mogli sačuvati ili koristiti u drugom sistemu. Naša opcija sigurnosnog izvoza osigurava da vaši podaci o pacijentima budu dostupni van aplikacije kada vam zatrebaju. Također, ako planirate pauzirati korištenje, vaši podaci će biti sigurno pohranjeni na određeni period, tako da ih možete ponovo aktivirati kada budete spremni.",
    },
    {
      question: "Da li je ovo sve što OrdinacijaCMS nudi ili planirate dalji razvoj?",
      answer:
        "Ne, OrdinacijaCMS se stalno razvija! Aktivno slušamo naše korisnike i redovno dodajemo nove funkcionalnosti na osnovu njihovih potreba. Naš cilj je da aplikacija postane još moćniji alat za upravljanje ordinacijama, uz što jednostavnije korisničko iskustvo. Ako imate prijedloge za nove funkcionalnosti, slobodno nam ih pošaljite – vaša povratna informacija nam pomaže da unaprijedimo OrdinacijaCMS prema stvarnim potrebama zdravstvenih profesionalaca.",
    },
    {
      question: "Moje pitanje nije odgovoreno?",
      answer:  (
        <>
          Ako niste pronašli odgovor na svoje pitanje, ne brinite! Naš tim vam je na raspolaganju. Možete nam se obratiti putem kontakt forme na web stranici ili nam direktno poslati e-mail na {" "}
          <a
            href="mailto:info@spark-dev-studio.com"
            className="text-primary-accent hover:underline"
          >
            info@spark-dev-studio.com
          </a>{" "}
          Tu smo da vam pomognemo!
        </>
      ),
    },
  ]  as const
  