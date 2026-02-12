# 🚀 SETUP ANLEITUNG

Folgen Sie diesen Schritten, um das Design System lokal zum Laufen zu bringen:

## Schritt 1: Dateien nach GitHub

### Option A: Via GitHub Desktop (einfachst)

1. Öffne GitHub Desktop
2. File → Clone Repository
3. Wähle `mnewen-a11y/ds-analysis`
4. Klone zu lokalem Ordner
5. Kopiere alle heruntergeladenen Dateien in diesen Ordner
6. GitHub Desktop zeigt alle Änderungen
7. Commit mit Message: "Initial commit: Design System setup"
8. Push to origin

### Option B: Via Command Line

```bash
# 1. In Ihrem lokalen Ordner mit den Dateien:
cd /pfad/zu/ds-analysis

# 2. Git initialisieren
git init
git add .
git commit -m "Initial commit: Design System setup"

# 3. Remote hinzufügen
git remote add origin https://github.com/mnewen-a11y/ds-analysis.git

# 4. Pushen
git branch -M main
git push -u origin main
```

---

## Schritt 2: Dependencies installieren

```bash
npm install
```

**Dauer:** ~2-3 Minuten

Dies installiert:
- React 18.2
- Storybook 7.6
- TypeScript 5.3
- Lucide Icons
- TailwindCSS 3.4

**Kosten:** 0€ (alles Open Source!)

---

## Schritt 3: Storybook starten

```bash
npm run storybook
```

**Was passiert:**
1. Vite startet Dev-Server
2. Storybook kompiliert Components
3. Browser öffnet automatisch: `http://localhost:6006`

**Dauer:** ~30 Sekunden beim ersten Mal

---

## Schritt 4: Erkunden! 🎉

Sie sollten jetzt sehen:

```
┌─────────────────────────────────────────┐
│ 🎨 Design System - Analysis Platform    │
├──────────────┬──────────────────────────┤
│              │                           │
│ 📖 Docs      │  Willkommen!             │
│              │                           │
│ 🧩 Atoms     │  Klicken Sie links auf   │
│  └ Button    │  "Button" um die erste   │
│  └ Badge     │  Komponente zu sehen.    │
│              │                           │
│ 🔗 Molecules │                           │
│  └ ScoreCard │                           │
└──────────────┴──────────────────────────┘
```

---

## Troubleshooting

### Problem: `npm install` schlägt fehl

**Lösung:**
```bash
# Node.js Version checken (sollte 18+ sein)
node --version

# Falls zu alt, neueste installieren von:
# https://nodejs.org/

# Dann nochmal:
npm install
```

### Problem: Port 6006 bereits belegt

**Lösung:**
```bash
# Anderen Port nutzen:
npm run storybook -- --port 6007
```

### Problem: "Cannot find module React"

**Lösung:**
```bash
# Dependencies neu installieren:
rm -rf node_modules
rm package-lock.json
npm install
```

---

## Nächste Schritte

1. ✅ Storybook läuft
2. → Klicken Sie durch die Components
3. → Testen Sie die Varianten (Primary, Secondary, etc.)
4. → Checken Sie den "Accessibility" Tab
5. → Geben Sie mir Feedback!

**Fragen?** Schreiben Sie mir im Chat! 💬
