// Vowels — transliteration aligned with the BAPS "Akshar Gujarati Learner 2"
// Speaking Guide (e.g. એ = 'ae', ઓ = 'o', અં = 'am', અઃ = 'aha').
const SWAR = [
  { letter:'અ',  trans:'a',   word:'અક્ષર',    meaning:'Letter / Akshar', emoji:'🔤' },
  { letter:'આ',  trans:'aa',  word:'આરતી',    meaning:'Arti (worship lamp)', emoji:'🪔' },
  { letter:'ઇ',  trans:'i',   word:'ઇમારત',   meaning:'Building', emoji:'🏢' },
  { letter:'ઈ',  trans:'ee',  word:'ઈશ્વર',   meaning:'God / Ishwar', emoji:'🙏' },
  { letter:'ઉ',  trans:'u',   word:'ઉત્સવ',   meaning:'Festival / Utsav', emoji:'🎉' },
  { letter:'ઊ',  trans:'oo',  word:'ઊન',      meaning:'Wool', emoji:'🧶' },
  { letter:'ઋ',  trans:'ru',  word:'ઋષિ',     meaning:'Sage / Rishi', emoji:'🧘' },
  { letter:'એ',  trans:'ae',  word:'એકાદશી', meaning:'Ekadashi (11th day)', emoji:'🌙' },
  { letter:'ઐ',  trans:'ai',  word:'ઐરાવત',   meaning:'Airawat (white elephant)', emoji:'🐘' },
  { letter:'ઓ',  trans:'o',   word:'ઓરડો',   meaning:'Room', emoji:'🚪' },
  { letter:'ઔ',  trans:'au',  word:'ઔષધ',     meaning:'Medicine / Ausadh', emoji:'💊' },
  { letter:'અં', trans:'am',  word:'મંત્ર',   meaning:'Mantra', emoji:'📿' },
  { letter:'અઃ', trans:'aha', word:'નમઃ',     meaning:'Namah (salutation)', emoji:'🔔' }
];

const VYANJAN_GROUPS = [
  { name:'ક વર્ગ (Ka-varg)', letters:[
    { letter:'ક', trans:'ka', word:'કબૂતર', meaning:'Pigeon', emoji:'🕊️' },
    { letter:'ખ', trans:'kha', word:'ખરગોશ', meaning:'Rabbit', emoji:'🐰' },
    { letter:'ગ', trans:'ga', word:'ગાય', meaning:'Cow', emoji:'🐄' },
    { letter:'ઘ', trans:'gha', word:'ઘર', meaning:'House', emoji:'🏠' },
    { letter:'ઙ', trans:'nga', word:'ઙ', meaning:'(Nga)', emoji:'🔤' }
  ]},
  { name:'ચ વર્ગ (Cha-varg)', letters:[
    { letter:'ચ', trans:'cha', word:'ચકલી', meaning:'Sparrow', emoji:'🐦' },
    { letter:'છ', trans:'chha', word:'છત્રી', meaning:'Umbrella', emoji:'☂️' },
    { letter:'જ', trans:'ja', word:'જહાજ', meaning:'Ship', emoji:'🚢' },
    { letter:'ઝ', trans:'za', word:'ઝાડ', meaning:'Tree', emoji:'🌳' },
    { letter:'ઞ', trans:'nya', word:'ઞ', meaning:'(Nya)', emoji:'🔤' }
  ]},
  { name:'ટ વર્ગ (Ta-varg Retroflex)', letters:[
    { letter:'ટ', trans:'ṭa', word:'ટમેટું', meaning:'Tomato', emoji:'🍅' },
    { letter:'ઠ', trans:'ṭha', word:'ઠંડું', meaning:'Cold', emoji:'🥶' },
    { letter:'ડ', trans:'ḍa', word:'ડમરું', meaning:'Drum', emoji:'🥁' },
    { letter:'ઢ', trans:'ḍha', word:'ઢોલ', meaning:'Dhol Drum', emoji:'🪘' },
    { letter:'ણ', trans:'ṇa', word:'બાણ', meaning:'Arrow', emoji:'🏹' }
  ]},
  { name:'ત વર્ગ (Ta-varg Dental)', letters:[
    { letter:'ત', trans:'ta', word:'તરબૂચ', meaning:'Watermelon', emoji:'🍉' },
    { letter:'થ', trans:'tha', word:'થાળી', meaning:'Plate', emoji:'🍽️' },
    { letter:'દ', trans:'da', word:'દરિયો', meaning:'Sea', emoji:'🌊' },
    { letter:'ધ', trans:'dha', word:'ધનુષ', meaning:'Bow', emoji:'🏹' },
    { letter:'ન', trans:'na', word:'નદી', meaning:'River', emoji:'🏞️' }
  ]},
  { name:'પ વર્ગ (Pa-varg)', letters:[
    { letter:'પ', trans:'pa', word:'પતંગ', meaning:'Kite', emoji:'🪁' },
    { letter:'ફ', trans:'pha', word:'ફૂલ', meaning:'Flower', emoji:'🌺' },
    { letter:'બ', trans:'ba', word:'બિલાડી', meaning:'Cat', emoji:'🐱' },
    { letter:'ભ', trans:'bha', word:'ભમરો', meaning:'Bee', emoji:'🐝' },
    { letter:'મ', trans:'ma', word:'મોર', meaning:'Peacock', emoji:'🦚' }
  ]},
  { name:'અન્તસ્થ (Antastha)', letters:[
    { letter:'ય', trans:'ya', word:'યાત્રા', meaning:'Journey', emoji:'🧳' },
    { letter:'ર', trans:'ra', word:'રાજા', meaning:'King', emoji:'👑' },
    { letter:'લ', trans:'la', word:'લીંબુ', meaning:'Lemon', emoji:'🍋' },
    { letter:'વ', trans:'va', word:'વાદળ', meaning:'Cloud', emoji:'☁️' }
  ]},
  { name:'ઊષ્મ (Ushma)', letters:[
    { letter:'શ', trans:'sha', word:'શેર', meaning:'Lion', emoji:'🦁' },
    { letter:'ષ', trans:'shha', word:'ષટ્કોણ', meaning:'Hexagon', emoji:'⬡' },
    { letter:'સ', trans:'sa', word:'સૂરજ', meaning:'Sun', emoji:'☀️' },
    { letter:'હ', trans:'ha', word:'હાથી', meaning:'Elephant', emoji:'🐘' }
  ]},
  { name:'વિશેષ (Special)', letters:[
    { letter:'ળ', trans:'ḷa', word:'કળશ', meaning:'Pot', emoji:'🏺' },
    { letter:'ક્ષ', trans:'ksha', word:'ક્ષત્રિય', meaning:'Warrior', emoji:'⚔️' },
    { letter:'જ્ઞ', trans:'gnya', word:'જ્ઞાન', meaning:'Knowledge', emoji:'📚' }
  ]}
];

const ALL_VYANJAN = VYANJAN_GROUPS.flatMap(g => g.letters);

const NUMBERS = [
  { gu:'૦', en:'0', word:'શૂન્ય', trans:'shunya' },
  { gu:'૧', en:'1', word:'એક', trans:'ek' },
  { gu:'૨', en:'2', word:'બે', trans:'be' },
  { gu:'૩', en:'3', word:'ત્રણ', trans:'tran' },
  { gu:'૪', en:'4', word:'ચાર', trans:'chaar' },
  { gu:'૫', en:'5', word:'પાંચ', trans:'paanch' },
  { gu:'૬', en:'6', word:'છ', trans:'chha' },
  { gu:'૭', en:'7', word:'સાત', trans:'saat' },
  { gu:'૮', en:'8', word:'આઠ', trans:'aath' },
  { gu:'૯', en:'9', word:'નવ', trans:'nav' },
  { gu:'૧૦', en:'10', word:'દસ', trans:'das' },
  { gu:'૧૧', en:'11', word:'અગિયાર', trans:'agiyaar' },
  { gu:'૧૨', en:'12', word:'બાર', trans:'baar' },
  { gu:'૧૩', en:'13', word:'તેર', trans:'ter' },
  { gu:'૧૪', en:'14', word:'ચૌદ', trans:'chaud' },
  { gu:'૧૫', en:'15', word:'પંદર', trans:'pandar' },
  { gu:'૧૬', en:'16', word:'સોળ', trans:'sol' },
  { gu:'૧૭', en:'17', word:'સત્તર', trans:'sattar' },
  { gu:'૧૮', en:'18', word:'અઢાર', trans:'adhaar' },
  { gu:'૧૯', en:'19', word:'ઓગણીસ', trans:'ognis' },
  { gu:'૨૦', en:'20', word:'વીસ', trans:'vees' },
  { gu:'૨૧', en:'21', word:'એકવીસ', trans:'ekvees' },
  { gu:'૨૨', en:'22', word:'બાવીસ', trans:'baavees' },
  { gu:'૨૩', en:'23', word:'તેવીસ', trans:'tevees' },
  { gu:'૨૪', en:'24', word:'ચોવીસ', trans:'chovees' },
  { gu:'૨૫', en:'25', word:'પચ્ચીસ', trans:'pachchees' },
  { gu:'૨૬', en:'26', word:'છવ્વીસ', trans:'chhavvees' },
  { gu:'૨૭', en:'27', word:'સત્તાવીસ', trans:'sattaavees' },
  { gu:'૨૮', en:'28', word:'અઠ્ઠાવીસ', trans:'aththaavees' },
  { gu:'૨૯', en:'29', word:'ઓગણત્રીસ', trans:'ogantrees' },
  { gu:'૩૦', en:'30', word:'ત્રીસ', trans:'trees' },
  { gu:'૩૧', en:'31', word:'એકત્રીસ', trans:'ektrees' },
  { gu:'૩૨', en:'32', word:'બત્રીસ', trans:'batrees' },
  { gu:'૩૩', en:'33', word:'તેત્રીસ', trans:'tetrees' },
  { gu:'૩૪', en:'34', word:'ચોત્રીસ', trans:'chotrees' },
  { gu:'૩૫', en:'35', word:'પાંત્રીસ', trans:'paantrees' },
  { gu:'૩૬', en:'36', word:'છત્રીસ', trans:'chhatrees' },
  { gu:'૩૭', en:'37', word:'સાડત્રીસ', trans:'saadtrees' },
  { gu:'૩૮', en:'38', word:'આડત્રીસ', trans:'aadtrees' },
  { gu:'૩૯', en:'39', word:'ઓગણચાલીસ', trans:'oganchaalees' },
  { gu:'૪૦', en:'40', word:'ચાલીસ', trans:'chaalees' },
  { gu:'૪૧', en:'41', word:'એકતાલીસ', trans:'ektaalees' },
  { gu:'૪૨', en:'42', word:'બેતાલીસ', trans:'betaalees' },
  { gu:'૪૩', en:'43', word:'ત્રેતાલીસ', trans:'tretaalees' },
  { gu:'૪૪', en:'44', word:'ચુંમાલીસ', trans:'chumaalees' },
  { gu:'૪૫', en:'45', word:'પિસ્તાલીસ', trans:'pistaalees' },
  { gu:'૪૬', en:'46', word:'છેતાલીસ', trans:'chhetaalees' },
  { gu:'૪૭', en:'47', word:'સુડતાલીસ', trans:'sudtaalees' },
  { gu:'૪૮', en:'48', word:'અડતાલીસ', trans:'adtaalees' },
  { gu:'૪૯', en:'49', word:'ઓગણપચાસ', trans:'oganpachaas' },
  { gu:'૫૦', en:'50', word:'પચાસ', trans:'pachaas' }
];

const WORD_CATEGORIES = {
  'ખોરાક (Food)': [
    { gu:'રોટલી', en:'Bread', trans:'rotli', emoji:'🫓' },
    { gu:'દાળ', en:'Lentils', trans:'daal', emoji:'🥣' },
    { gu:'ભાત', en:'Rice', trans:'bhaat', emoji:'🍚' },
    { gu:'દૂધ', en:'Milk', trans:'doodh', emoji:'🥛' },
    { gu:'ઘી', en:'Ghee', trans:'ghee', emoji:'🧈' },
    { gu:'દહીં', en:'Yogurt', trans:'dahi', emoji:'🥛' },
    { gu:'કેરી', en:'Mango', trans:'keri', emoji:'🥭' },
    { gu:'કેળું', en:'Banana', trans:'kelu', emoji:'🍌' }
  ],
  'પ્રાણીઓ (Animals)': [
    { gu:'કૂતરો', en:'Dog', trans:'kutro', emoji:'🐕' },
    { gu:'બિલાડી', en:'Cat', trans:'biladi', emoji:'🐱' },
    { gu:'ઘોડો', en:'Horse', trans:'ghodo', emoji:'🐴' },
    { gu:'હાથી', en:'Elephant', trans:'hathi', emoji:'🐘' },
    { gu:'સિંહ', en:'Lion', trans:'sinh', emoji:'🦁' },
    { gu:'માછલી', en:'Fish', trans:'maachli', emoji:'🐟' },
    { gu:'વાંદરો', en:'Monkey', trans:'vaandro', emoji:'🐒' },
    { gu:'સસલું', en:'Rabbit', trans:'saslu', emoji:'🐰' }
  ],
  'કુદરત (Nature)': [
    { gu:'સૂરજ', en:'Sun', trans:'suraj', emoji:'☀️' },
    { gu:'ચાંદો', en:'Moon', trans:'chaando', emoji:'🌙' },
    { gu:'તારો', en:'Star', trans:'taaro', emoji:'⭐' },
    { gu:'વરસાદ', en:'Rain', trans:'varsaad', emoji:'🌧️' },
    { gu:'નદી', en:'River', trans:'nadi', emoji:'🏞️' },
    { gu:'પર્વત', en:'Mountain', trans:'parvat', emoji:'🏔️' },
    { gu:'ઝાડ', en:'Tree', trans:'zaad', emoji:'🌳' },
    { gu:'ફૂલ', en:'Flower', trans:'phool', emoji:'🌺' }
  ],
  'લોકો (People)': [
    { gu:'પિતા', en:'Father', trans:'pitaa', emoji:'👨' },
    { gu:'માતા', en:'Mother', trans:'maataa', emoji:'👩' },
    { gu:'ભાઈ', en:'Brother', trans:'bhai', emoji:'👦' },
    { gu:'બહેન', en:'Sister', trans:'bahen', emoji:'👧' },
    { gu:'મિત્ર', en:'Friend', trans:'mitra', emoji:'🤝' },
    { gu:'ડૉક્ટર', en:'Doctor', trans:'doctor', emoji:'👨‍⚕️' },
    { gu:'શિક્ષક', en:'Teacher', trans:'shikshak', emoji:'👨‍🏫' },
    { gu:'ખેડૂત', en:'Farmer', trans:'khedut', emoji:'👨‍🌾' }
  ],
  'ઘર (Home)': [
    { gu:'ખુરશી', en:'Chair', trans:'khurshi', emoji:'🪑' },
    { gu:'ટેબલ', en:'Table', trans:'table', emoji:'🪑' },
    { gu:'પુસ્તક', en:'Book', trans:'pustak', emoji:'📖' },
    { gu:'ઘડિયાળ', en:'Clock', trans:'ghadiyaal', emoji:'🕐' },
    { gu:'બારી', en:'Window', trans:'baari', emoji:'🪟' },
    { gu:'દીવો', en:'Lamp', trans:'deevo', emoji:'🪔' },
    { gu:'ચાવી', en:'Key', trans:'chaavi', emoji:'🔑' },
    { gu:'છત્રી', en:'Umbrella', trans:'chhatri', emoji:'☂️' }
  ],
  'વાહન (Transport)': [
    { gu:'ગાડી', en:'Car', trans:'gaadi', emoji:'🚗' },
    { gu:'બસ', en:'Bus', trans:'bas', emoji:'🚌' },
    { gu:'ટ્રેન', en:'Train', trans:'train', emoji:'🚂' },
    { gu:'વિમાન', en:'Airplane', trans:'vimaan', emoji:'✈️' },
    { gu:'સાયકલ', en:'Bicycle', trans:'cycle', emoji:'🚲' },
    { gu:'રિક્ષા', en:'Rickshaw', trans:'rikshaa', emoji:'🛺' },
    { gu:'જહાજ', en:'Ship', trans:'jahaaj', emoji:'🚢' },
    { gu:'હોડી', en:'Boat', trans:'hodi', emoji:'⛵' }
  ],
  // Vowel-lesson groups from "Akshar Gujarati Learner 2" (BAPS)
  'પાઠ ૨ – આ (Vowel આ)': [
    { gu:'કાન',   en:'Ear',     trans:'KaNa',   emoji:'👂' },
    { gu:'કામ',   en:'Work',    trans:'KaMa',   emoji:'💼' },
    { gu:'મકાન',  en:'Building',trans:'MaKaNa', emoji:'🏠' },
    { gu:'મકાઈ',  en:'Corn',    trans:'MaKaEe', emoji:'🌽' },
    { gu:'કાગળ',  en:'Paper',   trans:'KaGaLa', emoji:'📄' },
    { gu:'ઘાસ',   en:'Grass',   trans:'GhaSa',  emoji:'🌿' },
    { gu:'ગાય',   en:'Cow',     trans:'GaYa',   emoji:'🐄' },
    { gu:'ગામ',   en:'Village', trans:'GaMa',   emoji:'🏘️' },
    { gu:'ચા',    en:'Tea',     trans:'CHa',    emoji:'☕' },
    { gu:'ચાર',   en:'Four',    trans:'CHaRa',  emoji:'4️⃣' },
    { gu:'છાશ',   en:'Buttermilk', trans:'CHHaSHa', emoji:'🥛' },
    { gu:'છાત્ર', en:'Student', trans:'CHHaTRa', emoji:'🧑‍🎓' }
  ],
  'પાઠ ૩ – એ (Vowel એ)': [
    { gu:'એક',    en:'One',     trans:'EKa',    emoji:'1️⃣' },
    { gu:'એટમ',   en:'Atom',    trans:'ETaMa',  emoji:'⚛️' },
    { gu:'કેક',   en:'Cake',    trans:'KeKa',   emoji:'🎂' },
    { gu:'કેશ',   en:'Hair',    trans:'KeSHa',  emoji:'💇' },
    { gu:'ખેલ',   en:'Play',    trans:'KHeLa',  emoji:'🎮' },
    { gu:'ખેતર',  en:'Farm',    trans:'KHeTaRa', emoji:'🌾' },
    { gu:'ગેસ',   en:'Gas',     trans:'GeSa',   emoji:'⛽' },
    { gu:'દેશ',   en:'Country', trans:'DeSHa',  emoji:'🌍' },
    { gu:'નેત્ર', en:'Eyes',    trans:'NeTRa',  emoji:'👁️' },
    { gu:'તેલ',   en:'Oil',     trans:'TeLa',   emoji:'🫒' },
    { gu:'સફેદ', en:'White',   trans:'SaFeDa', emoji:'⚪' },
    { gu:'ગણેશ', en:'Ganesh',  trans:'GaNeSHa', emoji:'🐘' }
  ],
  'પાઠ ૧૦ – ઓ (Vowel ઓ)': [
    { gu:'કાગડો', en:'Crow',    trans:'KaGaDo', emoji:'🐦‍⬛' },
    { gu:'ઘોડો',  en:'Horse',   trans:'GhoDo',  emoji:'🐴' },
    { gu:'મોર',   en:'Peacock', trans:'MoRa',   emoji:'🦚' },
    { gu:'ચોર',   en:'Thief',   trans:'CHoRa',  emoji:'🥷' },
    { gu:'ડોલ',   en:'Bucket',  trans:'DoLa',   emoji:'🪣' },
    { gu:'ઢોલ',   en:'Drum',    trans:'DhoLa',  emoji:'🪘' },
    { gu:'ટોપી',  en:'Cap',     trans:'ToPi',   emoji:'🧢' },
    { gu:'તોપ',   en:'Cannon',  trans:'ToPa',   emoji:'💣' },
    { gu:'પોલીસ', en:'Police',  trans:'PoLiSa', emoji:'👮' },
    { gu:'મહિનો', en:'Month',   trans:'MaHiNo', emoji:'📅' },
    { gu:'દરિયો', en:'Sea',     trans:'DaRiYo', emoji:'🌊' },
    { gu:'રૂપિયો',en:'Rupee',   trans:'RuPiYo', emoji:'💰' }
  ]
};

