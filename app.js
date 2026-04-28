/* ===== State ===== */
const state = {
  learned: JSON.parse(localStorage.getItem('gu_learned') || '{}'),
  xp: parseInt(localStorage.getItem('gu_xp') || '0'),
  achievements: JSON.parse(localStorage.getItem('gu_achievements') || '[]'),
  quizCount: parseInt(localStorage.getItem('gu_quizCount') || '0'),
  dailyLog: JSON.parse(localStorage.getItem('gu_dailyLog') || '{}'),
  currentView: 'home'
};
function todayKey() { return new Date().toISOString().slice(0,10); }
function getTodayLog() {
  const key = todayKey();
  if (!state.dailyLog[key]) state.dailyLog[key] = { xp:0, letters:0, quizzes:0, words:0 };
  return state.dailyLog[key];
}
function logDaily(field, amount) {
  const log = getTodayLog();
  log[field] = (log[field] || 0) + amount;
  save();
}
function save() {
  localStorage.setItem('gu_learned', JSON.stringify(state.learned));
  localStorage.setItem('gu_xp', String(state.xp));
  localStorage.setItem('gu_achievements', JSON.stringify(state.achievements));
  localStorage.setItem('gu_quizCount', String(state.quizCount));
  localStorage.setItem('gu_dailyLog', JSON.stringify(state.dailyLog));
}
function markLearned(key) {
  if (!state.learned[key]) {
    state.learned[key] = true;
    logDaily('letters', 1);
    addXP(5);
    if (Object.keys(state.learned).length === 1) unlock('first_letter');
    if (SWAR.every(s => state.learned['s_'+s.letter])) unlock('all_swar');
    if (ALL_VYANJAN.every(v => state.learned['v_'+v.letter])) unlock('all_vyanjan');
    if (NUMBERS.every(n => state.learned['n_'+n.gu])) unlock('all_numbers');
    save(); updateBadges();
  }
}
function addXP(amount) { state.xp += amount; logDaily('xp', amount); save(); updateXPBar(); showToast(`+${amount} XP ⭐`, 'xp'); }
function unlock(id) {
  if (!state.achievements.includes(id)) {
    state.achievements.push(id);
    const a = ACHIEVEMENTS.find(x => x.id === id);
    if (a) { addXP(a.xp); showToast(`🏆 ${a.title} unlocked!`, 'success'); triggerConfetti(); }
    save();
  }
}
function getLevel() { return Math.floor(state.xp / 100) + 1; }

/* ===== UI Helpers ===== */
function updateXPBar() {
  const lvl = getLevel(), xpInLvl = state.xp % 100;
  document.getElementById('xpFill').style.width = xpInLvl + '%';
  document.getElementById('xpCurrent').textContent = xpInLvl;
  document.getElementById('levelNum').textContent = lvl;
  const ml = document.getElementById('mobileLevelNum');
  if (ml) ml.textContent = lvl;
}
function updateBadges() {
  const sc = SWAR.filter(s => state.learned['s_'+s.letter]).length;
  const vc = ALL_VYANJAN.filter(v => state.learned['v_'+v.letter]).length;
  const nc = NUMBERS.filter(n => state.learned['n_'+n.gu]).length;
  document.getElementById('swarBadge').textContent = sc+'/13';
  document.getElementById('vyanjanBadge').textContent = vc+'/36';
  document.getElementById('numbersBadge').textContent = nc+'/10';
  const sp = document.getElementById('swarProgress');
  const vp = document.getElementById('vyanjanProgress');
  const np = document.getElementById('numbersProgress');
  if (sp) sp.style.width = (sc/13*100)+'%';
  if (vp) vp.style.width = (vc/36*100)+'%';
  if (np) np.style.width = (nc/10*100)+'%';
}
function showToast(msg, type='success') {
  const c = document.getElementById('toastContainer');
  const t = document.createElement('div');
  t.className = 'toast ' + type;
  t.textContent = msg;
  c.appendChild(t);
  setTimeout(() => { t.style.opacity = '0'; setTimeout(() => t.remove(), 300); }, 2500);
}
function speak(text) {
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = 'gu-IN'; u.rate = 0.8;
  const voices = speechSynthesis.getVoices();
  const guVoice = voices.find(v => v.lang.startsWith('gu'));
  if (guVoice) u.voice = guVoice;
  speechSynthesis.speak(u);
}

