/**
 * Modul 3: Rollen und Flaschenzug (Heft 3.1 und 3.2)
 */
window.LESSON_DATA = (window.LESSON_DATA || []).concat([
  // ------------------------------------------------------------------ L8
  {
    id: 8,
    title: 'Feste und lose Rolle',
    explanation: {
      html: `
        <div class="analogy-box"><strong>Wie Tragen zu zweit:</strong> Trägst du eine schwere Tasche allein, spürst du die ganze Last. Fasst eine Freundin den zweiten Henkel an, trägt jede nur die Hälfte. Bei der losen Rolle tragen zwei Seilstücke die Last, jedes die Hälfte.</div>
        <p class="klein">F<sub>L</sub> = Lastkraft (so schwer ist die Last), F<sub>Z</sub> = Zugkraft (so fest musst du ziehen), s = Weg.</p>
        <table class="info-table rollen-table">
          <tr><th></th><th>Feste Rolle</th><th>Lose Rolle</th></tr>
          <tr><td>Wo hängt sie?</td><td>fest an der Decke oder am Stativ</td><td>am Seil, sie bewegt sich mit der Last</td></tr>
          <tr><td>Was bewirkt sie?</td><td>ändert die <strong>Richtung</strong> der Kraft</td><td>verteilt die Kraft auf <strong>2 Seilstücke</strong></td></tr>
          <tr><td>Zugkraft</td><td>F<sub>Z</sub> = F<sub>L</sub> (genauso groß)</td><td>F<sub>Z</sub> = ½ · F<sub>L</sub> (halb so groß)</td></tr>
          <tr><td>Seilweg</td><td>s<sub>Z</sub> = s<sub>L</sub></td><td>s<sub>Z</sub> = 2 · s<sub>L</sub></td></tr>
          <tr><td>Vorteil</td><td>bequem nach unten ziehen, man kann sein Körpergewicht einsetzen</td><td>halbe Kraft</td></tr>
          <tr><td>Nachteil</td><td>keine Kraft gespart</td><td>doppelt so viel Seil ziehen</td></tr>
        </table>
        <div class="sim" data-sim="rolle"></div>
        <div class="tip-box"><strong>Aus eurem Versuch:</strong> Bei der festen Rolle habt ihr manchmal etwas mehr als die Lastkraft gemessen (0,6 N statt 0,5 N). Das liegt an der <strong>Reibung</strong> in der Rolle. Die Regel bleibt F<sub>Z</sub> = F<sub>L</sub>.</div>
        <div class="warning-box"><strong>Typischer Fehler:</strong> Denken, die feste Rolle spart Kraft. Sie macht das Ziehen nur bequemer, weil du nach unten ziehen kannst.</div>
        <div class="why-context"><strong>Warum ist das wichtig?</strong> Mit einer losen Rolle kann ein Dachdecker einen schweren Eimer mit halber Kraft hochziehen, wie in deiner Zeichnung im Heft.</div>`
    },
    example: {
      title: 'Eine Last von 1,5 N mit der losen Rolle heben',
      steps: [
        { label: 'Welche Rolle?', html: '<p>Lose Rolle → die Last hängt an 2 Seilstücken.</p>' },
        { label: 'Zugkraft', html: '<p>F<sub>Z</sub> = F<sub>L</sub> : 2 = 1,5 N : 2 = <strong>0,75 N</strong>. Das passt zu eurer Messung mit 150 g.</p>' },
        { label: 'Seilweg', html: '<p>Soll die Last 10 cm hoch, musst du 2 · 10 cm = <strong>20 cm</strong> Seil ziehen.</p>' }
      ]
    },
    exercises: [
      {
        type: 'number',
        question: 'Mit einer <strong>losen</strong> Rolle wird eine Last von 40 N gehoben. Wie groß ist die Zugkraft?',
        answer: 20, unit: 'N',
        solution: 'F<sub>Z</sub> = F<sub>L</sub> : 2 = 40 N : 2 = <strong>20 N</strong>'
      },
      {
        type: 'number',
        question: 'Mit einer <strong>losen</strong> Rolle soll ein Eimer 30 cm hochgezogen werden. Wie viel Seil musst du ziehen?',
        answer: 60, unit: 'cm',
        solution: 's<sub>Z</sub> = 2 · s<sub>L</sub> = 2 · 30 cm = <strong>60 cm</strong>'
      },
      {
        type: 'number',
        question: 'Mit einer <strong>festen</strong> Rolle wird eine Last von 25 N gehoben. Wie groß ist die Zugkraft (ohne Reibung)?',
        answer: 25, unit: 'N',
        hint: 'Spart die feste Rolle Kraft?',
        solution: 'Feste Rolle: F<sub>Z</sub> = F<sub>L</sub> = <strong>25 N</strong>. Sie ändert nur die Richtung.'
      },
      {
        type: 'matching',
        question: 'Ordne richtig zu.',
        pairs: [
          { left: 'Feste Rolle', right: 'ändert die Richtung der Kraft' },
          { left: 'Lose Rolle', right: 'halbiert die Zugkraft' },
          { left: 'Nachteil der losen Rolle', right: 'doppelt so viel Seil' },
          { left: 'Nachteil der festen Rolle', right: 'keine Kraft gespart' }
        ],
        explanation: 'Feste Rolle = Richtung, lose Rolle = halbe Kraft, aber doppelter Weg.'
      },
      {
        type: 'free-text',
        question: '<strong>Finde den Fehler:</strong> Tim sagt: &bdquo;Mit der losen Rolle spare ich die Hälfte der Kraft, und ich muss auch nur halb so viel Seil ziehen.&ldquo; Was stimmt, was nicht? Begründe.',
        minWords: 12,
        placeholder: 'Richtig ist … Falsch ist …',
        compareHint: 'Hast du gesagt, dass die Kraft halbiert wird, der Seilweg aber doppelt so lang wird? Und warum (2 Seilstücke müssen beide kürzer werden)?',
        modelAnswer: 'Die halbe Kraft stimmt, weil die Last an 2 Seilstücken hängt. Falsch ist der Seilweg: Man muss doppelt so viel Seil ziehen, denn beide Seilstücke müssen um die Hubhöhe kürzer werden. Was man an Kraft spart, muss man an Weg zusetzen.'
      },
      {
        type: 'multiple-choice',
        question: 'Warum zieht man mit einer festen Rolle lieber nach unten als ohne Rolle nach oben?',
        explanation: 'Beim Ziehen nach unten hilft dein eigenes Körpergewicht mit. Die Kraft bleibt gleich groß, aber das Ziehen fällt leichter.',
        options: ['Man kann das eigene Körpergewicht nutzen', 'Die Last wird dadurch leichter', 'Man braucht weniger Seil', 'Die Masse der Last halbiert sich'],
        correct: 0,
        wrongExplanations: {
          1: 'Die Last bleibt gleich schwer. Die feste Rolle spart keine Kraft.',
          2: 'Bei der festen Rolle ist der Seilweg genauso lang wie der Weg der Last.',
          3: 'Die Masse ändert sich nie. Und die feste Rolle halbiert auch keine Kraft.'
        }
      }
    ]
  },

  // ------------------------------------------------------------------ L9
  {
    id: 9,
    title: 'Der Flaschenzug',
    explanation: {
      html: `
        <div class="analogy-box"><strong>Wie eine Pizza teilen:</strong> Je mehr Freunde mitessen, desto kleiner wird jedes Stück. Je mehr Seilstücke die Last tragen, desto weniger muss jedes Stück, und damit du, halten.</div>
        <div class="merke">Ein <strong>Flaschenzug</strong> ist eine Kombination aus festen und losen Rollen. Die <strong>feste</strong> Rolle bewirkt eine <strong>Richtungsänderung</strong>. Die <strong>lose</strong> Rolle bewirkt eine <strong>Kraftersparnis</strong>.</div>
        <p><strong>n</strong> = Anzahl der <strong>tragenden Seilstücke</strong>. Das sind die Seilstücke, an denen die losen Rollen mit der Last hängen.</p>
        <div class="formel">F<sub>Z</sub> = F<sub>L</sub> : n &nbsp;&nbsp;&nbsp; s<sub>Z</sub> = s<sub>L</sub> · n</div>
        <table class="info-table">
          <tr><th>Lose Rollen</th><th>tragende Seilstücke n</th><th>Kraft</th><th>Seilweg</th></tr>
          <tr><td>1</td><td>2</td><td>½</td><td>2-fach</td></tr>
          <tr><td>2</td><td>4</td><td>¼</td><td>4-fach</td></tr>
          <tr><td>3</td><td>6</td><td>⅙</td><td>6-fach</td></tr>
        </table>
        <div class="sim" data-sim="flaschenzug"></div>
        <div class="tip-box"><strong>Goldene Regel:</strong> Was du an Kraft sparst, musst du an Weg zusetzen. Halbe Kraft heißt doppelter Weg.</div>
        <div class="warning-box"><strong>Typischer Fehler:</strong> Die Rollen statt der Seilstücke zählen. Bei 3 losen Rollen braucht man nicht ⅓, sondern <strong>⅙</strong> der Kraft, weil jede lose Rolle an 2 Seilstücken hängt.</div>
        <div class="why-context"><strong>Warum ist das wichtig?</strong> Kräne auf Baustellen, Segelboote und Abschleppwagen nutzen Flaschenzüge. So hebt man mit wenig Kraft tonnenschwere Lasten.</div>`
    },
    example: {
      title: 'Flaschenzug mit 2 losen Rollen, Last 600 N',
      steps: [
        { label: 'n bestimmen', html: '<p>2 lose Rollen, jede hängt an 2 Seilstücken → <strong>n = 4</strong>.</p>' },
        { label: 'Zugkraft', html: '<p>F<sub>Z</sub> = 600 N : 4 = <strong>150 N</strong>.</p>' },
        { label: 'Seilweg', html: '<p>Soll die Last 2 m hoch: s<sub>Z</sub> = 2 m · 4 = <strong>8 m</strong> Seil.</p>' }
      ]
    },
    exercises: [
      {
        type: 'number',
        question: 'Ein Flaschenzug hat <strong>6</strong> tragende Seilstücke. Die Last wiegt 900 N. Wie groß ist die Zugkraft?',
        answer: 150, unit: 'N',
        solution: 'F<sub>Z</sub> = F<sub>L</sub> : n = 900 N : 6 = <strong>150 N</strong>'
      },
      {
        type: 'number',
        question: 'Ein Flaschenzug hat 4 tragende Seilstücke. Die Last soll 1,5 m hochgehoben werden. Wie viel Seil musst du ziehen?',
        answer: 6, unit: 'm',
        solution: 's<sub>Z</sub> = s<sub>L</sub> · n = 1,5 m · 4 = <strong>6 m</strong>'
      },
      {
        type: 'number',
        question: 'Du ziehst an einem Flaschenzug mit 4 tragenden Seilstücken mit 50 N. Wie schwer darf die Last höchstens sein?',
        answer: 200, unit: 'N',
        hint: 'Rückwärts rechnen: Wenn F<sub>Z</sub> = F<sub>L</sub> : n, dann ist F<sub>L</sub> = …',
        solution: 'F<sub>L</sub> = F<sub>Z</sub> · n = 50 N · 4 = <strong>200 N</strong>'
      },
      {
        type: 'number',
        question: 'Zähle die <strong>tragenden Seilstücke</strong> in diesem Flaschenzug.<br>' + Sims.flaschenBild(4),
        answer: 4, unit: 'Seilstücke',
        hint: 'Zähle nur die Seile zwischen den oberen und den unteren Rollen. Das grüne Zugseil geht nach unten und zählt nicht mit.',
        solution: 'Zwischen den Rollen hängen <strong>4</strong> Seilstücke. Das grüne Zugseil zählt nicht.'
      },
      {
        type: 'number',
        question: 'An diesem Flaschenzug hängt eine Last von 360 N. Wie groß ist die Zugkraft?<br>' + Sims.flaschenBild(4),
        answer: 90, unit: 'N',
        hint: 'Erst die tragenden Seilstücke zählen.',
        solution: 'n = 4<br>F<sub>Z</sub> = 360 N : 4 = <strong>90 N</strong>'
      },
      {
        type: 'free-text',
        question: '<strong>Finde den Fehler:</strong> Paul sagt: &bdquo;Mit 3 losen Rollen brauche ich ein Drittel der Kraft.&ldquo; Erkläre seinen Fehler und rechne richtig für eine Last von 600 N.',
        minWords: 12,
        placeholder: 'Paul hat … Richtig ist …',
        compareHint: 'Hast du gesagt, dass man Seilstücke statt Rollen zählt (n = 6)? Und kommst du auf 100 N?',
        modelAnswer: 'Paul zählt die Rollen statt der tragenden Seilstücke. Jede lose Rolle hängt an 2 Seilstücken, also ist n = 6. Man braucht ein Sechstel der Kraft: 600 N : 6 = 100 N.'
      },
      {
        type: 'number',
        question: '<strong>Gemischt:</strong> Ein Eimer mit einer Masse von 12 kg wird mit einer <strong>losen</strong> Rolle hochgezogen. Wie groß ist die Zugkraft?',
        answer: 60, unit: 'N',
        solution: 'Gewichtskraft: 12 kg · 10 = 120 N<br>Lose Rolle: 120 N : 2 = <strong>60 N</strong>'
      },
      {
        type: 'multiple-choice',
        question: '<strong>Gemischt:</strong> Ein einfacher Flaschenzug hat eine feste und eine lose Rolle. Welche Aufgabe hat die <strong>feste</strong> Rolle?',
        explanation: 'Die feste Rolle lenkt das Seil um, damit du nach unten ziehen kannst. Die Kraftersparnis kommt von der losen Rolle.',
        options: ['Sie ändert die Zugrichtung', 'Sie halbiert die Kraft', 'Sie verkürzt den Seilweg', 'Sie trägt die ganze Last allein'],
        correct: 0,
        wrongExplanations: {
          1: 'Das Halbieren erledigt die lose Rolle.',
          2: 'Keine Rolle verkürzt den Weg. Die lose Rolle macht ihn sogar länger.',
          3: 'Die Last hängt an der losen Rolle und verteilt sich auf die Seilstücke.'
        }
      }
    ]
  }
]);
