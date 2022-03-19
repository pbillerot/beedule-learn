---
title: "Types de rubrique"
weight: 32
---
## action
- Affiche un bouton dans le formulaire
- L'activation va démarrer les requêtes SQL définies dans le parametre `actions`
```yaml
elements:
  _refresh_buy:
    type: action
    label-long: "Mettre à jour avec le cours du jour"
    actions:
    - sql:
      - "update orders set orders_quote = (select close from quotes where id = orders_ptf_id and date = (select max(date) from quotes where id = orders_ptf_id))"
      - "update orders set orders_gain = orders_quote * orders_quantity - orders_buy * orders_quantity - orders_buy * orders_quantity * {__cost} - orders_quote * orders_quantity * {__cost}"
      - "update orders set orders_gainp = (orders_gain / (orders_buy * orders_quantity)) * 100"
```

## amount
- Gère les montants en €

![](/images/type-amount.png)

```yaml
elements:
  orders_quote:
    type: amount
    label-long: "Cours du jour"
    label-short: "Cours J"
    protected: true
  orders_buy:
    type: amount
    label-long: "Cours d'achat"
    label-short: "Achat à"
    required: true
    refresh: true
```

## button
- Affiche un bouton dans le formulaire
- L'activation va ouvrir l'url fournit en paramètre
```yaml
elements:
  _action_sell:
    type: "button"
    Group: "trader"
    label-long: "Vendre cette valeur..."
    params:
      url: "/bee/edit/picsou/orders/vachat/feditsell/{orders_id}?orders_order=sell&orders_sell={orders_quote}"
```

## card
- Rubrique de regroupement de rubriques sous la forme d'une carte dans la vue d'un dossier

![](/images/type-card.png)

```yaml
elements:
  _card_MDP:
    type: card
    label-long: "Sécurité"
    icon-name: lock
    params:
      form: fmdp

views:
  fview:
    title: "Fiche Compte"
    group: admin
    elements:
      user_name:
        order: 10
      user_email:
        order: 20
      _card_MDP:
        order: 30
      user_is_admin:
        order: 50
      user_groupes:
        order: 60
      _pwd_change:
        order: 70
```

## chart
- graphique
![](/images/type-chart.png)

```yaml
elements:
  _graph:
    order: 20
    type: chart
    width: xl
    dataset:
      chartid: "select 'chart-pluvio'"
      mm2021: "select cumul_mois from (select distinct pluvio.mois, cumul_mois from pluvio where annee = '2021')"
      mm2022: "select cumul_mois from (select distinct pluvio.mois, cumul_mois from pluvio where annee = '2022')"
```
- En savoir plus sur les [graphiques](/dictionnaire/chart/) 

## checkbox
- Case à cocher
![](/images/type-checkbox.png)

```yaml
elements:
  user_is_admin:
    type: checkbox
    label-long: "Administrateur"
    label-short: "Administrateur"
    col-align: center
```    
## counter
- Pour préciser que la rubrique (`repas_id` dans l'exemple) est un entier calculé par la base de données
- `read-only` par défaut
```sql
CREATE TABLE IF NOT EXISTS "repas" (
	"repas_id" INTEGER NOT NULL,
	"repas_date" TEXT,
    ...
	PRIMARY KEY("repas_id" AUTOINCREMENT)
);
```
## date
- date du calendrier

![](/images/type-date.png)

```yaml
elements:
 date:
    type: date
    label-long: "Date"
    label-short: "Date"
    default-sqlite: "select datetime('now', 'localtime')"
    order: 30
```    

## datetime 
- date + heure

![](/images/type-datetime.png)

```yaml
elements:
  orders_time:
    type: datetime
    label-long: "Jour Heure d'achat"
    label-short: "JH d'achat"
    default-sqlite: "select datetime('now', 'localtime')"
    width: m
```

## email
- email

![](/images/type-email.png)

```yaml
elements:
  user_email:
    type: email
    label-long: "Email"
    label-short: "Email"
    required: true
```

## float
- nombre avec virgule floattante

![](/images/type-float.png)

```yaml
elements:
  orders_buy:
    type: float
    label-long: "Cours d'achat"
    label-short: "Achat à"
    required: true
    refresh: true
 ```

## image
- affichage d'une image
- clic sur l'image pour la voir en grand

![](/images/type-image.png)

```yaml
views:
  vdashboard:
    type: dashboard
    title: "Tableau de bord"
    icon-name: dashboard
    elements:
      _card_image:
        order: 210
        type: card
        label-long: "section image" 
        icon-name: image
      _rub_image:
       type: image
       label-long: "Une image"
       label-short: "image"
       params: 
         src: "/bee/data/demo/demo.jpg" # chemin vers l'image
         url: "/bee/data/demo/demo.jpg" # l'url appelé via le clic sur l'image
         title: "Le title sur l'image"  # la légende sous l'image
       order: 220
```

## list
- choix d'un item dans une liste

![](/images/type-list.png)

```yaml
elements:
  orders_ptf_id:
    type: list
    label-long: "Valeur"
    label-short: "Valeur"
    items-sql: "SELECT ptf_id as 'key', ptf_name as 'label' From ptf order by ptf_name"
  orders_order:
    type: list
    label-long: "order"
    label-short: "order"
    col-align: center
    required: true
    items:
      - key: "buy"
        label: "Achat"
      - key: "sell"
        label: "Vente"    
```

## month
## number
## pdf
## percent
## plugin
## section
## tag
## text
## time
## radio
## url
## week
