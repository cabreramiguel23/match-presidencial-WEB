// ==========================================
// RESULTS LOGIC — Match Presidencial Colombia 2026
// ==========================================

let userAnswers = [];
let userEcon = 0;
let userLib = 0;
let selectedCandidateId = null;

const IDEOLOGY_PROFILES = [
  {
    condition: (e, l) => e <= -1.3 && l >= 0.6,
    badge: "IZQUIERDA", badgeClass: "izquierda",
    label: "Progresista Libertario",
    desc: "Defiendes un Estado activo que redistribuya la riqueza y garantice derechos sociales, combinado con amplias libertades civiles. Priorizas la justicia social, los derechos humanos y la igualdad. Te identificas con la izquierda moderna y progresista."
  },
  {
    condition: (e, l) => e <= -1.3 && l < 0.6,
    badge: "IZQUIERDA", badgeClass: "izquierda",
    label: "Socialista Colectivista",
    desc: "Apoyas un Estado fuerte que controle sectores estratégicos y garantice bienestar universal. Tu visión es colectiva y transformadora: la igualdad material, la soberanía nacional y los derechos de los trabajadores son prioridades centrales."
  },
  {
    condition: (e, l) => e >= 1.3 && l >= 0.6,
    badge: "DERECHA", badgeClass: "derecha",
    label: "Liberal Clásico",
    desc: "Crees en el libre mercado, la propiedad privada y las libertades individuales como pilares del progreso. Apoyas economía desregulada con mínima intervención estatal y también defiendes libertades civiles y personales. Tu visión es la del liberalismo económico moderno."
  },
  {
    condition: (e, l) => e >= 1.3 && l < 0.6,
    badge: "DERECHA", badgeClass: "derecha",
    label: "Conservador Tradicional",
    desc: "Apoyas la economía de mercado, la seguridad con autoridad y los valores tradicionales. Para ti, el orden, la familia y la propiedad son fundamentos de la sociedad. Tienes afinidad con partidos de derecha que combinan libre empresa con autoridad institucional."
  },
  {
    condition: (e, l) => Math.abs(e) < 1.3 && l >= 0.6,
    badge: "CENTRO", badgeClass: "centro",
    label: "Centrista Progresista",
    desc: "Equilibras la economía de mercado con regulaciones sociales y defiendes activamente los derechos civiles. Eres pragmático: buscas soluciones basadas en evidencia más que en dogmas ideológicos y apoyas la diversidad, la transparencia y la innovación institucional."
  },
  {
    condition: (e, l) => Math.abs(e) < 1.3 && l < 0.6,
    badge: "CENTRO", badgeClass: "centro",
    label: "Centrista Moderado",
    desc: "Tu visión es pragmática y moderada. Apoyas una economía mixta, instituciones sólidas, seguridad sin extremos y diálogo político. No te identificas con los polos ideológicos y prefieres soluciones concretas que funcionen para todos los colombianos."
  }
];

function getProfile(econAvg, libAvg) {
  return IDEOLOGY_PROFILES.find(p => p.condition(econAvg, libAvg)) || IDEOLOGY_PROFILES[4];
}

function initResults() {
  const raw = sessionStorage.getItem('quizAnswers');
  if (!raw) { window.location.href = 'quiz.html'; return; }

  userAnswers = JSON.parse(raw);
  userEcon = userAnswers.reduce((s, a) => s + (a.econScore || 0), 0) / userAnswers.length;
  userLib  = userAnswers.reduce((s, a) => s + (a.libScore  || 0), 0) / userAnswers.length;

  renderProfile();
  renderMap();
  renderScoreBars();
  renderCandidateDropdown();
}

function renderProfile() {
  const profile = getProfile(userEcon, userLib);
  const badge = document.getElementById('resultBadge');
  badge.textContent = profile.badge;
  badge.className = `result-badge ${profile.badgeClass}`;
  document.getElementById('resultLabel').textContent = profile.label;
  document.getElementById('resultDesc').textContent  = profile.desc;
}

