# 🏠 HomeLux - Site E-Commerce de Meubles de Luxe

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/fr/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/fr/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/fr/docs/Web/JavaScript)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

> Site e-commerce moderne et élégant pour la vente de meubles haut de gamme, inspiré par IKEA et BUT, avec une touche de luxe.

[**Démo en direct**](#) | [**Captures d'écran**](#captures-décran) | [**Installation**](#installation)

---

## ✨ Caractéristiques principales

### 🛒 **Fonctionnalités E-Commerce**
- **Panier d'achat** avec sidebar élégante et gestion en temps réel
- **Système de filtres avancés** (catégorie, couleur, style, prix)
- **Tri dynamique** des produits (prix, nom, popularité)
- **Catalogue complet** avec 12 produits pré-chargés
- **LocalStorage** pour la persistance du panier

### 🌐 **Internationalisation**
- **Système bilingue FR/EN** complet
- Changement de langue instantané
- Sauvegarde de la préférence linguistique
- Traduction de tous les éléments (texte, placeholders, boutons)

### 🎨 **Design & UX**
- **Design moderne** avec palette de couleurs professionnelle
- **100% Responsive** (Mobile, Tablette, Desktop)
- **Animations fluides** et transitions CSS3
- **Carrousel automatique** avec contrôles manuels
- **Effets parallax** sur la page d'accueil
- **Cartes avec effet hover 3D**

### 🎯 **Pages Principales**
1. **Accueil** (`index.html`) - Hero section, carrousel, catégories, produits vedettes
2. **Catalogue** (`catalog.html`) - Liste complète avec filtres et tri
3. **Galerie** (`gallery.html`) - Showroom avec carrousel et images
4. **Contact** (`contact.html`) - Formulaire de contact et informations
5. **Admin** (`admin.html`) - Tableau de bord avec statistiques et configuration

### 🔐 **Fonctionnalités Avancées**
- **Système de connexion** avec modal
- **Notifications toast** animées
- **Console d'administration** animée
- **Easter eggs** cachés (Code Konami, logo cliquable)
- **Journal d'activité** en temps réel
- **Statistiques du magasin**

---

## 📸 Captures d'écran

### Page d'accueil
![Homepage](https://via.placeholder.com/800x450/8B7355/FFFFFF?text=Homepage+HomeLux)

### Catalogue avec filtres
![Catalog](https://via.placeholder.com/800x450/2C3E50/FFFFFF?text=Catalog+Page)

### Admin Dashboard
![Admin](https://via.placeholder.com/800x450/D4AF37/000000?text=Admin+Dashboard)

---

## 🚀 Installation

### Prérequis
- Navigateur web moderne (Chrome, Firefox, Safari, Edge)
- Aucun serveur requis (site statique)

### Installation locale

```bash
# Cloner le repository
git clone https://github.com/votre-username/homelux.git

# Accéder au dossier
cd homelux

# Ouvrir index.html dans votre navigateur
# Ou utiliser un serveur local :
python -m http.server 8000
# ou
npx http-server
```

Puis accédez à `http://localhost:8000` dans votre navigateur.

---

## 📁 Structure du projet

```
homelux/
│
├── index.html              # Page d'accueil
├── catalog.html            # Page catalogue
├── gallery.html            # Page galerie/showroom
├── contact.html            # Page contact
├── admin.html              # Tableau de bord admin
│
├── styles.css              # Styles CSS (18KB)
├── script.js               # JavaScript principal (19KB)
│
├── img/                    # Images (optionnel)
│   ├── Salon_Moderne.jpg
│   ├── Chambre_Cosy.webp
│   └── ...
│
└── README.md               # Ce fichier
```

---

## 🎨 Palette de couleurs

| Couleur | Hex | Usage |
|---------|-----|-------|
| **Brun Bois** | `#8B7355` | Couleur principale |
| **Bleu Foncé** | `#2C3E50` | Couleur secondaire |
| **Or** | `#D4AF37` | Accent |
| **Blanc** | `#FFFFFF` | Backgrounds |
| **Gris Clair** | `#F7FAFC` | Backgrounds secondaires |

---

## ⚙️ Technologies utilisées

- **HTML5** - Structure sémantique
- **CSS3** - Styles modernes avec variables CSS
- **JavaScript ES6+** - Logique interactive
- **LocalStorage** - Persistance des données
- **CSS Grid & Flexbox** - Layouts responsives
- **CSS Animations** - Transitions et effets

---

## 🔧 Fonctionnalités détaillées

### Système de panier
```javascript
// Ajouter un produit
addToCart(id, name, price)

// Retirer un produit
removeFromCart(id)

// Mettre à jour l'affichage
updateCartUI()
```

### Changement de langue
```javascript
// Changer la langue
toggleLanguage()

// Définir une langue
setLanguage('fr' | 'en')
```

### Filtres de produits
```javascript
// Appliquer les filtres
applyFilters()

// Réinitialiser les filtres
resetFilters()

// Trier les produits
sortProducts()
```

---

## 🎁 Easter Eggs

Le site contient plusieurs easter eggs cachés :

1. **Code Konami** : ↑ ↑ ↓ ↓ ← → ← → B A → Effet arc-en-ciel
2. **Logo** : Cliquer 5 fois sur le logo → Animation de rotation
3. **Console** : Messages stylisés dans la console du navigateur

---

## 📱 Responsive Design

Le site s'adapte automatiquement à tous les écrans :

- **Desktop** : > 1024px - Layout complet avec sidebar
- **Tablette** : 768px - 1024px - Layout adapté
- **Mobile** : < 768px - Menu hamburger, colonnes uniques

---

## 🌟 Fonctionnalités futures

- [ ] Intégration backend (Node.js/Express)
- [ ] Base de données (MongoDB/PostgreSQL)
- [ ] Système de paiement (Stripe)
- [ ] Gestion des commandes
- [ ] Comptes utilisateurs complets
- [ ] Système de reviews et notes
- [ ] Wishlist/Liste de souhaits
- [ ] Comparateur de produits
- [ ] Recherche avancée
- [ ] Chat en direct

---

## 🤝 Contribution

Les contributions sont les bienvenues ! Pour contribuer :

1. **Fork** le projet
2. Créez votre branche (`git checkout -b feature/AmazingFeature`)
3. Commitez vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une **Pull Request**

---

## 📝 Changelog

### Version 1.0.0 (2024-03-09)
- ✅ Lancement initial
- ✅ 5 pages complètes
- ✅ Système de panier fonctionnel
- ✅ Bilingue FR/EN
- ✅ Design responsive
- ✅ Carrousel corrigé
- ✅ Easter eggs

---

## 👨‍💻 Auteur

**Votre Nom**
- GitHub: [@votre-username](https://github.com/votre-username)
- Email: votre.email@exemple.com
- Portfolio: [votre-portfolio.com](https://votre-portfolio.com)

---

## 📄 License

Ce projet est sous licence MIT - voir le fichier [LICENSE](LICENSE) pour plus de détails.

---

## 🙏 Remerciements

- Inspiration design : IKEA, BUT, Maisons du Monde
- Icônes : Emojis Unicode
- Images : Unsplash
- Fonts : System fonts

---

## 📊 Statistiques du projet

- **Lignes de code HTML** : ~1,200
- **Lignes de code CSS** : ~600
- **Lignes de code JavaScript** : ~500
- **Nombre de pages** : 5
- **Taille totale** : ~60 KB (sans images)
- **Temps de développement** : 30 jours (selon planning Gantt)

---

## 🔗 Liens utiles

- [Documentation HTML5](https://developer.mozilla.org/fr/docs/Web/HTML)
- [Documentation CSS3](https://developer.mozilla.org/fr/docs/Web/CSS)
- [Documentation JavaScript](https://developer.mozilla.org/fr/docs/Web/JavaScript)
- [Guide LocalStorage](https://developer.mozilla.org/fr/docs/Web/API/Window/localStorage)

---

## 💬 Support

Pour toute question ou problème :

- Ouvrez une [Issue](https://github.com/votre-username/homelux/issues)
- Contactez-moi par [Email](mailto:votre.email@exemple.com)
- Consultez la [Documentation](#)

---

<div align="center">

**⭐ Si vous aimez ce projet, n'oubliez pas de lui donner une étoile ! ⭐**

Fait avec ❤️ par [Votre Nom](https://github.com/votre-username)

</div>
