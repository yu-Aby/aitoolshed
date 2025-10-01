// Directory page functionality
class DirectoryManager {
    constructor() {
        this.tools = [];
        this.filteredTools = [];
        this.currentView = 'grid';
        this.filters = {
            category: 'all',
            pricing: 'all',
            search: ''
        };
        this.sortBy = 'featured';
        
        this.init();
    }
    
    init() {
        this.loadTools();
        this.setupEventListeners();
        this.renderTools();
        this.updateStats();
    }
    
    loadTools() {
        // Import tools data from main script
        this.tools = [
            {
                id: 1,
                name: "Sora 2",
                description: "OpenAI 旗艦級文生影片模型，支援同步對話與音效生成，為影片創作帶來革命性的變化",
                category: "video",
                pricing: "freemium",
                url: "https://openai.com/index/sora-2/",
                tags: ["影片生成", "OpenAI", "熱門", "對話", "音效"],
                featured: true,
                dateAdded: "2024-12-20",
                keyFeatures: [
                    "高品質影片生成",
                    "同步音效生成", 
                    "對話式互動",
                    "多種影片風格",
                    "實時預覽"
                ]
            },
            {
                id: 2,
                name: "Pika Labs 2.0",
                description: "新一代 AI 影片生成平台，創造令人驚艷的動態內容，支援多種影片風格和效果",
                category: "video",
                pricing: "freemium",
                url: "https://pika.art/",
                tags: ["影片生成", "動畫", "創意"],
                featured: false,
                dateAdded: "2024-12-18",
                keyFeatures: [
                    "多風格影片生成",
                    "動畫效果豐富",
                    "用戶友好界面",
                    "快速渲染"
                ]
            },
            {
                id: 3,
                name: "Viggle",
                description: "AI 驅動的角色動畫和動作生成工具，讓靜態角色動起來",
                category: "video",
                pricing: "free",
                url: "https://www.viggle.ai/",
                tags: ["動畫", "角色", "動作生成"],
                featured: false,
                dateAdded: "2024-12-15",
                keyFeatures: [
                    "角色動畫生成",
                    "動作捕捉",
                    "免費使用",
                    "簡單操作"
                ]
            },
            {
                id: 4,
                name: "Midjourney V7",
                description: "最先進的 AI 圖像生成工具，創造令人驚艷的視覺作品，支援多種藝術風格",
                category: "image",
                pricing: "premium",
                url: "https://www.midjourney.com/",
                tags: ["圖像生成", "藝術", "創意設計"],
                featured: true,
                dateAdded: "2024-12-10",
                keyFeatures: [
                    "高品質圖像生成",
                    "多種藝術風格",
                    "專業級輸出",
                    "社群功能"
                ]
            },
            {
                id: 5,
                name: "Stable Diffusion 4.0",
                description: "開源 AI 圖像生成模型，提供強大的創作自由度和自定義選項",
                category: "image",
                pricing: "free",
                url: "https://stability.ai/",
                tags: ["圖像生成", "開源", "自定義"],
                featured: false,
                dateAdded: "2024-12-12",
                keyFeatures: [
                    "開源免費",
                    "高度可定制",
                    "本地部署",
                    "活躍社群"
                ]
            },
            {
                id: 6,
                name: "Magnific AI",
                description: "AI 圖像放大和增強工具，提升圖片質量和解析度，保持細節清晰",
                category: "image",
                pricing: "premium",
                url: "https://magnific.ai/",
                tags: ["圖像增強", "放大", "品質提升"],
                featured: false,
                dateAdded: "2024-12-15",
                keyFeatures: [
                    "智能圖像放大",
                    "細節保持",
                    "批量處理",
                    "多種增強模式"
                ]
            },
            {
                id: 7,
                name: "Krea AI",
                description: "實時 AI 圖像生成和編輯平台，提供即時預覽和調整功能",
                category: "image",
                pricing: "freemium",
                url: "https://www.krea.ai/",
                tags: ["圖像生成", "實時編輯", "即時預覽"],
                featured: false,
                dateAdded: "2024-12-08",
                keyFeatures: [
                    "實時生成",
                    "即時預覽",
                    "直觀編輯",
                    "快速迭代"
                ]
            },
            {
                id: 8,
                name: "Suno V3",
                description: "AI 音樂創作平台，輕鬆生成專業級音樂作品，支援多種音樂風格",
                category: "audio",
                pricing: "freemium",
                url: "https://www.suno.ai/",
                tags: ["音樂生成", "創作", "多風格"],
                featured: true,
                dateAdded: "2024-12-05",
                keyFeatures: [
                    "多風格音樂生成",
                    "歌詞創作",
                    "專業品質",
                    "簡單操作"
                ]
            },
            {
                id: 9,
                name: "Udio AI",
                description: "AI 音樂創作工具，支援多種音樂風格和樂器，創造獨特的音樂作品",
                category: "audio",
                pricing: "freemium",
                url: "https://www.udio.com/",
                tags: ["音樂生成", "多風格", "樂器"],
                featured: false,
                dateAdded: "2024-12-03",
                keyFeatures: [
                    "多樂器支援",
                    "風格多樣",
                    "高品質輸出",
                    "創意工具"
                ]
            },
            {
                id: 10,
                name: "ElevenLabs",
                description: "AI 語音合成和克隆技術，創造逼真的人聲，支援多語言和情感表達",
                category: "audio",
                pricing: "freemium",
                url: "https://elevenlabs.io/",
                tags: ["語音合成", "聲音克隆", "多語言"],
                featured: false,
                dateAdded: "2024-11-28",
                keyFeatures: [
                    "逼真語音合成",
                    "聲音克隆",
                    "多語言支援",
                    "情感表達"
                ]
            },
            {
                id: 11,
                name: "ChatGPT-5",
                description: "OpenAI 最新對話 AI，提供更智能的文字創作和問答服務，理解能力大幅提升",
                category: "text",
                pricing: "freemium",
                url: "https://chat.openai.com/",
                tags: ["對話AI", "文字創作", "OpenAI", "智能問答"],
                featured: true,
                dateAdded: "2024-12-01",
                keyFeatures: [
                    "智能對話",
                    "文字創作",
                    "多語言支援",
                    "上下文理解"
                ]
            },
            {
                id: 12,
                name: "Perplexity AI",
                description: "AI 搜尋引擎，提供準確的資訊檢索和問答服務，結合搜尋和 AI 的優勢",
                category: "text",
                pricing: "freemium",
                url: "https://www.perplexity.ai/",
                tags: ["搜尋", "問答", "資訊檢索"],
                featured: false,
                dateAdded: "2024-11-25",
                keyFeatures: [
                    "智能搜尋",
                    "準確問答",
                    "來源引用",
                    "實時資訊"
                ]
            },
            {
                id: 13,
                name: "Gamma",
                description: "AI 驅動的簡報和文檔創作平台，快速生成專業的演示文稿和文檔",
                category: "text",
                pricing: "freemium",
                url: "https://gamma.app/",
                tags: ["簡報", "文檔創作", "演示"],
                featured: false,
                dateAdded: "2024-11-20",
                keyFeatures: [
                    "智能簡報生成",
                    "專業模板",
                    "協作功能",
                    "多格式輸出"
                ]
            }
        ];
        
        this.filteredTools = [...this.tools];
    }
    
