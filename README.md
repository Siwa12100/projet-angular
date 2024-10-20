# Projet Angular 3A | Antoine Pinagot - Jean Marcillac

## Lancement du projet

Plusieurs scripts sont à votre disposition pour manipuler le projet. Il sera simplement nécessaire de posséder docker d'installé sur le système. 

Avant tout chose, entrez : 

```bash
chmod +x *.sh
```
De manière à pouvoir exécuter les différents scripts.

### Lancer le projet

Pour lancer le projet, la commande sera : 

```bash 
./lancement-projet.sh
``` 

Le script buildera l'image docker et la lancera. Le port par défaut est le `20124`. 

### Arrêter le projet

Pour arrêter le projet, il suffit de lancer : 

```bash
./arret.sh
```

Le conteneur sera à la fois stoppé et supprimé.

### Supprimer l'image docker du projet

Pour supprimer rapidement l'image docker associée au projet, lancez : 

```bash
./supprimer-image.sh
```
