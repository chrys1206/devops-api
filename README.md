devops-api/
├── .github/workflows/ ← Pipeline CI/CD
├── 1-infrastructure/ ← Infrastructure (VM + k3s)
├── 2-docker/ ← Image Docker API
├── 3-kubernetes/ ← Déploiement Kubernetes
├── actions-runner/ ← Runner self-hosted
├── test-api.tar ← Image Docker exportée
├── .gitignore ← Fichiers ignorés
└── README.md ← Documentation principale

Description

Ce projet met en place une chaîne DevOps complète :

-  Infrastructure (VM + k3s)
-  Docker (conteneurisation)
-  Kubernetes (déploiement)
-  CI/CD (GitHub Actions + runner)
-  Monitoring (Prometheus + Grafana)


Objectif

Mettre en place une architecture DevOps complète avec :

- automatisation
- déploiement continu
- supervision en temps réel

---

 Conclusion

Ce projet démontre la mise en place d’un pipeline DevOps complet, du build Docker jusqu’au monitoring avec Grafana.
