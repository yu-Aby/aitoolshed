// AI Tools Data
const aiTools = [
    {
        id: 1,
        name: "Sora 2",
        description: "OpenAI 旗艦級文生影片模型，支援同步對話與音效生成",
        category: "video",
        pricing: "freemium",
        url: "https://openai.com/index/sora-2/",
        tags: ["影片生成", "OpenAI", "熱門"],
        featured: true,
        dateAdded: "2024-12-20"
    },
    {
        id: 2,
        name: "Pika Labs 2.0",
        description: "新一代 AI 影片生成平台，創造令人驚艷的動態內容",
        category: "video",
        pricing: "freemium",
        url: "https://pika.art/",
        tags: ["影片生成", "動畫"],
        featured: false,
        dateAdded: "2024-12-18"
    },
    {
        id: 3,
        name: "Viggle",
        description: "AI 驅動的角色動畫和動作生成工具",
        category: "video",
        pricing: "free",
        url: "https://www.viggle.ai/",
        tags: ["動畫", "角色"],
        featured: false,
        dateAdded: "2024-12-15"
    },
    {
        id: 4,
        name: "Midjourney V7",
        description: "最先進的 AI 圖像生成工具，創造令人驚艷的視覺作品",
        category: "image",
        pricing: "premium",
        url: "https://www.midjourney.com/",
        tags: ["圖像生成", "藝術"],
        featured: true,
        dateAdded: "2024-12-10"
    },
    {
        id: 5,
        name: "Stable Diffusion 4.0",
        description: "開源 AI 圖像生成模型，提供強大的創作自由度",
        category: "image",
        pricing: "free",
        url: "https://stability.ai/",
        tags: ["圖像生成", "開源"],
        featured: false,
        dateAdded: "2024-12-12"
    },
    {
        id: 6,
        name: "Magnific AI",
        description: "AI 圖像放大和增強工具，提升圖片質量和解析度",
        category: "image",
        pricing: "premium",
        url: "https://magnific.ai/",
        tags: ["圖像增強", "放大"],
        featured: false,
        dateAdded: "2024-12-15"
    },
    {
        id: 7,
        name: "Krea AI",
        description: "實時 AI 圖像生成和編輯平台",
        category: "image",
        pricing: "freemium",
        url: "https://www.krea.ai/",
        tags: ["圖像生成", "實時編輯"],
        featured: false,
        dateAdded: "2024-12-08"
    },
    {
        id: 8,
        name: "Suno V3",
        description: "AI 音樂創作平台，輕鬆生成專業級音樂作品",
        category: "audio",
        pricing: "freemium",
        url: "https://www.suno.ai/",
        tags: ["音樂生成", "創作"],
        featured: true,
        dateAdded: "2024-12-05"
    },
    {
        id: 9,
        name: "Udio AI",
        description: "AI 音樂創作工具，支援多種音樂風格和樂器",
        category: "audio",
        pricing: "freemium",
        url: "https://www.udio.com/",
        tags: ["音樂生成", "多風格"],
        featured: false,
        dateAdded: "2024-12-03"
    },
    {
        id: 10,
        name: "ElevenLabs",
        description: "AI 語音合成和克隆技術，創造逼真的人聲",
        category: "audio",
        pricing: "freemium",
        url: "https://elevenlabs.io/",
        tags: ["語音合成", "聲音克隆"],
        featured: false,
        dateAdded: "2024-11-28"
    },
    {
        id: 11,
        name: "ChatGPT-5",
        description: "OpenAI 最新對話 AI，提供更智能的文字創作和問答服務",
        category: "text",
        pricing: "freemium",
        url: "https://chat.openai.com/",
        tags: ["對話AI", "文字創作", "OpenAI"],
        featured: true,
        dateAdded: "2024-12-01"
    },
    {
        id: 12,
        name: "Perplexity AI",
        description: "AI 搜尋引擎，提供準確的資訊檢索和問答服務",
        category: "text",
        pricing: "freemium",
        url: "https://www.perplexity.ai/",
        tags: ["搜尋", "問答"],
        featured: false,
        dateAdded: "2024-11-25"
    },
    {
        id: 13,
        name: "Gamma",
        description: "AI 驅動的簡報和文檔創作平台",
        category: "text",
        pricing: "freemium",
        url: "https://gamma.app/",
        tags: ["簡報", "文檔創作"],
        featured: false,
        dateAdded: "2024-11-20"
    }
];

