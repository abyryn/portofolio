# Porto React — Abi Rian Ana Bawi

Portfolio website dikonversi dari HTML/CSS/JS murni ke **React + Vite**.

## Cara Menjalankan

### 1. Install dependencies
Buka terminal di folder `porto-react`, lalu jalankan:

```bash
npm install
```

### 2. Jalankan development server
```bash
npm run dev
```

Buka browser di `http://localhost:5173`

### 3. Build untuk production
```bash
npm run build
```

File hasil build akan ada di folder `dist/`.

---

## Struktur Project

```
porto-react/
├── index.html
├── vite.config.js
├── package.json
└── src/
    ├── main.jsx          # Entry point
    ├── App.jsx           # Root component
    ├── styles/
    │   └── globals.css   # CSS variables & utility classes
    ├── hooks/
    │   └── useAOS.js     # Animate On Scroll hook
    └── components/
        ├── LoadingScreen.jsx
        ├── ParticleCanvas.jsx
        ├── ScrollProgress.jsx
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── About.jsx
        ├── Experience.jsx
        ├── Skills.jsx
        ├── Portfolio.jsx
        ├── ModalECU.jsx
        ├── ModalAI.jsx
        ├── ChatbotDemo.jsx
        ├── Certifications.jsx
        ├── Contact.jsx
        ├── Footer.jsx
        └── BackToTop.jsx
```

## Tech Stack
- **React 18** — UI library
- **Vite 5** — Build tool & dev server
- **CSS Modules** — Scoped styling per component
