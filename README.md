# 📸 Snapface

[![Build Status](https://img.shields.io/github/actions/workflow/status/ton-utilisateur/snapface/ci.yml?branch=main)](https://github.com/ton-utilisateur/snapface/actions)
[![License: MIT](https://img.shields.io/github/license/ton-utilisateur/snapface)](LICENSE)
[![Last Commit](https://img.shields.io/github/last-commit/ton-utilisateur/snapface)](https://github.com/ton-utilisateur/snapface/commits/main)
[![Issues](https://img.shields.io/github/issues/ton-utilisateur/snapface)](https://github.com/ton-utilisateur/snapface/issues)

Snapface est une application Angular permettant de partager des *snaps* (photos) et d'interagir avec ceux-ci via des likes. Inspirée d’un réseau social, elle est construite avec Angular CLI 16.

---

## ✨ Fonctionnalités

- 🖼️ Affichage des snaps (posts photo)
- ❤️ Système de likes / dislikes
- 🔁 Navigation entre la liste et les détails
- 🧪 Tests unitaires avec Karma
- ♻️ Rechargement automatique (Hot Reload)

---

## 🖼️ Screenshots

> Remplace les images si besoin.

| Page d'accueil 📱 | Vue détaillée 🔍 |
|------------------|-----------------|
| ![Accueil](screenshots/home.png) | ![Détail](screenshots/detail.png) |

---

## 📚 Sommaire

- [🚀 Démarrage rapide](#-démarrage-rapide)
- [🛠️ Scripts utiles](#️-scripts-utiles)
- [📦 Dépendances](#-dépendances)
- [🧪 Tests](#-tests)
- [📤 Déploiement](#-déploiement)
- [🤝 Contribution](#-contribution)
- [❓ Aide supplémentaire](#-aide-supplémentaire)
- [⚖️ Licence](#️-licence)

---

## 🚀 Démarrage rapide

```bash
git clone https://github.com/ton-utilisateur/snapface.git
cd snapface
npm install
ng serve

Accède à : http://localhost:4200

🛠️ Scripts utiles

Action	Commande
Lancer le serveur local	ng serve
Générer un composant	ng generate component nom
Générer un service	ng generate service nom
Compiler le projet	ng build
Lancer les tests unitaires	ng test
Lancer les tests e2e	ng e2e (nécessite config)

📦 Dépendances

Extrait de package.json :

    @angular/core

    rxjs

    @angular/router

    karma (pour les tests)

    typescript

🧪 Tests

    Unitaires : via Karma

ng test

End-to-end : via Cypress ou Protractor (à configurer)

    ng e2e

📤 Déploiement

Voici quelques options de déploiement :

🚀 Firebase Hosting

npm install -g firebase-tools
firebase login
firebase init
ng build
firebase deploy

🌐 Netlify

    Lier le repo Git

    Config :

        Build command : ng build

        Publish directory : dist/snapface

⚡ Vercel

    Installer Vercel CLI :

    npm i -g vercel
    vercel

    Suivre les instructions pour le déploiement


❓ Aide supplémentaire

    Commandes Angular CLI : ng help

    Documentation : angular.io/cli


⚙️ 2. Fichier ci.yml pour GitHub Actions

Crée un fichier dans ton dépôt à l'emplacement suivant :

.github/workflows/ci.yml

Et colle ce contenu minimal pour builder ton projet Angular :

name: CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
    - name: Checkout le dépôt
      uses: actions/checkout@v3

    - name: Installer Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'

    - name: Installer les dépendances
      run: npm install

    - name: Build Angular
      run: npm run build --if-present

    🔧 Tu peux ajouter des étapes de test (ng test, ng lint, etc.) si tu veux que le workflow couvre aussi la qualité de code.

📝 3. Fichier LICENSE (optionnel)

Voici un exemple de licence MIT, que tu peux placer dans un fichier LICENSE à la racine du projet :

⚖️ MIT License

Copyright (c) 2025 METENIER Myriam

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction...

[contenu complet disponible ici : https://opensource.org/licenses/MIT]
