// Home Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functions
    initTypingAnimation();
    initGreeting();
    initFloatingShapes();
    initMobileMenu();
    initProfileImage();
});

// Profile Image Function
function initProfileImage() {
    const profileImageContainer = document.getElementById('profile-image');
    const frontFace = profileImageContainer.querySelector('.profile-flip-front');
    const backFace = profileImageContainer.querySelector('.profile-flip-back');
    
    // Function to load profile images for both sides
    function loadProfileImages() {
        // Load front image
        const frontImg = new Image();
        frontImg.onload = function() {
            if (frontFace) {
                frontFace.style.backgroundImage = `url('images/profile.jpg')`;
                frontFace.style.backgroundSize = 'cover';
                frontFace.style.backgroundPosition = 'center';
                frontFace.style.backgroundRepeat = 'no-repeat';
                // Hide the icon when image loads
                const icon = frontFace.querySelector('i');
                if (icon) icon.style.display = 'none';
            }
        };
        frontImg.onerror = function() {
            console.log('Front profile image not found, keeping default icon');
        };
        frontImg.src = 'images/profile.jpg';
        
        // Load back image
        const backImg = new Image();
        backImg.onload = function() {
            if (backFace) {
                backFace.style.backgroundImage = `url('images/profileflip.jpg')`;
                backFace.style.backgroundSize = 'cover';
                backFace.style.backgroundPosition = 'center';
                backFace.style.backgroundRepeat = 'no-repeat';
                // Hide the icon when image loads
                const icon = backFace.querySelector('i');
                if (icon) icon.style.display = 'none';
            }
        };
        backImg.onerror = function() {
            console.log('Back profile image not found, keeping default icon');
        };
        backImg.src = 'images/profileflip.jpg';
    }
    
    // Load both profile images
    loadProfileImages();
}

// Greeting based on time
function initGreeting() {
    const now = new Date();
    const hour = now.getHours();
    let greeting = '';
    
    if (hour < 12) {
        greeting = 'Good Morning! ☀️';
    } else if (hour < 17) {
        greeting = 'Good Afternoon! 🌤️';
    } else if (hour < 21) {
        greeting = 'Good Evening! 🌅';
    } else {
        greeting = 'Good Night! 🌙';
    }
    
    const greetingElement = document.getElementById('greeting-text');
    if (greetingElement) {
        greetingElement.textContent = greeting;
    }
}

// Typing Animation
function initTypingAnimation() {
    const titles = [
        'Applied Data Scientist',
        'Data Science Consultant',
        'Predictive Analytics Specialist',
        'Monitoring & Evaluation Specialist',
        'Financial Data Analyst'
    ];
    
    // Color array for different titles - Business colors
    const colors = [
        '#352f27ff', // Koyu kahve
        '#c6ac8f', // Warm taupe
        '#1c1258ff', // Charcoal
        '#490f0fff', // Siyah
        '#d8d8d8ff'  // Muted brown
    ];
    
    let currentTitleIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    const typingElement = document.getElementById('typing-text');
    const cursor = document.querySelector('.cursor');
    
    if (!typingElement) return;
    
    function typeText() {
        const currentTitle = titles[currentTitleIndex];
        const currentColor = colors[currentTitleIndex];
        
        // Set the color for current title
        typingElement.style.color = currentColor;
        typingElement.style.textShadow = `0 2px 4px ${currentColor}40`;
        
        if (isDeleting) {
            typingElement.textContent = currentTitle.substring(0, currentCharIndex - 1);
            currentCharIndex--;
            typingSpeed = 50;
        } else {
            typingElement.textContent = currentTitle.substring(0, currentCharIndex + 1);
            currentCharIndex++;
            typingSpeed = 100;
        }
        
        if (!isDeleting && currentCharIndex === currentTitle.length) {
            setTimeout(() => {
                isDeleting = true;
            }, 2000);
        } else if (isDeleting && currentCharIndex === 0) {
            isDeleting = false;
            currentTitleIndex = (currentTitleIndex + 1) % titles.length;
        }
        
        setTimeout(typeText, typingSpeed);
    }
    
    // Start typing animation
    typeText();
    
    // Cursor blink animation
    if (cursor) {
        setInterval(() => {
            cursor.style.opacity = cursor.style.opacity === '0' ? '1' : '0';
        }, 500);
    }
}

// Floating Shapes Animation
function initFloatingShapes() {
    const shapes = document.querySelectorAll('.shape');
    
    shapes.forEach((shape, index) => {
        // Random initial position
        const randomX = Math.random() * window.innerWidth;
        const randomY = Math.random() * window.innerHeight;
        
        shape.style.left = randomX + 'px';
        shape.style.top = randomY + 'px';
        
        // Random animation duration
        const duration = 15 + Math.random() * 10; // 15-25 seconds
        shape.style.animationDuration = duration + 's';
        
        // Random animation delay
        const delay = Math.random() * 5;
        shape.style.animationDelay = delay + 's';
    });
}

// Mobile Menu Toggle
function initMobileMenu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuToggle && navLinks) {
        mobileMenuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        const navLinkItems = document.querySelectorAll('.nav-link');
        navLinkItems.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            });
        });
    }
}

// Add scroll effect to navbar
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
});

// Add intersection observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.access-card, .stat-item, .social-link').forEach(el => {
    observer.observe(el);
});

// Add hover effects to cards
document.querySelectorAll('.access-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Add loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    
    // Animate elements on load
    setTimeout(() => {
        document.querySelectorAll('.hero-content > *').forEach((el, index) => {
            setTimeout(() => {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }, index * 200);
        });
    }, 300);
});