    setupEventListeners() {
        // Filter controls
        document.getElementById('categoryFilter').addEventListener('change', (e) => {
            this.filters.category = e.target.value;
            this.applyFilters();
        });
        
        document.getElementById('pricingFilter').addEventListener('change', (e) => {
            this.filters.pricing = e.target.value;
            this.applyFilters();
        });
        
        document.getElementById('sortBy').addEventListener('change', (e) => {
            this.sortBy = e.target.value;
            this.applyFilters();
        });
        
        // Search
        document.getElementById('searchInput').addEventListener('input', (e) => {
            this.filters.search = e.target.value.toLowerCase();
            this.applyFilters();
        });
        
        // View toggle
        document.querySelectorAll('.view-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                this.currentView = e.target.dataset.view;
                this.renderTools();
            });
        });
    }
    
    applyFilters() {
        this.filteredTools = this.tools.filter(tool => {
            // Category filter
            if (this.filters.category !== 'all' && tool.category !== this.filters.category) {
                return false;
            }
            
            // Pricing filter
            if (this.filters.pricing !== 'all' && tool.pricing !== this.filters.pricing) {
                return false;
            }
            
            // Search filter
            if (this.filters.search) {
                const searchTerm = this.filters.search;
                return tool.name.toLowerCase().includes(searchTerm) ||
                       tool.description.toLowerCase().includes(searchTerm) ||
                       tool.tags.some(tag => tag.toLowerCase().includes(searchTerm));
            }
            
            return true;
        });
        
        this.sortTools();
        this.renderTools();
        this.updateStats();
    }
    
    sortTools() {
        switch (this.sortBy) {
            case 'featured':
                this.filteredTools.sort((a, b) => {
                    if (a.featured && !b.featured) return -1;
                    if (!a.featured && b.featured) return 1;
                    return new Date(b.dateAdded) - new Date(a.dateAdded);
                });
                break;
            case 'newest':
                this.filteredTools.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
                break;
            case 'name':
                this.filteredTools.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case 'category':
                this.filteredTools.sort((a, b) => a.category.localeCompare(b.category));
                break;
        }
    }
    
    renderTools() {
        const container = document.getElementById('toolsContainer');
        const noResults = document.getElementById('noResults');
        
        if (this.filteredTools.length === 0) {
            container.style.display = 'none';
            noResults.style.display = 'block';
            return;
        }
        
        container.style.display = this.currentView === 'grid' ? 'grid' : 'flex';
        container.className = this.currentView === 'grid' ? 'tools-grid' : 'tools-list';
        noResults.style.display = 'none';
        
        container.innerHTML = this.filteredTools.map(tool => this.createToolCard(tool)).join('');
        
        // Add click tracking
        container.querySelectorAll('.tool-link').forEach(link => {
            link.addEventListener('click', (e) => {
                const toolName = e.target.closest('.tool-card').querySelector('h3').textContent;
                this.trackToolClick(toolName, link.href);
            });
        });
    }
    
    createToolCard(tool) {
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
        
        const cardClass = this.currentView === 'list' ? 'tool-card list-view' : 'tool-card';
        const featuredClass = tool.featured ? ' featured' : '';
        
        if (this.currentView === 'list') {
            return `
                <div class="${cardClass}${featuredClass}">
                    <div class="tool-logo">
                        <i class="${categoryIcon[tool.category]}"></i>
                    </div>
                    <div class="tool-content">
                        <h3>${tool.name}</h3>
                        <p>${tool.description}</p>
                        <div class="tool-tags">
                            <span class="${pricingClass[tool.pricing]}">${pricingText[tool.pricing]}</span>
                            <span class="tag-category">${categoryText[tool.category]}</span>
                            ${tool.tags.slice(0, 2).map(tag => `<span class="tag">${tag}</span>`).join('')}
                        </div>
                    </div>
                    <div class="tool-meta">
                        <span class="date">${tool.dateAdded}</span>
                        <a href="${tool.url}" class="tool-link" target="_blank">
                            立即體驗 <i class="fas fa-external-link-alt"></i>
                        </a>
                    </div>
                </div>
            `;
        } else {
            return `
                <div class="${cardClass}${featuredClass}">
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
    }
    
    updateStats() {
        const toolCount = document.getElementById('toolCount');
        toolCount.textContent = `${this.filteredTools.length} 個工具`;
    }
    
    trackToolClick(toolName, toolUrl) {
        // Analytics tracking
        if (typeof gtag !== 'undefined') {
            gtag('event', 'tool_click', {
                'tool_name': toolName,
                'tool_url': toolUrl,
                'page': 'directory'
            });
        }
        
        console.log(`Directory - Tool clicked: ${toolName} - ${toolUrl}`);
    }
}

// Initialize directory when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new DirectoryManager();
    
    // Add animation effects
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
    
    // Observe tool cards for animation
    setTimeout(() => {
        document.querySelectorAll('.tool-card').forEach(card => {
            observer.observe(card);
        });
    }, 100);
    
    // Sora 2 special highlighting for SEO
    setTimeout(() => {
        const soraCards = document.querySelectorAll('.tool-card h3');
        soraCards.forEach(card => {
            if (card.textContent.includes('Sora 2')) {
                card.parentElement.classList.add('sora-highlight');
                
                // Add special Sora 2 tracking
                const soraLink = card.parentElement.querySelector('.tool-link');
                if (soraLink) {
                    soraLink.addEventListener('click', () => {
                        if (typeof gtag !== 'undefined') {
                            gtag('event', 'sora2_click', {
                                'source': 'directory_page',
                                'position': 'tool_card'
                            });
                        }
                    });
                }
            }
        });
    }, 500);
});