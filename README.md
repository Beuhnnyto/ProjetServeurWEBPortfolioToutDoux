# Projet Serveur WEB
## by Adam Liam et Aris

### [insert instructions here]


## Installation

### Docker

#### Prérequis
ajouter les lignes suivantes dans le fichier hosts de votre machine

```bash
127.0.0.1 portfolio.exemple.localhost
127.0.0.1 todo.exemple.localhost
```



# Construire l'image Docker
docker build -t projet-serveur-web .

# Lancez le conteneur Docker
docker run -p 80:80 -p 443:443 projet-serveur-web