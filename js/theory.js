// ── Domain Quiz State
let domainQuizState = { active: false, domainIdx: 0, answers: {}, currentQ: 0 };

function renderTheory(domainIdx) {
  if (domainIdx !== undefined) currentDomain = domainIdx;
  const domain = THEORY[currentDomain];
  const topic  = domain.topics[currentTopic] || domain.topics[0];

  // ── Build ToC
  let tocHtml = '';
  THEORY.forEach((d, di) => {
    tocHtml += `<div class="toc-domain-label" style="color:${d.color}">${d.pct} D${di+1}</div>`;
    d.topics.forEach((t, ti) => {
      const done = progress.topicsDone.includes(di+'-'+ti);
      const act  = di === currentDomain && ti === currentTopic && !domainQuizState.active;
      const lbl  = t.title[lang].length > 22 ? t.title[lang].substring(0,20)+'…' : t.title[lang];
      tocHtml += `<div class="toc-item ${act?'active':''} ${done?'done':''}" onclick="navToTopic(${di},${ti})">${lbl}<span class="toc-check">${done?'✓':''}</span></div>`;
    });
    // Domain quiz entry in ToC
    const dqResults = (progress.domainQuizResults || []).filter(r => r.domainIdx === di);
    const dqBest = dqResults.length ? Math.max(...dqResults.map(r => r.pct)) : null;
    const dqAct  = di === currentDomain && domainQuizState.active;
    tocHtml += `<div class="toc-item toc-quiz-item ${dqAct?'active':''}" onclick="startDomainQuiz(${di})">📝 ${lang==='en'?'Domain Quiz':'Quiz dominio'}${dqBest!==null?' <span class=\"toc-check\" style=\"color:var(--teal)\">'+dqBest+'%</span>':'<span class=\"toc-check\"></span>'}</div>`;
    if (di < THEORY.length-1) tocHtml += '<div class="toc-divider"></div>';
  });
  const tocEl = document.getElementById('theory-toc');
  if (tocEl) tocEl.innerHTML = tocHtml;

  // ── If domain quiz is active for this domain, render quiz view
  if (domainQuizState.active && domainQuizState.domainIdx === currentDomain) {
    renderDomainQuizContent();
    return;
  }

  // ── Regular topic pills (including quiz pill)
  const dqResults = (progress.domainQuizResults || []).filter(r => r.domainIdx === currentDomain);
  const dqBest = dqResults.length ? Math.max(...dqResults.map(r => r.pct)) : null;
  const pillsHtml = [
    ...domain.topics.map((t, ti) => {
      const done = progress.topicsDone.includes(currentDomain+'-'+ti);
      return `<button class="topic-pill ${ti===currentTopic?'active':''} ${done?'done':''}" onclick="navToTopic(${currentDomain},${ti})">${t.title[lang]}</button>`;
    }),
    `<button class="topic-pill quiz-pill" onclick="startDomainQuiz(${currentDomain})">📝 ${lang==='en'?'Domain Quiz':'Quiz dominio'}${dqBest!==null?' · '+dqBest+'%':''}</button>`
  ].join('');

  const doneCount = domain.topics.filter((_,ti) => progress.topicsDone.includes(currentDomain+'-'+ti)).length;
  const domPct    = Math.round(doneCount/domain.topics.length*100);
  const isDone    = progress.topicsDone.includes(currentDomain+'-'+currentTopic);

  const flat = []; THEORY.forEach((d,di) => d.topics.forEach((_,ti) => flat.push({di,ti})));
  const ci   = flat.findIndex(x => x.di===currentDomain && x.ti===currentTopic);
  const prev = ci > 0 ? flat[ci-1] : null;
  const next = ci < flat.length-1 ? flat[ci+1] : null;

  // ── Mini-quiz (knowledge check inside topic)
  let mqHtml = '';
  if (topic.quiz && topic.quiz.length > 0) {
    const qWord = lang==='en' ? (topic.quiz.length>1?'questions':'question') : (topic.quiz.length>1?'domande':'domanda');
    mqHtml = `<div class="mini-quiz"><div class="mq-header"><span class="mq-label">🧪 ${lang==='en'?'Knowledge Check':'Verifica comprensione'}</span><span class="mq-sub" style="margin-left:8px;font-size:12px;color:var(--text2)">${topic.quiz.length} ${qWord}</span></div>`;
    topic.quiz.forEach((q, qi) => {
      const sk = 'mq_'+currentDomain+'_'+currentTopic+'_'+qi;
      _mqExpStore[sk] = q.exp;
      mqHtml += `<div class="mq-q" id="${sk}"><div class="mq-qtext">${qi+1}. ${q.q}</div><div class="mq-opts">${
        q.opts.map((o,oi) => `<button class="mq-opt" onclick="doMQ('${sk}',${oi},${q.ans})"><span class="mq-letter">${String.fromCharCode(65+oi)}</span>${o}</button>`).join('')
      }</div><div class="mq-exp" id="${sk}-exp"></div></div>`;
    });
    mqHtml += '</div>';
  }

  const mainEl = document.getElementById('theory-main');
  if (!mainEl) return;
  mainEl.innerHTML = `
    <div class="topic-pills">${pillsHtml}</div>
    <div class="domain-hero" style="--dhc:${domain.color}">
      <div class="dh-pct" style="color:${domain.color}">${domain.pct}</div>
      <div class="dh-title">${domain.title[lang]}</div>
      <div class="dh-sub">${domain.subtitle[lang]}</div>
      <div class="domain-progress-row">
        <div class="domain-progress-bar-bg"><div class="domain-progress-bar-fill" style="width:${domPct}%;background:${domain.color}"></div></div>
        <div class="domain-progress-label">${doneCount}/${domain.topics.length} ${lang==='en'?'topics':'argomenti'}</div>
      </div>
    </div>
    <div class="topic-content">
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:14px">
        <h3 style="font-size:17px;font-weight:600;color:var(--text)">${topic.title[lang]}</h3>
        <span class="tag ${topic.tag}">${topic.tag.toUpperCase()}</span>
        ${isDone ? '<span style="color:var(--green);font-size:13px">✓</span>' : ''}
      </div>
      ${topic.body[lang]}
      ${mqHtml}
      <div class="topic-footer">
        <button class="mark-done-btn ${isDone?'done':''}" id="done-btn-${currentDomain}-${currentTopic}" onclick="markTopicDone(${currentDomain},${currentTopic})">
          ${isDone?(lang==='en'?'✓ Completed':'✓ Completato'):(lang==='en'?'Mark as read ✓':'Segna come letto ✓')}
        </button>
        <div class="topic-prev-next">
          ${prev ? `<button class="btn-secondary" onclick="navToTopic(${prev.di},${prev.ti})">← ${lang==='en'?'Prev':'Prec.'}</button>` : ''}
          ${next ? `<button class="btn-primary" onclick="navToTopic(${next.di},${next.ti})">${lang==='en'?'Next':'Succ.'} →</button>` : ''}
        </div>
      </div>
    </div>`;
}

