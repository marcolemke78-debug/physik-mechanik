/**
 * Modul 2: Reibung (Heft 2, Stationenlernen 06.10.2026)
 */
window.LESSON_DATA = (window.LESSON_DATA || []).concat([
  // ------------------------------------------------------------------ L6
  {
    id: 6,
    title: 'Haft-, Gleit- und Rollreibung',
    explanation: {
      html: `
        <div class="analogy-box"><strong>Wie zwei Bürsten:</strong> Drück zwei Haarbürsten mit den Borsten aufeinander und versuch sie zu verschieben. Die Borsten verhaken sich. Unter der Lupe sieht jede Oberfläche so aus, auch ein glatter Tisch hat winzige Berge und Täler.</div>
        <p>Die <strong>Reibungskraft</strong> bremst eine Bewegung oder verhindert sie. Sie wirkt immer <strong>gegen</strong> die Bewegungsrichtung.</p>
        <p><strong>So misst man sie:</strong> Den Körper mit dem Kraftmesser <strong>langsam und gleichmäßig</strong> ziehen. Dann ist die Zugkraft genauso groß wie die Reibungskraft, und der Kraftmesser zeigt die Reibungskraft an.</p>
        <p>Es gibt drei Arten:</p>
        <table class="info-table">
          <tr><th>Reibungsart</th><th>Wann?</th><th>Beispiel</th></tr>
          <tr><td><strong>Haftreibung</strong></td><td>Der Körper liegt still. Man muss ihn erst losreißen.</td><td>Schrank anschieben, bis er sich bewegt</td></tr>
          <tr><td><strong>Gleitreibung</strong></td><td>Der Körper rutscht über die Unterlage.</td><td>Schlitten im Schnee</td></tr>
          <tr><td><strong>Rollreibung</strong></td><td>Der Körper rollt.</td><td>Fahrrad, Inliner</td></tr>
        </table>
        <div class="formel">Haftreibung &gt; Gleitreibung &gt; Rollreibung</div>
        <div class="tip-box"><strong>Merkhilfe:</strong> <strong>H-G-R</strong> wie &bdquo;Hält, Gleitet, Rollt&ldquo;: von schwer zu leicht.</div>
        <div class="sim" data-sim="reibung"></div>
        <div class="merke">Reibung begegnet uns überall im Alltag. Ohne Reibung könnten wir uns nicht fortbewegen. Wir würden immer auf der gleichen Stelle laufen, wie auf glattem Eis.</div>
        <div class="warning-box"><strong>Typischer Fehler:</strong> Haft- und Gleitreibung vertauschen. Merk dir: <strong>Losreißen ist schwerer als Weiterschieben.</strong></div>
        <div class="why-context"><strong>Warum ist das wichtig?</strong> Darum haben Autos Räder, Schuhe Profil und Bremsen Beläge. In der Arbeit kommt bestimmt eine Alltagssituation, bei der du die Reibungsart nennen sollst.</div>`
    },
    example: {
      title: 'Eine schwere Kiste umziehen',
      steps: [
        { label: 'Anfang', html: '<p>Die Kiste steht. Du musst richtig fest drücken, bis sie losrutscht → <strong>Haftreibung</strong> (am größten).</p>' },
        { label: 'Schieben', html: '<p>Rutscht sie einmal, geht es leichter → <strong>Gleitreibung</strong>.</p>' },
        { label: 'Rollbrett', html: '<p>Stellst du sie auf ein Rollbrett, geht es ganz leicht → <strong>Rollreibung</strong> (am kleinsten).</p>' }
      ]
    },
    exercises: [
      {
        type: 'ordering',
        question: 'Sortiere die Reibungsarten von der <strong>größten</strong> zur <strong>kleinsten</strong> Reibungskraft.',
        items: ['Haftreibung', 'Gleitreibung', 'Rollreibung'],
        correctOrder: [0, 1, 2],
        explanation: 'Losreißen (Haft) ist am schwersten, Rutschen (Gleit) leichter, Rollen am leichtesten.'
      },
      {
        type: 'matching',
        question: 'Welche Reibungsart wirkt hier vor allem?',
        pairs: [
          { left: 'Ein Auto steht mit Handbremse am Hang', right: 'Haftreibung' },
          { left: 'Ein Schlitten saust den Hügel hinunter', right: 'Gleitreibung' },
          { left: 'Ein Kind fährt Inliner', right: 'Rollreibung' },
          { left: 'Du bekommst den schweren Tisch kaum vom Fleck', right: 'Haftreibung' }
        ],
        explanation: 'Still liegen und losreißen = Haft, rutschen = Gleit, rollen = Roll.'
      },
      {
        type: 'fill-in-blank',
        question: 'Ergänze das Ergebnis von Station 0.',
        text: 'Die Gleitreibungskraft ist {{blank}} als die Haftreibungskraft. Die Rollreibungskraft ist am {{blank}}.',
        blanks: [{ correct: 'kleiner', alternatives: ['geringer'] }, { correct: 'kleinsten', alternatives: ['geringsten'] }],
        explanation: 'Haftreibung > Gleitreibung > Rollreibung.'
      },
      {
        type: 'number',
        question: 'Kurz bevor ein Klotz losrutscht, zeigt der Kraftmesser 5 N. Beim gleichmäßigen Weiterziehen zeigt er 3,5 N. Um wie viel ist die Haftreibung größer als die Gleitreibung?',
        answer: 1.5, unit: 'N',
        hint: 'Losreißen braucht mehr Kraft als Weiterziehen. Zieh den kleineren Wert vom größeren ab.',
        solution: '5 N − 3,5 N = <strong>1,5 N</strong>. Beim Losreißen müssen sich die verhakten Unebenheiten erst lösen, darum ist die Haftreibung größer.'
      },
      {
        type: 'multiple-choice',
        question: 'Warum rutscht man auf Glatteis so leicht aus?',
        explanation: 'Eis ist sehr glatt. Die Reibung zwischen Sohle und Eis ist klein, deshalb findest du keinen Halt und rutschst weg.',
        options: ['Die Reibung zwischen Schuh und Eis ist sehr klein', 'Auf Eis wirkt keine Gewichtskraft', 'Eis macht die Schuhe schwerer', 'Die Reibung auf Eis ist besonders groß'],
        correct: 0,
        wrongExplanations: {
          1: 'Die Gewichtskraft wirkt überall auf der Erde, auch auf Eis.',
          2: 'Die Schuhe werden nicht schwerer. Es geht um die Reibung.',
          3: 'Andersrum: Weil die Reibung klein ist, findest du keinen Halt.'
        }
      }
    ]
  },

  // ------------------------------------------------------------------ L7
  {
    id: 7,
    title: 'Wovon hängt Reibung ab?',
    explanation: {
      html: `
        <div class="analogy-box"><strong>Wie beim Schlittenziehen:</strong> Sitzt deine kleine Schwester drauf, geht es leicht. Sitzt dein Papa drauf, wird es schwer. Und auf Asphalt statt Schnee bewegt sich der Schlitten kaum noch.</div>
        <p>In euren Stationen habt ihr drei Dinge getestet:</p>
        <table class="info-table">
          <tr><th>Station</th><th>Ergebnis</th></tr>
          <tr><td>1 · Gewicht</td><td><strong>Je größer die Gewichtskraft, desto größer die Reibungskraft.</strong> Der Körper wird stärker auf die Unterlage gedrückt.</td></tr>
          <tr><td>2 · Material</td><td><strong>Raue oder griffige Stoffe (Gummi, Sandpapier) → mehr Reibung. Glatte (Eis) → weniger.</strong></td></tr>
          <tr><td>3 · Auflagefläche</td><td><strong>Kein Einfluss!</strong> Ob der Klotz flach liegt oder <em>hochkant</em> (auf der schmalen Seite) steht: Bei gleicher Gewichtskraft bleibt die Reibung gleich.</td></tr>
        </table>
        <div class="sim" data-sim="einfluss"></div>
        <div class="warning-box"><strong>Typischer Fehler:</strong> &bdquo;Große Fläche = mehr Reibung.&ldquo; Klingt logisch, stimmt aber nicht. Bei großer Fläche verteilt sich die Gewichtskraft nur auf mehr Stellen. Das hat Station 3 gezeigt.</div>
        <h3>Reibung im Alltag</h3>
        <table class="info-table">
          <tr><th>Reibung erwünscht (vergrößern)</th><th>Reibung stört (verkleinern)</th></tr>
          <tr><td>Profil an Schuhen und Reifen, Streusand im Winter, Bremsbeläge, Spikes (Metallstifte an der Sohle)</td><td>Öl an der Fahrradkette, Kugellager (kleine Kugeln im Rad, die rollen statt reiben), Räder statt Schieben</td></tr>
        </table>
        <div class="tip-box"><strong>Prüffrage bei jeder Aufgabe:</strong> Ändert sich die <strong>Gewichtskraft</strong> oder das <strong>Material</strong>? Nur dann ändert sich die Reibung.</div>
        <div class="why-context"><strong>Warum ist das wichtig?</strong> Mit diesen drei Regeln kannst du jede Frage der Art &bdquo;Was passiert mit der Reibung, wenn …?&ldquo; beantworten.</div>`
    },
    example: {
      title: 'Station 3 nachgemacht: drei Reifenstücke',
      steps: [
        { label: 'Aufeinander', html: '<p>Die 3 Stücke liegen aufeinander, nur eines berührt den Tisch. Der Kraftmesser zeigt zum Beispiel <strong>1,2 N</strong>.</p>' },
        { label: 'Hintereinander', html: '<p>Jetzt hängen sie hintereinander, alle drei berühren den Tisch. Die Fläche ist dreimal so groß. Der Kraftmesser zeigt wieder etwa <strong>1,2 N</strong>.</p>' },
        { label: 'Folgerung', html: '<p>Gewicht gleich, Fläche anders, Reibung gleich → Die Auflagefläche hat <strong>keinen Einfluss</strong>.</p>' }
      ]
    },
    exercises: [
      {
        type: 'multiple-choice',
        question: 'Ein Holzklotz wird erst flach und dann hochkant über den Tisch gezogen. Was passiert mit der Reibungskraft?',
        explanation: 'Station 3: Die Auflagefläche hat keinen Einfluss. Die Gewichtskraft und das Material bleiben gleich, also bleibt auch die Reibungskraft gleich.',
        options: ['Sie bleibt gleich', 'Sie wird hochkant größer', 'Sie wird hochkant kleiner', 'Sie verschwindet hochkant'],
        correct: 0,
        wrongExplanations: {
          1: 'Die Fläche wird kleiner, aber die Gewichtskraft bleibt gleich. Darum bleibt auch die Reibung gleich.',
          2: 'Station 3 hat gezeigt: Die Auflagefläche ändert die Reibung nicht.',
          3: 'Solange der Klotz den Tisch berührt, gibt es Reibung.'
        }
      },
      {
        type: 'fill-in-blank',
        question: 'Ergänze die Ergebnisse der Stationen 1 und 3.',
        text: 'Je größer die Gewichtskraft, desto {{blank}} die Reibungskraft. Die Größe der Auflagefläche hat {{blank}} Einfluss auf die Reibungskraft.',
        blanks: [{ correct: 'größer', alternatives: ['grösser', 'mehr', 'stärker'] }, { correct: 'keinen', alternatives: ['kein'] }],
        explanation: 'Mehr Gewichtskraft drückt den Körper stärker auf die Unterlage. Die Fläche verteilt die Gewichtskraft nur anders.'
      },
      {
        type: 'matching',
        question: 'Wird die Reibung hier vergrößert oder verkleinert?',
        pairs: [
          { left: 'Streusand auf dem Gehweg', right: 'vergrößert' },
          { left: 'Öl an der Fahrradkette', right: 'verkleinert' },
          { left: 'Spikes an Laufschuhen', right: 'vergrößert' },
          { left: 'Kugellager im Inliner-Rad', right: 'verkleinert' }
        ],
        explanation: 'Sand und Spikes geben Halt (mehr Reibung). Öl und Kugellager machen es leichtgängig (weniger Reibung).'
      },
      {
        type: 'multiple-choice',
        question: '<strong>Gemischt:</strong> Bei welcher Kombination ist die Reibungskraft am <strong>kleinsten</strong>?',
        explanation: 'Rollreibung ist die kleinste Reibung, und die leere Kiste hat die kleinste Gewichtskraft. Beides zusammen gibt die kleinste Reibungskraft.',
        options: ['Leere Kiste rollt auf Rädern', 'Volle Kiste rollt auf Rädern', 'Leere Kiste rutscht über Teppich', 'Volle Kiste rutscht über Teppich'],
        correct: 0,
        wrongExplanations: {
          1: 'Rollen ist gut, aber die volle Kiste hat eine größere Gewichtskraft. Mehr Gewichtskraft → mehr Reibung.',
          2: 'Rutschen (Gleitreibung) ist viel stärker als Rollen.',
          3: 'Das ist die größte Reibung: schwer und rutschen.'
        }
      },
      {
        type: 'free-text',
        question: '<strong>Finde den Fehler:</strong> Ben sagt: &bdquo;Ich stelle den Klotz hochkant hin. Dann ist die Fläche kleiner und er rutscht leichter.&ldquo; Stimmt das? Begründe und sag Ben, wie es wirklich leichter geht.',
        minWords: 10,
        placeholder: 'Schreib deine Erklärung für Ben …',
        compareHint: 'Hast du gesagt, dass die Auflagefläche keinen Einfluss hat? Und dass es auf Gewichtskraft und Material ankommt?',
        modelAnswer: 'Die Größe der Auflagefläche hat keinen Einfluss auf die Reibung. Die Gewichtskraft bleibt gleich, sie verteilt sich nur anders. Leichter rutscht der Klotz nur mit weniger Gewichtskraft (weniger drauflegen) oder auf einer glatteren Unterlage.'
      }
    ]
  }
]);
