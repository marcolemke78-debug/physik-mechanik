/**
 * Karten für den Trainer: Begriffe, Einheiten, Formeln aus Leonies Heft (Mechanik und Elektromagnetismus).
 * id fest, nie ändern (Lernstand hängt daran). mode 'type' = tippen, 'reveal' = aufdecken.
 * formula: true = Leerzeichen und gleichwertige Rechenzeichen (· * x, : /) werden beim Vergleich ignoriert.
 */
const CARDS = {
  title: 'Begriffe-Trainer',
  speak: null,
  reverse: false,
  mode: 'type',
  typePlaceholder: 'Antwort tippen …',
  items: [
    // Einheiten und Zeichen (tippen)
    { id: 'p01', front: 'Einheit der Kraft', back: 'Newton', alt: ['N'] },
    { id: 'p02', front: 'Einheit der Masse', back: 'Kilogramm', alt: ['kg'] },
    { id: 'p03', front: 'Formelzeichen der Masse', back: 'm' },
    { id: 'p04', front: 'Auf der Erde gilt: 1 kg ≙ ? N', back: '10', alt: ['10 N'] },
    { id: 'p05', front: 'Auf dem Mond ist die Gewichtskraft … so groß wie auf der Erde.', back: 'ein Sechstel', alt: ['1/6', 'ein sechstel', 'sechstel'] },
    { id: 'p06', front: 'Messgerät für Kräfte', back: 'Kraftmesser', alt: ['Federkraftmesser', 'Federwaage'] },
    // Wirkungen (tippen)
    { id: 'p07', front: 'Verformung, die bleibt (wie Knete)', back: 'plastisch', alt: ['plastische Verformung'] },
    { id: 'p08', front: 'Verformung, die zurückgeht (wie ein Schwamm)', back: 'elastisch', alt: ['elastische Verformung'] },
    { id: 'p09', front: 'Die Resultierende zweier entgegengesetzter Kräfte: größere Kraft … kleinere Kraft', back: 'minus', alt: ['-', '−', 'weniger'] },
    // Reibung (tippen)
    { id: 'p10', front: 'Reibungsart, wenn ein Körper noch still liegt', back: 'Haftreibung' },
    { id: 'p11', front: 'Reibungsart, wenn ein Körper rutscht', back: 'Gleitreibung' },
    { id: 'p12', front: 'Reibungsart mit der kleinsten Kraft', back: 'Rollreibung' },
    // Rollen und Flaschenzug (tippen)
    { id: 'p13', front: 'Formel lose Rolle: F<sub>Z</sub> = ?', back: '1/2 · F<sub>L</sub>', alt: ['FL/2', '1/2 FL', '0,5 FL', 'FL:2', 'halbe Lastkraft'], formula: true },
    { id: 'p14', front: 'Formel Flaschenzug: F<sub>Z</sub> = ?', back: 'F<sub>L</sub> : n', alt: ['FL/n'], formula: true },
    { id: 'p15', front: 'Formel Flaschenzug: s<sub>Z</sub> = ?', back: 's<sub>L</sub> · n', alt: ['n · sL'], formula: true },
    { id: 'p16', front: 'Was bedeutet n beim Flaschenzug?', back: 'tragende Seilstücke', alt: ['Anzahl der tragenden Seilstücke', 'tragende Seile', 'Seilstücke'] },
    // Erklären (aufdecken)
    { id: 'p17', front: 'Woran erkennt man eine Kraft?', back: 'An ihrer Wirkung: Sie verformt einen Körper oder ändert seine Bewegung (beschleunigen, abbremsen, Richtung ändern).', mode: 'reveal' },
    { id: 'p18', front: 'Die drei Dinge, die ein Kraftpfeil zeigt', back: 'Angriffspunkt (Anfang), Richtung (Spitze), Größe (Länge, mit Maßstab).', mode: 'reveal' },
    { id: 'p19', front: 'Unterschied Masse und Gewichtskraft', back: 'Masse (kg) ist überall gleich. Gewichtskraft (N) hängt vom Ort ab, auf dem Mond ist sie ein Sechstel.', mode: 'reveal' },
    { id: 'p20', front: 'Die 4 Regeln beim Kraftmesser', back: 'Passenden Messbereich wählen, Nullpunkt prüfen, in Kraftrichtung halten, auf Augenhöhe ablesen.', mode: 'reveal' },
    { id: 'p21', front: 'Wovon hängt die Reibung ab, wovon nicht?', back: 'Sie hängt vom Gewicht ab (mehr Gewicht, mehr Reibung) und vom Material (rau, mehr Reibung). Nicht von der Größe der Auflagefläche.', mode: 'reveal' },
    { id: 'p22', front: 'Feste und lose Rolle: was bewirkt welche?', back: 'Feste Rolle ändert die Richtung (F<sub>Z</sub> = F<sub>L</sub>). Lose Rolle halbiert die Kraft, dafür doppelter Seilweg.', mode: 'reveal' },
    { id: 'p23', front: 'Goldene Regel der Mechanik', back: 'Was man an Kraft spart, muss man an Weg zusetzen.', mode: 'reveal' },
    // Elektromagnetismus
    { id: 'p24', front: 'Fließt Strom durch einen Leiter, entsteht ein …', back: 'Magnetfeld', alt: ['ein Magnetfeld', 'magnetisches Feld'] },
    { id: 'p25', front: 'Ein aufgewickelter Leiter heißt …', back: 'Spule', alt: ['eine Spule'] },
    { id: 'p26', front: 'Eine stromdurchflossene Spule heißt …', back: 'Elektromagnet', alt: ['ein Elektromagnet'] },
    { id: 'p27', front: 'Kern, der das Magnetfeld einer Spule verstärkt', back: 'Eisenkern', alt: ['Eisen'] },
    { id: 'p28', front: 'Drei Wege, das Magnetfeld eines Elektromagneten zu verstärken', back: 'Eisenkern hineinstecken, höhere Stromstärke, mehr Windungen.', mode: 'reveal' },
    { id: 'p29', front: 'Wie sieht das Magnetfeld einer Spule aus?', back: 'Wie das eines Stabmagneten: mit Nordpol und Südpol. Außen laufen die Feldlinien vom Nordpol zum Südpol.', mode: 'reveal' }
  ]
};
