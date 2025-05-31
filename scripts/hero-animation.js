// Hero Background Animation
class HeroAnimation {
    constructor() {
        this.container = document.getElementById('hero-canvas');
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        
        this.particles = [];
        this.particleCount = 100;
        
        this.init();
        this.animate();
        this.handleResize();
    }
    
    init() {
        // Setup renderer
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        this.container.appendChild(this.renderer.domElement);
        
        // Setup camera
        this.camera.position.z = 5;
        
        // Create particles
        const geometry = new THREE.SphereGeometry(0.02, 8, 8);
        const material = new THREE.MeshBasicMaterial({
            color: 0x4a9eff,
            transparent: true,
            opacity: 0.6
        });
        
        for (let i = 0; i < this.particleCount; i++) {
            const particle = new THREE.Mesh(geometry, material);
            
            // Random position
            particle.position.x = (Math.random() - 0.5) * 10;
            particle.position.y = (Math.random() - 0.5) * 10;
            particle.position.z = (Math.random() - 0.5) * 10;
            
            // Random speed
            particle.velocity = new THREE.Vector3(
                (Math.random() - 0.5) * 0.02,
                (Math.random() - 0.5) * 0.02,
                (Math.random() - 0.5) * 0.02
            );
            
            this.particles.push(particle);
            this.scene.add(particle);
        }
    }
    
    animate() {
        requestAnimationFrame(this.animate.bind(this));
        
        // Update particles
        this.particles.forEach(particle => {
            particle.position.add(particle.velocity);
            
            // Bounce off boundaries
            if (Math.abs(particle.position.x) > 5) particle.velocity.x *= -1;
            if (Math.abs(particle.position.y) > 5) particle.velocity.y *= -1;
            if (Math.abs(particle.position.z) > 5) particle.velocity.z *= -1;
            
            // Add subtle rotation
            particle.rotation.x += 0.01;
            particle.rotation.y += 0.01;
        });
        
        this.renderer.render(this.scene, this.camera);
    }
    
    handleResize() {
        window.addEventListener('resize', () => {
            // Update camera
            this.camera.aspect = window.innerWidth / window.innerHeight;
            this.camera.updateProjectionMatrix();
            
            // Update renderer
            this.renderer.setSize(window.innerWidth, window.innerHeight);
            this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        });
    }
}

// Initialize animation when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new HeroAnimation();
}); 