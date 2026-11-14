/**
 * Modul 4: Elektromagnetismus (Heft: Was versteht man unter Elektromagnetismus?, 1. bis 1.2)
 */
window.LESSON_DATA = (window.LESSON_DATA || []).concat([
  // ------------------------------------------------------------------ L10
  {
    id: 10,
    title: 'Der Elektromagnet',
    explanation: {
      html: `
        <div class="merke"><strong>Merke:</strong> Fließt <strong>Strom</strong> durch einen elektrischen Leiter, entsteht ein <strong>Magnetfeld</strong>.</div>
        <div class="analogy-box"><strong>Wie ein Magnet mit Lichtschalter:</strong> Ein normaler Magnet ist immer an. Ein Elektromagnet ist nur ein Magnet, solange Strom fließt. Schaltest du den Strom aus, ist auch der Magnet aus.</div>
        <table class="info-table">
          <tr><th>Begriff</th><th>Bedeutung</th></tr>
          <tr><td><strong>Spule</strong></td><td>ein aufgewickelter Leiter (Draht)</td></tr>
          <tr><td><strong>Windung</strong></td><td>eine Drahtschleife der Spule</td></tr>
          <tr><td><strong>Elektromagnet</strong></td><td>eine Spule, durch die Strom fließt (stromdurchflossene Spule)</td></tr>
        </table>
        <h3>Das Magnetfeld verstärken</h3>
        <p>Das Magnetfeld eines Elektromagneten wird stärker durch:</p>
        <ul>
          <li>einen <strong>Eisenkern</strong> im Inneren der Spule</li>
          <li>eine <strong>höhere Stromstärke</strong></li>
          <li><strong>mehr Windungen</strong></li>
        </ul>
        <div class="sim" data-sim="elektromagnet"></div>
        <h3>Das Magnetfeld</h3>
        <p>Eine stromdurchflossene Spule hat <strong>dasselbe Magnetfeld wie ein Stabmagnet</strong>: einen Nordpol und einen Südpol. Außen laufen die Feldlinien vom Nordpol zum Südpol.</p>
        <div class="sim" data-sim="magnetfeld"></div>
        <div class="warning-box"><strong>Typischer Fehler:</strong> Denken, der Eisenkern allein macht den Magneten. Ohne Strom gibt es kein Magnetfeld, auch nicht mit Eisenkern. Der Eisenkern verstärkt nur das Feld, das der Strom erzeugt.</div>
        <div class="why-context"><strong>Warum ist das wichtig?</strong> Auf dem Schrottplatz hebt ein Kran mit einem großen Elektromagneten alte Autos hoch. Strom aus, und das Auto fällt genau dort ab, wo es hin soll. Auch Türöffner, Lautsprecher und Klingeln haben Elektromagnete.</div>`
    },
    example: {
      title: 'Ein Elektromagnet hebt zu wenig. Was tun?',
      steps: [
        { label: 'Ausgangslage', html: '<p>Eine Spule mit 100 Windungen ohne Eisenkern hebt nur eine Büroklammer.</p>' },
        { label: 'Drei Möglichkeiten', html: '<p>1. einen <strong>Eisenkern</strong> hineinstecken<br>2. die <strong>Stromstärke</strong> erhöhen<br>3. eine Spule mit <strong>mehr Windungen</strong> nehmen</p>' },
        { label: 'Probe', html: '<p>Stell im Schieberegler oben 400 Windungen, 2 A und &bdquo;mit Eisenkern&ldquo; ein. Jetzt hält der Magnet viel mehr Klammern.</p>' }
      ]
    },
    exercises: [
      {
        type: 'fill-in-blank',
        question: 'Ergänze den Merksatz.',
        text: 'Fließt {{blank}} durch einen elektrischen Leiter, entsteht ein {{blank}}.',
        blanks: [{ correct: 'Strom', alternatives: ['elektrischer Strom'] }, { correct: 'Magnetfeld', alternatives: ['magnetisches Feld'] }],
        explanation: 'Strom erzeugt ein Magnetfeld. Das ist der Grundgedanke des Elektromagnetismus.'
      },
      {
        type: 'matching',
        question: 'Ordne die Begriffe richtig zu.',
        pairs: [
          { left: 'Spule', right: 'aufgewickelter Leiter' },
          { left: 'Elektromagnet', right: 'Spule, durch die Strom fließt' },
          { left: 'Windung', right: 'eine Drahtschleife der Spule' },
          { left: 'Eisenkern', right: 'verstärkt das Magnetfeld' }
        ],
        explanation: 'Aus dem Leiter wird durch Aufwickeln eine Spule. Fließt Strom hindurch, ist sie ein Elektromagnet.'
      },
      {
        type: 'multiple-choice',
        question: 'Mit welcher Änderung wird ein Elektromagnet <strong>stärker</strong>?',
        explanation: 'Mehr Windungen verstärken das Magnetfeld, genauso wie ein Eisenkern und eine höhere Stromstärke.',
        options: ['einen Holzkern statt des Eisenkerns nehmen', 'die Stromstärke verkleinern', 'eine Spule mit mehr Windungen nehmen', 'eine Spule mit weniger Windungen nehmen'],
        correct: 2,
        wrongExplanations: {
          0: 'Holz ist nicht magnetisch. Nur ein Eisenkern verstärkt das Magnetfeld.',
          1: 'Weniger Strom macht das Magnetfeld schwächer.',
          3: 'Weniger Windungen machen das Magnetfeld schwächer.'
        }
      },
      {
        type: 'multiple-choice',
        question: 'Ein Elektromagnet hält Büroklammern fest. Dann wird der <strong>Strom ausgeschaltet</strong>. Was passiert?',
        explanation: 'Ohne Strom gibt es kein Magnetfeld. Darum kann man einen Elektromagneten ein- und ausschalten.',
        options: ['Die Klammern bleiben für immer hängen', 'Das Magnetfeld verschwindet, die Klammern fallen ab', 'Das Magnetfeld wird stärker', 'Nur der Nordpol bleibt magnetisch'],
        correct: 1,
        wrongExplanations: {
          0: 'Ein Elektromagnet ist nur magnetisch, solange Strom fließt.',
          2: 'Ohne Strom wird das Magnetfeld nicht stärker, es verschwindet.',
          3: 'Ein Pol allein geht nicht. Ohne Strom verschwindet das ganze Magnetfeld.'
        }
      },
      {
        type: 'multiple-choice',
        question: 'Wo ist das Magnetfeld dieses Stabmagneten am <strong>stärksten</strong>?<br>' + Sims.feldBild('stab'),
        explanation: 'An den Polen liegen die Feldlinien am dichtesten. Dort ist das Magnetfeld am stärksten.',
        options: ['genau in der Mitte des Magneten', 'weit weg vom Magneten', 'überall gleich stark', 'an den Polen'],
        correct: 3,
        wrongExplanations: {
          0: 'In der Mitte liegen außen nur wenige Feldlinien. Dort zieht ein Magnet kaum.',
          1: 'Weit weg liegen die Feldlinien weit auseinander. Das Feld ist dort schwach.',
          2: 'Die Feldlinien liegen nicht überall gleich dicht. An den Polen sind sie am dichtesten.'
        }
      },
      {
        type: 'multiple-choice',
        question: 'Welche Aussage über das Magnetfeld einer stromdurchflossenen <strong>Spule</strong> stimmt?',
        explanation: 'Die Spule hat dasselbe Feldlinienbild wie ein Stabmagnet: einen Nordpol und einen Südpol.',
        options: ['Es sieht aus wie das Feld eines Stabmagneten', 'Es hat keinen Nord- und keinen Südpol', 'Es entsteht nur mit Eisenkern', 'Es entsteht auch ohne Strom'],
        correct: 0,
        wrongExplanations: {
          1: 'Die Spule hat wie ein Stabmagnet einen Nordpol und einen Südpol.',
          2: 'Auch ohne Eisenkern entsteht ein Magnetfeld. Der Eisenkern verstärkt es nur.',
          3: 'Ohne Strom gibt es kein Magnetfeld.'
        }
      },
      {
        type: 'free-text',
        question: '<strong>Finde den Fehler:</strong> Lena sagt: &bdquo;Ein Elektromagnet ist einfach ein aufgewickelter Draht mit Eisenkern. Der zieht Eisen auch ohne Strom an.&ldquo; Was ist falsch? Begründe.',
        minWords: 12,
        placeholder: 'Falsch ist … weil …',
        compareHint: 'Hast du gesagt, dass erst der Strom das Magnetfeld erzeugt? Und dass der Eisenkern das Feld nur verstärkt?',
        modelAnswer: 'Ohne Strom ist die Spule kein Magnet. Erst wenn Strom durch die Spule fließt, entsteht ein Magnetfeld. Der Eisenkern macht das Magnetfeld nur stärker, er erzeugt es nicht.'
      }
    ]
  }
]);
