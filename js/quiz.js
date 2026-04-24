function renderQuizSetup() {
  const sel = document.getElementById('block-selector');
  if (!sel) return;
  sel.innerHTML = BLOCKS.map((b, i) => {
    const results = progress.quizResults.filter(r => r.block === i);
    const best = results.length > 0 ? Math.max(...results.map(r => Math.round(r.score/r.total*100))) : null;
    return `<button class="block-btn ${quizState.block === i && quizState.started ? 'active' : ''}" onclick="startQuizBlock(${i})">
      ${b.emoji} ${b.label} <span class="b-check">${best !== null ? best + '%' : '—'}</span>
    </button>`;
  }).join('');

  if (!quizState.started) {
    document.getElementById('quiz-area').innerHTML = `<div class="card" style="text-align:center;padding:32px">
      <div style="font-size:32px;margin-bottom:12px">🎯</div>
      <div style="font-size:16px;font-weight:500;margin-bottom:8px">${lang==='en'?'Select a block above to start':'Seleziona un blocco per iniziare'}</div>
      <div style="font-size:13px;color:var(--text2)">${lang==='en'?'126 questions total · 42 per block · No time limit':'126 domande totali · 42 per blocco · Nessun limite di tempo'}</div>
    </div>`;
    return;
  }
  renderQuizBlock();
}

function startQuizBlock(blockIdx) {
  quizState = { block: blockIdx, answers: {}, started: true, currentQ: 0 };
  renderQuizSetup();
}

function getBlockQuestions() {
  const [start, end] = BLOCKS[quizState.block].range;
  return ALL_QUESTIONS.slice(start, end);
}

function renderQuizBlock() {
  const qs = getBlockQuestions();
  const answered = Object.keys(quizState.answers).length;
  const correct = Object.values(quizState.answers).filter(a => a.correct).length;

  let dotsHtml = '<div class="q-progress-dots">';
  qs.forEach((q, i) => {
    const a = quizState.answers[i];
    let cls = i === quizState.currentQ ? 'current' : '';
    if (a) cls = a.correct ? 'answered-correct' : 'answered-wrong';
    dotsHtml += `<div class="q-dot ${cls}" onclick="jumpToQ(${i})">${i+1}</div>`;
  });
  dotsHtml += '</div>';

  const q = qs[quizState.currentQ];
  const answered_this = quizState.answers[quizState.currentQ];

  let navHtml = `<div class="quiz-nav-bar">
    <div class="qnb-info">${lang==='en'?'Question':'Domanda'} <span>${quizState.currentQ+1}/${qs.length}</span></div>
    <div class="qnb-info">${lang==='en'?'Domain':'Dominio'}: <span class="tag blue">${q.domain}</span></div>
    <div class="quiz-score-badge">${correct}/${answered} ${lang==='en'?'correct':'corrette'}</div>
  </div>`;

  let optsHtml = '';
  q.opts.forEach((opt, oi) => {
    let cls = '';
    if (answered_this) {
      if (oi === q.ans) cls = 'correct';
      else if (oi === answered_this.chosen && !answered_this.correct) cls = 'wrong';
    }
    optsHtml += `<button class="option-btn ${cls}" ${answered_this ? 'disabled' : ''} onclick="answerQ(${oi})">
      <span class="opt-letter">${String.fromCharCode(65+oi)}</span>
      ${opt}
    </button>`;
  });

  let expHtml = '';
  if (answered_this) {
    const isCorrect = answered_this.correct;
    expHtml = `<div class="explanation show">
      ${isCorrect
        ? `<strong style="color:var(--green)">${lang==='en'?'✓ Correct!':'✓ Corretto!'}</strong>`
        : `<strong style="color:var(--red)">${lang==='en'?'✗ Incorrect.':'✗ Sbagliato.'}</strong>`}
      ${!isCorrect ? `${lang==='en'?'The correct answer is':'La risposta corretta è'} <strong>${String.fromCharCode(65+q.ans)}. ${q.opts[q.ans]}</strong>.<br><br>` : '<br>'}
      <strong>${lang==='en'?'Explanation:':'Spiegazione:'}</strong> ${q.exp}
    </div>`;
  }

  let ctrlHtml = '<div class="quiz-controls">';
  if (quizState.currentQ > 0)
    ctrlHtml += `<button class="btn-secondary" onclick="jumpToQ(${quizState.currentQ-1})">← ${lang==='en'?'Previous':'Precedente'}</button>`;
  if (quizState.currentQ < qs.length-1)
    ctrlHtml += `<button class="btn-primary" onclick="jumpToQ(${quizState.currentQ+1})" style="margin-left:auto">${lang==='en'?'Next':'Successiva'} →</button>`;
  if (answered >= qs.length)
    ctrlHtml += `<button class="btn-primary" onclick="finishQuiz()" style="margin-left:auto;background:var(--green)">🏁 ${lang==='en'?'See Results':'Vedi Risultati'}</button>`;
  ctrlHtml += '</div>';

  document.getElementById('quiz-area').innerHTML = dotsHtml + navHtml + `
    <div class="question-card">
      <div class="q-meta">
        <span>Q${quizState.currentQ + 1 + BLOCKS[quizState.block].range[0]}</span>
        <span class="domain-tag">${q.domain}</span>
      </div>
      <div class="q-text">${q.q}</div>
      <div class="options">${optsHtml}</div>
      ${expHtml}
    </div>` + ctrlHtml;
}

