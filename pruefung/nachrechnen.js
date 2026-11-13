// Prüfskript (Regel 7): rechnet jede Zahl-Aufgabe UNABHÄNGIG aus dem Aufgabentext nach,
// ohne das Feld `answer` zu benutzen. Fehlt eine eigene Rechnung, meldet das Skript es.
// Aufruf (im Paketordner): node pruefung/nachrechnen.js
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ctx = { window: {} };
ctx.window = ctx;
vm.createContext(ctx);
const jsDir = path.join(__dirname, '..', 'js');
// Hilfsdateien zuerst (Lektionen nutzen Exercises.fmt und Sims.skala); const -> var, damit sie global sichtbar sind
['exercises.js', 'sims.js'].forEach(f => vm.runInContext(fs.readFileSync(path.join(jsDir, f), 'utf8').replace(/^const (\w+) =/m, 'var $1 ='), ctx));
fs.readdirSync(jsDir).filter(f => /^lessons-.*\.js$/.test(f)).forEach(f => {
  vm.runInContext(fs.readFileSync(path.join(jsDir, f), 'utf8'), ctx);
});

// Wert eines Kraftmesser-Bildes aus der Zeigerposition zurückrechnen (unabhängig vom Aufrufwert)
function skalaWert(html, max) {
  const m = /<polygon points="([\d.]+),16/.exec(html);
  return m ? (Number(m[1]) - 20) / 250 * max : NaN;
}

// Eigene Rechnungen: Schlüssel = eindeutiges Stück aus dem Fragetext
const RECHNUNGEN = {
  'für eine Kraft von 20 N': () => 20 / 5,
  'Ein Kraftpfeil ist 4,5 cm lang': () => 4.5 * 2,
  'Tom zieht eine Kiste mit 120 N': () => 120 - 90,
  'Zwei Hunde ziehen': () => 80 + 70,
  'wirken 9 N nach rechts und 3 N nach links': () => (9 - 3) / 2,
  'Lies den Kraftmesser ab (Messbereich 10 N)': q => skalaWert(q, 10),
  'Lies den Kraftmesser ab (Messbereich 1 N)': q => skalaWert(q, 1),
  'Masse von 15 kg': () => 15 * 10,
  'Masse von 1,4 kg': () => 1.4 * 10,
  'Masse von 36 kg': () => 36 * 10 / 6,
  'Hantel mit 35 kg': () => 35 * 10 / 100,
  'zeigt der Kraftmesser 5 N': () => 5 - 3.5,
  'Last von 40 N': () => 40 / 2,
  '30 cm hochgezogen': () => 2 * 30,
  'Last von 25 N': () => 25,
  'Die Last wiegt 900 N': () => 900 / 6,
  '1,5 m hochgehoben': () => 1.5 * 4,
  'mit 50 N. Wie schwer': () => 50 * 4,
  'Gewichtskraft von 250 N': () => 250 / 10,
  'auf dem Mond eine Gewichtskraft von 20 N': () => 20 * 6 / 10,
  'Hund zieht an der Leine mit 150 N': () => (150 - 120) / 10,
  'Zähle die <strong>tragenden Seilstücke</strong>': q => seile(q),
  'eine Last von 360 N': q => 360 / seile(q),
  'Masse von 12 kg wird mit einer <strong>losen</strong> Rolle': () => 12 * 10 / 2
};
// Tragende Seilstücke direkt aus der Skizze zählen
function seile(html) { return (html.match(/class="trag"/g) || []).length; }

let fehler = 0, geprueft = 0;
ctx.LESSON_DATA.forEach(lesson => (lesson.exercises || []).forEach((ex, i) => {
  if (ex.type !== 'number') return;
  const key = Object.keys(RECHNUNGEN).find(k => ex.question.indexOf(k) !== -1);
  const wo = 'Lektion ' + lesson.id + ', Übung ' + (i + 1);
  if (!key) { fehler++; console.log('FEHLT  ' + wo + ': keine eigene Rechnung'); return; }
  const soll = RECHNUNGEN[key](ex.question);
  geprueft++;
  if (!(Math.abs(soll - ex.answer) < 1e-9)) { fehler++; console.log('FALSCH ' + wo + ': answer ' + ex.answer + ', nachgerechnet ' + soll); }
}));

// PROBE: Lösungen der Probe-Arbeit (pdf/probe-arbeit.html) nachrechnen
const probe = fs.readFileSync(path.join(__dirname, '..', 'pdf', 'probe-arbeit.html'), 'utf8');
const PROBE = [
  ['24 N : 8 N = <strong>3 cm</strong>', 24 / 8, 3],
  ['420 N − 380 N = <strong>40 N', 420 - 380, 40],
  ['54 kg · 10 = <strong>540 N</strong>', 54 * 10, 540],
  ['540 N : 6 = <strong>90 N</strong>', 540 / 6, 90],
  ['70 N : 2 = <strong>35 N</strong>', 70 / 2, 35],
  ['2 · 50 cm = <strong>100 cm</strong>', 2 * 50, 100],
  ['480 N : 4 = <strong>120 N</strong>', 480 / 4, 120],
  ['3 m · 4 = <strong>12 m</strong>', 3 * 4, 12],
  ['a) <strong>6,5 N</strong>', skalaWert(ctx.Sims.skala(10, 6.5), 10), 6.5],
  ['b) <strong>0,35 N</strong>', skalaWert(ctx.Sims.skala(1, 0.35), 1), 0.35]
];
PROBE.forEach(([text, soll, steht]) => {
  geprueft++;
  if (probe.indexOf(text) === -1) { fehler++; console.log('PROBE  Text nicht gefunden: ' + text); }
  else if (Math.abs(soll - steht) > 1e-9) { fehler++; console.log('PROBE  FALSCH: ' + text + ' nachgerechnet ' + soll); }
});
const punkte = [...probe.matchAll(/data-p="(\d+)"/g)].reduce((a, m) => a + Number(m[1]), 0);
console.log(geprueft + ' Aufgaben nachgerechnet, ' + fehler + ' Probleme · Probe-Arbeit: ' + punkte + ' Punkte');
process.exit(fehler ? 1 : 0);
