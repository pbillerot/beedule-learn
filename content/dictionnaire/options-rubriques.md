---
title: "Options des rubriques"
weight: 35
---
## args
```yaml
# Pour passer des arguments au formulaire d'ajout
args: "valeur"
```
## class-sqlite
```yaml
# Class CSS calculé en SQL utilisée dans les vues
class-sqlite: "select case when {ptf_gain} > 0 then 'green' when {ptf_gain} < 0 then 'red' end"
```
## col-align
```yaml
# Pour aligné le contenu dans la cellule left | center | right
col-align: "left"
```
## col-nowrap
```yaml
# Pour éviter la césure du contenu dans la cellule d'une vue
col-nowrap: true
```
## compute-sqlite
```yaml
# Pour calculer la valeur de la rubrique dans un formulaire en édition
# La rubrique sera protégée
compute-sqlite: "select '{orders_buy}' * '{orders_quantity}' + '{orders_buy}' * '{orders_quantity}' * '{__cost}'"
```
## dataset
```yaml
# Pour passer des paramètres nommés à un plugin javascript
dataset: 
  classjquery: "select 'bee-chart-quotes'"
  title: "select 'Cours deptf_id}'"
  quotes: "select open as matin, close as soir from quotes where id = '{ptf_id}' order by date"
  ...
```
## default
```yaml
# Valeur par défaut
default: "buy"
```
## default-sqlite
```yaml
# Valeur par défaut calculée en SQL
ite: "select datetime('now', 'localtime')"
```
## format-sqlite
```yaml
# Mise en forme d'une valeur
format-sqlite: "select printf('%3.2f Mo', {Bytes}.00/1000000, 'unixepoch')"
...
format-sqlite: "select strftime('%M:%S', {Milliseconds}/1000, 'unixepoch')"
```
## grid
```yaml
# Class pour donner la largeur du champ dans le formulaire "four wide field" 16 colonnes possibles
grid: "height wide field" # 2 colonnes de champs par ligne
```
## group
```yaml
# Groupe autorisé à accéder à cette rubrique - Si "owner" c'est l'enregistreement qui ne sera pas visible
group: "admin"
```
## help
```yaml
# Texte d'aide sur la rubrique
help: "Durée en millisecondes"
```
## hide
```yaml
# Pour cacher le champ ou la colonne
hide: true
```
## hide-on-mobile
```yaml
# La colonne sera cachée sur les mobiles (largeur écran <768px
hide-on-mobile: true
```
## hide-sqlite
```yaml
# Pour cacher le champ ou la colonne via une requête SQL
hide-sqlite: "select 'ok' where ..."
```
## items
```yaml
# Liste de clé/valeur pour un champ de type "list" ou "radio"
items:
  - key: "cheque"
    label: "Chèque"
  - key: "espece"
    label: "Espèce"
  - key: "virement"
    label: "Virement"
```
## items-sql
```yaml
# Liste de clé/valeur pour un champ de type "list" ou "radio" via un requête SQL
items-sql: "select group_id as key, group_id as label from groups order by group_id"
```
## jointure
```yaml
# Liste de clé/valeur pour un champ de type "list" ou "radio" via un requête SQL
jointure:
  join: ""
  column: "date || '-' || id"
...
jointure:
  join: ""
  column: "((adjclose-close1)/close1)*100"
...
jointure:
  join: "left outer join ptf on ptf_id = id"
  column: "ptf.ptf_top"
...
jointure:
  # join: on ne renseignera pas le join si la jointure a déjà été faite
  column: "ptf.ptf_rem"
```
## label-long
```yaml
# Label du champ dans un formulaire
label-long: "Montant net"
```
## label-short
```yaml
# Label de la colonne dans une vue
label-short: "Net"
```
## max
```yaml
# Valeur maximum du champ numérique
max: 1199.99
```
## max-length
```yaml
# Longueur maximum du texte saisie dans le champ
max-length: 9
```
## min
```yaml
# Valeur minimum du champ numérique
min: 2
```
## min-length
```yaml
# Longueur minimum du texte saisie dans le champ
min-length: 2
```
## order
```yaml
# N° d'ordre d'affichage du champ ou colonne dans un formulaire ou vue
order: 110
```
## params
```yaml
# Ensemble de paramètres nommés complémentaires en fonction du type de rubrique
_action_sell:
  type: "button"
  group: "trader"
  label-long: "Vendre cette valeur..."
  params:
    url: "/bee/edit/picsou/orders/vachat/feditsell/{orders_id}?orders_order=sell&orders_sell={orders_quote}"
...
_image_day:
  type: image
  label-long: "Graph du jour"
  label-short: "Graph J"
  width: max
  params:
    src: "/bee/data/picsou/png/day/{orders_ptf_id}.png"
    url: "/bee/data/picsou/png/day/{orders_ptf_id}.png"
    icon-name: "emblem-photos"
```
## pattern
https://www.w3schools.com/tags/att_input_pattern.asp
```yaml
# Expression régulière pour contrôler la saisie dans un champ
user_name:
  type: text
  label-long: "Nom ou pseudo"
  label-short: "Nom ou pseudo"
  pattern: "[a-zA-Z0-9]+"
  place-holder: "Pseudo constitué avec seulement des lettres et chiffres"
  required: true
user_password:
  type: password
  label-long: "Mot de passe"
  pattern: "[a-zA-Z0-9_-]+"
  required: true
  min-length: 3
```
## place-holder
```yaml
# Texte indicatif qui s'efface dès que l'on active le champ du formulaire
place-holder: "Pseudo constitué avec seulement des lettres et chiffres"
```
## post-action
```yaml
# Requêtes sql exécutées après la mise à jour du formulaire (si sans erreur préalable)
post-action:
  - "update users set user_password = '{_new_password}' where user_name = '{user_name}'"
```
## protected
```yaml
# Champ généralement calculé
# Le champ ne pourra pas être mis à jour directement par l'utilisateur
protected: true
```
## read-only
```yaml
# Champ en lecture seule.
read-only: true
```
## required
```yaml
# Champ obligatoire en saisie (si bien sûr le champ est en mise jour)
required: true
```
## type
[Pour en savoir plus voir la page "type de rubriques"](/dictionnaire/types-rubrique/)
```yaml
# Type de rubrique
type: action amount button checkbox counter date datetime duration email float image list markdown month number pdf percent plugin section tag tel text time radio url week
```
## width
```yaml
# Largeur du champ dans un formulaire : s m l xl max 
# 150px 360px 450px 600px 100%
width: s m l xl max
```