function answerQ(chosenIdx) {
  const qs = getBlockQuestions();
  const q = qs[quizState.currentQ];
  const isCorrect = chosenIdx === q.ans;
  quizState.answers[quizState.currentQ] = { chosen: chosenIdx, correct: isCorrect };
  progress.totalQAnswered++;
  if (isCorrect) progress.totalQCorrect++;
  saveProgress();
  renderQuizBlock();
}

function jumpToQ(idx) {
  quizState.currentQ = idx;
  renderQuizBlock();
}

function finishQuiz() {
  const qs = getBlockQuestions();
  const correct = Object.values(quizState.answers).filter(a => a.correct).length;
  const total = qs.length;
  const pct = Math.round(correct / total * 100);
  const passed = pct >= 70;

  const breakdown = {};
  qs.forEach((q, i) => {
    if (!breakdown[q.domain]) breakdown[q.domain] = { correct: 0, total: 0 };
    breakdown[q.domain].total++;
    if (quizState.answers[i] && quizState.answers[i].correct) breakdown[q.domain].correct++;
  });

  progress.quizResults.push({ block: quizState.block, score: correct, total, date: new Date().toLocaleDateString(), domainBreakdown: breakdown });
  saveProgress();

  let breakdownHtml = Object.entries(breakdown).map(([dom, data]) => {
    const dpct = Math.round(data.correct/data.total*100);
    return `<div class="rb-item">
      <div class="rb-domain">${dom}</div>
      <div class="rb-score" style="color:${dpct>=70?'var(--green)':'var(--red)'}">${dpct}%</div>
      <div style="font-size:11px;color:var(--text3)">${data.correct}/${data.total}</div>
    </div>`;
  }).join('');

  document.getElementById('quiz-result').style.display = 'block';
  document.getElementById('quiz-setup').style.display = 'none';
  document.getElementById('quiz-result').innerHTML = `
    <div class="result-screen">
      <div class="rs-score ${passed?'rs-pass':'rs-fail'}">${pct}%</div>
      <div class="rs-label ${passed?'rs-pass':'rs-fail'}">${passed
        ? (lang==='en'?'🎉 Passed! Great work.':'🎉 Superato! Ottimo lavoro.')
        : (lang==='en'?'Not quite — keep studying!':'Non ancora — continua a studiare!')}</div>
      <div style="font-size:14px;color:var(--text2);margin-bottom:20px">${correct}/${total} ${lang==='en'?'correct':'corrette'} · ${lang==='en'?'Passing threshold: 70%':'Soglia: 70%'}</div>
      <div class="result-breakdown">${breakdownHtml}</div>
      <div class="quiz-controls" style="justify-content:center;margin-top:24px">
        <button class="btn-secondary" onclick="retakeQuiz()">${lang==='en'?'↺ Retake this block':'↺ Rifai questo blocco'}</button>
        <button class="btn-primary" onclick="document.getElementById('quiz-result').style.display='none';document.getElementById('quiz-setup').style.display='block';quizState.started=false;renderQuizSetup()">${lang==='en'?'← Back to blocks':'← Torna ai blocchi'}</button>
      </div>
    </div>`;
  updateSidebarProgress();
}

function retakeQuiz() {
  document.getElementById('quiz-result').style.display = 'none';
  document.getElementById('quiz-setup').style.display = 'block';
  startQuizBlock(quizState.block);
}
