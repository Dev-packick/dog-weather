Application météo pour savoir si le chien peut sortir:
Technologies : React + vite
Fonctionnalités:
- Affichage météo selon la température, condition, icône.(API Météo)
- Conseil pour la sortie du chien)
- Prévision sur trois jours


Voici la liste chronologique de toutes les commandes que j'ai utilisées dans mon terminal pour accomplir cet exercice :

    **1.	Notes Mauvaises pratiques(Profil)**
          •	Récupération du projet et préparation d'analyse du code de Khaled.*
          •	Récupérer le projet depuis GitHub
          git clone https://github.com/BenieDIA/ProjetRs.git
          •	Entrer dans le dossier du projet
          cd ProjetRs
          •	Ouvrir le projet dans VS Code pour lire Profil.jsx
          code .
    
    **2.	Phase de Correction (Forums.jsx)**

    Après avoir listé les erreurs de Profil.jsx dans l'Issue #4 sur GitHub, je suis passé à la correction du code de Benie.
          •	Vérifier sur quelle branche je me trouves
          git branch
          •	Revenir sur le main pour repartir de zéro (si besoin)
          git checkout main
          git pull origin main
          •	Créer une branche spécifique pour les corrections de Forums
          git checkout -b corrections-forums-patrick
          (Après avoir modifié le code dans VS Code)
          •	Vérifier quels fichiers ont été modifiés
          git status
          •	Essayer d'ajouter le fichier (et voir l'erreur si je ne suis pas dans le bon dossier)
          git add Forums.jsx
          •	Utiliser la commande globale pour être sûr de tout prendre
          git add .
          •	Enregistrer tes modifications localement
          git commit -m "Correction et validation page Forums"
          •	Envoyer mon travail sur GitHub (en liant la branche)
          git push origin -u corrections-forums-patrick
    
