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

Six onglets, chacun avec son sous-menu (les jeux au métronome sont marqués d'une note) :

| Onglet | Contenu |
|---|---|
| **Présentation** | Le mode d'emploi de la boîte à outils |
| **Manche** | Toutes les notes (de 0 à 12) et comment elles se placent (1 ton = 2 cases, 1 demi-ton = 1 case entre Mi-Fa et Si-Do) ; les mains ; cycle des quartes sur une corde, avec le cercle et la partition |
| **Gammes** | Trois niveaux. **Niveau 1** : gamme majeure, mineure naturelle, pentatoniques majeure et mineure, gamme chromatique. **Niveau 2** : modes de la gamme majeure, pentatoniques sur tout le manche (les 5 positions, enchaînement de positions, diagonales sur 3 octaves). **Niveau 3** : modes du mineur mélodique et du mineur harmonique, gammes symétriques. En position, sur une octave ou sur une corde, avec la partition (armure pour la majeure et la mineure naturelle). À jouer au métronome sous le schéma (noires à doubles croches), avec motifs : intervalles simples ou alternés, triades, gammes brisées par 3 et par 4 |
| **Accords** | Trois niveaux. **Niveau 1** : accords ouverts (majeurs, mineurs, 7, chacun sur une page), power chords et octaves, positions transposables majeures et mineures, jazz shells, triades majeures et mineures sur les cordes 1 à 4. **Niveau 2** : triades sur les cordes 3 à 6, triades diminuées, positions transposables à 4 sons, renversements sur les cordes 1 à 4, accords enrichis. **Niveau 3** : triades majeures, mineures et diminuées en position ouverte (un petit schéma par état), drop 2, drop 3 et drop 2+4 (Maj7, 7, m7, m7♭5, dim7, avec leurs renversements), triades avec basse étrangère (construction, notes, sonorité, mode, emploi). À chaque niveau : enchaînements et générateur d'accords avec les accords du niveau, accompagnement pop, funk, reggae ou swing |
| **Arpèges** | Trois niveaux. **Niveau 1** : majeur, mineur et 7 sur une octave (fondamentale sur les cordes 6 et 5). **Niveau 2** : majeur et mineur en position complète, Maj7, 7, m7, m7♭5, dim7 (une octave depuis les cordes 6, 5, 4, 3, deux octaves, position complète). **Niveau 3** : arpèges sur 3 octaves en diagonale, m(Maj7), Maj7♯5, 7♯5. À jouer au métronome avec motifs (sauts, brisés par 3 et par 4), le nom de l'accord affiché en gros |
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

- **Tout le projet** (code, textes, exercices, schémas, partitions) : © 2026 Mickael Le Van, **tous droits réservés** (voir [`LICENSE`](LICENSE)). Reproduction, diffusion et usage commercial interdits sans autorisation écrite de l’auteur. Les éléments de tiers cités restent sous leur propre licence.

© 2026 Mickael Le Van
