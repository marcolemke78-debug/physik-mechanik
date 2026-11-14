/**
 * Interaktive Grafiken (SVG + Schieberegler) für die Erklärungen.
 * In einer Lektion: <div class="sim" data-sim="pfeil"></div>
 * Der Renderer ruft nach dem Anzeigen Sims.initAll(container) auf.
 * Alle Zahlen gehen über Exercises.fmt (deutsches Komma, keine Rundungsreste).
 */
const Sims = {
  initAll(root) {
    root.querySelectorAll('[data-sim]').forEach(el => {
      const fn = this[el.dataset.sim];
      if (fn && !el.dataset.ready) { el.dataset.ready = '1'; fn.call(this, el); }
    });
  },
  f(x, d) { return Exercises.fmt(x, d === undefined ? 2 : d); },

  // ---------- Bausteine ----------
  slider(id, label, min, max, step, val, unit) {
    return '<label class="sim-row"><span class="sim-label">' + label + ': <strong id="' + id + '-v"></strong> ' + (unit || '') + '</span>'
      + '<input type="range" id="' + id + '" min="' + min + '" max="' + max + '" step="' + step + '" value="' + val + '"></label>';
  },
  toggle(name, options, active) {
    return '<div class="sim-toggle" role="group">' + options.map(o =>
      '<button type="button" class="sim-btn' + (o[0] === active ? ' on' : '') + '" data-' + name + '="' + o[0] + '">' + o[1] + '</button>').join('') + '</div>';
  },
  // Pfeil von (x1,y1) nach (x2,y2)
  arrow(x1, y1, x2, y2, color, w) {
    const len = Math.hypot(x2 - x1, y2 - y1);
    if (len < 2) return '';
    const ux = (x2 - x1) / len, uy = (y2 - y1) / len, hl = Math.min(12, len * 0.6), hw = 6;
    const bx = x2 - ux * hl, by = y2 - uy * hl;
    return '<line x1="' + x1 + '" y1="' + y1 + '" x2="' + bx + '" y2="' + by + '" stroke="' + color + '" stroke-width="' + (w || 4) + '" stroke-linecap="round"/>'
      + '<polygon points="' + x2 + ',' + y2 + ' ' + (bx - uy * hw) + ',' + (by + ux * hw) + ' ' + (bx + uy * hw) + ',' + (by - ux * hw) + '" fill="' + color + '"/>';
  },
  text(x, y, t, opt) {
    opt = opt || {};
    return '<text x="' + x + '" y="' + y + '" font-size="' + (opt.size || 13) + '" fill="' + (opt.color || '#1F2937') + '"'
      + (opt.anchor ? ' text-anchor="' + opt.anchor + '"' : '') + (opt.bold ? ' font-weight="700"' : '') + '>' + t + '</text>';
  },
  bind(el, ids, update) {
    ids.forEach(id => el.querySelector('#' + id).addEventListener('input', update));
    update();
  },
  val(el, id) {
    const v = Number(el.querySelector('#' + id).value);
    el.querySelector('#' + id + '-v').textContent = this.f(v);
    return v;
  },

  // ---------- L2: Kraftpfeil mit Maßstab ----------
  pfeil(el) {
    const id = 'pf' + Math.random().toString(36).slice(2, 6);
    el.innerHTML = '<div class="sim-title">Probier es aus: Kraftpfeil zeichnen</div>'
      + this.slider(id + 'F', 'Kraft F', 1, 12, 0.5, 6, 'N')
      + this.slider(id + 'M', 'Maßstab: 1 cm ≙', 1, 4, 1, 2, 'N')
      + '<svg viewBox="0 0 380 130" class="sim-svg" role="img" aria-label="Kraftpfeil auf Kästchenpapier"></svg><div class="sim-out"></div>';
    const svg = el.querySelector('svg'), out = el.querySelector('.sim-out');
    this.bind(el, [id + 'F', id + 'M'], () => {
      const F = this.val(el, id + 'F'), m = this.val(el, id + 'M');
      const cm = F / m, px = cm * 28, x0 = 24, y = 62;
      let s = '';
      for (let x = x0; x <= 360; x += 28) s += '<line x1="' + x + '" y1="20" x2="' + x + '" y2="104" stroke="#E5E7EB"/>';
      for (let yy = 20; yy <= 104; yy += 14) s += '<line x1="' + x0 + '" y1="' + yy + '" x2="360" y2="' + yy + '" stroke="#F3F4F6"/>';
      const fits = x0 + px <= 360;
      const end = fits ? x0 + px : 360;
      s += this.arrow(x0, y, end, y, fits ? '#2563EB' : '#DC2626', 5);
      s += '<circle cx="' + x0 + '" cy="' + y + '" r="6" fill="#DC2626"/>';
      s += this.text(x0 - 4, 122, 'Angriffspunkt', { size: 12, color: '#DC2626' });
      s += this.text(end, 44, 'Richtung', { size: 12, anchor: 'end', color: '#2563EB' });
      s += this.text(x0 + Math.min(px, 336) / 2, 92, 'Länge ' + this.f(cm) + ' cm = Größe', { size: 12, anchor: 'middle' });
      svg.innerHTML = s;
      out.innerHTML = fits
        ? 'Pfeillänge = Kraft : Maßstab = ' + this.f(F) + ' N : ' + this.f(m) + ' N = <strong>' + this.f(cm) + ' cm</strong>'
        : '⚠ ' + this.f(cm) + ' cm passt nicht aufs Blatt! Nimm einen größeren Maßstab (z. B. 1 cm ≙ ' + this.f(m + 1) + ' N).';
    });
  },

  // ---------- L3: Zwei Kräfte, Resultierende ----------
  tau(el) {
    const id = 'ta' + Math.random().toString(36).slice(2, 6);
    el.innerHTML = '<div class="sim-title">Probier es aus: Wer gewinnt?</div>'
      + this.toggle('dir', [['gegen', 'Entgegengesetzt'], ['gleich', 'Gleiche Richtung']], 'gegen')
      + this.slider(id + 'A', 'Kraft 1', 0, 10, 1, 3, 'N')
      + this.slider(id + 'B', 'Kraft 2', 0, 10, 1, 5, 'N')
      + '<svg viewBox="0 0 380 170" class="sim-svg" role="img" aria-label="Kiste mit zwei Kraftpfeilen und Resultierender"></svg><div class="sim-out"></div>';
    const svg = el.querySelector('svg'), out = el.querySelector('.sim-out');
    let dir = 'gegen';
    const update = () => {
      const A = this.val(el, id + 'A'), B = this.val(el, id + 'B'), k = 14, cx = 190;
      let s = '<rect x="' + (cx - 25) + '" y="40" width="50" height="44" rx="4" fill="#FDE68A" stroke="#92400E"/>';
      s += this.text(cx, 67, 'Kiste', { anchor: 'middle', size: 12 });
      let R, rText;
      if (dir === 'gegen') {
        s += this.arrow(cx - 25, 62, cx - 25 - A * k, 62, '#DC2626', 5) + this.text(cx - 30 - A * k, 56, this.f(A) + ' N', { anchor: 'end', color: '#DC2626' });
        s += this.arrow(cx + 25, 62, cx + 25 + B * k, 62, '#16A34A', 5) + this.text(cx + 30 + B * k, 56, this.f(B) + ' N', { color: '#16A34A' });
        R = B - A;
        rText = R === 0 ? 'Gleich lang und entgegengesetzt → die Kräfte <strong>heben sich auf</strong>. Die ruhende Kiste bleibt in Ruhe (sie bewegt sich nicht).'
          : 'Resultierende = ' + this.f(Math.max(A, B)) + ' N − ' + this.f(Math.min(A, B)) + ' N = <strong>' + this.f(Math.abs(R)) + ' N nach ' + (R > 0 ? 'rechts' : 'links') + '</strong> → die Kiste bewegt sich nach ' + (R > 0 ? 'rechts' : 'links') + '.';
      } else {
        s += this.arrow(cx + 25, 54, cx + 25 + A * k, 54, '#DC2626', 5) + this.text(cx + 30 + A * k, 50, this.f(A) + ' N', { color: '#DC2626' });
        s += this.arrow(cx + 25, 72, cx + 25 + B * k, 72, '#16A34A', 5) + this.text(cx + 30 + B * k, 84, this.f(B) + ' N', { color: '#16A34A' });
        R = A + B;
        rText = 'Gleiche Richtung → die Kräfte <strong>addieren</strong> sich: ' + this.f(A) + ' N + ' + this.f(B) + ' N = <strong>' + this.f(R) + ' N</strong>.';
      }
      s += this.text(14, 128, 'Resultierende:', { size: 12, color: '#C2410C', bold: true });
      if (R !== 0) s += this.arrow(cx, 140, cx + Math.max(-170, Math.min(170, R * k)), 140, '#EA580C', 5);
      else s += this.text(cx, 145, '0 N', { anchor: 'middle', color: '#C2410C', bold: true });
      svg.innerHTML = s;
      out.innerHTML = rText;
    };
    el.querySelectorAll('[data-dir]').forEach(b => b.addEventListener('click', () => {
      dir = b.dataset.dir;
      el.querySelectorAll('[data-dir]').forEach(x => x.classList.toggle('on', x === b));
      update();
    }));
    this.bind(el, [id + 'A', id + 'B'], update);
  },

  // ---------- L4: Federkraftmesser ----------
  feder(el) {
    const id = 'fe' + Math.random().toString(36).slice(2, 6);
    el.innerHTML = '<div class="sim-title">Probier es aus: Federkraftmesser</div>'
      + this.toggle('range', [['10', 'Messbereich 10 N'], ['1', 'Messbereich 1 N']], '10')
      + this.slider(id + 'L', 'Gewichtskraft am Haken', 0, 14, 0.5, 4, 'N')
      + '<svg viewBox="0 0 380 280" class="sim-svg" role="img" aria-label="Federkraftmesser mit Skala"></svg><div class="sim-out"></div>';
    const svg = el.querySelector('svg'), out = el.querySelector('.sim-out'), slider = el.querySelector('#' + id + 'L');
    let max = 10;
    const update = () => {
      const L = this.val(el, id + 'L'), over = L > max, shown = Math.min(L, max);
      const top = 30, full = 170, ext = shown / max * full + (over ? 22 : 0);
      // Aufhängung, daneben ein Lineal mit Newton-Skala, die Feder dehnt sich nach unten
      let s = '<rect x="140" y="10" width="100" height="14" rx="3" fill="#6B7280"/>';
      s += '<rect x="214" y="' + (top + 6) + '" width="40" height="' + (full + 10) + '" fill="#FFFBEB" stroke="#D97706"/>';
      for (let i = 0; i <= 20; i++) {
        const yy = top + 10 + i * full / 20;
        s += '<line x1="214" y1="' + yy + '" x2="' + (i % 10 === 0 ? 236 : i % 2 === 0 ? 228 : 222) + '" y2="' + yy + '" stroke="#374151"/>';
        if (i % 10 === 0) s += this.text(258, yy + 4, this.f(i * max / 20) + ' N', { size: 12 });
      }
      let p = 'M190 24';
      const n = 12, endY = top + 10 + ext;
      for (let i = 1; i <= n; i++) p += ' L' + (i % 2 ? 180 : 200) + ' ' + (24 + (endY - 24) * i / n);
      s += '<path d="' + p + '" fill="none" stroke="' + (over ? '#DC2626' : '#2563EB') + '" stroke-width="2.5"/>';
      s += '<line x1="180" y1="' + endY + '" x2="234" y2="' + endY + '" stroke="#DC2626" stroke-width="2.5"/>';
      s += '<path d="M190 ' + endY + ' l0 8 q8 0 8 6 q0 6 -8 6" fill="none" stroke="#374151" stroke-width="2"/>';
      if (L > 0) s += '<rect x="166" y="' + (endY + 20) + '" width="44" height="26" rx="3" fill="#6B7280"/>' + this.text(188, endY + 38, this.f(L) + ' N', { anchor: 'middle', size: 11, color: 'white' });
      s += this.text(150, endY + 4, 'Anzeige →', { size: 12, color: '#DC2626', anchor: 'end' });
      svg.innerHTML = s;
      out.innerHTML = over
        ? '⚠ <strong>Zu schwer!</strong> Der Kraftmesser misst nur bis ' + this.f(max) + ' N. Die Feder wird überdehnt und <strong>leiert aus</strong>. Nimm einen Kraftmesser mit größerem Messbereich.'
        : 'Die Feder ist um ' + this.f(shown / max * 20) + ' von 20 Teilstrichen gedehnt (1 Strich = ' + this.f(max / 20) + ' N) → Anzeige <strong>' + this.f(L) + ' N</strong>. Je größer die Kraft, desto länger die Feder.';
    };
    el.querySelectorAll('[data-range]').forEach(b => b.addEventListener('click', () => {
      max = Number(b.dataset.range);
      el.querySelectorAll('[data-range]').forEach(x => x.classList.toggle('on', x === b));
      slider.max = max * 1.4; slider.step = max / 20; slider.value = max * 0.4;
      update();
    }));
    this.bind(el, [id + 'L'], update);
  },

  // ---------- L5: Masse und Gewichtskraft ----------
  gewicht(el) {
    const id = 'ge' + Math.random().toString(36).slice(2, 6);
    el.innerHTML = '<div class="sim-title">Probier es aus: Erde und Mond</div>'
      + this.slider(id + 'M', 'Masse', 1, 120, 1, 60, 'kg')
      + '<svg viewBox="0 0 380 150" class="sim-svg" role="img" aria-label="Balken: Gewichtskraft auf Erde und Mond"></svg><div class="sim-out"></div>';
    const svg = el.querySelector('svg'), out = el.querySelector('.sim-out');
    this.bind(el, [id + 'M'], () => {
      const m = this.val(el, id + 'M'), gE = m * 10, gM = m * 10 / 6, k = 230 / 1200;
      let s = this.text(10, 30, '🌍 Erde', { size: 14, bold: true }) + '<rect x="90" y="16" width="' + gE * k + '" height="22" rx="4" fill="#2563EB"/>'
        + this.text(96 + gE * k, 33, this.f(gE, 0) + ' N', { size: 13, bold: true });
      s += this.text(10, 80, '🌙 Mond', { size: 14, bold: true }) + '<rect x="90" y="66" width="' + Math.max(2, gM * k) + '" height="22" rx="4" fill="#9CA3AF"/>'
        + this.text(96 + gM * k, 83, '≈ ' + this.f(gM, 1) + ' N', { size: 13, bold: true });
      s += this.text(10, 130, 'Masse überall gleich: ' + this.f(m, 0) + ' kg', { size: 13, color: '#16A34A', bold: true });
      svg.innerHTML = s;
      out.innerHTML = 'Erde: ' + this.f(m, 0) + ' kg · 10 = <strong>' + this.f(gE, 0) + ' N</strong>. Mond: ein Sechstel davon, ' + this.f(gE, 0) + ' N : 6 ≈ <strong>' + this.f(gM, 1) + ' N</strong>.';
    });
  },

  // ---------- L6: Haft-, Gleit-, Rollreibung ----------
  reibung(el) {
    const id = 'rb' + Math.random().toString(36).slice(2, 6);
    const MODES = { klotz: { haft: 4, weiter: 3, name: 'Holzklotz' }, wagen: { haft: 0.5, weiter: 0.5, name: 'Klotz auf dem Wagen' } };
    el.innerHTML = '<div class="sim-title">Probier es aus: Zieh langsam am Kraftmesser</div>'
      + this.toggle('mode', [['klotz', 'Holzklotz (gleitet)'], ['wagen', 'Auf dem Wagen (rollt)']], 'klotz')
      + this.slider(id + 'F', 'Deine Zugkraft', 0, 6, 0.5, 0, 'N')
      + '<svg viewBox="0 0 380 190" class="sim-svg" role="img" aria-label="Klotz auf dem Tisch mit Zugkraft und Reibungsbalken"></svg><div class="sim-out"></div>';
    const svg = el.querySelector('svg'), out = el.querySelector('.sim-out');
    let mode = 'klotz', moving = false;
    const update = () => {
      const F = this.val(el, id + 'F'), M = MODES[mode];
      if (F >= M.haft) moving = true;
      if (F < M.weiter) moving = false;
      const x = moving ? 150 : 70;
      let s = '<line x1="10" y1="80" x2="370" y2="80" stroke="#92400E" stroke-width="4"/>';
      s += '<g class="' + (moving ? 'sim-slide' : '') + '"><rect x="' + x + '" y="44" width="70" height="36" rx="3" fill="#D97706"/>';
      if (mode === 'wagen') s += '<rect x="' + (x - 6) + '" y="64" width="82" height="10" fill="#6B7280"/><circle cx="' + (x + 8) + '" cy="76" r="5" fill="#111"/><circle cx="' + (x + 62) + '" cy="76" r="5" fill="#111"/>';
      s += '</g>';
      if (F > 0) s += this.arrow(x + 70, 60, x + 70 + F * 18, 60, '#16A34A', 4) + this.text(x + 74 + F * 18, 54, this.f(F) + ' N', { color: '#16A34A' });
      // Vergleichsbalken
      [['Haftreibung', 4, '#DC2626'], ['Gleitreibung', 3, '#F59E0B'], ['Rollreibung', 0.5, '#2563EB']].forEach((b, i) => {
        const yy = 112 + i * 26;
        s += this.text(10, yy + 13, b[0], { size: 12 }) + '<rect x="100" y="' + yy + '" width="' + b[1] * 55 + '" height="16" rx="3" fill="' + b[2] + '"/>'
          + this.text(106 + b[1] * 55, yy + 13, this.f(b[1]) + ' N', { size: 12 });
      });
      svg.innerHTML = s;
      out.innerHTML = !moving
        ? (F === 0 ? 'Zieh den Regler langsam nach rechts.' : 'Der ' + M.name + ' bleibt liegen. Die <strong>Haftreibung</strong> hält mit ' + this.f(F) + ' N dagegen.')
        : (mode === 'klotz'
          ? 'Ab ' + this.f(M.haft) + ' N reißt er los! Beim gleichmäßigen Weiterziehen zeigt der Kraftmesser nur noch <strong>' + this.f(M.weiter) + ' N (Gleitreibung)</strong>. Losreißen ist schwerer als Weiterziehen.'
          : 'Er rollt schon bei ' + this.f(M.haft) + ' N! Die <strong>Rollreibung</strong> ist viel kleiner als die Gleitreibung. Darum haben Wagen Räder.');
    };
    el.querySelectorAll('[data-mode]').forEach(b => b.addEventListener('click', () => {
      mode = b.dataset.mode; moving = false;
      el.querySelectorAll('[data-mode]').forEach(x => x.classList.toggle('on', x === b));
      update();
    }));
    this.bind(el, [id + 'F'], update);
  },

  // ---------- L7: Wovon hängt Reibung ab? ----------
  einfluss(el) {
    const id = 'ei' + Math.random().toString(36).slice(2, 6);
    const MU = { eis: ['Eis', 0.05], holz: ['Holztisch', 0.3], teppich: ['Teppich', 0.5], gummi: ['Gummimatte', 0.8] };
    el.innerHTML = '<div class="sim-title">Probier es aus: Reibungs-Labor <span class="sim-small">(Beispielwerte)</span></div>'
      + this.slider(id + 'W', 'Gewichtsstücke auf dem Klotz', 0, 3, 1, 0, 'Stück (je 2 N Gewichtskraft)')
      + this.toggle('ground', Object.keys(MU).map(k => [k, MU[k][0]]), 'holz')
      + this.toggle('lage', [['flach', 'Klotz flach (große Fläche)'], ['hoch', 'Klotz hochkant, also auf der schmalen Seite (kleine Fläche)']], 'flach')
      + '<svg viewBox="0 0 380 140" class="sim-svg" role="img" aria-label="Klotz auf Untergrund mit Reibungskraft"></svg><div class="sim-out"></div>';
    const svg = el.querySelector('svg'), out = el.querySelector('.sim-out');
    let ground = 'holz', lage = 'flach', lageChanged = false;
    const colors = { eis: '#BAE6FD', holz: '#D97706', teppich: '#A78BFA', gummi: '#374151' };
    const update = () => {
      const w = this.val(el, id + 'W'), G = 2 + w * 2, FR = MU[ground][1] * G;
      const bw = lage === 'flach' ? 90 : 40, bh = lage === 'flach' ? 34 : 70, x = 110;
      let s = '<rect x="0" y="100" width="380" height="14" fill="' + colors[ground] + '"/>';
      s += '<rect x="' + x + '" y="' + (100 - bh) + '" width="' + bw + '" height="' + bh + '" rx="3" fill="#F59E0B" stroke="#92400E"/>';
      for (let i = 0; i < w; i++) s += '<rect x="' + (x + 6 + i * 12) + '" y="' + (100 - bh - 14) + '" width="10" height="14" fill="#4B5563"/>';
      const yA = 100 - bh / 2;
      const k = 12; // gleicher Maßstab für beide Pfeile: 1 N = 12 px
      s += this.arrow(x + bw, yA, x + bw + FR * k, yA, '#16A34A', 4);
      s += this.text(x + bw + 4, yA - 8, 'Zugkraft ' + this.f(FR) + ' N', { size: 12, bold: true, color: '#16A34A' });
      s += this.arrow(x, yA + 10, x - FR * k, yA + 10, '#DC2626', 4);
      s += this.text(x - 4, yA - 8, 'Reibung ' + this.f(FR) + ' N', { size: 12, bold: true, color: '#DC2626', anchor: 'end' });
      s += this.text(10, 134, 'Gewichtskraft ' + this.f(G) + ' N · Untergrund: ' + MU[ground][0], { size: 12 });
      svg.innerHTML = s;
      out.innerHTML = 'Reibungskraft: <strong>' + this.f(FR) + ' N</strong> (sie bremst, darum zeigt ihr Pfeil gegen die Zugrichtung). Zum gleichmäßigen Ziehen brauchst du genauso viel Zugkraft. Mehr Gewichtskraft → mehr Reibung. Griffiger, rauer Untergrund → mehr Reibung.'
        + (lageChanged ? '<br><strong>Fläche gewechselt, Reibung gleich geblieben!</strong> Die Größe der Auflagefläche ändert die Reibung nicht.' : '');
    };
    el.querySelectorAll('[data-ground]').forEach(b => b.addEventListener('click', () => {
      ground = b.dataset.ground; el.querySelectorAll('[data-ground]').forEach(x => x.classList.toggle('on', x === b)); update();
    }));
    el.querySelectorAll('[data-lage]').forEach(b => b.addEventListener('click', () => {
      if (b.dataset.lage !== lage) lageChanged = true;
      lage = b.dataset.lage; el.querySelectorAll('[data-lage]').forEach(x => x.classList.toggle('on', x === b)); update();
    }));
    this.bind(el, [id + 'W'], update);
  },

  // ---------- L8: feste und lose Rolle ----------
  // Beide Pfeile im selben Maßstab (1 N = 6 px): gleiche Länge = gleiche Kraft.
  rolle(el) {
    const id = 'ro' + Math.random().toString(36).slice(2, 6);
    el.innerHTML = '<div class="sim-title">Probier es aus: Feste oder lose Rolle?</div>'
      + this.toggle('typ', [['fest', 'Feste Rolle'], ['lose', 'Lose Rolle']], 'fest')
      + this.slider(id + 'L', 'Lastkraft F<sub>L</sub>', 1, 10, 0.5, 6, 'N')
      + '<svg viewBox="0 0 380 300" class="sim-svg" role="img" aria-label="Rolle mit Last und Zugkraft"></svg><div class="sim-out"></div>';
    const svg = el.querySelector('svg'), out = el.querySelector('.sim-out');
    const k = 6, lbl = (t, v) => 'F<tspan baseline-shift="sub" font-size="9">' + t + '</tspan> = ' + this.f(v) + ' N';
    let typ = 'fest';
    const update = () => {
      const FL = this.val(el, id + 'L'), FZ = typ === 'fest' ? FL : FL / 2;
      let s = '<rect x="40" y="10" width="300" height="12" fill="#6B7280"/>';
      if (typ === 'fest') {
        s += '<line x1="190" y1="22" x2="190" y2="50" stroke="#374151" stroke-width="3"/><circle cx="190" cy="70" r="22" fill="none" stroke="#2563EB" stroke-width="4"/><circle cx="190" cy="70" r="3" fill="#2563EB"/>';
        s += '<line x1="168" y1="70" x2="168" y2="170" stroke="#92400E" stroke-width="2.5"/><line x1="212" y1="70" x2="212" y2="170" stroke="#92400E" stroke-width="2.5"/>';
        s += '<rect x="150" y="170" width="36" height="30" fill="#4B5563"/>' + this.text(168, 190, 'Last', { anchor: 'middle', size: 11, color: 'white' });
        s += this.arrow(168, 204, 168, 204 + FL * k, '#DC2626', 4) + this.text(158, 222, lbl('L', FL), { anchor: 'end', color: '#DC2626' });
        s += '<circle cx="212" cy="174" r="5" fill="#16A34A"/>' + this.arrow(212, 178, 212, 178 + FZ * k, '#16A34A', 4) + this.text(222, 196, lbl('Z', FZ) + ' ↓', { color: '#16A34A' });
      } else {
        s += '<line x1="150" y1="22" x2="150" y2="150" stroke="#92400E" stroke-width="2.5"/><line x1="230" y1="150" x2="230" y2="80" stroke="#92400E" stroke-width="2.5"/>';
        s += '<circle cx="190" cy="150" r="40" fill="none" stroke="#2563EB" stroke-width="4"/><circle cx="190" cy="150" r="3" fill="#2563EB"/>';
        s += '<line x1="190" y1="153" x2="190" y2="196" stroke="#374151" stroke-width="2"/><rect x="172" y="196" width="36" height="26" fill="#4B5563"/>' + this.text(190, 214, 'Last', { anchor: 'middle', size: 11, color: 'white' });
        s += this.arrow(190, 224, 190, 224 + FL * k, '#DC2626', 4) + this.text(180, 244, lbl('L', FL), { anchor: 'end', color: '#DC2626' });
        s += '<circle cx="230" cy="80" r="5" fill="#16A34A"/>' + this.arrow(230, 76, 230, 76 - FZ * k, '#16A34A', 4) + this.text(240, 70, lbl('Z', FZ) + ' ↑', { color: '#16A34A' });
        s += this.text(100, 110, '2 Seilstücke', { size: 12, color: '#92400E', anchor: 'middle' }) + this.text(100, 125, 'tragen die Last', { size: 12, color: '#92400E', anchor: 'middle' });
      }
      svg.innerHTML = s;
      out.innerHTML = (typ === 'fest'
        ? 'Feste Rolle: F<sub>Z</sub> = F<sub>L</sub> = <strong>' + this.f(FZ) + ' N</strong>. Beide Pfeile gleich lang: keine Kraft gespart, aber die <strong>Richtung ändert sich</strong> (du ziehst nach unten, die Last geht nach oben). Last 10 cm hoch → 10 cm Seil ziehen.'
        : 'Lose Rolle: F<sub>Z</sub> = F<sub>L</sub> : 2 = <strong>' + this.f(FZ) + ' N</strong>. Der grüne Pfeil ist nur halb so lang: <strong>halbe Kraft!</strong> Aber: Last 10 cm hoch → <strong>20 cm</strong> Seil ziehen (doppelter Weg).')
        + '<br><span class="klein">Grüner Punkt = hier ziehst du. Gleicher Maßstab für beide Pfeile.</span>';
    };
    el.querySelectorAll('[data-typ]').forEach(b => b.addEventListener('click', () => {
      typ = b.dataset.typ; el.querySelectorAll('[data-typ]').forEach(x => x.classList.toggle('on', x === b)); update();
    }));
    this.bind(el, [id + 'L'], update);
  },

  // ---------- L9: Flaschenzug ----------
  flaschenzug(el) {
    const id = 'fz' + Math.random().toString(36).slice(2, 6);
    el.innerHTML = '<div class="sim-title">Probier es aus: Flaschenzug</div>'
      + this.slider(id + 'N', 'Tragende Seilstücke n', 1, 6, 1, 4, '')
      + this.slider(id + 'L', 'Lastkraft F<sub>L</sub>', 60, 600, 60, 240, 'N')
      + '<svg viewBox="0 0 380 240" class="sim-svg" role="img" aria-label="Flaschenzug mit tragenden Seilstücken"></svg><div class="sim-out"></div>';
    const svg = el.querySelector('svg'), out = el.querySelector('.sim-out');
    this.bind(el, [id + 'N', id + 'L'], () => {
      const n = this.val(el, id + 'N'), FL = this.val(el, id + 'L'), FZ = FL / n;
      let s = '<rect x="40" y="8" width="300" height="12" fill="#6B7280"/>';
      s += '<rect x="120" y="28" width="140" height="24" rx="12" fill="#BFDBFE" stroke="#2563EB"/>' + this.text(190, 45, 'feste Rollen', { anchor: 'middle', size: 11 });
      s += '<rect x="120" y="150" width="140" height="24" rx="12" fill="#DBEAFE" stroke="#2563EB"/>' + this.text(190, 167, 'lose Rollen', { anchor: 'middle', size: 11 });
      const gap = 120 / (n + 1);
      for (let i = 1; i <= n; i++) {
        const x = 130 + gap * i;
        s += '<line x1="' + x + '" y1="52" x2="' + x + '" y2="150" stroke="#92400E" stroke-width="3"/>'
          + '<circle cx="' + x + '" cy="100" r="8" fill="white" stroke="#92400E"/>' + this.text(x, 104, String(i), { anchor: 'middle', size: 11, bold: true, color: '#92400E' });
      }
      s += '<line x1="270" y1="40" x2="300" y2="40" stroke="#16A34A" stroke-width="2.5" stroke-dasharray="5 3"/><line x1="300" y1="40" x2="300" y2="120" stroke="#16A34A" stroke-width="2.5" stroke-dasharray="5 3"/>';
      s += this.arrow(300, 120, 300, 150, '#16A34A', 3) + this.text(306, 140, 'F', { color: '#16A34A', bold: true }) + this.text(316, 144, 'Z', { size: 9, color: '#16A34A' });
      s += this.text(306, 90, 'Zugseil', { size: 11, color: '#16A34A' });
      s += '<line x1="190" y1="174" x2="190" y2="196" stroke="#374151" stroke-width="2"/><rect x="165" y="196" width="50" height="30" fill="#4B5563"/>' + this.text(190, 216, this.f(FL, 0) + ' N', { anchor: 'middle', size: 11, color: 'white' });
      svg.innerHTML = s;
      out.innerHTML = 'F<sub>Z</sub> = F<sub>L</sub> : n = ' + this.f(FL, 0) + ' N : ' + n + ' = <strong>' + this.f(FZ) + ' N</strong><br>'
        + 's<sub>Z</sub> = s<sub>L</sub> · n: Last 1 m hoch → <strong>' + n + ' m</strong> Seil ziehen. Was du an Kraft sparst, musst du an Weg mehr ziehen.';
    });
  },

  // ---------- L1: Wirkungen ausprobieren ----------
  wirkung(el) {
    const SZ = {
      knete: ['Daumen in Knete', 'plastische Verformung: Die Delle bleibt.'],
      schwamm: ['Daumen in Schwamm', 'elastische Verformung: Der Schwamm geht zurück in seine Form.'],
      stoss: ['Kugel anstoßen', 'beschleunigen: Die Kugel wird schneller.'],
      lineal: ['Lineal in den Weg', 'abbremsen: Die Kugel wird langsamer und bleibt stehen.'],
      magnet: ['Magnet daneben', 'Richtung ändern: Die Kugel wird von ihrer Bahn abgelenkt.']
    };
    el.innerHTML = '<div class="sim-title">Probier es aus: Was macht die Kraft?</div>'
      + this.toggle('w', Object.keys(SZ).map(k => [k, SZ[k][0]]), 'knete')
      + '<svg viewBox="0 0 380 130" class="sim-svg" role="img" aria-label="Versuch zur Wirkung einer Kraft"></svg><div class="sim-out"></div>';
    const svg = el.querySelector('svg'), out = el.querySelector('.sim-out');
    const draw = w => {
      let s = '';
      const th = '<ellipse cx="0" cy="0" rx="9" ry="14" fill="#FBCFE8" stroke="#BE185D"/>';
      if (w === 'knete' || w === 'schwamm') {
        const knete = w === 'knete', col = knete ? '#A3E635' : '#FDE047';
        s += this.text(95, 18, 'vorher', { anchor: 'middle', size: 12 }) + this.text(285, 18, 'nachher', { anchor: 'middle', size: 12 });
        s += '<rect x="55" y="60" width="80" height="45" rx="8" fill="' + col + '" stroke="#555"/>';
        s += '<g transform="translate(95,40)">' + th + '</g>' + this.arrow(95, 24, 95, 34, '#16A34A', 3);
        if (knete) s += '<path d="M245 60 h25 q15 22 30 0 h25 v45 h-80 z" fill="' + col + '" stroke="#555"/>';
        else s += '<rect x="245" y="60" width="80" height="45" rx="8" fill="' + col + '" stroke="#555"/>' + this.text(285, 122, 'wieder wie vorher', { anchor: 'middle', size: 11, color: '#555' });
        s += this.arrow(160, 82, 220, 82, '#9CA3AF', 3);
      } else {
        s += '<line x1="10" y1="110" x2="370" y2="110" stroke="#92400E" stroke-width="3"/>';
        if (w === 'stoss') {
          [40, 120, 230, 350].forEach((x, i) => { s += '<circle cx="' + x + '" cy="98" r="11" fill="#6B7280" opacity="' + (0.35 + i * 0.2) + '"/>'; });
          s += this.arrow(20, 70, 70, 70, '#16A34A', 4) + this.text(20, 60, 'Stoß', { size: 12, color: '#16A34A' });
          s += this.text(200, 40, 'Abstände werden größer = schneller', { anchor: 'middle', size: 12 });
        } else if (w === 'lineal') {
          [40, 130, 200, 245].forEach((x, i) => { s += '<circle cx="' + x + '" cy="98" r="11" fill="#6B7280" opacity="' + (0.35 + i * 0.2) + '"/>'; });
          s += '<rect x="258" y="50" width="8" height="60" fill="#D97706"/>' + this.text(262, 44, 'Lineal', { anchor: 'middle', size: 12 });
          s += this.text(140, 40, 'Abstände werden kleiner = langsamer', { anchor: 'middle', size: 12 });
        } else {
          s += '<path d="M30 98 L180 98 Q260 98 330 40" fill="none" stroke="#9CA3AF" stroke-dasharray="5 4" stroke-width="2"/>';
          s += '<circle cx="330" cy="40" r="11" fill="#6B7280"/><circle cx="30" cy="98" r="11" fill="#6B7280" opacity="0.4"/>';
          s += '<rect x="250" y="8" width="40" height="18" fill="#DC2626"/><rect x="290" y="8" width="40" height="18" fill="#2563EB"/>' + this.text(290, 44, 'Magnet', { anchor: 'middle', size: 12 });
          s += this.text(110, 80, 'Bahn biegt ab', { anchor: 'middle', size: 12 });
        }
      }
      svg.innerHTML = s;
      out.innerHTML = '<strong>Wirkung:</strong> ' + SZ[w][1];
    };
    el.querySelectorAll('[data-w]').forEach(b => b.addEventListener('click', () => {
      el.querySelectorAll('[data-w]').forEach(x => x.classList.toggle('on', x === b)); draw(b.dataset.w);
    }));
    draw('knete');
  },

  // ---------- Bild für Übungen: Kraftpfeil an einem Wagen (Kästchen = 1 cm) ----------
  // start: Abstand des Pfeilanfangs vom Wagen in Kästchen (0 = am Wagen), len: Länge in Kästchen, dir: 1 rechts / -1 links
  pfeilBild(start, len, dir) {
    const q = 16, wx = 112, y = 40;
    let s = '<svg viewBox="0 0 260 70" class="sim-svg sim-mini" role="img" aria-label="Wagen mit Kraftpfeil">';
    for (let x = 0; x <= 260; x += q) s += '<line x1="' + x + '" y1="0" x2="' + x + '" y2="70" stroke="#E5E7EB"/>';
    for (let yy = 0; yy <= 70; yy += q) s += '<line x1="0" y1="' + yy + '" x2="260" y2="' + yy + '" stroke="#E5E7EB"/>';
    s += '<rect x="' + (wx - 48) + '" y="' + (y - 16) + '" width="48" height="28" rx="3" fill="#FDE68A" stroke="#92400E"/>';
    s += '<circle cx="' + (wx - 38) + '" cy="' + (y + 14) + '" r="6" fill="#374151"/><circle cx="' + (wx - 10) + '" cy="' + (y + 14) + '" r="6" fill="#374151"/>';
    const x0 = dir > 0 ? wx + start * q : wx - 48 - start * q;
    s += '<circle cx="' + x0 + '" cy="' + y + '" r="3.5" fill="#DC2626"/>' + this.arrow(x0, y, x0 + dir * len * q, y, '#2563EB', 3);
    return s + '</svg>';
  },

  // ---------- L10: Feldlinien Stabmagnet / Spule (statisches Bild) ----------
  // typ 'stab' oder 'spule'. Außen laufen die Feldlinien von N nach S, in der Spule von S nach N.
  feldBild(typ) {
    const cx = 190, cy = 110, xN = 130, xS = 250, col = '#6B7280';
    let s = '<svg viewBox="0 0 380 220" class="sim-svg" role="img" aria-label="Feldlinien ' + (typ === 'stab' ? 'eines Stabmagneten' : 'einer Spule') + '">';
    // Bögen oben und unten: je größer h, desto weiter außen
    [18, 38, 62, 90].forEach(h => {
      [-1, 1].forEach(side => {
        const y0 = cy + side * 6, yc = y0 + side * h * 1.33, d = h * 0.3 + 6;
        s += '<path d="M' + xN + ',' + y0 + ' C' + (xN - d) + ',' + yc + ' ' + (xS + d) + ',' + yc + ' ' + xS + ',' + y0 + '" fill="none" stroke="' + col + '" stroke-width="1.5"/>';
        const ya = y0 + side * h; // Scheitel der Bézierkurve (0,75 · 1,33 · h)
        s += '<polygon points="' + (cx + 6) + ',' + ya + ' ' + (cx - 4) + ',' + (ya - 4) + ' ' + (cx - 4) + ',' + (ya + 4) + '" fill="' + col + '"/>';
      });
    });
    // Feldlinien entlang der Achse: aus dem Nordpol heraus, in den Südpol hinein
    s += '<line x1="' + (xN - 70) + '" y1="' + cy + '" x2="' + xN + '" y2="' + cy + '" stroke="' + col + '" stroke-width="1.5"/>'
      + '<polygon points="' + (xN - 50) + ',' + cy + ' ' + (xN - 40) + ',' + (cy - 4) + ' ' + (xN - 40) + ',' + (cy + 4) + '" fill="' + col + '"/>';
    s += '<line x1="' + xS + '" y1="' + cy + '" x2="' + (xS + 70) + '" y2="' + cy + '" stroke="' + col + '" stroke-width="1.5"/>'
      + '<polygon points="' + (xS + 40) + ',' + cy + ' ' + (xS + 50) + ',' + (cy - 4) + ' ' + (xS + 50) + ',' + (cy + 4) + '" fill="' + col + '"/>';
    if (typ === 'stab') {
      s += '<rect x="' + xN + '" y="' + (cy - 12) + '" width="60" height="24" fill="#FCA5A5" stroke="#374151"/>';
      s += '<rect x="' + cx + '" y="' + (cy - 12) + '" width="60" height="24" fill="#E5E7EB" stroke="#374151"/>';
    } else {
      // Feldlinien im Inneren: gerade, von S nach N (nach links)
      [-6, 0, 6].forEach(dy => {
        s += '<line x1="' + (xN - 6) + '" y1="' + (cy + dy) + '" x2="' + (xS + 6) + '" y2="' + (cy + dy) + '" stroke="' + col + '" stroke-width="1.5"/>';
      });
      s += '<polygon points="' + (cx - 26) + ',' + cy + ' ' + (cx - 16) + ',' + (cy - 4) + ' ' + (cx - 16) + ',' + (cy + 4) + '" fill="' + col + '"/>';
      // Windungen
      for (let i = 0; i < 7; i++) {
        const x = xN + 6 + i * 18;
        s += '<ellipse cx="' + x + '" cy="' + cy + '" rx="7" ry="20" fill="none" stroke="#B45309" stroke-width="3"/>';
      }
      s += '<line x1="' + (xN - 1) + '" y1="' + (cy + 20) + '" x2="' + (xN - 1) + '" y2="200" stroke="#B45309" stroke-width="3"/>';
      s += '<line x1="' + (xN + 115) + '" y1="' + (cy + 20) + '" x2="' + (xN + 115) + '" y2="200" stroke="#B45309" stroke-width="3"/>';
    }
    s += this.text(xN - 16, cy - 8, 'N', { bold: true, size: 15, color: '#DC2626', anchor: 'middle' });
    s += this.text(xS + 16, cy - 8, 'S', { bold: true, size: 15, color: '#1F2937', anchor: 'middle' });
    return s + '</svg>';
  },
  magnetfeld(el) {
    el.innerHTML = '<div class="sim-title">Vergleiche: Stabmagnet und Spule</div>'
      + this.toggle('typ', [['stab', 'Stabmagnet'], ['spule', 'Spule mit Strom']], 'stab')
      + '<div class="sim-bild"></div><div class="sim-out"></div>';
    const bild = el.querySelector('.sim-bild'), out = el.querySelector('.sim-out');
    const show = typ => {
      bild.innerHTML = this.feldBild(typ);
      out.innerHTML = typ === 'stab'
        ? 'Außen laufen die Feldlinien vom <strong>Nordpol</strong> zum <strong>Südpol</strong>. An den Polen liegen sie am dichtesten: Dort ist das Magnetfeld am stärksten.'
        : 'Die Spule hat <strong>dasselbe Feldlinienbild</strong> wie der Stabmagnet: einen Nordpol und einen Südpol. Im Inneren laufen die Feldlinien gerade.';
      el.querySelectorAll('.sim-btn').forEach(b => b.classList.toggle('on', b.dataset.typ === typ));
    };
    el.querySelectorAll('.sim-btn').forEach(b => b.addEventListener('click', () => show(b.dataset.typ)));
    show('stab');
  },

  // ---------- L10: Elektromagnet verstärken (Büroklammern anheben) ----------
  elektromagnet(el) {
    const id = 'em' + Math.random().toString(36).slice(2, 6);
    el.innerHTML = '<div class="sim-title">Probier es aus: Wie viele Büroklammern hält der Elektromagnet?</div>'
      + this.slider(id + 'W', 'Windungen', 50, 400, 50, 100, '')
      + this.slider(id + 'I', 'Stromstärke', 0, 2, 0.5, 1, 'A')
      + this.toggle('kern', [['ohne', 'ohne Eisenkern'], ['mit', 'mit Eisenkern']], 'ohne')
      + '<svg viewBox="0 0 380 230" class="sim-svg" role="img" aria-label="Elektromagnet mit Büroklammern"></svg><div class="sim-out"></div>';
    const svg = el.querySelector('svg'), out = el.querySelector('.sim-out');
    let kern = 'ohne';
    const update = () => {
      const W = this.val(el, id + 'W'), I = this.val(el, id + 'I');
      // vereinfachtes Modell: Stärke wächst mit Windungen und Stromstärke, Eisenkern verdreifacht sie
      const n = Math.min(24, Math.floor(W * I / 100) * (kern === 'mit' ? 3 : 1));
      let s = '';
      if (kern === 'mit') s += '<rect x="100" y="34" width="180" height="20" fill="#9CA3AF" stroke="#374151"/>' + this.text(190, 22, 'Eisenkern', { anchor: 'middle', size: 11, color: '#374151' });
      const loops = W / 25; // 2 bis 16 Schleifen im Bild
      for (let i = 0; i < loops; i++) {
        const x = 110 + i * 160 / (loops - 1);
        s += '<ellipse cx="' + x + '" cy="44" rx="6" ry="18" fill="none" stroke="#B45309" stroke-width="3"/>';
      }
      s += '<line x1="104" y1="44" x2="40" y2="44" stroke="#B45309" stroke-width="2"/><line x1="276" y1="44" x2="340" y2="44" stroke="#B45309" stroke-width="2"/>';
      s += this.text(40, 36, '+', { bold: true, size: 15, color: '#DC2626' }) + this.text(334, 36, '−', { bold: true, size: 15 });
      if (I === 0) s += this.text(190, 140, 'Strom aus: kein Magnetfeld', { anchor: 'middle', size: 14, color: '#6B7280' });
      // Büroklammern in Spalten zu je 6
      for (let k = 0; k < n; k++) {
        const cols = Math.ceil(n / 6), col = Math.floor(k / 6), row = k % 6;
        const x = 184 - (cols - 1) * 20 + col * 40, y = 70 + row * 26;
        s += '<rect x="' + x + '" y="' + y + '" width="12" height="22" rx="5" fill="none" stroke="#2563EB" stroke-width="2"/>'
          + '<rect x="' + (x + 3) + '" y="' + (y + 4) + '" width="6" height="14" rx="3" fill="none" stroke="#2563EB" stroke-width="1.5"/>';
      }
      svg.innerHTML = s;
      out.innerHTML = I === 0
        ? 'Ohne Strom ist die Spule <strong>kein Magnet</strong>. Alle Klammern fallen ab.'
        : n === 0 ? 'Das Magnetfeld ist noch <strong>zu schwach</strong> für eine Büroklammer. Mach den Elektromagneten stärker!'
        : 'Der Elektromagnet hält <strong>' + n + (n === 1 ? ' Büroklammer' : ' Büroklammern') + '</strong>. Mehr Windungen, mehr Strom und ein Eisenkern machen ihn stärker. <span class="klein">(vereinfachtes Modell)</span>';
    };
    el.querySelectorAll('.sim-btn').forEach(b => b.addEventListener('click', () => {
      kern = b.dataset.kern;
      el.querySelectorAll('.sim-btn').forEach(x => x.classList.toggle('on', x === b));
      update();
    }));
    this.bind(el, [id + 'W', id + 'I'], update);
  },

  // ---------- Bild für Übungen: Flaschenzug mit n tragenden Seilstücken ----------
  flaschenBild(n) {
    let s = '<svg viewBox="0 0 220 190" class="sim-svg sim-mini" role="img" aria-label="Skizze eines Flaschenzugs">';
    s += '<rect x="20" y="6" width="180" height="10" fill="#6B7280"/>';
    s += '<rect x="60" y="22" width="100" height="20" rx="10" fill="#BFDBFE" stroke="#2563EB"/>';
    s += '<rect x="60" y="120" width="100" height="20" rx="10" fill="#DBEAFE" stroke="#2563EB"/>';
    const gap = 80 / (n + 1);
    for (let i = 1; i <= n; i++) {
      const x = 70 + gap * i;
      s += '<line class="trag" x1="' + x + '" y1="42" x2="' + x + '" y2="120" stroke="#92400E" stroke-width="2.5"/>';
    }
    s += '<line x1="160" y1="32" x2="190" y2="32" stroke="#16A34A" stroke-width="2.5"/><line x1="190" y1="32" x2="190" y2="110" stroke="#16A34A" stroke-width="2.5"/>';
    s += this.arrow(190, 110, 190, 130, '#16A34A', 3) + this.text(196, 125, 'Zug', { size: 11, color: '#16A34A' });
    s += '<line x1="110" y1="140" x2="110" y2="152" stroke="#374151" stroke-width="2"/><rect x="90" y="152" width="40" height="28" fill="#4B5563"/>';
    return s + '</svg>';
  },

  // ---------- Bild für Übungen: Skala eines Kraftmessers ablesen ----------
  // max = Messbereich, value = Anzeige. Liefert ein SVG als Text.
  skala(max, value) {
    const w = 300, x0 = 20, len = 250;
    let s = '<svg viewBox="0 0 ' + w + ' 70" class="sim-svg sim-skala" role="img" aria-label="Skala eines Kraftmessers">';
    s += '<rect x="' + x0 + '" y="20" width="' + len + '" height="22" fill="#F9FAFB" stroke="#6B7280"/>';
    for (let i = 0; i <= 20; i++) {
      const x = x0 + i * len / 20;
      s += '<line x1="' + x + '" y1="20" x2="' + x + '" y2="' + (i % 2 === 0 ? 34 : 28) + '" stroke="#374151"/>';
      if (i % 4 === 0) s += '<text x="' + x + '" y="58" font-size="11" text-anchor="middle">' + Exercises.fmt(i * max / 20) + '</text>';
    }
    const xv = x0 + value / max * len;
    s += '<polygon points="' + xv + ',16 ' + (xv - 6) + ',4 ' + (xv + 6) + ',4" fill="#DC2626"/><line x1="' + xv + '" y1="16" x2="' + xv + '" y2="42" stroke="#DC2626" stroke-width="2"/>';
    s += '<text x="' + (x0 + len + 6) + '" y="36" font-size="11">N</text></svg>';
    return s;
  }
};