// ── Domain Quiz: Start
function startDomainQuiz(di) {
  currentDomain = di;
  domainQuizState = { active: true, domainIdx: di, answers: {}, currentQ: 0 };
  document.querySelectorAll('.nav-sub-item').forEach((el,i) => el.classList.toggle('active', i===di));
  const mainEl = document.getElementById('theory-main');
  if (mainEl) mainEl.scrollTop = 0;
  renderTheory();
}

// ── Domain Quiz: Render quiz content into theory-main
function renderDomainQuizContent() {
  const mainEl = document.getElementById('theory-main');
  if (!mainEl) return;

  const di       = domainQuizState.domainIdx;
  const domain   = THEORY[di];
  const qs       = DOMAIN_QUIZZES[di];
  const total    = qs.length;
  const answered = Object.keys(domainQuizState.answers).length;
  const qi       = domainQuizState.currentQ;
  const q        = qs[qi];

  const dqResults = (progress.domainQuizResults || []).filter(r => r.domainIdx === di);
  const dqBest    = dqResults.length ? Math.max(...dqResults.map(r => r.pct)) : null;

  const l = lang === 'en';

  // Pills row (topics + quiz pill active)
  const dqResultsAll = (progress.domainQuizResults || []).filter(r => r.domainIdx === currentDomain);
  const dqBestAll = dqResultsAll.length ? Math.max(...dqResultsAll.map(r => r.pct)) : null;
  const pillsHtml = [
    ...domain.topics.map((t, ti) => {
      const done = progress.topicsDone.includes(di+'-'+ti);
      return `<button class="topic-pill ${done?'done':''}" onclick="navToTopic(${di},${ti})">${t.title[lang]}</button>`;
    }),
    `<button class="topic-pill quiz-pill active" onclick="startDomainQuiz(${di})">📝 ${l?'Domain Quiz':'Quiz dominio'}${dqBestAll!==null?' · '+dqBestAll+'%':''}</button>`
  ].join('');

  // Progress bar across questions
  const progPct = Math.round(answered / total * 100);

  // Navigation dots
  let dotsHtml = '<div class="dq-dots">';
  for (let i = 0; i < total; i++) {
    const a = domainQuizState.answers[i];
    let cls = 'dq-dot';
    if (i === qi) cls += ' current';
    else if (a !== undefined) cls += a.correct ? ' correct' : ' wrong';
    dotsHtml += `<button class="${cls}" onclick="jumpDomainQ(${i})" title="${l?'Question':'Domanda'} ${i+1}">${i+1}</button>`;
  }
  dotsHtml += '</div>';

  // Current question
  const ans = domainQuizState.answers[qi];
  const isAnswered = ans !== undefined;

  let optsHtml = q.opts.map((o, oi) => {
    let cls = 'dq-opt';
    if (isAnswered) {
      if (oi === q.ans) cls += ' correct';
      else if (oi === ans.chosen && ans.chosen !== q.ans) cls += ' wrong';
      else cls += ' disabled';
    }
    const letter = String.fromCharCode(65 + oi);
    return `<button class="${cls}" ${isAnswered?'disabled':''} onclick="answerDomainQ(${oi})">
      <span class="dq-letter">${letter}</span>${o}
    </button>`;
  }).join('');

  let expHtml = '';
  if (isAnswered) {
    const icon = ans.correct
      ? `<strong style="color:var(--green)">✓ ${l?'Correct!':'Corretto!'}</strong>`
      : `<strong style="color:var(--red)">✗ ${l?'Incorrect.':'Sbagliato.'}</strong>`;
    expHtml = `<div class="dq-exp show">${icon} <strong>${l?'Why:':'Perché:'}</strong> ${q.exp}</div>`;
  }

  // Footer: Prev / Next / Finish
  const hasPrev = qi > 0;
  const hasNext = qi < total - 1;
  const allAnswered = answered === total;

  let footerHtml = `<div class="dq-footer">
    <button class="btn-secondary" ${hasPrev?'':'disabled'} onclick="jumpDomainQ(${qi-1})">← ${l?'Prev':'Prec.'}</button>
    <span style="font-size:12px;color:var(--text3);font-family:var(--font-mono)">${qi+1}/${total}</span>
    ${hasNext
      ? `<button class="btn-primary" onclick="jumpDomainQ(${qi+1})">${l?'Next':'Succ.'} →</button>`
      : allAnswered
        ? `<button class="btn-primary dq-finish-btn" onclick="finishDomainQuiz()">🏁 ${l?'See results':'Vedi risultati'}</button>`
        : `<button class="btn-primary" disabled>${l?'Answer all questions':'Rispondi a tutte'}</button>`
    }
  </div>`;

  // Best score chip
  const bestChip = dqBest !== null
    ? `<span class="dq-best-chip">${l?'Best':'Migliore'}: <strong>${dqBest}%</strong></span>`
    : '';

  mainEl.innerHTML = `
    <div class="topic-pills">${pillsHtml}</div>
    <div class="domain-hero" style="--dhc:${domain.color}">
      <div class="dh-pct" style="color:${domain.color}">${domain.pct}</div>
      <div class="dh-title">${domain.title[lang]}</div>
      <div class="dh-sub">📝 ${l?'Domain Quiz':'Quiz dominio'} · ${total} ${l?'questions':'domande'}</div>
      <div class="domain-progress-row">
        <div class="domain-progress-bar-bg"><div class="domain-progress-bar-fill" style="width:${progPct}%;background:${domain.color}"></div></div>
        <div class="domain-progress-label">${answered}/${total} ${l?'answered':'risposto'} ${bestChip}</div>
      </div>
    </div>
    <div class="topic-content">
      ${dotsHtml}
      <div class="dq-qblock">
        <div class="dq-qnum">${l?'Question':'Domanda'} ${qi+1} / ${total}</div>
        <div class="dq-qtext">${q.q}</div>
        <div class="dq-opts">${optsHtml}</div>
        ${expHtml}
      </div>
      ${footerHtml}
    </div>`;
}