/* ===== Navigation ===== */
function switchView(viewName) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  const viewEl = document.getElementById(viewName + 'View');
  if (viewEl) { viewEl.classList.add('active'); state.currentView = viewName; }
  const navEl = document.querySelector(`.nav-item[data-view="${viewName}"]`);
  if (navEl) navEl.classList.add('active');
  document.getElementById('sidebar').classList.remove('open');
  // Render content
  if (viewName === 'swar') renderSwar('learn');
  else if (viewName === 'vyanjan') renderVyanjan('learn');
  else if (viewName === 'numbers') renderNumbers();
  else if (viewName === 'words') renderWords();
  else if (viewName === 'reading') renderReading();
  else if (viewName === 'quiz') renderQuizMenu();
  else if (viewName === 'progress') renderProgress();
}
document.getElementById('navMenu').addEventListener('click', e => {
  const item = e.target.closest('.nav-item');
  if (item) switchView(item.dataset.view);
});
document.querySelectorAll('.path-card').forEach(c => {
  c.addEventListener('click', () => switchView(c.dataset.target));
});
document.getElementById('hamburgerBtn')?.addEventListener('click', () => {
  document.getElementById('sidebar').classList.toggle('open');
});

/* ===== Carousel Builder ===== */
function buildCarousel(items, prefix, container) {
  let idx = 0;
  function render() {
    const item = items[idx];
    const key = prefix + item.letter;
    container.innerHTML = `
      <div class="learn-carousel">
        <div class="carousel-card">
          <div class="carousel-letter" onclick="speak('${item.word || item.letter}')">${item.letter}</div>
          <div class="carousel-transliteration">${item.trans}</div>
          <div class="carousel-emoji">${item.emoji || ''}</div>
          <div class="carousel-word">${item.word || ''}</div>
          <div class="carousel-meaning">${item.meaning || ''}</div>
          <button class="speak-btn" onclick="speak('${item.word || item.letter}')">🔊 Listen</button>
        </div>
        <div class="carousel-nav">
          <button class="carousel-btn" id="cPrev" ${idx===0?'disabled':''}>◀</button>
          <div class="carousel-dots">${items.map((_, i) =>
            `<span class="carousel-dot ${i===idx?'active':''} ${state.learned[prefix+items[i].letter]?'completed':''}" data-i="${i}"></span>`
          ).join('')}</div>
          <button class="carousel-btn" id="cNext" ${idx===items.length-1?'disabled':''}>▶</button>
        </div>
        <div class="carousel-counter">${idx+1} / ${items.length}</div>
      </div>`;
    markLearned(key);
    container.querySelector('#cPrev')?.addEventListener('click', () => { if(idx>0){idx--;render();} });
    container.querySelector('#cNext')?.addEventListener('click', () => { if(idx<items.length-1){idx++;render();} });
    container.querySelectorAll('.carousel-dot').forEach(d => {
      d.addEventListener('click', () => { idx = parseInt(d.dataset.i); render(); });
    });
  }
  render();
}

/* ===== Grid Builder ===== */
function buildGrid(items, prefix, container) {
  container.innerHTML = `<div class="letter-grid">${items.map(item => {
    const key = prefix + item.letter;
    return `<div class="grid-card ${state.learned[key]?'learned':''}" data-letter="${item.letter}" data-word="${item.word||''}" data-trans="${item.trans}">
      <div class="grid-letter">${item.letter}</div>
      <div class="grid-trans">${item.trans}</div>
      <div class="grid-word">${item.emoji||''} ${item.word||''}</div>
    </div>`;
  }).join('')}</div>`;
  container.querySelectorAll('.grid-card').forEach(c => {
    c.addEventListener('click', () => {
      const l = c.dataset.letter, w = c.dataset.word;
      speak(w || l);
      markLearned(prefix + l);
      c.classList.add('learned');
      showToast(`${l} — ${c.dataset.trans}`, 'success');
    });
  });
}

