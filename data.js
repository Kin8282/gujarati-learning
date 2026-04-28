const SWAR = [
  { letter:'અ', trans:'a', word:'અનાર', meaning:'Pomegranate', emoji:'🍎' },
  { letter:'આ', trans:'aa', word:'આમ', meaning:'Mango', emoji:'🥭' },
  { letter:'ઇ', trans:'i', word:'ઇમારત', meaning:'Building', emoji:'🏢' },
  { letter:'ઈ', trans:'ee', word:'ઈંટ', meaning:'Brick', emoji:'🧱' },
  { letter:'ઉ', trans:'u', word:'ઉંદર', meaning:'Mouse', emoji:'🐭' },
  { letter:'ઊ', trans:'oo', word:'ઊન', meaning:'Wool', emoji:'🧶' },
  { letter:'ઋ', trans:'ru', word:'ઋષિ', meaning:'Sage', emoji:'🧘' },
  { letter:'એ', trans:'e', word:'એલચી', meaning:'Cardamom', emoji:'🌿' },
  { letter:'ઐ', trans:'ai', word:'ઐનક', meaning:'Glasses', emoji:'👓' },
  { letter:'ઓ', trans:'o', word:'ઓરડો', meaning:'Room', emoji:'🚪' },
  { letter:'ઔ', trans:'au', word:'ઔષધ', meaning:'Medicine', emoji:'💊' },
  { letter:'અં', trans:'am', word:'અંગૂઠો', meaning:'Thumb', emoji:'👍' },
  { letter:'અઃ', trans:'ah', word:'અઃ', meaning:'(Visarga)', emoji:'🔔' }
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
  { gu:'૯', en:'9', word:'નવ', trans:'nav' }
];

