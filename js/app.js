// ── App version (bump this on every release)
const APP_VERSION = '1.6.1';

// ── State
let lang = 'en';
let currentDomain = 0;
let currentTopic = 0;
let quizState = { block: 0, answers: {}, started: false, currentQ: 0 };
let fcState = { deck: [], idx: 0, flipped: false, knew: 0, missed: 0, domainFilter: 'All' };
let progress = loadProgress();

// ── Storage
function loadProgress() {
  try {
    const raw = localStorage.getItem('cis_csm_progress_v2');
    if (raw) return JSON.parse(raw);
  } catch(e) {}
  return { topicsDone: [], quizResults: [], fcKnew: [], fcMissed: [], totalQAnswered: 0, totalQCorrect: 0, domainQuizResults: [] };
}

function saveProgress() {
  try { localStorage.setItem('cis_csm_progress_v2', JSON.stringify(progress)); } catch(e) {}
}

function confirmReset() {
  const l = lang === 'en';

  // Gather stats to show what will be lost
  const totalTopics  = typeof THEORY !== 'undefined' ? THEORY.reduce((s,d) => s + d.topics.length, 0) : 0;
  const topicsDone   = progress.topicsDone.length;
  const quizQ        = progress.totalQAnswered;
  const fcKnown      = progress.fcKnew.length;
  const dqAttempts   = (progress.domainQuizResults || []).length;
  const mockProg     = (function(){ try { const r = localStorage.getItem('cis_csm_mock_progress_v1'); return r ? JSON.parse(r) : {results:[]}; } catch(e){ return {results:[]}; } })();
  const mockAttempts = new Set((mockProg.results||[]).map(r => r.testIdx)).size;

  // Build stats HTML
  const rows = [];
  if (topicsDone > 0)   rows.push(`<div class="rm-stat"><span>${l?'Theory topics read':'Argomenti letti'}</span><strong>${topicsDone}/${totalTopics}</strong></div>`);
  if (quizQ > 0)        rows.push(`<div class="rm-stat"><span>${l?'Quiz questions answered':'Domande risposto ai quiz'}</span><strong>${quizQ}</strong></div>`);
  if (fcKnown > 0)      rows.push(`<div class="rm-stat"><span>${l?'Flashcards marked known':'Flashcard conosciute'}</span><strong>${fcKnown}</strong></div>`);
  if (dqAttempts > 0)   rows.push(`<div class="rm-stat"><span>${l?'Domain quiz attempts':'Tentativi quiz dominio'}</span><strong>${dqAttempts}</strong></div>`);
  if (mockAttempts > 0) rows.push(`<div class="rm-stat"><span>${l?'Mock tests attempted':'Mock test tentati'}</span><strong>${mockAttempts}/6</strong></div>`);

  document.getElementById('rm-title').textContent   = l ? 'Reset all progress?' : 'Azzerare tutti i progressi?';
  document.getElementById('rm-sub').textContent     = l
    ? 'This will permanently delete everything you\'ve done so far:'
    : 'Questo cancellerà definitivamente tutto quello che hai fatto finora:';
  document.getElementById('rm-stats').innerHTML     = rows.length
    ? rows.join('')
    : `<div class="rm-stat rm-stat-empty">${l?'No progress recorded yet.':'Nessun progresso registrato.'}</div>`;
  document.getElementById('rm-warn').textContent    = l ? 'This action cannot be undone.' : 'Questa azione non può essere annullata.';
  document.getElementById('rm-cancel').textContent  = l ? 'Cancel' : 'Annulla';
  document.getElementById('rm-confirm').textContent = l ? '↺ Yes, reset everything' : '↺ Sì, azzera tutto';

  document.getElementById('reset-modal').style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function cancelReset() {
  document.getElementById('reset-modal').style.display = 'none';
  document.body.style.overflow = '';
}

function doReset() {
  progress = { topicsDone: [], quizResults: [], fcKnew: [], fcMissed: [], totalQAnswered: 0, totalQCorrect: 0, domainQuizResults: [] };
  saveProgress();
  try { localStorage.removeItem('cis_csm_mock_progress_v1'); } catch(e) {}
  quizState = { block: 0, answers: {}, started: false, currentQ: 0 };
  cancelReset();
  showView('home');
  updateSidebarProgress();
  showToast(lang === 'en' ? '↺ Progress reset' : '↺ Progressi azzerati', 'info');
}

// ── Language
function setLang(l) {
  lang = l;
  document.getElementById('btn-en').classList.toggle('active', l === 'en');
  document.getElementById('btn-it').classList.toggle('active', l === 'it');
  applyLang();
  const active = document.querySelector('.view.active');
  if (active) {
    const id = active.id.replace('view-', '');
    if (id === 'theory')          renderTheory(currentDomain);
    else if (id === 'quiz')       renderQuizSetup();
    else if (id === 'flashcards') renderFlashcards();
    else if (id === 'progress')   renderProgress();
    else if (id === 'mocktest')   renderMockTests();
  }
}

function t(key) {
  const translations = {
    'Overall Progress':    { it: 'Progressi totali' },
    'topics':              { it: 'argomenti' },
    'Study Domains':       { it: 'Domini di studio' },
    'Select a domain from the sidebar to begin.': { it: 'Seleziona un dominio dalla barra laterale.' },
    'Exam Quiz':           { it: 'Quiz d\'esame' },
    'Blocks of 40 questions · English · Answer and read explanation immediately': { it: 'Blocchi da 40 domande · Inglese · Rispondi e leggi subito la spiegazione' },
    'Flashcards':          { it: 'Flashcard' },
    'Click card to reveal answer · Mark what you know': { it: 'Clicca la card per vedere la risposta · Segna cosa conosci' },
    'My Progress':         { it: 'I miei progressi' },
    'Your personal study stats — saved locally in your browser': { it: 'Le tue statistiche di studio — salvate localmente nel browser' },
    'Dashboard':           { it: 'Bacheca' },
    'CIS-CSM 2026 Study Hub': { it: 'CIS-CSM 2026 — Hub di Studio' },
    'Select a question block:': { it: 'Seleziona un blocco di domande:' },
    'THEORY':              { it: 'TEORIA' },
    'PRACTICE':            { it: 'PRATICA' },
    'PROGRESS':            { it: 'PROGRESSI' },
    'Study Theory':        { it: 'Studia la teoria' },
    '5 domains, full explanations with diagrams. Switch EN/IT.': { it: '5 domini, spiegazioni complete con diagrammi. Cambia EN/IT.' },
    'Take a Quiz':         { it: 'Fai un quiz' },
    '120+ exam-style questions in blocks of 40. Full explanations.': { it: '120+ domande da esame in blocchi da 40. Spiegazioni complete.' },
    'Quick concept review — flip cards, mark what you know.': { it: 'Ripasso rapido — gira le card, segna cosa conosci.' },
    'Track quiz scores, topics completed, and readiness level.': { it: 'Traccia punteggi, argomenti completati e livello di preparazione.' },
    'Mock Tests':           { it: 'Mock Test' },
    'Full-length exam simulations · 340 questions across 6 tests · Immediate feedback': { it: 'Simulazioni esame complete · 340 domande in 6 test · Feedback immediato' },
    'Full Exam Simulations': { it: 'Simulazioni Esame Complete' },
    '6 full mock tests with 340 real-style questions. Instant explanations.': { it: '6 mock test completi con 340 domande reali. Spiegazioni immediate.' },
    '→ Simulate exam':      { it: '→ Simula l\'esame' },
    '→ Start learning':    { it: '→ Inizia a studiare' },
    '→ Test yourself':     { it: '→ Mettiti alla prova' },
    '→ Quick review':      { it: '→ Ripasso rapido' },
    '→ View stats':        { it: '→ Vedi statistiche' },
    '📚 Official Now Learning Path (2026)': { it: '📚 Percorso ufficiale Now Learning (2026)' },
    'Domain Weights':      { it: 'Pesi dei domini' },
    '↺ Reset Progress':    { it: '↺ Azzera progressi' },
    '60 questions':        { it: '60 domande' },
    '90 minutes':          { it: '90 minuti' },
    '~70% to pass':        { it: '~70% per passare' },
    '$315 fee':            { it: 'Costo $315' },
    'Prereq: CSA':         { it: 'Prerequisito: CSA' },
    'ServiceNow Certified Implementation Specialist · Customer Service Management': { it: 'ServiceNow Certified Implementation Specialist · Customer Service Management' },
    'About this app':      { it: 'Informazioni sull\'app' },
    'All':                 { it: 'Tutti' },
    'No flashcards for this filter.': { it: 'Nessuna flashcard per questo filtro.' },
    '% complete':          { it: '% completato' },
    '✓ Correct!':          { it: '✓ Corretto!' },
    '✗ Incorrect.':        { it: '✗ Sbagliato.' },
    'The correct answer is': { it: 'La risposta corretta è' },
    'question':            { it: 'domanda' },
    'questions':           { it: 'domande' },
  };
  if (lang === 'it' && translations[key]) return translations[key].it;
  return key;
}

function applyLang() {
  const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  const setHTML = (id, val) => { const el = document.getElementById(id); if (el) el.innerHTML = val; };
  const l = lang === 'en';

  // Sidebar
  set('sp-label',           t('Overall Progress'));
  set('nav-home-label',     'HOME');
  set('nav-theory-label',   t('THEORY'));
  set('nav-practice-label', t('PRACTICE'));
  set('nav-progress-label', t('PROGRESS'));
  set('nav-home-text',      t('Dashboard'));
  set('nav-theory-text',    t('Study Domains'));
  set('nav-quiz-text',      t('Exam Quiz'));
  set('nav-flash-text',     t('Flashcards'));
  set('nav-mock-text',      t('Mock Tests'));
  set('nav-progress-text',  t('My Progress'));
  set('reset-btn',          t('↺ Reset Progress'));

  // Home dashboard
  set('bc-home',            'HOME');
  set('hero-tag',           l ? 'Exam Overview' : 'Panoramica esame');
  set('home-title',         t('CIS-CSM 2026 Study Hub'));
  set('home-sub',           t('ServiceNow Certified Implementation Specialist · Customer Service Management'));
  set('domain-chart-label', t('Domain Weights'));
  set('badge-q',            t('60 questions'));
  set('badge-t',            t('90 minutes'));
  set('badge-p',            t('~70% to pass'));
  set('badge-c',            t('$315 fee'));
  set('badge-pre',          t('Prereq: CSA'));
  set('hc-t1',              t('Study Theory'));
  set('hc-d1',              t('5 domains, full explanations with diagrams. Switch EN/IT.'));
  set('hc-t2',              t('Take a Quiz'));
  set('hc-d2',              t('120+ exam-style questions in blocks of 40. Full explanations.'));
  set('hc-t3',              t('Flashcards'));
  set('hc-d3',              t('Quick concept review — flip cards, mark what you know.'));
  set('hc-t4',              t('My Progress'));
  set('hc-d4',              t('Track quiz scores, topics completed, and readiness level.'));
  set('hc-t5',              t('Full Exam Simulations'));
  set('hc-d5',              t('6 full mock tests with 340 real-style questions. Instant explanations.'));
  set('hc-a1',              t('→ Start learning'));
  set('hc-a2',              t('→ Test yourself'));
  set('hc-a3',              t('→ Quick review'));
  set('hc-a4',              t('→ View stats'));
  set('hc-a5',              t('→ Simulate exam'));
  // Welcome page
  set('wl-tag',        'ServiceNow Cert · April 2026');
  set('wl-sub',        l ? 'Study App' : 'App di Studio');
  set('wl-tagline',    l ? 'Certified Implementation Specialist · Customer Service Management'
                         : 'Certified Implementation Specialist · Customer Service Management');
  set('wd-title',      l ? 'Hey, quick heads-up!' : 'Ehi, una cosa importante!');
  setHTML('wd-text',   l
    ? `We tried, but ServiceNow still wants you to sit the actual exam. No shortcuts here. 😅<br><br>
       What this app <em>will</em> do is help you walk in prepared: theory, quizzes, flashcards and 6 full mock tests — all with explanations. Think of it as a very dedicated study buddy: always available, never judges you for getting the same question wrong four times, and doesn't eat your snacks.<br><br>
       For the official courses and labs that are part of the certification path, head over to <strong>ServiceNow Now Learning</strong> — the link is right below. Use both. 👇`
    : `Abbiamo provato, ma ServiceNow vuole ancora che tu faccia il vero esame. Nessuna scorciatoia. 😅<br><br>
       Quello che questa app <em>farà</em> è aiutarti ad arrivare preparato: teoria, quiz, flashcard e 6 mock test completi — tutti con spiegazioni. Considerala il tuo compagno di studio ideale: sempre disponibile, non ti giudica se sbagli la stessa domanda quattro volte, e non mangia le tue merendine.<br><br>
       Per i corsi e i lab ufficiali che fanno parte del percorso di certificazione, vai su <strong>ServiceNow Now Learning</strong> — il link è qui sotto. Usali entrambi. 👇`);
  set('wf-t1', l ? 'Theory'            : 'Teoria');
  set('wf-d1', l ? ' · 5 domains, full explanations, diagrams + 15-question domain quiz per domain, bilingual EN/IT' : ' · 5 domini, spiegazioni complete, diagrammi + quiz da 15 domande per dominio, bilingue EN/IT');
  set('wf-t2', l ? 'Exam Quiz'         : 'Quiz d\'esame');
  set('wf-d2', l ? ' · 120 questions in 3 blocks of 40, immediate feedback'        : ' · 120 domande in 3 blocchi da 40, feedback immediato');
  set('wf-t3', l ? 'Flashcards'        : 'Flashcard');
  set('wf-d3', l ? ' · 30 key concepts, flip & mark what you know'                 : ' · 30 concetti chiave, gira e segna cosa conosci');
  set('wf-t4', l ? 'Mock Tests'        : 'Mock Test');
  set('wf-d4', l ? ' · 6 full exams, 340 questions, optional 90-min timer'         : ' · 6 esami completi, 340 domande, timer 90 min opzionale');
  set('wf-t5', l ? 'Progress'          : 'Progressi');
  set('wf-d5', l ? ' · Exam readiness score, all stats saved locally'              : ' · Punteggio di prontezza esame, statistiche salvate localmente');
  set('wl-enter-btn',  l ? '→ Let\'s study' : '→ Iniziamo a studiare');
  set('wl-snow-pre',   l ? 'The official path is on ' : 'Il percorso ufficiale è su ');

  // Module static headers
  set('bc-quiz',            t('PRACTICE'));
  set('bc-flash',           t('PRACTICE'));
  set('bc-mock',            t('PRACTICE'));
  set('bc-prog',            t('PROGRESS'));
  set('quiz-title',         t('Exam Quiz'));
  set('quiz-sub',           t('Blocks of 40 questions · English · Answer and read explanation immediately'));
  set('qs-select-label',    t('Select a question block:'));
  set('fc-title',           t('Flashcards'));
  set('fc-sub',             t('Click card to reveal answer · Mark what you know'));
  set('mock-title',         t('Mock Tests'));
  set('mock-sub',           t('Full-length exam simulations · 340 questions across 6 tests · Immediate feedback'));
  set('prog-title',         t('My Progress'));
  set('prog-sub',           t('Your personal study stats — saved locally in your browser'));

  updateSidebarProgress();
}

// ── Navigation
function showView(name) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  const view = document.getElementById('view-' + name);
  if (view) view.classList.add('active');

  if (name === 'theory')     renderTheory(currentDomain);
  if (name === 'quiz')       renderQuizSetup();
  if (name === 'flashcards') renderFlashcards();
  if (name === 'progress')   renderProgress();
  if (name === 'mocktest')   renderMockTests();
}