const ACHIEVEMENTS = [
  { id:'first_letter', icon:'🌟', title:'First Letter!', desc:'Learn your first letter', xp:10 },
  { id:'all_swar', icon:'🏅', title:'Vowel Master', desc:'Learn all 13 vowels', xp:50 },
  { id:'all_vyanjan', icon:'🎖️', title:'Consonant King', desc:'Learn all consonants', xp:100 },
  { id:'all_numbers', icon:'🔢', title:'Number Ninja', desc:'Learn all numbers', xp:30 },
  { id:'quiz_5', icon:'🎯', title:'Quiz Starter', desc:'Complete 5 quizzes', xp:25 },
  { id:'quiz_perfect', icon:'💯', title:'Perfect Score!', desc:'Get 100% on a quiz', xp:50 },
  { id:'streak_3', icon:'🔥', title:'On Fire!', desc:'3 correct in a row', xp:15 }
];

const ALL_READING_WORDS = [
  // Diff 1 – Short/simple (2-letter words)
  { gu:'મા', en:'Mother', trans:'maa', emoji:'👩', diff:1 },
  { gu:'બા', en:'Grandmother', trans:'baa', emoji:'👵', diff:1 },
  { gu:'ના', en:'No', trans:'naa', emoji:'🚫', diff:1 },
  { gu:'હા', en:'Yes', trans:'haa', emoji:'✅', diff:1 },
  { gu:'જા', en:'Go', trans:'jaa', emoji:'🚶', diff:1 },
  { gu:'આ', en:'This', trans:'aa', emoji:'👉', diff:1 },
  { gu:'ઘર', en:'House', trans:'ghar', emoji:'🏠', diff:1 },
  { gu:'પર', en:'On', trans:'par', emoji:'⬆️', diff:1 },
  { gu:'કર', en:'Do', trans:'kar', emoji:'✊', diff:1 },
  { gu:'દર', en:'Rate', trans:'dar', emoji:'📊', diff:1 },
  { gu:'વન', en:'Forest', trans:'van', emoji:'🌲', diff:1 },
  { gu:'રસ', en:'Juice', trans:'ras', emoji:'🧃', diff:1 },
  { gu:'તન', en:'Body', trans:'tan', emoji:'🧍', diff:1 },
  { gu:'મન', en:'Mind', trans:'man', emoji:'🧠', diff:1 },
  { gu:'જલ', en:'Water', trans:'jal', emoji:'💧', diff:1 },
  { gu:'ફળ', en:'Fruit', trans:'fal', emoji:'🍎', diff:1 },
  { gu:'ચા', en:'Tea', trans:'chaa', emoji:'☕', diff:1 },
  { gu:'દા', en:'Give', trans:'daa', emoji:'🤲', diff:1 },
  { gu:'લે', en:'Take', trans:'le', emoji:'✋', diff:1 },
  { gu:'બસ', en:'Bus', trans:'bas', emoji:'🚌', diff:1 },
  // Diff 2 – Medium (3-4 letter words)
  { gu:'કમલ', en:'Lotus', trans:'kamal', emoji:'🪷', diff:2 },
  { gu:'નમન', en:'Bow', trans:'naman', emoji:'🙏', diff:2 },
  { gu:'પવન', en:'Wind', trans:'pavan', emoji:'💨', diff:2 },
  { gu:'ગગન', en:'Sky', trans:'gagan', emoji:'🌌', diff:2 },
  { gu:'નગર', en:'City', trans:'nagar', emoji:'🏙️', diff:2 },
  { gu:'સફર', en:'Journey', trans:'safar', emoji:'🧳', diff:2 },
  { gu:'સમય', en:'Time', trans:'samay', emoji:'⏰', diff:2 },
  { gu:'કલમ', en:'Pen', trans:'kalam', emoji:'🖊️', diff:2 },
  { gu:'ગરમ', en:'Hot', trans:'garam', emoji:'🔥', diff:2 },
  { gu:'નરમ', en:'Soft', trans:'naram', emoji:'🧸', diff:2 },
  { gu:'સરસ', en:'Nice', trans:'saras', emoji:'👌', diff:2 },
  { gu:'દૂધ', en:'Milk', trans:'doodh', emoji:'🥛', diff:2 },
  { gu:'ભાત', en:'Rice', trans:'bhaat', emoji:'🍚', diff:2 },
  { gu:'શાક', en:'Vegetable', trans:'shaak', emoji:'🥬', diff:2 },
  { gu:'રોટી', en:'Bread', trans:'roti', emoji:'🫓', diff:2 },
  { gu:'દાળ', en:'Lentils', trans:'daal', emoji:'🥣', diff:2 },
  { gu:'ઘડી', en:'Watch', trans:'ghadi', emoji:'⌚', diff:2 },
  { gu:'ગાડી', en:'Car', trans:'gaadi', emoji:'🚗', diff:2 },
  { gu:'નદી', en:'River', trans:'nadi', emoji:'🏞️', diff:2 },
  { gu:'ખેતર', en:'Farm', trans:'khetar', emoji:'🌾', diff:2 },
  // Diff 3 – Longer/advanced words
  { gu:'પાણી', en:'Water', trans:'paani', emoji:'💧', diff:3 },
  { gu:'છત્રી', en:'Umbrella', trans:'chhatri', emoji:'☂️', diff:3 },
  { gu:'ટોપી', en:'Hat', trans:'topi', emoji:'🧢', diff:3 },
  { gu:'ચાવી', en:'Key', trans:'chaavi', emoji:'🔑', diff:3 },
  { gu:'થેલો', en:'Bag', trans:'thelo', emoji:'🎒', diff:3 },
  { gu:'સાબુ', en:'Soap', trans:'saabu', emoji:'🧼', diff:3 },
  { gu:'પિતા', en:'Father', trans:'pitaa', emoji:'👨', diff:3 },
  { gu:'માતા', en:'Mother', trans:'maataa', emoji:'👩', diff:3 },
  { gu:'ભાઈ', en:'Brother', trans:'bhai', emoji:'👦', diff:3 },
  { gu:'બહેન', en:'Sister', trans:'bahen', emoji:'👧', diff:3 },
  { gu:'દાદા', en:'Grandfather', trans:'daadaa', emoji:'👴', diff:3 },
  { gu:'દાદી', en:'Grandmother', trans:'daadi', emoji:'👵', diff:3 },
  { gu:'કાકા', en:'Uncle', trans:'kaakaa', emoji:'👨', diff:3 },
  { gu:'કાકી', en:'Aunt', trans:'kaaki', emoji:'👩', diff:3 },
  { gu:'વરસાદ', en:'Rain', trans:'varsaad', emoji:'🌧️', diff:3 },
  { gu:'તારો', en:'Star', trans:'taaro', emoji:'⭐', diff:3 },
  { gu:'ચાંદો', en:'Moon', trans:'chaando', emoji:'🌙', diff:3 },
  { gu:'શાળા', en:'School', trans:'shaalaa', emoji:'🏫', diff:3 },
  { gu:'શિક્ષક', en:'Teacher', trans:'shikshak', emoji:'👨‍🏫', diff:3 },
  { gu:'વિદ્યાર્થી', en:'Student', trans:'vidyaarthi', emoji:'🧑‍🎓', diff:3 },
  { gu:'રંગ', en:'Color', trans:'rang', emoji:'🎨', diff:3 },
  { gu:'આંગળી', en:'Finger', trans:'aangli', emoji:'☝️', diff:3 },
  { gu:'ટેબલ', en:'Table', trans:'table', emoji:'🪑', diff:3 },
  { gu:'બજાર', en:'Market', trans:'bajaar', emoji:'🏪', diff:3 },
  { gu:'કિંમત', en:'Price', trans:'kimmat', emoji:'💰', diff:3 },
  { gu:'મંદિર', en:'Temple', trans:'mandir', emoji:'🛕', diff:3 },
  { gu:'મસ્જિદ', en:'Mosque', trans:'masjid', emoji:'🕌', diff:3 },
  { gu:'દવા', en:'Medicine', trans:'davaa', emoji:'💊', diff:3 },
  { gu:'ડૉક્ટર', en:'Doctor', trans:'doctor', emoji:'👨‍⚕️', diff:3 },
  { gu:'ખેડૂત', en:'Farmer', trans:'khedut', emoji:'👨‍🌾', diff:3 },
  { gu:'પોલીસ', en:'Police', trans:'polees', emoji:'👮', diff:3 },
  { gu:'રસ્તો', en:'Road', trans:'rasto', emoji:'🛣️', diff:3 },
  { gu:'વાહન', en:'Vehicle', trans:'vaahan', emoji:'🚙', diff:3 },
  { gu:'ટ્રેન', en:'Train', trans:'train', emoji:'🚂', diff:3 },
  { gu:'વિમાન', en:'Airplane', trans:'vimaan', emoji:'✈️', diff:3 },
  { gu:'ખુરશી', en:'Chair', trans:'khurshi', emoji:'🪑', diff:3 },
  { gu:'પુસ્તક', en:'Book', trans:'pustak', emoji:'📖', diff:3 },
  { gu:'ઘડિયાળ', en:'Clock', trans:'ghadiyaal', emoji:'🕐', diff:3 },
  { gu:'બારી', en:'Window', trans:'baari', emoji:'🪟', diff:3 },
  { gu:'દીવો', en:'Lamp', trans:'deevo', emoji:'🪔', diff:3 },
  { gu:'કેળું', en:'Banana', trans:'kelu', emoji:'🍌', diff:3 },
  { gu:'સફરજન', en:'Apple', trans:'safarjan', emoji:'🍎', diff:3 },
  { gu:'નારંગી', en:'Orange', trans:'narangi', emoji:'🍊', diff:3 },
  { gu:'કૂતરો', en:'Dog', trans:'kutro', emoji:'🐕', diff:3 },
  { gu:'બિલાડી', en:'Cat', trans:'biladi', emoji:'🐱', diff:3 },
  { gu:'ઘોડો', en:'Horse', trans:'ghodo', emoji:'🐴', diff:3 },
  { gu:'હાથી', en:'Elephant', trans:'hathi', emoji:'🐘', diff:3 },
  { gu:'મોર', en:'Peacock', trans:'mor', emoji:'🦚', diff:3 },
  { gu:'માછલી', en:'Fish', trans:'maachli', emoji:'🐟', diff:3 },
  { gu:'સસલું', en:'Rabbit', trans:'saslu', emoji:'🐰', diff:3 },
  { gu:'વાંદરો', en:'Monkey', trans:'vaandro', emoji:'🐒', diff:3 },
  { gu:'સિંહ', en:'Lion', trans:'sinh', emoji:'🦁', diff:3 },
  { gu:'દેડકો', en:'Frog', trans:'dedko', emoji:'🐸', diff:3 },
  { gu:'પંખી', en:'Bird', trans:'pankhi', emoji:'🐦', diff:3 },
  { gu:'કાગડો', en:'Crow', trans:'kaagdo', emoji:'🐦‍⬛', diff:3 },
  { gu:'પોપટ', en:'Parrot', trans:'popat', emoji:'🦜', diff:3 },
  // More Diff 1 – basic
  { gu:'સા', en:'Mother-in-law', trans:'saa', emoji:'👩', diff:1 },
  { gu:'દા', en:'Give', trans:'daa', emoji:'🤲', diff:1 },
  { gu:'ધન', en:'Wealth', trans:'dhan', emoji:'💰', diff:1 },
  { gu:'તપ', en:'Penance', trans:'tap', emoji:'🧘', diff:1 },
  { gu:'રણ', en:'Desert', trans:'ran', emoji:'🏜️', diff:1 },
  { gu:'હર', en:'Every', trans:'har', emoji:'♾️', diff:1 },
  { gu:'જન', en:'People', trans:'jan', emoji:'👥', diff:1 },
  { gu:'સર', en:'Head', trans:'sar', emoji:'🧑', diff:1 },
  { gu:'દમ', en:'Breath', trans:'dam', emoji:'💨', diff:1 },
  { gu:'તર', en:'Float', trans:'tar', emoji:'🏊', diff:1 },
  // More Diff 2 – medium
  { gu:'અજબ', en:'Amazing', trans:'ajab', emoji:'😮', diff:2 },
  { gu:'ફરક', en:'Difference', trans:'farak', emoji:'↔️', diff:2 },
  { gu:'બદલ', en:'Cloud', trans:'badal', emoji:'☁️', diff:2 },
  { gu:'તળાવ', en:'Lake', trans:'talaav', emoji:'🏞️', diff:2 },
  { gu:'દિવસ', en:'Day', trans:'divas', emoji:'🌞', diff:2 },
  { gu:'રાત', en:'Night', trans:'raat', emoji:'🌙', diff:2 },
  { gu:'સવાર', en:'Morning', trans:'savaar', emoji:'🌅', diff:2 },
  { gu:'સાંજ', en:'Evening', trans:'saanj', emoji:'🌆', diff:2 },
  { gu:'ગામ', en:'Village', trans:'gaam', emoji:'🏘️', diff:2 },
  { gu:'દેશ', en:'Country', trans:'desh', emoji:'🌍', diff:2 },
  { gu:'નામ', en:'Name', trans:'naam', emoji:'📛', diff:2 },
  { gu:'કામ', en:'Work', trans:'kaam', emoji:'💼', diff:2 },
  { gu:'બળ', en:'Power', trans:'bal', emoji:'💪', diff:2 },
  { gu:'જમણ', en:'Meal', trans:'jaman', emoji:'🍽️', diff:2 },
  { gu:'ચરણ', en:'Feet', trans:'charan', emoji:'🦶', diff:2 },
  { gu:'મરણ', en:'Death', trans:'maran', emoji:'💀', diff:2 },
  { gu:'ખબર', en:'News', trans:'khabar', emoji:'📰', diff:2 },
  { gu:'અસર', en:'Effect', trans:'asar', emoji:'✨', diff:2 },
  { gu:'કસર', en:'Shortfall', trans:'kasar', emoji:'📉', diff:2 },
  { gu:'હવા', en:'Air', trans:'havaa', emoji:'🌬️', diff:2 },
  // More Diff 3 – advanced
  { gu:'શિયાળો', en:'Winter', trans:'shiyaalo', emoji:'❄️', diff:3 },
  { gu:'ઉનાળો', en:'Summer', trans:'unaalo', emoji:'☀️', diff:3 },
  { gu:'ચોમાસું', en:'Monsoon', trans:'chomaasu', emoji:'🌧️', diff:3 },
  { gu:'ખુશી', en:'Happiness', trans:'khushi', emoji:'😊', diff:3 },
  { gu:'ગુસ્સો', en:'Anger', trans:'gusso', emoji:'😠', diff:3 },
  { gu:'ડર', en:'Fear', trans:'dar', emoji:'😨', diff:3 },
  { gu:'પ્રેમ', en:'Love', trans:'prem', emoji:'❤️', diff:3 },
  { gu:'આશા', en:'Hope', trans:'aashaa', emoji:'🌈', diff:3 },
  { gu:'સપનું', en:'Dream', trans:'sapnu', emoji:'💭', diff:3 },
  { gu:'ચાદર', en:'Bedsheet', trans:'chaadar', emoji:'🛏️', diff:3 },
  { gu:'ઓશીકું', en:'Pillow', trans:'oshiku', emoji:'🛏️', diff:3 },
  { gu:'ચપ્પલ', en:'Slippers', trans:'chappal', emoji:'🩴', diff:3 },
  { gu:'જૂતા', en:'Shoes', trans:'jutaa', emoji:'👟', diff:3 },
  { gu:'કમીજ', en:'Shirt', trans:'kameej', emoji:'👔', diff:3 },
  { gu:'પેન્ટ', en:'Pants', trans:'pant', emoji:'👖', diff:3 },
  { gu:'ટોપી', en:'Cap', trans:'topi', emoji:'🧢', diff:3 },
  { gu:'ચશ્મા', en:'Glasses', trans:'chashmaa', emoji:'👓', diff:3 },
  { gu:'ઘડિયાળ', en:'Watch', trans:'ghadiyaal', emoji:'⌚', diff:3 },
  { gu:'રૂમાલ', en:'Handkerchief', trans:'rumaal', emoji:'🧣', diff:3 },
  { gu:'પેન્સિલ', en:'Pencil', trans:'pensil', emoji:'✏️', diff:3 },
  { gu:'રબર', en:'Eraser', trans:'rabar', emoji:'🧽', diff:3 },
  { gu:'નકશો', en:'Map', trans:'naksho', emoji:'🗺️', diff:3 },
  { gu:'નોટબુક', en:'Notebook', trans:'notebook', emoji:'📓', diff:3 },
  { gu:'કાતર', en:'Scissors', trans:'kaatar', emoji:'✂️', diff:3 },
  { gu:'ગુંદર', en:'Glue', trans:'gundar', emoji:'🧴', diff:3 },
  { gu:'થાળી', en:'Plate', trans:'thaali', emoji:'🍽️', diff:3 },
  { gu:'વાટકી', en:'Bowl', trans:'vaatki', emoji:'🥣', diff:3 },
  { gu:'ચમચી', en:'Spoon', trans:'chamchi', emoji:'🥄', diff:3 },
  { gu:'કપ', en:'Cup', trans:'kap', emoji:'☕', diff:3 },
  { gu:'તાળું', en:'Lock', trans:'taalu', emoji:'🔒', diff:3 },
  { gu:'દરવાજો', en:'Door', trans:'darvaajo', emoji:'🚪', diff:3 },
  { gu:'છત', en:'Roof', trans:'chhat', emoji:'🏠', diff:3 },
  { gu:'દિવાલ', en:'Wall', trans:'divaal', emoji:'🧱', diff:3 },
  { gu:'ઝરણું', en:'Stream', trans:'zarnu', emoji:'💧', diff:3 },
  { gu:'જંગલ', en:'Jungle', trans:'jangal', emoji:'🌴', diff:3 },
  { gu:'ખેતી', en:'Farming', trans:'kheti', emoji:'🌾', diff:3 },
  { gu:'બીજ', en:'Seed', trans:'beej', emoji:'🌱', diff:3 },
  { gu:'પાન', en:'Leaf', trans:'paan', emoji:'🍃', diff:3 },
  { gu:'જમીન', en:'Land', trans:'jameen', emoji:'🌍', diff:3 },
  { gu:'આકાશ', en:'Sky', trans:'aakaash', emoji:'🌌', diff:3 },
  { gu:'ધુમ્મસ', en:'Fog', trans:'dhummas', emoji:'🌫️', diff:3 },
  { gu:'ઝાકળ', en:'Dew', trans:'zaakal', emoji:'💧', diff:3 },
  { gu:'ગરજ', en:'Thunder', trans:'garaj', emoji:'⚡', diff:3 },
  { gu:'વીજળી', en:'Lightning', trans:'veejli', emoji:'⚡', diff:3 },
  { gu:'મેઘધનુષ', en:'Rainbow', trans:'meghdhanush', emoji:'🌈', diff:3 },
  { gu:'બરફ', en:'Ice', trans:'baraf', emoji:'🧊', diff:3 },
  { gu:'ધૂળ', en:'Dust', trans:'dhool', emoji:'💨', diff:3 },
  { gu:'રેતી', en:'Sand', trans:'reti', emoji:'🏖️', diff:3 },
  { gu:'પથ્થર', en:'Stone', trans:'paththar', emoji:'🪨', diff:3 },
  { gu:'લોખંડ', en:'Iron', trans:'lokhand', emoji:'⚙️', diff:3 },
  { gu:'સોનું', en:'Gold', trans:'sonu', emoji:'🥇', diff:3 },
  { gu:'ચાંદી', en:'Silver', trans:'chaandi', emoji:'🥈', diff:3 },
  { gu:'હીરો', en:'Diamond', trans:'heero', emoji:'💎', diff:3 },
  { gu:'દોરી', en:'String', trans:'dori', emoji:'🧵', diff:3 },
  { gu:'સોય', en:'Needle', trans:'soy', emoji:'🪡', diff:3 },
  { gu:'કાપડ', en:'Cloth', trans:'kaapad', emoji:'🧶', diff:3 },
  { gu:'ઓજાર', en:'Tool', trans:'ojaar', emoji:'🔧', diff:3 },
  { gu:'ધ્વજ', en:'Flag', trans:'dhvaj', emoji:'🚩', diff:3 },
  { gu:'નકશો', en:'Map', trans:'naksho', emoji:'🗺️', diff:3 },
  { gu:'ટપાલ', en:'Post/Mail', trans:'tapaal', emoji:'📮', diff:3 },
  { gu:'ફોન', en:'Phone', trans:'phone', emoji:'📱', diff:3 },
  { gu:'રેડિયો', en:'Radio', trans:'radio', emoji:'📻', diff:3 },
  { gu:'ટીવી', en:'Television', trans:'TV', emoji:'📺', diff:3 },
  { gu:'કમ્પ્યુટર', en:'Computer', trans:'computer', emoji:'💻', diff:3 },
  { gu:'ઇન્ટરનેટ', en:'Internet', trans:'internet', emoji:'🌐', diff:3 },
  { gu:'રમકડું', en:'Toy', trans:'ramkadu', emoji:'🧸', diff:3 },
  { gu:'ઢીંગલી', en:'Doll', trans:'dhingli', emoji:'🪆', diff:3 },
  { gu:'દડો', en:'Ball', trans:'dado', emoji:'⚽', diff:3 },
  { gu:'ગીત', en:'Song', trans:'geet', emoji:'🎵', diff:3 },
  { gu:'નૃત્ય', en:'Dance', trans:'nrutya', emoji:'💃', diff:3 },
  { gu:'ચિત્ર', en:'Picture', trans:'chitra', emoji:'🖼️', diff:3 },
  { gu:'રંગ', en:'Color', trans:'rang', emoji:'🎨', diff:3 },
  { gu:'વાર્તા', en:'Story', trans:'vaartaa', emoji:'📖', diff:3 },
  { gu:'કવિતા', en:'Poem', trans:'kavitaa', emoji:'📝', diff:3 },
  // Words sourced from Akshar Gujarati Learner 2 (BAPS, 2003).
  // Lesson 2 — vowel આ
  { gu:'કાન',    en:'Ear',          trans:'KaNa',     emoji:'👂', diff:1 },
  { gu:'કામ',    en:'Work',         trans:'KaMa',     emoji:'💼', diff:1 },
  { gu:'મકાન',   en:'Building',     trans:'MaKaNa',   emoji:'🏠', diff:2 },
  { gu:'મકાઈ',   en:'Corn',         trans:'MaKaEe',   emoji:'🌽', diff:2 },
  { gu:'કાગળ',   en:'Paper',        trans:'KaGaLa',   emoji:'📄', diff:2 },
  { gu:'ખાટ',    en:'Cot',          trans:'KhaTa',    emoji:'🛏️', diff:1 },
  { gu:'ખાતર',   en:'Manure',       trans:'KhaTaRa',  emoji:'🌱', diff:2 },
  { gu:'વખાણ',   en:'Praise',       trans:'VaKHaNa',  emoji:'👏', diff:2 },
  { gu:'ઘા',     en:'Wound',        trans:'Gha',      emoji:'🩹', diff:1 },
  { gu:'ઘાટ',    en:'River bank',   trans:'GhaTa',    emoji:'🛕', diff:1 },
  { gu:'આચાર',   en:'Conduct',      trans:'AaCHaRa',  emoji:'🧘', diff:2 },
  { gu:'ચામર',   en:'Fly-whisk',    trans:'CHaMaRa',  emoji:'🪶', diff:2 },
  { gu:'છાય',    en:'Shadow',       trans:'CHHaYa',   emoji:'☂️', diff:2 },
  { gu:'છાપ',    en:'Print',        trans:'CHHaPa',   emoji:'🖨️', diff:1 },
  { gu:'છાલ',    en:'Peel',         trans:'CHHaLa',   emoji:'🍌', diff:1 },
  // Lesson 3 — vowel એ
  { gu:'એક',     en:'One',          trans:'EKa',      emoji:'1️⃣', diff:1 },
  { gu:'એટમ',    en:'Atom',         trans:'ETaMa',    emoji:'⚛️', diff:2 },
  { gu:'કેમ',    en:'How',          trans:'KeMa',     emoji:'❓', diff:1 },
  { gu:'કેડ',    en:'Waist',        trans:'KeDa',     emoji:'🧍', diff:1 },
  { gu:'કેશ',    en:'Hair',         trans:'KeSHa',    emoji:'💇', diff:1 },
  { gu:'કેક',    en:'Cake',         trans:'KeKa',     emoji:'🎂', diff:1 },
  { gu:'ખેલ',    en:'Play',         trans:'KheLa',    emoji:'🎮', diff:1 },
  { gu:'ખેવટ',   en:'Helmsman',     trans:'KheVaTa',  emoji:'⛵', diff:2 },
  { gu:'ખેતર',   en:'Farm',         trans:'KheTaRa',  emoji:'🌾', diff:2 },
  { gu:'ગેલન',   en:'Gallon',       trans:'GeLaNa',   emoji:'🛢️', diff:2 },
  { gu:'ગેરહાજર',en:'Absent',       trans:'GeRaHaJaRa', emoji:'🚫', diff:3 },
  { gu:'ગેસ',    en:'Gas',          trans:'GeSa',     emoji:'⛽', diff:1 },
  { gu:'નેત્ર',  en:'Eyes',         trans:'NeTRa',    emoji:'👁️', diff:2 },
  // Lesson 10 — vowel ઓ
  { gu:'કાગડો',  en:'Crow',         trans:'KaGaDo',   emoji:'🐦‍⬛', diff:2 },
  { gu:'ઘોડો',   en:'Horse',        trans:'GhoDo',    emoji:'🐴', diff:2 },
  { gu:'ડોલ',    en:'Bucket',       trans:'DoLa',     emoji:'🪣', diff:1 },
  { gu:'ઢોલ',    en:'Drum',         trans:'DhoLa',    emoji:'🪘', diff:1 },
  { gu:'ટોપી',   en:'Cap',          trans:'ToPi',     emoji:'🧢', diff:2 },
  { gu:'તોપ',    en:'Cannon',       trans:'ToPa',     emoji:'💣', diff:1 },
  { gu:'મહિનો',  en:'Month',        trans:'MaHiNo',   emoji:'📅', diff:2 },
  { gu:'નોકરી',  en:'Job',          trans:'NoKaRi',   emoji:'💼', diff:2 },
  { gu:'દરિયો',  en:'Sea',          trans:'DaRiYo',   emoji:'🌊', diff:2 },
  { gu:'રૂપિયો', en:'Rupee',        trans:'RuPiYo',   emoji:'💰', diff:2 },
  { gu:'મોક્ષ',  en:'Liberation',   trans:'MokSHa',   emoji:'🕊️', diff:3 },
  { gu:'અરીસો',  en:'Mirror',       trans:'AaRiSo',   emoji:'🪞', diff:2 },
  { gu:'ભરોસો',  en:'Trust',        trans:'BhaRoSo',  emoji:'🤝', diff:2 },
  { gu:'હોશિયાર',en:'Clever',       trans:'HoSHiYaRa', emoji:'🧠', diff:3 },
  { gu:'ઈશારો',  en:'Gesture',      trans:'IShaRo',   emoji:'👉', diff:2 }
];

