// Internationalization (i18n) System for AIToolshed.io
class I18nManager {
    constructor() {
        this.currentLanguage = 'en';
        this.supportedLanguages = ['en', 'zh', 'de', 'fr'];
        this.translations = {
            en: {
                // Navigation
                'nav.home': 'Home',
                'nav.directory': 'Tool Directory',
                'nav.categories': 'Categories',
                'nav.about': 'About Us',
                'nav.search.placeholder': 'Search AI tools...',
                
                // Homepage
                'hero.title': 'Discover the Best AI Tools',
                'hero.subtitle': 'Featuring Sora 2 and cutting-edge AI technologies',
                'hero.description': 'AIToolshed.io is your ultimate destination for discovering the most innovative AI tools. From Sora 2\'s revolutionary video generation to the latest in image, audio, and text AI technologies.',
                'hero.cta': 'Explore Sora 2',
                'hero.browse': 'Browse All Tools',
                
                'featured.title': 'Featured AI Tools',
                'featured.subtitle': 'Handpicked tools including the revolutionary Sora 2',
                
                'latest.title': 'Latest Additions',
                'latest.subtitle': 'Newest AI tools added to our collection',
                
                'categories.title': 'Popular Categories',
                'categories.subtitle': 'Explore AI tools by category',
                'categories.video': 'Video & Animation',
                'categories.image': 'Image & Design',
                'categories.audio': 'Audio & Music',
                'categories.text': 'Text & Writing',
                
                // Directory Page
                'directory.title': 'AI Tool Directory',
                'directory.subtitle': 'Comprehensive collection of AI tools with advanced filtering',
                'directory.filters.category': 'Category',
                'directory.filters.pricing': 'Pricing',
                'directory.filters.sort': 'Sort by',
                'directory.filters.all': 'All',
                'directory.filters.featured': 'Featured',
                'directory.filters.newest': 'Newest',
                'directory.filters.name': 'Name',
                'directory.filters.free': 'Free',
                'directory.filters.freemium': 'Freemium',
                'directory.filters.premium': 'Premium',
                'directory.view.grid': 'Grid View',
                'directory.view.list': 'List View',
                'directory.count': 'tools',
                'directory.no-results': 'No tools found matching your criteria',
                'directory.try-different': 'Try adjusting your filters or search terms',
                
                // Tool Detail Page
                'tool.try': 'Try Now',
                'tool.bookmark': 'Bookmark',
                'tool.share': 'Share',
                'tool.rating': 'rating',
                'tool.reviews': 'reviews',
                'tool.users': 'users',
                'tool.released': 'Released',
                'tool.description.title': 'Tool Description',
                'tool.features.title': 'Key Features',
                'tool.use-cases.title': 'Use Cases',
                'tool.pricing.title': 'Pricing Plans',
                'tool.quick-info.title': 'Quick Info',
                'tool.related.title': 'Related Tools',
                'tool.tags.title': 'Tags',
                'tool.developer': 'Developer',
                'tool.release-date': 'Release Date',
                'tool.languages': 'Languages',
                'tool.platform': 'Platform',
                'tool.api': 'API',
                'tool.supported': 'Supported',
                'tool.web': 'Web',
                'tool.multilingual': 'Multilingual',
                
                // Pricing
                'pricing.free': 'Free',
                'pricing.professional': 'Professional',
                'pricing.enterprise': 'Enterprise',
                'pricing.month': '/month',
                'pricing.custom': 'Custom',
                'pricing.get-started': 'Get Started',
                'pricing.upgrade': 'Upgrade Now',
                'pricing.contact': 'Contact Us',
                'pricing.popular': 'Most Popular',
                
                // Common
                'common.loading': 'Loading...',
                'common.error': 'Error',
                'common.success': 'Success',
                'common.try-now': 'Try Now',
                'common.learn-more': 'Learn More',
                'common.view-all': 'View All',
                'common.search': 'Search',
                'common.filter': 'Filter',
                'common.sort': 'Sort',
                'common.close': 'Close',
                'common.save': 'Save',
                'common.cancel': 'Cancel',
                
                // Footer
                'footer.description': 'Discover the best AI tools and boost your productivity. Featuring Sora 2 and other cutting-edge AI technologies.',
                'footer.categories.title': 'Tool Categories',
                'footer.popular.title': 'Popular Tools',
                'footer.about.title': 'About Us',
                'footer.about.company': 'About AIToolshed',
                'footer.contact': 'Contact Us',
                'footer.privacy': 'Privacy Policy',
                'footer.terms': 'Terms of Service',
                'footer.copyright': '© 2024 AIToolshed.io. Featuring Sora 2 and AI tools. All rights reserved.',
                
                // Notifications
                'notification.bookmarked': 'Added to bookmarks',
                'notification.bookmark-removed': 'Removed from bookmarks',
                'notification.link-copied': 'Link copied to clipboard',
                
                // Breadcrumb
                'breadcrumb.home': 'Home',
                'breadcrumb.directory': 'Tool Directory',
                'breadcrumb.video': 'Video & Animation'
            },
            zh: {
                // Navigation
                'nav.home': '首頁',
                'nav.directory': '工具目錄',
                'nav.categories': '分類',
                'nav.about': '關於我們',
                'nav.search.placeholder': '搜尋 AI 工具...',
                
                // Homepage
                'hero.title': '發現最佳 AI 工具',
                'hero.subtitle': '精選 Sora 2 與前沿 AI 技術',
                'hero.description': 'AIToolshed.io 是您發現最創新 AI 工具的終極目的地。從 Sora 2 的革命性影片生成到最新的圖像、音訊和文字 AI 技術。',
                'hero.cta': '探索 Sora 2',
                'hero.browse': '瀏覽所有工具',
                
                'featured.title': '精選 AI 工具',
                'featured.subtitle': '精心挑選的工具，包括革命性的 Sora 2',
                
                'latest.title': '最新添加',
                'latest.subtitle': '最新加入我們收藏的 AI 工具',
                
                'categories.title': '熱門分類',
                'categories.subtitle': '按分類探索 AI 工具',
                'categories.video': '影片與動畫',
                'categories.image': '圖像與設計',
                'categories.audio': '音訊與音樂',
                'categories.text': '文字與寫作',
                
                // Directory Page
                'directory.title': 'AI 工具目錄',
                'directory.subtitle': '全面的 AI 工具收藏，具備進階篩選功能',
                'directory.filters.category': '分類',
                'directory.filters.pricing': '定價',
                'directory.filters.sort': '排序',
                'directory.filters.all': '全部',
                'directory.filters.featured': '精選',
                'directory.filters.newest': '最新',
                'directory.filters.name': '名稱',
                'directory.filters.free': '免費',
                'directory.filters.freemium': '免費增值',
                'directory.filters.premium': '付費',
                'directory.view.grid': '網格視圖',
                'directory.view.list': '列表視圖',
                'directory.count': '個工具',
                'directory.no-results': '找不到符合條件的工具',
                'directory.try-different': '請嘗試調整篩選條件或搜尋詞',
                
                // Tool Detail Page
                'tool.try': '立即體驗',
                'tool.bookmark': '收藏',
                'tool.share': '分享',
                'tool.rating': '評分',
                'tool.reviews': '評價',
                'tool.users': '用戶',
                'tool.released': '發布於',
                'tool.description.title': '工具介紹',
                'tool.features.title': '核心功能',
                'tool.use-cases.title': '應用場景',
                'tool.pricing.title': '定價方案',
                'tool.quick-info.title': '快速資訊',
                'tool.related.title': '相關工具',
                'tool.tags.title': '標籤',
                'tool.developer': '開發商',
                'tool.release-date': '發布日期',
                'tool.languages': '支援語言',
                'tool.platform': '平台',
                'tool.api': 'API',
                'tool.supported': '支援',
                'tool.web': '網頁版',
                'tool.multilingual': '多語言',
                
                // Pricing
                'pricing.free': '免費版',
                'pricing.professional': '專業版',
                'pricing.enterprise': '企業版',
                'pricing.month': '/月',
                'pricing.custom': '客製化',
                'pricing.get-started': '開始使用',
                'pricing.upgrade': '立即升級',
                'pricing.contact': '聯絡我們',
                'pricing.popular': '最受歡迎',
                
                // Common
                'common.loading': '載入中...',
                'common.error': '錯誤',
                'common.success': '成功',
                'common.try-now': '立即試用',
                'common.learn-more': '了解更多',
                'common.view-all': '查看全部',
                'common.search': '搜尋',
                'common.filter': '篩選',
                'common.sort': '排序',
                'common.close': '關閉',
                'common.save': '儲存',
                'common.cancel': '取消',
                
                // Footer
                'footer.description': '發現最佳 AI 工具，提升您的工作效率。專注於 Sora 2 等前沿 AI 技術的推廣與應用。',
                'footer.categories.title': '工具分類',
                'footer.popular.title': '熱門工具',
                'footer.about.title': '關於我們',
                'footer.about.company': '關於 AIToolshed',
                'footer.contact': '聯絡我們',
                'footer.privacy': '隱私政策',
                'footer.terms': '使用條款',
                'footer.copyright': '© 2024 AIToolshed.io. 專注於 Sora 2 等 AI 工具推廣。保留所有權利。',
                
                // Notifications
                'notification.bookmarked': '已加入收藏',
                'notification.bookmark-removed': '已移除收藏',
                'notification.link-copied': '連結已複製到剪貼簿',
                
                // Breadcrumb
                'breadcrumb.home': '首頁',
                'breadcrumb.directory': '工具目錄',
                'breadcrumb.video': '影片與動畫'
            },
            de: {
                // Navigation
                'nav.home': 'Startseite',
                'nav.directory': 'Tool-Verzeichnis',
                'nav.categories': 'Kategorien',
                'nav.about': 'Über uns',
                'nav.search.placeholder': 'KI-Tools suchen...',
                
                // Homepage
                'hero.title': 'Entdecken Sie die besten KI-Tools',
                'hero.subtitle': 'Mit Sora 2 und modernsten KI-Technologien',
                'hero.description': 'AIToolshed.io ist Ihr ultimatives Ziel für die Entdeckung der innovativsten KI-Tools. Von Sora 2s revolutionärer Videogenerierung bis hin zu den neuesten Bild-, Audio- und Text-KI-Technologien.',
                'hero.cta': 'Sora 2 erkunden',
                'hero.browse': 'Alle Tools durchsuchen',
                
                'featured.title': 'Ausgewählte KI-Tools',
                'featured.subtitle': 'Handverlesene Tools einschließlich des revolutionären Sora 2',
                
                'latest.title': 'Neueste Ergänzungen',
                'latest.subtitle': 'Neueste KI-Tools in unserer Sammlung',
                
                'categories.title': 'Beliebte Kategorien',
                'categories.subtitle': 'KI-Tools nach Kategorien erkunden',
                'categories.video': 'Video & Animation',
                'categories.image': 'Bild & Design',
                'categories.audio': 'Audio & Musik',
                'categories.text': 'Text & Schreiben',
                
                // Directory Page
                'directory.title': 'KI-Tool-Verzeichnis',
                'directory.subtitle': 'Umfassende Sammlung von KI-Tools mit erweiterten Filterfunktionen',
                'directory.filters.category': 'Kategorie',
                'directory.filters.pricing': 'Preisgestaltung',
                'directory.filters.sort': 'Sortieren nach',
                'directory.filters.all': 'Alle',
                'directory.filters.featured': 'Ausgewählt',
                'directory.filters.newest': 'Neueste',
                'directory.filters.name': 'Name',
                'directory.filters.free': 'Kostenlos',
                'directory.filters.freemium': 'Freemium',
                'directory.filters.premium': 'Premium',
                'directory.view.grid': 'Rasteransicht',
                'directory.view.list': 'Listenansicht',
                'directory.count': 'Tools',
                'directory.no-results': 'Keine Tools gefunden, die Ihren Kriterien entsprechen',
                'directory.try-different': 'Versuchen Sie, Ihre Filter oder Suchbegriffe anzupassen',
                
                // Tool Detail Page
                'tool.try': 'Jetzt testen',
                'tool.bookmark': 'Lesezeichen',
                'tool.share': 'Teilen',
                'tool.rating': 'Bewertung',
                'tool.reviews': 'Bewertungen',
                'tool.users': 'Benutzer',
                'tool.released': 'Veröffentlicht',
                'tool.description.title': 'Tool-Beschreibung',
                'tool.features.title': 'Hauptfunktionen',
                'tool.use-cases.title': 'Anwendungsfälle',
                'tool.pricing.title': 'Preispläne',
                'tool.quick-info.title': 'Schnellinfo',
                'tool.related.title': 'Verwandte Tools',
                'tool.tags.title': 'Tags',
                'tool.developer': 'Entwickler',
                'tool.release-date': 'Veröffentlichungsdatum',
                'tool.languages': 'Sprachen',
                'tool.platform': 'Plattform',
                'tool.api': 'API',
                'tool.supported': 'Unterstützt',
                'tool.web': 'Web',
                'tool.multilingual': 'Mehrsprachig',
                
                // Pricing
                'pricing.free': 'Kostenlos',
                'pricing.professional': 'Professionell',
                'pricing.enterprise': 'Unternehmen',
                'pricing.month': '/Monat',
                'pricing.custom': 'Individuell',
                'pricing.get-started': 'Loslegen',
                'pricing.upgrade': 'Jetzt upgraden',
                'pricing.contact': 'Kontaktieren Sie uns',
                'pricing.popular': 'Am beliebtesten',
                
                // Common
                'common.loading': 'Wird geladen...',
                'common.error': 'Fehler',
                'common.success': 'Erfolg',
                'common.try-now': 'Jetzt testen',
                'common.learn-more': 'Mehr erfahren',
                'common.view-all': 'Alle anzeigen',
                'common.search': 'Suchen',
                'common.filter': 'Filter',
                'common.sort': 'Sortieren',
                'common.close': 'Schließen',
                'common.save': 'Speichern',
                'common.cancel': 'Abbrechen',
                
                // Footer
                'footer.description': 'Entdecken Sie die besten KI-Tools und steigern Sie Ihre Produktivität. Mit Sora 2 und anderen modernsten KI-Technologien.',
                'footer.categories.title': 'Tool-Kategorien',
                'footer.popular.title': 'Beliebte Tools',
                'footer.about.title': 'Über uns',
                'footer.about.company': 'Über AIToolshed',
                'footer.contact': 'Kontaktieren Sie uns',
                'footer.privacy': 'Datenschutzrichtlinie',
                'footer.terms': 'Nutzungsbedingungen',
                'footer.copyright': '© 2024 AIToolshed.io. Mit Sora 2 und KI-Tools. Alle Rechte vorbehalten.',
                
                // Notifications
                'notification.bookmarked': 'Zu Lesezeichen hinzugefügt',
                'notification.bookmark-removed': 'Aus Lesezeichen entfernt',
                'notification.link-copied': 'Link in die Zwischenablage kopiert',
                
                // Breadcrumb
                'breadcrumb.home': 'Startseite',
                'breadcrumb.directory': 'Tool-Verzeichnis',
                'breadcrumb.video': 'Video & Animation'
            },
            fr: {
                // Navigation
                'nav.home': 'Accueil',
                'nav.directory': 'Répertoire d\'outils',
                'nav.categories': 'Catégories',
                'nav.about': 'À propos',
                'nav.search.placeholder': 'Rechercher des outils IA...',
                
                // Homepage
                'hero.title': 'Découvrez les meilleurs outils IA',
                'hero.subtitle': 'Avec Sora 2 et les technologies IA de pointe',
                'hero.description': 'AIToolshed.io est votre destination ultime pour découvrir les outils IA les plus innovants. De la génération vidéo révolutionnaire de Sora 2 aux dernières technologies IA d\'image, audio et texte.',
                'hero.cta': 'Explorer Sora 2',
                'hero.browse': 'Parcourir tous les outils',
                
                'featured.title': 'Outils IA en vedette',
                'featured.subtitle': 'Outils sélectionnés incluant le révolutionnaire Sora 2',
                
                'latest.title': 'Derniers ajouts',
                'latest.subtitle': 'Nouveaux outils IA ajoutés à notre collection',
                
                'categories.title': 'Catégories populaires',
                'categories.subtitle': 'Explorer les outils IA par catégorie',
                'categories.video': 'Vidéo et Animation',
                'categories.image': 'Image et Design',
                'categories.audio': 'Audio et Musique',
                'categories.text': 'Texte et Écriture',
                
                // Directory Page
                'directory.title': 'Répertoire d\'outils IA',
                'directory.subtitle': 'Collection complète d\'outils IA avec filtrage avancé',
                'directory.filters.category': 'Catégorie',
                'directory.filters.pricing': 'Tarification',
                'directory.filters.sort': 'Trier par',
                'directory.filters.all': 'Tous',
                'directory.filters.featured': 'En vedette',
                'directory.filters.newest': 'Plus récents',
                'directory.filters.name': 'Nom',
                'directory.filters.free': 'Gratuit',
                'directory.filters.freemium': 'Freemium',
                'directory.filters.premium': 'Premium',
                'directory.view.grid': 'Vue grille',
                'directory.view.list': 'Vue liste',
                'directory.count': 'outils',
                'directory.no-results': 'Aucun outil trouvé correspondant à vos critères',
                'directory.try-different': 'Essayez d\'ajuster vos filtres ou termes de recherche',
                
                // Tool Detail Page
                'tool.try': 'Essayer maintenant',
                'tool.bookmark': 'Marquer',
                'tool.share': 'Partager',
                'tool.rating': 'note',
                'tool.reviews': 'avis',
                'tool.users': 'utilisateurs',
                'tool.released': 'Publié',
                'tool.description.title': 'Description de l\'outil',
                'tool.features.title': 'Fonctionnalités clés',
                'tool.use-cases.title': 'Cas d\'usage',
                'tool.pricing.title': 'Plans tarifaires',
                'tool.quick-info.title': 'Infos rapides',
                'tool.related.title': 'Outils connexes',
                'tool.tags.title': 'Tags',
                'tool.developer': 'Développeur',
                'tool.release-date': 'Date de sortie',
                'tool.languages': 'Langues',
                'tool.platform': 'Plateforme',
                'tool.api': 'API',
                'tool.supported': 'Pris en charge',
                'tool.web': 'Web',
                'tool.multilingual': 'Multilingue',
                
                // Pricing
                'pricing.free': 'Gratuit',
                'pricing.professional': 'Professionnel',
                'pricing.enterprise': 'Entreprise',
                'pricing.month': '/mois',
                'pricing.custom': 'Personnalisé',
                'pricing.get-started': 'Commencer',
                'pricing.upgrade': 'Mettre à niveau',
                'pricing.contact': 'Nous contacter',
                'pricing.popular': 'Le plus populaire',
                
                // Common
                'common.loading': 'Chargement...',
                'common.error': 'Erreur',
                'common.success': 'Succès',
                'common.try-now': 'Essayer maintenant',
                'common.learn-more': 'En savoir plus',
                'common.view-all': 'Voir tout',
                'common.search': 'Rechercher',
                'common.filter': 'Filtrer',
                'common.sort': 'Trier',
                'common.close': 'Fermer',
                'common.save': 'Enregistrer',
                'common.cancel': 'Annuler',
                
                // Footer
                'footer.description': 'Découvrez les meilleurs outils IA et boostez votre productivité. Avec Sora 2 et d\'autres technologies IA de pointe.',
                'footer.categories.title': 'Catégories d\'outils',
                'footer.popular.title': 'Outils populaires',
                'footer.about.title': 'À propos',
                'footer.about.company': 'À propos d\'AIToolshed',
                'footer.contact': 'Nous contacter',
                'footer.privacy': 'Politique de confidentialité',
                'footer.terms': 'Conditions d\'utilisation',
                'footer.copyright': '© 2024 AIToolshed.io. Avec Sora 2 et les outils IA. Tous droits réservés.',
                
                // Notifications
                'notification.bookmarked': 'Ajouté aux favoris',
                'notification.bookmark-removed': 'Retiré des favoris',
                'notification.link-copied': 'Lien copié dans le presse-papiers',
                
                // Breadcrumb
                'breadcrumb.home': 'Accueil',
                'breadcrumb.directory': 'Répertoire d\'outils',
                'breadcrumb.video': 'Vidéo et Animation'
            }
        };
        
        this.init();
    }
    
