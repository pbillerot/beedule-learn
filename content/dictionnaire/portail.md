
---
title: "Le portail"
weight: 10
---

```yaml
title: "Beedule"
info: "Framework de développement WEB en Yaml"
icon-file: "/bee/static/img/beedule.png"
# Paramètres globaux
parameters:
  __amount_min: 1200 # mise minimum
  __cost: 0.0047 # coût en % d'une transaction
  __optimum: 0.035 # seuil minimum à atteindre en % pour vendre
  __prix_repas: 25.00

# Liste des applications gérées
applications:
  admin:
    title: "Gestion des Utilisateurs"
    image: "/bee/static/img/tools.png"
    group: admin
    tables-views:
    - table-name: users
      view-name: vall
    - table-name: groups
      view-name: vall
  repas:
    title: "Repas Éleveurs"
    group: repas
    image: "/bee/data/repas/repas.jpg"
    tables-views: 
    - table-name: repas
      view-name: vall
    - table-name: tables
      view-name: vall
    - table-name: places
      view-name: vall
    - table-name: groupes
      view-name: vall
```
