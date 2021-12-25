---
title: "Les rubriques"
weight: 30
---

```yaml
elements:
  user_name:
    type: text
    label-long: "Nom ou pseudo"
    label-short: "Nom ou pseudo"
    pattern: "[a-zA-Z0-9]+"
    required: true
  user_password:
    type: password
    label-long: "Mot de passe"
    pattern: "[a-zA-Z0-9_-]+"
    required: true
    min-length: 3
  user_email:
    type: email
    label-long: "Email"
    label-short: "Email"
    required: true
  user_is_admin:
    type: checkbox
    label-long: "Administrateur"
    label-short: "Administrateur"
    col-align: center
  user_groupes:
    type: tag
    label-long: "Groupes"
    label-short: "Groupes"
    col-align: center
    items-sql: "select group_id as key, group_id as label from groups order by group_id"
  _pwd_change:
    type: button
    label-long: "Changer le mot de passe..."
    params:
      url: "/bee/edit/admin/users/vall/fpwd/{user_name}"
  _SECTION_MDP:
    type: section
    label-long: "Sécurité"
    params:
      form: fmdp
      icon-name: lock
  _new_password:
    type: password
    label-long: "Nouveau mot de passe"
    pattern: "[a-zA-Z0-9_-]+"
    required: true
    min-length: 3
  _confirm_password:
    type: password
    label-long: "Confirmer le mot de passe"
    pattern: "[a-zA-Z0-9_-]+"
    required: true
    min-length: 3
```