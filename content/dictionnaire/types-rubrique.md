---
title: "Types de rubrique"
weight: 32
---
{{% button href="#action" %}}action{{% /button %}}
{{% button href="#amount" %}}amount{{% /button %}}
{{% button href="#button" %}}button{{% /button %}}
{{% button href="#checkbox" %}}checkbox{{% /button %}}
{{% button href="#counter" %}}counter{{% /button %}}
{{% button href="#date" %}}date{{% /button %}}
{{% button href="#datetime" %}}datetime{{% /button %}}
{{% button href="#duration" %}}duration{{% /button %}}
{{% button href="#email" %}}email{{% /button %}}
{{% button href="#float" %}}float{{% /button %}}
{{% button href="#image" %}}image{{% /button %}}
{{% button href="#list" %}}list{{% /button %}}
{{% button href="#markdown" %}}markdown{{% /button %}}
{{% button href="#month" %}}month{{% /button %}}
{{% button href="#number" %}}number{{% /button %}}
{{% button href="#pdf" %}}pdf{{% /button %}}
{{% button href="#percent" %}}percent{{% /button %}}
{{% button href="#plugin" %}}plugin{{% /button %}}
{{% button href="#section" %}}section{{% /button %}}
{{% button href="#tag" %}}tag{{% /button %}}
{{% button href="#tel" %}}tel{{% /button %}}
{{% button href="#text" %}}text{{% /button %}}
{{% button href="#time" %}}time{{% /button %}}
{{% button href="#radio" %}}radio{{% /button %}}
{{% button href="#url" %}}url{{% /button %}}
{{% button href="#week" %}}week{{% /button %}}

## action
- Affiche un bouton dans le formulaire
- L'activation va démarrer les requêtes SQL définies dans le parametre `actions.sql`
```yaml
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
## button
- Affiche un bouton dans le formulaire
- L'activation va ouvrir l'url fournit en paramètre
```yaml
_action_sell:
  type: "button"
  Group: "trader"
  label-long: "Vendre cette valeur..."
  params:
    url: "/bee/edit/picsou/orders/vachat/feditsell/{orders_id}?orders_order=sell&orders_sell={orders_quote}"
```
## checkbox
- Case à cocher
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
## datetime 
## duration
## email
## float
## image
## list
## markdown
## month
## number
## pdf
## percent
## plugin
## section
## tag
## tel
## text
## time
## radio
## url
## week
