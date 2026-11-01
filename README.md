# Boîte à outils guitare

Une appli libre et gratuite pour les guitaristes : **gammes, modes, accords, triades et arpèges transposables**, placés automatiquement sur le manche dans la tonalité choisie, et des **jeux au métronome** pour les mettre en pratique.

C'est la version interactive de la « Boîte à outils guitare » (fiches PDF), conçue pour les élèves de guitare musiques actuelles et jazz en conservatoire.

👉 **Utiliser l'appli :** https://mlevan8395.github.io/boite-a-outils-guitare/

## Installer l'appli

- **Android** (Chrome) : ouvre le site, puis touche **Installer l'appli** en haut de la page, ou menu ⋮ → **Installer l'application**.
- **iPhone / iPad** (Safari) : bouton Partager → **Sur l'écran d'accueil**.
- **Ordinateur** (Chrome, Edge) : icône d'installation dans la barre d'adresse.

L'appli fonctionne ensuite **hors ligne**, son compris : le son de guitare et le métronome sont fabriqués par l'appli, sans fichier audio. Elle se met à jour toute seule à chaque ouverture avec une connexion.

## Ce qu'on y trouve

| Onglet | Contenu |
|---|---|
| **Schémas** | 151 schémas en 11 rubriques : premières gammes (avec les doigts), accords ouverts, power chords et octaves, triades et renversements, accords jazz « shell », positions transposables, accords sur les cordes 1-2-3-4, arpèges à 4 sons, modes (gamme majeure, mineur mélodique, mineur harmonique, gammes symétriques), accords enrichis. Choix de la tonalité, pastilles en intervalles ou en noms de notes, gammes « en position » ou « sur une corde », écoute |
| **Jeux au métronome** | Cycle des quartes (ou des quintes) sur une corde ; une note sur toutes les cordes ; notes au hasard ; gammes et arpèges en rythme (noires ou croches, avec changement de tonalité en cycle des quartes) ; accords en cycle des quartes avec choix automatique du voicing le plus proche. Tempo lent, moyen, rapide, réglable de 5 en 5 |
| **Toutes les notes** | Le manche de 0 à 12, notes naturelles seules ou avec altérations, ou noms cachés |
| **Présentation** et **Les mains** | Le mode d'emploi de la boîte à outils, les doigts de la main gauche et la tenue du médiator |

Un bouton **Droitier / Gaucher** retourne tous les manches.

## Principes

- **Aucune donnée collectée.** Pas de compte, pas de publicité ; les réglages restent dans le navigateur.
- **Notation française** : notes seules en Do, Ré, Mi… ; accords et tonalités en lettres (C, Am7, « en G ») ; intervalles notés ♭2, 2, ♭3, 3…
- **Contenu séparé du code** : tous les schémas sont dans `contenu/formes.js`, lisibles et modifiables sans toucher à l'appli (voir `CONTRIBUER.md`).

## Licences

- Code (`index.html`, `sw.js`) : licence MIT (`LICENSE`).
- Contenu (`contenu/`, `images/`) : CC BY-SA 4.0 (`LICENCE-CONTENU.md`).

© 2026 Mickael Le Van
