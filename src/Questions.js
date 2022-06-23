export const Questions = [
  {
    id: "kernvariabelen",
    component: "section",
    title: "Kernvariabelen",
    text: "De antwoorden op deze vragen voegen een vast puntenaantal toe aan de uiteindelijke risicoscores",
  },
  {
    id: "arbeidsuren",
    prevId: "kernvariabelen",
    nextId: "arbeidsongeschiktheid",
    component: "question",
    title: "Huidige arbeidsuren",
    text: "Het aantal uren dat ten tijde van de ingangsdatum wordt gewerkt.",
    options: [
      { label: "Geen, 0 uur", value: 1 },
      {
        label: "Parttime, 1–29 uur",
        value: 2,
      },
      { label: "Fulltime, 30 of meer uur", value: 3 },
      { label: "Variabele uren", value: 4 },
    ],
    showScoreImpact: true,
  },
  {
    id: "arbeidsongeschiktheid",
    prevId: "arbeidsuren",
    nextId: "beroep",
    component: "question",
    title: "Arbeidsongeschiktheid",
    text: "Arbeidsongeschiktheid ten tijde van de ingangsdatum.",
    guidance: [
      <p>
        Bij het kenmerk Arbeidsongeschiktheid dient het
        arbeidsongeschiktheidspercentage ingevuld te worden.
      </p>,
      <p>
        Indien dit percentage door een andere instantie is vastgesteld, wordt
        dit overgenomen. In alle andere gevallen zal het percentage op grond van
        informatie van de cliënt moeten worden vastgesteld.
      </p>,
    ],
    options: [
      { label: "0% tot 15%", value: 1 },
      { label: "16% of meer", value: 2 },
    ],
    showScoreImpact: true,
  },
  {
    id: "beroep",
    prevId: "arbeidsongeschiktheid",
    nextId: "zelfstandige",
    component: "question",
    title: "Beroep",
    text: "Het laatst uitgeoefende beroep of het beroep waarvoor men een opleiding heeft gevolgd; dus geen zgn. ‘wensberoepen’.",
    guidance: [
      <p>
        De gekozen waarde is gebaseerd op het beroep als vermeld op het bewijs
        van inschrijving van het Centrum voor Werk & Inkomen.
      </p>,
      <p>
        Indien de cliënt op grond van deze vermelding onder de noemer ‘Overig’
        wordt geschaard, moet nog worden beoordeeld of één van de genoemde
        beroepen op grond van opleiding of werkervaring op de cliënt van
        toepassing is. In dit geval dient dit beroep alsnog te worden ingevuld.
      </p>,
    ],
    options: [
      { label: "Horeca", value: 1 },
      { label: "Bouw", value: 2 },
      { label: "Taxichauffeur", value: 3 },
      { label: "Autohandelaar", value: 4 },
      { label: "Lokaal/regionaal risicoberoep", value: 5 },
      { label: "Schoonmaakbedrijf", value: 6 },
      { label: "Glazenwasserij", value: 7 },
      { label: "Kapper", value: 8 },
      { label: "Verzorgend thuis of aan huis", value: 9 },
      { label: "Schildersbedrijf", value: 10 },
      { label: "Koerier", value: 11 },
      { label: "Kunstenaar", value: 12 },
      { label: "Overig", value: 13 },
      { label: "Geen beroep", value: 14 },
    ],
    showScoreImpact: true,
  },
  {
    id: "zelfstandige",
    prevId: "beroep",
    nextId: "woonsituatie",
    component: "question",
    title: "Gewezen zelfstandige",
    text: "Bij het kenmerk Gewezen zelfstandige dient ‘Ja’ of ‘Nee’ te worden ingevuld.",
    guidance:
      "Er is sprake van een gewezen zelfstandige indien iemand in de 3 jaar voorafgaand aan de aanvraag een eigen bedrijf heeft gehad, maar de beëindiging daarvan niet als reden voor de aanvraag kan worden aangemerkt.",
    options: [
      { label: "Ja", value: 1 },
      { label: "Nee", value: 2 },
    ],
    showScoreImpact: true,
  },
  {
    id: "woonsituatie",
    prevId: "zelfstandige",
    nextId: "familie",
    component: "question",
    title: "Woonsituatie",
    text: "Woonsituatie ten tijde van de ingangsdatum.",
    guidance: [
      <p>
        Indien ‘Kamerbewoner’ of ‘Caravan’ de waarde voor Woonsituatie is, dient
        voor zowel Bij familie als Eerste kamerbewoning samen met aanvraag “Ja”
        of “Nee”, en het aantal medebewoners te worden ingevuld.
      </p>,
      <p>
        Plankwoning houdt in: ‘tijdelijke bewoning van een woning in afwachting
        van sloop/renovatie’.
      </p>,
      <p>
        Anti-kraak houdt in: ‘tijdelijke bewoning van een pand (niet
        noodzakelijk een woning) in afwachting van andere bestemming’.
      </p>,
      <p>
        De woonboot wordt niet als aparte woonsituatie aangemerkt. Indien de
        woonboot eigendom is, is er sprake van “Eigenaar”. Indien de woonboot
        gehuurd wordt kan de cliënt als “Huurder” worden aangemerkt.
      </p>,
    ],
    options: [
      { label: "Eigenaar", value: 1 },
      { label: "Huurder", value: 2 },
      { label: "Onderhuur", value: 3 },
      { label: "Kamerbewoner", value: 4 },
      { label: "Kostganger", value: 5 },
      { label: "Inwonend bij kinderen", value: 6 },
      { label: "Inwonend bij ouders", value: 7 },
      { label: "Inwonend bij ander zonder huurcontract", value: 8 },
      { label: "Thuisloos", value: 9 },
      { label: "Woonwagen", value: 10 },
      { label: "Kraakpand", value: 11 },
      { label: "Anti-kraak", value: 12 },
      { label: "Plankwoning", value: 13 },
      { label: "Inrichting", value: 14 },
      { label: "Verhuizen binnen een half jaar", value: 15 },
    ],
    showScoreImpact: true,
  },
  {
    id: "familie",
    prevId: "woonsituatie",
    nextId: "medebewoners",
    component: "question",
    title: "Bij familie",
    text: "Bij ouders, kinderen, broers en zussen, ooms en tantes, neven en nichten, grootouders en kleinkinderen.",
    guidance: [
      <p>
        De vraag dient gesteld te worden of de klant ten tijde van de
        ingangsdatum bij familie woont.
      </p>,
      <p>
        Als deze vraag met “ja” wordt beantwoord, wordt deze variabele
        aangevinkt. Als deze vraag met “nee” wordt beantwoord, wordt de
        variabele niet aangevinkt.
      </p>,
    ],
    options: [
      { label: "Ja", value: 1 },
      { label: "Nee", value: 2 },
    ],
    showScoreImpact: true,
  },
  {
    id: "medebewoners",
    prevId: "familie",
    nextId: "kamerbewoning",
    component: "question",
    title: "Meer dan 4 medebewoners",
    text: "",
    guidance: [
      <p>Deze vraag kan met “ja” of “nee” beantwoord worden.</p>,
      <p>
        Men beantwoordt deze vraag met “ja” in indien de klant aangeeft dat hij
        kamerbewoner is en er meer dan 4 personen op dat adres staan
        ingeschreven bij Burgerzaken; in dit geval wordt de variabele
        aangevinkt.
      </p>,
      <p>
        In alle andere gevallen beantwoordt men deze vraag met “nee” en wordt de
        variabele niet aangevinkt.
      </p>,
    ],
    options: [
      { label: "Ja", value: 1 },
      { label: "Nee", value: 2 },
    ],
    showScoreImpact: true,
  },
  {
    id: "kamerbewoning",
    prevId: "medebewoners",
    nextId: "medebewoner",
    component: "question",
    title: "Aanvraag bij eerste maal kamerbewoning",
    text: "",
    guidance: [
      <p>Deze vraag kan beantwoord worden met “ja” of “nee”.</p>,
      <p>
        Men vult “ja” in als de klant aangeeft dat hij voor het eerst op een
        kamer is gaan wonen en dat die kamerbewoning maximaal 1 maand voor de
        datum dat hij zich heeft gemeld bij het CWI is ingegaan.
      </p>,
    ],
    options: [
      { label: "Ja", value: 1 },
      { label: "Nee", value: 2 },
    ],
    showScoreImpact: true,
  },
  {
    id: "medebewoner",
    prevId: "kamerbewoning",
    nextId: "uitgesloten",
    component: "question",
    title: "Heeft medebewoner of onderhuurder",
    text: "",
    guidance: [
      <p>
        Medebewoner = een persoon die woont in de woning van de klant waarvan de
        klant (hoofd)bewoner is.
      </p>,
      <p>
        Onderhuurder = een persoon die een (of meerdere) kamer(s) huurt van de
        klant in de woning waar de klant hoofdbewoner van is.
      </p>,
      <p>Deze vraag kan beantwoord worden met “ja” of “nee”.</p>,
      <p>
        Men vult “ja” in, indien de klant aangeeft een medebewoner of
        onderhuurder te hebben of indien dit zou blijken uit het GBA. De vraag
        is alleen van invloed indien bij woonvorm is ingevuld: eigenaar, huurder
        of plankwoning.
      </p>,
      <p>
        Is er geen sprake van een medebewoner of een onderhuurder, dan vult men
        “nee” in.
      </p>,
    ],
    options: [
      { label: "Ja", value: 1 },
      { label: "Nee", value: 2 },
    ],
    showScoreImpact: true,
  },
  {
    id: "uitgesloten",
    prevId: "medebewoner",
    nextId: "verlaten",
    component: "question",
    title: "Partner uitgesloten",
    text: "Getrouwd of samenwonend, maar de partner heeft geen geldig vreemdelingendocument, partner zit in detentie, etc.",
    guidance: [
      <p>Deze vraag kan beantwoord worden met “ja” of “nee”.</p>,
      <p>
        Men vult “ja” in, indien de klant gehuwd of samenwonend is maar de
        partner geen recht heeft, bijvoorbeeld omdat hij niet over een geldig
        vreemdelingendocument beschikt of dat de partner in detentie zit, etc.
        In de rechterkolom, bij leefvorm, wordt dan gehuwd ingevuld, hoewel de
        klant slechts recht heeft op een alleenstaande- of alleenstaande
        oudernorm.
      </p>,
      <p>In andere gevallen vult men “nee” in.</p>,
    ],
    options: [
      { label: "Ja", value: 1 },
      { label: "Nee", value: 2 },
    ],
    showScoreImpact: true,
  },
  {
    id: "verlaten",
    prevId: "uitgesloten",
    nextId: "reden",
    component: "question",
    title: "Gehuwd en verlaten",
    text: "Klant is getrouwd maar geeft aan dat de partner de klant heeft verlaten.",
    guidance: [
      <p>Deze vraag kan beantwoord worden met “ja” of “nee”.</p>,
      <p>
        Men vult “ja” in, indien de klant getrouwd is en deze aangeeft dat zijn
        partner hem/haar heeft verlaten, maar er geen echtscheiding is
        uitgesproken. In de rechterkolom, bij leefvorm, wordt dan gehuwd
        ingevuld, hoewel de klant slechts recht heeft op een alleenstaande- of
        alleenstaande oudernorm.
      </p>,
      <p>In andere gevallen vult men “nee” in.</p>,
    ],
    options: [
      { label: "Ja", value: 1 },
      { label: "Nee", value: 2 },
    ],
    showScoreImpact: true,
  },
  {
    id: "reden",
    prevId: "verlaten",
    nextId: "verblijf_familie",
    component: "question",
    title: "Reden aanvraag",
    text: "De directe aanleiding om een Wwb uitkering aan te vragen.",
    guidance:
      "Indien Echtscheiding/verlating de reden van aanvraag is, dient voor zowel Verblijf belanghebbende bij familie als Verblijf ex-partner bij familie als Erkende kinderen “Ja” of “Nee” te worden ingevuld.",
    options: [
      { label: "Echtscheiding/verlating", value: 1 },
      { label: "Beëindiging eigen bedrijf", value: 2 },
      { label: "Langer dan 4 maanden geen ander inkomen", value: 3 },
      { label: "Geen inkomen uit eigen bedrijf", value: 4 },
      { label: "Einde detentie", value: 5 },
      { label: "Overig", value: 6 },
    ],
    showScoreImpact: true,
  },
  {
    id: "verblijf_familie",
    prevId: "reden",
    nextId: "verblijf_partner",
    component: "question",
    title: "Verblijf belanghebbende bij (schoon-)familie",
    text: "",
    guidance: [
      <p>Deze vraag kan beantwoord worden met “ja” of “nee”.</p>,
      <p>
        Men vult “ja” in, indien de klant aangeeft dat de aanvraagreden
        “Echtscheiding/verlating” is en de partner verblijft bij
        (schoon-)familie.
      </p>,
      <p>In andere gevallen vult men “nee” in.</p>,
    ],
    options: [
      { label: "Ja", value: 1 },
      { label: "Nee", value: 2 },
    ],
    showScoreImpact: true,
  },
  {
    id: "verblijf_partner",
    prevId: "verblijf_familie",
    nextId: "kinderen",
    component: "question",
    title: "Verblijf ex-partner bij (schoon-)familie",
    text: "",
    guidance: [
      <p>Deze vraag kan beantwoord worden met “ja” of “nee”.</p>,
      <p>
        Men vult “ja” in, indien de klant aangeeft dat de aanvraagreden
        “Echtscheiding/verlating” is en de ex-partner verblijft bij
        (schoon-)familie.
      </p>,
      <p>In andere gevallen vult men “nee” in.</p>,
    ],
    options: [
      { label: "Ja", value: 1 },
      { label: "Nee", value: 2 },
    ],
    showScoreImpact: true,
  },
  {
    id: "kinderen",
    prevId: "verblijf_partner",
    nextId: "woonlasten",
    component: "question",
    title: "Erkende kinderen",
    text: "",
    guidance: [
      <p>Deze vraag kan beantwoord worden met “ja” of “nee”.</p>,
      <p>
        Men vult “ja” in, indien de ex-partner van de klant (man) de kinderen
        van de klant (vrouw) heeft erkend. Heeft hij die kinderen niet erkend
        dan vult men “nee” in.
      </p>,
    ],
    options: [
      { label: "Ja", value: 1 },
      { label: "Nee", value: 2 },
    ],
    showScoreImpact: true,
  },
  {
    id: "versterkende_variabelen",
    component: "section",
    title: "Versterkende variabelen",
    text: "Sommige antwoorden op deze vragen hebben een vermenigvuldigingsfactor die de uiteindelijke score verhogen",
  },
  {
    id: "woonlasten",
    prevId: "kinderen",
    nextId: "inkomen",
    component: "question",
    title: "Woonlasten",
    text: "Kale huur minus de huursubsidie.",
    options: [
      { label: "Lager dan €116", value: 1 },
      { label: "€116 – €190", value: 2 },
      { label: "€191 – €245", value: 3 },
      { label: "€246 – €333", value: 4 },
      { label: "Meer dan €333", value: 5 },
    ],
    showScoreImpact: true,
  },
  {
    id: "inkomen",
    prevId: "woonlasten",
    nextId: "schuldpositie",
    component: "question",
    title: "Inkomen voor aanvraag WWB/Ioaw",
    text: "Inkomen vlak voor de ingangsdatum van de Wwb/Ioaw uitkering.",
    options: [
      { label: "Lager dan €1000", value: 1 },
      { label: "€1000 – €1250", value: 2 },
      { label: "€1250 – €1400", value: 3 },
      { label: "Meer dan €1400", value: 4 },
    ],
    showScoreImpact: true,
  },
  {
    id: "schuldpositie",
    prevId: "inkomen",
    nextId: "leefvorm",
    component: "question",
    title: "Schuldpositie",
    text: "Het negatieve vermogen van de klant ten tijde van de aanvraagdatum.",
    guidance:
      "Hier wordt het (negatieve) vermogen van de klant ingevuld. Heeft de klant een positief vermogen dan dient er gekozen te worden voor de optie “€3000 of minder”.",
    options: [
      { label: "€3000 of minder", value: 1 },
      { label: "€3001 – 3500", value: 2 },
      { label: "€3501 – €4000", value: 3 },
      { label: "Meer dan €4000", value: 4 },
    ],
    showScoreImpact: true,
  },
  {
    id: "leefvorm",
    prevId: "schuldpositie",
    nextId: "opleiding",
    component: "question",
    title: "Leefvorm",
    text: "Gezinssituatie dan wel huwelijkse staat.",
    guidance: [
      <p>
        Hier wordt dus ingevuld de leefvorm van de klant. Hierbij is dus niet
        van belang welke Wwb norm van toepassing is op de klant. Zie hiervoor
        ook de kopjes: “Partner uitgesloten” en “Gehuwd/verlaten”.
      </p>,
      <p>
        Dus is de klant door haar partner verlaten en komt hij/zij in aanmerking
        voor de alleenstaande- of alleenstaande ouder norm in aanmerking, wordt
        hier dus gehuwd ingevuld
      </p>,
    ],
    options: [
      { label: "Alleenstaande", value: 1 },
      { label: "Alleenstaande ouder", value: 2 },
      { label: "Gehuwd/samenwonend", value: 3 },
    ],
    showScoreImpact: true,
  },
  {
    id: "opleiding",
    prevId: "leefvorm",
    nextId: "leeftijd",
    component: "question",
    title: "Opleiding",
    text: "De hoogst genoten opleiding, waarbij niet van belang is of er een diploma is behaald.",
    guidance: [
      <p>Bij het kenmerk Opleiding zijn de volgende waarden mogelijk.</p>,
      <p>Laag:</p>,
      <ul>
        <li>Geen opleiding genoten</li>
        <li>Basisonderwijs</li> <li>Vlbo</li>
        <li>Lager Beroepsonderwijs</li>
        <li>Vmbo;</li>
        <li>Mavo</li>
        <li>ROC Niveau 1, 2</li>
      </ul>,
      <p>Middel:</p>,
      <ul>
        <li>Middelbaar Beroepsonderwijs</li>
        <li>ROC Niveau 3, 4</li>
        <li>Havo</li>
        <li>Vwo</li>
      </ul>,
      <p>Hoog:</p>,
      <ul>
        <li>Hoger Beroepsonderwijs</li>
        <li>Wetenschapelijjk Onderwijs</li>
      </ul>,
    ],
    options: [
      { label: "Laag", value: 1 },
      { label: "Middel", value: 2 },
      { label: "Hoog", value: 3 },
    ],
    showScoreImpact: true,
  },
  {
    id: "leeftijd",
    prevId: "opleiding",
    nextId: "geslacht",
    component: "question",
    title: "Leeftijd",
    text: "Leeftijd van de klant ten tijde van de ingangsdatum van de Wwb uitkering.",
    options: [
      { label: "21 jaar of jonger", value: 1 },
      { label: "22 tot en met 27 jaar", value: 2 },
      { label: "28 tot en met 34 jaar", value: 3 },
      { label: "35 tot en met 44 jaar", value: 4 },
      { label: "45 tot en met 64 jaar", value: 5 },
      { label: "65 jaar of ouder", value: 6 },
    ],
    showScoreImpact: true,
  },
  {
    id: "geslacht",
    prevId: "leeftijd",
    nextId: "fraudeverleden",
    component: "question",
    title: "Geslacht",
    text: "",
    options: [
      { label: "Man", value: 1 },
      { label: "Vrouw", value: 2 },
    ],
    showScoreImpact: true,
  },
  {
    id: "fraudeverleden",
    prevId: "geslacht",
    nextId: "risicowijk",
    component: "question",
    title: "Fraudeverleden",
    text: "Eerder fraude gepleegd.",
    options: [
      { label: "Ja", value: 1 },
      { label: "Nee", value: 2 },
    ],
    showScoreImpact: true,
  },
  {
    id: "risicowijk",
    prevId: "fraudeverleden",
    nextId: "results",
    component: "question",
    title: "Woonwijk",
    text: "",
    options: [
      { label: "Wijk met laag risico", value: 1 },
      { label: "Wijk met neutraal risico", value: 2 },
      { label: "Wijk met hoog risico", value: 3 },
    ],
    showScoreImpact: true,
  },
  {
    id: "results",
    component: "section",
    title: "Scores",
    text: [
      <p>
        Hieronder vind je de scores die gebaseerd zijn op de antwoorden die je
        hebt gegeven. Bij de fraudescorekaart worden alle scores boven 1000
        gezien als 'hoog risico'.
      </p>,
      <p>
        Er is geen gestandaardiseerde wijze waarop de kaart werd gebruikt door
        gemeenten. In sommige gemeenten werden mensen met een hoge score vaker
        en strenger gecontroleerd, bijvoorbeeld door middel van een huisbezoek,
        in vergelijking met mensen met een lage score.
      </p>,
    ],
  },
];
