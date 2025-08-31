// Project Data
const projects = [
    {
        title: "Bert Emotion",
        description: "A BERT-powered tool to analyze and visualize text emotions, featuring a sleek Streamlit web app.",
        technologies: ["PYTHON","ML", "PYTORCH", "STREAMLIT", "BERT"],
        image: "assets/images/projects/BERT.png",
        link: "https://github.com/Vipul-Ydv/BERT_EMOTION",
        visit_link: "https://bertemotion.streamlit.app/",
        caption: "This one hit right in the heart. So proud."
    },
    {
        title: "Personal Portfolio",
        description: "A portfolio website that showcases my work (you're looking at it right now!).",
        technologies: ["HTML", "CSS", "JavaScript", "Three.js"],
        image: "assets/images/projects/portfolio.png",
        link: "https://vipul-yadav-s.github.io/website/",
        visit_link: "https://vipul-yadav-s.github.io/website/",
        caption: "Meta much?"
    },
    {
        title: "Job Board Platform",
        description: "A responsive job board with advanced filtering and search capabilities.",
        technologies: ["Python", "Streamlit", "SerpAPI", "Pandas", "Cosine Similarity"],
        image: "assets/images/projects/job.png",
        link: "https://resparr.streamlit.app/",
        visit_link: "https://resparr.streamlit.app/",
        caption: "Where dreams and job applications go to die."
    },
    {
        title: "Movie Recommendation System",
        description: "Recommend movies based on your favorite movies.",
        technologies: ["Pandas", "Streamlit", "Python", "Cosine Similarity"],
        image: "assets/images/projects/movie.png",
        link: "https://github.com/Vipul-Ydv/Movie-Recommendation-System",
        visit_link: "https://movie-recommendation-syss.streamlit.app/",
        caption: "Just give me the recommendations already!"
    },
    {
        title: "Loan Eligibility Predictor",
        description: "Predict if you are eligible for a loan based on your income, loan amount, and other factors.",
        technologies: ["scikit-learn","Streamlit", "Pandas", "NumPy", "Machine Learning", "Python"],
        image: "assets/images/projects/loan.png",
        link: "https://github.com/Vipul-Ydv/LOAN-prediction",
        visit_link: "https://load-predd.streamlit.app/",
        caption: "I hope you are eligible for a loan."
}

];

// Skills Data
const skills = [
    {
        name: "HTML/CSS",
        level: "Intermediate",
        description: "Making things pretty since 2023",
        icon: "🎨"
    },
    {
        name: "JavaScript",
        level: "Intermediate",
        description: "Making things move since 2023",
        icon: "⚡"
    },
    {
        name: "Python",
        level: "Advanced",
        description: "Making things work since 2024",
        icon: "🐍"
    },
    {
        name: "Blender",
        level: "Intermediate",
        description: "Making things 3D since 2022",
        icon: "🎮"
    },
    {
        name: "Streamlit",
        level: "Intermediate",
        description: "Making things persist since 2024",
        icon: "🔥"
    },
    {
        name: "Machine Learning",
        level: "Intermediate",
        description: "Building models and predicting things",
        icon: "⚛️"
    },
    {
        name: "Deep Learning",
        level: "Beginner",
        description: "Teaching AI to be less dumb",
        icon: "🟢"
    },
    {
        name: "Git",
        level: "Advanced",
        description: "Still learning how to exit Vim",
        icon: "📦"
    },
    {
        name: "TensorFlow/Keras",
        level: "Intermediate",
        description: "Making AI things",
        icon: "🎯"
    },
    {
        name: "Selenium",
        level: "Intermediate",
        description: "Automating things",
        icon: "🤖"
    },
];

// Blog Posts Data
const blogPosts = [
    {
        title: "Working on Blog Section",
        excerpt: "Working on Blog Section and adding more projects and skills.",
        date: "2025-08-31",
        readTime: "1 min read"
    },
];

// Timeline Data
const timeline = [
    {
        year: "2023",
        title: "Getting Started",
        description: "Began learning web development with HTML and built my first basic web pages."
    },
    {
        year: "2024",
        title: "Machine Learning in Action",
        description: "Explored Machine Learning and learned how to make models and predict things."
    },
    {
        year: "2025",
        title: "More Machine Learning in Action",
        description: "Started using complex machine learning models and got better at it."
    },
    {
        year: "2025",
        title: "Working on Deep Learning",
        description: "Using complex deep learning models and getting better at it."
    }

];

