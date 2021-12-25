
---
title: "Les vues"
weight: 40
---

```yaml
views:
  vall:
    form-view: fview
    form-add: fadd
    form-edit: fedit
    group: admin
    deletable: true
    title: "Comptes"
    icon-name: user
    order-by: user_name
    mask:
      header:
        - user_name
      meta:
        - user_email
      description:
      extra:
        - user_is_admin
        - user_groupes
    elements:
      user_name:
      user_email:
        hide-on-mobile: true
      user_is_admin:
        hide-on-mobile: true
      user_groupes:

  vprofil:
    form-view: fprofil
    form-edit: fedit_owner
    group: owner
    title: "Mon profil"
    icon-name: user
    order-by: user_name
    mask:
      header:
        - user_name
      meta:
        - user_email
      description:
      extra:
        - user_is_admin
        - user_groupes
    elements:
      user_name:
      user_email:
      user_is_admin:
      user_groupes:
```