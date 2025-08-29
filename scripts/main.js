// Project Data
const projects = [
    {
        title: "Bert Emotion",
        description: "A BERT-powered tool to analyze and visualize text emotions, featuring a sleek Streamlit web app.",
        technologies: ["PYTHON","ML", "PYTORCH", "STREAMLIT", "BERT"],
        image: "",
        link: "https://github.com/Vipul-Ydv/BERT_EMOTION",
        caption: "This one hit right in the heart. So proud."
    },
    {
        title: "Personal Portfolio",
        description: "A portfolio website that showcases my work (you're looking at it right now!).",
        technologies: ["HTML", "CSS", "JavaScript", "Three.js"],
        image: "assets/images/projects/portfolio.png",
        link: "https://vipul-yadav-s.github.io/website/",
        caption: "Meta much?"
    },
    {
        title: "Job Board Platform",
        description: "A responsive job board with advanced filtering and search capabilities.",
        technologies: ["Python", "Streamlit", "SerpAPI", "Pandas", "Cosine Similarity"],
        image: "assets/images/projects/job.png",
        link: "https://resparr.streamlit.app/",
        caption: "Where dreams and job applications go to die."
    },
    {
        title: "Weather Forecast Website",
        description: "A beautiful weather app that tells you if you need an umbrella or sunglasses.",
        technologies: ["HTML", "CSS", "JavaScript", "Weather API"],
        image: "assets/images/projects/weather.png",
        link: "https://vipul-ydv.github.io/PRODIGY_WD_05/",
        caption: "This one made me cry. But also proud."
    },
    {
        title: "Weather Forecast Website",
        description: "A beautiful weather app that tells you if you need an umbrella or sunglasses.",
        technologies: ["HTML", "CSS", "JavaScript", "Weather API"],
        image: "assets/images/projects/weather.png",
        link: "https://vipul-ydv.github.io/PRODIGY_WD_05/",
        caption: "This one made me cry. But also proud."
    },
    {
        title: "Weather Forecast Website",
        description: "A beautiful weather app that tells you if you need an umbrella or sunglasses.",
        technologies: ["HTML", "CSS", "JavaScript", "Weather API"],
        image: "assets/images/projects/weather.png",
        link: "https://vipul-ydv.github.io/PRODIGY_WD_05/",
        caption: "This one made me cry. But also proud."
}

];

// Skills Data
const skills = [
    {
        name: "HTML/CSS",
        level: "Expert",
        description: "Making things pretty since 2022",
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
        description: "Making things work since 2020",
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
        description: "Making things persist since 2021",
        icon: "🔥"
    },
    {
        name: "React",
        level: "Advanced",
        description: "Building UIs that don't make users cry",
        icon: "⚛️"
    },
    {
        name: "Node.js",
        level: "Intermediate",
        description: "Making servers that don't crash",
        icon: "🟢"
    },
    {
        name: "Git",
        level: "Advanced",
        description: "Still learning how to exit Vim",
        icon: "📦"
    },
    {
        name: "Three.js",
        level: "Intermediate",
        description: "Making 3D things in the browser",
        icon: "🎯"
    },
    {
        name: "Rasa",
        level: "Intermediate",
        description: "Teaching AI to be less dumb",
        icon: "🤖"
    },
];

// Blog Posts Data
const blogPosts = [
    {
        title: "Day 17 of building the chatbot",
        excerpt: "It now greets me with existential dread. Progress?",
        date: "2024-03-15",
        readTime: "2 min read"
    },
    {
        title: "The Great CSS Battle",
        excerpt: "Me vs. CSS Grid: A tale of love, hate, and flexbox.",
        date: "2024-03-10",
        readTime: "3 min read"
    },
    {
        title: "Debugging at 3 AM",
        excerpt: "Why do all the best ideas come when you're half asleep?",
        date: "2024-03-05",
        readTime: "4 min read"
    }
];

// Timeline Data
const timeline = [
    {
        year: "2022",
        title: "Getting Started",
        description: "Began learning web development with HTML and built my first basic web pages."
    },
    {
        year: "2023",
        title: "JavaScript in Action",
        description: "Explored JavaScript and learned how to make websites interactive and dynamic."
    },
    {
    year: "2024",
    title: "3D Exploration",
    description: "Started using Blender and got into 3D modeling and animation for fun and creativity."
    },
    {
    year: "2025",
    title: "Putting It All Together",
    description: "Integrated front-end, back-end, and APIs to build complete, functional applications."
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




