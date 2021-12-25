---
title: "Les tables"
weight: 20
---

```yaml
# la base de données
setting:
  alias-db: admin
  key: user_name
  col-display: user_name
  icon-name: "user"

# les rubriques
elements:
  user_name:
    type: text
    ...
  user_password:
    type: password
    ...

# les vues
views:
  vall:
    ...
  vprofil:
    ...

# les formulaires
forms:
  fadd:
    ...
  fedit:
    ...

```