/* ===== Swar ===== */
function renderSwar(mode) {
  const container = document.getElementById('swarContent');
  document.getElementById('swarLearnBtn').classList.toggle('active', mode==='learn');
  document.getElementById('swarGridBtn').classList.toggle('active', mode==='grid');
  if (mode === 'learn') buildCarousel(SWAR, 's_', container);
  else buildGrid(SWAR, 's_', container);
}
document.getElementById('swarLearnBtn')?.addEventListener('click', () => renderSwar('learn'));
document.getElementById('swarGridBtn')?.addEventListener('click', () => renderSwar('grid'));

/* ===== Vyanjan ===== */
function renderVyanjan(mode) {
  const container = document.getElementById('vyanjanContent');
  document.getElementById('vyanjanLearnBtn').classList.toggle('active', mode==='learn');
  document.getElementById('vyanjanGridBtn').classList.toggle('active', mode==='grid');
  if (mode === 'learn') buildCarousel(ALL_VYANJAN, 'v_', container);
  else {
    container.innerHTML = VYANJAN_GROUPS.map(g => `
      <div class="consonant-group">
        <div class="group-title">${g.name}</div>
        <div class="letter-grid">${g.letters.map(item => {
          const key = 'v_' + item.letter;
          return `<div class="grid-card ${state.learned[key]?'learned':''}" data-letter="${item.letter}" data-word="${item.word}" data-trans="${item.trans}">
            <div class="grid-letter">${item.letter}</div>
            <div class="grid-trans">${item.trans}</div>
            <div class="grid-word">${item.emoji} ${item.word}</div>
          </div>`;
        }).join('')}</div>
      </div>`).join('');
    container.querySelectorAll('.grid-card').forEach(c => {
      c.addEventListener('click', () => {
        speak(c.dataset.word || c.dataset.letter);
        markLearned('v_' + c.dataset.letter);
        c.classList.add('learned');
      });
    });
  }
}
document.getElementById('vyanjanLearnBtn')?.addEventListener('click', () => renderVyanjan('learn'));
document.getElementById('vyanjanGridBtn')?.addEventListener('click', () => renderVyanjan('grid'));

/* ===== Numbers ===== */
function renderNumbers() {
  const container = document.getElementById('numbersContent');
  container.innerHTML = `<div class="letter-grid">${NUMBERS.map(n => {
    const key = 'n_' + n.gu;
    return `<div class="grid-card ${state.learned[key]?'learned':''}" data-gu="${n.gu}" data-word="${n.word}" data-trans="${n.trans}">
      <div class="grid-letter">${n.gu}</div>
      <div class="grid-trans">${n.en} — ${n.trans}</div>
      <div class="grid-word">${n.word}</div>
    </div>`;
  }).join('')}</div>`;
  container.querySelectorAll('.grid-card').forEach(c => {
    c.addEventListener('click', () => {
      speak(c.dataset.word);
      markLearned('n_' + c.dataset.gu);
      c.classList.add('learned');
    });
  });
}

