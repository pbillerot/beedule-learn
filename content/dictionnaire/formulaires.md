---
title: "Les formulaires"
weight: 50
---
```go
type Form struct {
	Actions     []Action           // Action appel d'un formulaire ou exécution d'une requête SQL
	Title       string             // Titre du formulaire
	Group       string             // groupe qui peut accéder au formulaire
	HideSubmit  bool               `yaml:"hide-submit"` // pour caher le bouton valider
	IconName    string             `yaml:"icon-name"`   // nom de l'icone
	Elements    map[string]Element // Eléments à récupérer de la base de données
	CheckSqlite []string           `yaml:"check-sqlite"` // retourne le libellé des erreurs lors du contrôle des rubriques
	PostSQL     []string           `yaml:"post-sql"`     // Ordre exécutée après la validation si contrôle OK
}
type Action struct {
	Group       string   // Groupe autorisée à lancer l'action
	Label       string   // label de l'action
	Checkbox    Setters  `yaml:"checkbox"`     // checkbox pour mettre à jour la donnée
	URL         string   `yaml:"url"`          // URL d'appel du formulaire
	SQL         []string `yaml:"sql"`          // les ordres SQL seront exécutées avant l'appel du formulaire
	WithConfirm bool     `yaml:"with-confirm"` // demande de  confirmation
	Hide        bool     // Action non visible
	HideSqlite  string   `yaml:"hide-sqlite"` // requête pour cachée l'action
	Plugin      string   // Fonction Système à appeler nomFonction(p1, p2, ...)
}
```

```yaml
forms:
  fadd:
    title: "Fiche Compte"
    groupe: admin
    elements:
      user_name:
        order: 10
      user_email:
        order: 20
  fedit:
    title: "Fiche compte"
    group: admin
    elements:
      user_name:
        order: 10
      user_email:
        order: 20
  fview:
    title: "Fiche Compte"
    group: admin
    elements:
      user_name:
        order: 10
      user_email:
        order: 20
      _SECTION_MDP:
        order: 30
      user_is_admin:
        order: 50
      user_groupes:
        order: 60
      _pwd_change:
        order: 70
  fprofil:
    title: "Mon profil"
    group: owner
    elements:
      user_name:
        order: 10
      user_email:
        order: 20
      _SECTION_MDP:
        order: 30
      user_is_admin:
        order: 50
      user_groupes:
        order: 60
      _pwd_change:
        order: 70
  fedit_owner:
    title: "Fiche compte"
    group: owner
    elements:
      user_name:
        order: 10
        read-only: true
      user_email:
        order: 20
  fpwd:
    title: "Changer le mot de passe"
    group: owner
    elements:
      user_name:
        order: 10
        read-only: true
      _new_password:
        order: 20
      _confirm_password:
        order: 30
        # protected: true
    check-sqlite:
      - "select 'les mots de passe ne sont pas identiques' where '{_new_password}' <> '{_confirm_password}' "
    post-sql:
      - "update users set user_password = '{_new_password}' where user_name = '{user_name}'"
  fmdp:
    title: "Sécurité"
    group: admin
    elements:
      user_name:
        order: 10
        read-only: true
      user_is_admin:
        order: 30
      user_groupes:
        order: 40
```