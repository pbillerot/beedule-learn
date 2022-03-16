---
title: "Les vues"
weight: 40
---

```go
type View struct {
	Actions        []Action           // Action sur la vue (ordres sql)
	Card           CardList           // Masque html d'une ligne dans la vue
	ClassSqlite    string             `yaml:"class-sqlite"` // couleur theme de la ligne
	Deletable      bool               // Suppression fiche autorisée
	Elements       map[string]Element // Eléments à récupérer de la base de données
	FooterSQL      string             `yaml:"footer-sql"` // requête sur la table courante
	FormAdd        string             `yaml:"form-add"`   // Formulaire d'ajout
	FormEdit       string             `yaml:"form-edit"`  // Formulaire d'édition
	FormView       string             `yaml:"form-view"`  // Masque de visualisation d'un enregistrement
	Group          string             // groupe qui peut accéder à la vue
	Hide           bool               // Vue cachée dans le menu
	HideOnMobile   bool               `yaml:"hide-on-mobile"` // Vue cachée dur mobile
	IconName       string             `yaml:"icon-name"`      // nom de l'icone
	Limit          int                // pour limiter le nbre de ligne dans la vue
	OrderBy        string             `yaml:"order-by"`       // Tri des données SQL
	PostSQL        []string           `yaml:"post-sql"`       // Ordre exécutée après la suppression si OK
	PreUpdateSQL   []string           `yaml:"pre-update-sql"` // requêtes SQL avant l'affichage
	Search         string             // Chaîne de recherche dans toutes les colonnes de la vue
	Title          string             // Titre de la vue
	Type           string             // type de vue : card(default),image,table
	Where          string             // Condition SQL
	Width          string             // largeur s m l xl xxl max
	WithLineNumber bool               `yaml:"with-line-number"` // list.table n° de ligne en 1ère colonne
}
type CardList struct {
	Header      []string
	Meta        []string
	Description []string
	Extra       []string
	Footer      []string
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