// Search functionality
function initializeSearch() {
    const searchInputs = document.querySelectorAll('#searchInput, .hero-search input');
    
    searchInputs.forEach(input => {
        input.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            performSearch(query);
        });
    });

    // Search button functionality
    const searchBtn = document.querySelector('.search-btn');
    if (searchBtn) {
        searchBtn.addEventListener('click', () => {
            const query = document.querySelector('.hero-search input').value.toLowerCase();
            performSearch(query);
        });
    }
}

function performSearch(query) {
    if (!query) {
        showAllTools();
        return;
    }

    const filteredTools = aiTools.filter(tool => 
        tool.name.toLowerCase().includes(query) ||
        tool.description.toLowerCase().includes(query) ||
        tool.tags.some(tag => tag.toLowerCase().includes(query)) ||
        tool.category.toLowerCase().includes(query)
    );

    displaySearchResults(filteredTools, query);
}

function displaySearchResults(tools, query) {
    // Create search results section if it doesn't exist
    let searchSection = document.querySelector('.search-results');
    if (!searchSection) {
        searchSection = document.createElement('section');
        searchSection.className = 'search-results';
        searchSection.innerHTML = `
            <div class="container">
                <h2 class="section-title">搜尋結果</h2>
                <div class="search-results-grid"></div>
            </div>
        `;
        
        // Insert after hero section
        const hero = document.querySelector('.hero');
        hero.parentNode.insertBefore(searchSection, hero.nextSibling);
    }

    const resultsGrid = searchSection.querySelector('.search-results-grid');
    const sectionTitle = searchSection.querySelector('.section-title');
    
    sectionTitle.textContent = `搜尋 "${query}" 的結果 (${tools.length} 個工具)`;
    
    if (tools.length === 0) {
        resultsGrid.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <h3>未找到相關工具</h3>
                <p>請嘗試其他關鍵詞，如 "Sora 2"、"影片生成" 或 "圖像設計"</p>
            </div>
        `;
    } else {
        resultsGrid.innerHTML = tools.map(tool => createToolCard(tool)).join('');
    }

    // Hide other sections
    document.querySelectorAll('.featured-tools, .latest-additions, .popular-categories').forEach(section => {
        section.style.display = 'none';
    });
    
    searchSection.style.display = 'block';
    searchSection.scrollIntoView({ behavior: 'smooth' });
}

function showAllTools() {
    const searchSection = document.querySelector('.search-results');
    if (searchSection) {
        searchSection.style.display = 'none';
    }
    
    // Show other sections
    document.querySelectorAll('.featured-tools, .latest-additions, .popular-categories').forEach(section => {
        section.style.display = 'block';
    });
}

function createToolCard(tool) {
    const pricingClass = {
        'free': 'tag-free',
        'freemium': 'tag-freemium',
        'premium': 'tag-premium'
    };

    const pricingText = {
        'free': '免費',
        'freemium': '免費增值',
        'premium': '付費'
    };

    const categoryText = {
        'video': '影片與動畫',
        'image': '圖像與設計',
        'audio': '音訊與音樂',
        'text': '文字與寫作'
    };

    const categoryIcon = {
        'video': 'fas fa-video',
        'image': 'fas fa-image',
        'audio': 'fas fa-music',
        'text': 'fas fa-pen'
    };

    return `
        <div class="tool-card ${tool.featured ? 'featured' : ''}">
            <div class="tool-logo">
                <i class="${categoryIcon[tool.category]}"></i>
            </div>
            <h3>${tool.name}</h3>
            <p>${tool.description}</p>
            <div class="tool-tags">
                <span class="${pricingClass[tool.pricing]}">${pricingText[tool.pricing]}</span>
                <span class="tag-category">${categoryText[tool.category]}</span>
            </div>
            <a href="${tool.url}" class="tool-link" target="_blank">
                立即體驗 <i class="fas fa-external-link-alt"></i>
            </a>
        </div>
    `;
}

// Category filtering
function initializeCategoryFilters() {
    const categoryCards = document.querySelectorAll('.category-card');
    
    categoryCards.forEach(card => {
        card.addEventListener('click', () => {
            const category = card.dataset.category;
            filterByCategory(category);
        });
    });
}

function filterByCategory(category) {
    const filteredTools = aiTools.filter(tool => tool.category === category);
    
    const categoryNames = {
        'video': '影片與動畫',
        'image': '圖像與設計',
        'audio': '音訊與音樂',
        'text': '文字與寫作'
    };
    
    displaySearchResults(filteredTools, categoryNames[category]);
}

// Smooth scrolling for navigation links
function initializeSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
}

// Add loading animation
function addLoadingAnimation() {
    const toolCards = document.querySelectorAll('.tool-card');
    const categoryCards = document.querySelectorAll('.category-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '0';
                entry.target.style.transform = 'translateY(20px)';
                
                setTimeout(() => {
                    entry.target.style.transition = 'all 0.6s ease';
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, Math.random() * 200);
                
                observer.unobserve(entry.target);
            }
        });
    });
    
    [...toolCards, ...categoryCards].forEach(card => {
        observer.observe(card);
    });
}

// Add CSS for search results
function addSearchResultsStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .search-results {
            padding: 80px 0;
            background: #111111;
            display: none;
        }
        
        .search-results-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 30px;
        }
        
        .no-results {
            grid-column: 1 / -1;
            text-align: center;
            padding: 60px 20px;
            color: rgba(255, 255, 255, 0.7);
        }
        
        .no-results i {
            font-size: 4rem;
            color: rgba(0, 212, 255, 0.5);
            margin-bottom: 20px;
        }
        
        .no-results h3 {
            font-size: 1.5rem;
            margin-bottom: 15px;
            color: #ffffff;
        }
        
        .no-results p {
            font-size: 1rem;
            line-height: 1.6;
        }
    `;
    document.head.appendChild(style);
}

// SEO and Analytics tracking
function trackToolClick(toolName, toolUrl) {
    // Track tool clicks for analytics
    if (typeof gtag !== 'undefined') {
        gtag('event', 'tool_click', {
            'tool_name': toolName,
            'tool_url': toolUrl
        });
    }
    
    console.log(`Tool clicked: ${toolName} - ${toolUrl}`);
}

// Add click tracking to tool links
function initializeAnalytics() {
    document.addEventListener('click', (e) => {
        if (e.target.closest('.tool-link')) {
            const toolCard = e.target.closest('.tool-card');
            const toolName = toolCard.querySelector('h3').textContent;
            const toolUrl = e.target.closest('.tool-link').href;
            trackToolClick(toolName, toolUrl);
        }
    });
}

// Initialize homepage sections
function initializeHomepage() {
    loadFeaturedTools();
    loadLatestTools();
    loadAllTools();
    initializeAllToolsFilters();
}

// Load featured tools
function loadFeaturedTools() {
    const featuredGrid = document.getElementById('featuredTools');
    if (!featuredGrid) return;
    
    const featuredTools = aiTools.filter(tool => tool.featured);
    featuredGrid.innerHTML = featuredTools.map(tool => createToolCard(tool)).join('');
    
    // Add click tracking
    featuredGrid.querySelectorAll('.tool-card').forEach(card => {
        card.addEventListener('click', (e) => {
            e.preventDefault();
            const toolName = card.querySelector('h3').textContent;
            const toolUrl = card.getAttribute('href') || '#';
            trackToolClick(toolName, toolUrl);
            if (toolUrl !== '#') {
                window.open(toolUrl, '_blank');
            }
        });
    });
}

// Load latest tools
function loadLatestTools() {
    const latestGrid = document.getElementById('latestTools');
    if (!latestGrid) return;
    
    const latestTools = aiTools
        .sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded))
        .slice(0, 6);
    
    latestGrid.innerHTML = latestTools.map(tool => createToolCard(tool)).join('');
    
    // Add click tracking
    latestGrid.querySelectorAll('.tool-card').forEach(card => {
        card.addEventListener('click', (e) => {
            e.preventDefault();
            const toolName = card.querySelector('h3').textContent;
            const toolUrl = card.getAttribute('href') || '#';
            trackToolClick(toolName, toolUrl);
            if (toolUrl !== '#') {
                window.open(toolUrl, '_blank');
            }
        });
    });
}

