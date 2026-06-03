const STATES = [

  {abbr:'AB', name:'Alberta', region:'Canada', country:'Canada', grid:[3, 1], codes:[368, 403, 568, 587, 780, 825]},
  {abbr:'BC', name:'British Columbia', region:'Canada', country:'Canada', grid:[2, 1], codes:[236, 250, 257, 604, 672, 778]},
  {abbr:'MB', name:'Manitoba', region:'Canada', country:'Canada', grid:[5, 1], codes:[204, 431, 584]},
  {abbr:'NB', name:'New Brunswick', region:'Canada', country:'Canada', grid:[10, 1], codes:[428, 506]},
  {abbr:'NL', name:'Newfoundland and Labrador', region:'Canada', country:'Canada', grid:[13, 1], codes:[709, 879]},
  {abbr:'NT', name:'Northwest Territories', region:'Canada', country:'Canada', grid:[3, 0], codes:[867]},
  {abbr:'NS', name:'Nova Scotia', region:'Canada', country:'Canada', grid:[12, 1], codes:[782, 851, 902]},
  {abbr:'NU', name:'Nunavut', region:'Canada', country:'Canada', grid:[5, 0], codes:[867]},
  {abbr:'ON', name:'Ontario', region:'Canada', country:'Canada', grid:[7, 1], codes:[226, 249, 289, 343, 365, 382, 387, 416, 437, 460, 519, 537, 548, 613, 647, 683, 705, 742, 753, 807, 905, 942]},
  {abbr:'PE', name:'Prince Edward Island', region:'Canada', country:'Canada', grid:[11, 1], codes:[782, 902]},
  {abbr:'QC', name:'Quebec', region:'Canada', country:'Canada', grid:[9, 1], codes:[263, 354, 367, 418, 438, 450, 468, 514, 579, 581, 819, 873]},
  {abbr:'SK', name:'Saskatchewan', region:'Canada', country:'Canada', grid:[4, 1], codes:[306, 474, 639]},
  {abbr:'YT', name:'Yukon', region:'Canada', country:'Canada', grid:[2, 0], codes:[867]},

  {abbr:'PR', name:'Puerto Rico', region:'U.S. territories', country:'United States', grid:[1, 8.5], codes:[787, 939]},
  {abbr:'GU', name:'Guam', region:'U.S. territories', country:'United States', grid:[3, 8.5], codes:[671]},
  {abbr:'AS', name:'American Samoa', region:'U.S. territories', country:'United States', grid:[5, 8.5], codes:[684]},
  {abbr:'MP', name:'Northern Mariana Islands', region:'U.S. territories', country:'United States', grid:[4, 8.5], codes:[670]},
  {abbr:'VI', name:'United States Virgin Islands', region:'U.S. territories', country:'United States', grid:[2, 8.5], codes:[340]},
  {abbr:'AL', name:'Alabama', region:'South', country:'United States', grid:[7, 6], codes:[205, 251, 256, 334, 483, 659, 938]},
  {abbr:'AK', name:'Alaska', region:'Pacific', country:'United States', grid:[1, 0], codes:[907]},
  {abbr:'AZ', name:'Arizona', region:'Mountain', country:'United States', grid:[2, 5], codes:[480, 520, 602, 623, 928]},
  {abbr:'AR', name:'Arkansas', region:'South', country:'United States', grid:[5, 5], codes:[327, 479, 501, 870]},
  {abbr:'CA', name:'California', region:'Pacific', country:'United States', grid:[1, 4], codes:[209, 213, 279, 310, 323, 341, 350, 357, 369, 408, 415, 424, 442, 510, 530, 559, 562, 619, 626, 628, 650, 657, 661, 669, 707, 714, 738, 747, 760, 805, 818, 820, 831, 837, 840, 858, 909, 916, 925, 949, 951]},
  {abbr:'CO', name:'Colorado', region:'Mountain', country:'United States', grid:[4, 4], codes:[303, 719, 720, 748, 970, 983]},
  {abbr:'CT', name:'Connecticut', region:'Northeast', country:'United States', grid:[12, 4], codes:[203, 475, 860, 959]},
  {abbr:'DE', name:'Delaware', region:'South', country:'United States', grid:[12, 5], codes:[302]},
  {abbr:'DC', name:'District of Columbia', region:'South', country:'United States', grid:[13, 5], codes:[202, 771], isDc:true},
  {abbr:'FL', name:'Florida', region:'South', country:'United States', grid:[9, 7], codes:[239, 305, 321, 324, 352, 386, 407, 448, 561, 645, 656, 689, 727, 728, 754, 772, 786, 813, 850, 863, 904, 941, 954]},
  {abbr:'GA', name:'Georgia', region:'South', country:'United States', grid:[8, 6], codes:[229, 404, 470, 478, 678, 706, 762, 770, 912, 943]},
  {abbr:'HI', name:'Hawaii', region:'Pacific', country:'United States', grid:[2, 7], codes:[808]},
  {abbr:'ID', name:'Idaho', region:'Mountain', country:'United States', grid:[2, 2], codes:[208, 986]},
  {abbr:'IL', name:'Illinois', region:'Midwest', country:'United States', grid:[7, 3], codes:[217, 224, 309, 312, 331, 447, 464, 618, 630, 708, 730, 773, 779, 815, 847, 861, 872]},
  {abbr:'IN', name:'Indiana', region:'Midwest', country:'United States', grid:[8, 3], codes:[219, 260, 317, 463, 574, 765, 812, 930]},
  {abbr:'IA', name:'Iowa', region:'Midwest', country:'United States', grid:[6, 3], codes:[319, 515, 563, 641, 712]},
  {abbr:'KS', name:'Kansas', region:'Midwest', country:'United States', grid:[5, 4], codes:[316, 620, 785, 913]},
  {abbr:'KY', name:'Kentucky', region:'South', country:'United States', grid:[8, 4], codes:[270, 364, 502, 606, 859]},
  {abbr:'LA', name:'Louisiana', region:'South', country:'United States', grid:[5, 6], codes:[225, 318, 337, 457, 504, 985]},
  {abbr:'ME', name:'Maine', region:'Northeast', country:'United States', grid:[12, 3], codes:[207]},
  {abbr:'MD', name:'Maryland', region:'South', country:'United States', grid:[11, 5], codes:[227, 240, 301, 410, 443, 667]},
  {abbr:'MA', name:'Massachusetts', region:'Northeast', country:'United States', grid:[12, 2], codes:[339, 351, 413, 508, 617, 774, 781, 857, 978]},
  {abbr:'MI', name:'Michigan', region:'Midwest', country:'United States', grid:[8, 2], codes:[231, 248, 269, 313, 517, 586, 616, 679, 734, 810, 906, 947, 989]},
  {abbr:'MN', name:'Minnesota', region:'Midwest', country:'United States', grid:[5, 2], codes:[218, 320, 507, 612, 651, 763, 924, 952]},
  {abbr:'MS', name:'Mississippi', region:'South', country:'United States', grid:[6, 6], codes:[228, 471, 601, 662, 769]},
  {abbr:'MO', name:'Missouri', region:'Midwest', country:'United States', grid:[6, 4], codes:[235, 314, 417, 557, 573, 636, 660, 816, 975]},
  {abbr:'MT', name:'Montana', region:'Mountain', country:'United States', grid:[3, 2], codes:[406]},
  {abbr:'NE', name:'Nebraska', region:'Midwest', country:'United States', grid:[5, 3], codes:[308, 402, 531]},
  {abbr:'NV', name:'Nevada', region:'Mountain', country:'United States', grid:[2, 4], codes:[702, 725, 775]},
  {abbr:'NH', name:'New Hampshire', region:'Northeast', country:'United States', grid:[11, 2], codes:[603]},
  {abbr:'NJ', name:'New Jersey', region:'Northeast', country:'United States', grid:[11, 4], codes:[201, 551, 609, 640, 732, 848, 856, 862, 908, 973]},
  {abbr:'NM', name:'New Mexico', region:'Mountain', country:'United States', grid:[3, 5], codes:[505, 575]},
  {abbr:'NY', name:'New York', region:'Northeast', country:'United States', grid:[10, 2], codes:[212, 315, 329, 332, 347, 363, 516, 518, 585, 607, 624, 631, 646, 680, 716, 718, 838, 845, 914, 917, 929, 934]},
  {abbr:'NC', name:'North Carolina', region:'South', country:'United States', grid:[9, 5], codes:[252, 336, 472, 704, 743, 828, 910, 919, 980, 984]},
  {abbr:'ND', name:'North Dakota', region:'Midwest', country:'United States', grid:[4, 2], codes:[701]},
  {abbr:'OH', name:'Ohio', region:'Midwest', country:'United States', grid:[9, 3], codes:[216, 220, 234, 283, 326, 330, 380, 419, 436, 440, 513, 567, 614, 740, 937]},
  {abbr:'OK', name:'Oklahoma', region:'South', country:'United States', grid:[4, 5], codes:[405, 539, 572, 580, 918]},
  {abbr:'OR', name:'Oregon', region:'Pacific', country:'United States', grid:[1, 3], codes:[458, 503, 541, 971]},
  {abbr:'PA', name:'Pennsylvania', region:'Northeast', country:'United States', grid:[10, 3], codes:[215, 223, 267, 272, 412, 445, 484, 570, 582, 610, 717, 724, 814, 835, 878]},
  {abbr:'RI', name:'Rhode Island', region:'Northeast', country:'United States', grid:[13, 3], codes:[401]},
  {abbr:'SC', name:'South Carolina', region:'South', country:'United States', grid:[8, 5], codes:[803, 821, 839, 843, 854, 864]},
  {abbr:'SD', name:'South Dakota', region:'Midwest', country:'United States', grid:[4, 3], codes:[605]},
  {abbr:'TN', name:'Tennessee', region:'South', country:'United States', grid:[7, 5], codes:[423, 615, 629, 729, 731, 865, 901, 931]},
  {abbr:'TX', name:'Texas', region:'South', country:'United States', grid:[4, 7], codes:[210, 214, 254, 281, 325, 346, 361, 409, 430, 432, 469, 512, 621, 682, 713, 726, 737, 806, 817, 830, 832, 903, 915, 936, 940, 945, 956, 972, 979]},
  {abbr:'UT', name:'Utah', region:'Mountain', country:'United States', grid:[3, 4], codes:[385, 435, 801]},
  {abbr:'VT', name:'Vermont', region:'Northeast', country:'United States', grid:[11, 3], codes:[802]},
  {abbr:'VA', name:'Virginia', region:'South', country:'United States', grid:[10, 5], codes:[276, 434, 540, 571, 686, 703, 757, 804, 826, 948]},
  {abbr:'WA', name:'Washington', region:'Pacific', country:'United States', grid:[1, 2], codes:[206, 253, 360, 425, 509, 564]},
  {abbr:'WV', name:'West Virginia', region:'South', country:'United States', grid:[10, 4], codes:[304, 681]},
  {abbr:'WI', name:'Wisconsin', region:'Midwest', country:'United States', grid:[6, 2], codes:[262, 274, 353, 414, 534, 608, 715, 920]},
  {abbr:'WY', name:'Wyoming', region:'Mountain', country:'United States', grid:[3, 3], codes:[307]}
];

