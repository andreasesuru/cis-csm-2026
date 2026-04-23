// ══════════════════════════════════════════════════════════════
// MOCK TEST — CIS-CSM 2026 Study App
// Full-length exam simulations with optional 90-min countdown
// Handles single-choice AND multi-choice questions
// ══════════════════════════════════════════════════════════════

const MOCK_EXAM_SECONDS = 90 * 60; // 90 minutes — official CIS-CSM exam time

let mockState = {
  testIdx:    null,
  started:    false,
  currentQ:   0,
  answers:    {},      // { qIdx: { selected: [indices], correct: bool } }
  pending:    [],      // selected indices before submit (multi-choice)
  useTimer:   false,
  startTime:  null,    // Date.now() when started (for countdown)
  timedOut:   false,
};

let _mockTimerInterval = null;

// ── Progress helpers ──────────────────────────────────────────
function loadMockProgress() {
  try {
    const raw = localStorage.getItem('cis_csm_mock_progress_v1');
    if (raw) return JSON.parse(raw);
  } catch(e) {}
  return { results: [] };
}

function saveMockProgress(newResult) {
  const prog = loadMockProgress();
  prog.results.push(newResult);
  try {
    localStorage.setItem('cis_csm_mock_progress_v1', JSON.stringify(prog));
  } catch(e) {}
}

function getMockProgress() {
  return loadMockProgress();
}

// ── Setup Screen ──────────────────────────────────────────────
function renderMockTests() {
  _stopMockTimer();
  if (mockState.started) {
    renderMockQuestion();
  } else {
    renderMockTestGrid();
  }
}

function renderMockTestGrid() {
  const area = document.getElementById('mock-area');
  if (!area) return;
  const prog = getMockProgress();

  const testColors  = ['var(--blue)', 'var(--teal)', 'var(--purple)', 'var(--amber)', 'var(--red)', 'var(--green)'];
  const testEmojis  = ['📝', '📋', '🗒️', '📄', '🧪', '🔬'];

  const cards = MOCK_TESTS.map((test, idx) => {
    const results  = prog.results.filter(r => r.testIdx === idx);
    const best     = results.length ? Math.max(...results.map(r => r.pct)) : null;
    const attempts = results.length;
    const passed   = best !== null && best >= 70;
    const qCount   = test.data.length;
    const color    = testColors[idx];
    const emoji    = testEmojis[idx];

    return `
      <div class="mock-test-card" onclick="showMockStartModal(${idx})" style="--mock-color:${color}">
        <div class="mtc-header">
          <div class="mtc-emoji">${emoji}</div>
          <div class="mtc-info">
            <div class="mtc-title">${test.title}</div>
            <div class="mtc-meta">${qCount} questions · Official time: 90 min</div>
          </div>
          ${best !== null
            ? `<div class="mtc-badge ${passed ? 'pass' : 'fail'}">${best}%</div>`
            : '<div class="mtc-badge new">NEW</div>'}
        </div>
        <div class="mtc-footer">
          <span class="mtc-attempts">${attempts ? attempts + ' attempt' + (attempts > 1 ? 's' : '') : 'Not attempted'}</span>
          <span class="mtc-start">Start →</span>
        </div>
      </div>`;
  }).join('');

  area.innerHTML = `
    <div class="mock-grid">${cards}</div>
    <div class="card" style="border-left:3px solid var(--amber);margin-top:20px">
      <div class="card-title">📋 Mock Test Guidelines</div>
      <ul style="color:var(--text2);font-size:13px;line-height:2;padding-left:20px">
        <li>Each test simulates the real CIS-CSM exam format</li>
        <li>Feedback is shown immediately after each answer</li>
        <li><strong>Multi-select</strong> questions: tick all correct options then click <em>Submit</em></li>
        <li>Passing score: <strong>70%</strong> · Official exam: 90 min · You can choose whether to time yourself</li>
        <li>Best score per test is saved — retake as many times as you like</li>
      </ul>
    </div>

    <!-- Start Modal (hidden) -->
    <div id="mock-modal-overlay" style="display:none" onclick="closeMockModal(event)">
      <div class="mock-modal" id="mock-modal">
        <div class="mm-title" id="mm-title"></div>
        <div class="mm-meta" id="mm-meta"></div>
        <div class="mm-timer-choice">
          <div class="mm-tc-label">⏱ Timer</div>
          <div class="mm-tc-options">
            <button class="mm-tc-btn active" id="mm-notimer" onclick="setMockTimer(false)">
              <span class="mm-tc-icon">🚫</span>
              <span class="mm-tc-name">No timer</span>
              <span class="mm-tc-desc">Study at your own pace</span>
            </button>
            <button class="mm-tc-btn" id="mm-timer" onclick="setMockTimer(true)">
              <span class="mm-tc-icon">⏱</span>
              <span class="mm-tc-name">90 min countdown</span>
              <span class="mm-tc-desc">Official exam conditions</span>
            </button>
          </div>
        </div>
        <div class="mm-actions">
          <button class="btn-secondary" onclick="closeMockModal()">Cancel</button>
          <button class="btn-primary" id="mm-start-btn" onclick="startMockTest()">Start exam →</button>
        </div>
      </div>
    </div>`;
}

