function renderProgress() {
  const l = lang === 'en';

  // ── Theory stats
  const totalTopics = THEORY.reduce((s,d) => s + d.topics.length, 0);
  const topicsDone  = progress.topicsDone.length;
  const topicPct    = totalTopics > 0 ? Math.round(topicsDone/totalTopics*100) : 0;

  // ── Quiz block stats (block !== -1)
  const blockResults = progress.quizResults.filter(r => r.block !== -1);
  const totalQ       = progress.totalQAnswered;
  const totalCorrect = progress.totalQCorrect;
  const accuracy     = totalQ > 0 ? Math.round(totalCorrect/totalQ*100) : 0;
  const bestBlock    = blockResults.length > 0 ? Math.max(...blockResults.map(r => Math.round(r.score/r.total*100))) : 0;

  // ── Mock test stats
  const mockProg    = loadMockProgress();
  const mockResults = mockProg.results;
  const mockAttempted = new Set(mockResults.map(r => r.testIdx)).size;
  const mockBestScores = MOCK_TESTS.map((_, idx) => {
    const res = mockResults.filter(r => r.testIdx === idx);
    return res.length ? Math.max(...res.map(r => r.pct)) : null;
  });
  const mockAttemptedBests = mockBestScores.filter(s => s !== null);
  const mockAvgBest = mockAttemptedBests.length
    ? Math.round(mockAttemptedBests.reduce((a,b) => a+b, 0) / mockAttemptedBests.length)
    : 0;
  const mockPassed = mockAttemptedBests.filter(s => s >= 70).length;

  // ── Flashcard stats
  const fcKnown = progress.fcKnew.length;
  const fcTotal = typeof FLASHCARDS !== 'undefined' ? FLASHCARDS.size || FLASHCARDS.length || 0 : 0;
  const fcPct   = fcTotal > 0 ? Math.round(fcKnown/fcTotal*100) : 0;

  // ── Exam Readiness (weighted)
  // 30% theory · 20% quiz accuracy · 15% flashcards · 35% mock tests (if any attempted, else redistributed)
  let readiness;
  if (mockAttemptedBests.length > 0) {
    readiness = Math.round(
      (topicPct      * 0.30) +
      (accuracy      * 0.20) +
      (fcPct         * 0.15) +
      (mockAvgBest   * 0.35)
    );
  } else {
    // No mock tests yet — use original formula without mock weight
    readiness = Math.round(
      (topicPct * 0.40) +
      (accuracy * 0.40) +
      (fcPct    * 0.20)
    );
  }

  // ══ BUILD HTML ══

  // Stat cards
  let html = `<div class="stats-grid">
    <div class="stat-card">
      <div class="sc-label">${l?'Theory Topics':'Argomenti'}</div>
      <div class="sc-value">${topicsDone}/${totalTopics}</div>
      <div class="sc-sub">${topicPct}% ${l?'complete':'completato'}</div>
    </div>
    <div class="stat-card">
      <div class="sc-label">${l?'Questions Answered':'Domande risp.'}</div>
      <div class="sc-value">${totalQ}</div>
      <div class="sc-sub">${l?'quiz + mock tests':'quiz + mock test'}</div>
    </div>
    <div class="stat-card">
      <div class="sc-label">${l?'Accuracy':'Precisione'}</div>
      <div class="sc-value" style="color:${accuracy>=70?'var(--green)':'var(--amber)'}">${accuracy}%</div>
      <div class="sc-sub">${l?'70% to pass exam':'70% per passare'}</div>
    </div>
    <div class="stat-card">
      <div class="sc-label">${l?'Mock Tests':'Mock Test'}</div>
      <div class="sc-value" style="color:${mockAvgBest>=70?'var(--green)':mockAvgBest>0?'var(--amber)':'var(--text2)'}">
        ${mockAvgBest > 0 ? mockAvgBest+'%' : '—'}
      </div>
      <div class="sc-sub">${mockAttempted}/6 ${l?'attempted':'tentati'} · ${mockPassed} ${l?'passed':'superati'}</div>
    </div>
    <div class="stat-card">
      <div class="sc-label">${l?'Flashcards Known':'Flashcard note'}</div>
      <div class="sc-value">${fcKnown}/${fcTotal}</div>
      <div class="sc-sub">${fcPct}%</div>
    </div>
  </div>`;

  // Theory domain progress
  html += `<h3 style="font-size:15px;font-weight:600;margin-bottom:12px;color:var(--text)">${l?'Theory Progress by Domain':'Progressi per dominio'}</h3>`;
  THEORY.forEach((domain, di) => {
    const total = domain.topics.length;
    const done  = domain.topics.filter((_, ti) => progress.topicsDone.includes(di+'-'+ti)).length;
    const pct   = Math.round(done/total*100);
    html += `<div class="domain-progress-card">
      <div class="dpc-header"><h4>${domain.title[lang]}</h4><div class="dpc-pct">${pct}%</div></div>
      <div class="dpc-bar-bg"><div class="dpc-bar-fill" style="width:${pct}%;background:${domain.color}"></div></div>
      <div class="dpc-sub">${done}/${total} ${l?'topics completed':'argomenti completati'} · ${domain.pct} ${l?'of exam':'dell\'esame'}</div>
    </div>`;
  });

  // Mock test scores per test
  html += `<h3 style="font-size:15px;font-weight:600;margin:24px 0 12px;color:var(--text)">${l?'Mock Test Results':'Risultati Mock Test'}</h3>`;
  const testColors = ['var(--blue)','var(--teal)','var(--purple)','var(--amber)','var(--red)','var(--green)'];
  html += '<div style="display:flex;flex-direction:column;gap:8px">';
  MOCK_TESTS.forEach((test, idx) => {
    const res    = mockResults.filter(r => r.testIdx === idx);
    const best   = res.length ? Math.max(...res.map(r => r.pct)) : null;
    const color  = testColors[idx];
    const passed = best !== null && best >= 70;
    html += `
      <div style="display:flex;align-items:center;gap:12px;padding:10px 14px;background:var(--bg2);border:1px solid var(--border);border-radius:var(--radius);border-left:3px solid ${color}">
        <span style="font-size:13px;font-weight:500;color:var(--text);flex:1">${test.title}</span>
        <span style="font-size:12px;color:var(--text3)">${res.length} ${l?'attempt':'tentativo'}${res.length !== 1?'s':''}</span>
        <span style="font-family:var(--font-mono);font-size:14px;font-weight:700;color:${best===null?'var(--text3)':passed?'var(--green)':'var(--red)'}">
          ${best !== null ? best+'%' : '—'}
        </span>
      </div>`;
  });
  html += '</div>';

  // Recent quiz block results
  if (blockResults.length > 0) {
    html += `<h3 style="font-size:15px;font-weight:600;margin:24px 0 12px;color:var(--text)">${l?'Recent Quiz Results':'Risultati quiz recenti'}</h3>`;
    const recent = [...blockResults].reverse().slice(0, 6);
    html += '<div style="display:flex;flex-direction:column;gap:8px">';
    recent.forEach(r => {
      const pct = Math.round(r.score/r.total*100);
      html += `<div style="display:flex;align-items:center;gap:12px;padding:10px 14px;background:var(--bg2);border:1px solid var(--border);border-radius:var(--radius)">
        <span style="font-size:12px;color:var(--text3)">${BLOCKS[r.block].label}</span>
        <span style="font-size:12px;color:var(--text2)">${r.date}</span>
        <span style="margin-left:auto;font-family:var(--font-mono);font-size:14px;font-weight:600;color:${pct>=70?'var(--green)':'var(--red)'}">${pct}%</span>
        <span style="font-size:12px;color:var(--text3)">${r.score}/${r.total}</span>
      </div>`;
    });
    html += '</div>';
  }

  // Exam Readiness
  const readinessColor = readiness>=70?'var(--green)':readiness>=50?'var(--amber)':'var(--red)';
  const readinessMsg   = readiness>=80
    ? '🟢 '+(l?'Ready to book the exam!':'Pronto per prenotare l\'esame!')
    : readiness>=60 ? '🟡 '+(l?'Getting closer — keep going!':'Quasi pronto — continua!')
    : readiness>=40 ? '🟠 '+(l?'Keep studying all domains':'Studia tutti i domini')
    : '🔴 '+(l?'Focus on theory first':'Inizia dalla teoria');

  const formulaNote = mockAttemptedBests.length > 0
    ? (l ? 'Theory 30% · Quiz 20% · Flashcards 15% · Mock Tests 35%'
         : 'Teoria 30% · Quiz 20% · Flashcard 15% · Mock Test 35%')
    : (l ? 'Theory 40% · Quiz 40% · Flashcards 20% (mock tests not yet attempted)'
         : 'Teoria 40% · Quiz 40% · Flashcard 20% (mock test non ancora tentati)');

  html += `
    <div style="margin-top:24px;padding:20px;background:var(--bg2);border:1px solid var(--border);border-radius:var(--radius-lg);text-align:center">
      <div style="font-size:12px;color:var(--text3);font-family:var(--font-mono);text-transform:uppercase;letter-spacing:.08em;margin-bottom:8px">
        ${l?'Exam Readiness Estimate':'Stima prontezza esame'}
      </div>
      <div style="font-size:48px;font-weight:600;font-family:var(--font-mono);color:${readinessColor}">${readiness}%</div>
      <div style="font-size:13px;color:var(--text2);margin-top:4px">${readinessMsg}</div>
      <div style="font-size:11px;color:var(--text3);margin-top:8px;font-family:var(--font-mono)">${formulaNote}</div>
    </div>`;

  document.getElementById('progress-content').innerHTML = html;
}