const STORAGE_KEY = 'area-code-quiz-v18';

const els = {
  areaCode: document.getElementById('areaCode'),
  correctCount: document.getElementById('correctCount'),
  totalCount: document.getElementById('totalCount'),
  accuracy: document.getElementById('accuracy'),
  streak: document.getElementById('streak'),
  timeLeft: document.getElementById('timeLeft'),
  remainingCount: document.getElementById('remainingCount'),
  feedback: document.getElementById('feedback'),
  hintButton: document.getElementById('hintButton'),
  answerButton: document.getElementById('answerButton'),
  nextButton: document.getElementById('nextButton'),
  startTimeAttack: document.getElementById('startTimeAttack'),
  giveUpButton: document.getElementById('giveUpButton'),
  tweetResult: document.getElementById('tweetResult'),
  resetStreak: document.getElementById('resetStreak'),
  tweetStats: document.getElementById('tweetStats'),
  resetStats: document.getElementById('resetStats'),
  giveUpDialog: document.getElementById('giveUpDialog'),
  giveUpDialogTitle: document.getElementById('giveUpDialogTitle'),
  giveUpDialogText: document.getElementById('giveUpDialogText'),
  cancelGiveUp: document.getElementById('cancelGiveUp'),
  confirmGiveUp: document.getElementById('confirmGiveUp'),
  tweetGiveUp: document.getElementById('tweetGiveUp'),
  closeGiveUpDialog: document.getElementById('closeGiveUpDialog'),
  regionSelect: document.getElementById('regionSelect'),
  modeSelect: document.getElementById('modeSelect'),
  map: document.getElementById('usTileMap'),
  shortcutHelp: document.querySelector('.shortcut-help'),
};