/* ===== Words ===== */
let currentCat = Object.keys(WORD_CATEGORIES)[0];
function renderWords() {
  const tabs = document.getElementById('wordCategoryTabs');
  tabs.innerHTML = Object.keys(WORD_CATEGORIES).map(cat =>
    `<button class="cat-tab ${cat===currentCat?'active':''}" data-cat="${cat}">${cat}</button>`
  ).join('');
  tabs.querySelectorAll('.cat-tab').forEach(t => {
    t.addEventListener('click', () => { currentCat = t.dataset.cat; renderWords(); });
  });
  const container = document.getElementById('wordsContent');
  const words = WORD_CATEGORIES[currentCat];
  container.innerHTML = `<div class="word-grid">${words.map(w =>
    `<div class="word-card" data-word="${w.gu}">
      <div class="word-emoji">${w.emoji}</div>
      <div class="word-gu">${w.gu}</div>
      <div class="word-en">${w.en}</div>
      <div class="word-trans">${w.trans}</div>
    </div>`
  ).join('')}</div>`;
  container.querySelectorAll('.word-card').forEach(c => {
    c.addEventListener('click', () => { speak(c.dataset.word); });
  });
}

/* ===== Quiz ===== */
function renderQuizMenu() {
  document.getElementById('quizContent').innerHTML = `
    <div class="quiz-type-grid">
      <div class="quiz-type-card" data-quiz="swar">
        <div class="quiz-type-icon">🔤</div>
        <h3>Vowel Quiz</h3><p>Identify the vowels</p>
      </div>
      <div class="quiz-type-card" data-quiz="vyanjan">
        <div class="quiz-type-icon">📝</div>
        <h3>Consonant Quiz</h3><p>Identify the consonants</p>
      </div>
      <div class="quiz-type-card" data-quiz="number">
        <div class="quiz-type-icon">🔢</div>
        <h3>Number Quiz</h3><p>Match Gujarati numbers</p>
      </div>
      <div class="quiz-type-card" data-quiz="word">
        <div class="quiz-type-icon">💬</div>
        <h3>Word Quiz</h3><p>Today's daily words</p>
      </div>
      <div class="quiz-type-card" data-quiz="sentence">
        <div class="quiz-type-icon">📖</div>
        <h3>Sentence Quiz</h3><p>Translate sentences to English</p>
      </div>
    </div>`;
  document.querySelectorAll('.quiz-type-card').forEach(c => {
    c.addEventListener('click', () => startQuiz(c.dataset.quiz));
  });
}

function startQuiz(type) {
  state._lastQuizType = type;
  const day = getDayNumber();
  let questions = [];
  if (type === 'swar') {
    const pool = seededShuffle(SWAR.filter(s => s.word !== s.letter), day + 10);
    questions = pool.map(s => ({
      display: s.letter, correct: s.trans, isGu: true,
      options: shuffle([s.trans, ...getDistractors(s.trans, SWAR.map(x=>x.trans))]).slice(0,4)
    }));
  } else if (type === 'vyanjan') {
    const pool = seededShuffle(ALL_VYANJAN.filter(v => v.meaning !== v.letter), day + 20);
    questions = pool.map(v => ({
      display: v.letter, correct: v.trans, isGu: true,
      options: shuffle([v.trans, ...getDistractors(v.trans, ALL_VYANJAN.map(x=>x.trans))]).slice(0,4)
    }));
  } else if (type === 'number') {
    const pool = seededShuffle(NUMBERS, day + 30);
    questions = pool.map(n => ({
      display: n.gu, correct: n.en + ' (' + n.trans + ')', isGu: true,
      options: shuffle([n.en+' ('+n.trans+')', ...getDistractors(n.en+' ('+n.trans+')', NUMBERS.map(x=>x.en+' ('+x.trans+')'))]).slice(0,4)
    }));
  } else if (type === 'word') {
    const dailyWords = getDailyWords().flatMap(g => g.words);
    const allPool = ALL_READING_WORDS.map(x => x.en);
    questions = seededShuffle(dailyWords, day + 40).map(w => ({
      display: w.gu, correct: w.en, isGu: true,
      options: shuffle([w.en, ...getDistractors(w.en, allPool)]).slice(0,4)
    }));
  } else if (type === 'sentence') {
    const { sentences } = getDailySentences();
    const allPool = ALL_SENTENCES.map(x => x.en);
    questions = seededShuffle(sentences, day + 50).map(s => ({
      display: s.gu, correct: s.en, isGu: true, prompt: 'What does this sentence mean?',
      options: shuffle([s.en, ...getDistractors(s.en, allPool)]).slice(0,4)
    }));
  }
  questions = questions.slice(0, 10);
  runQuiz(questions, type);
}