function renderMap() {
  const coords = scoreToMapCoords(userEcon, userLib);

  // Mover punto usuario
  const userDot = document.getElementById('userDot');
  userDot.setAttribute('transform', `translate(${coords.x}, ${coords.y})`);

  // Puntos candidatos
  const dotsGroup = document.getElementById('candidateDots');
  dotsGroup.innerHTML = '';

  CANDIDATES.forEach(c => {
    const pos = scoreToMapCoords(c.econScore, c.libScore);
    const color = c.ideology === 'izquierda' ? '#FF5A5A' : c.ideology === 'derecha' ? '#4A8CFF' : '#FCD116';

    const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
    g.setAttribute('transform', `translate(${pos.x}, ${pos.y})`);
    g.style.cursor = 'pointer';
    g.onclick = () => selectCandidateById(c.id);

    // Círculo
    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute('r', '7');
    circle.setAttribute('fill', color);
    circle.setAttribute('opacity', '0.75');
    circle.setAttribute('stroke', 'rgba(255,255,255,0.25)');
    circle.setAttribute('stroke-width', '1');

    // Número de tarjeta (ballot)
    const numText = document.createElementNS("http://www.w3.org/2000/svg", "text");
    numText.setAttribute('y', '4');
    numText.setAttribute('fill', '#fff');
    numText.setAttribute('font-size', '6');
    numText.setAttribute('font-family', 'IBM Plex Mono');
    numText.setAttribute('text-anchor', 'middle');
    numText.setAttribute('font-weight', '700');
    numText.textContent = c.ballot;

    // Nombre abreviado
    const nameText = document.createElementNS("http://www.w3.org/2000/svg", "text");
    nameText.setAttribute('y', '-10');
    nameText.setAttribute('fill', 'rgba(255,255,255,0.55)');
    nameText.setAttribute('font-size', '7');
    nameText.setAttribute('font-family', 'IBM Plex Sans');
    nameText.setAttribute('text-anchor', 'middle');
    nameText.textContent = c.name.split(' ')[0];

    g.appendChild(circle);
    g.appendChild(numText);
    g.appendChild(nameText);
    dotsGroup.appendChild(g);
  });
}

function renderScoreBars() {
  const container = document.getElementById('scoreBars');
  container.innerHTML = '';

  userAnswers.forEach((ans, i) => {
    if (!ans) return;
    const q = QUESTIONS[i];
    if (!q) return;
    const eScore = ((ans.econScore + 2) / 4) * 100;
    const color = eScore < 35 ? 'var(--left-color)' :
                  eScore > 65 ? 'var(--right-color)' : 'var(--amarillo)';
    const label = eScore < 35 ? 'Izq' : eScore > 65 ? 'Der' : 'Centro';

    const div = document.createElement('div');
    div.className = 'score-bar-item';
    div.innerHTML = `
      <span class="score-bar-label">${q.category}</span>
      <div class="score-bar-track">
        <div class="score-bar-fill" style="width:0%; background:${color}" data-target="${eScore}"></div>
      </div>
      <span class="score-bar-val">${label}</span>
    `;
    container.appendChild(div);
  });

  // Animate after render
  requestAnimationFrame(() => {
    setTimeout(() => {
      document.querySelectorAll('.score-bar-fill[data-target]').forEach(el => {
        el.style.width = el.dataset.target + '%';
      });
    }, 200);
  });
}

function renderCandidateDropdown() {
  const dropdown = document.getElementById('candidateDropdown');
  dropdown.innerHTML = '';

  CANDIDATES.forEach(c => {
    const div = document.createElement('div');
    div.className = 'dropdown-option';
    div.onclick = () => selectCandidateById(c.id);

    const partyClass = c.ideology === 'izquierda' ? 'party-left' :
                       c.ideology === 'derecha'   ? 'party-right' : 'party-center';

    div.innerHTML = `
      <span class="ballot-num">#${c.ballot}</span>
      <span style="flex:1">${c.name}</span>
      <span class="party-tag ${partyClass}">${c.ideology.toUpperCase()}</span>
    `;
    dropdown.appendChild(div);
  });
}

function toggleCandidateDropdown() {
  document.getElementById('candidateSelect').classList.toggle('open');
}

document.addEventListener('click', e => {
  if (!e.target.closest('.custom-select')) {
    document.getElementById('candidateSelect').classList.remove('open');
  }
});

function selectCandidateById(id) {
  selectedCandidateId = id;
  const candidate = CANDIDATES.find(c => c.id === id);
  if (!candidate) return;
  document.getElementById('selectedCandidateName').textContent = `#${candidate.ballot} — ${candidate.name}`;
  document.getElementById('candidateSelect').classList.remove('open');
  renderMatchPanel(candidate);
}