const ALL_SENTENCES = [
  // Set 1 – Greetings & Introductions
  { gu:'નમસ્તે, તમે કેમ છો?', trans:'Namaste, tame kem chho?', en:'Hello, how are you?', set:1 },
  { gu:'મારું નામ રાહુલ છે.', trans:'Maaru naam Rahul chhe.', en:'My name is Rahul.', set:1 },
  { gu:'હું ગુજરાતી શીખું છું.', trans:'Hu gujarati sheekhu chhu.', en:'I am learning Gujarati.', set:1 },
  { gu:'તમારું નામ શું છે?', trans:'Tamaaru naam shu chhe?', en:'What is your name?', set:1 },
  { gu:'મને તમને મળીને આનંદ થયો.', trans:'Mane tamne malinekey aanand thayo.', en:'Nice to meet you.', set:1 },
  { gu:'આવજો, ફરી મળીશું.', trans:'Aavjo, fari malishi.', en:'Goodbye, see you again.', set:1 },
  { gu:'શુભ સવાર!', trans:'Shubh savaar!', en:'Good morning!', set:1 },
  { gu:'શુભ રાત્રી!', trans:'Shubh raatri!', en:'Good night!', set:1 },
  { gu:'કૃપા કરીને બેસો.', trans:'Krupaa karine beso.', en:'Please sit down.', set:1 },
  { gu:'આભાર, ખૂબ ખૂબ ધન્યવાદ.', trans:'Aabhaar, khoob khoob dhanyavaad.', en:'Thank you very much.', set:1 },
  // Set 2 – Daily Routine
  { gu:'હું સવારે વહેલો ઊઠું છું.', trans:'Hu savaare vahelo oothu chhu.', en:'I wake up early in the morning.', set:2 },
  { gu:'હું દાંત સાફ કરું છું.', trans:'Hu daant saaf karu chhu.', en:'I brush my teeth.', set:2 },
  { gu:'હું નાહીને તૈયાર થાઉં છું.', trans:'Hu naahine taiyaar thaau chhu.', en:'I get ready after bathing.', set:2 },
  { gu:'મમ્મી નાસ્તો બનાવે છે.', trans:'Mammi naasto banaave chhe.', en:'Mom makes breakfast.', set:2 },
  { gu:'હું બસમાં શાળાએ જાઉં છું.', trans:'Hu bas-maa shaalaa-e jaau chhu.', en:'I go to school by bus.', set:2 },
  { gu:'સાંજે હું રમવા જાઉં છું.', trans:'Saanje hu ramvaa jaau chhu.', en:'I go to play in the evening.', set:2 },
  { gu:'રાત્રે અમે સાથે જમીએ છીએ.', trans:'Raatre ame saathe jamie chhie.', en:'We eat dinner together at night.', set:2 },
  { gu:'હું રોજ કસરત કરું છું.', trans:'Hu roj kasrat karu chhu.', en:'I exercise every day.', set:2 },
  { gu:'સૂતા પહેલાં હું વાંચું છું.', trans:'Sutaa pahelaa hu vaanchu chhu.', en:'I read before sleeping.', set:2 },
  { gu:'મને વહેલા સૂવું ગમે છે.', trans:'Mane vahelaa suvu game chhe.', en:'I like to sleep early.', set:2 },
  // Set 3 – Family & Home
  { gu:'મારા પરિવારમાં પાંચ સભ્ય છે.', trans:'Maara parivaar-maa paanch sabhy chhe.', en:'There are five members in my family.', set:3 },
  { gu:'પપ્પા ઓફિસે જાય છે.', trans:'Pappa office jaay chhe.', en:'Dad goes to the office.', set:3 },
  { gu:'મમ્મી બહુ સારું રાંધે છે.', trans:'Mammi bahu saaru raandhe chhe.', en:'Mom cooks very well.', set:3 },
  { gu:'ભાઈ ક્રિકેટ રમે છે.', trans:'Bhai cricket rame chhe.', en:'Brother plays cricket.', set:3 },
  { gu:'બહેન ચિત્ર દોરે છે.', trans:'Bahen chitra dore chhe.', en:'Sister draws pictures.', set:3 },
  { gu:'દાદા બગીચામાં ફરે છે.', trans:'Daadaa bagicha-maa fare chhe.', en:'Grandfather walks in the garden.', set:3 },
  { gu:'દાદી વાર્તા કહે છે.', trans:'Daadi vaartaa kahe chhe.', en:'Grandmother tells stories.', set:3 },
  { gu:'અમારું ઘર સુંદર છે.', trans:'Amaaru ghar sundar chhe.', en:'Our house is beautiful.', set:3 },
  { gu:'ઘરમાં ત્રણ ઓરડા છે.', trans:'Ghar-maa tran ordaa chhe.', en:'There are three rooms in the house.', set:3 },
  { gu:'અમે રવિવારે સાથે ફરવા જઈએ છીએ.', trans:'Ame ravivaar-e saathe farvaa jaie chhie.', en:'We go out together on Sundays.', set:3 },
  // Set 4 – Nature & Weather
  { gu:'આજે વરસાદ પડે છે.', trans:'Aaje varsaad pade chhe.', en:'It is raining today.', set:4 },
  { gu:'સૂરજ પૂર્વમાં ઊગે છે.', trans:'Suraj poorva-maa ooge chhe.', en:'The sun rises in the east.', set:4 },
  { gu:'ચાંદો રાત્રે ચમકે છે.', trans:'Chaando raatre chamke chhe.', en:'The moon shines at night.', set:4 },
  { gu:'નદીનું પાણી ઠંડું છે.', trans:'Nadi-nu paani thandu chhe.', en:'The river water is cold.', set:4 },
  { gu:'પર્વત પર બરફ છે.', trans:'Parvat par baraf chhe.', en:'There is snow on the mountain.', set:4 },
  { gu:'ઝાડ પર પંખી ગાય છે.', trans:'Zaad par pankhi gaay chhe.', en:'Birds sing on the tree.', set:4 },
  { gu:'ફૂલ પર પતંગિયું બેઠું છે.', trans:'Phool par patangiyu bethu chhe.', en:'A butterfly is sitting on the flower.', set:4 },
  { gu:'દરિયો ખૂબ મોટો છે.', trans:'Dariyo khoob moto chhe.', en:'The sea is very big.', set:4 },
  { gu:'આજે ખૂબ ગરમી છે.', trans:'Aaje khoob garmi chhe.', en:'It is very hot today.', set:4 },
  { gu:'શિયાળામાં ઠંડી પડે છે.', trans:'Shiyaalaa-maa thandi pade chhe.', en:'It gets cold in winter.', set:4 },
  // Set 5 – School & Learning
  { gu:'શિક્ષક ગણિત ભણાવે છે.', trans:'Shikshak ganit bhanaave chhe.', en:'The teacher teaches mathematics.', set:5 },
  { gu:'વિદ્યાર્થીઓ ધ્યાનથી વાંચે છે.', trans:'Vidyaarthio dhyaan-thi vaanche chhe.', en:'Students read carefully.', set:5 },
  { gu:'શાળાનો ઘંટ વાગ્યો.', trans:'Shaalaa-no ghant vaagyo.', en:'The school bell rang.', set:5 },
  { gu:'આજે ગુજરાતીનો વર્ગ છે.', trans:'Aaje gujarati-no varg chhe.', en:'Today there is a Gujarati class.', set:5 },
  { gu:'હું ગૃહકાર્ય પૂરું કરું છું.', trans:'Hu gruhkaarya pooru karu chhu.', en:'I finish my homework.', set:5 },
  { gu:'મારો મિત્ર ખૂબ હોશિયાર છે.', trans:'Maaro mitra khoob hoshiyaar chhe.', en:'My friend is very smart.', set:5 },
  { gu:'પુસ્તકાલયમાં ઘણાં પુસ્તકો છે.', trans:'Pustakalay-maa ghanaa pustako chhe.', en:'There are many books in the library.', set:5 },
  { gu:'અમે વિજ્ઞાનનો પ્રયોગ કર્યો.', trans:'Ame vigyaan-no prayog karyo.', en:'We did a science experiment.', set:5 },
  { gu:'રમતના મેદાનમાં બાળકો રમે છે.', trans:'Ramat-naa medaan-maa baalko rame chhe.', en:'Children play on the playground.', set:5 },
  { gu:'પરીક્ષામાં સારા માર્ક્સ આવ્યા.', trans:'Parikshaa-maa saaraa marks aavyaa.', en:'I got good marks in the exam.', set:5 },
  // Set 6 – Food & Kitchen
  { gu:'મમ્મી દાળ-ભાત બનાવે છે.', trans:'Mammi daal-bhaat banaave chhe.', en:'Mom makes dal and rice.', set:6 },
  { gu:'ચા ગરમ ગરમ પીવી ગમે છે.', trans:'Chaa garam garam peevi game chhe.', en:'I like to drink hot tea.', set:6 },
  { gu:'કેરી ખૂબ મીઠી છે.', trans:'Keri khoob meethi chhe.', en:'The mango is very sweet.', set:6 },
  { gu:'લીંબુનો રસ ખાટો છે.', trans:'Leembu-no ras khaato chhe.', en:'Lemon juice is sour.', set:6 },
  { gu:'રોટલી ગરમ ખાવી જોઈએ.', trans:'Rotli garam khaavi joie.', en:'Bread should be eaten hot.', set:6 },
  { gu:'શાકમાં મીઠું ઓછું છે.', trans:'Shaak-maa meethu ochhu chhe.', en:'The vegetable has less salt.', set:6 },
  { gu:'મને ગાજરનો હલવો ગમે છે.', trans:'Mane gaajar-no halvo game chhe.', en:'I like carrot pudding.', set:6 },
  { gu:'દૂધમાં ખાંડ નાખો.', trans:'Doodh-maa khaand naakho.', en:'Add sugar to the milk.', set:6 },
  { gu:'પાણી પીવું ખૂબ જરૂરી છે.', trans:'Paani pivu khoob jaroori chhe.', en:'Drinking water is very important.', set:6 },
  { gu:'ફળ ખાવાથી તંદુરસ્તી સારી રહે છે.', trans:'Fal khaavaathi tandurasti saari rahe chhe.', en:'Eating fruits keeps health good.', set:6 },
  // Set 7 – Travel & Places
  { gu:'અમે ગાડીમાં મુસાફરી કરીએ છીએ.', trans:'Ame gaadi-maa musaafari karie chhie.', en:'We travel by car.', set:7 },
  { gu:'ટ્રેન બહુ ઝડપી જાય છે.', trans:'Train bahu zadpi jaay chhe.', en:'The train goes very fast.', set:7 },
  { gu:'વિમાનમથક દૂર છે.', trans:'Vimaan-mathak door chhe.', en:'The airport is far away.', set:7 },
  { gu:'બજારમાં ઘણી દુકાનો છે.', trans:'Bajaar-maa ghani dukano chhe.', en:'There are many shops in the market.', set:7 },
  { gu:'મંદિરમાં ઘણા લોકો આવે છે.', trans:'Mandir-maa ghanaa loko aave chhe.', en:'Many people come to the temple.', set:7 },
  { gu:'અમે ઉનાળામાં દરિયે જઈએ છીએ.', trans:'Ame unaalaa-maa dariye jaie chhie.', en:'We go to the beach in summer.', set:7 },
  { gu:'પહાડ પર ચઢવું મજાનું છે.', trans:'Pahaad par chadhvu majaa-nu chhe.', en:'Climbing the mountain is fun.', set:7 },
  { gu:'ગામડામાં હવા શુદ્ધ છે.', trans:'Gaamdaa-maa havaa shuddh chhe.', en:'The air is pure in the village.', set:7 },
  { gu:'શહેરમાં ઘણી ગાડીઓ છે.', trans:'Shaher-maa ghani gaadio chhe.', en:'There are many cars in the city.', set:7 },
  { gu:'રસ્તા પર ટ્રાફિક ઘણો છે.', trans:'Rastaa par traffic ghano chhe.', en:'There is a lot of traffic on the road.', set:7 },
  // Set 8 – Health & Body
  { gu:'ડૉક્ટર દવા આપે છે.', trans:'Doctor davaa aape chhe.', en:'The doctor gives medicine.', set:8 },
  { gu:'કસરત કરવાથી શરીર મજબૂત થાય છે.', trans:'Kasrat karvaathi shareer majboot thaay chhe.', en:'Exercise makes the body strong.', set:8 },
  { gu:'મારા હાથમાં પાંચ આંગળીઓ છે.', trans:'Maara haath-maa paanch aangliyoo chhe.', en:'I have five fingers on my hand.', set:8 },
  { gu:'આંખોથી અમે જોઈએ છીએ.', trans:'Aankho-thi ame joie chhie.', en:'We see with our eyes.', set:8 },
  { gu:'કાનથી અમે સાંભળીએ છીએ.', trans:'Kaan-thi ame saambhlie chhie.', en:'We hear with our ears.', set:8 },
  { gu:'રોજ સવારે દોડવું સારું છે.', trans:'Roj savaare dodvu saaru chhe.', en:'Running every morning is good.', set:8 },
  { gu:'વધારે પાણી પીવું જોઈએ.', trans:'Vadhaare paani pivu joie.', en:'One should drink more water.', set:8 },
  { gu:'ઊંઘ પૂરી લેવી જરૂરી છે.', trans:'Oongh poori levi jaroori chhe.', en:'Getting enough sleep is necessary.', set:8 },
  { gu:'સ્વચ્છતા ખૂબ મહત્ત્વની છે.', trans:'Swachchhataa khoob mahattvani chhe.', en:'Cleanliness is very important.', set:8 },
  { gu:'હાથ ધોવા બહુ જરૂરી છે.', trans:'Haath dhovaa bahu jaroori chhe.', en:'Washing hands is very important.', set:8 },
  // Set 9 – Animals
  { gu:'કૂતરો વફાદાર પ્રાણી છે.', trans:'Kutro vafaadaar praani chhe.', en:'The dog is a loyal animal.', set:9 },
  { gu:'બિલાડી ઉંદર પકડે છે.', trans:'Biladi undar pakde chhe.', en:'The cat catches mice.', set:9 },
  { gu:'હાથી ખૂબ મોટો છે.', trans:'Hathi khoob moto chhe.', en:'The elephant is very big.', set:9 },
  { gu:'સસલું ખૂબ ઝડપી દોડે છે.', trans:'Saslu khoob zadpi dode chhe.', en:'The rabbit runs very fast.', set:9 },
  { gu:'મોર વરસાદમાં નાચે છે.', trans:'Mor varsaad-maa naache chhe.', en:'The peacock dances in the rain.', set:9 },
  { gu:'માછલી પાણીમાં તરે છે.', trans:'Maachli paani-maa tare chhe.', en:'The fish swims in water.', set:9 },
  { gu:'પોપટ લીલા રંગનો છે.', trans:'Popat leelaa rang-no chhe.', en:'The parrot is green in color.', set:9 },
  { gu:'ગાય ઘાસ ખાય છે.', trans:'Gaay ghaas khaay chhe.', en:'The cow eats grass.', set:9 },
  { gu:'સિંહ જંગલનો રાજા છે.', trans:'Sinh jangal-no raajaa chhe.', en:'The lion is the king of the jungle.', set:9 },
  { gu:'વાંદરો ઝાડ પર ચઢે છે.', trans:'Vaandro zaad par chadhe chhe.', en:'The monkey climbs the tree.', set:9 },
  // Set 10 – Emotions & Feelings
  { gu:'મને ખુશી થાય છે.', trans:'Mane khushi thaay chhe.', en:'I feel happy.', set:10 },
  { gu:'તે ઉદાસ છે.', trans:'Te udaas chhe.', en:'He/She is sad.', set:10 },
  { gu:'મને ડર લાગે છે.', trans:'Mane dar laage chhe.', en:'I feel scared.', set:10 },
  { gu:'બાળક રડે છે.', trans:'Baalak rade chhe.', en:'The child is crying.', set:10 },
  { gu:'અમે બધા ખુશ છીએ.', trans:'Ame badhaa khush chhie.', en:'We are all happy.', set:10 },
  { gu:'મારો મિત્ર ગુસ્સે છે.', trans:'Maaro mitra gusse chhe.', en:'My friend is angry.', set:10 },
  { gu:'મને આશ્ચર્ય થયું.', trans:'Mane aashcharya thayu.', en:'I was surprised.', set:10 },
  { gu:'તે ખૂબ થાકી ગયો.', trans:'Te khoob thaaki gayo.', en:'He got very tired.', set:10 },
  { gu:'મને ગર્વ છે.', trans:'Mane garv chhe.', en:'I am proud.', set:10 },
  { gu:'દાદીને અમારી ચિંતા થાય છે.', trans:'Daadi-ne amaari chintaa thaay chhe.', en:'Grandmother worries about us.', set:10 },
  // Set 11 – Festivals
  { gu:'દિવાળી પર અમે દીવા પ્રગટાવીએ છીએ.', trans:'Divali par ame deevaa pragtaavie chhie.', en:'We light lamps on Diwali.', set:11 },
  { gu:'હોળીમાં રંગો ઉડાડીએ છીએ.', trans:'Holi-maa rango udaadie chhie.', en:'We throw colors on Holi.', set:11 },
  { gu:'ઉત્તરાયણ પર પતંગ ચગાવીએ છીએ.', trans:'Uttaraayan par patang chagaavie chhie.', en:'We fly kites on Uttarayan.', set:11 },
  { gu:'નવરાત્રીમાં ગરબા રમીએ છીએ.', trans:'Navratri-maa garbaa ramie chhie.', en:'We play Garba during Navratri.', set:11 },
  { gu:'તહેવારમાં મીઠાઈ ખાઈએ છીએ.', trans:'Tahevaar-maa meethaai khaie chhie.', en:'We eat sweets during festivals.', set:11 },
  { gu:'રક્ષાબંધન પર બહેન રાખડી બાંધે છે.', trans:'Rakshaabandhan par bahen raakhdi baandhe chhe.', en:'Sister ties rakhi on Rakshabandhan.', set:11 },
  { gu:'ગણેશ ચતુર્થી પર ગણપતિની પૂજા કરીએ છીએ.', trans:'Ganesh chaturthi par ganpati-ni poojaa karie chhie.', en:'We worship Ganpati on Ganesh Chaturthi.', set:11 },
  { gu:'જન્માષ્ટમીએ કૃષ્ણનો જન્મ ઊજવીએ છીએ.', trans:'Janmaashtami-e Krishna-no janm oojvie chhie.', en:'We celebrate Krishna birth on Janmashtami.', set:11 },
  { gu:'દશેરા પર રાવણ દહન થાય છે.', trans:'Dasheraa par Raavan dahan thaay chhe.', en:'Ravana effigy is burnt on Dussehra.', set:11 },
  { gu:'નવું વર્ષ બધાને મુબારક!', trans:'Navu varsh badhaa-ne mubaarak!', en:'Happy New Year to everyone!', set:11 },
  // Set 12 – Shopping & Money
  { gu:'આ કેટલાનું છે?', trans:'Aa ketlaa-nu chhe?', en:'How much does this cost?', set:12 },
  { gu:'મને બે કિલો ખાંડ આપો.', trans:'Mane be kilo khaand aapo.', en:'Give me two kilos of sugar.', set:12 },
  { gu:'આ ખૂબ મોંઘું છે.', trans:'Aa khoob monghu chhe.', en:'This is very expensive.', set:12 },
  { gu:'થોડું સસ્તું કરો.', trans:'Thodu sastu karo.', en:'Make it a bit cheaper.', set:12 },
  { gu:'પૈસા અહીં મૂકો.', trans:'Paisaa ahi mooko.', en:'Put the money here.', set:12 },
  { gu:'બિલ બનાવો.', trans:'Bill banaavo.', en:'Make the bill.', set:12 },
  { gu:'દુકાન બંધ થઈ ગઈ.', trans:'Dukaan bandh thai gai.', en:'The shop has closed.', set:12 },
  { gu:'બજારમાં ઘણી ભીડ છે.', trans:'Bajaar-maa ghani bheed chhe.', en:'The market is very crowded.', set:12 },
  { gu:'મને છુટ્ટા પૈસા આપો.', trans:'Mane chhuttaa paisaa aapo.', en:'Give me change.', set:12 },
  { gu:'આ થેલી ભરી દો.', trans:'Aa theli bhari do.', en:'Fill this bag.', set:12 },
  // Set 13 – Sports & Games
  { gu:'ક્રિકેટ ભારતની લોકપ્રિય રમત છે.', trans:'Cricket bharat-ni lokpriya ramat chhe.', en:'Cricket is a popular game in India.', set:13 },
  { gu:'અમે ફૂટબોલ રમીએ છીએ.', trans:'Ame football ramie chhie.', en:'We play football.', set:13 },
  { gu:'તે દોડમાં પ્રથમ આવ્યો.', trans:'Te dod-maa pratham aavyo.', en:'He came first in the race.', set:13 },
  { gu:'તરવું સારી કસરત છે.', trans:'Tarvu saari kasrat chhe.', en:'Swimming is good exercise.', set:13 },
  { gu:'કબડ્ડી મજાની રમત છે.', trans:'Kabaddi majaa-ni ramat chhe.', en:'Kabaddi is a fun game.', set:13 },
  { gu:'બેડમિન્ટન રમવું ગમે છે.', trans:'Badminton ramvu game chhe.', en:'I like to play badminton.', set:13 },
  { gu:'ટીમે મેચ જીતી.', trans:'Team-e match jeeti.', en:'The team won the match.', set:13 },
  { gu:'દડો ખૂબ ઝડપથી ગયો.', trans:'Dado khoob zadp-thi gayo.', en:'The ball went very fast.', set:13 },
  { gu:'રમતનો સમય પૂરો થયો.', trans:'Ramat-no samay pooro thayo.', en:'Game time is over.', set:13 },
  { gu:'દરેક બાળકે રમવું જોઈએ.', trans:'Darek baalke ramvu joie.', en:'Every child should play.', set:13 },
  // Set 14 – Manners & Politeness
  { gu:'કૃપા કરીને મદદ કરો.', trans:'Krupaa karine madad karo.', en:'Please help.', set:14 },
  { gu:'માફ કરશો.', trans:'Maaf karsho.', en:'Please forgive me.', set:14 },
  { gu:'ધન્યવાદ.', trans:'Dhanyavaad.', en:'Thank you.', set:14 },
  { gu:'કોઈની મજાક ન કરો.', trans:'Koi-ni majaak na karo.', en:'Do not make fun of anyone.', set:14 },
  { gu:'મોટાનું સન્માન કરો.', trans:'Motaa-nu sanmaan karo.', en:'Respect your elders.', set:14 },
  { gu:'લાઇનમાં ઊભા રહો.', trans:'Line-maa oobhaa raho.', en:'Stand in the queue.', set:14 },
  { gu:'કચરો ડસ્ટબિનમાં નાખો.', trans:'Kachro dustbin-maa naakho.', en:'Put trash in the dustbin.', set:14 },
  { gu:'બીજાની વાત સાંભળો.', trans:'Beejaa-ni vaat saambhlo.', en:'Listen to others.', set:14 },
  { gu:'સાચું બોલો.', trans:'Saachu bolo.', en:'Speak the truth.', set:14 },
  { gu:'શાંતિથી વાત કરો.', trans:'Shaanti-thi vaat karo.', en:'Speak politely.', set:14 },
  // Set 15 – Garden & Plants
  { gu:'બગીચામાં ગુલાબ ખીલ્યા છે.', trans:'Bagicha-maa gulaab kheelyaa chhe.', en:'Roses have bloomed in the garden.', set:15 },
  { gu:'છોડને રોજ પાણી આપો.', trans:'Chhod-ne roj paani aapo.', en:'Water the plants daily.', set:15 },
  { gu:'ઝાડ પર ફળ પાક્યા છે.', trans:'Zaad par fal paakya chhe.', en:'Fruits have ripened on the tree.', set:15 },
  { gu:'બીજ વાવ્યું અને છોડ ઊગ્યો.', trans:'Beej vaavyu ane chhod oogyo.', en:'I planted a seed and a plant grew.', set:15 },
  { gu:'ફૂલમાં સુગંધ છે.', trans:'Phool-maa sugandh chhe.', en:'The flower has fragrance.', set:15 },
  { gu:'ઘાસ લીલું છે.', trans:'Ghaas leelu chhe.', en:'The grass is green.', set:15 },
  { gu:'પાંદડાં ખરી રહ્યાં છે.', trans:'Paanddaa khari rahyaa chhe.', en:'Leaves are falling.', set:15 },
  { gu:'તુલસીનો છોડ પવિત્ર છે.', trans:'Tulsi-no chhod pavitra chhe.', en:'The basil plant is sacred.', set:15 },
  { gu:'ખેતરમાં ઘઉં ઊગ્યા છે.', trans:'Khetar-maa ghau oogyaa chhe.', en:'Wheat has grown in the field.', set:15 },
  { gu:'આંબા પર કેરી લાગી છે.', trans:'Aambaa par keri laagi chhe.', en:'Mangoes have appeared on the mango tree.', set:15 },
  // Set 16 – Occupations
  { gu:'ડૉક્ટર દર્દીનો ઈલાજ કરે છે.', trans:'Doctor dardi-no ilaaj kare chhe.', en:'The doctor treats the patient.', set:16 },
  { gu:'ખેડૂત ખેતરમાં કામ કરે છે.', trans:'Khedut khetar-maa kaam kare chhe.', en:'The farmer works in the field.', set:16 },
  { gu:'પોલીસ લોકોની રક્ષા કરે છે.', trans:'Polees loko-ni rakshaa kare chhe.', en:'Police protect people.', set:16 },
  { gu:'રસોઈયો જમવાનું બનાવે છે.', trans:'Rasoiyo jamvaa-nu banaave chhe.', en:'The cook makes food.', set:16 },
  { gu:'ડ્રાઈવર ગાડી ચલાવે છે.', trans:'Driver gaadi chalaave chhe.', en:'The driver drives the car.', set:16 },
  { gu:'વકીલ કોર્ટમાં લડે છે.', trans:'Vakeel court-maa lade chhe.', en:'The lawyer argues in court.', set:16 },
  { gu:'ચિત્રકાર ચિત્ર દોરે છે.', trans:'Chitrakaar chitra dore chhe.', en:'The artist draws pictures.', set:16 },
  { gu:'ગાયક ગીત ગાય છે.', trans:'Gaayak geet gaay chhe.', en:'The singer sings songs.', set:16 },
  { gu:'ધોબી કપડાં ધોવે છે.', trans:'Dhobi kapdaa dhove chhe.', en:'The washerman washes clothes.', set:16 },
  { gu:'દરજી કપડાં સીવે છે.', trans:'Darji kapdaa seeve chhe.', en:'The tailor stitches clothes.', set:16 },
  // Set 17 – Colors & Descriptions
  { gu:'ગુલાબ લાલ રંગનું છે.', trans:'Gulaab laal rang-nu chhe.', en:'The rose is red.', set:17 },
  { gu:'આકાશ વાદળી છે.', trans:'Aakaash vaadli chhe.', en:'The sky is blue.', set:17 },
  { gu:'ઘાસ લીલું છે.', trans:'Ghaas leelu chhe.', en:'Grass is green.', set:17 },
  { gu:'સૂરજ પીળો દેખાય છે.', trans:'Suraj peelo dekhaay chhe.', en:'The sun looks yellow.', set:17 },
  { gu:'કાગડો કાળા રંગનો છે.', trans:'Kaagdo kaalaa rang-no chhe.', en:'The crow is black.', set:17 },
  { gu:'બરફ સફેદ છે.', trans:'Baraf safed chhe.', en:'Snow is white.', set:17 },
  { gu:'નારંગી મીઠું ફળ છે.', trans:'Narangi meethu fal chhe.', en:'Orange is a sweet fruit.', set:17 },
  { gu:'મેઘધનુષમાં સાત રંગ છે.', trans:'Meghdhanush-maa saat rang chhe.', en:'The rainbow has seven colors.', set:17 },
  { gu:'ગુલાબી રંગ ખૂબ સુંદર છે.', trans:'Gulaabi rang khoob sundar chhe.', en:'Pink color is very beautiful.', set:17 },
  { gu:'મારું મનગમતું રંગ વાદળી છે.', trans:'Maaru mangamtu rang vaadli chhe.', en:'My favorite color is blue.', set:17 },
  // Set 18 – Counting & Numbers
  { gu:'મારી પાસે બે પુસ્તકો છે.', trans:'Maari paase be pustako chhe.', en:'I have two books.', set:18 },
  { gu:'અઠવાડિયામાં સાત દિવસ છે.', trans:'Athvaadiyaa-maa saat divas chhe.', en:'There are seven days in a week.', set:18 },
  { gu:'વર્ષમાં બાર મહિના છે.', trans:'Varsh-maa baar mahinaa chhe.', en:'There are twelve months in a year.', set:18 },
  { gu:'એક ડઝનમાં બાર વસ્તુ હોય છે.', trans:'Ek dozen-maa baar vastu hoy chhe.', en:'There are twelve items in a dozen.', set:18 },
  { gu:'મારા વર્ગમાં ત્રીસ વિદ્યાર્થી છે.', trans:'Maara varg-maa trees vidyaarthi chhe.', en:'There are thirty students in my class.', set:18 },
  { gu:'સો પૈસાનો એક રૂપિયો.', trans:'So paisa-no ek rupiyo.', en:'One hundred paise make a rupee.', set:18 },
  { gu:'પાંચ અને પાંચ દસ થાય.', trans:'Paanch ane paanch das thaay.', en:'Five and five make ten.', set:18 },
  { gu:'ત્રણ ગણ્યા ચાર ત્રણ બાર.', trans:'Tran ganyaa chaar tran baar.', en:'Three times four is twelve.', set:18 },
  { gu:'પચાસ અડધા સો છે.', trans:'Pachaas addhaa so chhe.', en:'Fifty is half of a hundred.', set:18 },
  { gu:'દસથી વીસ સુધી ગણો.', trans:'Das-thi vees sudhi gano.', en:'Count from ten to twenty.', set:18 },
  // Set 19 – Weather Sayings
  { gu:'આજે ખૂબ તડકો છે.', trans:'Aaje khoob tadko chhe.', en:'It is very sunny today.', set:19 },
  { gu:'વાદળ ગાજે છે.', trans:'Vaadal gaaje chhe.', en:'The clouds are thundering.', set:19 },
  { gu:'ધુમ્મસ હોવાથી કંઈ દેખાતું નથી.', trans:'Dhummas hovaathi kai dekhaatu nathi.', en:'Nothing is visible due to fog.', set:19 },
  { gu:'પવન ખૂબ જોરથી ફૂંકાય છે.', trans:'Pavan khoob jor-thi phoonkaay chhe.', en:'The wind is blowing very hard.', set:19 },
  { gu:'કાલે કદાચ વરસાદ પડશે.', trans:'Kaale kadaach varsaad padshe.', en:'It might rain tomorrow.', set:19 },
  { gu:'છત્રી લઈ લો, વરસાદ આવશે.', trans:'Chhatri lai lo, varsaad aavshe.', en:'Take an umbrella, it will rain.', set:19 },
  { gu:'ગરમીમાં ઠંડું પાણી પીવો.', trans:'Garmi-maa thandu paani peevo.', en:'Drink cold water in summer.', set:19 },
  { gu:'શિયાળામાં સ્વેટર પહેરો.', trans:'Shiyaalaa-maa sweater pahero.', en:'Wear a sweater in winter.', set:19 },
  { gu:'ચોમાસામાં ખેડૂતો ખુશ થાય છે.', trans:'Chomaasaa-maa kheduto khush thaay chhe.', en:'Farmers are happy in monsoon.', set:19 },
  { gu:'વસંતમાં ફૂલો ખીલે છે.', trans:'Vasant-maa phoolo kheele chhe.', en:'Flowers bloom in spring.', set:19 },
  // Set 20 – Time & Days
  { gu:'આજે સોમવાર છે.', trans:'Aaje somvaar chhe.', en:'Today is Monday.', set:20 },
  { gu:'કાલે મંગળવાર છે.', trans:'Kaale mangalvaar chhe.', en:'Tomorrow is Tuesday.', set:20 },
  { gu:'રવિવારે રજા હોય છે.', trans:'Ravivaar-e rajaa hoy chhe.', en:'Sunday is a holiday.', set:20 },
  { gu:'હવે ત્રણ વાગ્યા છે.', trans:'Have tran vaagyaa chhe.', en:'It is three o clock now.', set:20 },
  { gu:'સવારે છ વાગે ઊઠવું.', trans:'Savaare chha vaage oothvu.', en:'Wake up at six in the morning.', set:20 },
  { gu:'જાન્યુઆરી પહેલો મહિનો છે.', trans:'January pahelo mahino chhe.', en:'January is the first month.', set:20 },
  { gu:'એક કલાકમાં સાઠ મિનિટ હોય છે.', trans:'Ek kalaak-maa saath minute hoy chhe.', en:'There are sixty minutes in an hour.', set:20 },
  { gu:'આજે તારીખ કેટલી છે?', trans:'Aaje taarikh ketli chhe?', en:'What is today date?', set:20 },
  { gu:'ગઈ કાલે ખૂબ મજા આવી.', trans:'Gai kaale khoob majaa aavi.', en:'Yesterday was a lot of fun.', set:20 },
  { gu:'આવતી કાલે પરીક્ષા છે.', trans:'Aavti kaale parikshaa chhe.', en:'The exam is tomorrow.', set:20 },
  // Set 21 — Lesson 2 (vowel આ) sentences from Akshar Gujarati Learner 2
  { gu:'કાનન, તારા કાન સાફ કર.', trans:'KaNaNa, TaRa KaNa SaFa KaRa.', en:'Kanan, clean your ears.', set:21 },
  { gu:'કાગડો બધા કાળા કાળા.', trans:'KaGaDo BaDhaa KaaLa KaaLa.', en:'All crows are black, very black.', set:21 },
  { gu:'તારા, ખાટા ફળ ન ખા.', trans:'TaRa, KhaTa FaLa Na Kha.', en:'Tara, do not eat sour fruits.', set:21 },
  { gu:'ભાઈ, ઘાસ કાપ.', trans:'BHaI, GhaSa KaPa.', en:'Brother, cut the grass.', set:21 },
  { gu:'ઘાટ પર નહાવા જા.', trans:'GhaTa PaRa NaHaVa Ja.', en:'Go to the river bank for a bath.', set:21 },
  { gu:'બા, ચા લાવ.', trans:'Ba, CHa Lava.', en:'Mother, bring tea.', set:21 },
  { gu:'આચાર બરાબર રાખ.', trans:'AaCHaRa BaRaBaRa RaKHa.', en:'Keep your conduct good.', set:21 },
  { gu:'કાજલ, ગાયન ગા.', trans:'KaJaLa, GaYaNa Ga.', en:'Kajal, sing a song.', set:21 },
  { gu:'ગજર ખા, તાકાત વધાર.', trans:'GaJaRa Kha, TaKaTa VaDhaRa.', en:'Eat carrots, increase your strength.', set:21 },
  { gu:'છાયા, છાલ ઉતાર.', trans:'CHHaYa, CHHaLa UTaRa.', en:'Chhaya, remove the peels.', set:21 },
  // Set 22 — Lesson 3 (vowel એ) sentences
  { gu:'કેતન, કેમ છે?', trans:'KeTaNa, KeMa CHHe?', en:'Ketan, how are you?', set:22 },
  { gu:'તારા કેશ કાળા છે.', trans:'TaRa KeSHa KaLa CHHe.', en:'Your hair is black.', set:22 },
  { gu:'નટ ખેલ કરે છે.', trans:'NaTa KheLa KaRe CHHe.', en:'The rope-dancer is doing his play.', set:22 },
  { gu:'ખેવટ રામને લાવે છે.', trans:'KheVaTa RaMaNe LaVe CHHe.', en:'The boatman is bringing Ram.', set:22 },
  { gu:'સવારે મા-બાપને પગે લાગ.', trans:'SaVaRe Ma-BaPaNe PaGe LaGa.', en:'Bow down to parents in the morning.', set:22 },
  { gu:'એક ગેલન લાવ.', trans:'EKa GeLaNa LaVa.', en:'Bring one gallon.', set:22 },
  { gu:'ગણેશને નમન કરો.', trans:'GaNeSHaNe NaMaNa KaRo.', en:'Bow down to Ganesh.', set:22 },
  { gu:'સફેદ કેક ખા.', trans:'SaFeDa KeKa Kha.', en:'Eat the white cake.', set:22 },
  { gu:'દેશ-પરદેશ ફરે.', trans:'DeSHa-PaRaDeSHa FaRe.', en:'Travel to many countries.', set:22 },
  { gu:'ખેતરમાં અનાજ પાકે.', trans:'KheTaRa-Ma AaNaJa PaKe.', en:'Grain ripens in the field.', set:22 },
  // Set 23 — Lesson 10 (vowel ઓ) sentences
  { gu:'કાગડો ડોક વાળી પાણી પીવે છે.', trans:'KaGaDo DoKa VaaLi PaaNi PiVe CHHe.', en:'The crow bends its neck and drinks water.', set:23 },
  { gu:'આરતી વખતે ઢોલ વાગે.', trans:'AaRaTi VaKhaTe DhoLa VaGe.', en:'Drums are played during arti.', set:23 },
  { gu:'ભણો ગણો હોશિયાર બનો.', trans:'BHaNo GaNo HoSHiYaRa BaNo.', en:'Learn and become smart.', set:23 },
  { gu:'આ તોપ લોઢાની છે.', trans:'Aa ToPa LoDhaaNi CHHe.', en:'This cannon is made of iron.', set:23 },
  { gu:'સારા મિત્રોની સોબત રાખો.', trans:'SaRa MiTRoNi SoBaTa RaKHo.', en:'Keep company of good friends.', set:23 },
  { gu:'દૂધથી શરીરને પોષણ મળે.', trans:'DuDhaThi SHaRiRaNe PoSHaNa MaLe.', en:'The body gets nutrition from milk.', set:23 },
  { gu:'જાજમ નીચેથી કચરો સાફ કરો.', trans:'JaJaMa NiCHeThi KaCHaRo SaFa KaRo.', en:'Clean the garbage under the carpet.', set:23 },
  { gu:'ગોપાલ તબેથો લાવ.', trans:'GoPaLa TaBeTHo LaVa.', en:'Gopal, bring the spatula.', set:23 },
  { gu:'જો જો, ચાલતાં ચાલતાં ઠોકર ન વાગે.', trans:'Jo Jo, CHaLaTaa CHaLaTaa ThoKaRa Na VaGe.', en:'Look out, do not stumble while walking.', set:23 },
  { gu:'દુનિયા ગોળ છે.', trans:'DuNiYa GoLa CHHe.', en:'The world is round.', set:23 }
];