function getDistractors(correct, pool) {
  return shuffle(pool.filter(x => x !== correct)).slice(0, 3);
}
function shuffle(arr) { const a = [...arr]; for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];} return a; }

function runQuiz(questions, quizType) {
  let qi = 0, score = 0, streak = 0;
  const container = document.getElementById('quizContent');
  const isSentence = quizType === 'sentence';

  function renderQ() {
    if (qi >= questions.length) { showResult(); return; }
    const q = questions[qi];
    const promptText = q.prompt || 'What is this?';
    const fontSize = isSentence ? 'font-size:1.8rem' : '';
    container.innerHTML = `
      <div class="quiz-area">
        <div class="quiz-score-bar"><span>Score: ${score}/${questions.length}</span><span>Q ${qi+1}/${questions.length}</span></div>
        <div class="quiz-progress-bar"><div class="quiz-progress-fill" style="width:${qi/questions.length*100}%"></div></div>
        <div class="quiz-question-card">
          <div class="quiz-prompt">${promptText}</div>
          <div class="quiz-letter" style="${q.isGu?'font-family:var(--font-gu);':''}${fontSize}">${q.display}</div>
        </div>
        <div class="quiz-options">${q.options.map(o =>
          `<button class="quiz-option" data-ans="${o}">${o}</button>`
        ).join('')}</div>
      </div>`;
    container.querySelectorAll('.quiz-option').forEach(btn => {
      btn.addEventListener('click', () => {
        const correct = btn.dataset.ans === q.correct;
        container.querySelectorAll('.quiz-option').forEach(b => {
          b.style.pointerEvents = 'none';
          if (b.dataset.ans === q.correct) b.classList.add('correct');
        });
        if (correct) { score++; streak++; btn.classList.add('correct'); addXP(10);
          if (streak >= 3) unlock('streak_3');
        } else { btn.classList.add('wrong'); streak = 0; }
        setTimeout(() => { qi++; renderQ(); }, 1000);
      });
    });
  }

  function showResult() {
    state.quizCount++; logDaily('quizzes', 1); save();
    if (state.quizCount >= 5) unlock('quiz_5');
    if (score === questions.length) { unlock('quiz_perfect'); triggerConfetti(); }
    const pct = Math.round(score/questions.length*100);
    const emoji = pct === 100 ? '🏆' : pct >= 70 ? '🌟' : pct >= 50 ? '👍' : '💪';
    const msg = pct === 100 ? 'Perfect! Amazing!' : pct >= 70 ? 'Great job!' : pct >= 50 ? 'Good effort!' : 'Keep practicing!';
    container.innerHTML = `
      <div class="quiz-result">
        <div class="result-emoji">${emoji}</div>
        <div class="result-score">${score} / ${questions.length}</div>
        <div class="result-msg">${msg}</div>
        <button class="quiz-again-btn" onclick="startQuiz('${state._lastQuizType||'swar'}')">🔄 Try Again</button>
        <button class="quiz-back-btn" onclick="renderQuizMenu()">← Back to Quizzes</button>
      </div>`;
    if (pct >= 70) triggerConfetti();
  }
  renderQ();
}

/* ===== Progress ===== */
function getStreak() {
  let streak = 0;
  const d = new Date();
  // Check if today has activity — if so count it, otherwise start from yesterday
  const todayStr = todayKey();
  const todayHasActivity = state.dailyLog[todayStr] && (state.dailyLog[todayStr].xp > 0 || state.dailyLog[todayStr].letters > 0 || state.dailyLog[todayStr].quizzes > 0);
  if (!todayHasActivity) d.setDate(d.getDate() - 1);
  while (true) {
    const key = d.toISOString().slice(0,10);
    const log = state.dailyLog[key];
    if (log && (log.xp > 0 || log.letters > 0 || log.quizzes > 0)) {
      streak++;
      d.setDate(d.getDate() - 1);
    } else break;
  }
  return streak;
}