// Initialize Three.js Scene
function initThreeJS() {
    try {
        const canvas = document.getElementById('hero-canvas');
        if (!canvas) {
            console.warn('Hero canvas not found');
            return;
        }

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
        
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        // Create particles
        const particlesGeometry = new THREE.BufferGeometry();
        const particlesCount = 2000;
        const posArray = new Float32Array(particlesCount * 3);

        for(let i = 0; i < particlesCount * 3; i++) {
            posArray[i] = (Math.random() - 0.5) * 5;
        }

        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
        const particlesMaterial = new THREE.PointsMaterial({
            size: 0.005,
            color: 0xFF6B6B
        });

        const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
        scene.add(particlesMesh);

        camera.position.z = 2;

        // Animation
        function animate() {
            requestAnimationFrame(animate);
            particlesMesh.rotation.y += 0.001;
            renderer.render(scene, camera);
        }

        animate();

        // Handle resize
        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });
    } catch (error) {
        console.error('Error initializing Three.js:', error);
    }
}

// Create Project Cards
function createProjectCards() {
    const projectsGrid = document.querySelector('.projects-grid');
    if (!projectsGrid) return;

    projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.innerHTML = `
            <img src="${project.image}" alt="${project.title}">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="technologies">
                ${project.technologies.map(tech => `<span>${tech}</span>`).join('')}
            </div>
            <a href="${project.link}" class="project-link">View Project</a>
            <a href="${project.visit_link}" class="project-link">Visit Project</a>
            <p class="project-caption">${project.caption}</p>
        `;
        projectsGrid.appendChild(card);
    });
}

// Create Skills Cards
function createSkillsCards() {
    try {
        const skillsContainer = document.querySelector('.skills-container');
        if (!skillsContainer) {
            console.warn('Skills container not found');
            return;
        }

        // Clear any existing content
        skillsContainer.innerHTML = '';

        // Create the track element
        const track = document.createElement('div');
        track.className = 'skills-track';

        // Create duplicate skills for infinite scroll effect
        const allSkills = [...skills, ...skills];

        allSkills.forEach(skill => {
            const card = document.createElement('div');
            card.className = 'skill-card';
            card.innerHTML = `
                <span class="skill-icon">${skill.icon}</span>
                <h3>${skill.name}</h3>
                <p class="skill-level">${skill.level}</p>
                <p class="skill-description">${skill.description}</p>
            `;
            track.appendChild(card);
        });

        skillsContainer.appendChild(track);

        // Add touch support for mobile
        let isDragging = false;
        let startPos = 0;
        let currentTranslate = 0;
        let prevTranslate = 0;

        track.addEventListener('mousedown', dragStart);
        track.addEventListener('touchstart', dragStart);
        track.addEventListener('mouseup', dragEnd);
        track.addEventListener('touchend', dragEnd);
        track.addEventListener('mousemove', drag);
        track.addEventListener('touchmove', drag);
        track.addEventListener('mouseleave', dragEnd);

        function dragStart(e) {
            isDragging = true;
            startPos = getPositionX(e);
            track.style.cursor = 'grabbing';
            track.style.animation = 'none';
        }

        function drag(e) {
            if (!isDragging) return;
            e.preventDefault();
            const currentPosition = getPositionX(e);
            currentTranslate = prevTranslate + currentPosition - startPos;
            track.style.transform = `translateX(${currentTranslate}px)`;
        }

        function dragEnd() {
            isDragging = false;
            track.style.cursor = 'grab';
            track.style.animation = 'slideSkills 30s linear infinite';
            prevTranslate = currentTranslate;
        }

        function getPositionX(e) {
            return e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
        }

        console.log('Skills section initialized successfully');
    } catch (error) {
        console.error('Error creating skills cards:', error);
    }
}

