# 🚀 VERCEL DEPLOYMENT GUIDE

So deployen Sie das Design System auf Vercel:

---

## Schritt 1: Neue Dateien zu Git pushen

**Diese 2 neuen Dateien müssen ins Repo:**
- `vercel.json` (Vercel-Config)
- `.nvmrc` (Node.js Version)

```bash
cd ds-analysis

# Neue Dateien hinzufügen
git add vercel.json .nvmrc

# Commit
git commit -m "Add Vercel deployment config"

# Push zu GitHub
git push origin main
```

---

## Schritt 2: In Vercel deployen

1. **Gehen Sie zu:** https://vercel.com
2. **Klicken Sie:** "Add New..." → "Project"
3. **Import Repository:** `mnewen-a11y/ds-analysis`
4. **Settings werden automatisch erkannt!** ✅
   - Build Command: `npm run build-storybook`
   - Output Directory: `storybook-static`
5. **Klicken Sie:** "Deploy"

---

## ⏱️ Deployment läuft...

Vercel wird:
1. Repository klonen
2. `npm install` ausführen (~2 Min)
3. `npm run build-storybook` ausführen (~1 Min)
4. Storybook als statische Website hosten

**Gesamtdauer: ~3-4 Minuten**

---

## ✅ Fertig!

Sie bekommen eine URL wie:
- `ds-analysis.vercel.app`
- oder `ds-analysis-xyz.vercel.app`

**Diese URL können Sie:**
- ✅ Mit Team teilen
- ✅ In Jira verlinken
- ✅ Bookmarken
- ✅ Als "Living Styleguide" nutzen

---

## 🔄 Auto-Deploy

**Bonus:** Jeder Git-Push triggert automatisch neues Deployment!

```bash
# Sie ändern Component:
git add src/components/atoms/Button/
git commit -m "Update Button styles"
git push

# → Vercel deployt automatisch neu! 🚀
```

---

## 🆘 Troubleshooting

### Build schlägt fehl?

**Checken Sie in Vercel:**
- Build Logs anschauen
- Fehlermeldung kopieren
- Mir schicken - ich helfe! 💪

### Custom Domain?

**Später möglich:**
- Settings → Domains
- `design-system.ihre-domain.de` hinzufügen

---

**Viel Erfolg!** 🎉