const WORD_CATEGORIES = {
  'ફળો (Fruits)': [
    { gu:'કેળું', en:'Banana', trans:'kelu', emoji:'🍌' },
    { gu:'સફરજન', en:'Apple', trans:'safarjan', emoji:'🍎' },
    { gu:'દ્રાક્ષ', en:'Grapes', trans:'draaksh', emoji:'🍇' },
    { gu:'તરબૂચ', en:'Watermelon', trans:'tarbuch', emoji:'🍉' },
    { gu:'નારંગી', en:'Orange', trans:'narangi', emoji:'🍊' },
    { gu:'આમ', en:'Mango', trans:'aam', emoji:'🥭' }
  ],
  'પ્રાણીઓ (Animals)': [
    { gu:'કૂતરો', en:'Dog', trans:'kutro', emoji:'🐕' },
    { gu:'બિલાડી', en:'Cat', trans:'biladi', emoji:'🐱' },
    { gu:'ગાય', en:'Cow', trans:'gaay', emoji:'🐄' },
    { gu:'ઘોડો', en:'Horse', trans:'ghodo', emoji:'🐴' },
    { gu:'હાથી', en:'Elephant', trans:'hathi', emoji:'🐘' },
    { gu:'મોર', en:'Peacock', trans:'mor', emoji:'🦚' }
  ],
  'રંગો (Colors)': [
    { gu:'લાલ', en:'Red', trans:'laal', emoji:'🔴' },
    { gu:'વાદળી', en:'Blue', trans:'vaadli', emoji:'🔵' },
    { gu:'લીલો', en:'Green', trans:'leelo', emoji:'🟢' },
    { gu:'પીળો', en:'Yellow', trans:'peelo', emoji:'🟡' },
    { gu:'સફેદ', en:'White', trans:'safed', emoji:'⚪' },
    { gu:'કાળો', en:'Black', trans:'kaalo', emoji:'⚫' }
  ],
  'શરીર (Body)': [
    { gu:'માથું', en:'Head', trans:'maathu', emoji:'🗣️' },
    { gu:'આંખ', en:'Eye', trans:'aankh', emoji:'👁️' },
    { gu:'નાક', en:'Nose', trans:'naak', emoji:'👃' },
    { gu:'કાન', en:'Ear', trans:'kaan', emoji:'👂' },
    { gu:'હાથ', en:'Hand', trans:'haath', emoji:'✋' },
    { gu:'પગ', en:'Foot', trans:'pag', emoji:'🦶' }
  ],
  'ઘર (Home)': [
    { gu:'પાણી', en:'Water', trans:'paani', emoji:'💧' },
    { gu:'ખુરશી', en:'Chair', trans:'khurshi', emoji:'🪑' },
    { gu:'પુસ્તક', en:'Book', trans:'pustak', emoji:'📖' },
    { gu:'ઘડિયાળ', en:'Clock', trans:'ghadiyaal', emoji:'🕐' },
    { gu:'બારી', en:'Window', trans:'baari', emoji:'🪟' },
    { gu:'દીવો', en:'Lamp', trans:'deevo', emoji:'🪔' }
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
  // Group A
  { gu:'મા', en:'Mother', trans:'maa', emoji:'👩', diff:1 },
  { gu:'બા', en:'Grandmother', trans:'baa', emoji:'👵', diff:1 },
  { gu:'ના', en:'No', trans:'naa', emoji:'🚫', diff:1 },
  { gu:'હા', en:'Yes', trans:'haa', emoji:'✅', diff:1 },
  { gu:'કર', en:'Do', trans:'kar', emoji:'✊', diff:1 },
  { gu:'જા', en:'Go', trans:'jaa', emoji:'🚶', diff:1 },
  { gu:'આ', en:'This', trans:'aa', emoji:'👉', diff:1 },
  { gu:'ઘર', en:'House', trans:'ghar', emoji:'🏠', diff:1 },
  // Group B
  { gu:'દર', en:'Rate', trans:'dar', emoji:'📊', diff:1 },
  { gu:'પર', en:'On', trans:'par', emoji:'⬆️', diff:1 },
  { gu:'વન', en:'Forest', trans:'van', emoji:'🌲', diff:1 },
  { gu:'રસ', en:'Juice', trans:'ras', emoji:'🧃', diff:1 },
  { gu:'તન', en:'Body', trans:'tan', emoji:'🧍', diff:1 },
  { gu:'મન', en:'Mind', trans:'man', emoji:'🧠', diff:1 },
  { gu:'જલ', en:'Water', trans:'jal', emoji:'💧', diff:1 },
  { gu:'ફળ', en:'Fruit', trans:'fal', emoji:'🍎', diff:1 },
  // Group C
  { gu:'કમલ', en:'Lotus', trans:'kamal', emoji:'🪷', diff:2 },
  { gu:'નમન', en:'Bow', trans:'naman', emoji:'🙏', diff:2 },
  { gu:'પવન', en:'Wind', trans:'pavan', emoji:'💨', diff:2 },
  { gu:'ગગન', en:'Sky', trans:'gagan', emoji:'🌌', diff:2 },
  { gu:'સવર', en:'Morning', trans:'savar', emoji:'🌅', diff:2 },
  { gu:'નગર', en:'City', trans:'nagar', emoji:'🏙️', diff:2 },
  { gu:'સફર', en:'Journey', trans:'safar', emoji:'🧳', diff:2 },
  { gu:'મગર', en:'Crocodile', trans:'magar', emoji:'🐊', diff:2 },
  // Group D
  { gu:'અમર', en:'Immortal', trans:'amar', emoji:'♾️', diff:2 },
  { gu:'સમય', en:'Time', trans:'samay', emoji:'⏰', diff:2 },
  { gu:'કલમ', en:'Pen', trans:'kalam', emoji:'🖊️', diff:2 },
  { gu:'ચમન', en:'Garden', trans:'chaman', emoji:'🌻', diff:2 },
  { gu:'ગરમ', en:'Hot', trans:'garam', emoji:'🔥', diff:2 },
  { gu:'નરમ', en:'Soft', trans:'naram', emoji:'🧸', diff:2 },
  { gu:'સરસ', en:'Nice', trans:'saras', emoji:'👌', diff:2 },
  { gu:'વતન', en:'Homeland', trans:'vatan', emoji:'🏡', diff:2 },
  // Group E – Everyday
  { gu:'પાણી', en:'Water', trans:'paani', emoji:'💧', diff:3 },
  { gu:'રોટલી', en:'Bread', trans:'rotli', emoji:'🫓', diff:3 },
  { gu:'દૂધ', en:'Milk', trans:'doodh', emoji:'🥛', diff:3 },
  { gu:'ચા', en:'Tea', trans:'chaa', emoji:'☕', diff:3 },
  { gu:'ભાત', en:'Rice', trans:'bhaat', emoji:'🍚', diff:3 },
  { gu:'શાક', en:'Vegetable', trans:'shaak', emoji:'🥬', diff:3 },
  { gu:'મીઠું', en:'Salt', trans:'meethu', emoji:'🧂', diff:3 },
  { gu:'ખાંડ', en:'Sugar', trans:'khaand', emoji:'🍬', diff:3 },
  // Group F – More everyday
  { gu:'ટોપી', en:'Hat', trans:'topi', emoji:'🧢', diff:3 },
  { gu:'ચાવી', en:'Key', trans:'chaavi', emoji:'🔑', diff:3 },
  { gu:'થેલો', en:'Bag', trans:'thelo', emoji:'🎒', diff:3 },
  { gu:'ચશ્મા', en:'Glasses', trans:'chashmaa', emoji:'👓', diff:3 },
  { gu:'તકિયો', en:'Pillow', trans:'takiyo', emoji:'🛏️', diff:3 },
  { gu:'સાબુ', en:'Soap', trans:'saabu', emoji:'🧼', diff:3 },
  { gu:'ટુવાલ', en:'Towel', trans:'tuvaal', emoji:'🧺', diff:3 },
  { gu:'છત્રી', en:'Umbrella', trans:'chhatri', emoji:'☂️', diff:3 },
  // Group G – Family
  { gu:'પિતા', en:'Father', trans:'pitaa', emoji:'👨', diff:3 },
  { gu:'માતા', en:'Mother', trans:'maataa', emoji:'👩', diff:3 },
  { gu:'ભાઈ', en:'Brother', trans:'bhai', emoji:'👦', diff:3 },
  { gu:'બહેન', en:'Sister', trans:'bahen', emoji:'👧', diff:3 },
  { gu:'દાદા', en:'Grandfather', trans:'daadaa', emoji:'👴', diff:3 },
  { gu:'દાદી', en:'Grandmother', trans:'daadi', emoji:'👵', diff:3 },
  { gu:'કાકા', en:'Uncle', trans:'kaakaa', emoji:'👨', diff:3 },
  { gu:'કાકી', en:'Aunt', trans:'kaaki', emoji:'👩', diff:3 },
  // Group H – Nature & School
  { gu:'વરસાદ', en:'Rain', trans:'varsaad', emoji:'🌧️', diff:3 },
  { gu:'તારો', en:'Star', trans:'taaro', emoji:'⭐', diff:3 },
  { gu:'ચાંદો', en:'Moon', trans:'chaando', emoji:'🌙', diff:3 },
  { gu:'શાળા', en:'School', trans:'shaalaa', emoji:'🏫', diff:3 },
  { gu:'શિક્ષક', en:'Teacher', trans:'shikshak', emoji:'👨‍🏫', diff:3 },
  { gu:'વિદ્યાર્થી', en:'Student', trans:'vidyaarthi', emoji:'🧑‍🎓', diff:3 },
  { gu:'પેન્સિલ', en:'Pencil', trans:'pensil', emoji:'✏️', diff:3 },
  { gu:'નોટબુક', en:'Notebook', trans:'notebook', emoji:'📓', diff:3 }
];

const ALL_SENTENCES = [
  // Set 1 – Basics
  { gu:'આ ગાય છે.', trans:'Aa gaay chhe.', en:'This is a cow.', set:1 },
  { gu:'આ ફૂલ સુંદર છે.', trans:'Aa phool sundar chhe.', en:'This flower is beautiful.', set:1 },
  { gu:'ગાય દૂધ આપે છે.', trans:'Gaay doodh aape chhe.', en:'The cow gives milk.', set:1 },
  { gu:'સૂરજ ઊગે છે.', trans:'Suraj ooge chhe.', en:'The sun rises.', set:1 },
  { gu:'મોર નાચે છે.', trans:'Mor naache chhe.', en:'The peacock dances.', set:1 },
  { gu:'કૂતરો ભસે છે.', trans:'Kutro bhase chhe.', en:'The dog barks.', set:1 },
  { gu:'બિલાડી દૂધ પીવે છે.', trans:'Biladi doodh peeve chhe.', en:'The cat drinks milk.', set:1 },
  { gu:'આકાશ વાદળી છે.', trans:'Aakaash vaadli chhe.', en:'The sky is blue.', set:1 },
  { gu:'ઝાડ ઉપર પક્ષી છે.', trans:'Zaad upar pakshi chhe.', en:'There is a bird on the tree.', set:1 },
  { gu:'આ મારું પુસ્તક છે.', trans:'Aa maaru pustak chhe.', en:'This is my book.', set:1 },
  // Set 2 – Daily life
  { gu:'હું ગુજરાતી શીખું છું.', trans:'Hu gujarati sheekhu chhu.', en:'I am learning Gujarati.', set:2 },
  { gu:'મને પાણી આપો.', trans:'Mane paani aapo.', en:'Give me water.', set:2 },
  { gu:'હું શાળાએ જાઉં છું.', trans:'Hu shaalaa-e jaau chhu.', en:'I go to school.', set:2 },
  { gu:'તમે કેમ છો?', trans:'Tame kem chho?', en:'How are you?', set:2 },
  { gu:'હું મજામાં છું.', trans:'Hu majaa-maa chhu.', en:'I am fine.', set:2 },
  { gu:'મને ભૂખ લાગી છે.', trans:'Mane bhookh laagi chhe.', en:'I am hungry.', set:2 },
  { gu:'મારું નામ શું છે?', trans:'Maaru naam shu chhe?', en:'What is my name?', set:2 },
  { gu:'બાળકો રમે છે.', trans:'Baalko rame chhe.', en:'Children are playing.', set:2 },
  { gu:'આજે હવામાન સારું છે.', trans:'Aaje havaamaan saaru chhe.', en:'The weather is nice today.', set:2 },
  { gu:'મારા પપ્પા ઓફિસે જાય છે.', trans:'Maara pappa office jaay chhe.', en:'My father goes to office.', set:2 },
  // Set 3 – Family
  { gu:'મારી મમ્મી રસોઈ બનાવે છે.', trans:'Maari mammi rasoi banaave chhe.', en:'My mother cooks food.', set:3 },
  { gu:'દાદા વાર્તા કહે છે.', trans:'Daada vaartaa kahe chhe.', en:'Grandfather tells stories.', set:3 },
  { gu:'બહેન ગીત ગાય છે.', trans:'Bahen geet gaay chhe.', en:'Sister sings a song.', set:3 },
  { gu:'ભાઈ ક્રિકેટ રમે છે.', trans:'Bhai cricket rame chhe.', en:'Brother plays cricket.', set:3 },
  { gu:'દાદી મંદિર જાય છે.', trans:'Daadi mandir jaay chhe.', en:'Grandmother goes to the temple.', set:3 },
  { gu:'અમે સાથે જમીએ છીએ.', trans:'Ame saathe jamie chhie.', en:'We eat together.', set:3 },
  { gu:'કાકા બજારમાં જાય છે.', trans:'Kaakaa bajaar-maa jaay chhe.', en:'Uncle goes to the market.', set:3 },
  { gu:'કાકી ફૂલ લાવે છે.', trans:'Kaaki phool laave chhe.', en:'Aunt brings flowers.', set:3 },
  { gu:'બાળક હસે છે.', trans:'Baalak hase chhe.', en:'The child laughs.', set:3 },
  { gu:'મારો પરિવાર મોટો છે.', trans:'Maaro parivaar moto chhe.', en:'My family is big.', set:3 },
  // Set 4 – Nature
  { gu:'વરસાદ પડે છે.', trans:'Varsaad pade chhe.', en:'It is raining.', set:4 },
  { gu:'ફૂલ પર પતંગિયું બેઠું છે.', trans:'Phool par patangiyu bethu chhe.', en:'A butterfly is sitting on the flower.', set:4 },
  { gu:'નદીમાં પાણી વહે છે.', trans:'Nadi-maa paani vahe chhe.', en:'Water flows in the river.', set:4 },
  { gu:'પર્વત ઊંચો છે.', trans:'Parvat ooncho chhe.', en:'The mountain is tall.', set:4 },
  { gu:'ચાંદો ચમકે છે.', trans:'Chaando chamke chhe.', en:'The moon shines.', set:4 },
  { gu:'પાંદડું લીલું છે.', trans:'Paanddu leelu chhe.', en:'The leaf is green.', set:4 },
  { gu:'દરિયો મોટો છે.', trans:'Dariyo moto chhe.', en:'The sea is big.', set:4 },
  { gu:'હવા ઠંડી છે.', trans:'Havaa thandi chhe.', en:'The air is cold.', set:4 },
  { gu:'તારા આકાશમાં ચમકે છે.', trans:'Taaraa aakaash-maa chamke chhe.', en:'Stars shine in the sky.', set:4 },
  { gu:'બગીચામાં ફૂલ ખીલ્યા છે.', trans:'Bagicha-maa phool kheelyaa chhe.', en:'Flowers have bloomed in the garden.', set:4 },
  // Set 5 – School
  { gu:'શિક્ષક ભણાવે છે.', trans:'Shikshak bhanaave chhe.', en:'The teacher teaches.', set:5 },
  { gu:'વિદ્યાર્થીઓ વાંચે છે.', trans:'Vidyaarthio vaanche chhe.', en:'Students are reading.', set:5 },
  { gu:'આ મારી નોટબુક છે.', trans:'Aa maari notebook chhe.', en:'This is my notebook.', set:5 },
  { gu:'ઘંટ વાગે છે.', trans:'Ghant vaage chhe.', en:'The bell rings.', set:5 },
  { gu:'હું ચિત્ર દોરું છું.', trans:'Hu chitra doru chhu.', en:'I am drawing a picture.', set:5 },
  { gu:'શાળામાં રમતનો સમય છે.', trans:'Shaalaa-maa ramat-no samay chhe.', en:'It is playtime at school.', set:5 },
  { gu:'મારો મિત્ર સારો છે.', trans:'Maaro mitra saaro chhe.', en:'My friend is good.', set:5 },
  { gu:'અમે ગણિત શીખીએ છીએ.', trans:'Ame ganit sheekhie chhie.', en:'We learn mathematics.', set:5 },
  { gu:'પુસ્તકાલય શાંત છે.', trans:'Pustakalay shaant chhe.', en:'The library is quiet.', set:5 },
  { gu:'હું ગૃહકાર્ય કરું છું.', trans:'Hu gruhkaarya karu chhu.', en:'I do homework.', set:5 },
  // Set 6 – Food & Fun
  { gu:'મને આઈસ્ક્રીમ ગમે છે.', trans:'Mane ice-cream game chhe.', en:'I like ice cream.', set:6 },
  { gu:'મમ્મી શાક બનાવે છે.', trans:'Mammi shaak banaave chhe.', en:'Mom makes vegetables.', set:6 },
  { gu:'ચા ગરમ છે.', trans:'Chaa garam chhe.', en:'The tea is hot.', set:6 },
  { gu:'અમે પિકનિક પર જઈએ છીએ.', trans:'Ame picnic par jaie chhie.', en:'We go on a picnic.', set:6 },
  { gu:'કેરી મીઠી છે.', trans:'Keri meethi chhe.', en:'The mango is sweet.', set:6 },
  { gu:'હું ગીત ગાઉં છું.', trans:'Hu geet gaau chhu.', en:'I sing a song.', set:6 },
  { gu:'રમવું મને ગમે છે.', trans:'Ramvu mane game chhe.', en:'I like to play.', set:6 },
  { gu:'આજે રજા છે.', trans:'Aaje rajaa chhe.', en:'Today is a holiday.', set:6 },
  { gu:'લીંબુ ખાટું છે.', trans:'Leembu khaatu chhe.', en:'The lemon is sour.', set:6 },
  { gu:'અમે ટીવી જોઈએ છીએ.', trans:'Ame TV joie chhie.', en:'We watch TV.', set:6 }
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
  const setNum = (day % 6) + 1;
  const todaySet = ALL_SENTENCES.filter(s => s.set === setNum);
  const bonus = seededShuffle(ALL_SENTENCES.filter(s => s.set !== setNum), day).slice(0, 5);
  return { setNum, sentences: [...todaySet, ...bonus] };
}
const SENTENCE_SET_NAMES = {
  1: '📗 Basics', 2: '📘 Daily Life', 3: '📙 Family',
  4: '📕 Nature', 5: '📒 School', 6: '📓 Food & Fun'
};
