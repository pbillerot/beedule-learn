# Documentation sur BEEDULE

## Installation

### Installer Hugo (sous debian)
[Doc sur Hugo](https://gohugo.io/)
```bash
sudo apt install hugo
```

### Création du site

```bash
cd dev
hugo new site beedule-learn
cd beedule-learn
```

### Installation du thème
[Doc sur le thème RELEARN](https://mcshelby.github.io/hugo-theme-relearn/)

```bash
cd beedule-learn
git init
git submodule add https://github.com/McShelby/hugo-theme-relearn.git themes/hugo-theme-relearn
```

### Configuration

Fichiers personnalisés :
- `config.toml` renommé en `config.yaml`

```
.
├── archetypes
│   └── default.md
├── content
│   ├── ...
├── data
├── layouts
│   └── partials
│       ├── favicon.html
│       ├── footer.html
│       └── logo.html
├── resources
│   └── _gen
│       ├── assets
│       └── images
├── static
│   ├── css
│   │   └── beedule.css
│   └── images
│       └── logo.svg
├── themes
├── config.yaml
└── readme.md
```
