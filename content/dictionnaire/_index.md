---
title: "Le dictionnaire"
pre: "<b>2. </b>"
chapter: false
weight: 20
---

La programmation de l'application se fait à travers un dictionnaire.

Le dictionnaire est organisé sous la forme de 3 type de fichiers **yaml**.
- **portail.yaml** pour configurer la présentation du portail
- puis à raison d'un répertoire par application avec
  - **application.yaml** le fichier pour définir le logo et les menus
  - un **table.yaml** par table de l'application pour déclarer la connexion à la base de données, les rubriques, vues et formulaires
  - des fichiers divers : images scripts sql javascript
  
## portail.yaml

`/voldev/data/beedule/portail.yaml`

```yaml
title: "Beedule"
info: "Framework de développement WEB en Yaml"
icon-file: "/bee/static/img/beedule.png"

# Liste des applications accessibles du portail
dico-dir:
- "./beedic/admin/config"
- "/voldev/data/beedule/jecompte/config"
- "/voldev/data/beedule/pluvio/config"
- "./beedic/chinook/config"
```

## application.yaml

`/voldev/data/beedule/jecompte/config/application.yaml`

```yaml
# application JECOMPTE
app-id: jecompte
title: "Je compte pour toi"
group: billerot
image: "/bee/data/jecompte/calc.png"
shareable: true
# Liste des vues exposées dans le menu de gauche et dans le pied de page
menu: 
- table-id: jec_jeux
  view-id: vjeux
  in-footer: true
- table-id: jec_jeux
  view-id: vgraph
  in-footer: true
- table-id: jec_joueurs
  view-id: vjoueurs
  in-footer: true  
```

## table.yaml

`/voldev/data/beedule/jecompte/config/jec_joueurs.yaml`

```yaml
# Table jecompte.joueurs.sqlite
setting:
  alias-db: jecompte
  key: joueur
  col-display: joueur
  icon-name: "user"

elements:
  joueur:
    type: text
    label-long: "Joueur"
    label-short: "Joueur"
    order: 30
  cumul:
    type: number
    label-long: "Points"
    label-short: "Points"
    default-sqlite: "select 0"
    order: 40
    class-sqlite: "select case when {cumul} < 0 then 'negative' else '' end"
  actif:
    type: checkbox
    label-long: "Actif"
    label-short: "Actif"
    col-align: center
    order: 50

views:
  vjoueurs:
    form-add: fedit
    form-edit: fedit
    form-view: fedit
    deletable: true
    type: table
    title: "Joueurs"
    icon-name: user
    class-sqlite: "select case when '{actif}' = '1' then 'violet' else '' end"
    order-by: "actif desc"
    elements:
      joueur:
      cumul:
      actif:
    actions:
    - label: "Nouveau jeu (raz de toutes les parties)..."
      sql: 
      - "delete from jec_jeux"
      - "update jec_joueurs set cumul = 0"
      - "insert into jec_jeux (partie, joueur, points) select jj.partie, j.joueur, 0 from jec_joueurs as j left outer join (select coalesce(max(partie)+1,1) as partie from jec_jeux) as jj on j.actif = 1 where j.actif = 1"
      with-confirm: true
      
forms:
  fedit:
    title: "Joueurs"
    groupe: admin
    elements:
      joueur:
      actif:

```
