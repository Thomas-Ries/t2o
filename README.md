# T2O Bâtiment — site vitrine

Site vitrine pour T2O Bâtiment, artisan du second œuvre (plâtrerie, sanitaire,
électricité, isolation, carrelage, peinture) en Alsace.

## Stack

- Vue 3 + Vite (JavaScript, pas de TS)
- Vue Router (history mode)
- Tailwind CSS v4 (compilé via `@tailwindcss/vite`, charte dans `src/style.css`)
- Aucune base de données : le formulaire POST vers `/api/contact` (Cloudflare
  Worker) qui envoie un e-mail via Resend. Aucune donnée n'est stockée (RGPD
  minimal : mention sous le formulaire + politique de confidentialité).

## Dev

```bash
npm install
npm run dev
```

> En local, `/api/contact` n'existe pas (pas de worker) : le formulaire affiche
> une erreur. C'est normal — tester l'envoi sur le déploiement Cloudflare.

## Build

```bash
npm run build
```

Le dossier `dist/` est prêt à glisser-déposer sur Cloudflare Pages
(**Direct Upload**). `public/_worker.js` et `public/_redirects` sont copiés
dans `dist/` automatiquement : le worker gère `/api/contact`, les redirections
SPA sont assurées par `_redirects`.

## Variables Cloudflare (Settings → Variables)

| Variable | Description |
| --- | --- |
| `RESEND_API_KEY` | Clé API Resend (obligatoire pour l'envoi du formulaire) |
| `CONTACT_EMAIL` | Destinataire (défaut : t2obatiment@gmail.com) |
| `MAIL_FROM` | Expéditeur, ex. `T2O Bâtiment <contact@t2o-batiment.fr>` |

## Contenu

Tout le contenu éditorial (spécialités, FAQ, témoignages, coordonnées,
photos) vit dans `src/data/site.js`.

## Deploy Cloudflare

### En une commande (wrangler)

```bash
npm run deploy
```

Build puis envoi du `dist/` sur Cloudflare Pages. La première fois :

```bash
npx wrangler login   # ouvre le navigateur, connexion au compte Cloudflare
npx wrangler pages project create t2o   # crée le projet (une seule fois)
```

Ensuite chaque `npm run deploy` met le site en ligne directement
(l'équivalent du drag & drop, en ligne de commande — même mécanisme Direct Upload).

### En drag & drop

1. `npm run build`
2. Cloudflare Dashboard → Workers & Pages → Create → Pages → Upload assets
3. Glisser le **contenu** de `dist/`
4. Ajouter les variables ci-dessous dans Settings → Variables
5. Redéployer pour prendre en compte les variables

## RGPD

- Aucun stockage, aucune donnée conservée
- Mention d'information sous le formulaire + page politique de confidentialité
- Pas de traceur, pas de bandeau cookies nécessaire
- À compléter : registre des traitements (côté entreprise)
