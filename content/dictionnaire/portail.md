---
title: "Le portail"
weight: 10
---

## Le fichier portail.yaml

`/voldev/data/beedule/portail.yaml`

```yaml
# le titre du site
title: "Beedule"
info: "Framework de développement WEB en Yaml"
# image de type png ou svg
# qui apparaîtra dans l'onglet du navigateur et dans le menu du portail 
# "/bee/static/img" : préfixe des fichiers internes à la webapp beedule
icon-file: "/bee/static/img/beedule.png"

# Liste des applications accessibles du portail
# liste des répertoires ou l'on trouvera les fichiers application.yaml et <nom_table>.yaml
dico-dir:
- "./beedic/admin/config"
- "/voldev/data/beedule/jecompte/config"
- "/voldev/data/beedule/pluvio/config"
- "./beedic/chinook/config"
```
## La page portail
![](/images/site.png)
