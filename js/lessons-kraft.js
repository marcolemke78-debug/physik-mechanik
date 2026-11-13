/**
 * Modul 1: Kraft und Masse (Heft 1.1 bis 1.5)
 */
window.LESSON_DATA = (window.LESSON_DATA || []).concat([
  // ------------------------------------------------------------------ L1
  {
    id: 1,
    title: 'Woran erkennt man eine Kraft?',
    explanation: {
      html: `
        <div class="analogy-box"><strong>Wie beim Wind:</strong> Den Wind selbst siehst du nicht. Aber du siehst, wie sich die Bäume biegen und die Blätter wegfliegen. Genauso ist es mit Kräften.</div>
        <div class="merke">Eine Kraft kann man nicht sehen. Man erkennt sie an ihrer <strong>Wirkung</strong>.</div>
        <p>Eine Kraft kann zwei Dinge bewirken:</p>
        <div class="wirkung-grid">
          <div class="wirkung-box">
            <div class="wirkung-head">1. Einen Körper verformen</div>
            <div class="wirkung-item"><strong>plastisch</strong> = bleibt verformt<br><span>Knete eindrücken, Auto mit Delle</span></div>
            <div class="wirkung-item"><strong>elastisch</strong> = geht zurück in die alte Form<br><span>Schwamm, Gummiband, Feder</span></div>
          </div>
          <div class="wirkung-box">
            <div class="wirkung-head">2. Die Bewegung ändern</div>
            <div class="wirkung-item"><strong>beschleunigen</strong> = schneller machen<br><span>Kugel anstoßen</span></div>
            <div class="wirkung-item"><strong>abbremsen</strong> = langsamer machen<br><span>Lineal stoppt die Kugel</span></div>
            <div class="wirkung-item"><strong>Richtung ändern</strong><br><span>Magnet lenkt die Kugel ab</span></div>
          </div>
        </div>
        <div class="sim" data-sim="wirkung"></div>
        <div class="tip-box"><strong>Eselsbrücke:</strong> <em>plastisch</em> wie Plastilin (Knete) bleibt so, <em>elastisch</em> wie ein Gummi-Elastikband federt zurück.</div>
        <div class="warning-box"><strong>Typischer Fehler:</strong> Ein Ball wird beim Schuss kurz eingedellt. Ist das plastisch? Nein! Entscheidend ist, ob die Form <strong>bleibt</strong>. Geht sie zurück, ist es elastisch.</div>
        <div class="why-context"><strong>Warum ist das wichtig?</strong> In der Arbeit bekommst du Alltagssituationen und musst sagen, welche Wirkung die Kraft hat. Das sind geschenkte Punkte, wenn du die 5 Wirkungen kennst.</div>`
    },
    example: {
      title: 'Ein Fußballspiel voller Kräfte',
      steps: [
        { label: 'Der Schuss', html: '<p>Der Ball liegt und fliegt dann los. Er wird schneller → <strong>beschleunigen</strong>.</p>' },
        { label: 'Der Ball am Fuß', html: '<p>Beim Schuss wird der Ball kurz eingedellt und springt sofort zurück in seine runde Form → <strong>elastische Verformung</strong>.</p>' },
        { label: 'Der Pfosten', html: '<p>Der Ball prallt vom Pfosten ab und fliegt woanders hin → <strong>Richtung ändern</strong>.</p>' },
        { label: 'Der Torwart', html: '<p>Der Torwart fängt den Ball, bis er still in seinen Händen liegt → <strong>abbremsen</strong>.</p>' }
      ]
    },
    exercises: [
      {
        type: 'matching',
        question: 'Welche Wirkung hat die Kraft? Ordne zu.',
        pairs: [
          { left: 'Ein Fußabdruck im nassen Sand', right: 'plastische Verformung' },
          { left: 'Ein Trampolin nach dem Sprung', right: 'elastische Verformung' },
          { left: 'Ein Radfahrer bremst vor der Ampel', right: 'abbremsen' },
          { left: 'Ein Sprinter startet beim Startschuss', right: 'beschleunigen' },
          { left: 'Ein Auto fährt durch eine Kurve', right: 'Richtung ändern' }
        ],
        explanation: 'Sand bleibt eingedrückt (plastisch), das Trampolin federt zurück (elastisch). Bremsen, Starten und Kurvenfahren ändern die Bewegung.'
      },
      {
        type: 'fill-in-blank',
        question: 'Ergänze den Merksatz.',
        text: 'Eine Kraft kann man nicht {{blank}}. Man erkennt sie an ihrer {{blank}}.',
        blanks: [{ correct: 'sehen' }, { correct: 'Wirkung', alternatives: ['Wirkungen'] }],
        explanation: 'Kräfte sind unsichtbar. Du erkennst sie nur daran, was sie tun.'
      },
      {
        type: 'multiple-choice',
        question: 'Ein Tennisball fliegt auf den Schläger zu und fliegt nach dem Schlag zurück. Welche Wirkung der Kraft ist hier am wichtigsten?',
        explanation: 'Der Ball fliegt danach in eine andere Richtung: Die Kraft des Schlägers hat die Bewegungsrichtung geändert.',
        options: ['Die Richtung ändert sich', 'Plastische Verformung', 'Der Ball wird abgebremst und bleibt liegen', 'Die Masse des Balls ändert sich'],
        correct: 0,
        wrongExplanations: {
          1: 'Plastisch hieße: Der Ball bleibt verbeult. Er ist danach aber wieder rund.',
          2: 'Der Ball bleibt nicht liegen, er fliegt ja zurück.',
          3: 'Eine Kraft ändert nie die Masse. Die Masse bleibt immer gleich.'
        }
      },
      {
        type: 'multiple-choice',
        question: 'Welcher Gegenstand wird <strong>elastisch</strong> verformt?',
        explanation: 'Das Gummiband geht nach dem Loslassen in seine alte Form zurück. Das heißt elastisch.',
        options: ['Ein zerknülltes Stück Alufolie', 'Ein gedehntes Gummiband', 'Knete nach dem Drücken', 'Ein Auto nach dem Unfall'],
        correct: 1,
        wrongExplanations: {
          0: 'Die Alufolie bleibt zerknüllt, das ist plastisch.',
          2: 'Die Knete behält den Abdruck, das ist plastisch.',
          3: 'Die Delle bleibt, das ist plastisch.'
        }
      }
    ]
  },

  // ------------------------------------------------------------------ L2
  {
    id: 2,
    title: 'Kraftpfeile zeichnen',
    explanation: {
      html: `
        <div class="analogy-box"><strong>Wie ein Navi-Pfeil:</strong> Er zeigt dir, <em>wo</em> du gerade bist, <em>wohin</em> es geht und <em>wie weit</em>. Ein Kraftpfeil zeigt genau diese drei Dinge für eine Kraft.</div>
        <div class="merke">Kräfte werden durch einen <strong>Kraftpfeil</strong> dargestellt.</div>
        <table class="info-table">
          <tr><th>Am Pfeil</th><th>bedeutet</th></tr>
          <tr><td>Anfangspunkt</td><td><strong>Angriffspunkt</strong>: Hier greift die Kraft am Körper an.</td></tr>
          <tr><td>Pfeilspitze</td><td><strong>Richtung</strong> der Kraft</td></tr>
          <tr><td>Länge</td><td><strong>Größe</strong> der Kraft</td></tr>
        </table>
        <p>Damit man die Größe ablesen kann, legt man einen <strong>Maßstab</strong> fest, zum Beispiel <strong>1 cm ≙ 2 N</strong> (lies: 1 cm entspricht 2 Newton).</p>
        <div class="formel">Pfeillänge = Kraft : Maßstab</div>
        <div class="sim" data-sim="pfeil"></div>
        <div class="warning-box"><strong>Typischer Fehler:</strong> Den Maßstab vergessen. Ohne Maßstab weiß niemand, wie groß die Kraft ist. Schreib ihn immer neben die Zeichnung.</div>
        <div class="why-context"><strong>Warum ist das wichtig?</strong> &bdquo;Zeichne den Kraftpfeil ein&ldquo; ist eine typische Arbeitsaufgabe, wie auf deinem Blatt mit der Bogenschützin.</div>`
    },
    example: {
      title: 'Eine Kraft von 6 N zeichnen (Maßstab 1 cm ≙ 2 N)',
      steps: [
        { label: 'Maßstab anschauen', html: '<p>1 cm steht für 2 N.</p>' },
        { label: 'Länge ausrechnen', html: '<p>6 N : 2 N = <strong>3</strong>. Der Pfeil wird <strong>3 cm</strong> lang. <em>Warum teilen?</em> Du fragst: Wie oft passen 2 N in 6 N?</p>' },
        { label: 'Angriffspunkt markieren', html: '<p>Mach einen Punkt dort, wo die Kraft am Körper angreift, zum Beispiel wo die Hand zieht.</p>' },
        { label: 'Pfeil zeichnen und beschriften', html: '<p>Vom Punkt aus 3 cm in Kraftrichtung, Spitze dran, daneben <strong>F = 6 N</strong> schreiben.</p>' }
      ]
    },
    exercises: [
      {
        type: 'number',
        question: 'Maßstab: 1 cm ≙ 5 N. Wie lang wird der Kraftpfeil für eine Kraft von 20 N?',
        answer: 4, unit: 'cm',
        hint: 'Wie oft passen 5 N in 20 N?',
        solution: 'Pfeillänge = 20 N : 5 N = <strong>4 cm</strong>'
      },
      {
        type: 'number',
        question: 'Maßstab: 1 cm ≙ 2 N. Ein Kraftpfeil ist 4,5 cm lang. Wie groß ist die Kraft?',
        answer: 9, unit: 'N',
        hint: 'Jetzt rückwärts: Jeder Zentimeter steht für 2 N.',
        solution: 'Kraft = 4,5 · 2 N = <strong>9 N</strong>'
      },
      {
        type: 'matching',
        question: 'Was zeigt welcher Teil des Kraftpfeils?',
        pairs: [
          { left: 'Anfangspunkt', right: 'Angriffspunkt der Kraft' },
          { left: 'Pfeilspitze', right: 'Richtung der Kraft' },
          { left: 'Länge', right: 'Größe der Kraft' }
        ],
        explanation: 'Wo (Angriffspunkt), wohin (Richtung), wie stark (Länge).'
      },
      {
        type: 'multiple-choice',
        question: 'Eine Bogenschützin zieht die Sehne mit 3,5 N nach hinten zu sich. Maßstab 1 cm ≙ 1 N. Welcher Pfeil ist richtig?',
        explanation: '3,5 N : 1 N = 3,5 cm. Die Hand zieht die Sehne zur Schützin, also zeigt der Pfeil zu ihr. (Die 3,5 N sind die Zahl von deinem Arbeitsblatt.)',
        options: ['3,5 cm, zeigt zur Schützin', '3,5 cm, zeigt vom Bogen weg', '7 cm, zeigt zur Schützin', '1 cm, zeigt zur Schützin'],
        correct: 0,
        wrongExplanations: {
          1: 'Sie zieht die Sehne zu sich heran, also zeigt der Pfeil zu ihr.',
          2: '3,5 N : 1 N = 3,5 cm, nicht 7 cm. Du hast mal 2 gerechnet.',
          3: 'Bei 1 cm ≙ 1 N ist jeder Newton ein Zentimeter, also 3,5 cm.'
        }
      },
      {
        type: 'multiple-choice',
        question: 'Ein Kind zieht einen Wagen mit <strong>15 N nach rechts</strong> (am Griff rechts). Maßstab: 1 cm ≙ 5 N, ein Kästchen ist 1 cm. Welcher Kraftpfeil ist richtig?',
        options: [Sims.pfeilBild(0, 3, 1), Sims.pfeilBild(0, 3, -1), Sims.pfeilBild(0, 5, 1), Sims.pfeilBild(3, 3, 1)],
        correct: 0,
        explanation: '15 N : 5 N = 3 cm, also 3 Kästchen. Der Pfeil beginnt am Wagen (Angriffspunkt) und zeigt nach rechts.',
        wrongExplanations: {
          1: 'Die Länge stimmt, aber das Kind zieht nach <strong>rechts</strong>. Der Pfeil zeigt in die falsche Richtung.',
          2: '5 Kästchen wären 25 N. Rechne: 15 N : 5 N = 3 cm.',
          3: 'Länge und Richtung stimmen, aber der Pfeil schwebt in der Luft. Er muss <strong>am Wagen</strong> beginnen, dort greift die Kraft an.'
        }
      },
      {
        type: 'ordering',
        question: 'Bring die Schritte zum Zeichnen eines Kraftpfeils in die richtige Reihenfolge.',
        items: ['Maßstab festlegen', 'Pfeillänge ausrechnen (Kraft : Maßstab)', 'Vom Angriffspunkt aus in Kraftrichtung zeichnen', 'Pfeil beschriften (F = … N)'],
        correctOrder: [0, 1, 2, 3],
        explanation: 'Ohne Maßstab kannst du die Länge nicht ausrechnen. Ohne Länge kannst du nicht zeichnen. Beschriftet wird zum Schluss.'
      }
    ]
  },

  // ------------------------------------------------------------------ L3
  {
    id: 3,
    title: 'Zwei Kräfte: wer gewinnt?',
    explanation: {
      html: `
        <div class="analogy-box"><strong>Wie beim Tauziehen:</strong> Ziehen beide Teams gleich stark, bewegt sich das Seil nicht. Zieht ein Team stärker, gewinnt es, und zwar mit dem Unterschied der Kräfte.</div>
        <p>Wir schauen auf einen Körper, der zuerst <strong>ruhig liegt</strong>. Je nachdem, welche Kräfte auf ihn wirken, passiert Folgendes (Heft 1.3):</p>
        <table class="info-table">
          <tr><th>Fall</th><th>Was passiert?</th></tr>
          <tr><td>Gleich lang, <strong>entgegengesetzt</strong></td><td>Die Kräfte <strong>heben sich auf</strong>. Der Körper bleibt in Ruhe, er bewegt sich nicht. <span class="klein">Beispiel: Ein Ball liegt auf dem Tisch. Die Gewichtskraft zieht nach unten, der Tisch drückt mit einer <strong>Gegenkraft</strong> genauso stark nach oben.</span></td></tr>
          <tr><td>Nur <strong>ein</strong> Pfeil</td><td>Der Körper setzt sich in Richtung des Pfeils in Bewegung. <span class="klein">Beispiel: Du lässt den Ball los, er fällt nach unten.</span></td></tr>
          <tr><td>Nicht gleich lang, entgegengesetzt</td><td>Man zieht die kleinere von der größeren Kraft ab. Das Ergebnis heißt <strong>resultierende Kraft</strong> (die Resultierende). Der Körper bewegt sich in ihre Richtung. <span class="klein">Beispiel: Deine Hand hebt eine Kugel. Die Muskelkraft ist größer als die Gewichtskraft, also geht die Kugel nach oben.</span></td></tr>
          <tr><td>Zwei Kräfte in die <strong>gleiche</strong> Richtung</td><td>Die Kräfte werden <strong>addiert</strong>. <span class="klein">Beispiel: Zwei Personen schieben ein Auto gemeinsam an.</span></td></tr>
        </table>
        <div class="formel">entgegengesetzt: Resultierende = größere Kraft − kleinere Kraft<br>gleiche Richtung: Resultierende = Kraft 1 + Kraft 2</div>
        <div class="sim" data-sim="tau"></div>
        <div class="warning-box"><strong>Typischer Fehler:</strong> Bei entgegengesetzten Kräften addieren. Wenn sie gegeneinander ziehen, wird <strong>abgezogen</strong>. Und schreib die Richtung dazu (nach links, nach oben …).</div>
        <div class="why-context"><strong>Warum ist das wichtig?</strong> Damit kannst du erklären, warum etwas stillsteht oder sich bewegt, vom Buch auf dem Tisch bis zum Aufzug.</div>`
    },
    example: {
      title: 'Tauziehen: 300 N gegen 250 N',
      steps: [
        { label: 'Richtungen prüfen', html: '<p>Team A zieht nach links (300 N), Team B nach rechts (250 N). Entgegengesetzt → abziehen.</p>' },
        { label: 'Rechnen', html: '<p>300 N − 250 N = <strong>50 N</strong></p>' },
        { label: 'Richtung angeben', html: '<p>Die größere Kraft zeigt nach links, also: Resultierende <strong>50 N nach links</strong>. Team A gewinnt.</p>' }
      ]
    },
    exercises: [
      {
        type: 'number',
        question: 'Tom zieht eine Kiste mit 120 N nach rechts, Lisa zieht mit 90 N nach links. Wie groß ist die resultierende Kraft?',
        answer: 30, unit: 'N',
        hint: 'Sie ziehen gegeneinander. Addieren oder abziehen?',
        solution: 'Entgegengesetzt → abziehen: 120 N − 90 N = <strong>30 N</strong> (nach rechts, Tom gewinnt)'
      },
      {
        type: 'number',
        question: 'Zwei Hunde ziehen einen Schlitten in <strong>dieselbe</strong> Richtung, mit 80 N und 70 N. Wie groß ist die resultierende Kraft?',
        answer: 150, unit: 'N',
        solution: 'Gleiche Richtung → addieren: 80 N + 70 N = <strong>150 N</strong>'
      },
      {
        type: 'multiple-choice',
        question: 'Ein Buch liegt ruhig auf dem Tisch. Warum bewegt es sich nicht?',
        explanation: 'Die Gewichtskraft zieht das Buch nach unten, der Tisch drückt mit einer Gegenkraft genauso stark nach oben. Gleich lang und entgegengesetzt: Die Kräfte heben sich auf.',
        options: ['Der Tisch drückt mit gleich starker Gegenkraft nach oben', 'Auf das Buch wirkt keine Kraft', 'Die Gewichtskraft des Buches zeigt nach oben', 'Das Buch hat keine Masse'],
        correct: 0,
        wrongExplanations: {
          1: 'Doch: Die Gewichtskraft zieht das Buch immer nach unten. Sie wird nur ausgeglichen.',
          2: 'Die Gewichtskraft zeigt immer nach unten, zum Erdmittelpunkt.',
          3: 'Jeder Gegenstand hat eine Masse. Ein Buch etwa 0,5 kg.'
        }
      },
      {
        type: 'multiple-choice',
        question: '<strong>Finde den Fehler:</strong> Mia rechnet: &bdquo;Links ziehen 40 N, rechts ziehen 25 N. Resultierende: 65 N nach links.&ldquo; Was hat sie falsch gemacht?',
        explanation: 'Die Kräfte ziehen gegeneinander, also wird abgezogen: 40 N − 25 N = 15 N nach links.',
        options: ['Sie hat addiert statt abgezogen', 'Die Richtung müsste rechts sein', 'Sie hätte malnehmen müssen', 'Es ist alles richtig'],
        correct: 0,
        wrongExplanations: {
          1: 'Links ist die größere Kraft (40 N), also stimmt die Richtung links.',
          2: 'Zwei Kräfte fasst man nie durch Malnehmen zusammen, sondern durch Addieren oder Abziehen.',
          3: 'Die Kräfte ziehen gegeneinander. 65 N kann nicht stimmen. Richtig: 40 N − 25 N = 15 N nach links.'
        }
      },
      {
        type: 'number',
        question: '<strong>Gemischt:</strong> Auf eine Kiste wirken 9 N nach rechts und 3 N nach links. Du zeichnest die Resultierende im Maßstab 1 cm ≙ 2 N. Wie lang wird der Pfeil?',
        answer: 3, unit: 'cm',
        hint: 'Erst die Resultierende ausrechnen, dann den Maßstab anwenden.',
        solution: 'Resultierende: 9 N − 3 N = 6 N (nach rechts)<br>Pfeillänge: 6 N : 2 N = <strong>3 cm</strong>'
      }
    ]
  },

  // ------------------------------------------------------------------ L4
  {
    id: 4,
    title: 'Kräfte messen',
    explanation: {
      html: `
        <div class="analogy-box"><strong>Wie ein Gummiband:</strong> Hängst du eine leichte Tasche dran, dehnt es sich ein bisschen. Eine schwere Tasche dehnt es viel weiter. So funktioniert ein Federkraftmesser.</div>
        <div class="merke">Je größer die Kraft, desto stärker wird die Feder gedehnt. Kräfte misst man in <strong>Newton (N)</strong>.</div>
        <div class="sim" data-sim="feder"></div>
        <h3>Der Umgang mit dem Kraftmesser</h3>
        <table class="info-table">
          <tr><th>Darauf achten</th><th>Warum?</th><th>Sonst …</th></tr>
          <tr><td>Messbereich passend wählen</td><td>Die Feder darf nicht zu schwach oder zu stark sein.</td><td>zu schwach: Feder leiert aus. Zu stark: ungenaue Messung.</td></tr>
          <tr><td>Nullpunkt prüfen</td><td>Ohne Last muss der Zeiger auf 0 stehen.</td><td>Das Ergebnis ist falsch.</td></tr>
          <tr><td>In Richtung der Kraft halten</td><td>Die Feder muss gerade gezogen werden.</td><td>Falsche Messung.</td></tr>
          <tr><td>Skala auf Augenhöhe ablesen</td><td>Von schräg oben verliest man sich.</td><td>Falsches Ergebnis.</td></tr>
        </table>
        <h3>Richtig ablesen</h3>
        <p>Zuerst schauen: Wie viel ist <strong>ein kleiner Strich</strong> wert? Beim 10-N-Kraftmesser mit 20 Strichen ist ein Strich 0,5 N. Beim 1-N-Kraftmesser mit 20 Strichen ist ein Strich 0,05 N.</p>
        <div class="warning-box"><strong>Typischer Fehler:</strong> Beim 1-N-Kraftmesser &bdquo;5&ldquo; statt &bdquo;0,5 N&ldquo; schreiben. Schau immer auf die Zahl am Ende der Skala: Das ist der Messbereich.</div>
        <div class="why-context"><strong>Warum ist das wichtig?</strong> In der Arbeit kann ein Bild mit einer Skala kommen, und du sollst den Wert ablesen, wie auf deinem Arbeitsblatt.</div>`
    },
    example: {
      title: 'Ablesen am 10-N-Kraftmesser',
      steps: [
        { label: 'Messbereich', html: '<p>Die Skala geht bis 10 N.</p>' + Sims.skala(10, 7.5) },
        { label: 'Wert eines Strichs', html: '<p>Zwischen 0 und 10 N liegen 20 kleine Striche. 10 N : 20 = <strong>0,5 N pro Strich</strong>.</p>' },
        { label: 'Ablesen', html: '<p>Der Zeiger steht 3 Striche hinter der 6. 6 N + 3 · 0,5 N = <strong>7,5 N</strong>.</p>' }
      ]
    },
    exercises: [
      {
        type: 'number',
        question: 'Lies den Kraftmesser ab (Messbereich 10 N).' + Sims.skala(10, 3.5),
        answer: 3.5, unit: 'N',
        hint: 'Ein kleiner Strich ist 0,5 N wert.',
        solution: '2 N + 3 Striche · 0,5 N = <strong>3,5 N</strong>'
      },
      {
        type: 'number',
        question: 'Lies den Kraftmesser ab (Messbereich 1 N).' + Sims.skala(1, 0.65),
        answer: 0.65, unit: 'N',
        hint: 'Beim 1-N-Kraftmesser ist ein kleiner Strich 0,05 N wert.',
        solution: '0,6 N + 1 Strich · 0,05 N = <strong>0,65 N</strong>'
      },
      {
        type: 'multiple-choice',
        question: 'Du willst eine Kraft von etwa 4 N messen. Welchen Kraftmesser nimmst du?',
        explanation: '4 N liegt gut im Bereich bis 10 N. So ist die Feder nicht überlastet und der Ausschlag groß genug zum Ablesen.',
        options: ['Messbereich 10 N', 'Messbereich 1 N', 'Messbereich 100 N', 'Ein Kraftmesser mit 5 N'],
        correct: 0,
        wrongExplanations: {
          1: '4 N sind zu viel für einen 1-N-Kraftmesser. Die Feder würde ausleiern.',
          2: 'Das geht, ist aber sehr ungenau. 4 N wären nur ein winziger Ausschlag.',
          3: 'Bis 5 N ginge es knapp, aber du weißt nur &bdquo;etwa 4 N&ldquo;. Ist es etwas mehr, wird die Feder fast bis zum Anschlag gedehnt. Sicherer ist 10 N.'
        }
      },
      {
        type: 'matching',
        question: 'Ordne jeder Regel den Grund zu.',
        pairs: [
          { left: 'Nullpunkt prüfen', right: 'damit das Ergebnis stimmt' },
          { left: 'Passenden Messbereich wählen', right: 'damit die Feder nicht ausleiert' },
          { left: 'Skala auf Augenhöhe', right: 'damit man sich nicht verliest' },
          { left: 'In Kraftrichtung halten', right: 'damit die Feder gerade gezogen wird' }
        ],
        explanation: 'Vier Regeln, vier Gründe. Diese Tabelle steht auch in deinem Heft (1.4).'
      },
      {
        type: 'fill-in-blank',
        question: 'Ergänze.',
        text: 'Je größer die Kraft, desto stärker wird die {{blank}} gedehnt. Kräfte misst man in der Einheit {{blank}}.',
        blanks: [{ correct: 'Feder' }, { correct: 'Newton', alternatives: ['N', 'Newton (N)'] }],
        explanation: 'Der Federkraftmesser nutzt die Dehnung einer Feder. Die Einheit heißt Newton.'
      }
    ]
  },

  // ------------------------------------------------------------------ L5
  {
    id: 5,
    title: 'Masse und Gewichtskraft',
    explanation: {
      html: `
        <div class="analogy-box"><strong>Wie ein gepackter Koffer:</strong> Was drin ist (die <em>Masse</em>), bleibt gleich, egal wohin du fliegst. Wie schwer er sich anfühlt (die <em>Gewichtskraft</em>), hängt davon ab, wo du bist. Auf dem Mond könntest du ihn locker hochheben.</div>
        <h3>Gravitation</h3>
        <p>Alle Körper ziehen sich gegenseitig an. Das nennt man <strong>Gravitationskraft</strong>. Bei kleinen Dingen ist sie winzig. Den Bereich, in dem sie wirkt, nennt man <strong>Gravitationsfeld</strong>.</p>
        <p>Die Gravitationskraft zwischen einem Körper und der Erde heißt <strong>Gewichtskraft</strong>.</p>
        <table class="info-table">
          <tr><th></th><th>Masse</th><th>Gewichtskraft</th></tr>
          <tr><td>Zeichen</td><td><strong>m</strong></td><td><strong>G</strong> (auch F<sub>G</sub>)</td></tr>
          <tr><td>Einheit</td><td><strong>kg</strong></td><td><strong>N</strong></td></tr>
          <tr><td>Hängt vom Ort ab?</td><td>Nein, überall gleich</td><td>Ja (Erde, Mond, …)</td></tr>
        </table>
        <div class="formel">Erde: 1 kg ≙ 10 N &nbsp;·&nbsp; Mond: ein Sechstel davon</div>
        <div class="tip-box"><strong>Rechentrick:</strong> kg → N: <strong>mal 10</strong>. N → kg: <strong>durch 10</strong>. (Genau sind es 9,81 N, in der Schule rechnet ihr mit 10.)</div>
        <div class="sim" data-sim="gewicht"></div>
        <div class="warning-box"><strong>Typischer Fehler:</strong> kg und N verwechseln. &bdquo;Ich wiege 50 kg&ldquo; meint die <strong>Masse</strong>. Die Gewichtskraft wären 500 N.</div>
        <div class="why-context"><strong>Warum ist das wichtig?</strong> Bei vielen Aufgaben steht die Masse in kg da (wie beim Koffer mit 15 kg auf deinem Blatt), du musst aber mit Newton rechnen oder zeichnen.</div>`
    },
    example: {
      title: '60 kg auf der Erde und auf dem Mond',
      steps: [
        { label: 'Erde', html: '<p>1 kg ≙ 10 N, also 60 kg · 10 = <strong>600 N</strong>.</p>' },
        { label: 'Mond', html: '<p>Auf dem Mond ist es ein Sechstel: 600 N : 6 = <strong>100 N</strong>.</p>' },
        { label: 'Masse', html: '<p>Die Masse bleibt überall <strong>60 kg</strong>. Nur die Gewichtskraft ändert sich.</p>' }
      ]
    },
    exercises: [
      {
        type: 'number',
        question: 'Ein Koffer hat eine Masse von 15 kg. Wie groß ist seine Gewichtskraft auf der Erde?',
        answer: 150, unit: 'N',
        solution: '15 kg · 10 = <strong>150 N</strong>'
      },
      {
        type: 'number',
        question: 'Ein Paket hat eine Masse von 1,4 kg. Wie groß ist seine Gewichtskraft auf der Erde?',
        answer: 14, unit: 'N',
        solution: '1,4 kg · 10 = <strong>14 N</strong>'
      },
      {
        type: 'number',
        question: 'Ein Hund hat eine Masse von 36 kg. Wie groß wäre seine Gewichtskraft auf dem Mond?',
        answer: 60, unit: 'N',
        hint: 'Erst auf der Erde ausrechnen, dann durch 6.',
        solution: 'Erde: 36 kg · 10 = 360 N<br>Mond: 360 N : 6 = <strong>60 N</strong>'
      },
      {
        type: 'multiple-choice',
        question: '<strong>Finde den Fehler:</strong> Jonas sagt: &bdquo;Auf dem Mond hat mein Rucksack (6 kg) nur noch 1 kg Masse.&ldquo; Was stimmt?',
        explanation: 'Die Masse ist überall gleich: 6 kg. Nur die Gewichtskraft wird auf dem Mond kleiner, nämlich 60 N : 6 = 10 N.',
        options: ['Die Masse bleibt 6 kg, nur die Gewichtskraft sinkt', 'Jonas hat recht', 'Masse 1 kg, Gewichtskraft bleibt 60 N', 'Masse und Gewichtskraft bleiben gleich'],
        correct: 0,
        wrongExplanations: {
          1: 'Die Masse hängt nicht vom Ort ab. Was im Rucksack ist, bleibt drin.',
          2: 'Genau andersrum: Die Masse bleibt, die Gewichtskraft ändert sich.',
          3: 'Die Masse bleibt gleich, aber die Gewichtskraft hängt vom Ort ab. Auf dem Mond ist sie ein Sechstel.'
        }
      },
      {
        type: 'number',
        question: 'Ein Sack hat auf der Erde eine Gewichtskraft von 250 N. Welche Masse hat er?',
        answer: 25, unit: 'kg',
        hint: 'Jetzt rückwärts: von N zu kg.',
        solution: '250 N : 10 = <strong>25 kg</strong>'
      },
      {
        type: 'number',
        question: 'Ein Stein hat auf dem Mond eine Gewichtskraft von 20 N. Welche Masse hat er?',
        answer: 12, unit: 'kg',
        hint: 'Auf der Erde wäre die Gewichtskraft sechsmal so groß.',
        solution: 'Erde: 20 N · 6 = 120 N<br>Masse: 120 N : 10 = <strong>12 kg</strong> (die Masse ist überall gleich)'
      },
      {
        type: 'free-text',
        question: 'Erkläre in eigenen Worten den Unterschied zwischen <strong>Masse</strong> und <strong>Gewichtskraft</strong>. Nenne auch die Einheiten.',
        minWords: 15,
        placeholder: 'Die Masse ist … Die Gewichtskraft ist …',
        compareHint: 'Hast du beide Einheiten genannt (kg und N)? Und gesagt, was vom Ort abhängt und was nicht?',
        modelAnswer: 'Die Masse gibt an, wie viel Stoff ein Körper hat. Sie wird in Kilogramm (kg) gemessen und ist überall gleich. Die Gewichtskraft ist die Kraft, mit der die Erde (oder der Mond) den Körper anzieht. Sie wird in Newton (N) gemessen und hängt vom Ort ab: Auf dem Mond ist sie nur ein Sechstel so groß.'
      },
      {
        type: 'number',
        question: '<strong>Gemischt:</strong> Ein Hund zieht an der Leine mit 150 N nach vorn, du hältst mit 120 N dagegen. Du zeichnest die resultierende Kraft im Maßstab 1 cm ≙ 10 N. Wie lang wird der Pfeil?',
        answer: 3, unit: 'cm',
        solution: 'Gegeneinander → abziehen: 150 N − 120 N = 30 N (nach vorn)<br>Pfeillänge: 30 N : 10 N = <strong>3 cm</strong>'
      },
      {
        type: 'number',
        question: '<strong>Gemischt:</strong> Ein Gewichtheber stemmt eine Hantel mit 35 kg Masse. Du zeichnest ihre Gewichtskraft im Maßstab 1 cm ≙ 100 N. Wie lang wird der Pfeil?',
        answer: 3.5, unit: 'cm',
        solution: '35 kg · 10 = 350 N<br>350 N : 100 N = <strong>3,5 cm</strong> (nach unten, Angriffspunkt in der Mitte der Hantel)'
      }
    ]
  }
]);
