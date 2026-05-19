# 📖 ગુજરાતી શીખો — Learn Gujarati

An interactive, gamified web app designed to teach kids the Gujarati language step by step — from vowels and consonants to reading sentences.

🌐 **Live Demo:** [kin8282.github.io/gujarati-learning](https://kin8282.github.io/gujarati-learning/)

---

## ✨ Features

### 🗺️ 7-Step Learning Path
| Step | Section | What You Learn |
|------|---------|---------------|
| 1 | **સ્વર (Vowels)** | 13 Gujarati vowels with pronunciation |
| 2 | **વ્યંજન (Consonants)** | 36 consonants grouped by phonetic families |
| 3 | **અંક (Numbers)** | Numbers 0–50 in Gujarati |
| 4 | **શબ્દો (Words)** | Everyday vocabulary — fruits, animals, colors, body, home |
| 5 | **વાંચન (Reading)** | Word reading & sentence comprehension |
| 6 | **રમત (Quiz)** | 5 quiz types to test knowledge |
| 7 | **પરીક્ષા (Pre-Test)** | Full Level-2 Spring Term style practice paper |

### 📝 Pre-Test Mode (Exam Practice)
A randomized 7-section practice paper modeled after the BAPS Satsang Development Committee **"Level 2 Spring Term Pre-test"** and seeded with content from **Akshar Gujarati Learner-2, Lesson 10 (vowel ઓ)**.

| # | Question Type | Example |
|---|---------------|---------|
| Q1 | Pick the correct Gujarati word | _"Mother"_ → મૈયા / પૈસા / મૌન / મૈત્રી |
| Q2 | Translate consonants with vowel matras | થં ↔ tham, Zu ↔ ઝુ |
| Q3 | Gujarati → English words | ઉધાર → Borrow |
| Q4 | Gujarati → English sentences | કીર્તન પતંગ ઉડાડે છે → Kirtan is flying a kite |
| Q5 | English → Gujarati sentences | "Give fruit to everyone" → બધાને ફળ આપો |
| Q6 | Fill in the blanks | Twenty-Six → ૨૬ |
| Q7 | Match the column | Friday ↔ શુક્રવાર, Week ↔ અઠવાડિયું |

Every attempt builds a fresh shuffled paper from the question bank (96+ items), grades on submit with green/red highlights, and awards XP per correct answer. A perfect score triggers confetti and unlocks the `quiz_perfect` achievement.

### 📅 Daily Rotating Content
- **Words and sentences change every day** so your child sees fresh content daily
- Uses a deterministic seed — same content throughout the day, new set the next
- 64+ words across 3 difficulty levels and 60 sentences across 6 themes
- Quizzes also rotate daily across all 5 types

### 🎮 Gamification
- **XP & Leveling** — Earn points for learning letters and acing quizzes
- **7 Achievement Badges** — First Letter, Vowel Master, Consonant King, Number Ninja, and more
- **Confetti Celebrations** — Visual rewards on milestones
- **Streak Tracking** — Get bonus XP for consecutive correct answers

### 🔊 Speech Synthesis
- Click any letter, word, or sentence to hear it spoken aloud
- Uses the Web Speech API with Gujarati (`gu-IN`) voice

### 📱 Responsive Design
- Works on desktop, tablet, and mobile
- Sidebar navigation with hamburger menu on mobile
- Beautiful gradient UI with floating decorative elements

---

## 🧑‍💻 Tech Stack

- **HTML5** — Semantic structure
- **CSS3** — Custom properties, flexbox, grid, animations
- **Vanilla JavaScript** — Zero dependencies, no build step
- **localStorage** — Progress persistence across sessions
- **Web Speech API** — Text-to-speech for pronunciation

---

## 🚀 Getting Started

### Run Locally
```bash
# Clone the repo
git clone https://github.com/Kin8282/gujarati-learning.git
cd gujarati-learning

# Serve with any static server
python3 -m http.server 8080
# or
npx serve .
```

Open [http://localhost:8080](http://localhost:8080) in your browser.

### Deploy to GitHub Pages
1. Push to GitHub
2. Go to **Settings → Pages**
3. Set source to **Deploy from branch** → **main** → **/ (root)**
4. Your site will be live at `https://<username>.github.io/gujarati-learning/`

---

## 📁 Project Structure

```
gujarati-learning/
├── index.html    # Main HTML structure
├── style.css     # All styles, animations, responsive breakpoints
├── data.js       # Gujarati content — letters, words, sentences, achievements
├── app.js        # Application logic — navigation, quiz engine, progress tracking
└── README.md
```

---

## 📝 Content Overview

### Reading Words (200+ total, 20 shown daily)
- 🟢 **Easy** — Two-letter words: મા, બા, ઘર, જા, ના, હા...
- 🟡 **Medium** — Three-letter words: કમલ, પવન, ગગન, નગર...
- 🟠 **Longer** — Everyday, family, nature & school words

### Sentence Themes (200 total across 20 themed sets, 15 shown daily)
- 📗 Greetings, 📘 Daily Routine, 📙 Family & Home, 📕 Nature & Weather
- 📒 School & Learning, 📓 Food & Kitchen, 📔 Travel, 🐾 Animals
- 💖 Emotions, 🎉 Festivals, 🛒 Shopping, ⚽ Sports, 🙏 Manners
- 🌿 Garden, 👷 Occupations, 🎨 Colors, 🔢 Counting, 🕐 Time & Days

### Pre-Test Question Bank
- 20 Gujarati-word multiple-choice items
- 16 consonant + vowel-matra translations (both directions)
- 20 word-translation items
- 10 Gujarati → English sentence items
- 10 English → Gujarati sentence items
- 15 fill-in-the-blank items (numbers, days, times)
- 5 match-the-column groups (Time, Animals, Seasons, Home, People)

---

## 🤝 Contributing

Want to add more words, sentences, or quiz types? Edit `data.js` and submit a PR!

---

## 📄 License

MIT License — free to use, modify, and share.
