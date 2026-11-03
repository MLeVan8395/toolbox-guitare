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

Sept onglets, chacun avec son sous-menu (les jeux au métronome sont marqués d'une note) :

| Onglet | Contenu |
|---|---|
| **Présentation** | Le mode d'emploi de la boîte à outils |
| **Manche** | Toutes les notes (de 0 à 12) ; les mains ; cycle des quartes sur une corde, avec le cercle des quartes affiché |
| **Lecture** | **Lecture de notes** (partition générée au hasard, en position ou le long d'une corde, dans une tonalité ou avec altérations, valeurs rythmiques réglables (des rondes aux doubles croches, en cellules répétitives façon funk), nombre d'attaques par mesure de 1 à 8 ou variable, intervalle maximal, articulations, sens du médiator) ; **lecture de grille** (accords et notation rythmique, mêmes réglages, accompagnement pop, funk, reggae ou swing) |
| **Gammes** | Premières gammes (avec les doigts), modes et gammes dérivés (dont la gamme chromatique), pentatoniques en diagonale sur 3 octaves ; en position, sur une octave (fondamentale sur corde 6, 5, 4 ou 3) ou sur la corde de son choix ; partition sous chaque gamme (avec armure pour la majeure et la mineure naturelle, altérations accidentelles pour les modes) ; à jouer au métronome directement sous le schéma, en noires, croches, triolets ou doubles croches |
| **Accords** | Accords ouverts, power chords et octaves, triades majeures et mineures (les quatre états sur un même schéma : fondamentale, 1er et 2e renversements, fondamentale à l'octave), jazz shells, positions transposables, renversements sur les cordes 1 à 4, accords enrichis ; enchaînements d'accords (cycle des quartes ou hasard, choix de la position, montée des renversements pour les triades) ; générateur d'accords pour jouer ou improviser, jusqu'aux accords enrichis. Accompagnement pop, funk, reggae ou swing au choix |
| **Arpèges** | Un sous-menu par accord (Maj7, 7, m7, m7♭5, dim7) : sur une octave (fondamentale sur corde 6, 5, 4 ou 3), sur deux octaves, et sur trois octaves en diagonale (7-1 puis 3-5) ; à jouer au métronome sous le schéma, le nom de l'accord affiché en gros |
| **Accordeur** | Accordeur chromatique au micro (La de référence réglable de 430 à 445 Hz), et les six cordes à vide à écouter |

Tous les schémas se placent dans la tonalité choisie, avec les intervalles ou les noms des notes. Dans les jeux, la note ou l'accord à jouer s'affiche en gros, et le suivant est annoncé une mesure à l'avance. Tempo lent, moyen ou rapide, réglable de 5 en 5 ; croches droites ou swing, et clic sur 2 et 4 en option.

Un bouton **Droitier / Gaucher** retourne tous les manches.

## Principes

- **Aucune donnée collectée.** Pas de compte, pas de publicité ; les réglages restent dans le navigateur.
- **Notation française** : notes seules en Do, Ré, Mi… ; accords et tonalités en lettres (C, Am7, « en G ») ; intervalles notés ♭2, 2, ♭3, 3…
- **Contenu séparé du code** : tous les schémas sont dans `contenu/formes.js`, lisibles et modifiables sans toucher à l'appli (voir `CONTRIBUER.md`).

## Crédits

- Glyphes musicaux de la partition (clé de sol, altérations) : tracés de la police GNU FreeFont (FreeSerif), utilisés selon son exception de police.

## Crédits des sons

- Basse électrique (`sons/basse`) : échantillons de [Karoryfer Samples](https://www.karoryfer.com/karoryfer-samples), mis en forme par Nicholaus Brosowsky ([tonejs-instruments](https://github.com/nbrosowsky/tonejs-instruments)), licence [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/deed.fr). Fichiers raccourcis et convertis en mono.
- Batterie (`sons/batterie`) : Virtuosity Drums, domaine public ([CC0](https://creativecommons.org/publicdomain/zero/1.0/deed.fr)).
- Contrebasse en pizzicato (`sons/contrebasse`) : [VSCO 2 Community Edition](https://github.com/sgossner/VSCO-2-CE) de Versilian Studios, domaine public (CC0). Fichiers raccourcis, normalisés et convertis en mono.
- Les notes et accords, le métronome, le pad et l'orgue sont des sons de synthèse fabriqués par l'appli (un son doux, qui sert de repère de hauteur sans imiter la guitare).

## Licences

- Code (`index.html`, `sw.js`) : licence MIT (`LICENSE`).
- Contenu (`contenu/`, `images/`) : CC BY-SA 4.0 (`LICENCE-CONTENU.md`).

© 2026 Mickael Le Van