    init() {
        // Load saved language or default to English
        this.currentLanguage = this.loadSavedLanguage() || 'en';
        this.createLanguageSwitcher();
        this.translatePage();
    }
    
    loadSavedLanguage() {
        return localStorage.getItem('aitoolshed_language');
    }
    
    detectBrowserLanguage() {
        const browserLang = navigator.language.split('-')[0];
        return this.supportedLanguages.includes(browserLang) ? browserLang : 'en';
    }
    
    createLanguageSwitcher() {
        const languageNames = {
            'en': 'English',
            'zh': '中文',
            'de': 'Deutsch',
            'fr': 'Français'
        };
        
        const languageFlags = {
            'en': '🇺🇸',
            'zh': '🇨🇳',
            'de': '🇩🇪',
            'fr': '🇫🇷'
        };
        
        // Create language switcher HTML
        const switcherHTML = `
            <div class="language-switcher">
                <button class="language-current" id="languageCurrent">
                    <span class="flag">${languageFlags[this.currentLanguage]}</span>
                    <span class="name">${languageNames[this.currentLanguage]}</span>
                    <i class="fas fa-chevron-down"></i>
                </button>
                <div class="language-dropdown" id="languageDropdown">
                    ${this.supportedLanguages.map(lang => `
                        <button class="language-option ${lang === this.currentLanguage ? 'active' : ''}" 
                                data-lang="${lang}">
                            <span class="flag">${languageFlags[lang]}</span>
                            <span class="name">${languageNames[lang]}</span>
                        </button>
                    `).join('')}
                </div>
            </div>
        `;
        
        // Insert into navigation
        const navMenu = document.querySelector('.nav-menu');
        if (navMenu) {
            navMenu.insertAdjacentHTML('afterend', switcherHTML);
            this.setupLanguageSwitcherEvents();
        }
    }
    