let state = loadState();
let current = null;
let answered = false;
let hintLevel = 0;
let timeTimer = null;
let timeRun = freshTimeRun();

function defaultState() {
  return {correct:0,total:0,streak:0,best:0,progress:{},timeBest:null};
}

function freshTimeRun() {
  return {
    active:false,
    started:false,
    correct:0,
    total:0,
    streak:0,
    bestStreak:0,
    startAt:0,
    elapsed:0,
    queue:[],
    current:null,
    finished:false,
    gaveUp:false,
    totalProblems:0,
    remainingAtEnd:null
  };
}

function loadState() {
  try {
    return {...defaultState(), ...(JSON.parse(localStorage.getItem(STORAGE_KEY)) || {})};
  } catch {
    return defaultState();
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function isTimeMode() {
  return els.modeSelect.value === 'time';
}

function codeIsFamous(code) {
  const s = String(code);
  return s.length === 3 && s[1] === '0';
}

function getActiveStates() {
  if (isTimeMode()) return STATES;
  const selected = els.regionSelect.value;
  return STATES.filter(s => {
    if (selected === 'all') return true;
    if (selected === 'usa') return s.country === 'United States' && s.region !== 'U.S. territories';
    return s.region === selected;
  });
}

function allProblems() {
  const byCode = new Map();
  for (const s of getActiveStates()) {
    for (const code of s.codes) {
      if (!byCode.has(code)) byCode.set(code, {code, state:s, states:[]});
      byCode.get(code).states.push(s);
    }
  }
  return Array.from(byCode.values());
}

function correctStates(problem=current) {
  if (!problem) return [];
  return problem.states && problem.states.length ? problem.states : [problem.state];
}

function correctNames(problem=current) {
  return correctStates(problem).map(s => s.name).join(' / ');
}

function isCorrectSelection(selected) {
  return selected && current && correctStates().some(s => s.abbr === selected.abbr);
}

function progressFor(code) {
  return state.progress[String(code)] || {attempts:0, misses:0, score:0, last:0};
}

function setProgress(code, next) {
  state.progress[String(code)] = next;
}

function getPool() {
  const base = allProblems();
  const mode = els.modeSelect.value;
  if (mode === 'review') {
    return base.filter(p => progressFor(p.code).score > 0 || progressFor(p.code).misses > 0);
  }
  if (mode === 'famous') {
    return base.filter(p => codeIsFamous(p.code));
  }
  return base;
}

function weightedPick(pool) {
  if (!pool.length) return null;
  const weighted = pool.map(p => {
    const pr = progressFor(p.code);
    const weakBonus = els.modeSelect.value === 'weak' ? Math.min(7, pr.score * 2 + pr.misses) : 0;
    return {p, weight: 1 + weakBonus};
  });
  const total = weighted.reduce((sum, x) => sum + x.weight, 0);
  let r = Math.random() * total;
  for (const item of weighted) {
    r -= item.weight;
    if (r <= 0) return item.p;
  }
  return weighted[weighted.length - 1].p;
}

function nextQuestion() {
  if (isTimeMode()) {
    nextTimeAttackQuestion();
    return;
  }

  const pool = getPool();
  if (!pool.length) {
    current = null;
    answered = false;
    hintLevel = 0;
    els.areaCode.textContent = '---';
    showFeedback('warn', els.modeSelect.value === 'review' ? 'No review items' : 'No questions');
    updateHighlights();
    updateStats();
    updateActions();
    return;
  }

  let picked = weightedPick(pool);
  if (current && pool.length > 1) {
    let guard = 0;
    while (picked && picked.code === current.code && guard++ < 8) picked = weightedPick(pool);
  }

  current = picked;
  answered = false;
  hintLevel = 0;
  els.areaCode.textContent = current.code;
  showFeedback('neutral', '');
  updateHighlights();
  updateStats();
  updateActions();
}

function answer(abbr) {
  if (isTimeMode()) {
    answerTimeAttack(abbr);
    return;
  }
  if (!current || answered) return;

  const selected = STATES.find(s => s.abbr === abbr);
  if (!selected) return;

  answered = true;
  const ok = isCorrectSelection(selected);
  recordProgress(current.code, ok);


  if (ok) {
    state.correct += 1;
    state.streak += 1;
    state.best = Math.max(state.best, state.streak);
  } else {
    state.streak = 0;
  }
  state.total += 1;

  saveState();
  updateStats();
  showResult(ok, selected);
  updateHighlights(selected.abbr);
  updateActions();
}

function recordProgress(code, ok) {
  const pr = progressFor(code);
  pr.attempts += 1;
  pr.last = Date.now();
  if (ok) {
    pr.score = Math.max(0, pr.score - 1);
  } else {
    pr.misses += 1;
    pr.score = Math.min(9, pr.score + 2);
  }
  setProgress(code, pr);
}

function recordTimeAnswer(ok) {
  timeRun.total += 1;
  if (ok) {
    timeRun.correct += 1;
    timeRun.streak += 1;
    timeRun.bestStreak = Math.max(timeRun.bestStreak, timeRun.streak);
  } else {
    timeRun.streak = 0;
  }
}

function buildTimeAttackQueue() {
  return allProblems().sort(() => Math.random() - 0.5);
}

function getTimeRemaining() {
  if (timeRun.active) return timeRun.queue.length + (current && !answered ? 1 : 0);
  if (timeRun.remainingAtEnd !== null) return timeRun.remainingAtEnd;
  if (timeRun.started) return 0;
  return '—';
}

function nextTimeAttackQuestion() {
  if (!timeRun.active) {
    current = null;
    answered = false;
    hintLevel = 0;
    els.areaCode.textContent = timeRun.gaveUp ? 'Give Up' : (timeRun.finished ? 'Done' : '---');
    if (!timeRun.finished) showFeedback('neutral', '');
    updateHighlights();
    updateStats();
    updateActions();
    return;
  }

  if (!timeRun.queue.length) {
    endTimeAttack();
    return;
  }

  current = timeRun.queue.shift();
  timeRun.current = current;
  answered = false;
  hintLevel = 0;
  els.areaCode.textContent = current.code;
  showFeedback('neutral', '');
  updateHighlights();
  updateStats();
  updateActions();
}

function answerTimeAttack(abbr) {
  if (!timeRun.active || !current || answered) return;

  const selected = STATES.find(s => s.abbr === abbr);
  if (!selected) return;

  answered = true;
  const ok = isCorrectSelection(selected);
  recordProgress(current.code, ok);
  recordTimeAnswer(ok);

  if (ok) {
    updateHighlights(selected.abbr, true);
  } else {
    timeRun.queue.push(current);
    updateHighlights(selected.abbr, false);
  }

  saveState();
  updateStats();
  window.setTimeout(() => {
    if (timeRun.active) nextTimeAttackQuestion();
  }, ok ? 220 : 360);
}

function showResult(ok, selected) {
  showFeedback(ok ? 'good' : 'bad', '');
}

function showHint() {
  if (!current || answered || isTimeMode()) return;
  hintLevel = 1;
  showFeedback('neutral', '');
  updateHighlights();
}

function revealAnswer() {
  if (!current || answered || isTimeMode()) return;
  answered = true;
  recordProgress(current.code, false);
  state.total += 1;
  state.streak = 0;
  saveState();
  updateStats();
  showFeedback('warn', '');
  updateHighlights(current.state.abbr);
  updateActions();
}

function showFeedback(type, html) {
  els.feedback.className = `feedback ${type}`;
  els.feedback.innerHTML = html;
}

function updateStats() {
  const timeStat = document.querySelector('.time-stat');
  const remainingStat = document.querySelector('.remaining-stat');
  if (isTimeMode()) {
    els.correctCount.textContent = timeRun.correct;
    els.totalCount.textContent = timeRun.total;
    els.accuracy.textContent = timeRun.total ? `${Math.round(timeRun.correct / timeRun.total * 100)}%` : '—';
    els.streak.textContent = `${timeRun.streak} / ${timeRun.bestStreak}`;
    els.timeLeft.textContent = formatElapsed(timeRun.elapsed);
    els.remainingCount.textContent = getTimeRemaining();
    timeStat?.classList.remove('hidden');
    remainingStat?.classList.remove('hidden');
    return;
  }
  els.correctCount.textContent = state.correct;
  els.totalCount.textContent = state.total;
  els.accuracy.textContent = state.total ? `${Math.round(state.correct / state.total * 100)}%` : '—';
  els.streak.textContent = `${state.streak} / ${state.best}`;
  timeStat?.classList.add('hidden');
  remainingStat?.classList.add('hidden');
}

function updateActions() {
  const time = isTimeMode();
  const runningTimeAttack = timeRun.active;
  els.regionSelect.disabled = time || runningTimeAttack;
  els.modeSelect.disabled = runningTimeAttack;
  if (time) els.regionSelect.value = 'all';
  els.hintButton.classList.toggle('hidden', time);
  els.answerButton.classList.toggle('hidden', time);
  els.nextButton.classList.toggle('hidden', time);
  els.nextButton.disabled = time || !current || !answered;
  els.startTimeAttack.classList.toggle('hidden', !time || timeRun.active);
  els.giveUpButton.classList.toggle('hidden', !time || !timeRun.active);
  els.tweetStats.classList.toggle('hidden', time);
  els.resetStreak.classList.toggle('hidden', time);
  els.resetStats.classList.toggle('hidden', time);
  els.tweetResult.classList.add('hidden');
  els.shortcutHelp?.classList.toggle('hidden', runningTimeAttack);
}

function advanceIfReady() {
  if (isTimeMode()) return;
  if (!current || !answered) return;
  nextQuestion();
}

function formatElapsed(ms) {
  return (Math.max(0, ms) / 1000).toFixed(1);
}

function splitName(name) {
  const custom = {
    'District of Columbia': ['District', 'of Columbia'],
    'British Columbia': ['British', 'Columbia'],
    'New Brunswick': ['New', 'Brunswick'],
    'Newfoundland and Labrador': ['Newfoundland', 'and', 'Labrador'],
    'Northwest Territories': ['Northwest', 'Territories'],
    'Nova Scotia': ['Nova', 'Scotia'],
    'Prince Edward Island': ['Prince Edward', 'Island'],
    'Northern Mariana Islands': ['Northern', 'Mariana', 'Islands'],
    'United States Virgin Islands': ['United States', 'Virgin', 'Islands'],
    'American Samoa': ['American', 'Samoa'],
    'Puerto Rico': ['Puerto', 'Rico'],
    'North Carolina': ['North', 'Carolina'],
    'South Carolina': ['South', 'Carolina'],
    'North Dakota': ['North', 'Dakota'],
    'South Dakota': ['South', 'Dakota'],
    'West Virginia': ['West', 'Virginia'],
    'New Hampshire': ['New', 'Hampshire'],
    'New Jersey': ['New', 'Jersey'],
    'New Mexico': ['New', 'Mexico'],
    'New York': ['New', 'York'],
    'Rhode Island': ['Rhode', 'Island']
  };
  if (custom[name]) return custom[name];
  const parts = name.split(' ');
  if (name.length <= 10) return [name];
  if (parts.length === 2) return parts;
  if (parts.length === 3) return [parts[0], parts.slice(1).join(' ')];
  if (parts.length > 3) return [parts.slice(0, 2).join(' '), parts.slice(2).join(' ')];
  return [name];
}

function addWrappedStateName(textNode, name) {
  const lines = splitName(name);
  const y = Number(textNode.getAttribute('y'));
  const lineGap = 26;
  const startY = lines.length === 1 ? y : y - ((lines.length - 1) * lineGap) / 2;
  lines.forEach((line, index) => {
    const tspan = document.createElementNS('http://www.w3.org/2000/svg', 'tspan');
    tspan.setAttribute('x', textNode.getAttribute('x'));
    tspan.setAttribute('y', startY + index * lineGap);
    tspan.textContent = line;
    textNode.appendChild(tspan);
  });
}

function renderMap() {
  const tileW = 184;
  const tileH = 96;
  const gapX = 10;
  const gapY = 10;
  const originX = 18;
  const originY = 18;
  const minGx = Math.min(...STATES.map(s => s.grid[0]));
  const minGy = Math.min(...STATES.map(s => s.grid[1]));
  const maxGx = Math.max(...STATES.map(s => s.grid[0]));
  const maxGy = Math.max(...STATES.map(s => s.grid[1]));
  const cols = maxGx - minGx + 1;
  const rows = maxGy - minGy + 1;
  const svgW = originX * 2 + cols * tileW + (cols - 1) * gapX + 18;
  const svgH = originY * 2 + rows * tileH + (rows - 1) * gapY;

  els.map.setAttribute('viewBox', `0 0 ${svgW} ${svgH}`);
  els.map.innerHTML = '';

  const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
  defs.innerHTML = `
    <pattern id="correctPattern" patternUnits="userSpaceOnUse" width="14" height="14">
      <rect width="14" height="14" fill="#e7f3fb"></rect>
      <path d="M-4 14 L14 -4 M0 18 L18 0" stroke="#0072b2" stroke-width="3" opacity="0.55"></path>
    </pattern>
    <pattern id="wrongPattern" patternUnits="userSpaceOnUse" width="14" height="14">
      <rect width="14" height="14" fill="#fae8dc"></rect>
      <path d="M-4 0 L14 18 M0 -4 L18 14" stroke="#d55e00" stroke-width="3" opacity="0.62"></path>
    </pattern>
  `;
  els.map.appendChild(defs);

  for (const s of STATES) {
    const [gx, gy] = s.grid;
    const sideGap = gx > minGx ? 18 : 0;
    const x = originX + (gx - minGx) * (tileW + gapX) + sideGap;
    const y = originY + (gy - minGy) * (tileH + gapY);
    const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    g.classList.add('state-tile');
    g.dataset.abbr = s.abbr;
    g.dataset.region = s.region;
    g.setAttribute('tabindex', '0');
    g.setAttribute('role', 'button');
    g.setAttribute('aria-label', s.name);

    const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    rect.setAttribute('x', x);
    rect.setAttribute('y', y);
    rect.setAttribute('width', tileW);
    rect.setAttribute('height', tileH);

    const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    text.setAttribute('x', x + tileW / 2);
    text.setAttribute('y', y + tileH / 2 + 1);
    text.classList.add('state-name');
    const lines = splitName(s.name);
    if (s.name.length > 15 || lines.length > 1) text.classList.add('small');
    if (s.name.length > 22 || lines.length > 2) text.classList.add('tiny');
    addWrappedStateName(text, s.name);

    const mark = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    mark.setAttribute('x', x + tileW - 24);
    mark.setAttribute('y', y + 25);
    mark.classList.add('result-mark');
    mark.setAttribute('aria-hidden', 'true');

    g.append(rect, text, mark);
    g.addEventListener('click', () => answer(s.abbr));
    g.addEventListener('keydown', ev => {
      if (ev.key === 'Enter') {
        ev.preventDefault();
        ev.stopPropagation();
        return;
      }
      if (ev.key === ' ') {
        ev.preventDefault();
        ev.stopPropagation();
        answer(s.abbr);
      }
    });
    els.map.appendChild(g);
  }
}

function updateHighlights(selectedAbbr=null, revealCorrect=true) {
  const activeStates = new Set(getActiveStates().map(s => s.abbr));
  const correctSet = new Set(correctStates().map(s => s.abbr));
  document.querySelectorAll('.state-tile').forEach(tile => {
    const abbr = tile.dataset.abbr;
    const s = STATES.find(x => x.abbr === abbr);
    const mark = tile.querySelector('.result-mark');
    tile.classList.remove('active-region', 'correct', 'wrong', 'dim');
    if (mark) mark.textContent = '';
    if (!activeStates.has(abbr)) tile.classList.add('dim');
    if (current && hintLevel > 0 && s && s.region === current.state.region) tile.classList.add('active-region');
    if (answered && revealCorrect && current && correctSet.has(abbr)) {
      tile.classList.add('correct');
      if (mark) mark.textContent = '✓';
    }
    if (answered && selectedAbbr && abbr === selectedAbbr && !correctSet.has(selectedAbbr)) {
      tile.classList.add('wrong');
      if (mark) mark.textContent = '×';
    }
  });
}


function resetAllStats() {
  if (!confirm('Reset all stats?')) return;
  stopTimeAttackTimer();
  state = defaultState();
  timeRun = freshTimeRun();
  saveState();
  updateStats();
  nextQuestion();
  updateActions();
}

function resetStreakStats() {
  if (!confirm('Reset streak stats?')) return;
  stopTimeAttackTimer();
  const progress = state.progress || {};
  state = {...defaultState(), progress};
  timeRun = freshTimeRun();
  saveState();
  updateStats();
  nextQuestion();
  updateActions();
}

function tweetStats() {
  const accuracy = state.total ? Math.round(state.correct / state.total * 100) : 0;
  const result = `Area Code Quiz: ${state.correct}/${state.total} correct, ${accuracy}% accuracy, current streak ${state.streak}, best streak ${state.best}`;
  const url = window.location.href.split('#')[0];
  const text = `${result}\n\n${url}`;
  const intent = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
  window.open(intent, '_blank', 'noopener,noreferrer');
}

function stopTimeAttackTimer() {
  if (timeTimer) window.clearInterval(timeTimer);
  timeTimer = null;
}

function startTimeAttack() {
  stopTimeAttackTimer();
  els.regionSelect.value = 'all';
  timeRun = freshTimeRun();
  timeRun.active = true;
  timeRun.started = true;
  timeRun.queue = buildTimeAttackQueue();
  timeRun.totalProblems = timeRun.queue.length;
  timeRun.startAt = Date.now();
  timeRun.elapsed = 0;
  showFeedback('neutral', '');
  updateStats();
  updateActions();
  nextTimeAttackQuestion();
  timeTimer = window.setInterval(tickTimeAttack, 100);
}

function tickTimeAttack() {
  if (!timeRun.active) return;
  timeRun.elapsed = Date.now() - timeRun.startAt;
  updateStats();
}

function endTimeAttack() {
  stopTimeAttackTimer();
  timeRun.active = false;
  timeRun.finished = true;
  timeRun.gaveUp = false;
  timeRun.elapsed = Date.now() - timeRun.startAt;
  timeRun.remainingAtEnd = 0;
  current = null;
  answered = true;
  const isNewBest = state.timeBest === null || timeRun.elapsed < state.timeBest;
  if (isNewBest) state.timeBest = timeRun.elapsed;
  saveState();
  els.areaCode.textContent = 'Done';
  showFeedback('neutral', '');
  updateHighlights();
  updateStats();
  updateActions();
  openTimeAttackResultDialog(isNewBest);
}

function timeAttackTweetText() {
  const accuracy = timeRun.total ? Math.round(timeRun.correct / timeRun.total * 100) : 0;
  if (timeRun.gaveUp) {
    const totalProblems = timeRun.totalProblems || (timeRun.correct + getTimeRemaining());
    const remaining = getTimeRemaining();
    return `Area Code Quiz Time Attack: gave up after ${formatElapsed(timeRun.elapsed)}s, ${timeRun.correct}/${totalProblems} completed, ${remaining} remaining, ${timeRun.total} attempts, ${accuracy}% accuracy`;
  }
  return `Area Code Quiz Time Attack: ${formatElapsed(timeRun.elapsed)}s, ${timeRun.total} attempts, ${accuracy}% accuracy`;
}

function timeAttackResultRows(isNewBest = false) {
  const accuracy = timeRun.total ? Math.round(timeRun.correct / timeRun.total * 100) : 0;
  const totalProblems = timeRun.totalProblems || (timeRun.correct + getTimeRemaining());
  const remaining = getTimeRemaining();
  const completed = Math.max(0, totalProblems - (Number.isFinite(remaining) ? remaining : 0));
  const rows = timeRun.gaveUp
    ? [
        ['Status', 'Give Up'],
        ['Time', `${formatElapsed(timeRun.elapsed)}s`],
        ['Completed', `${completed}/${totalProblems}`],
        ['Remaining', `${remaining}`],
        ['Attempts', `${timeRun.total}`],
        ['Accuracy', `${accuracy}%`]
      ]
    : [
        ['Status', 'Completed'],
        ['Time', `${formatElapsed(timeRun.elapsed)}s`],
        ['Attempts', `${timeRun.total}`],
        ['Accuracy', `${accuracy}%`]
      ];
  if (isNewBest) rows.push(['Best', 'New best time']);
  return rows;
}

function setDialogMessage(text) {
  els.giveUpDialogText.className = 'dialog-message';
  els.giveUpDialogText.textContent = text;
}

function setDialogResult(rows) {
  els.giveUpDialogText.className = 'dialog-message result-summary';
  els.giveUpDialogText.replaceChildren();
  for (const [label, value] of rows) {
    const row = document.createElement('div');
    row.className = 'result-row';
    const key = document.createElement('span');
    key.className = 'result-key';
    key.textContent = label;
    const val = document.createElement('strong');
    val.className = 'result-value';
    val.textContent = value;
    row.append(key, val);
    els.giveUpDialogText.appendChild(row);
  }
}

function openTimeAttackResultDialog(isNewBest = false) {
  els.giveUpDialogTitle.textContent = timeRun.gaveUp ? 'Time Attack stopped' : 'Time Attack completed';
  setDialogResult(timeAttackResultRows(isNewBest));
  els.cancelGiveUp.classList.add('hidden');
  els.confirmGiveUp.classList.add('hidden');
  els.tweetGiveUp.classList.remove('hidden');
  els.closeGiveUpDialog.classList.remove('hidden');
  if (typeof els.giveUpDialog.showModal === 'function' && !els.giveUpDialog.open) {
    els.giveUpDialog.showModal();
  }
}


function tweetResult() {
  if (!timeRun.started || timeRun.active || !(timeRun.finished || timeRun.gaveUp)) return;
  const result = timeAttackTweetText();
  const url = window.location.href.split('#')[0];
  const text = `${result}\n\n${url}`;
  const intent = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
  window.open(intent, '_blank', 'noopener,noreferrer');
}

function openGiveUpDialog() {
  if (!timeRun.active) return;
  els.giveUpDialogTitle.textContent = 'Give up Time Attack?';
  setDialogMessage('Your current result will be available to tweet.');
  els.cancelGiveUp.classList.remove('hidden');
  els.confirmGiveUp.classList.remove('hidden');
  els.tweetGiveUp.classList.add('hidden');
  els.closeGiveUpDialog.classList.add('hidden');
  if (typeof els.giveUpDialog.showModal === 'function') {
    els.giveUpDialog.showModal();
  } else if (confirm('Give up Time Attack?')) {
    giveUpTimeAttack();
  }
}

function giveUpTimeAttack() {
  if (!timeRun.active) return;
  stopTimeAttackTimer();
  timeRun.elapsed = Date.now() - timeRun.startAt;
  timeRun.remainingAtEnd = getTimeRemaining();
  timeRun.active = false;
  timeRun.finished = false;
  timeRun.gaveUp = true;
  current = null;
  answered = true;
  els.areaCode.textContent = 'Give Up';
  showFeedback('neutral', '');
  updateHighlights();
  updateStats();
  updateActions();
  openTimeAttackResultDialog(false);
}


function resetTimeAttackToInitial() {
  stopTimeAttackTimer();
  timeRun = freshTimeRun();
  current = null;
  answered = false;
  hintLevel = 0;
  els.areaCode.textContent = '---';
  showFeedback('neutral', '');
  updateHighlights();
  updateStats();
  updateActions();
}

function refreshForSettings() {
  stopTimeAttackTimer();
  if (isTimeMode()) {
    els.regionSelect.value = 'all';
    timeRun = freshTimeRun();
  } else if (timeRun.active) {
    timeRun = freshTimeRun();
  }
  nextQuestion();
  updateActions();
}

els.hintButton.addEventListener('click', showHint);
els.answerButton.addEventListener('click', revealAnswer);
els.nextButton.addEventListener('click', advanceIfReady);
els.startTimeAttack.addEventListener('click', startTimeAttack);
els.giveUpButton.addEventListener('click', openGiveUpDialog);
els.tweetResult.addEventListener('click', tweetResult);
els.resetStreak.addEventListener('click', resetStreakStats);
els.tweetStats.addEventListener('click', tweetStats);
els.resetStats.addEventListener('click', resetAllStats);
els.cancelGiveUp.addEventListener('click', () => els.giveUpDialog.close());
els.confirmGiveUp.addEventListener('click', giveUpTimeAttack);
els.tweetGiveUp.addEventListener('click', tweetResult);
els.closeGiveUpDialog.addEventListener('click', () => {
  els.giveUpDialog.close();
  resetTimeAttackToInitial();
});
els.regionSelect.addEventListener('change', refreshForSettings);
els.modeSelect.addEventListener('change', refreshForSettings);


window.addEventListener('beforeunload', ev => {
  if (!timeRun.active) return;
  ev.preventDefault();
  ev.returnValue = '';
});

document.addEventListener('keydown', ev => {
  const active = document.activeElement;
  const tag = active?.tagName;
  if (tag === 'SELECT' || tag === 'INPUT' || tag === 'BUTTON') return;
  if (ev.key === 'Enter') {
    if (active?.classList?.contains('state-tile')) {
      ev.preventDefault();
      return;
    }
    ev.preventDefault();
    advanceIfReady();
  }
  if (ev.key.toLowerCase() === 'h') showHint();
  if (ev.key === '/') {
    ev.preventDefault();
    revealAnswer();
  }
});

renderMap();
updateStats();
updateActions();
nextQuestion();
