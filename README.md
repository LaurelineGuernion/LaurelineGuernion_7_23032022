# Groupomania
## Réseaux social d'entreprise
Dans votre nouveau dossier Groupomania
`git init`
`git clone https://github.com/LaurelineGuernion/LaurelineGuernion_7_23032022.git`

### Backend
Technologies utilisées :
- Express
- Node JS
- Mysql
- Sequelize

#### Dans le dossier groupomania/backend
Installer express 
`npm install`

Puis connexion au serveur
`nodemon`

### Frontend
Technologies utilisées :
- Vue 3 JS
- Bootstrap
- Axios
- Sass

#### Dans le dossier groupomania/frontend
Installer express 
`npm install`

Puis connexion au serveur 
`npm run serve`

### Notes importantes pour l'installation
* Installer au préalable MYSQL

* Importer le fichier groupomania_developpement.sql du lien Github dans votre nouvelle base de données manuellement.
* Manipulation dans le terminal :
    - Avant tout, créer dans MYSQL la base de données : `CREATE DATABASE nombasededonnees ;`
    - Faire `Exit` pour sortir de MYSQL.
    - Dans le terminal : `mysql - u utilisateur -p nombasededonnees < groupomania_developpement.sql ;`

* Dans backend/config, personnaliser vos informations dans le fichier .env-initial, ajouter après "=" :
    - Dans TOKEN_SECRET, EMAIL_KEY_CRYPTO= ses mots de passe composés de chiffres, alphabet majuscule/minuscule,
    - Dans DB_USERNAME= son nom d'utilisateur de la base de données,
    - Dans DB_PASSWORD=  son mot de passe de la base de données,
    - DEV_DB_NAME= le nom de la base de données,
* Par la suite, renommer le fichier .env-initial en .env en supprimant "-initial".

#### Il est probable d'adapter Node Js pour que l'application fonctionne
- Installation avec Brew, dans le terminal :
`brew install node`

- Puis suivre les instructions dans le terminal :
```
node --version
brew search node
brew unlink node
brew install node@14
brew link node@14
node --version
```

### Serveurs
* Accès serveur backend `http://localhost:3000/`
* Accès serveur frontend `http://localhost:8080/`