// ── Modal ─────────────────────────────────────────────────────
let _pendingTestIdx = null;
let _modalUseTimer  = false;

function showMockStartModal(testIdx) {
  _pendingTestIdx = testIdx;
  _modalUseTimer  = false;
  const test   = MOCK_TESTS[testIdx];
  const qCount = test.data.length;
  document.getElementById('mm-title').textContent = test.title;
  document.getElementById('mm-meta').textContent  = `${qCount} questions · Passing: 70%`;
  document.getElementById('mm-notimer').classList.add('active');
  document.getElementById('mm-timer').classList.remove('active');
  document.getElementById('mock-modal-overlay').style.display = 'flex';
}

function closeMockModal(e) {
  if (e && e.target.id !== 'mock-modal-overlay') return;
  document.getElementById('mock-modal-overlay').style.display = 'none';
}

function setMockTimer(on) {
  _modalUseTimer = on;
  document.getElementById('mm-notimer').classList.toggle('active', !on);
  document.getElementById('mm-timer').classList.toggle('active',  on);
}

// ── Start / Exit ──────────────────────────────────────────────
function startMockTest() {
  document.getElementById('mock-modal-overlay').style.display = 'none';
  mockState = {
    testIdx:   _pendingTestIdx,
    started:   true,
    currentQ:  0,
    answers:   {},
    pending:   [],
    useTimer:  _modalUseTimer,
    startTime: _modalUseTimer ? Date.now() : null,
    timedOut:  false,
  };
  if (_modalUseTimer) _startMockTimer();
  renderMockQuestion();
}

function exitMockTest() {
  if (Object.keys(mockState.answers).length > 0) {
    if (!confirm('Exit this mock test? Your progress will be lost.')) return;
  }
  _resetMockState();
  renderMockTestGrid();
}

function _resetMockState() {
  _stopMockTimer();
  mockState = { testIdx: null, started: false, currentQ: 0, answers: {}, pending: [], useTimer: false, startTime: null, timedOut: false };
}

// ── Timer logic ───────────────────────────────────────────────
function _startMockTimer() {
  _stopMockTimer();
  _mockTimerInterval = setInterval(() => {
    const remaining = _getMockSecondsLeft();
    const el = document.querySelector('.mock-timer');
    if (el) {
      if (remaining <= 0) {
        el.textContent = '⏱ 00:00';
        _stopMockTimer();
        mockState.timedOut = true;
        finishMockTest(true);
      } else {
        const mm = Math.floor(remaining / 60).toString().padStart(2, '0');
        const ss = (remaining % 60).toString().padStart(2, '0');
        el.textContent = `⏱ ${mm}:${ss}`;
        el.style.color = remaining <= 300 ? 'var(--red)' : 'var(--amber)';
        el.style.background = remaining <= 300 ? 'var(--red-dim)' : 'var(--amber-dim)';
      }
    }
  }, 1000);
}

function _stopMockTimer() {
  if (_mockTimerInterval) { clearInterval(_mockTimerInterval); _mockTimerInterval = null; }
}

