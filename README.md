# 📖 ગુજરાતી શીખો — Learn Gujarati

An interactive, gamified web app designed to teach kids the Gujarati language step by step — from vowels and consonants to reading sentences.

🌐 **Live Demo:** [kin8282.github.io/gujarati-learning](https://kin8282.github.io/gujarati-learning/)

---

## ✨ Features

### 🗺️ 6-Step Learning Path
| Step | Section | What You Learn |
|------|---------|---------------|
| 1 | **સ્વર (Vowels)** | 13 Gujarati vowels with pronunciation |
| 2 | **વ્યંજન (Consonants)** | 36 consonants grouped by phonetic families |
| 3 | **અંક (Numbers)** | Numbers 0–9 in Gujarati |
| 4 | **શબ્દો (Words)** | Everyday vocabulary — fruits, animals, colors, body, home |
| 5 | **વાંચન (Reading)** | Word reading & sentence comprehension |
| 6 | **રમત (Quiz)** | 5 quiz types to test knowledge |

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

### Reading Words (64 total, 20 shown daily)
- 🟢 **Easy** — Two-letter words: મા, બા, ઘર, જા, ના, હા...
- 🟡 **Medium** — Three-letter words: કમલ, પવન, ગગન, નગર...
- 🟠 **Longer** — Everyday, family, nature & school words

### Sentence Themes (60 total, 15 shown daily)
- 📗 Basics — "આ ગાય છે." (This is a cow)
- 📘 Daily Life — "તમે કેમ છો?" (How are you?)
- 📙 Family — "દાદા વાર્તા કહે છે." (Grandfather tells stories)
- 📕 Nature — "વરસાદ પડે છે." (It is raining)
- 📒 School — "શિક્ષક ભણાવે છે." (The teacher teaches)
- 📓 Food & Fun — "કેરી મીઠી છે." (The mango is sweet)

---

## 🤝 Contributing

Want to add more words, sentences, or quiz types? Edit `data.js` and submit a PR!

---

## 📄 License

MIT License — free to use, modify, and share.