// Load all tools in the new section
function loadAllTools() {
    const allToolsGrid = document.getElementById('allToolsGrid');
    if (!allToolsGrid) return;
    
    displayAllTools(aiTools);
}

// Display all tools with optional category filter
function displayAllTools(tools, category = 'all') {
    const allToolsGrid = document.getElementById('allToolsGrid');
    if (!allToolsGrid) return;
    
    const filteredTools = category === 'all' ? tools : tools.filter(tool => tool.category === category);
    
    allToolsGrid.innerHTML = filteredTools.map(tool => createToolCard(tool)).join('');
    
    // Add click tracking for all tools
    allToolsGrid.querySelectorAll('.tool-card').forEach(card => {
        card.addEventListener('click', (e) => {
            e.preventDefault();
            const toolName = card.querySelector('h3').textContent;
            const toolUrl = card.getAttribute('href') || '#';
            trackToolClick(toolName, toolUrl);
            if (toolUrl !== '#') {
                window.open(toolUrl, '_blank');
            }
        });
    });
}

// Initialize filter tabs for all tools section
function initializeAllToolsFilters() {
    const filterTabs = document.querySelectorAll('.filter-tab');
    
    filterTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs
            filterTabs.forEach(t => t.classList.remove('active'));
            // Add active class to clicked tab
            tab.classList.add('active');
            
            // Filter tools based on selected category
            const category = tab.getAttribute('data-category');
            displayAllTools(aiTools, category);
            
            // Track filter usage
            if (typeof gtag !== 'undefined') {
                gtag('event', 'filter_tools', {
                    'event_category': 'Homepage',
                    'event_label': category
                });
            }
        });
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initializeHomepage();
    initializeSearch();
    initializeCategoryFilters();
    initializeSmoothScrolling();
    addLoadingAnimation();
    addSearchResultsStyles();
    initializeAnalytics();
    
    // Add some interactive effects
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        heroTitle.addEventListener('mouseover', () => {
            heroTitle.style.transform = 'scale(1.05)';
            heroTitle.style.transition = 'transform 0.3s ease';
        });
        
        heroTitle.addEventListener('mouseout', () => {
            heroTitle.style.transform = 'scale(1)';
        });
    }
    
    // Highlight Sora 2 for SEO
    const soraCards = document.querySelectorAll('.tool-card h3');
    soraCards.forEach(card => {
        if (card.textContent.includes('Sora 2')) {
            card.parentElement.classList.add('sora-highlight');
        }
    });
});

// Add special styling for Sora 2 SEO optimization
const soraStyle = document.createElement('style');
soraStyle.textContent = `
    .sora-highlight {
        position: relative;
        overflow: hidden;
    }
    
    .sora-highlight::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(0, 212, 255, 0.2), transparent);
        animation: soraShine 3s infinite;
    }
    
    @keyframes soraShine {
        0% { left: -100%; }
        50% { left: 100%; }
        100% { left: 100%; }
    }
`;
document.head.appendChild(soraStyle);