function _getMockSecondsLeft() {
  if (!mockState.startTime) return MOCK_EXAM_SECONDS;
  const elapsed = Math.floor((Date.now() - mockState.startTime) / 1000);
  return Math.max(0, MOCK_EXAM_SECONDS - elapsed);
}

function _timerDisplay() {
  if (!mockState.useTimer) return '';
  const rem = _getMockSecondsLeft();
  const mm  = Math.floor(rem / 60).toString().padStart(2, '0');
  const ss  = (rem % 60).toString().padStart(2, '0');
  const lowTime = rem <= 300;
  return `<div class="mock-timer" style="color:${lowTime?'var(--red)':'var(--amber)'};background:${lowTime?'var(--red-dim)':'var(--amber-dim)'}">⏱ ${mm}:${ss}</div>`;
}

// ── Question Renderer ─────────────────────────────────────────
function renderMockQuestion() {
  const area = document.getElementById('mock-area');
  if (!area) return;

  const test    = MOCK_TESTS[mockState.testIdx];
  const qs      = test.data;
  const totalQ  = qs.length;
  const q       = qs[mockState.currentQ];
  const qIdx    = mockState.currentQ;
  const answeredThis = mockState.answers[qIdx];
  const answered = Object.keys(mockState.answers).length;
  const correct  = Object.values(mockState.answers).filter(a => a.correct).length;

  // ── Progress dots
  let dotsHtml = '<div class="mock-dots">';
  for (let i = 0; i < totalQ; i++) {
    const a   = mockState.answers[i];
    let cls   = i === qIdx ? 'current' : '';
    if (a !== undefined) cls = a.correct ? 'correct' : 'wrong';
    dotsHtml += `<div class="mock-dot ${cls}" onclick="jumpMockQ(${i})" title="Q${i+1}">${i + 1}</div>`;
  }
  dotsHtml += '</div>';

  // ── Multi hint
  let multiLabel = '';
  if (q.multi) {
    const needed = Array.isArray(q.answer) ? q.answer.length : 1;
    multiLabel = `<div class="multi-hint">☑ Select <strong>${needed}</strong> answer${needed > 1 ? 's' : ''}</div>`;
  }

  // ── Options
  let optsHtml = '';
  q.opts.forEach((opt, oi) => {
    const correctAnswers = Array.isArray(q.answer) ? q.answer : [q.answer];
    let cls = '', icon = '';
    if (answeredThis) {
      const isCorrectOpt = correctAnswers.includes(oi);
      const wasSelected  = answeredThis.selected.includes(oi);
      if (isCorrectOpt)              { cls = 'correct'; icon = '<span class="opt-icon opt-correct">✓</span>'; }
      else if (wasSelected)          { cls = 'wrong';   icon = '<span class="opt-icon opt-wrong">✗</span>'; }
    } else {
      if (mockState.pending.includes(oi)) cls = 'pending';
    }
    const disabledAttr = answeredThis ? 'disabled' : '';
    const letter = q.multi
      ? (mockState.pending.includes(oi) ? '☑' : '☐')
      : String.fromCharCode(65 + oi);

    optsHtml += `
      <button class="option-btn mock-opt ${cls}" ${disabledAttr}
        onclick="${q.multi ? `toggleMockOption(${oi})` : `submitMockSingle(${oi})`}">
        <span class="opt-letter ${(!answeredThis && q.multi) ? 'opt-check' : ''}">${answeredThis ? String.fromCharCode(65 + oi) : letter}</span>
        ${opt}
        ${icon}
      </button>`;
  });

  // ── Submit (multi only)
  let submitHtml = '';
  if (q.multi && !answeredThis) {
    const needed  = Array.isArray(q.answer) ? q.answer.length : 1;
    const sel     = mockState.pending.length;
    const ready   = sel === needed;
    submitHtml = `
      <button class="btn-primary mock-submit"
        ${ready ? 'onclick="submitMockMulti()"' : 'disabled'}
        style="${ready ? '' : 'opacity:0.4;cursor:not-allowed'}">
        ${ready ? '✔ Submit Answer' : `Select ${needed - sel} more answer${needed - sel !== 1 ? 's' : ''}…`}
      </button>`;
  }

  // ── Explanation
  let expHtml = '';
  if (answeredThis) {
    const correctAnswers = Array.isArray(q.answer) ? q.answer : [q.answer];
    const correctLabels  = correctAnswers.map(i => `<strong>${String.fromCharCode(65+i)}. ${q.opts[i]}</strong>`).join(', ');
    expHtml = `
      <div class="explanation show mock-explanation">
        ${answeredThis.correct
          ? `<div class="exp-verdict correct-verdict">✓ Correct!</div>`
          : `<div class="exp-verdict wrong-verdict">✗ Incorrect — correct answer${correctAnswers.length > 1 ? 's' : ''}: ${correctLabels}</div>`}
        <div class="exp-body"><strong>Explanation:</strong> ${q.explanation}</div>
      </div>`;
  }

  // ── Nav
  let navHtml = '<div class="quiz-controls">';
  if (qIdx > 0)
    navHtml += `<button class="btn-secondary" onclick="jumpMockQ(${qIdx-1})">← Prev</button>`;
  if (qIdx < totalQ - 1)
    navHtml += `<button class="btn-primary" onclick="jumpMockQ(${qIdx+1})" style="margin-left:auto">Next →</button>`;
  if (answered >= totalQ)
    navHtml += `<button class="btn-primary" onclick="finishMockTest()" style="margin-left:auto;background:var(--green)">🏁 See Results</button>`;
  navHtml += '</div>';

  area.innerHTML = `
    <div class="mock-header-bar">
      <button class="mock-exit-btn" onclick="exitMockTest()">← Exit</button>
      <div class="mock-hb-center">
        <span class="mock-test-label">${test.title}</span>
        <span class="mock-progress-label">${answered}/${totalQ} answered · ${correct} correct</span>
      </div>
      ${_timerDisplay()}
    </div>

    ${dotsHtml}

    <div class="question-card" style="margin-top:16px">
      <div class="q-meta">
        <span>Q${qIdx+1} of ${totalQ}</span>
        ${q.multi ? '<span class="tag" style="background:var(--purple-dim);color:var(--purple)">Multi-select</span>' : ''}
      </div>
      <div class="q-text">${q.q}</div>
      ${multiLabel}
      <div class="options">${optsHtml}</div>
      ${submitHtml}
      ${expHtml}
    </div>

    ${navHtml}`;
}

