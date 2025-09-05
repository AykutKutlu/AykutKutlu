// Common JavaScript for all pages
document.addEventListener('DOMContentLoaded', () => {
    // Navigation functionality
    const navbar = document.getElementById('navbar');
    
    // Navbar scroll effect
    function handleNavbarScroll() {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(254, 254, 254, 0.98)';
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(254, 254, 254, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    }
    
    // Mobile menu toggle
    function initMobileMenu() {
        const mobileToggle = document.querySelector('.mobile-menu-toggle');
        const navLinksContainer = document.querySelector('.nav-links');
        
        if (mobileToggle) {
            mobileToggle.addEventListener('click', () => {
                navLinksContainer.classList.toggle('active');
                mobileToggle.classList.toggle('active');
            });
        }
    }
    
    // Load professional experience
    function loadExperience() {
        const timelineContainer = document.getElementById('experience-timeline');
        if (!timelineContainer) return;
        
        // Add Professional Experience
        resumeData.professionalExperience.forEach(experience => {
            const timelineItem = document.createElement('div');
            timelineItem.className = 'timeline-item';
            
            timelineItem.innerHTML = `
                <div class="timeline-header">
                    <div>
                        <h3 class="timeline-title">${experience.role}</h3>
                        <div class="timeline-company">${experience.company}</div>
                    </div>
                    <div class="timeline-meta">
                        <div class="timeline-duration">${experience.duration}</div>
                        <div class="timeline-location">${experience.location}</div>
                    </div>
                </div>
                <ul class="timeline-description">
                    ${experience.description.map(desc => `<li>${desc}</li>`).join('')}
                </ul>
            `;
            
            timelineContainer.appendChild(timelineItem);
        });
        
        // Add Internships Section Header
        if (resumeData.internships && resumeData.internships.length > 0) {
            const internshipHeader = document.createElement('div');
            internshipHeader.className = 'timeline-section-header';
            internshipHeader.innerHTML = `
                <h2 class="section-divider-title">
                    <i class="fas fa-graduation-cap"></i>
                    Internships
                </h2>
            `;
            timelineContainer.appendChild(internshipHeader);
            
            // Add Internships
            resumeData.internships.forEach(experience => {
                const timelineItem = document.createElement('div');
                timelineItem.className = 'timeline-item internship-item';
                
                timelineItem.innerHTML = `
                    <div class="timeline-header">
                        <div>
                            <h3 class="timeline-title">${experience.role}</h3>
                            <div class="timeline-company">${experience.company}</div>
                        </div>
                        <div class="timeline-meta">
                            <div class="timeline-duration">${experience.duration}</div>
                            <div class="timeline-location">${experience.location}</div>
                        </div>
                    </div>
                    <ul class="timeline-description">
                        ${experience.description.map(desc => `<li>${desc}</li>`).join('')}
                    </ul>
                `;
                
                timelineContainer.appendChild(timelineItem);
            });
        }
    }
    
    // Load projects
    function loadProjects() {
        const projectsGrid = document.getElementById('projects-grid');
        if (!projectsGrid) return;
        
        resumeData.projects.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.className = 'project-card';
            
            const technologies = project.technologies || [];
            
            projectCard.innerHTML = `
                <div class="project-header">
                    <h3 class="project-title">${project.name}</h3>
                    <div class="project-date">${project.date}</div>
                </div>
                <ul class="project-description">
                    ${project.description.map(desc => `<li>${desc}</li>`).join('')}
                </ul>
                ${technologies.length > 0 ? `
                    <div class="project-technologies">
                        ${technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                ` : ''}
            `;
            
            projectsGrid.appendChild(projectCard);
        });
    }
    
    // Load skills
    function loadSkills() {
        const skillsContainer = document.getElementById('skills-container');
        if (!skillsContainer) return;
        
        // Icon mapping for different skill categories
        const categoryIcons = {
            'Programming Languages': 'fas fa-laptop-code',
            'Machine Learning Frameworks': 'fas fa-brain',
            'Deep Learning': 'fas fa-network-wired',
            'Natural Language Processing (NLP)': 'fas fa-comments',
            'MLOps & Deployment': 'fas fa-rocket',
            'Data Processing & Big Data': 'fas fa-database',
            'Databases': 'fas fa-server',
            'GIS & Spatial Analysis': 'fas fa-map-marked-alt',
            'Web Development': 'fas fa-globe-americas',
            'Soft Skills': 'fas fa-users',
            'M&E Frameworks/Tools': 'fas fa-chart-line',
            'Data Collection & Management': 'fas fa-clipboard-list'
        };
        
        resumeData.skills.forEach((skillCategory, index) => {
            const accordionItem = document.createElement('div');
            accordionItem.className = 'skill-accordion-item';
            
            const categoryIcon = categoryIcons[skillCategory.name] || 'fas fa-code';
            
            let skillsHTML = '';
            
            if (skillCategory.type === 'levelled') {
                skillsHTML = `
                    <div class="skills-grid">
                        ${skillCategory.skills.map(skill => `
                            <div class="skill-item">
                                <div class="skill-info">
                                    <span class="skill-name">${skill.name}</span>
                                    <span class="skill-level skill-level-${skill.proficiency.toLowerCase()}">${skill.proficiency}</span>
                                </div>
                                <div class="skill-bar">
                                    <div class="skill-progress skill-progress-${skill.proficiency.toLowerCase()}"></div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                `;
            } else {
                skillsHTML = `
                    <div class="skills-list">
                        ${skillCategory.skills.map(skill => `
                            <div class="skill-list-item">
                                <i class="fas fa-check-circle"></i>
                                ${skill.name}
                            </div>
                        `).join('')}
                    </div>
                `;
            }
            
            accordionItem.innerHTML = `
                <div class="accordion-header" data-accordion-target="accordion-${index}">
                    <div class="accordion-title">
                        <i class="accordion-icon ${categoryIcon}"></i>
                        <h3>${skillCategory.name}</h3>
                    </div>
                    <div class="accordion-toggle">
                        <i class="fas fa-chevron-down"></i>
                    </div>
                </div>
                <div class="accordion-content" id="accordion-${index}">
                    <div class="accordion-body">
                        ${skillsHTML}
                    </div>
                </div>
            `;
            
            skillsContainer.appendChild(accordionItem);
        });
        
        // Initialize accordion functionality
        initAccordion();
    }
    
    // Accordion functionality
    function initAccordion() {
        const accordionHeaders = document.querySelectorAll('.accordion-header');
        
        accordionHeaders.forEach(header => {
            header.addEventListener('click', () => {
                const targetId = header.getAttribute('data-accordion-target');
                const targetContent = document.getElementById(targetId);
                const toggleIcon = header.querySelector('.accordion-toggle i');
                const allContents = document.querySelectorAll('.accordion-content');
                const allToggleIcons = document.querySelectorAll('.accordion-toggle i');
                const allHeaders = document.querySelectorAll('.accordion-header');
                
                // Close all other accordions
                allContents.forEach(content => {
                    if (content.id !== targetId) {
                        content.classList.remove('active');
                    }
                });
                
                allToggleIcons.forEach(icon => {
                    if (icon !== toggleIcon) {
                        icon.style.transform = 'rotate(0deg)';
                    }
                });
                
                allHeaders.forEach(h => {
                    if (h !== header) {
                        h.classList.remove('active');
                    }
                });
                
                // Toggle current accordion
                const isActive = targetContent.classList.contains('active');
                if (isActive) {
                    targetContent.classList.remove('active');
                    toggleIcon.style.transform = 'rotate(0deg)';
                    header.classList.remove('active');
                } else {
                    targetContent.classList.add('active');
                    toggleIcon.style.transform = 'rotate(180deg)';
                    header.classList.add('active');
                }
            });
        });
    }
    
    // Contact form handling
    function initContactForm() {
        const contactForm = document.getElementById('contact-form');
        if (!contactForm) return;
        
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');
            
            // Create mailto link
            const mailtoLink = `mailto:${resumeData.contactInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
            
            // Open default email client
            window.location.href = mailtoLink;
            
            // Show success message
            alert('Email client opened! Please send the email from your default email application.');
            
            // Reset form
            contactForm.reset();
        });
    }
    
    // Animation on scroll
    function animateOnScroll() {
        const timelineItems = document.querySelectorAll('.timeline-item');
        const accordionItems = document.querySelectorAll('.skill-accordion-item');
        const otherElements = document.querySelectorAll('.project-card, .about-card, .highlight-card, .contact-card, .certificate-card');
        
        // Timeline specific observer
        const timelineObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    // Add delay based on index for staggered animation
                    setTimeout(() => {
                        entry.target.style.animation = 'timelineSlideIn 0.8s ease-out forwards';
                        // Animate the circle marker
                        const circle = entry.target.querySelector('::before');
                        if (circle) {
                            entry.target.style.setProperty('--circle-animation', 'timelineCircleGrow 0.6s ease-out forwards');
                        }
                    }, index * 200);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        
        // Accordion specific observer
        const accordionObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
                    }, index * 150);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        
        // General elements observer
        const generalObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        
        timelineItems.forEach(element => {
            timelineObserver.observe(element);
        });
        
        accordionItems.forEach(element => {
            accordionObserver.observe(element);
        });
        
        otherElements.forEach(element => {
            generalObserver.observe(element);
        });
    }
    
    // Initialize all functions
    initMobileMenu();
    initContactForm();
    
    // Load page-specific content
    loadExperience();
    loadProjects();
    loadSkills();
    
    // Set up scroll animations
    animateOnScroll();
    
    // Set up scroll event listeners
    window.addEventListener('scroll', handleNavbarScroll);
    
    // Initial call
    handleNavbarScroll();
});