// ── Domain Quiz: Answer a question
function answerDomainQ(chosen) {
  const qi = domainQuizState.currentQ;
  const q  = DOMAIN_QUIZZES[domainQuizState.domainIdx][qi];
  if (domainQuizState.answers[qi] !== undefined) return; // already answered
  domainQuizState.answers[qi] = { chosen, correct: chosen === q.ans };
  renderDomainQuizContent();
}

// ── Domain Quiz: Jump to question
function jumpDomainQ(idx) {
  domainQuizState.currentQ = idx;
  renderDomainQuizContent();
  const m = document.getElementById('theory-main');
  if (m) m.scrollTop = 0;
}

// ── Domain Quiz: Finish & save result
function finishDomainQuiz() {
  const di   = domainQuizState.domainIdx;
  const qs   = DOMAIN_QUIZZES[di];
  const total = qs.length;
  const score = Object.values(domainQuizState.answers).filter(a => a.correct).length;
  const pct   = Math.round(score / total * 100);
  const date  = new Date().toLocaleDateString(lang === 'en' ? 'en-GB' : 'it-IT', { day:'2-digit', month:'short', year:'numeric' });

  if (!progress.domainQuizResults) progress.domainQuizResults = [];
  progress.domainQuizResults.push({ domainIdx: di, score, total, pct, date });
  saveProgress();

  const l = lang === 'en';
  const passed = pct >= 70;
  const msg = passed
    ? (l ? `✓ ${pct}% — Great job!` : `✓ ${pct}% — Ottimo lavoro!`)
    : (l ? `${pct}% — Keep studying!` : `${pct}% — Continua a studiare!`);
  showToast(msg, passed ? 'success' : 'info');

  // Show results screen
  const mainEl = document.getElementById('theory-main');
  if (!mainEl) return;

  const domain = THEORY[di];
  const dqResults = progress.domainQuizResults.filter(r => r.domainIdx === di);
  const dqBest    = Math.max(...dqResults.map(r => r.pct));

  // Question-by-question review
  let reviewHtml = '';
  qs.forEach((q, qi) => {
    const a = domainQuizState.answers[qi];
    const correct = a && a.correct;
    reviewHtml += `<div class="dq-review-item ${correct?'correct':'wrong'}">
      <div class="dq-review-q"><span class="dq-review-icon">${correct?'✓':'✗'}</span> ${qi+1}. ${q.q}</div>
      <div class="dq-review-ans">${l?'Your answer:':'La tua risposta:'} <strong>${q.opts[a?a.chosen:0]}</strong>${!correct?` · ${l?'Correct:':'Corretta:'} <strong style="color:var(--green)">${q.opts[q.ans]}</strong>`:''}</div>
      <div class="dq-review-exp">${q.exp}</div>
    </div>`;
  });

  const dqPills = [
    ...domain.topics.map((t, ti) => {
      const done = progress.topicsDone.includes(di+'-'+ti);
      return `<button class="topic-pill ${done?'done':''}" onclick="navToTopic(${di},${ti})">${t.title[lang]}</button>`;
    }),
    `<button class="topic-pill quiz-pill active" onclick="startDomainQuiz(${di})">📝 ${l?'Domain Quiz':'Quiz dominio'} · ${dqBest}%</button>`
  ].join('');

  mainEl.innerHTML = `
    <div class="topic-pills">${dqPills}</div>
    <div class="domain-hero" style="--dhc:${domain.color}">
      <div class="dh-pct" style="color:${domain.color}">${domain.pct}</div>
      <div class="dh-title">${domain.title[lang]}</div>
      <div class="dh-sub">📝 ${l?'Domain Quiz — Results':'Quiz dominio — Risultati'}</div>
    </div>
    <div class="topic-content">
      <div class="dq-result-card" style="border-left:4px solid ${passed?'var(--green)':'var(--amber)'}">
        <div class="dq-result-score" style="color:${passed?'var(--green)':'var(--amber)'}">${pct}%</div>
        <div class="dq-result-detail">${score}/${total} ${l?'correct':'corrette'}</div>
        <div class="dq-result-msg">${passed
          ? (l?'🟢 Solid domain knowledge!':'🟢 Buona padronanza del dominio!')
          : (l?'🟡 Review the explanations below and retry.':'🟡 Rileggi le spiegazioni sotto e riprova.')}</div>
        ${dqBest !== pct ? `<div style="font-size:12px;color:var(--text3);margin-top:4px">${l?'Best score:':'Punteggio migliore:'} <strong>${dqBest}%</strong></div>` : ''}
        <div style="display:flex;gap:8px;margin-top:16px;flex-wrap:wrap">
          <button class="btn-primary" onclick="startDomainQuiz(${di})">🔄 ${l?'Retry':'Riprova'}</button>
          <button class="btn-secondary" onclick="navToTopic(${di},0)">← ${l?'Back to topics':'Torna agli argomenti'}</button>
        </div>
      </div>
      <h3 style="font-size:14px;font-weight:600;color:var(--text);margin:20px 0 10px">${l?'Question review:':'Riepilogo domande:'}</h3>
      <div class="dq-review">${reviewHtml}</div>
    </div>`;

  // Mark quiz as done state cleared so re-entering works
  domainQuizState.active = true; // keep active so ToC shows correctly
}

