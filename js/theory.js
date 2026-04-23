function renderTheory(domainIdx) {
  if (domainIdx !== undefined) currentDomain = domainIdx;
  const domain = THEORY[currentDomain];
  const topic  = domain.topics[currentTopic] || domain.topics[0];

  let tocHtml = '';
  THEORY.forEach((d, di) => {
    tocHtml += `<div class="toc-domain-label" style="color:${d.color}">${d.pct} D${di+1}</div>`;
    d.topics.forEach((t, ti) => {
      const done = progress.topicsDone.includes(di+'-'+ti);
      const act  = di === currentDomain && ti === currentTopic;
      const lbl  = t.title[lang].length > 22 ? t.title[lang].substring(0,20)+'…' : t.title[lang];
      tocHtml += `<div class="toc-item ${act?'active':''} ${done?'done':''}" onclick="navToTopic(${di},${ti})">${lbl}<span class="toc-check">${done?'✓':''}</span></div>`;
    });
    if (di < THEORY.length-1) tocHtml += '<div class="toc-divider"></div>';
  });
  const tocEl = document.getElementById('theory-toc');
  if (tocEl) tocEl.innerHTML = tocHtml;

  const pillsHtml = domain.topics.map((t, ti) => {
    const done = progress.topicsDone.includes(currentDomain+'-'+ti);
    return `<button class="topic-pill ${ti===currentTopic?'active':''} ${done?'done':''}" onclick="navToTopic(${currentDomain},${ti})">${t.title[lang]}</button>`;
  }).join('');

  const doneCount = domain.topics.filter((_,ti) => progress.topicsDone.includes(currentDomain+'-'+ti)).length;
  const domPct    = Math.round(doneCount/domain.topics.length*100);
  const isDone    = progress.topicsDone.includes(currentDomain+'-'+currentTopic);

  const flat = []; THEORY.forEach((d,di) => d.topics.forEach((_,ti) => flat.push({di,ti})));
  const ci   = flat.findIndex(x => x.di===currentDomain && x.ti===currentTopic);
  const prev = ci > 0 ? flat[ci-1] : null;
  const next = ci < flat.length-1 ? flat[ci+1] : null;

  let mqHtml = '';
  if (topic.quiz && topic.quiz.length > 0) {
    const qWord = lang==='en' ? (topic.quiz.length>1?'questions':'question') : (topic.quiz.length>1?'domande':'domanda');
    mqHtml = `<div class="mini-quiz"><div class="mq-header"><span class="mq-label">🧪 ${lang==='en'?'Knowledge Check':'Verifica comprensione'}</span><span class="mq-sub" style="margin-left:8px;font-size:12px;color:var(--text2)">${topic.quiz.length} ${qWord}</span></div>`;
    topic.quiz.forEach((q, qi) => {
      const sk = 'mq_'+currentDomain+'_'+currentTopic+'_'+qi;
      mqHtml += `<div class="mq-q" id="${sk}"><div class="mq-qtext">${qi+1}. ${q.q}</div><div class="mq-opts">${
        q.opts.map((o,oi) => `<button class="mq-opt" onclick="doMQ('${sk}',${oi},${q.ans},'${q.exp.replace(/'/g,"&apos;")}')"><span class="mq-letter">${String.fromCharCode(65+oi)}</span>${o}</button>`).join('')
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

function navToTopic(di, ti) {
  currentDomain = di; currentTopic = ti;
  document.querySelectorAll('.nav-sub-item').forEach((el,i) => el.classList.toggle('active', i===di));
  renderTheory();
  const m = document.getElementById('theory-main');
  if (m) m.scrollTop = 0;
}

function doMQ(sk, chosen, correct, exp) {
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
