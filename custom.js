
// ── HEADER SCROLL ──
window.addEventListener('scroll', () => {
    document.getElementById('siteHeader').classList.toggle('scrolled', window.scrollY > 60);
});

// ── DATE CHIP ──
(function () {
    const now = new Date();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const dd = String(now.getDate()).padStart(2, '0');
    const mm = String(now.getMonth() + 1).padStart(2, '0');
    const yyyy = now.getFullYear();
    const label = `${days[now.getDay()]} · ${dd} · ${mm} · ${yyyy}`;
    const dateChip = document.getElementById('dateChip');
    if (dateChip) dateChip.textContent = label;

    const todayDateBadge = document.getElementById('todayDateBadge');
    if (todayDateBadge) todayDateBadge.textContent = `${days[now.getDay()]}, ${dd} ${months[now.getMonth()]} ${yyyy}`;
})();

// ── COUNTDOWN (next slot based on game mode) ──
function updateCountdown() {
    const now = new Date();
    const mins = now.getMinutes(), secs = now.getSeconds();
    
    // Determine interval based on page
    let interval = 30; // default
    const pathname = window.location.pathname;
    if (pathname.includes('goldspin-60.html')) {
        interval = 60;
    } else if (pathname.includes('goldspin-30.html')) {
        interval = 30;
    } else if (pathname.includes('lucky-number.html')) {
        interval = 30; // original lucky-number page
    }
    
    const nextSlot = interval - ((mins % interval) || interval);
    const totalSecs = nextSlot * 60 - secs;
    const m = Math.floor(totalSecs / 60), s = totalSecs % 60;
    const cdM = document.getElementById('cd-m');
    if (cdM) cdM.textContent = String(m).padStart(2, '0');
    const cdS = document.getElementById('cd-s');
    if (cdS) cdS.textContent = String(s).padStart(2, '0');
}
updateCountdown();
setInterval(updateCountdown, 1000);

// ── TODAY'S RESULTS DATA ──
const todayData = [
    { num: '22' }, { num: '93' },
    { num: '-' }, { num: '-' },
    { num: '-' }, { num: '-' },
    { num: '-' }, { num: '-' },
];
(function () {
    const grid = document.getElementById('todayGrid');
    if (!grid) return;
    todayData.forEach((r, i) => {
        const isEmpty = r.num === '-';
        const cell = document.createElement('div');
        cell.className = 'today-cell' + (isEmpty ? ' tc-empty' : '');
        cell.innerHTML = `
      <span class="tc-round">R${i + 1}</span>
      <span class="tc-num${isEmpty ? ' oc-empty' : ''}">${r.num}</span>
    `;
        grid.appendChild(cell);
    });
})();

