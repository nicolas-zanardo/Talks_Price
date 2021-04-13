# TP DIW59 - DEV PHP - 13/04/1984

## EXERCICE 1

### Enoncé

Demander que l'utilisateur saisisse un montant HT
Demander à l'utilisateur s'il veut une remise
Si l'utilisateur saisit 'oui' ou 'yes' :
-> Demander le taux de remise désiré en pourcentage
-> Calculer et Afficher :
     Pour un montant HT de XX.XX € (après remise), il y a XX.XX € de TVA.
     Le montant TTC est donc de XX.XX €
     Une remise de XX.XX% a été appliqué sur le montant HT.
Si l'utilisateur saisit autre chose :
-> Calculer et Afficher :
     Pour un montant HT de XX.XX €, il y a XX € de TVA.
     Le montant TTC est donc de XX.XX €.
     Aucune remise n'a été appliqué.
Aide
Attention prompt() retourne un string, pour le changer en nombre à virgule voir parseFloat()
https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/parseFloat
Bonus
-> Afficher 2 chiffres après la virgule ( toFixed() )

## Exercice réalisé avec Webpack et TypeScript

Demo: https://stackblitz.com/edit/typescript-dfyanl

GitHub: https://github.com/nicolas-zanardo/Talks_Price

``` bash
npm install
```

To use webpack local server on port 4000
``` bash
npm start
```

To build app
``` bash
npm run build
```