function renderMatchPanel(candidate) {
  const panel = document.getElementById('matchPanel');
  panel.style.display = 'block';

  const matchPct = calculateMatch(userAnswers, candidate);

  const avatarEl = document.getElementById('matchAvatar');
  avatarEl.textContent = candidate.avatar;
  avatarEl.style.background = `linear-gradient(135deg, ${candidate.avatarColor[0]}, ${candidate.avatarColor[1]})`;

  document.getElementById('matchName').textContent = candidate.name;
  document.getElementById('matchVP').textContent = 'VP: ' + candidate.vp;
  document.getElementById('matchParty').textContent = candidate.party;
  document.getElementById('matchSlogan').textContent = candidate.slogan;
  document.getElementById('matchDescription').textContent = candidate.description;

  const pctEl = document.getElementById('matchPctBig');
  pctEl.textContent = matchPct + '%';
  pctEl.style.color = matchPct >= 65 ? 'var(--amarillo)' :
                      matchPct >= 35 ? '#5B8FFF' : 'var(--left-color)';

  // Barras por tema
  const barsContainer = document.getElementById('matchBars');
  barsContainer.innerHTML = '';

  const TOPIC_KEYS = [
    "ECONOMÍA","SEGURIDAD","SALUD","EDUCACIÓN","PAZ Y CONFLICTO",
    "IMPUESTOS","MEDIO AMBIENTE","TIERRAS","DERECHOS",
    "EMPLEO","CORRUPCIÓN","DROGAS","REL. INTERNACIONALES","VIVIENDA","MODELO DE PAÍS"
  ];

  TOPIC_KEYS.forEach((topic, i) => {
    const userPos = userAnswers[i] ? (userAnswers[i].econScore || 0) : 0;
    const candidatePos = candidate.positions[topic] ?? 0;
    const diff = Math.abs(userPos - candidatePos);
    const topicMatch = Math.round((1 - diff / 4) * 100);
    const color = topicMatch >= 70 ? 'var(--amarillo)' :
                  topicMatch >= 40 ? '#5B8FFF' : 'var(--left-color)';

    const row = document.createElement('div');
    row.className = 'match-bar-row';
    row.innerHTML = `
      <span class="match-bar-label">${topic}</span>
      <div class="match-bar-track">
        <div class="match-bar-fill" style="width:0%; background:${color}" data-target="${topicMatch}"></div>
      </div>
      <span class="match-bar-pct">${topicMatch}%</span>
    `;
    barsContainer.appendChild(row);
  });

  // Animar barras
  requestAnimationFrame(() => {
    setTimeout(() => {
      barsContainer.querySelectorAll('[data-target]').forEach(el => {
        el.style.width = el.dataset.target + '%';
      });
    }, 100);
  });

  panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function downloadPlan() {
  if (!selectedCandidateId) return;
  const candidate = CANDIDATES.find(c => c.id === selectedCandidateId);
  if (!candidate) return;
  if (!candidate.planUrl || candidate.planUrl === '#') {
    showToast('⚠️ Plan de gobierno no disponible aún. Visita el sitio oficial del candidato.');
    return;
  }
  window.open(candidate.planUrl, '_blank');
}

function downloadResult() {
  const element = document.getElementById('resultCard');
  if (typeof html2canvas === 'undefined') {
    showToast('⚠️ Necesitas conexión a internet para descargar la imagen.');
    return;
  }
  showToast('📸 Generando imagen...');
  html2canvas(element, {
    backgroundColor: '#101828', scale: 2,
    useCORS: true, allowTaint: true
  }).then(canvas => {
    const link = document.createElement('a');
    link.download = 'mi-match-presidencial-colombia-2026.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
    showToast('✅ ¡Imagen descargada!');
  }).catch(() => showToast('❌ Error al generar imagen. Intenta de nuevo.'));
}

function shareResult() {
  const profile = getProfile(userEcon, userLib);
  const text = `Hice el Match Presidencial Colombia 2026 y soy: ${profile.label} (${profile.badge}) 🇨🇴\n¿Y tú? Haz el test:`;
  if (navigator.share) {
    navigator.share({ title: 'Mi Match Presidencial Colombia 2026', text, url: window.location.origin + '/index.html' });
  } else {
    navigator.clipboard.writeText(text + '\n' + window.location.origin).then(() => {
      showToast('📋 ¡Texto copiado al portapapeles!');
    });
  }
}

function showToast(msg) {
  document.querySelectorAll('.toast-msg').forEach(t => t.remove());
  const toast = document.createElement('div');
  toast.className = 'toast-msg';
  toast.style.cssText = `
    position:fixed; bottom:30px; left:50%; transform:translateX(-50%);
    background:var(--amarillo); color:var(--dark); padding:12px 26px;
    border-radius:8px; font-weight:700; font-size:13px;
    z-index:9999; animation:fadeUp 0.3s ease;
    font-family:'IBM Plex Sans',sans-serif; white-space:nowrap;
    box-shadow:0 4px 20px rgba(0,0,0,0.4);
  `;
  toast.textContent = msg;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 3500);
}

document.addEventListener('DOMContentLoaded', initResults);