// ── OLD RESULTS DATA ──
const allOldResults = [
    {
        date: '13/03/2026', label: 'Thursday, 13 March 2026', rows: [
            { n: '07' }, { n: '02' }, { n: '06' }, { n: '00' },
            { n: '04' }, { n: '00' }, { n: '04' }, { n: '08' },
        ]
    },
    {
        date: '12/03/2026', label: 'Wednesday, 12 March 2026', rows: [
            { n: '09' }, { n: '00' }, { n: '08' }, { n: '05' },
            { n: '04' }, { n: '02' }, { n: '00' }, { n: '07' },
        ]
    },
    {
        date: '11/03/2026', label: 'Tuesday, 11 March 2026', rows: [
            { n: '01' }, { n: '06' }, { n: '03' }, { n: '02' },
            { n: '02' }, { n: '07' }, { n: '01' }, { n: '01' },
        ]
    },
    {
        date: '10/03/2026', label: 'Monday, 10 March 2026', rows: [
            { n: '06' }, { n: '07' }, { n: '01' }, { n: '00' },
            { n: '09' }, { n: '02' }, { n: '03' }, { n: '03' },
        ]
    },
    {
        date: '09/03/2026', label: 'Sunday, 09 March 2026', rows: [
            { n: '02' }, { n: '04' }, { n: '01' }, { n: '00' },
            { n: '09' }, { n: '00' }, { n: '06' }, { n: '04' },
        ]
    },
    {
        date: '08/03/2026', label: 'Saturday, 08 March 2026', rows: [
            { n: '09' }, { n: '08' }, { n: '06' }, { n: '08' },
            { n: '-' }, { n: '-' }, { n: '-' }, { n: '-' },
        ]
    },
    {
        date: '07/03/2026', label: 'Friday, 07 March 2026', rows: [
            { n: '06' }, { n: '05' }, { n: '04' }, { n: '09' },
            { n: '08' }, { n: '07' }, { n: '02' }, { n: '01' },
        ]
    },
    {
        date: '06/03/2026', label: 'Thursday, 06 March 2026', rows: [
            { n: '09' }, { n: '08' }, { n: '07' }, { n: '06' },
            { n: '05' }, { n: '04' }, { n: '03' }, { n: '02' },
        ]
    },
    {
        date: '05/03/2026', label: 'Wednesday, 05 March 2026', rows: [
            { n: '04' }, { n: '03' }, { n: '02' }, { n: '01' },
            { n: '00' }, { n: '09' }, { n: '08' }, { n: '07' },
        ]
    },
    {
        date: '04/03/2026', label: 'Tuesday, 04 March 2026', rows: [
            { n: '05' }, { n: '04' }, { n: '03' }, { n: '02' },
            { n: '01' }, { n: '00' }, { n: '09' }, { n: '08' },
        ]
    },
    // Extra days for load more
    {
        date: '03/03/2026', label: 'Monday, 03 March 2026', rows: [
            { n: '03' }, { n: '06' }, { n: '09' }, { n: '02' },
            { n: '05' }, { n: '08' }, { n: '01' }, { n: '04' },
        ]
    },
    {
        date: '02/03/2026', label: 'Sunday, 02 March 2026', rows: [
            { n: '00' }, { n: '00' }, { n: '00' }, { n: '00' },
            { n: '-' }, { n: '-' }, { n: '-' }, { n: '-' },
        ]
    },
    {
        date: '01/03/2026', label: 'Saturday, 01 March 2026', rows: [
            { n: '08' }, { n: '01' }, { n: '04' }, { n: '07' },
            { n: '00' }, { n: '04' }, { n: '07' }, { n: '00' },
        ]
    },
    {
        date: '28/02/2026', label: 'Saturday, 28 February 2026', rows: [
            { n: '01' }, { n: '02' }, { n: '03' }, { n: '04' },
            { n: '05' }, { n: '06' }, { n: '07' }, { n: '08' },
        ]
    },
    {
        date: '27/02/2026', label: 'Friday, 27 February 2026', rows: [
            { n: '01' }, { n: '02' }, { n: '03' }, { n: '04' },
            { n: '05' }, { n: '06' }, { n: '07' }, { n: '08' },
        ]
    },
];

let shownCount = 0;
const BATCH = 10;

function renderOldDayBlock(dayData) {
    const block = document.createElement('div');
    block.className = 'old-day-block';
    let cells = '';
    dayData.rows.forEach((r, i) => {
        const isEmpty = r.n === '-';
        cells += `<div class="old-cell">
      <span class="oc-label">R${i + 1}</span>
      <span class="oc-num${isEmpty ? ' oc-empty' : ''}">${r.n}</span>
    </div>`;
    });
    block.innerHTML = `
    <div class="old-day-header">${dayData.label}</div>
    <div class="old-day-grid">${cells}</div>
  `;
    return block;
}

function loadMoreResults() {
    const container = document.getElementById('oldResultsContainer');
    if (!container) return;
    const end = Math.min(shownCount + BATCH, allOldResults.length);
    for (let i = shownCount; i < end; i++) {
        container.appendChild(renderOldDayBlock(allOldResults[i]));
    }
    shownCount = end;
    const btn = document.getElementById('loadMoreBtn');
    if (btn && shownCount >= allOldResults.length) {
        btn.disabled = true; btn.textContent = 'No More Results';
    }
}
if (document.getElementById('oldResultsContainer')) loadMoreResults(); // initial load

// ── WHEELS ──
const SEGMENTS = 10, NUMBERS = Array.from({ length: 10 }, (_, i) => i);
const CX = 110, CY = 110, R = 104, INNER = 24;