function toggleTheoryNav() {
  const sub = document.getElementById('theory-subnav');
  sub.style.display = sub.style.display === 'none' ? 'block' : 'none';
  showView('theory');
}

function showTheory(domainIdx, topicIdx) {
  currentDomain = domainIdx;
  currentTopic = (topicIdx !== undefined) ? topicIdx : 0;
  document.getElementById('theory-subnav').style.display = 'block';
  document.querySelectorAll('.nav-sub-item').forEach((el, i) => el.classList.toggle('active', i === domainIdx));
  showView('theory');
}

// ── Sidebar progress
function updateSidebarProgress() {
  const totalTopics = THEORY.reduce((s, d) => s + d.topics.length, 0);
  const done = progress.topicsDone.length;
  const pct = totalTopics > 0 ? Math.round(done / totalTopics * 100) : 0;

  document.getElementById('overall-bar').style.width = pct + '%';
  document.getElementById('sp-topics').textContent = done + '/' + totalTopics + ' ' + (lang === 'en' ? 'topics' : 'argomenti');
  document.getElementById('sp-pct').textContent = pct + '%';

  THEORY.forEach((domain, di) => {
    const check = document.getElementById('check-' + di);
    if (check) {
      const allDone = domain.topics.every((_, tii) => progress.topicsDone.includes(di + '-' + tii));
      check.textContent = allDone ? '✓' : '';
      document.getElementById('subnav-' + di).classList.toggle('done', allDone);
    }
  });

  const domainsDone = THEORY.filter((d, di) => d.topics.every((_, ti) => progress.topicsDone.includes(di + '-' + ti))).length;
  document.getElementById('theory-done-badge').textContent = domainsDone + '/5';
}

