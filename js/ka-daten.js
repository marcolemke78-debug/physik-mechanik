/**
 * HIER pro Paket anpassen. Wird von der App UND von den Druckseiten in pdf/ gelesen.
 * Quelle der Themen: Leonies Heft (Mechanik ab 15.09.2026, dazu Elektromagnetismus 1 bis 1.2). Lehrerin: "alles ab Schuljahresbeginn".
 */
const KA = {
  id: 'physik-mechanik-2627',
  subject: 'Physik',
  title: 'Physik-Arbeit: Mechanik und Elektromagnet',
  date: '2026-11-17',
  topics: [
    { title: 'Kräfte und ihre Wirkung', page: 'Heft 1.1', lessons: [1] },
    { title: 'Kraftpfeile zeichnen', page: 'Heft 1.2', lessons: [2] },
    { title: 'Kräfte zusammensetzen', page: 'Heft 1.3', lessons: [3] },
    { title: 'Kräfte messen', page: 'Heft 1.4', lessons: [4] },
    { title: 'Masse und Gewichtskraft', page: 'Heft 1.5', lessons: [5] },
    { title: 'Reibung', page: 'Heft 2', lessons: [6, 7] },
    { title: 'Feste und lose Rolle', page: 'Heft 3.1', lessons: [8] },
    { title: 'Flaschenzug', page: 'Heft 3.2', lessons: [9] },
    { title: 'Elektromagnet und Magnetfeld', page: 'Heft Elektromagnetismus 1', lessons: [10] },
    { title: 'Begriffe und Formeln', page: '', trainer: true }
  ],
  links: [
    { label: 'Spickzettel', href: 'pdf/spickzettel.html' },
    { label: 'Probe-Arbeit', href: 'pdf/probe-arbeit.html' },
    { label: 'Lernplan (füllt sich selbst)', href: 'pdf/lernplan.html' },
    { label: 'Begriffe zum Ausdrucken (Lernblatt + Faltkarten)', href: 'pdf/karten.html' },
    { label: 'So lerne ich am schnellsten', href: 'pdf/so-lerne-ich.html' }
  ]
};

// Überschriften der Lektionsgruppen in der Seitenleiste
const MODULES = { kraft: '1 · Kraft und Masse', reibung: '2 · Reibung', rollen: '3 · Rollen und Flaschenzug', em: '4 · Elektromagnetismus' };

const LESSONS = [
  { id: 1, title: 'Woran erkennt man eine Kraft?', module: 'kraft' },
  { id: 2, title: 'Kraftpfeile zeichnen', module: 'kraft' },
  { id: 3, title: 'Zwei Kräfte: wer gewinnt?', module: 'kraft' },
  { id: 4, title: 'Kräfte messen', module: 'kraft' },
  { id: 5, title: 'Masse und Gewichtskraft', module: 'kraft' },
  { id: 6, title: 'Haft-, Gleit- und Rollreibung', module: 'reibung' },
  { id: 7, title: 'Wovon hängt Reibung ab?', module: 'reibung' },
  { id: 8, title: 'Feste und lose Rolle', module: 'rollen' },
  { id: 9, title: 'Der Flaschenzug', module: 'rollen' },
  { id: 10, title: 'Der Elektromagnet', module: 'em' }
];