function renderProgress() {
  const sc = SWAR.filter(s => state.learned['s_'+s.letter]).length;
  const vc = ALL_VYANJAN.filter(v => state.learned['v_'+v.letter]).length;
  const nc = NUMBERS.filter(n => state.learned['n_'+n.gu]).length;
  const container = document.getElementById('progressContent');
  const streak = getStreak();
  const todayLog = getTodayLog();

  // Build 30-day calendar
  const calendarDays = [];
  for (let i = 29; i >= 0; i--) {
    const d = new Date(); d.setDate(d.getDate() - i);
    const key = d.toISOString().slice(0,10);
    const log = state.dailyLog[key];
    const active = log && (log.xp > 0 || log.letters > 0 || log.quizzes > 0);
    const xp = log ? (log.xp || 0) : 0;
    const level = xp === 0 ? 0 : xp < 20 ? 1 : xp < 50 ? 2 : 3;
    const dayLabel = d.toLocaleDateString('en-US', { weekday:'short' }).charAt(0);
    const dateNum = d.getDate();
    const isToday = key === todayKey();
    calendarDays.push({ key, active, level, dayLabel, dateNum, isToday, log });
  }

  // Build last 7 days detail
  const weekDays = [];
  for (let i = 6; i >= 0; i--) {
    const d = new Date(); d.setDate(d.getDate() - i);
    const key = d.toISOString().slice(0,10);
    const log = state.dailyLog[key] || { xp:0, letters:0, quizzes:0 };
    const label = d.toLocaleDateString('en-US', { weekday:'short', month:'short', day:'numeric' });
    weekDays.push({ label, ...log });
  }
  const maxXP = Math.max(1, ...weekDays.map(d => d.xp || 0));

  container.innerHTML = `
    <!-- Streak & Today -->
    <div class="daily-tracker-top">
      <div class="streak-card">
        <div class="streak-flame">${streak > 0 ? '🔥' : '❄️'}</div>
        <div class="streak-num">${streak}</div>
        <div class="streak-label">${streak === 1 ? 'Day' : 'Days'} Streak</div>
      </div>
      <div class="today-stats">
        <h3>📅 Today's Activity</h3>
        <div class="today-stats-grid">
          <div class="today-stat"><span class="ts-value">${todayLog.xp || 0}</span><span class="ts-label">XP Earned</span></div>
          <div class="today-stat"><span class="ts-value">${todayLog.letters || 0}</span><span class="ts-label">Letters</span></div>
          <div class="today-stat"><span class="ts-value">${todayLog.quizzes || 0}</span><span class="ts-label">Quizzes</span></div>
        </div>
      </div>
    </div>

    <!-- 30-Day Calendar -->
    <div class="calendar-section">
      <h3>📆 Last 30 Days</h3>
      <div class="activity-calendar">${calendarDays.map(d => `
        <div class="cal-day level-${d.level} ${d.isToday?'today':''}" title="${d.key}: ${d.log ? (d.log.xp||0)+' XP' : 'No activity'}">
          <div class="cal-date">${d.dateNum}</div>
        </div>`).join('')}
      </div>
      <div class="cal-legend">
        <span>Less</span>
        <div class="cal-day-sm level-0"></div>
        <div class="cal-day-sm level-1"></div>
        <div class="cal-day-sm level-2"></div>
        <div class="cal-day-sm level-3"></div>
        <span>More</span>
      </div>
    </div>

    <!-- Weekly Bar Chart -->
    <div class="weekly-section">
      <h3>📊 This Week's XP</h3>
      <div class="weekly-chart">${weekDays.map(d => `
        <div class="week-bar-col">
          <div class="week-bar-val">${d.xp || 0}</div>
          <div class="week-bar-track"><div class="week-bar-fill" style="height:${Math.max(4, ((d.xp||0)/maxXP)*100)}%"></div></div>
          <div class="week-bar-label">${d.label.split(',')[0]}</div>
        </div>`).join('')}
      </div>
    </div>

    <!-- Overall Stats -->
    <div class="progress-stats">
      <div class="stat-card"><div class="stat-value" style="color:var(--saffron)">${sc}/13</div><div class="stat-label">Vowels Learned</div></div>
      <div class="stat-card"><div class="stat-value" style="color:var(--purple)">${vc}/36</div><div class="stat-label">Consonants Learned</div></div>
      <div class="stat-card"><div class="stat-value" style="color:var(--teal)">${nc}/10</div><div class="stat-label">Numbers Learned</div></div>
      <div class="stat-card"><div class="stat-value" style="color:var(--gold)">Lv.${getLevel()}</div><div class="stat-label">${state.xp} Total XP</div></div>
    </div>
    <h3 style="text-align:center;margin-bottom:16px">🏆 Achievements</h3>
    <div class="achievements-grid">${ACHIEVEMENTS.map(a => {
      const unlocked = state.achievements.includes(a.id);
      return `<div class="achievement-card ${unlocked?'':'locked'}">
        <div class="achievement-icon">${a.icon}</div>
        <h4>${a.title}</h4><p>${a.desc}</p>
      </div>`;
    }).join('')}</div>
    <button class="reset-btn" id="resetProgressBtn">🗑️ Reset Progress</button>`;
  document.getElementById('resetProgressBtn').addEventListener('click', resetAllProgress);
}

