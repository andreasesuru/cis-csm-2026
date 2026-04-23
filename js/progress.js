function renderProgress() {
  const totalTopics = THEORY.reduce((s,d) => s + d.topics.length, 0);
  const topicsDone = progress.topicsDone.length;
  const topicPct = totalTopics > 0 ? Math.round(topicsDone/totalTopics*100) : 0;

  const totalQ = progress.totalQAnswered;
  const totalCorrect = progress.totalQCorrect;
  const accuracy = totalQ > 0 ? Math.round(totalCorrect/totalQ*100) : 0;
  const quizCount = progress.quizResults.length;
  const bestScore = quizCount > 0 ? Math.max(...progress.quizResults.map(r => Math.round(r.score/r.total*100))) : 0;
  const fcKnown = progress.fcKnew.length;

  const l = lang === 'en';

  let html = `<div class="stats-grid">
    <div class="stat-card"><div class="sc-label">${l?'Theory Topics':'Argomenti'}</div><div class="sc-value">${topicsDone}/${totalTopics}</div><div class="sc-sub">${topicPct}% ${l?'complete':'completato'}</div></div>
    <div class="stat-card"><div class="sc-label">${l?'Questions Answered':'Domande risp.'}</div><div class="sc-value">${totalQ}</div><div class="sc-sub">${l?'across all blocks':'su tutti i blocchi'}</div></div>
    <div class="stat-card"><div class="sc-label">${l?'Accuracy':'Precisione'}</div><div class="sc-value" style="color:${accuracy>=70?'var(--green)':'var(--amber)'}">${accuracy}%</div><div class="sc-sub">${l?'70% to pass exam':'70% per passare'}</div></div>
    <div class="stat-card"><div class="sc-label">${l?'Best Quiz Score':'Miglior punteggio'}</div><div class="sc-value" style="color:${bestScore>=70?'var(--green)':'var(--amber)'}">${bestScore > 0 ? bestScore+'%' : '—'}</div><div class="sc-sub">${quizCount} ${l?'quiz attempts':'tentativi'}</div></div>
    <div class="stat-card"><div class="sc-label">${l?'Flashcards Known':'Flashcard note'}</div><div class="sc-value">${fcKnown}/${FLASHCARDS.length}</div><div class="sc-sub">${Math.round(fcKnown/FLASHCARDS.length*100)}%</div></div>
  </div>`;

  html += `<h3 style="font-size:15px;font-weight:600;margin-bottom:12px;color:var(--text)">${l?'Theory Progress by Domain':'Progressi per dominio'}</h3>`;
  THEORY.forEach((domain, di) => {
    const total = domain.topics.length;
    const done = domain.topics.filter((_, ti) => progress.topicsDone.includes(di + '-' + ti)).length;
    const pct = Math.round(done/total*100);
    html += `<div class="domain-progress-card">
      <div class="dpc-header"><h4>${domain.title[lang]}</h4><div class="dpc-pct">${pct}%</div></div>
      <div class="dpc-bar-bg"><div class="dpc-bar-fill" style="width:${pct}%;background:${domain.color}"></div></div>
      <div class="dpc-sub">${done}/${total} ${l?'topics completed':'argomenti completati'} · ${domain.pct} ${l?'of exam':'dell\'esame'}</div>
    </div>`;
  });

  if (progress.quizResults.length > 0) {
    html += `<h3 style="font-size:15px;font-weight:600;margin:20px 0 12px;color:var(--text)">${l?'Recent Quiz Results':'Risultati quiz recenti'}</h3>`;
    const recent = [...progress.quizResults].reverse().slice(0, 6);
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

  const readiness = Math.round((topicPct * 0.4) + (accuracy * 0.4) + (fcKnown/FLASHCARDS.length * 100 * 0.2));
  html += `<div style="margin-top:24px;padding:20px;background:var(--bg2);border:1px solid var(--border);border-radius:var(--radius-lg);text-align:center">
    <div style="font-size:12px;color:var(--text3);font-family:var(--font-mono);text-transform:uppercase;letter-spacing:.08em;margin-bottom:8px">${l?'Exam Readiness Estimate':'Stima prontezza esame'}</div>
    <div style="font-size:48px;font-weight:600;font-family:var(--font-mono);color:${readiness>=70?'var(--green)':readiness>=50?'var(--amber)':'var(--red)'}">${readiness}%</div>
    <div style="font-size:13px;color:var(--text2);margin-top:4px">${
      readiness>=80 ? '🟢 '+(l?'Ready to book the exam!':'Pronto per prenotare l\'esame!')
      : readiness>=60 ? '🟡 '+(l?'Getting closer — keep going!':'Quasi pronto — continua!')
      : readiness>=40 ? '🟠 '+(l?'Keep studying all domains':'Studia tutti i domini')
      : '🔴 '+(l?'Focus on theory first':'Inizia dalla teoria')
    }</div>
  </div>`;

  document.getElementById('progress-content').innerHTML = html;
}
