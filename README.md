# Quiz interactif avec Svelte v5 + Runes

Ce projet propose un petit quiz développé avec **Svelte v5**, en tirant parti des **runes** pour une gestion d’état réactive et simplifiée.

## ⚙️ Composition du projet

Le quiz est décomposé en plusieurs composants :

1. **ProgressBar** — affiche visuellement le score et la progression.
2. **CardQuiz** — affiche les questions, gère les réponses et le comptage des points.

#La logique du quiz (affichage et réponses) se trouve dans les fichiers .svelte.js du dossier runes.

## 📦 Sources des données

Les questions sont chargées dynamiquement via `fetch()` depuis un fichier `.JSON` situé dans le dossier **public**.
<img width="873" height="282" alt="Capture d'écran 2025-08-12 194746" src="https://github.com/user-attachments/assets/ddc4891b-4bd9-4b88-b0a8-92f6b54affb5" />

<img width="716" height="551" alt="Capture d'écran 2025-08-12 194801" src="https://github.com/user-attachments/assets/4e8efbea-8c9d-47ce-b76b-d5a05433ccd5" />