// ── Answer Logic ──────────────────────────────────────────────
function submitMockSingle(optIdx) {
  const q          = MOCK_TESTS[mockState.testIdx].data[mockState.currentQ];
  const correctIdx = Array.isArray(q.answer) ? q.answer[0] : q.answer;
  const isCorrect  = optIdx === correctIdx;
  mockState.answers[mockState.currentQ] = { selected: [optIdx], correct: isCorrect };
  mockState.pending = [];
  // track in global progress
  progress.totalQAnswered++;
  if (isCorrect) progress.totalQCorrect++;
  saveProgress();
  renderMockQuestion();
}

function toggleMockOption(optIdx) {
  if (mockState.answers[mockState.currentQ]) return;
  const q      = MOCK_TESTS[mockState.testIdx].data[mockState.currentQ];
  const needed = Array.isArray(q.answer) ? q.answer.length : 1;
  const idx    = mockState.pending.indexOf(optIdx);
  if (idx >= 0) {
    mockState.pending.splice(idx, 1);
  } else {
    if (mockState.pending.length < needed) mockState.pending.push(optIdx);
  }
  renderMockQuestion();
}

function submitMockMulti() {
  const q              = MOCK_TESTS[mockState.testIdx].data[mockState.currentQ];
  const correctAnswers = Array.isArray(q.answer) ? [...q.answer].sort() : [q.answer];
  const selected       = [...mockState.pending].sort();
  const isCorrect      = JSON.stringify(selected) === JSON.stringify(correctAnswers);
  mockState.answers[mockState.currentQ] = { selected: mockState.pending.slice(), correct: isCorrect };
  mockState.pending = [];
  // track in global progress
  progress.totalQAnswered++;
  if (isCorrect) progress.totalQCorrect++;
  saveProgress();
  renderMockQuestion();
}

function jumpMockQ(idx) {
  mockState.pending  = [];
  mockState.currentQ = idx;
  renderMockQuestion();
}

