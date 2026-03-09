// ========================================
// HOMELUX - JAVASCRIPT
// Mobilier de Luxe - Premium Furniture
// ========================================

// GLOBAL VARIABLES
let currentLang = 'fr';
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let currentSlide = 0;
let carouselInterval;
let isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

// DOM READY
document.addEventListener('DOMContentLoaded', function() {
    const savedLang = localStorage.getItem('preferredLang') || 'fr';
    setLanguage(savedLang);
    initMobileMenu();
    initCarousel();
    initContactForm();
    initCatalog();
    updateCartUI();
    initEasterEggs();
    initParallax();
    checkLoginStatus();
});

// LANGUAGE MANAGEMENT
const langToggle = document.getElementById('langToggle');
if (langToggle) langToggle.addEventListener('click', toggleLanguage);

function toggleLanguage() {
    currentLang = currentLang === 'fr' ? 'en' : 'fr';
    setLanguage(currentLang);
    localStorage.setItem('preferredLang', currentLang);
}

function setLanguage(lang) {
    currentLang = lang;
    
    // Translate text elements
    document.querySelectorAll('[data-fr]').forEach(el => {
        const text = el.getAttribute(`data-${lang}`);
        if (text) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = text;
            } else if (el.tagName === 'OPTION') {
                el.textContent = text;
            } else {
                el.textContent = text;
            }
        }
    });
    
    // Translate placeholders
    document.querySelectorAll('[data-fr-placeholder]').forEach(el => {
        const placeholder = el.getAttribute(`data-${lang}-placeholder`);
        if (placeholder) el.placeholder = placeholder;
    });
    
    // Update language button
    const langBtn = document.getElementById('langToggle');
    if (langBtn) {
        const flag = langBtn.querySelector('.flag');
        const langText = langBtn.querySelector('.lang-text');
        if (lang === 'en') {
            flag.textContent = '🇬🇧';
            langText.textContent = 'EN';
        } else {
            flag.textContent = '🇫🇷';
            langText.textContent = 'FR';
        }
    }
}

// LOGIN SYSTEM
function openLogin() {
    const modal = document.getElementById('loginModal');
    if (modal) {
        modal.classList.add('active');
    }
}

function closeLogin() {
    const modal = document.getElementById('loginModal');
    if (modal) {
        modal.classList.remove('active');
    }
}

function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    // Simple demo login (in real app, use backend authentication)
    if (email && password) {
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userEmail', email);
        isLoggedIn = true;
        closeLogin();
        showNotification(currentLang === 'fr' ? 'Connexion réussie !' : 'Login successful!');
        updateLoginButton();
    }
}

function logout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
    isLoggedIn = false;
    showNotification(currentLang === 'fr' ? 'Déconnexion réussie' : 'Logout successful');
    updateLoginButton();
}

function checkLoginStatus() {
    updateLoginButton();
}

function updateLoginButton() {
    const loginBtn = document.querySelector('.login-btn');
    if (loginBtn) {
        if (isLoggedIn) {
            const email = localStorage.getItem('userEmail');
            loginBtn.innerHTML = `<span>👤</span><span>${email ? email.split('@')[0] : 'User'}</span>`;
            loginBtn.onclick = logout;
        } else {
            loginBtn.innerHTML = `<span>👤</span><span data-fr="Connexion" data-en="Login">${currentLang === 'fr' ? 'Connexion' : 'Login'}</span>`;
            loginBtn.onclick = openLogin;
        }
    }
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('loginModal');
    if (event.target === modal) {
        closeLogin();
    }
}

// MOBILE MENU
function initMobileMenu() {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
        
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }
}

// CAROUSEL
function initCarousel() {
    const track = document.querySelector('.carousel-track');
    if (!track) return;
    
    const slides = document.querySelectorAll('.carousel-slide');
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');
    const indicatorsContainer = document.querySelector('.carousel-indicators');
    
    // Create indicators
    slides.forEach((_, index) => {
        const indicator = document.createElement('div');
        indicator.classList.add('carousel-indicator');
        if (index === 0) indicator.classList.add('active');
        indicator.addEventListener('click', () => goToSlide(index));
        indicatorsContainer.appendChild(indicator);
    });
    
    // Navigation buttons
    if (prevBtn) prevBtn.addEventListener('click', () => changeSlide(-1));
    if (nextBtn) nextBtn.addEventListener('click', () => changeSlide(1));
    
    // Auto-play
    startCarouselAutoPlay();
    
    // Pause on hover
    const carousel = document.querySelector('.carousel-wrapper');
    if (carousel) {
        carousel.addEventListener('mouseenter', stopCarouselAutoPlay);
        carousel.addEventListener('mouseleave', startCarouselAutoPlay);
    }
}