function resetAllProgress() {
  // Show custom confirmation modal instead of native confirm()
  const overlay = document.createElement('div');
  overlay.className = 'reset-overlay';
  overlay.innerHTML = `
    <div class="reset-modal">
      <div class="reset-modal-icon">⚠️</div>
      <h3>Reset All Progress?</h3>
      <p>This will clear all learned letters, XP, and achievements. This cannot be undone.</p>
      <div class="reset-modal-btns">
        <button class="reset-modal-cancel" id="resetCancel">Cancel</button>
        <button class="reset-modal-confirm" id="resetConfirm">Yes, Reset</button>
      </div>
    </div>`;
  document.body.appendChild(overlay);
  requestAnimationFrame(() => overlay.classList.add('visible'));
  document.getElementById('resetCancel').addEventListener('click', () => {
    overlay.classList.remove('visible');
    setTimeout(() => overlay.remove(), 300);
  });
  document.getElementById('resetConfirm').addEventListener('click', () => {
    localStorage.removeItem('gu_learned');
    localStorage.removeItem('gu_xp');
    localStorage.removeItem('gu_achievements');
    localStorage.removeItem('gu_quizCount');
    localStorage.removeItem('gu_dailyLog');
    state.learned = {};
    state.xp = 0;
    state.achievements = [];
    state.quizCount = 0;
    state.dailyLog = {};
    updateXPBar();
    updateBadges();
    overlay.classList.remove('visible');
    setTimeout(() => overlay.remove(), 300);
    renderProgress();
    showToast('Progress reset! 🔄', 'success');
  });
}

/* ===== Reading (Words & Sentences) ===== */
let readingTab = 'words';
function renderReading() {
  const container = document.getElementById('readingContent');
  container.innerHTML = `
    <div class="view-mode-toggle" style="margin-bottom:24px">
      <button class="mode-btn ${readingTab==='words'?'active':''}" id="readWordsBtn">📖 Word Reading</button>
      <button class="mode-btn ${readingTab==='sentences'?'active':''}" id="readSentencesBtn">📝 Sentences</button>
    </div>
    <div id="readingInner"></div>`;
  document.getElementById('readWordsBtn').addEventListener('click', () => { readingTab='words'; renderReading(); });
  document.getElementById('readSentencesBtn').addEventListener('click', () => { readingTab='sentences'; renderReading(); });
  if (readingTab === 'words') renderReadingWords();
  else renderReadingSentences();
}

