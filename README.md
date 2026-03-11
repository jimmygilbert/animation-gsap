# Demo GSAP – Animation

Projet de démonstrations **GSAP 3** (GreenSock).

## Structure

- **Sources** : `index.html`, `svg-presentation.html`, `css/styles.css`, `src/*.ts`
- **Build** : `npm run build` compile et copie tout dans `dist/` :
  - `dist/index.html`, `dist/svg-presentation.html`
  - `dist/css/styles.css`
  - `dist/home.js`, `dist/svg-presentation.js`
- Le dossier `dist/` contient le site complet prêt à déployer.

## Règles du projet

- **CSS** : tout dans `css/`, jamais de `<style>` ou inline dans le HTML
- **Animations** : GSAP uniquement (pas d’animations CSS pour les démos principales)

## Lancer

```bash
npm install
npm run dev    # watch + serveur
npm run build  # compile dist/
```

## Animations

- **Carte 1** : apparition fondu + translation ; survol = léger lift
- **Carte 2** : entrée depuis la gauche avec easing élastique ; survol = décalage X élastique
- **Carte 3** : entrée avec rotation ; survol = rotation + soulèvement
- **Page SVG** : tracé du contour, titre, blocs, timeline, orbite, pulsation play – tout en GSAP