function changeSlide(direction) {
    const slides = document.querySelectorAll('.carousel-slide');
    currentSlide += direction;
    
    if (currentSlide < 0) currentSlide = slides.length - 1;
    else if (currentSlide >= slides.length) currentSlide = 0;
    
    goToSlide(currentSlide);
}

function goToSlide(index) {
    const track = document.querySelector('.carousel-track');
    const indicators = document.querySelectorAll('.carousel-indicator');
    
    currentSlide = index;
    
    if (track) {
        track.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
    
    indicators.forEach((indicator, i) => {
        indicator.classList.toggle('active', i === currentSlide);
    });
}

function startCarouselAutoPlay() {
    carouselInterval = setInterval(() => changeSlide(1), 5000);
}

function stopCarouselAutoPlay() {
    clearInterval(carouselInterval);
}

// PARALLAX EFFECT
function initParallax() {
    const parallaxBg = document.querySelector('.parallax-bg');
    
    if (parallaxBg) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            parallaxBg.style.transform = `translateY(${scrolled * 0.5}px)`;
        });
    }
    
    // Card parallax hover effect
    const cards = document.querySelectorAll('[data-tilt]');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
        });
    });
}

// SHOPPING CART
function toggleCart() {
    const sidebar = document.getElementById('cartSidebar');
    if (sidebar) {
        sidebar.classList.toggle('active');
    }
}

function addToCart(id, name, price) {
    const existingItem = cart.find(item => item.id === id);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            id,
            name,
            price,
            quantity: 1
        });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartUI();
    toggleCart();
    showNotification(currentLang === 'fr' ? 'Produit ajouté au panier !' : 'Product added to cart!');
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartUI();
}

