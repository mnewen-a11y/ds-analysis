# Design System - Analysis Platform

**Professionell. Vertrauenswürdig. Klar.**

Ein modulares, themebares Design System für die Multi-Purpose Quality Analysis Platform.

## 🎨 Features

- ✅ **Atomic Design** - Systematischer Aufbau von Atoms → Molecules → Organisms
- ✅ **White-Label Ready** - Vollständig themebar für Client-Branding
- ✅ **WCAG 2.1 AA** - Accessibility by default
- ✅ **Mobile-First** - Responsive Design
- ✅ **Design Tokens** - JSON-basierte Konfiguration
- ✅ **Storybook** - Living Documentation
- ✅ **TypeScript** - Type-safe Components
- ✅ **0€ Kosten** - Komplett Open Source

---

## 🚀 Quick Start

### 1. Repository klonen

```bash
git clone https://github.com/mnewen-a11y/ds-analysis.git
cd ds-analysis
```

### 2. Dependencies installieren

```bash
npm install
```

### 3. Storybook starten

```bash
npm run storybook
```

Öffnet automatisch im Browser: `http://localhost:6006`

---

## 📁 Projektstruktur

```
ds-analysis/
├── .storybook/              # Storybook Configuration
│   ├── main.ts
│   └── preview.ts
│
├── src/
│   ├── tokens/              # Design Tokens (JSON)
│   │   ├── foundation.json  # Basis-Tokens (farb-agnostisch)
│   │   └── themes/
│   │       ├── default.json              # Standard-Theme
│   │       └── white-label-template.json # Template für Clients
│   │
│   ├── components/
│   │   ├── atoms/           # Basis-Komponenten
│   │   │   ├── Button/
│   │   │   │   ├── Button.tsx
│   │   │   │   ├── Button.module.css
│   │   │   │   └── Button.stories.tsx
│   │   │   └── Badge/
│   │   │
│   │   ├── molecules/       # Kombinationen
│   │   │   └── ScoreCard/
│   │   │
│   │   └── organisms/       # Komplexe Komponenten
│   │
│   └── styles/
│       └── globals.css      # CSS-Variablen aus Tokens
│
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🎨 Design Principles

### 1. **Clarity over Cleverness**
Keine unnötigen Animationen. Klare Hierarchie. Fokus auf Inhalt.

### 2. **Positive Communication**
Chancen zeigen, nicht Fehler betonen. Coach-Tonalität statt Kritik.

### 3. **Accessible by Default**
WCAG 2.1 AA in jedem Component. Mindestens 4.5:1 Kontrast. 44px Touch-Targets.

### 4. **Mobile-First**
Primär für Touch designed. Desktop ist erweiterte Version.

### 5. **Brand-Agnostic Foundation**
System funktioniert mit jedem Brand. Theming über CSS-Variablen.

---

## 🧩 Components

### Atoms (Basis-Elemente)

#### Button
Primäre Interaktions-Komponente mit 3 Varianten.

```tsx
import { Button } from '@/components/atoms/Button';

<Button variant="primary">Analyse starten</Button>
<Button variant="secondary">Abbrechen</Button>
<Button variant="tertiary">Details</Button>
```

#### Badge
Status-Indikatoren und Labels.

```tsx
import { Badge } from '@/components/atoms/Badge';

<Badge variant="success">Gut</Badge>
<Badge variant="warning">Optimierung möglich</Badge>
<Badge variant="danger">Handlungsbedarf</Badge>
```

### Molecules (Kombinationen)

#### ScoreCard
Score-Anzeige mit Interpretation.

```tsx
import { ScoreCard } from '@/components/molecules/ScoreCard';

<ScoreCard
  title="HIX-Score"
  score={14.2}
  maxScore={20}
  interpretation="Gut"
  description="Gute Verständlichkeit"
/>
```

---

## 🎨 Theming

### CSS-Variablen nutzen

Alle Components nutzen CSS-Variablen aus `globals.css`:

```css
.myButton {
  background-color: var(--color-primary);
  padding: var(--space-4);
  border-radius: var(--radius-base);
}
```

### White-Label Theme erstellen

1. Kopiere `white-label-template.json`
2. Ersetze Placeholder mit Client-Werten
3. CSS-Variablen werden automatisch überschrieben

```json
{
  "brand": {
    "name": "Bundesministerium XY",
    "primary": "#000000"
  }
}
```

---

## 🧪 Development

### Neue Komponente erstellen

```bash
# Struktur
src/components/atoms/MyComponent/
├── MyComponent.tsx         # React Component
├── MyComponent.module.css  # Styles
└── MyComponent.stories.tsx # Storybook Stories
```

### Component-Template

```tsx
// MyComponent.tsx
import React from 'react';
import styles from './MyComponent.module.css';

export interface MyComponentProps {
  children: React.ReactNode;
}

export const MyComponent: React.FC<MyComponentProps> = ({ children }) => {
  return <div className={styles.component}>{children}</div>;
};
```

```css
/* MyComponent.module.css */
.component {
  padding: var(--space-4);
  background: var(--color-neutral-0);
}
```

```tsx
// MyComponent.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { MyComponent } from './MyComponent';

const meta: Meta<typeof MyComponent> = {
  title: 'Atoms/MyComponent',
  component: MyComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MyComponent>;

export const Default: Story = {
  args: {
    children: 'Hello World',
  },
};
```

---

## 📦 Build & Deploy

### Storybook builden

```bash
npm run build-storybook
```

Erstellt statische Version in `storybook-static/`.

### Als NPM Package nutzen

(Noch nicht implementiert - für später)

```bash
npm run build
```

---

## ✅ Quality Checks

### Accessibility Testing

Storybook hat **@storybook/addon-a11y** integriert.

1. Öffne Komponente in Storybook
2. Klicke auf "Accessibility" Tab
3. Prüfe WCAG-Violations

### Browser-Support

- Chrome/Edge (latest 2)
- Firefox (latest 2)
- Safari (latest 2)
- Mobile Safari iOS 15+

---

## 🎯 Roadmap

### Phase 1 ✅ (Woche 1)
- [x] Design Tokens definiert
- [x] Button Component
- [x] Badge Component
- [x] ScoreCard Component
- [x] Storybook Setup
- [x] CSS-Variablen System

### Phase 2 (Woche 2)
- [ ] Input Component
- [ ] Card Component
- [ ] Progress Component
- [ ] QuickWinCard Component
- [ ] DashboardHeader Organism

### Phase 3 (Woche 3)
- [ ] White-Label Theme-Switcher
- [ ] 2 Example Themes
- [ ] Documentation Pages
- [ ] Accessibility Audit

---

## 📚 Documentation

- **Storybook:** `npm run storybook`
- **Design Tokens:** siehe `src/tokens/foundation.json`
- **Theming Guide:** (coming soon)
- **Component API:** Auto-generiert in Storybook

---

## 🤝 Contributing

### Branch Strategy
- `main` - Production-ready
- `develop` - Development branch
- `feature/*` - Feature branches

### Commit Messages
```
feat(button): add icon support
fix(badge): correct contrast ratio for warning variant
docs(readme): update theming guide
```

---

## 📄 License

Proprietary - Internal Use Only

---

## 👥 Team

**Design System Owner:** [Ihr Name]  
**Developer:** Claude (AI Assistant)

---

## 🔗 Links

- [GitHub Repository](https://github.com/mnewen-a11y/ds-analysis)
- [Storybook (deployed)]() - (coming soon)
- [Design Documentation]() - (coming soon)

---

**Fragen?** Öffne ein Issue auf GitHub!
