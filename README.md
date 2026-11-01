# Boîte à outils guitare

Une appli libre et gratuite pour les guitaristes : **gammes, modes, accords, triades et arpèges transposables**, placés automatiquement sur le manche dans la tonalité choisie, et des **jeux au métronome** pour les mettre en pratique.

C'est la version interactive de la « Boîte à outils guitare » (fiches PDF), conçue pour les élèves de guitare musiques actuelles et jazz en conservatoire.

👉 **Utiliser l'appli :** https://mlevan8395.github.io/toolbox-guitare/

## Installer l'appli

- **Android** (Chrome) : ouvre le site, puis touche **Installer l'appli** en haut de la page, ou menu ⋮ → **Installer l'application**.
- **iPhone / iPad** (Safari) : bouton Partager → **Sur l'écran d'accueil**.
- **Ordinateur** (Chrome, Edge) : icône d'installation dans la barre d'adresse.

L'appli fonctionne ensuite **hors ligne**, son compris. Elle se met à jour toute seule à chaque ouverture avec une connexion.

## Ce qu'on y trouve

Cinq onglets, chacun avec son sous-menu (les jeux au métronome sont marqués d'une note) :

| Onglet | Contenu |
|---|---|
| **Présentation** | Le mode d'emploi de la boîte à outils |
| **Manche** | Toutes les notes (de 0 à 12) ; les mains ; cycle des quartes sur une corde ; une note sur toutes les cordes |
| **Lecture** | **Lecture de notes** (partition générée au hasard, en position ou le long d'une corde, dans une tonalité ou avec altérations, valeurs rythmiques (rondes, blanches, noires, croches, triolets, doubles croches ou mélangées) et intervalle maximal (de la seconde à l'octave) réglables séparément, articulations, sens du médiator) ; **lecture de grille** (accords et notation rythmique, des accords ouverts au funk, avec articulations, sens du médiator et accompagnement pop ou swing) |
| **Gammes** | Premières gammes (avec les doigts), modes et gammes dérivés ; gammes en rythme |
| **Accords** | Accords ouverts, power chords et octaves, triades majeures et mineures, jazz shells, positions transposables, renversements sur les cordes 1 à 4, accords enrichis ; enchaînements d'accords (cycle des quartes ou hasard, choix de la position, montée des renversements pour les triades, accompagnement swing ou pop avec orgue, walking bass et batterie) ; générateur d'accords pour jouer ou improviser, jusqu'aux accords enrichis |
| **Arpèges** | Un sous-menu par accord (Maj7, 7, m7, m7♭5, dim7) : sur une octave en position (cordes 6-5-4, 5-4-3, 4-3-2, 3-2-1), puis sur deux octaves (en position, en enchaînant deux positions, en diagonale) ; arpèges en rythme, avec accompagnement pop ou swing au choix |

Tous les schémas se placent dans la tonalité choisie, avec les intervalles ou les noms des notes. Dans les jeux, la note ou l'accord à jouer s'affiche en gros, et le suivant est annoncé une mesure à l'avance. Tempo lent, moyen ou rapide, réglable de 5 en 5 ; croches droites ou swing, et clic sur 2 et 4 en option.

Un bouton **Droitier / Gaucher** retourne tous les manches.

## Principes

- **Aucune donnée collectée.** Pas de compte, pas de publicité ; les réglages restent dans le navigateur.
- **Notation française** : notes seules en Do, Ré, Mi… ; accords et tonalités en lettres (C, Am7, « en G ») ; intervalles notés ♭2, 2, ♭3, 3…
- **Contenu séparé du code** : tous les schémas sont dans `contenu/formes.js`, lisibles et modifiables sans toucher à l'appli (voir `CONTRIBUER.md`).

## Crédits

- Glyphes musicaux de la partition (clé de sol, altérations) : tracés de la police GNU FreeFont (FreeSerif), utilisés selon son exception de police.

## Crédits des sons

Guitare électrique en son clair : échantillons de [Karoryfer Samples](https://www.karoryfer.com/karoryfer-samples), mis en forme par Nicholaus Brosowsky ([tonejs-instruments](https://github.com/nbrosowsky/tonejs-instruments)), licence [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/deed.fr). Fichiers raccourcis et convertis en mono. Le métronome, la batterie, la basse, le pad et l'orgue sont des sons de synthèse fabriqués par l'appli.

## Licences

- Code (`index.html`, `sw.js`) : licence MIT (`LICENSE`).
- Contenu (`contenu/`, `images/`) : CC BY-SA 4.0 (`LICENCE-CONTENU.md`).

© 2026 Mickael Le Van