function renderReadingWords() {
  const inner = document.getElementById('readingInner');
  const dailyWords = getDailyWords();
  const today = new Date().toLocaleDateString('en-US', { weekday:'long', month:'long', day:'numeric' });
  inner.innerHTML = `
    <div class="daily-header">
      <div class="daily-badge">📅 Today's Words</div>
      <div class="daily-date">${today}</div>
      <p class="daily-hint">New words appear every day! Click any word to hear it.</p>
    </div>
    ${dailyWords.map(group => `
      <div class="consonant-group">
        <div class="group-title">${group.category}</div>
        <div class="word-grid">${group.words.map(w => `
          <div class="word-card reading-word-card" data-gu="${w.gu}">
            <div class="word-emoji">${w.emoji}</div>
            <div class="word-gu">${w.gu}</div>
            <div class="word-en">${w.en}</div>
            <div class="word-trans">${w.trans}</div>
          </div>`).join('')}
        </div>
      </div>`).join('')}`;
  inner.querySelectorAll('.reading-word-card').forEach(c => {
    c.addEventListener('click', () => {
      speak(c.dataset.gu);
      c.style.transform = 'scale(1.05)';
      setTimeout(() => c.style.transform = '', 300);
    });
  });
}

function renderReadingSentences() {
  const inner = document.getElementById('readingInner');
  const { setNum, sentences } = getDailySentences();
  const today = new Date().toLocaleDateString('en-US', { weekday:'long', month:'long', day:'numeric' });
  const themeName = SENTENCE_SET_NAMES[setNum] || 'Sentences';
  inner.innerHTML = `
    <div class="daily-header">
      <div class="daily-badge">${themeName} — Today's Theme</div>
      <div class="daily-date">${today}</div>
      <p class="daily-hint">A new theme with fresh sentences every day! Click to listen.</p>
    </div>
    <div class="sentences-list">${sentences.map((s, i) => `
      <div class="sentence-card" data-gu="${s.gu}" style="animation-delay:${i*0.05}s">
        <div class="sentence-number">${i+1}</div>
        <div class="sentence-body">
          <div class="sentence-gu">${s.gu}</div>
          <div class="sentence-trans">${s.trans}</div>
          <div class="sentence-en">${s.en}</div>
        </div>
        <button class="sentence-speak-btn" data-text="${s.gu}">🔊</button>
      </div>`).join('')}
    </div>`;
  inner.querySelectorAll('.sentence-card').forEach(c => {
    c.addEventListener('click', () => speak(c.dataset.gu));
  });
  inner.querySelectorAll('.sentence-speak-btn').forEach(b => {
    b.addEventListener('click', (e) => { e.stopPropagation(); speak(b.dataset.text); });
  });
}

/* ===== Confetti ===== */
function triggerConfetti() {
  const canvas = document.getElementById('confettiCanvas');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth; canvas.height = window.innerHeight;
  const particles = Array.from({length: 80}, () => ({
    x: Math.random() * canvas.width, y: -20,
    vx: (Math.random()-0.5)*6, vy: Math.random()*4+2,
    color: ['#FF6B35','#7B2D8E','#00B4D8','#FFD166','#06D6A0','#EF476F'][Math.floor(Math.random()*6)],
    size: Math.random()*6+3, life: 1
  }));
  let frame = 0;
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.x += p.vx; p.y += p.vy; p.vy += 0.1; p.life -= 0.008;
      if (p.life > 0) {
        ctx.globalAlpha = p.life;
        ctx.fillStyle = p.color;
        ctx.fillRect(p.x, p.y, p.size, p.size);
      }
    });
    ctx.globalAlpha = 1;
    frame++;
    if (frame < 120) requestAnimationFrame(animate);
    else ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
  animate();
}

/* ===== Init ===== */
window.addEventListener('DOMContentLoaded', () => {
  if (window.speechSynthesis) speechSynthesis.getVoices();
  updateXPBar(); updateBadges();
});