    setupLanguageSwitcherEvents() {
        const currentBtn = document.getElementById('languageCurrent');
        const dropdown = document.getElementById('languageDropdown');
        const options = document.querySelectorAll('.language-option');
        
        if (currentBtn && dropdown) {
            currentBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                dropdown.classList.toggle('show');
            });
            
            // Close dropdown when clicking outside
            document.addEventListener('click', () => {
                dropdown.classList.remove('show');
            });
            
            // Handle language selection
            options.forEach(option => {
                option.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const selectedLang = option.dataset.lang;
                    this.changeLanguage(selectedLang);
                    dropdown.classList.remove('show');
                });
            });
        }
    }
    
    changeLanguage(lang) {
        if (this.supportedLanguages.includes(lang)) {
            this.currentLanguage = lang;
            localStorage.setItem('aitoolshed_language', lang);
            this.translatePage();
            this.updateLanguageSwitcher();
            
            // Track language change
            if (typeof gtag !== 'undefined') {
                gtag('event', 'language_change', {
                    'new_language': lang,
                    'page': window.location.pathname
                });
            }
        }
    }
    
    updateLanguageSwitcher() {
        const languageNames = {
            'en': 'English',
            'zh': '中文',
            'de': 'Deutsch',
            'fr': 'Français'
        };
        
        const languageFlags = {
            'en': '🇺🇸',
            'zh': '🇨🇳',
            'de': '🇩🇪',
            'fr': '🇫🇷'
        };
        
        const currentBtn = document.getElementById('languageCurrent');
        if (currentBtn) {
            currentBtn.innerHTML = `
                <span class="flag">${languageFlags[this.currentLanguage]}</span>
                <span class="name">${languageNames[this.currentLanguage]}</span>
                <i class="fas fa-chevron-down"></i>
            `;
        }
        
        // Update active state in dropdown
        document.querySelectorAll('.language-option').forEach(option => {
            option.classList.toggle('active', option.dataset.lang === this.currentLanguage);
        });
    }
    
    translatePage() {
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = this.getTranslation(key);
            
            if (translation) {
                if (element.tagName === 'INPUT' && element.type === 'text') {
                    element.placeholder = translation;
                } else {
                    element.textContent = translation;
                }
            }
        });
        
        // Update document title and meta tags
        this.updateMetaTags();
    }
    
    updateMetaTags() {
        const titleMappings = {
            'index.html': {
                'en': 'AIToolshed.io - Discover the Best AI Tools | Featuring Sora 2',
                'zh': 'AIToolshed.io - 發現最佳 AI 工具 | 精選 Sora 2',
                'de': 'AIToolshed.io - Entdecken Sie die besten KI-Tools | Mit Sora 2',
                'fr': 'AIToolshed.io - Découvrez les meilleurs outils IA | Avec Sora 2'
            },
            'directory.html': {
                'en': 'AI Tool Directory | AIToolshed.io - Comprehensive AI Tools Collection',
                'zh': 'AI 工具目錄 | AIToolshed.io - 全面的 AI 工具收藏',
                'de': 'KI-Tool-Verzeichnis | AIToolshed.io - Umfassende KI-Tools-Sammlung',
                'fr': 'Répertoire d\'outils IA | AIToolshed.io - Collection complète d\'outils IA'
            },
            'tool-detail.html': {
                'en': 'Sora 2 - AI Video Generation Tool | AIToolshed.io',
                'zh': 'Sora 2 - AI 影片生成工具 | AIToolshed.io',
                'de': 'Sora 2 - KI-Videogenerierungstool | AIToolshed.io',
                'fr': 'Sora 2 - Outil de génération vidéo IA | AIToolshed.io'
            }
        };
        
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const pageTitle = titleMappings[currentPage];
        
        if (pageTitle && pageTitle[this.currentLanguage]) {
            document.title = pageTitle[this.currentLanguage];
        }
        
        // Update meta description
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            const descriptions = {
                'index.html': {
                    'en': 'Discover the best AI tools including Sora 2. AIToolshed.io features cutting-edge AI technologies for video, image, audio, and text generation.',
                    'zh': '發現包括 Sora 2 在內的最佳 AI 工具。AIToolshed.io 精選用於影片、圖像、音訊和文字生成的前沿 AI 技術。',
                    'de': 'Entdecken Sie die besten KI-Tools einschließlich Sora 2. AIToolshed.io bietet modernste KI-Technologien für Video-, Bild-, Audio- und Textgenerierung.',
                    'fr': 'Découvrez les meilleurs outils IA incluant Sora 2. AIToolshed.io présente des technologies IA de pointe pour la génération vidéo, image, audio et texte.'
                }
            };
            
            const pageDescriptions = descriptions[currentPage];
            if (pageDescriptions && pageDescriptions[this.currentLanguage]) {
                metaDescription.content = pageDescriptions[this.currentLanguage];
            }
        }
    }
    
    getTranslation(key) {
        return this.translations[this.currentLanguage]?.[key] || this.translations['en']?.[key] || key;
    }
    
    // Public method to get translation (for use in other scripts)
    t(key) {
        return this.getTranslation(key);
    }
}

// Initialize i18n system
let i18n;
document.addEventListener('DOMContentLoaded', () => {
    i18n = new I18nManager();
});

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = I18nManager;
}