function buildWheel(gId) {
    const g = document.getElementById(gId);
    const step = (2 * Math.PI) / SEGMENTS;
    const col = [['#cc3300', '#dd4400'], ['#bb2a00', '#cc3800']];
    for (let i = 0; i < SEGMENTS; i++) {
        const sa = i * step - Math.PI / 2, ea = (i + 1) * step - Math.PI / 2;
        const x1 = CX + R * Math.cos(sa), y1 = CY + R * Math.sin(sa);
        const x2 = CX + R * Math.cos(ea), y2 = CY + R * Math.sin(ea);
        const xi1 = CX + INNER * Math.cos(sa), yi1 = CY + INNER * Math.sin(sa);
        const xi2 = CX + INNER * Math.cos(ea), yi2 = CY + INNER * Math.sin(ea);
        const d = `M${xi1} ${yi1} L${x1} ${y1} A${R} ${R} 0 0 1 ${x2} ${y2} L${xi2} ${yi2} A${INNER} ${INNER} 0 0 0 ${xi1} ${yi1}Z`;
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', d); path.setAttribute('fill', col[i % 2][0]);
        path.setAttribute('stroke', '#e95309'); path.setAttribute('stroke-width', '1');
        g.appendChild(path);
        const midA = (sa + ea) / 2, arcR = R - 5;
        const ax1 = CX + arcR * Math.cos(sa + 0.06), ay1 = CY + arcR * Math.sin(sa + 0.06);
        const ax2 = CX + arcR * Math.cos(ea - 0.06), ay2 = CY + arcR * Math.sin(ea - 0.06);
        const arc = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        arc.setAttribute('d', `M${ax1} ${ay1} A${arcR} ${arcR} 0 0 1 ${ax2} ${ay2}`);
        arc.setAttribute('fill', 'none');
        arc.setAttribute('stroke', i % 2 === 0 ? 'rgba(255,200,80,.5)' : 'rgba(255,200,80,.25)');
        arc.setAttribute('stroke-width', '1.5'); arc.setAttribute('stroke-linecap', 'round');
        g.appendChild(arc);
        const labelR = (R + INNER) / 2;
        const tx = CX + labelR * Math.cos(midA), ty = CY + labelR * Math.sin(midA);
        const txt = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        txt.setAttribute('x', tx); txt.setAttribute('y', ty);
        txt.setAttribute('text-anchor', 'middle'); txt.setAttribute('dominant-baseline', 'central');
        txt.setAttribute('font-family', 'Cinzel Decorative,serif');
        txt.setAttribute('font-size', '17'); txt.setAttribute('font-weight', '900');
        txt.setAttribute('fill', i % 2 === 0 ? '#ffffff' : '#ffe0b0');
        txt.setAttribute('transform', `rotate(${(midA * 180) / Math.PI + 90},${tx},${ty})`);
        txt.textContent = NUMBERS[i];
        g.appendChild(txt);
    }
    const rim = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    rim.setAttribute('cx', CX); rim.setAttribute('cy', CY); rim.setAttribute('r', R);
    rim.setAttribute('fill', 'none'); rim.setAttribute('stroke', 'rgba(255,200,80,.3)');
    rim.setAttribute('stroke-width', '1.5');
    g.appendChild(rim);
    for (let i = 0; i < SEGMENTS; i++) {
        const sa = i * step - Math.PI / 2, ea = (i + 1) * step - Math.PI / 2, midA = (sa + ea) / 2;
        const t1 = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        t1.setAttribute('x1', CX + (R - 1) * Math.cos(midA)); t1.setAttribute('y1', CY + (R - 1) * Math.sin(midA));
        t1.setAttribute('x2', CX + (R - 9) * Math.cos(midA)); t1.setAttribute('y2', CY + (R - 9) * Math.sin(midA));
        t1.setAttribute('stroke', 'rgba(255,200,80,.65)'); t1.setAttribute('stroke-width', '1.5');
        t1.setAttribute('stroke-linecap', 'round');
        g.appendChild(t1);
    }
}
buildWheel('w1-group');
buildWheel('w2-group');

let isSpinning = false, rot1 = 0, rot2 = 0;
function easeOut(t) { return 1 - Math.pow(1 - t, 3); }

