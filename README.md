
# 🏡 Site Vitrine - Residence Eureka

## 📋 Présentation
Cette application web a été conçue avec React et TypeScript, en suivant une approche modulaire, responsive et moderne, afin de présenter la Résidence Eureka de manière attractive et interactive.

![alt text](demo-v2.png)


## ✨ Fonctionnalités principales
### ✅ Interface utilisateur
- Navbar moderne avec support mobile (burger menu inclus)
- Hero section avec effet de parallaxe fluide
- Section Résidences en vedette
- Section Témoignages des utilisateurs
- Section d’appel à l’action (Call to Action)

###  🔍 Résidences
- Page dédiée : ResidenceListPage
- Recherche textuelle instantanée
- Filtrage par ville
- Grille responsive avec cartes attractives
- Effets de survol (hover) modernes sur les cartes



### 🧭 Navigation
- Intégration de react-router-dom pour une navigation fluide en SPA
- Navbar utilisant des liens React Router
- Architecture de routing de base en place (prête à être étendue)


### 🎨 Design & Expérience Utilisateur
- Couleurs cohérentes avec la charte définie
- Typographie élégante et lisible
- Design responsive pour tous types d’écrans (mobile, tablette, desktop)
- Effets visuels engageants (hover, parallax)
- Images haute qualité issues de Unsplash


## ⚙️ Stack Technique


| Technologie | Rôle |
|-------------|------|
| React | Framework principal |
| TypeScript | Typage statique |
| React Router DOM | Routing entre pages |
| CSS / Tailwind | Stylisation |
| Unsplash | Source d'images haute qualité |


## 🧱 Architecture des composants

```plaintext
src/
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── FeaturedResidences.tsx
│   ├── Testimonials.tsx
│   └── CallToAction.tsx
├── pages/
│   ├── HomePage.tsx
│   └── ResidenceListPage.tsx
├── types/
│   └── residence.ts
├── App.tsx
└── main.tsx
```



## 🚀 Prochaines étapes (suggestions)
- Intégration de données dynamiques (API - Django REST Framework)
- Ajout de pages détaillées pour chaque résidence
- Gestion d’authentification (connexion / inscription)
- Formulaire de contact



## 📦 Installation et lancement

```sh
git clone https://github.com/eureka-residences/site-vitrine-eureka.git
cd real-estate-app
npm install
npm run dev
```

## Deploiement sur GitHub Pages
```sh
npm run build
npm install -g gh-pages
# gh-pages -d build

npm run deploy


![Demo v2](demo-v2.png)

![alt text](image.png)
```