// Daily rotation helper - deterministic shuffle based on day number
function getDayNumber() {
  const now = new Date();
  return Math.floor(now.getTime() / 86400000); // days since epoch
}
function seededShuffle(arr, seed) {
  const a = [...arr];
  let s = seed;
  for (let i = a.length - 1; i > 0; i--) {
    s = (s * 9301 + 49297) % 233280;
    const j = Math.floor((s / 233280) * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function getDailyWords() {
  const day = getDayNumber();
  const easy = ALL_READING_WORDS.filter(w => w.diff === 1);
  const med = ALL_READING_WORDS.filter(w => w.diff === 2);
  const hard = ALL_READING_WORDS.filter(w => w.diff === 3);
  return [
    { category: '🟢 Easy Words (સરળ)', words: seededShuffle(easy, day).slice(0, 6) },
    { category: '🟡 Medium Words (મધ્યમ)', words: seededShuffle(med, day + 1).slice(0, 6) },
    { category: '🟠 Longer Words (લાંબા)', words: seededShuffle(hard, day + 2).slice(0, 8) }
  ];
}
function getDailySentences() {
  const day = getDayNumber();
  const totalSets = 23;
  const setNum = (day % totalSets) + 1;
  const todaySet = ALL_SENTENCES.filter(s => s.set === setNum);
  const bonus = seededShuffle(ALL_SENTENCES.filter(s => s.set !== setNum), day).slice(0, 5);
  return { setNum, sentences: [...todaySet, ...bonus] };
}
const SENTENCE_SET_NAMES = {
  1: '📗 Greetings', 2: '📘 Daily Routine', 3: '📙 Family & Home',
  4: '📕 Nature & Weather', 5: '📒 School & Learning', 6: '📓 Food & Kitchen',
  7: '📔 Travel & Places', 8: '📕 Health & Body', 9: '🐾 Animals',
  10: '💖 Emotions', 11: '🎉 Festivals', 12: '🛒 Shopping',
  13: '⚽ Sports & Games', 14: '🙏 Manners', 15: '🌿 Garden & Plants',
  16: '👷 Occupations', 17: '🎨 Colors', 18: '🔢 Counting',
  19: '🌤️ Weather Sayings', 20: '🕐 Time & Days',
  21: '📖 Book Lesson 2 — Vowel આ', 22: '📖 Book Lesson 3 — Vowel એ',
  23: '📖 Book Lesson 10 — Vowel ઓ'
};

/* =============================================================
   BOOK LESSONS — full curriculum from "Akshar Gujarati Learner 2"
   (BAPS, Devendra C. Patel & Ashok P. Dave, 2003), 113 pages.
   Each lesson focuses on one vowel and combines its matra with
   consonants. Vocabulary, sentences and reading passages here are
   sourced page-by-page from the workbook.
   ============================================================= */
const BOOK_LESSONS = [
  {
    num: 1, gu: 'પાઠ ૧', title: 'Recap of Book One', vowel: null,
    intro: 'Review words and sentences from Book One — single-letter combinations.',
    words: [
      { gu:'હંસ', en:'Swan', trans:'HaMSa' },
      { gu:'સરસ', en:'Nice', trans:'SaRaSa' },
      { gu:'રમત', en:'Game', trans:'RaMaTa' },
      { gu:'નમન', en:'Bow', trans:'NaMaNa' },
      { gu:'પવન', en:'Wind', trans:'PaVaNa' },
      { gu:'ભજન', en:'Devotional song', trans:'BHaJaNa' },
      { gu:'રક્ષણ', en:'Protection', trans:'RaKSHaNa' },
      { gu:'નખ', en:'Nail', trans:'NaKHa' },
      { gu:'ઉપર', en:'Above', trans:'UPaRa' },
      { gu:'ધન', en:'Wealth', trans:'DHaNa' },
      { gu:'જગત', en:'World', trans:'JaGaTa' },
      { gu:'યશ', en:'Glory', trans:'YaSHa' }
    ],
    sentences: [
      { gu:'ભરત, ન ડર.', trans:'BHaRaTa, Na DaRa.', en:'Bharat, don’t be afraid.' },
      { gu:'મનન, ભજન કર.', trans:'MaNaNa, BHaJaNa KaRa.', en:'Manan, do bhajan.' },
      { gu:'પવન, પત્ર લખ.', trans:'PaVaNa, PaTRa LaKHa.', en:'Pavan, write a letter.' },
      { gu:'રામ, રમત રમ.', trans:'RaMa, RaMaTa RaMa.', en:'Ram, play the game.' }
    ]
  },
  {
    num: 2, gu: 'પાઠ ૨', title: 'Vowel આ (“aa”)', vowel: 'આ',
    intro: 'The aa-matra ા is attached to consonants in the middle or end of a word.',
    words: [
      { gu:'કાન', en:'Ear', trans:'KaNa' },
      { gu:'કામ', en:'Work', trans:'KaMa' },
      { gu:'મકાન', en:'Building', trans:'MaKaNa' },
      { gu:'કાગળ', en:'Paper', trans:'KaGaLa' },
      { gu:'ઘાસ', en:'Grass', trans:'GHaSa' },
      { gu:'ગાય', en:'Cow', trans:'GaYa' },
      { gu:'ગામ', en:'Village', trans:'GaMa' },
      { gu:'ચા', en:'Tea', trans:'CHa' },
      { gu:'છાશ', en:'Buttermilk', trans:'CHHaSHa' },
      { gu:'જાગ', en:'Arise', trans:'JaGa' },
      { gu:'ઝાડ', en:'Tree', trans:'ZaaDa' },
      { gu:'તાર', en:'Wire', trans:'TaRa' },
      { gu:'દાન', en:'Donation', trans:'DaNa' },
      { gu:'નામ', en:'Name', trans:'NaMa' },
      { gu:'પાન', en:'Leaf', trans:'PaNa' },
      { gu:'બાગ', en:'Garden', trans:'BaGa' },
      { gu:'ભારત', en:'India', trans:'BHaRaTa' },
      { gu:'માતા', en:'Mother', trans:'MaTa' },
      { gu:'યાદ', en:'Memory', trans:'YaaDa' },
      { gu:'રાત', en:'Night', trans:'RaTa' },
      { gu:'લાલ', en:'Red', trans:'LaLa' },
      { gu:'વાદળ', en:'Cloud', trans:'VaDaLa' },
      { gu:'શાળા', en:'School', trans:'SHaLa' },
      { gu:'સાપ', en:'Snake', trans:'SaPa' },
      { gu:'હાર', en:'Garland', trans:'HaRa' }
    ],
    sentences: [
      { gu:'કાનન, તારા કાન સાફ કર.', trans:'KaNaNa, TaRa KaNa SaFa KaRa.', en:'Kanan, clean your ears.' },
      { gu:'તારા, ખાટા ફળ ન ખા.', trans:'TaRa, KhaTa FaLa Na Kha.', en:'Tara, do not eat sour fruits.' },
      { gu:'ભાઈ, ઘાસ કાપ.', trans:'BHaI, GHaSa KaPa.', en:'Brother, cut the grass.' },
      { gu:'બા, ચા લાવ.', trans:'Ba, CHa LaVa.', en:'Mother, bring tea.' },
      { gu:'કાજલ, ગાયન ગા.', trans:'KaJaLa, GaYaNa Ga.', en:'Kajal, sing a song.' },
      { gu:'આચાર બરાબર રાખ.', trans:'AaCHaRa BaRaBaRa RaKHa.', en:'Keep your conduct good.' },
      { gu:'ભારત, ઝાલર વગાડ.', trans:'BHaRaTa, JhaLaRa VaGaDa.', en:'Bharat, play the gong.' },
      { gu:'મારા મા-બાપ મહાન.', trans:'MaRa Ma-BaPa MaHaNa.', en:'My mom and dad are great.' },
      { gu:'મહારાજાના હાર લાવ.', trans:'MaHaRaJaNa HaRa LaVa.', en:'Bring garlands for Maharaj.' },
      { gu:'ભગવાનના દાસ સારા.', trans:'BHaGaVaNaNa DaSa SaRa.', en:'God’s devotees are great.' }
    ]
  },
  {
    num: 3, gu: 'પાઠ ૩', title: 'Vowel એ (“ae”)', vowel: 'એ',
    intro: 'The e-matra ˇ sits above consonants. The vowel is spoken like “ae” in neck, ten, bell.',
    words: [
      { gu:'એક', en:'One', trans:'EKa' },
      { gu:'એટમ', en:'Atom', trans:'ETaMa' },
      { gu:'કેમ', en:'How', trans:'KeMa' },
      { gu:'કેશ', en:'Hair', trans:'KeSHa' },
      { gu:'કેક', en:'Cake', trans:'KeKa' },
      { gu:'ખેલ', en:'Play', trans:'KheLa' },
      { gu:'ખેતર', en:'Farm', trans:'KheTaRa' },
      { gu:'ગેસ', en:'Gas', trans:'GeSa' },
      { gu:'ઘેન', en:'Sleepiness', trans:'GHeNa' },
      { gu:'ચેન', en:'Comfort', trans:'CHeNa' },
      { gu:'છેદ', en:'Hole', trans:'CHHeDa' },
      { gu:'ઝેર', en:'Poison', trans:'JheRa' },
      { gu:'ટેબલ', en:'Table', trans:'TeBaLa' },
      { gu:'ડેમ', en:'Dam', trans:'DeMa' },
      { gu:'નેત્ર', en:'Eyes', trans:'NeTRa' },
      { gu:'દેવ', en:'God', trans:'DeVa' },
      { gu:'દેશ', en:'Country', trans:'DeSHa' },
      { gu:'પેન', en:'Pen', trans:'PeNa' },
      { gu:'સફેદ', en:'White', trans:'SaFeDa' },
      { gu:'બેન', en:'Sister', trans:'BeNa' },
      { gu:'મેઘ', en:'Cloud, rain', trans:'MeGHa' },
      { gu:'રેલ', en:'Rail', trans:'ReLa' },
      { gu:'સેવા', en:'Service', trans:'SeVa' },
      { gu:'હેત', en:'Love', trans:'HeTa' },
      { gu:'ગણેશ', en:'Ganesh', trans:'GaNeSHa' }
    ],
    sentences: [
      { gu:'કેતન, કેમ છે?', trans:'KeTaNa, KeMa CHHe?', en:'Ketan, how are you?' },
      { gu:'તારા કેશ કાળા છે.', trans:'TaRa KeSHa KaLa CHHe.', en:'Your hair is black.' },
      { gu:'નટ ખેલ કરે છે.', trans:'NaTa KheLa KaRe CHHe.', en:'The rope-dancer is doing his play.' },
      { gu:'સવારે મા-બાપને પગે લાગ.', trans:'SaVaRe Ma-BaPaNe PaGe LaGa.', en:'Bow down to parents in the morning.' },
      { gu:'ભગવાન બધે છે.', trans:'BHaGaVaNa BaDHe CHHe.', en:'God is everywhere.' },
      { gu:'મેઘ ગાજે છે.', trans:'MeGHa GaJe CHHe.', en:'Clouds are thundering.' },
      { gu:'મેજર રમે છે.', trans:'MeJaRa RaMe CHHe.', en:'Major is playing.' },
      { gu:'ફળ દરેકને આપ.', trans:'FaLa DaReKaNe AaPa.', en:'Give fruit to everyone.' }
    ]
  },
  {
    num: 4, gu: 'પાઠ ૪', title: 'Review for Lessons 1, 2, 3 + વાંચન', vowel: null,
    intro: 'Review chapter with reading passages — the Tara poem and the Ba–Bapa–Kaka passage.',
    words: [
      { gu:'ભાર', en:'Weight', trans:'BHaRa' },
      { gu:'આભાર', en:'Gratitude', trans:'AaBHaRa' },
      { gu:'રામ', en:'Lord Ram', trans:'RaMa' },
      { gu:'આરામ', en:'Rest', trans:'AaRaMa' },
      { gu:'કાર', en:'Car', trans:'KaRa' },
      { gu:'આકાર', en:'Form', trans:'AaKaRa' }
    ],
    sentences: [
      { gu:'રાધા, વાત ન કર.', trans:'RaDHa, VaTa Na KaRa.', en:'Radha, do not talk.' },
      { gu:'કેતન, ઝાડ પર ચઢ.', trans:'KeTaNa, JhaaDa PaRa CHaDHa.', en:'Ketan, climb the tree.' },
      { gu:'ભારત મહાન દેશ છે.', trans:'BHaRaTa MaHaNa DeSHa CHHe.', en:'India is a great country.' },
      { gu:'ભાઈ - બેન રમે છે.', trans:'BHaI-BeNa RaMe CHHe.', en:'Brother and sister are playing.' },
      { gu:'હા, ભગવાન બધે છે.', trans:'Ha, BHaGaVaNa BaDHe CHHe.', en:'Yes, god is everywhere.' }
    ],
    passages: [
      {
        title: 'તારા (Stars) - poem',
        gu: 'તારા તારા તારા,\nનાના નાના તારા તારા,\nકેટલાક કહે તારલા એને,\nમનગમતા રહે બધાને.\n\nઆકાશે ચમકે તારા,\nરાતે ચમકે,\nલબક ઝબક ચમકે તારા,\nમધરાતે ઝમકે.\n\nમને તારા ગમે,\nતને તારા ગમે,\nબધાને તારા ગમે.',
        en: 'Stars stars stars,\nLittle little stars stars,\nSome call them tarla (stars),\nEveryone likes them.\n\nThey shine in the sky,\nShine at night,\nTwinkling twinkling shine the stars,\nThey glitter at midnight.\n\nI like stars, you like stars,\nEveryone likes stars.'
      },
      {
        title: 'બા (Grandmother)',
        gu: 'અમારા બા છે.\nમારા બા, ભાઈના બા, બહેનના બા, બધાના બા.\nનામ છે હેમાબા.\nબા અમને જગાડે. બા અમને નવરાવે.\nબા અમને ખવરાવે. બા અમને ભણાવે.\nબા અમને કપડાં પહેરાવે.\nબા અમને વાર્તા કહે.\nબા અમને મજા કરાવે.\nબા જપ કરે અને અમને કરાવે.\nબા ભજન કરે અને અમને કરાવે.',
        en: 'We have a grandmother.\nMy grandma, brother’s grandma, sister’s grandma — everyone’s grandma.\nHer name is Hemaba.\nGranny wakes us, bathes us, feeds us, teaches us, dresses us, tells us stories, makes us laugh.\nGranny chants and makes us chant. Granny sings bhajans and makes us sing.'
      }
    ]
  },
  {
    num: 5, gu: 'પાઠ ૫', title: 'Vowel ઇ (“i” — short)', vowel: 'ઇ',
    intro: 'The i-matra ી sits to the left of the consonant. Spoken as “i” in sing, dish, hit.',
    words: [
      { gu:'કિરણ', en:'Ray', trans:'KiRaNa' },
      { gu:'કિસાન', en:'Farmer', trans:'KiSaNa' },
      { gu:'કિનારા', en:'Bank of river', trans:'KiNaRa' },
      { gu:'ખિજવ', en:'Tease', trans:'KhiJaVa' },
      { gu:'અખિલ', en:'Whole', trans:'AKhiLa' },
      { gu:'ગિરિ', en:'Mountain', trans:'GiRi' },
      { gu:'અગિયાર', en:'Eleven', trans:'AGiYaRa' },
      { gu:'ગિરનાર', en:'Mt. Girnar', trans:'GiRaNaRa' },
      { gu:'ચિત્ર', en:'Picture', trans:'CHiTRa' },
      { gu:'જિરાફ', en:'Giraffe', trans:'JiRaFa' },
      { gu:'જિજ્ઞાસા', en:'Curiosity', trans:'JiGNaSa' },
      { gu:'ટિકિટ', en:'Ticket', trans:'TiKiTa' },
      { gu:'ઘડિયાળ', en:'Clock', trans:'GHaDiYaaLa' },
      { gu:'દિવસ', en:'Day', trans:'DiVaSa' },
      { gu:'દિલ', en:'Heart', trans:'DiLa' },
      { gu:'નિશાન', en:'Aim', trans:'NiSHaaNa' },
      { gu:'નિશાળ', en:'School', trans:'NiSHaLa' },
      { gu:'પિતા', en:'Father', trans:'PiTa' },
      { gu:'મિત્ર', en:'Friend', trans:'MiTRa' },
      { gu:'મિજાજ', en:'Temper', trans:'MiJaJa' },
      { gu:'મિઠાઈ', en:'Sweet', trans:'MiTHaI' },
      { gu:'રિક્ષા', en:'Rickshaw', trans:'RiKSHa' },
      { gu:'વિમાન', en:'Airplane', trans:'ViMaaNa' },
      { gu:'સિતાર', en:'Sitar', trans:'SiTaRa' },
      { gu:'હિમ', en:'Ice', trans:'HiMa' }
    ],
    sentences: [
      { gu:'કિરણ કિસાન છે.', trans:'KiRaNa KiSaNa CHHe.', en:'Kiran is a farmer.' },
      { gu:'અખિલ બધાને ખિજવ નહિ.', trans:'AKhiLa BaDHaNe KhiJaVa NaHi.', en:'Akhil, don’t tease everybody.' },
      { gu:'ગિરિરાજ, અગિયાર ગણ.', trans:'GiRiRaJa, AGiYaRa GaNa.', en:'Girraj, count up to eleven.' },
      { gu:'ચિરાગ, સરસ ચિત્ર બનાવ.', trans:'CHiRaGa, SaRaSa CHiTRa BaNaVa.', en:'Chirag, draw a fine picture.' },
      { gu:'ટિફિન લાઈને કામે જા.', trans:'TiFiNa LaINe KaMe Ja.', en:'Take tiffin and go to work.' },
      { gu:'માતા-પિતાને નમન કર.', trans:'MaTa-PiTaNe NaMaNa KaRa.', en:'Bow to your mother and father.' },
      { gu:'મારા શિક્ષક સારા છે.', trans:'MaRa SHiKSHaKa SaRa CHHe.', en:'My teacher is good.' },
      { gu:'ઋષિ તપ કરે છે.', trans:'RuSHi TaPa KaRe CHHe.', en:'Rishi is doing penance.' }
    ]
  },
  {
    num: 6, gu: 'પાઠ ૬', title: 'Vowel ઈ (“ee” — long)', vowel: 'ઈ',
    intro: 'The long-ee matra ી hangs from a vertical bar. Spoken as “ee” in sheep, feet, machine.',
    words: [
      { gu:'કીડી', en:'Ant', trans:'KeeDee' },
      { gu:'કીચડ', en:'Mud', trans:'KeeCHaDa' },
      { gu:'કેચેન', en:'Key-chain', trans:'KeeCHeyN' },
      { gu:'કેટલી', en:'Kettle', trans:'KeTaLee' },
      { gu:'ખીલી', en:'Nail', trans:'KheeLee' },
      { gu:'તીખી', en:'Spicy', trans:'TeeKhee' },
      { gu:'માખી', en:'Bee', trans:'MaaKhee' },
      { gu:'ગીત', en:'Song', trans:'GeeTa' },
      { gu:'ગીતા', en:'Bhagavad Gita', trans:'GeeTa' },
      { gu:'ઘી', en:'Ghee', trans:'GHee' },
      { gu:'ઘીસ', en:'Deep cut', trans:'GHeeSa' },
      { gu:'મરઘી', en:'Hen', trans:'MaRaGHee' },
      { gu:'ચીજ', en:'Thing', trans:'CHeeJa' },
      { gu:'ચીકાશ', en:'Greasiness', trans:'CHeeKaSHa' },
      { gu:'ચીન', en:'China', trans:'CHeeNa' },
      { gu:'છીપ', en:'Sea shell', trans:'CHHeePa' },
      { gu:'જીત', en:'Victory', trans:'JeeTa' },
      { gu:'દરજી', en:'Tailor', trans:'DaRaJee' },
      { gu:'મીણ', en:'Wax', trans:'MeeNa' },
      { gu:'મિનિટ', en:'Minute', trans:'MiNiTa' },
      { gu:'શિક્ષક', en:'Teacher', trans:'SHiKSHaKa' },
      { gu:'સિતાર', en:'Sitar', trans:'SiTaRa' },
      { gu:'હિસાબ', en:'Account', trans:'HiSaBa' }
    ],
    sentences: [
      { gu:'કીડી કીચડમાં ચાલે છે.', trans:'KeeDee KeeCHaDa-Ma CHaaLe CHHe.', en:'Ant is walking in the mud.' },
      { gu:'દિવાલમાં ખીલી માર.', trans:'DiVaLa-Ma KheeLee MaRa.', en:'Hammer a nail in the wall.' },
      { gu:'માલા, ગીતા ગા.', trans:'MaLa, GeeTa Ga.', en:'Mala, sing the Gita.' },
      { gu:'મરઘી જીવડા ખાય છે.', trans:'MaRaGHee JeeVaDa Khaay CHHe.', en:'Hen is eating insects.' },
      { gu:'ચમચી ભરી ઘી આપ.', trans:'CHaMaCHee BHaRee GHee AaPa.', en:'Give a spoon full of ghee.' },
      { gu:'ગીતા સફરજન ઝીલે છે.', trans:'GeeTa SaFaRaJaNa Zeele CHHe.', en:'Geeta is catching an apple.' }
    ]
  },
  {
    num: 7, gu: 'પાઠ ૭', title: 'Vowel ઉ (“u” — short)', vowel: 'ઉ',
    intro: 'The u-matra ુ sits below the consonant. Spoken as “u” in full, put, guru.',
    words: [
      { gu:'કુમાર', en:'Teenager', trans:'KuMaRa' },
      { gu:'કુસુમ', en:'Flower', trans:'KuSuMa' },
      { gu:'ચીકુ', en:'Chiku (fruit)', trans:'CHeeKu' },
      { gu:'કુહાડી', en:'Axe', trans:'KuHaaDee' },
      { gu:'કુમુદ', en:'White lily', trans:'KuMuDa' },
      { gu:'ખુશ', en:'Happy', trans:'KhuSHa' },
      { gu:'ખુશી', en:'Happiness', trans:'KhuSHee' },
      { gu:'ખુરશી', en:'Chair', trans:'KhuRaSHee' },
      { gu:'ગુણ', en:'Quality', trans:'GuNa' },
      { gu:'ગુરુ', en:'Guru', trans:'GuRu' },
      { gu:'ગુલાબ', en:'Rose', trans:'GuLaBa' },
      { gu:'ગુલામ', en:'Slave', trans:'GuLaMa' },
      { gu:'ઘુવડ', en:'Owl', trans:'GhuVaDa' },
      { gu:'કાજુ', en:'Cashew', trans:'KaaJu' },
      { gu:'સાધુ', en:'Saint', trans:'SaDHu' },
      { gu:'સાબુ', en:'Soap', trans:'SaBu' },
      { gu:'પુલ', en:'Bridge', trans:'PuLa' },
      { gu:'દુકાન', en:'Shop', trans:'DuKaaNa' },
      { gu:'હનુમાન', en:'Hanuman', trans:'HaNuMaaNa' },
      { gu:'સૂરજ', en:'Sun', trans:'SuRaJa' }
    ],
    sentences: [
      { gu:'કુમાર, કાજુ ખા.', trans:'KuMaRa, KaaJu Kha.', en:'Kumar, eat cashews.' },
      { gu:'સુરભી, ખુરશી ઉપર બેસ.', trans:'SuRaBHee, KhuRaSHee UPaRa BeSa.', en:'Surbhi, sit on the chair.' },
      { gu:'સુમન, ગુરુનો ગુણ ગા.', trans:'SuMaNa, GuRuNo GuNa Ga.', en:'Suman, sing the glory of the guru.' },
      { gu:'રઘુપતિ રાઘવ રાજા રામ.', trans:'RaGHuPaTi RaGHaVa RaJa RaMa.', en:'Lord Ram, the king of Raghus.' },
      { gu:'સાધુ ઘરોઘર ઝોળી માગે છે.', trans:'SaDHu GHaRoGHaRa JhoLee MaGe CHHe.', en:'Sadhu begs for alms at every home.' }
    ]
  },
  {
    num: 8, gu: 'પાઠ ૮', title: 'Vowel ઊ (“oo” — long)', vowel: 'ઊ',
    intro: 'The long-oo matra ૂ hangs below the consonant. Spoken as “oo” in cool, too, cartoon.',
    words: [
      { gu:'કૂતરી', en:'She-dog', trans:'KooTaRee' },
      { gu:'કૂદ', en:'Jump', trans:'KooDa' },
      { gu:'કૂચ', en:'March', trans:'KooCHa' },
      { gu:'કૂકડી', en:'Hen', trans:'KooKaDee' },
      { gu:'ખૂબી', en:'Speciality', trans:'KhooBee' },
      { gu:'ખૂન', en:'Murder', trans:'KhooNa' },
      { gu:'ખૂબ', en:'Plenty', trans:'KhooBa' },
      { gu:'નૂતન', en:'New', trans:'NooTaNa' },
      { gu:'મૂલ', en:'Root', trans:'MooLa' },
      { gu:'પૂરક', en:'Supplement', trans:'PooRaKa' },
      { gu:'ડૂબકી', en:'Dive', trans:'DooBaKee' },
      { gu:'પાટલૂન', en:'Pants', trans:'PaTaLooNa' },
      { gu:'ભૂલ', en:'Mistake', trans:'BHooLa' },
      { gu:'ધૂળ', en:'Dust', trans:'DHooLa' },
      { gu:'મજૂર', en:'Labourer', trans:'MaJooRa' },
      { gu:'ખજૂર', en:'Date (fruit)', trans:'KhaJooRa' }
    ],
    sentences: [
      { gu:'નૂતન, દિવાલ ઉપરથી કૂદ.', trans:'NooTaNa, DiVaLa UPaRaThi KooDa.', en:'Nutan, jump from the wall.' },
      { gu:'સૂરજ, ખૂબ મજા કર.', trans:'SuRaJa, KhooBa MaJa KaRa.', en:'Suraj, enjoy a lot.' },
      { gu:'પિતાજી, મારાથી ભૂલ થઈ.', trans:'PiTaJee, MaRaThee BHooLa Thai.', en:'Father, I made a mistake.' }
    ]
  },
  {
    num: 9, gu: 'પાઠ ૯', title: 'Review for Lessons 5, 6, 7, 8', vowel: null,
    intro: 'Puzzles and sentence building combining short-i, long-ee, short-u and long-oo vowels.',
    words: [
      { gu:'રવિ', en:'Sun', trans:'RaVi' },
      { gu:'ગુરુ', en:'Guru', trans:'GuRu' },
      { gu:'તાજુ', en:'Fresh', trans:'TaJu' },
      { gu:'પિતા', en:'Father', trans:'PiTa' },
      { gu:'શૂર', en:'Brave', trans:'SHooRa' },
      { gu:'મજૂર', en:'Labourer', trans:'MaJooRa' },
      { gu:'નિવાસ', en:'Residence', trans:'NiVaSa' },
      { gu:'મિનિટ', en:'Minute', trans:'MiNiTa' },
      { gu:'બકરી', en:'Goat', trans:'BaKaRee' },
      { gu:'હરિ', en:'Lord Hari', trans:'HaRi' }
    ],
    sentences: []
  },
  {
    num: 10, gu: 'પાઠ ૧૦', title: 'Vowel ઓ (“o”)', vowel: 'ઓ',
    intro: 'The o-matra ો hangs to the right with a curl. Spoken as “o” in store, floor, ox.',
    words: [
      { gu:'કાગડો', en:'Crow', trans:'KaGaDo' },
      { gu:'ઘોડો', en:'Horse', trans:'GHoDo' },
      { gu:'મોર', en:'Peacock', trans:'MoRa' },
      { gu:'ચોર', en:'Thief', trans:'CHoRa' },
      { gu:'ડોલ', en:'Bucket', trans:'DoLa' },
      { gu:'ઢોલ', en:'Drum', trans:'DhoLa' },
      { gu:'ટોપી', en:'Cap', trans:'ToPee' },
      { gu:'તોપ', en:'Cannon', trans:'ToPa' },
      { gu:'પોલીસ', en:'Police', trans:'PoLeeSa' },
      { gu:'મહિનો', en:'Month', trans:'MaHiNo' },
      { gu:'દરિયો', en:'Sea', trans:'DaRiYo' },
      { gu:'રૂપિયો', en:'Rupee', trans:'RuPiYo' },
      { gu:'મોક્ષ', en:'Liberation', trans:'MoKSHa' },
      { gu:'અરીસો', en:'Mirror', trans:'AaReeSo' },
      { gu:'ભરોસો', en:'Trust', trans:'BHaRoSo' },
      { gu:'હોશિયાર', en:'Clever', trans:'HoSHiYaRa' },
      { gu:'ઈશારો', en:'Gesture', trans:'IShaRo' },
      { gu:'કિશોર', en:'Youth', trans:'KiSHoRa' },
      { gu:'જોકર', en:'Joker', trans:'JoKaRa' },
      { gu:'ભમરો', en:'Bee', trans:'BHaMaRo' }
    ],
    sentences: [
      { gu:'કાગડો ડોક વાળી પાણી પીવે છે.', trans:'KaGaDo DoKa VaaLi PaaNi PiVe CHHe.', en:'The crow bends its neck and drinks water.' },
      { gu:'આરતી વખતે ઢોલ વાગે.', trans:'AaRaTi VaKhaTe DhoLa VaGe.', en:'Drums are played during arti.' },
      { gu:'ભણો ગણો હોશિયાર બનો.', trans:'BHaNo GaNo HoSHiYaRa BaNo.', en:'Learn and become smart.' },
      { gu:'આ તોપ લોઢાની છે.', trans:'Aa ToPa LoDhaaNi CHHe.', en:'This cannon is made of iron.' },
      { gu:'સારા મિત્રોની સોબત રાખો.', trans:'SaRa MiTRoNi SoBaTa RaKHo.', en:'Keep company of good friends.' },
      { gu:'ભમરો ઊડે છે.', trans:'BHaMaRo OoDe CHHe.', en:'The bee is flying.' },
      { gu:'મોર નાચે છે.', trans:'MoRa NaaCHe CHHe.', en:'The peacock is dancing.' }
    ],
    passages: [
      {
        title: 'ઘોડો (The Horse)',
        gu: 'ઘોડો કોને ન ગમે?\nનાનો છોકરો હોય કે નાની છોકરી હોય - બધાને ઘોડો ગમે.\nઘોડો જોવો ગમે અને ઘોડા ઉપર બેસવાનું પણ ગમે.\nઘોડો ઘાસ ખાય ઘોડો કેટલીક વાર ડબ્બાનો ખોરાક ખાય.\nઘોડો ગાય જેવા ઘરનો જાનવર નથી. ઘોડો જંગલમાં પણ રહે.\nઘોડો વફાદાર જાનવર છે. ઘોડો સવારી માટે જ વપરાય.',
        en: 'Who does not like a horse?\nA small boy, a small girl — everyone likes a horse.\nWe enjoy looking at a horse and we enjoy riding it.\nA horse eats grass; sometimes it also eats packaged food.\nA horse is not a domestic animal like a cow. A horse can also live in the jungle.\nA horse is a loyal animal; it is used for riding.'
      }
    ]
  },
  {
    num: 11, gu: 'પાઠ ૧૧', title: 'Vowel ઐ (“ai”)', vowel: 'ઐ',
    intro: 'The ai-matra ૈ sits above with two strokes. Spoken as “ai” in maid, aids, jain.',
    words: [
      { gu:'કૈલાસ', en:'Mt. Kailash', trans:'KaiLaSa' },
      { gu:'કૈકેયી', en:'Kaikeyi', trans:'KaiKeYee' },
      { gu:'ચૈત્ર', en:'Chaitra month', trans:'CHaiTRa' },
      { gu:'જૈન', en:'Jain', trans:'JaiNa' },
      { gu:'જૈમિની', en:'Jaimini', trans:'JaiMiNee' },
      { gu:'મૈત્રી', en:'Friendship', trans:'MaiTRee' },
      { gu:'મૈયા', en:'Mother', trans:'MaiYa' },
      { gu:'દૈવી', en:'Divine', trans:'DaiVee' },
      { gu:'દૈત્ય', en:'Demon', trans:'DaiTYa' },
      { gu:'વૈદ્ય', en:'Doctor', trans:'VaiDYa' },
      { gu:'સૈનિક', en:'Soldier', trans:'SaiNiKa' },
      { gu:'સૈન્ય', en:'Army', trans:'SaiNYa' }
    ],
    sentences: [
      { gu:'યાત્રાળુઓ કૈલાસની યાત્રા કરવા જાય.', trans:'YaTRaLuo KaiLaSaNee YaTRa KaRaVa Jaay.', en:'Pilgrims do the pilgrimage of Mt. Kailash.' },
      { gu:'ચૈત્રમાં ઘણો તાપ હોય.', trans:'CHaiTRa-Ma GHaNo TaPa Hoy.', en:'It is too hot in Chaitra.' },
      { gu:'જૈન સાધુઓ તપ કરે.', trans:'JaiNa SaDHuo TaPa KaRe.', en:'Jain sadhus do penance.' }
    ]
  },
  {
    num: 12, gu: 'પાઠ ૧૨', title: 'Vowel ઔ (“au”)', vowel: 'ઔ',
    intro: 'The au-matra ૌ sits above. Spoken as “au” in ounce, house, aum.',
    words: [
      { gu:'કૌમાર', en:'Adolescence', trans:'KauMaRa' },
      { gu:'કૌશિક', en:'Kaushik (sage)', trans:'KauSHiKa' },
      { gu:'કૌતુક', en:'Wonder', trans:'KauTuKa' },
      { gu:'કૌવત', en:'Strength', trans:'KauVaTa' },
      { gu:'ગૌણ', en:'Inferior', trans:'GauNa' },
      { gu:'ગૌશાળા', en:'Cow-pen', trans:'GauSHaLa' },
      { gu:'ગૌરવ', en:'Glory', trans:'GauRaVa' },
      { gu:'ગૌતમ', en:'Gautam Buddha', trans:'GauTaMa' },
      { gu:'મૌન', en:'Silence', trans:'MauNa' },
      { gu:'યૌવન', en:'Youth', trans:'YauVaNa' },
      { gu:'સૌર', en:'Solar', trans:'SauRa' },
      { gu:'સૌભાગ્ય', en:'Good fortune', trans:'SauBHaGYa' }
    ],
    sentences: [
      { gu:'કૌશિક ઋષિ કૌતુક કરતા.', trans:'KauSHiKa RuSHi KauTuKa KaRaTa.', en:'Sage Kaushik used to do wonders.' },
      { gu:'ગૌતમ અને ગૌરવ ગૌશાળામાં સેવા કરે છે.', trans:'GauTaMa Ane GauRaVa GauSHaLa-Ma SeVa KaRe CHHe.', en:'Gautam and Gaurav are doing service in the cow-pen.' }
    ]
  },
  {
    num: 13, gu: 'પાઠ ૧૩', title: 'Review for Lessons 10, 11, 12', vowel: null,
    intro: 'Combined review of vowels ઓ, ઐ, ઔ.',
    words: [
      { gu:'ગૌશાળા', en:'Cow-pen', trans:'GauSHaLa' },
      { gu:'કૈલાસ', en:'Kailash', trans:'KaiLaSa' },
      { gu:'ગૌતમ', en:'Gautam', trans:'GauTaMa' },
      { gu:'મૈયા', en:'Mother', trans:'MaiYa' },
      { gu:'મૌન', en:'Silence', trans:'MauNa' },
      { gu:'મૈત્રી', en:'Friendship', trans:'MaiTRee' }
    ],
    sentences: [
      { gu:'ગૌશાળામાં ચૌદ ગાય છે.', trans:'GauSHaLa-Ma CHauDa Gaay CHHe.', en:'There are fourteen cows in the cow-pen.' },
      { gu:'કનૈયો પૈસાથી પપૈયા લે છે.', trans:'KaNaiyo PaiSaThee PaPaiYa Le CHHe.', en:'Kanaiyo buys papaya with money.' }
    ]
  },
  {
    num: 14, gu: 'પાઠ ૧૪', title: 'Book Review', vowel: null,
    intro: 'Final comprehensive review covering all twelve vowels of the book.',
    words: [],
    sentences: []
  }
];

/* =============================================================
   PRE-TEST BANK
   Modeled after "Level 2 Spring Term Pre-test (2025-2026)" PDF
   with extra content from Akshar Gujarati Learner-2, Lesson 10
   (Vowel 'ઓ' — ો kaano-matra)
   ============================================================= */
const PRETEST_BANK = {
  // Q1 — Select the correct Gujarati translation of an English word
  // (4 choices; only 1 correct — others are visually similar)
  wordChoice: [
    { en:'Mother',     correct:'મૈયા',    options:['પૈસા','મૈયા','મૌન','મૈત્રી'] },
    { en:'Grief',      correct:'શોક',    options:['શોખ','મોજ','શોક','હોઠ'] },
    { en:'Color',      correct:'રંગ',    options:['યંત્ર','દાંત','બંધ','રંગ'] },
    { en:'School',     correct:'શાળા',   options:['ચમચો','વિમાન','શાળા','દૈવત'] },
    { en:'Horse',      correct:'ઘોડો',   options:['ઘોડો','ઘડો','થોડો','ધોધ'] },
    { en:'Crow',       correct:'કાગડો',  options:['કાગડો','કૂતરો','કાચબો','કાગળ'] },
    { en:'Peacock',    correct:'મોર',    options:['ભોર','જોર','મોર','ચોર'] },
    { en:'Thief',      correct:'ચોર',    options:['ચોર','ચોખા','ચાર','ચોટ'] },
    { en:'Garden',     correct:'બગીચો',  options:['બગીચો','બંગલો','બાળક','બારી'] },
    { en:'Drum',       correct:'ઢોલ',    options:['ડોલ','ઢોલ','થોલ','ઢોર'] },
    { en:'Bucket',     correct:'ડોલ',    options:['ડોલ','ઢોલ','ધોળ','થોલ'] },
    { en:'Cannon',     correct:'તોપ',    options:['તોપ','તોલ','તોડ','તાપ'] },
    { en:'Cap',        correct:'ટોપી',   options:['ટોપી','ટોપલી','ટોકરી','થાળી'] },
    { en:'Police',     correct:'પોલીસ',  options:['પોલીસ','પોપટ','પોષણ','પોળ'] },
    { en:'Holi',       correct:'હોળી',   options:['હોળી','હોઠ','હોટલ','હોવા'] },
    { en:'Lips',       correct:'હોઠ',    options:['હોઠ','હાથ','હાડ','હોળી'] },
    { en:'Mirror',     correct:'અરીસો',  options:['અરીસો','આરસ','ઇરાદો','અરજી'] },
    { en:'Trust',      correct:'ભરોસો',  options:['ભરોસો','ભોળો','ભોગ','ભારો'] },
    { en:'Liberation', correct:'મોક્ષ',  options:['મોક્ષ','મોચ','મોખ','મોટ'] },
    { en:'Sixteen',    correct:'સોળ',    options:['સોળ','સત્તર','સાત','સોળમો'] }
  ],

  // Q2 — Consonant + vowel matra translation
  //   direction 'guToRoman' shows Gujarati and asks for transliteration
  //   direction 'romanToGu' shows roman and asks for Gujarati
  consonants: [
    { gu:'થં',  roman:'tham',  direction:'guToRoman', allRoman:['tham','than','thi','thu'] },
    { gu:'ઝુ',  roman:'Zu',    direction:'romanToGu', allGu:['ઝુ','ઝૂ','જુ','ઝા'] },
    { gu:'ષો',  roman:'sho',   direction:'guToRoman', allRoman:['sho','ṣo','sa','so'] },
    { gu:'ક્ષી', roman:'Kshī', direction:'romanToGu', allGu:['ક્ષી','ક્ષિ','ક્ષ','ષી'] },
    { gu:'વા',  roman:'vaa',   direction:'guToRoman', allRoman:['vaa','va','baa','vi'] },
    { gu:'ટિ',  roman:'Ti',    direction:'romanToGu', allGu:['ટિ','ટી','તિ','ઢિ'] },
    { gu:'બૈ',  roman:'Bai',   direction:'romanToGu', allGu:['બૈ','બા','બે','ભૈ'] },
    { gu:'શ્રા', roman:'shrā', direction:'guToRoman', allRoman:['shrā','shra','sra','shrī'] },
    { gu:'ઢૂ',  roman:'ḍhū',   direction:'guToRoman', allRoman:['ḍhū','dhu','ḍu','ḍhu'] },
    { gu:'ક્ષૌ', roman:'Kshau',direction:'romanToGu', allGu:['ક્ષૌ','ક્ષો','ક્ષુ','ષૌ'] },
    { gu:'કો',  roman:'ko',    direction:'guToRoman', allRoman:['ko','kā','ku','kī'] },
    { gu:'ઘો',  roman:'gho',   direction:'romanToGu', allGu:['ઘો','ગો','ઘા','ઘૂ'] },
    { gu:'ચો',  roman:'cho',   direction:'guToRoman', allRoman:['cho','chho','jo','cā'] },
    { gu:'ઢો',  roman:'ḍho',   direction:'romanToGu', allGu:['ઢો','ડો','ધો','થો'] },
    { gu:'ણો',  roman:'ṇo',    direction:'guToRoman', allRoman:['ṇo','no','na','ṇa'] },
    { gu:'તો',  roman:'to',    direction:'romanToGu', allGu:['તો','ટો','થો','દો'] }
  ],

  // Q3 — Translate a Gujarati word to English
  wordTranslate: [
    { gu:'ઉધાર',   en:'Borrow',     options:['Borrow','Lend','Beggar','Buy'] },
    { gu:'શિકાર',  en:'Hunting',    options:['Hunting','Sugar','Shape','Lesson'] },
    { gu:'ગુલાબ',  en:'Rose',       options:['Rose','Lotus','Marigold','Jasmine'] },
    { gu:'ગુણ',    en:'Quality',    options:['Quality','Game','Garden','Goodness'] },
    { gu:'પૈસા',   en:'Money',      options:['Money','Mother','Peace','Foot'] },
    { gu:'ઘોડો',   en:'Horse',      options:['Horse','Pot','House','Hour'] },
    { gu:'કાગડો',  en:'Crow',       options:['Crow','Paper','Cuckoo','Pigeon'] },
    { gu:'મોર',    en:'Peacock',    options:['Peacock','Parrot','Sparrow','Pigeon'] },
    { gu:'બગીચો',  en:'Garden',     options:['Garden','Bungalow','Window','Building'] },
    { gu:'ડોલ',    en:'Bucket',     options:['Bucket','Drum','Bowl','Bag'] },
    { gu:'ઢોલ',    en:'Drum',       options:['Drum','Bucket','Bowl','Plate'] },
    { gu:'ટોપી',   en:'Cap',        options:['Cap','Hat-Stand','Basket','Plate'] },
    { gu:'ચોર',    en:'Thief',      options:['Thief','Soldier','King','Servant'] },
    { gu:'મહિનો',  en:'Month',      options:['Month','Minute','Hour','Week'] },
    { gu:'નોકરી',  en:'Job',        options:['Job','School','Friend','Rest'] },
    { gu:'દરિયો',  en:'Sea',        options:['Sea','River','Pond','Well'] },
    { gu:'રૂપિયો', en:'Rupee',      options:['Rupee','Coin','Note','Price'] },
    { gu:'મોક્ષ',  en:'Liberation', options:['Liberation','Knowledge','Penance','Devotion'] },
    { gu:'હોળી',   en:'Holi',       options:['Holi','Diwali','Navratri','Rakhi'] },
    { gu:'શિયાળો', en:'Winter',     options:['Winter','Summer','Monsoon','Spring'] },
    // Book-sourced — Lessons 2, 3, 10
    { gu:'કાન',    en:'Ear',         options:['Ear','Eye','Hair','Hand'] },
    { gu:'મકાન',   en:'Building',    options:['Building','Corn','Paper','Cot'] },
    { gu:'મકાઈ',   en:'Corn',        options:['Corn','Building','Cake','Cot'] },
    { gu:'કાગળ',   en:'Paper',       options:['Paper','Pencil','Print','Page'] },
    { gu:'ઘાસ',    en:'Grass',       options:['Grass','Wound','Tree','Leaf'] },
    { gu:'કેશ',    en:'Hair',        options:['Hair','Cake','Cheek','Head'] },
    { gu:'કેક',    en:'Cake',        options:['Cake','Case','Cap','Coat'] },
    { gu:'ખેતર',   en:'Farm',        options:['Farm','Field','Forest','Garden'] },
    { gu:'નેત્ર',  en:'Eyes',        options:['Eyes','Ears','Nose','Mouth'] }
  ],

  // Q4 — Translate a Gujarati sentence to English (multiple choice)
  guToEnSentence: [
    { gu:'નૂતન, દીવાલ ઉપર થી કૂદ.',
      en:'Nutan, jump down from the wall.',
      options:[
        'Nutan, jump down from the wall.',
        'Nutan, climb up the wall.',
        'Nutan, paint the wall.',
        'Nutan, sit on the wall.'] },
    { gu:'કીર્તન પતંગ ઉડાડે છે.',
      en:'Kirtan is flying a kite.',
      options:[
        'Kirtan is flying a kite.',
        'Kirtan is singing a song.',
        'Kirtan is buying a kite.',
        'Kirtan is breaking a kite.'] },
    { gu:'પિતાજી, મારાથી ભૂલ થઈ.',
      en:'Father, I made a mistake.',
      options:[
        'Father, I made a mistake.',
        'Father, I forgot you.',
        'Father, I am going home.',
        'Father, I lost the book.'] },
    { gu:'કાગડો ડોક વાળી પાણી પીવે છે.',
      en:'The crow bends its neck and drinks water.',
      options:[
        'The crow bends its neck and drinks water.',
        'The crow flies in the sky.',
        'The crow eats the bread.',
        'The crow sits on the wall.'] },
    { gu:'આરતી વખતે ઢોલ વાગે.',
      en:'Drums are played during arti.',
      options:[
        'Drums are played during arti.',
        'Songs are sung in the morning.',
        'Bells ring in the temple.',
        'Conch is blown at sunset.'] },
    { gu:'ભણો ગણો હોશિયાર બનો.',
      en:'Learn and become smart.',
      options:[
        'Learn and become smart.',
        'Play and become strong.',
        'Sleep and become healthy.',
        'Walk and become tall.'] },
    { gu:'આ તોપ લોઢાની છે.',
      en:'This cannon is made of iron.',
      options:[
        'This cannon is made of iron.',
        'This drum is made of wood.',
        'This pot is made of clay.',
        'This box is made of paper.'] },
    { gu:'સારા મિત્રોની સોબત રાખો.',
      en:'Keep company of good friends.',
      options:[
        'Keep company of good friends.',
        'Forget your old friends.',
        'Make new enemies.',
        'Travel with strangers.'] },
    { gu:'ગોપાલ તબેથો લાવ.',
      en:'Gopal, bring the spatula.',
      options:[
        'Gopal, bring the spatula.',
        'Gopal, bring the pot.',
        'Gopal, bring the book.',
        'Gopal, bring the milk.'] },
    { gu:'દૂધથી શરીરને પોષણ મળે.',
      en:'The body gets nutrition from milk.',
      options:[
        'The body gets nutrition from milk.',
        'The body gets strength from rice.',
        'The body needs sleep daily.',
        'The body grows with exercise.'] },
    // Book-sourced sentences
    { gu:'કાનન, તારા કાન સાફ કર.',
      en:'Kanan, clean your ears.',
      options:[
        'Kanan, clean your ears.',
        'Kanan, wash your hands.',
        'Kanan, brush your teeth.',
        'Kanan, comb your hair.'] },
    { gu:'બા, ચા લાવ.',
      en:'Mother, bring tea.',
      options:[
        'Mother, bring tea.',
        'Mother, bring water.',
        'Mother, bring milk.',
        'Mother, bring food.'] },
    { gu:'કેતન, કેમ છે?',
      en:'Ketan, how are you?',
      options:[
        'Ketan, how are you?',
        'Ketan, where are you?',
        'Ketan, who are you?',
        'Ketan, what are you doing?'] },
    { gu:'સવારે મા-બાપને પગે લાગ.',
      en:'Bow down to parents in the morning.',
      options:[
        'Bow down to parents in the morning.',
        'Eat breakfast with parents.',
        'Play with parents in the evening.',
        'Help parents with chores.'] }
  ],

  // Q5 — Translate an English sentence to Gujarati (multiple choice)
  enToGuSentence: [
    { en:'My teacher is good.',
      gu:'મારા શિક્ષક સારા છે.',
      options:[
        'મારા શિક્ષક સારા છે.',
        'મારા પિતા સારા છે.',
        'મારી શાળા સારી છે.',
        'મારો મિત્ર સારો છે.'] },
    { en:'Bow to your mother and father.',
      gu:'માતા-પિતાને નમન કરો.',
      options:[
        'માતા-પિતાને નમન કરો.',
        'મિત્રને નમન કરો.',
        'ભગવાનને નમન કરો.',
        'ગુરુને નમન કરો.'] },
    { en:'Give fruit to everyone.',
      gu:'બધાને ફળ આપો.',
      options:[
        'બધાને ફળ આપો.',
        'બધાને પાણી આપો.',
        'બધાને દૂધ આપો.',
        'બધાને પુસ્તક આપો.'] },
    { en:'The peacock is dancing.',
      gu:'મોર નાચે છે.',
      options:[
        'મોર નાચે છે.',
        'મોર ઊડે છે.',
        'મોર ગાય છે.',
        'મોર બેઠો છે.'] },
    { en:'The bee is flying.',
      gu:'ભમરો ઊડે છે.',
      options:[
        'ભમરો ઊડે છે.',
        'ભમરો બેઠો છે.',
        'ભમરો ગાય છે.',
        'ભમરો રડે છે.'] },
    { en:'God, rid me of all of my flaws.',
      gu:'ભગવાન, મારા સઘળાં દોષ હરો.',
      options:[
        'ભગવાન, મારા સઘળાં દોષ હરો.',
        'ભગવાન, મને શાંતિ આપો.',
        'ભગવાન, મને જ્ઞાન આપો.',
        'ભગવાન, મારી રક્ષા કરો.'] },
    { en:'The world is round.',
      gu:'દુનિયા ગોળ છે.',
      options:[
        'દુનિયા ગોળ છે.',
        'દુનિયા મોટી છે.',
        'દુનિયા સુંદર છે.',
        'દુનિયા નાની છે.'] },
    { en:'Speak the truth.',
      gu:'સાચું બોલો.',
      options:[
        'સાચું બોલો.',
        'ધીમે બોલો.',
        'મીઠું બોલો.',
        'ઓછું બોલો.'] },
    { en:'Respect your elders.',
      gu:'મોટાનું સન્માન કરો.',
      options:[
        'મોટાનું સન્માન કરો.',
        'નાનાને મદદ કરો.',
        'મિત્રને માફ કરો.',
        'સહુનું ધ્યાન રાખો.'] },
    { en:'It is raining today.',
      gu:'આજે વરસાદ પડે છે.',
      options:[
        'આજે વરસાદ પડે છે.',
        'આજે તડકો છે.',
        'આજે ઠંડી છે.',
        'આજે પવન છે.'] }
  ],

  // Q6 — Fill in the blanks (numbers / days / time of day)
  fillBlank: [
    { en:'Twenty-Six',   correct:'૨૬',     options:['૨૬','૨૨','૨૦'] },
    { en:'Morning',      correct:'સવાર',   options:['રાત','દિવસ','સવાર'] },
    { en:'Saturday',     correct:'શનિવાર', options:['સોમવાર','શનિવાર','રવિવાર'] },
    { en:'Twenty-Nine',  correct:'૨૯',     options:['૨૯','૧૯','૯'] },
    { en:'Monday',       correct:'સોમવાર', options:['સોમવાર','બુધવાર','ગુરુવાર'] },
    { en:'Sunday',       correct:'રવિવાર', options:['રવિવાર','શુક્રવાર','મંગળવાર'] },
    { en:'Night',        correct:'રાત',     options:['સવાર','રાત','સાંજ'] },
    { en:'Evening',      correct:'સાંજ',   options:['સવાર','સાંજ','બપોર'] },
    { en:'Afternoon',    correct:'બપોર',   options:['બપોર','સવાર','રાત'] },
    { en:'Fifteen',      correct:'૧૫',     options:['૫','૧૫','૫૦'] },
    { en:'Thirty',       correct:'૩૦',     options:['૩૦','૧૩','૩'] },
    { en:'Fifty',        correct:'૫૦',     options:['૧૫','૫૦','૫'] },
    { en:'Week',         correct:'અઠવાડિયું', options:['મહિનો','અઠવાડિયું','વર્ષ'] },
    { en:'Hour',         correct:'કલાક',   options:['કલાક','મિનિટ','દિવસ'] },
    { en:'Today',        correct:'આજે',    options:['આજે','કાલે','ગઈ કાલે'] }
  ],

  // Q7 — Match the columns (group of 5)
  // Multiple groups so each attempt feels fresh
  matchGroups: [
    {
      title: 'Time & Days',
      pairs: [
        { en:'Friday', gu:'શુક્રવાર' },
        { en:'Week',   gu:'અઠવાડિયું' },
        { en:'Night',  gu:'રાત' },
        { en:'15',     gu:'પંદર' },
        { en:'Hours',  gu:'કલાક' }
      ]
    },
    {
      title: 'Animals & Birds',
      pairs: [
        { en:'Horse',    gu:'ઘોડો' },
        { en:'Crow',     gu:'કાગડો' },
        { en:'Peacock',  gu:'મોર' },
        { en:'Elephant', gu:'હાથી' },
        { en:'Cow',      gu:'ગાય' }
      ]
    },
    {
      title: 'Seasons & Weather',
      pairs: [
        { en:'Winter',  gu:'શિયાળો' },
        { en:'Summer',  gu:'ઉનાળો' },
        { en:'Monsoon', gu:'ચોમાસું' },
        { en:'Rain',    gu:'વરસાદ' },
        { en:'Snow',    gu:'બરફ' }
      ]
    },
    {
      title: 'Home Objects',
      pairs: [
        { en:'Cap',     gu:'ટોપી' },
        { en:'Bucket',  gu:'ડોલ' },
        { en:'Drum',    gu:'ઢોલ' },
        { en:'Lamp',    gu:'દીવો' },
        { en:'Mirror',  gu:'અરીસો' }
      ]
    },
    {
      title: 'People & Family',
      pairs: [
        { en:'Mother',  gu:'મૈયા' },
        { en:'Father',  gu:'પિતા' },
        { en:'Friend',  gu:'મિત્ર' },
        { en:'Teacher', gu:'શિક્ષક' },
        { en:'Thief',   gu:'ચોર' }
      ]
    }
  ]
};

// Helper: build a randomly-ordered Pre-Test paper (limit per question type)
function buildPreTestPaper(opts = {}) {
  const {
    n1 = 4,   // Q1 word-choice
    n2 = 5,   // Q2 consonants
    n3 = 5,   // Q3 word translate
    n4 = 3,   // Q4 gu->en sentence
    n5 = 3,   // Q5 en->gu sentence
    n6 = 5,   // Q6 fill-blank
    n7 = 1,   // Q7 match groups
    seed = Math.floor(Math.random() * 100000)
  } = opts;
  const pick = (arr, n, s) => seededShuffle(arr, s).slice(0, Math.min(n, arr.length));
  return {
    q1: pick(PRETEST_BANK.wordChoice,      n1, seed + 1),
    q2: pick(PRETEST_BANK.consonants,      n2, seed + 2),
    q3: pick(PRETEST_BANK.wordTranslate,   n3, seed + 3),
    q4: pick(PRETEST_BANK.guToEnSentence,  n4, seed + 4),
    q5: pick(PRETEST_BANK.enToGuSentence,  n5, seed + 5),
    q6: pick(PRETEST_BANK.fillBlank,       n6, seed + 6),
    q7: pick(PRETEST_BANK.matchGroups,     n7, seed + 7)
  };
}
