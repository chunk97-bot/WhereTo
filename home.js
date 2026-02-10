// ===== HOME PAGE SPLASH HANDLER =====

class HomeSplashScreen {
    constructor() {
        this.splash = document.getElementById('splashScreen');
        this.homeContainer = document.getElementById('homeContainer');
        this.slider = document.getElementById('planeSlider');
        this.track = document.getElementById('slideTrack');
        
        this.isDragging = false;
        this.startX = 0;
        this.currentX = 0;
        
        // Check if splash was already shown in this session
        if (this.hasSeenSplash()) {
            this.skipSplash();
        } else {
            this.init();
        }
    }
    
    hasSeenSplash() {
        return sessionStorage.getItem('whereToSplashShown') === 'true';
    }
    
    markSplashAsShown() {
        sessionStorage.setItem('whereToSplashShown', 'true');
    }
    
    skipSplash() {
        if (this.splash) {
            this.splash.style.display = 'none';
        }
        if (this.homeContainer) {
            this.homeContainer.classList.add('visible');
        }
    }
    
    init() {
        if (!this.slider || !this.track) return;
        
        this.trackWidth = this.track.offsetWidth;
        this.sliderWidth = this.slider.offsetWidth;
        this.maxSlide = this.trackWidth - this.sliderWidth - 10;
        
        // Mouse events
        this.slider.addEventListener('mousedown', (e) => this.startDrag(e));
        document.addEventListener('mousemove', (e) => this.drag(e));
        document.addEventListener('mouseup', () => this.endDrag());
        
        // Touch events
        this.slider.addEventListener('touchstart', (e) => this.startDrag(e));
        document.addEventListener('touchmove', (e) => this.drag(e));
        document.addEventListener('touchend', () => this.endDrag());
    }
    
    startDrag(e) {
        this.isDragging = true;
        this.startX = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX;
        this.slider.style.transition = 'none';
    }
    
    drag(e) {
        if (!this.isDragging) return;
        e.preventDefault();
        
        const clientX = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX;
        const deltaX = clientX - this.startX;
        
        this.currentX = Math.max(0, Math.min(deltaX, this.maxSlide));
        this.slider.style.transform = `translateX(${this.currentX}px)`;
        
        // Change appearance as dragging progresses
        const progress = this.currentX / this.maxSlide;
        this.track.style.background = `linear-gradient(to right, rgba(255,255,255,0.3) ${progress * 100}%, rgba(255,255,255,0.1) ${progress * 100}%)`;
    }
    
    endDrag() {
        if (!this.isDragging) return;
        this.isDragging = false;
        
        const progress = this.currentX / this.maxSlide;
        
        if (progress > 0.8) {
            // Success - complete the slide
            this.slider.style.transition = 'transform 0.3s ease';
            this.slider.style.transform = `translateX(${this.maxSlide}px)`;
            
            setTimeout(() => this.completeSplash(), 300);
        } else {
            // Reset
            this.slider.style.transition = 'transform 0.3s ease';
            this.slider.style.transform = 'translateX(0)';
            this.track.style.background = 'rgba(255,255,255,0.1)';
        }
        
        this.currentX = 0;
    }
    
    completeSplash() {
        // Mark as shown
        this.markSplashAsShown();
        
        // Animate splash out
        this.splash.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        this.splash.style.opacity = '0';
        this.splash.style.transform = 'scale(1.1)';
        
        setTimeout(() => {
            this.splash.style.display = 'none';
            this.homeContainer.classList.add('visible');
            
            // Add entrance animation
            this.homeContainer.style.opacity = '0';
            this.homeContainer.style.transform = 'translateY(20px)';
            
            requestAnimationFrame(() => {
                this.homeContainer.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                this.homeContainer.style.opacity = '1';
                this.homeContainer.style.transform = 'translateY(0)';
            });
        }, 500);
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new HomeSplashScreen();
});