function updateCartUI() {
    const cartItems = document.getElementById('cartItems');
    const cartCount = document.querySelectorAll('.cart-count');
    const cartTotal = document.getElementById('cartTotal');
    
    if (!cartItems) return;
    
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    cartCount.forEach(el => el.textContent = totalItems);
    if (cartTotal) cartTotal.textContent = totalPrice.toFixed(2).replace('.', ',') + ' €';
    
    if (cart.length === 0) {
        cartItems.innerHTML = `<div class="empty-cart"><p>${currentLang === 'fr' ? 'Votre panier est vide' : 'Your cart is empty'}</p></div>`;
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-img">🛋️</div>
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">${item.price.toFixed(2).replace('.', ',')} € × ${item.quantity}</div>
                </div>
                <button class="cart-item-remove" onclick="removeFromCart(${item.id})">🗑️</button>
            </div>
        `).join('');
    }
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 90px;
        right: 20px;
        background: var(--success);
        color: white;
        padding: 1rem 2rem;
        border-radius: 50px;
        box-shadow: var(--shadow-xl);
        z-index: 9999;
        animation: slideInRight 0.3s ease-out;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add animations to CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// CONTACT FORM
function initContactForm() {
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            showNotification(currentLang === 'fr' ? 'Message envoyé avec succès !' : 'Message sent successfully!');
            form.reset();
        });
    }
}

// CATALOG FILTERING
const allProducts = [
    {id: 1, name: 'Canapé NORDIC', nameEn: 'NORDIC Sofa', price: 2799, category: 'salon', color: 'marron', style: 'scandinave'},
    {id: 2, name: 'Lit ROYAL', nameEn: 'ROYAL Bed', price: 2999, category: 'chambre', color: 'gris', style: 'moderne'},
    {id: 3, name: 'Table PRESTIGE', nameEn: 'PRESTIGE Table', price: 3499, category: 'cuisine', color: 'marron', style: 'classique'},
    {id: 4, name: 'Bureau EXECUTIVE', nameEn: 'EXECUTIVE Desk', price: 1899, category: 'bureau', color: 'noir', style: 'moderne'},
    {id: 5, name: 'Salon SUMMER', nameEn: 'SUMMER Set', price: 4999, category: 'jardin', color: 'blanc', style: 'moderne'},
    {id: 6, name: 'Lustre CRYSTAL', nameEn: 'CRYSTAL Chandelier', price: 899, category: 'decoration', color: 'blanc', style: 'classique'},
    {id: 7, name: 'Fauteuil ROYAL', nameEn: 'ROYAL Armchair', price: 1299, category: 'salon', color: 'bleu', style: 'classique'},
    {id: 8, name: 'Armoire ZEN', nameEn: 'ZEN Wardrobe', price: 1899, category: 'chambre', color: 'blanc', style: 'scandinave'},
    {id: 9, name: 'Chaise DESIGN', nameEn: 'DESIGN Chair', price: 299, category: 'cuisine', color: 'noir', style: 'moderne'},
    {id: 10, name: 'Bureau SMART', nameEn: 'SMART Desk', price: 1499, category: 'bureau', color: 'blanc', style: 'scandinave'},
    {id: 11, name: 'Parasol LUXE', nameEn: 'LUXE Parasol', price: 599, category: 'jardin', color: 'gris', style: 'moderne'},
    {id: 12, name: 'Miroir ELEGANCE', nameEn: 'ELEGANCE Mirror', price: 399, category: 'decoration', color: 'blanc', style: 'moderne'},
];

function initCatalog() {
    const catalogProducts = document.getElementById('catalogProducts');
    if (!catalogProducts) return;
    renderProducts(allProducts);
}

function renderProducts(products) {
    const catalogProducts = document.getElementById('catalogProducts');
    if (!catalogProducts) return;
    
    catalogProducts.innerHTML = products.map(p => `
        <div class="product-card">
            <div class="product-image" style="background: linear-gradient(135deg, #8B7355 0%, #D2B48C 100%); display: flex; align-items: center; justify-content: center; font-size: 4rem;">
                ${getCategoryEmoji(p.category)}
            </div>
            <div class="product-info">
                <h3 class="product-name">${currentLang === 'fr' ? p.name : p.nameEn}</h3>
                <p class="product-desc">${getCategoryName(p.category)}</p>
                <div class="product-footer">
                    <span class="product-price">${p.price.toFixed(2).replace('.', ',')} €</span>
                    <button class="btn-add-cart" onclick="addToCart(${p.id}, '${p.name}', ${p.price})">${currentLang === 'fr' ? 'Ajouter' : 'Add'}</button>
                </div>
            </div>
        </div>
    `).join('');
    
    const resultsCount = document.getElementById('resultsCount');
    if (resultsCount) resultsCount.textContent = products.length;
}

function getCategoryEmoji(category) {
    const emojis = {
        salon: '🛋️',
        chambre: '🛏️',
        cuisine: '🍽️',
        bureau: '💼',
        jardin: '🌳',
        decoration: '✨'
    };
    return emojis[category] || '🏠';
}

function getCategoryName(category) {
    const names = {
        fr: {
            salon: 'Salon',
            chambre: 'Chambre',
            cuisine: 'Cuisine',
            bureau: 'Bureau',
            jardin: 'Jardin',
            decoration: 'Décoration'
        },
        en: {
            salon: 'Living Room',
            chambre: 'Bedroom',
            cuisine: 'Kitchen',
            bureau: 'Office',
            jardin: 'Garden',
            decoration: 'Decoration'
        }
    };
    return names[currentLang][category] || category;
}

function applyFilters() {
    let filtered = [...allProducts];
    
    const categories = Array.from(document.querySelectorAll('input[name="category"]:checked')).map(el => el.value);
    const colors = Array.from(document.querySelectorAll('input[name="color"]:checked')).map(el => el.value);
    const styles = Array.from(document.querySelectorAll('input[name="style"]:checked')).map(el => el.value);
    const priceRange = document.querySelector('input[name="price"]:checked')?.value;
    
    if (categories.length) filtered = filtered.filter(p => categories.includes(p.category));
    if (colors.length) filtered = filtered.filter(p => colors.includes(p.color));
    if (styles.length) filtered = filtered.filter(p => styles.includes(p.style));
    
    if (priceRange) {
        const [min, max] = priceRange.split('-').map(v => v === '+' ? Infinity : parseInt(v));
        filtered = filtered.filter(p => p.price >= (min || 0) && p.price < (max || Infinity));
    }
    
    renderProducts(filtered);
}

function resetFilters() {
    document.querySelectorAll('.filters-sidebar input').forEach(input => input.checked = false);
    renderProducts(allProducts);
}

function sortProducts() {
    const sortValue = document.getElementById('sortSelect')?.value;
    let sorted = [...allProducts];
    
    if (sortValue === 'price-asc') sorted.sort((a, b) => a.price - b.price);
    else if (sortValue === 'price-desc') sorted.sort((a, b) => b.price - a.price);
    else if (sortValue === 'name') sorted.sort((a, b) => a.name.localeCompare(b.name));
    
    renderProducts(sorted);
}

// NEWSLETTER
function subscribeNewsletter(e) {
    e.preventDefault();
    showNotification(currentLang === 'fr' ? 'Inscription réussie ! Merci.' : 'Subscription successful! Thank you.');
    e.target.reset();
}

// ADMIN FUNCTIONS
function saveStoreConfig() {
    showNotification(currentLang === 'fr' ? 'Configuration sauvegardée avec succès' : 'Configuration saved successfully');
}

function showConsoleAnimation(action) {
    const console = document.getElementById('consoleAnimation');
    const output = document.getElementById('consoleOutput');
    if (!console || !output) return;
    
    console.style.display = 'flex';
    output.innerHTML = '';
    
    const messages = {
        deploy: ['> Initializing deployment...', '> Building assets...', '> Uploading to server...', '> Deployment complete! ✓'],
        update: ['> Checking for updates...', '> Downloading packages...', '> Installing updates...', '> Update complete! ✓'],
        stop: ['> Stopping web server...', '> Closing all connections...', '> Server stopped! ✓']
    };
    
    const selectedMessages = messages[action] || messages.deploy;
    let index = 0;
    
    const interval = setInterval(() => {
        if (index < selectedMessages.length) {
            output.innerHTML += selectedMessages[index] + '<br>';
            output.scrollTop = output.scrollHeight;
            index++;
        } else {
            clearInterval(interval);
            setTimeout(() => console.style.display = 'none', 2000);
        }
    }, 600);
}

function closeConsole() {
    const console = document.getElementById('consoleAnimation');
    if (console) console.style.display = 'none';
}

// EASTER EGGS
function initEasterEggs() {
    // Konami Code
    let konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiIndex = 0;
    
    document.addEventListener('keydown', (e) => {
        if (e.key === konamiCode[konamiIndex]) {
            konamiIndex++;
            if (konamiIndex === konamiCode.length) {
                activateKonamiEasterEgg();
                konamiIndex = 0;
            }
        } else {
            konamiIndex = 0;
        }
    });
    
    // Logo click counter
    const logo = document.querySelector('.logo');
    let clickCount = 0;
    if (logo) {
        logo.addEventListener('click', () => {
            clickCount++;
            if (clickCount === 5) {
                activateLogoEasterEgg();
                clickCount = 0;
            }
        });
    }
    
    // Console message
    console.log('%c🏠 HomeLux Premium', 'color: #8B7355; font-size: 24px; font-weight: bold;');
    console.log('%cBienvenue ! Essayez le code Konami 🎮', 'color: #D4AF37; font-size: 14px;');
}

function activateKonamiEasterEgg() {
    document.body.style.animation = 'rainbow 5s infinite';
    const style = document.createElement('style');
    style.textContent = `
        @keyframes rainbow {
            0% { filter: hue-rotate(0deg); }
            100% { filter: hue-rotate(360deg); }
        }
    `;
    document.head.appendChild(style);
    
    alert('🎉 ' + (currentLang === 'fr' ? 'Code Konami activé ! Mode Arc-en-ciel !' : 'Konami Code activated! Rainbow mode!'));
    
    setTimeout(() => {
        document.body.style.animation = '';
    }, 5000);
}

function activateLogoEasterEgg() {
    const logo = document.querySelector('.logo-icon');
    if (!logo) return;
    
    logo.style.animation = 'spin 2s linear';
    const style = document.createElement('style');
    style.textContent = `
        @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(1080deg); }
        }
    `;
    document.head.appendChild(style);
    
    showNotification('🎊 ' + (currentLang === 'fr' ? 'Easter egg trouvé !' : 'Easter egg found!'));
    
    setTimeout(() => {
        logo.style.animation = '';
    }, 2000);
}

// SMOOTH SCROLL
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// NAVBAR SCROLL EFFECT
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.pageYOffset > 100) {
        navbar.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
    } else {
        navbar.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)';
    }
});

// ANIMATE ON SCROLL
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeIn 1s ease-out';
            entry.target.style.opacity = '1';
        }
    });
}, observerOptions);

document.querySelectorAll('.product-card, .category-card-parallax, .service-item').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});