// ── Results ───────────────────────────────────────────────────
function finishMockTest(timedOut = false) {
  _stopMockTimer();
  const test   = MOCK_TESTS[mockState.testIdx];
  const qs     = test.data;
  const totalQ = qs.length;
  const correct = Object.values(mockState.answers).filter(a => a.correct).length;
  const pct    = Math.round(correct / totalQ * 100);
  const passed = pct >= 70;

  // Save to mock progress
  saveMockProgress({ testIdx: mockState.testIdx, score: correct, total: totalQ, pct, date: new Date().toLocaleDateString(), timed: mockState.useTimer });

  // Also push to main quiz results so progress dashboard sees it
  progress.quizResults.push({
    block: -1,               // -1 = mock test (not a quiz block)
    mockTestIdx: mockState.testIdx,
    mockTitle: test.title,
    score: correct,
    total: totalQ,
    date: new Date().toLocaleDateString(),
  });
  saveProgress();
  updateSidebarProgress();

  // Full question review
  const reviewHtml = qs.map((q, i) => {
    const a            = mockState.answers[i];
    const correctAnswers = Array.isArray(q.answer) ? q.answer : [q.answer];
    const isCorrect    = a && a.correct;
    return `
      <div class="review-item ${isCorrect ? 'review-correct' : 'review-wrong'}">
        <div class="review-q-header">
          <span class="review-num">Q${i+1}</span>
          <span class="review-verdict">${isCorrect ? '✓' : '✗'}</span>
        </div>
        <div class="review-q-text">${q.q}</div>
        ${!isCorrect ? `<div class="review-correct-ans">Correct: ${correctAnswers.map(ci => `<strong>${String.fromCharCode(65+ci)}. ${q.opts[ci]}</strong>`).join(', ')}</div>` : ''}
        <div class="review-exp">${q.explanation}</div>
      </div>`;
  }).join('');

  const area = document.getElementById('mock-area');
  area.innerHTML = `
    <div class="result-screen">
      ${timedOut ? `<div style="font-size:13px;color:var(--red);margin-bottom:12px;font-weight:600">⏰ Time's up! The test was automatically submitted.</div>` : ''}
      <div class="rs-score ${passed ? 'rs-pass' : 'rs-fail'}">${pct}%</div>
      <div class="rs-label ${passed ? 'rs-pass' : 'rs-fail'}">
        ${passed ? '🎉 Passed! Excellent work.' : '📚 Not yet — keep reviewing!'}
      </div>
      <div style="font-size:14px;color:var(--text2);margin-bottom:8px">
        ${correct}/${totalQ} correct · Passing threshold: 70%
      </div>
      <div style="font-size:13px;color:${passed?'var(--green)':'var(--amber)'};margin-bottom:24px">
        ${passed ? 'You are on track for the CIS-CSM certification!' : 'Review the incorrect answers below to improve.'}
      </div>
      <div class="quiz-controls" style="justify-content:center;margin-bottom:28px;gap:12px">
        <button class="btn-secondary" onclick="retakeMockTest()">↺ Retake this test</button>
        <button class="btn-primary" onclick="exitToMockGrid()">← All mock tests</button>
      </div>
      <div class="review-section">
        <div class="review-title">📋 Full Review — All ${totalQ} Questions</div>
        ${reviewHtml}
      </div>
    </div>`;
}

function retakeMockTest() {
  const testIdx = mockState.testIdx;
  _stopMockTimer();
  mockState = { testIdx, started: true, currentQ: 0, answers: {}, pending: [], useTimer: false, startTime: null, timedOut: false };
  // Show modal again so user can pick timer
  _pendingTestIdx = testIdx;
  _modalUseTimer  = false;
  const test   = MOCK_TESTS[testIdx];
  const qCount = test.data.length;
  document.getElementById('mm-title').textContent = test.title;
  document.getElementById('mm-meta').textContent  = `${qCount} questions · Passing: 70%`;
  document.getElementById('mm-notimer').classList.add('active');
  document.getElementById('mm-timer').classList.remove('active');
  mockState.started = false;
  renderMockTestGrid();
  // Re-open modal
  setTimeout(() => showMockStartModal(testIdx), 50);
}

function exitToMockGrid() {
  _resetMockState();
  renderMockTestGrid();
}