// ── Navigate to a topic (resets quiz mode)
function navToTopic(di, ti) {
  currentDomain = di; currentTopic = ti;
  domainQuizState.active = false;
  document.querySelectorAll('.nav-sub-item').forEach((el,i) => el.classList.toggle('active', i===di));
  renderTheory();
  const m = document.getElementById('theory-main');
  if (m) m.scrollTop = 0;
}

// ── Global store for mini-quiz explanations (avoids special-char issues in onclick strings)
const _mqExpStore = {};

function doMQ(sk, chosen, correct) {
  const exp = _mqExpStore[sk] || '';
  const c = document.getElementById(sk); if (!c) return;
  c.querySelectorAll('.mq-opt').forEach((btn,i) => {
    btn.disabled = true;
    if (i===correct) btn.classList.add('correct');
    else if (i===chosen && chosen!==correct) btn.classList.add('wrong');
  });
  const e = document.getElementById(sk+'-exp');
  if (e) {
    e.classList.add('show');
    e.innerHTML = `${chosen===correct
      ? `<strong style="color:var(--green)">${lang==='en'?'✓ Correct!':'✓ Corretto!'}</strong>`
      : `<strong style="color:var(--red)">${lang==='en'?'✗ Incorrect.':'✗ Sbagliato.'}</strong>`
    } <strong>${lang==='en'?'Why:':'Perché:'}</strong> ${exp}`;
  }
}

function toggleScenario(id) { const el=document.getElementById(id); if(el) el.classList.toggle('open'); }
function togglePDI(id)      { const el=document.getElementById(id); if(el) el.classList.toggle('open'); }

function markTopicDone(di, ti) {
  const key = di+'-'+ti;
  if (!progress.topicsDone.includes(key)) {
    progress.topicsDone.push(key);
    saveProgress();
    showToast(lang==='en'?'✓ Topic completed!':'✓ Argomento completato!', 'success');
  }
  const btn = document.getElementById(`done-btn-${di}-${ti}`);
  if (btn) { btn.textContent = lang==='en'?'✓ Completed':'✓ Completato'; btn.classList.add('done'); }
  updateSidebarProgress();
  renderTheory();
}