function renderHome() {}

// ── Toast
let toastTimer;
function showToast(msg, type = 'info') {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.className = 'toast show ' + type;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 3000);
}

// ── What's New
function checkVersion() {
  try {
    const seen = localStorage.getItem('cis_csm_seen_version');
    if (seen === APP_VERSION) return; // already seen this version
    const notes = RELEASE_NOTES[APP_VERSION];
    if (!notes) { localStorage.setItem('cis_csm_seen_version', APP_VERSION); return; }
    const l = lang === 'en' ? notes.en : notes.it;

    document.getElementById('wn-tag').textContent   = l.tag;
    document.getElementById('wn-title').textContent = l.title;
    document.getElementById('wn-items').innerHTML   = l.items.map(item =>
      `<div class="wn-item"><span class="wn-item-icon">${item.icon}</span><span>${item.text}</span></div>`
    ).join('');
    document.getElementById('wn-ok').textContent = lang === 'en' ? '✓ Got it!' : '✓ Capito!';

    document.getElementById('wn-modal').style.display = 'flex';
    document.body.style.overflow = 'hidden';
  } catch(e) {}
}

function dismissWhatsNew() {
  try { localStorage.setItem('cis_csm_seen_version', APP_VERSION); } catch(e) {}
  document.getElementById('wn-modal').style.display = 'none';
  document.body.style.overflow = '';
}

// ── Init
function init() {
  fcState.deck = shuffleArray([...FLASHCARDS.keys()]);
  applyLang();
  updateSidebarProgress();
  renderQuizSetup();
  checkVersion();
}

document.addEventListener('DOMContentLoaded', init);
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { cancelReset(); dismissWhatsNew(); }
});
