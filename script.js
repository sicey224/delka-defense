document.addEventListener('DOMContentLoaded', () => {
    // Navbar scroll effect
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Carousel logic
    const carousel = document.querySelector('.showcase-carousel');
    const prevBtn = document.querySelector('.nav-btn.prev');
    const nextBtn = document.querySelector('.nav-btn.next');
    const cards = document.querySelectorAll('.project-card');
    
    if (cards.length > 2) {
        let currentIndex = 0;
        const maxIndex = cards.length - 2; // Show 2 cards at a time

        nextBtn.addEventListener('click', () => {
            if (currentIndex < maxIndex) {
                currentIndex++;
                updateCarousel();
            }
        });

        prevBtn.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                updateCarousel();
            }
        });

        function updateCarousel() {
            // Calculate width of a card plus its gap
            // Using getBoundingClientRect for accuracy
            const cardWidth = cards[0].getBoundingClientRect().width;
            const gap = 24; // from CSS gap: 24px
            const offset = currentIndex * (cardWidth + gap);
            carousel.style.transform = `translateX(-${offset}px)`;
        }

        // Handle resize
        window.addEventListener('resize', () => {
            currentIndex = 0;
            carousel.style.transform = 'translateX(0)';
        });
    }

    // 2.5D Parallax effect for Drone
    const hero = document.querySelector('.hero');
    const drone = document.querySelector('.hero-drone');
    
    if (hero && drone) {
        hero.addEventListener('mousemove', (e) => {
            // Get mouse position relative to hero section
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;
            
            // Calculate movement (the multiplier changes the intensity)
            const moveX = (x - 0.5) * -40; // Negative for opposite direction
            const moveY = (y - 0.5) * -30;
            
            // Apply transform. We use margin or translate inside the element to not break the CSS animation
            // Since the CSS animation uses transform: translateY(-50%), changing transform here conflicts.
            // A better way is changing margin or left/top slightly.
            drone.style.marginLeft = `${moveX}px`;
            drone.style.marginTop = `${moveY}px`;
        });
        
        hero.addEventListener('mouseleave', () => {
            drone.style.marginLeft = '0px';
            drone.style.marginTop = '0px';
            drone.style.transition = 'margin 0.5s ease-out';
        });
        
        hero.addEventListener('mouseenter', () => {
            drone.style.transition = 'margin 0.1s ease-out';
        });
    }
});
