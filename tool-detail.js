// Tool Detail Page JavaScript
class ToolDetailManager {
    constructor() {
        this.toolData = {
            id: 1,
            name: "Sora 2",
            description: "OpenAI 旗艦級文生影片模型，支援同步對話與音效生成，為影片創作帶來革命性的變化",
            category: "video",
            pricing: "freemium",
            url: "https://openai.com/index/sora-2/",
            tags: ["影片生成", "OpenAI", "熱門", "對話", "音效"],
            featured: true,
            dateAdded: "2024-12-20",
            rating: 4.8,
            reviewCount: 1250,
            userCount: "50萬+",
            developer: "OpenAI",
            releaseDate: "2024年12月",
            languages: "多語言",
            platform: "網頁版",
            apiSupport: true
        };
        
        this.isBookmarked = false;
        this.init();
    }
    
    init() {
        this.setupEventListeners();
        this.loadBookmarkStatus();
        this.setupAnimations();
        this.trackPageView();
        this.setupSEOTracking();
    }
    
    setupEventListeners() {
        // Try Tool Button
        const tryToolBtn = document.getElementById('tryToolBtn');
        if (tryToolBtn) {
            tryToolBtn.addEventListener('click', (e) => {
                this.trackToolClick('try_tool', 'header_cta');
                // Add a small delay to ensure tracking completes
                setTimeout(() => {
                    window.open(this.toolData.url, '_blank');
                }, 100);
                e.preventDefault();
            });
        }
        
        // Bookmark Button
        const bookmarkBtn = document.getElementById('bookmarkBtn');
        if (bookmarkBtn) {
            bookmarkBtn.addEventListener('click', () => {
                this.toggleBookmark();
            });
        }
        
        // Share Button
        const shareBtn = document.getElementById('shareBtn');
        if (shareBtn) {
            shareBtn.addEventListener('click', () => {
                this.shareToolDetail();
            });
        }
        
        // Pricing buttons
        document.querySelectorAll('.pricing-btn').forEach((btn, index) => {
            btn.addEventListener('click', () => {
                const plans = ['free', 'professional', 'enterprise'];
                this.trackPricingClick(plans[index]);
            });
        });
        
        // Related tools tracking
        document.querySelectorAll('.related-tool').forEach(tool => {
            tool.addEventListener('click', (e) => {
                const toolName = e.target.textContent.trim();
                this.trackRelatedToolClick(toolName);
            });
        });
        
        // Tag clicks
        document.querySelectorAll('.tool-tags-sidebar .tag').forEach(tag => {
            tag.addEventListener('click', () => {
                const tagName = tag.textContent;
                this.searchByTag(tagName);
            });
        });
        
        // Navigation search
        const navSearchInput = document.getElementById('navSearchInput');
        if (navSearchInput) {
            navSearchInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    const query = e.target.value.trim();
                    if (query) {
                        this.performSearch(query);
                    }
                }
            });
        }
    }
    
    toggleBookmark() {
        this.isBookmarked = !this.isBookmarked;
        const bookmarkBtn = document.getElementById('bookmarkBtn');
        const icon = bookmarkBtn.querySelector('i');
        
        if (this.isBookmarked) {
            icon.className = 'fas fa-bookmark';
            bookmarkBtn.style.background = '#3b82f6';
            bookmarkBtn.style.color = 'white';
            this.showNotification('已加入收藏', 'success');
            this.trackBookmark('add');
        } else {
            icon.className = 'far fa-bookmark';
            bookmarkBtn.style.background = 'rgba(255, 255, 255, 0.2)';
            bookmarkBtn.style.color = 'white';
            this.showNotification('已移除收藏', 'info');
            this.trackBookmark('remove');
        }
        
        // Save to localStorage
        this.saveBookmarkStatus();
    }
    
    shareToolDetail() {
        const shareData = {
            title: `${this.toolData.name} - AIToolshed.io`,
            text: this.toolData.description,
            url: window.location.href
        };
        
        if (navigator.share) {
            navigator.share(shareData).then(() => {
                this.trackShare('native');
            }).catch(() => {
                this.fallbackShare();
            });
        } else {
            this.fallbackShare();
        }
    }
    
    fallbackShare() {
        // Copy URL to clipboard
        navigator.clipboard.writeText(window.location.href).then(() => {
            this.showNotification('連結已複製到剪貼簿', 'success');
            this.trackShare('clipboard');
        }).catch(() => {
            // Fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = window.location.href;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            this.showNotification('連結已複製到剪貼簿', 'success');
            this.trackShare('clipboard_fallback');
        });
    }
    
    searchByTag(tagName) {
        this.trackTagClick(tagName);
        // Redirect to directory with tag filter
        window.location.href = `directory.html?search=${encodeURIComponent(tagName)}`;
    }
    
    performSearch(query) {
        this.trackSearch(query, 'tool_detail_nav');
        window.location.href = `directory.html?search=${encodeURIComponent(query)}`;
    }
    
    loadBookmarkStatus() {
        const bookmarks = JSON.parse(localStorage.getItem('aitoolshed_bookmarks') || '[]');
        this.isBookmarked = bookmarks.includes(this.toolData.id);
        
        if (this.isBookmarked) {
            const bookmarkBtn = document.getElementById('bookmarkBtn');
            const icon = bookmarkBtn.querySelector('i');
            icon.className = 'fas fa-bookmark';
            bookmarkBtn.style.background = '#3b82f6';
            bookmarkBtn.style.color = 'white';
        }
    }
    
    saveBookmarkStatus() {
        let bookmarks = JSON.parse(localStorage.getItem('aitoolshed_bookmarks') || '[]');
        
        if (this.isBookmarked) {
            if (!bookmarks.includes(this.toolData.id)) {
                bookmarks.push(this.toolData.id);
            }
        } else {
            bookmarks = bookmarks.filter(id => id !== this.toolData.id);
        }
        
        localStorage.setItem('aitoolshed_bookmarks', JSON.stringify(bookmarks));
    }
    
    setupAnimations() {
        // Intersection Observer for scroll animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('loaded');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        
        // Observe elements for animation
        document.querySelectorAll('.content-section, .sidebar-card, .feature-card, .pricing-card').forEach(el => {
            el.classList.add('loading');
            observer.observe(el);
        });
        
        // Stagger animation for feature cards
        document.querySelectorAll('.feature-card').forEach((card, index) => {
            setTimeout(() => {
                card.style.transitionDelay = `${index * 0.1}s`;
            }, 100);
        });
    }
    
    showNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-info-circle'}"></i>
                <span>${message}</span>
            </div>
        `;
        
        // Add styles
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'success' ? '#10b981' : '#3b82f6'};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 8px;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
            z-index: 1000;
            transform: translateX(100%);
            transition: transform 0.3s ease;
        `;
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Remove after 3 seconds
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }
    
    // Analytics and Tracking Methods
    trackPageView() {
        if (typeof gtag !== 'undefined') {
            gtag('event', 'page_view', {
                'page_title': document.title,
                'page_location': window.location.href,
                'tool_name': this.toolData.name,
                'tool_category': this.toolData.category,
                'tool_pricing': this.toolData.pricing
            });
        }
        
        console.log(`Tool Detail Page View: ${this.toolData.name}`);
    }
    
    trackToolClick(action, location) {
        if (typeof gtag !== 'undefined') {
            gtag('event', 'tool_interaction', {
                'tool_name': this.toolData.name,
                'action': action,
                'location': location,
                'tool_url': this.toolData.url
            });
        }
        
        console.log(`Tool Click: ${this.toolData.name} - ${action} from ${location}`);
    }
    
    trackBookmark(action) {
        if (typeof gtag !== 'undefined') {
            gtag('event', 'bookmark', {
                'tool_name': this.toolData.name,
                'action': action
            });
        }
        
        console.log(`Bookmark ${action}: ${this.toolData.name}`);
    }
    
    trackShare(method) {
        if (typeof gtag !== 'undefined') {
            gtag('event', 'share', {
                'tool_name': this.toolData.name,
                'method': method,
                'content_type': 'tool_detail'
            });
        }
        
        console.log(`Share: ${this.toolData.name} via ${method}`);
    }
    
    trackPricingClick(plan) {
        if (typeof gtag !== 'undefined') {
            gtag('event', 'pricing_click', {
                'tool_name': this.toolData.name,
                'pricing_plan': plan
            });
        }
        
        console.log(`Pricing Click: ${this.toolData.name} - ${plan} plan`);
    }
    
    trackRelatedToolClick(toolName) {
        if (typeof gtag !== 'undefined') {
            gtag('event', 'related_tool_click', {
                'source_tool': this.toolData.name,
                'target_tool': toolName
            });
        }
        
        console.log(`Related Tool Click: ${toolName} from ${this.toolData.name}`);
    }
    
    trackTagClick(tagName) {
        if (typeof gtag !== 'undefined') {
            gtag('event', 'tag_click', {
                'tag_name': tagName,
                'source_page': 'tool_detail',
                'tool_name': this.toolData.name
            });
        }
        
        console.log(`Tag Click: ${tagName} from ${this.toolData.name} detail page`);
    }
    
    trackSearch(query, source) {
        if (typeof gtag !== 'undefined') {
            gtag('event', 'search', {
                'search_term': query,
                'source': source
            });
        }
        
        console.log(`Search: "${query}" from ${source}`);
    }
    
    setupSEOTracking() {
        // Special tracking for Sora 2 SEO optimization
        if (this.toolData.name.includes('Sora 2')) {
            // Track time spent on page
            this.startTime = Date.now();
            
            // Track scroll depth
            let maxScroll = 0;
            window.addEventListener('scroll', () => {
                const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
                if (scrollPercent > maxScroll) {
                    maxScroll = scrollPercent;
                }
            });
            
            // Track when user leaves page
            window.addEventListener('beforeunload', () => {
                const timeSpent = Math.round((Date.now() - this.startTime) / 1000);
                
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'sora2_engagement', {
                        'time_spent': timeSpent,
                        'max_scroll': maxScroll,
                        'page_type': 'tool_detail'
                    });
                }
                
                console.log(`Sora 2 Engagement: ${timeSpent}s, ${maxScroll}% scroll`);
            });
            
            // Track specific Sora 2 interactions
            document.addEventListener('click', (e) => {
                if (e.target.textContent && e.target.textContent.includes('Sora 2')) {
                    if (typeof gtag !== 'undefined') {
                        gtag('event', 'sora2_mention_click', {
                            'element_type': e.target.tagName.toLowerCase(),
                            'element_text': e.target.textContent.substring(0, 100)
                        });
                    }
                }
            });
        }
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ToolDetailManager();
    
    // Add smooth scrolling for anchor links
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
    
    // Add loading states for external links
    document.querySelectorAll('a[target="_blank"]').forEach(link => {
        link.addEventListener('click', function() {
            const originalText = this.innerHTML;
            this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> 載入中...';
            
            setTimeout(() => {
                this.innerHTML = originalText;
            }, 2000);
        });
    });
    
    // Lazy load images (if any are added later)
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
    
    // Add keyboard navigation support
    document.addEventListener('keydown', (e) => {
        // ESC to close any modals or overlays
        if (e.key === 'Escape') {
            document.querySelectorAll('.modal, .overlay').forEach(el => {
                el.style.display = 'none';
            });
        }
        
        // Ctrl/Cmd + K for search
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            const searchInput = document.getElementById('navSearchInput');
            if (searchInput) {
                searchInput.focus();
            }
        }
    });
});