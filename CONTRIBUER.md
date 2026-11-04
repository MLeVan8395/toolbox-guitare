# Contribuer à la Boîte à outils guitare

Pas besoin d'être développeur : tous les schémas sont dans un seul fichier, `contenu/formes.js`.

## Écrire un schéma

Un schéma est une liste de notes `[corde, case, intervalle]` :

- **corde** : 1 = Mi aigu, 2 = Si, 3 = Sol, 4 = Ré, 5 = La, 6 = Mi grave ;
- **case** : décalage par rapport à la tonique « 1 » la plus grave du schéma (0 = même case, −1 = une case vers le sillet, 2 = deux cases vers le corps) ;
- **intervalle** : `1`, `♭2`, `2`, `♭3`, `3`, `4`, `♯4`, `♭5`, `5`, `♯5`, `♭6`, `6`, `𝄫7`, `♭7`, `7`, et pour les extensions `9`, `♭9`, `♯9`, `♯11`, `13`, `♭13`.

Exemple, l'accord shell 7 avec la fondamentale sur la corde de Mi grave :

```js
{"n":"7 (fondamentale corde 6)","notes":[[6,0,"1"],[4,0,"♭7"],[3,1,"3"]],"x":[1,2,5],"groupe":"Fondamentale sur la corde de Mi","acc":"7"}
```

Champs facultatifs :
- `x` : cordes non jouées ;
- `groupe` : sous-titre dans la liste ;
- `acc` : nom de l'accord sans sa fondamentale (`"m7"` donne Cm7, Dm7…) ;
- `fixe: true` : accord ouvert, les cases sont les vraies cases (0 = corde à vide) ;
- `doigts` : case de la tonique dans un schéma de 4 cases, pour afficher les doigts.

L'appli vérifie elle-même le placement : elle calcule les noms des notes à partir de la tonalité choisie.

## Règles de notation

- Une note seule s'écrit en solfège : Do, Ré, Mi…
- Accords et tonalités en lettres : C, Am7, « en G ».
- Intervalles avec les vrais signes ♭ et ♯.

## Proposer une modification

1. Sur GitHub, ouvre `contenu/formes.js` et clique sur le crayon (« Edit this file »).
2. Fais ta modification, puis « Propose changes ».
3. Ou ouvre simplement une *issue* pour signaler une erreur ou proposer un schéma.

## Droits

Le projet est sous « tous droits réservés » (voir `LICENSE`). En proposant une contribution, tu acceptes que Mickael Le Van l’intègre, la modifie et l’exploite dans ses applications, y compris de façon commerciale.