function spinWheels() {
    if (isSpinning) return;
    isSpinning = true;
    const btn = document.getElementById('spinBtn');
    const card = document.getElementById('resultCard');
    const dv1 = document.getElementById('dval1'), dv2 = document.getElementById('dval2');
    const db1 = document.getElementById('dbox1'), db2 = document.getElementById('dbox2');
    const sub = document.getElementById('rsub');
    btn.disabled = true;
    card.classList.remove('lit'); db1.classList.remove('lit'); db2.classList.remove('lit');
    dv1.textContent = '·'; dv2.textContent = '·';
    dv1.classList.add('dim'); dv2.classList.add('dim');
    sub.textContent = 'Spinning…';
    document.getElementById('ring1').classList.add('hot');
    document.getElementById('ring2').classList.add('hot');
    const t1 = Math.floor(Math.random() * SEGMENTS), t2 = Math.floor(Math.random() * SEGMENTS);
    const as = 360 / SEGMENTS, half = as / 2;
    const la1 = ((SEGMENTS - t1) * as - half + 360) % 360;
    const la2 = ((SEGMENTS - t2) * as - half + 360) % 360;
    const cn1 = ((rot1 % 360) + 360) % 360, cn2 = ((rot2 % 360) + 360) % 360;
    const d1 = (la1 - cn1 + 360) % 360 || 360, d2 = (la2 - cn2 + 360) % 360 || 360;
    const s1 = (6 + Math.floor(Math.random() * 4)) * 360, s2 = (6 + Math.floor(Math.random() * 4)) * 360;
    const total1 = s1 + d1, total2 = s2 + d2;
    const dur = 3600 + Math.random() * 800, startT = performance.now();
    const sr1 = rot1, sr2 = rot2;
    function animate(now) {
        const el = now - startT, t = Math.min(el / dur, 1), e = easeOut(t);
        rot1 = sr1 + total1 * e; rot2 = sr2 + total2 * e;
        document.getElementById('w1-group').setAttribute('transform', `rotate(${rot1} 110 110)`);
        document.getElementById('w2-group').setAttribute('transform', `rotate(${rot2} 110 110)`);
        if (t < 1) { requestAnimationFrame(animate); }
        else {
            rot1 = sr1 + total1; rot2 = sr2 + total2;
            document.getElementById('w1-group').setAttribute('transform', `rotate(${rot1} 110 110)`);
            document.getElementById('w2-group').setAttribute('transform', `rotate(${rot2} 110 110)`);
            document.getElementById('ring1').classList.remove('hot');
            document.getElementById('ring2').classList.remove('hot');
            setTimeout(() => { dv1.textContent = t1; dv1.classList.remove('dim'); db1.classList.add('lit'); }, 100);
            setTimeout(() => {
                dv2.textContent = t2; dv2.classList.remove('dim'); db2.classList.add('lit');
                card.classList.add('lit'); sub.textContent = 'Your fortune is revealed!';
                const luckyInput = document.getElementById('luckyInput');
                if (luckyInput) luckyInput.value = String(t1) + String(t2);
                document.getElementById('wheel1').classList.add('celebrating');
                document.getElementById('wheel2').classList.add('celebrating');
                setTimeout(() => {
                    document.getElementById('wheel1').classList.remove('celebrating');
                    document.getElementById('wheel2').classList.remove('celebrating');
                }, 1600);
                spawnParticles();
            }, 360);
            isSpinning = false; btn.disabled = false;
        }
    }
    requestAnimationFrame(animate);
}

function spawnParticles() {
    const colors = ['#fff', '#ffe090', '#ffb830', '#7a1500', '#ff6a00', '#ffd060'];
    const cont = document.getElementById('particles');
    cont.innerHTML = '';
    const cx = window.innerWidth / 2, cy = window.innerHeight * 0.55;
    for (let i = 0; i < 65; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        const color = colors[Math.floor(Math.random() * colors.length)];
        const size = 4 + Math.random() * 9;
        const angle = Math.random() * Math.PI * 2;
        const dist = 90 + Math.random() * 230;
        const tx1 = Math.cos(angle) * dist * .18, ty1 = Math.sin(angle) * dist * .18;
        const tx2 = Math.cos(angle) * dist, ty2 = Math.sin(angle) * dist - 50;
        const rot = (Math.random() - .5) * 720;
        const delay = Math.random() * 280, dur2 = 850 + Math.random() * 900;
        p.style.cssText = `left:${cx}px;top:${cy}px;width:${size}px;height:${size * (Math.random() > .6 ? 1 : 2.5)}px;background:${color};border-radius:${Math.random() > .4 ? '50%' : '2px'};box-shadow:0 0 ${size}px ${color};--tx0:${tx1}px;--ty0:${ty1}px;--tx1:${tx2}px;--ty1:${ty2}px;--tr:${rot}deg;animation:burst ${dur2}ms cubic-bezier(.22,.61,.36,1) ${delay}ms forwards;`;
        cont.appendChild(p);
    }
}