// Create Blog Posts
function createBlogPosts() {
    const blogGrid = document.querySelector('.blog-grid');
    if (!blogGrid) return;

    blogPosts.forEach(post => {
        const card = document.createElement('div');
        card.className = 'blog-card';
        card.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.excerpt}</p>
            <div class="blog-meta">
                <span>${post.date}</span>
                <span>${post.readTime}</span>
            </div>
        `;
        blogGrid.appendChild(card);
    });
}

// Create Timeline
function createTimeline() {
    try {
        const timelineContainer = document.querySelector('.timeline');
        if (!timelineContainer) {
            console.warn('Timeline container not found');
            return;
        }

        // Clear any existing content
        timelineContainer.innerHTML = '';

        timeline.forEach((item, index) => {
            const element = document.createElement('div');
            element.className = 'timeline-item';
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            element.style.transitionDelay = `${index * 0.2}s`;

            element.innerHTML = `
                <div class="timeline-year">${item.year}</div>
                <div class="timeline-content">
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                </div>
            `;

            timelineContainer.appendChild(element);

            // Trigger animation when element is in viewport
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                        observer.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 0.1
            });

            observer.observe(element);
        });

        console.log('Timeline initialized successfully');
    } catch (error) {
        console.error('Error creating timeline:', error);
    }
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Easter Egg
console.log("You sneaky developer 👀");

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, initializing components...');
    
    try {
        // Initialize components in sequence
        initThreeJS();
        createProjectCards();
        createSkillsCards();
        createBlogPosts();
        createTimeline();
        initProfileImage();

        // Add hover effects to project cards
        document.querySelectorAll('.project-card').forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-10px)';
            });
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0)';
            });
        });

        console.log('All components initialized successfully');
    } catch (error) {
        console.error('Error during initialization:', error);
    }
});

// Profile Image Interactive Features
function initProfileImage() {
    const profileImage = document.getElementById('profile-image');
    const profileWrapper = document.querySelector('.profile-image-wrapper');
    const floatingIcons = document.querySelectorAll('.floating-icon');
    
    if (!profileImage || !profileWrapper) return;

    // Add click event for profile image
    profileWrapper.addEventListener('click', () => {
        // Create a ripple effect
        const ripple = document.createElement('div');
        ripple.className = 'ripple-effect';
        ripple.style.cssText = `
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 107, 107, 0.3);
            transform: scale(0);
            animation: ripple 0.6s linear;
            pointer-events: none;
            width: 100px;
            height: 100px;
            top: 50%;
            left: 50%;
            margin-left: -50px;
            margin-top: -50px;
        `;
        
        profileWrapper.appendChild(ripple);
        
        // Remove ripple after animation
        setTimeout(() => {
            ripple.remove();
        }, 600);
        
        // Show a fun message
        showProfileMessage();
    });

    // Add mouse move effect for 3D tilt
    profileWrapper.addEventListener('mousemove', (e) => {
        const rect = profileWrapper.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        profileWrapper.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    });

    profileWrapper.addEventListener('mouseleave', () => {
        profileWrapper.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
    });

    // Make floating icons interactive
    floatingIcons.forEach((icon, index) => {
        icon.addEventListener('click', () => {
            // Create a burst effect
            icon.style.transform = 'scale(1.5) rotate(360deg)';
            icon.style.opacity = '1';
            
            setTimeout(() => {
                icon.style.transform = '';
                icon.style.opacity = '0.7';
            }, 300);
            
            // Show different messages based on icon
            const messages = [
                "🎨 Art is life!",
                "💻 Code is poetry!",
                "🚀 Let's build something amazing!",
                "✨ Magic happens here!"
            ];
            
            showFloatingMessage(messages[index], icon);
        });
    });
}

function showProfileMessage() {
    const messages = [
        "👋 Hey there!",
        "🎯 That's me!",
        "💪 Ready to create!",
        "🚀 Let's build something!"
    ];
    
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    showFloatingMessage(randomMessage, document.querySelector('.profile-image-wrapper'));
}

function showFloatingMessage(message, element) {
    const messageEl = document.createElement('div');
    messageEl.className = 'floating-message';
    messageEl.textContent = message;
    messageEl.style.cssText = `
        position: absolute;
        background: var(--primary-color);
        color: white;
        padding: 8px 16px;
        border-radius: 20px;
        font-size: 14px;
        font-weight: 600;
        white-space: nowrap;
        z-index: 1000;
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.3s ease;
        pointer-events: none;
    `;
    
    document.body.appendChild(messageEl);
    
    // Position the message
    const rect = element.getBoundingClientRect();
    messageEl.style.left = rect.left + rect.width / 2 - messageEl.offsetWidth / 2 + 'px';
    messageEl.style.top = rect.top - 50 + 'px';
    
    // Animate in
    setTimeout(() => {
        messageEl.style.opacity = '1';
        messageEl.style.transform = 'translateY(-10px)';
    }, 10);
    
    // Animate out and remove
    setTimeout(() => {
        messageEl.style.opacity = '0';
        messageEl.style.transform = 'translateY(-30px)';
        setTimeout(() => {
            messageEl.remove();
        }, 300);
    }, 2000);
}

// Handle form submission
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(contactForm);

        fetch(contactForm.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                alert('Thanks for reaching out! I\'ll get back to you soon.');
                contactForm.reset();
            } else {
                alert('Oops! There was a problem submitting your form.');
            }
        }).catch(error => {
            alert('Error sending form. Please try again later.');
            console.error(error);
        });
    });
}






