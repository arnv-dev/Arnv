const skills = [
    { label: 'HTML', category: 'Web' },
    { label: 'CSS', category: 'Web' },
    { label: 'JavaScript', category: 'Web' },
    { label: 'React', category: 'Web' },
    { label: 'C Programming', category: 'Game' },
    { label: 'Python', category: 'App' },
    { label: 'Git & GitHub', category: 'Web' },
    { label: 'Responsive Design', category: 'Web' },
];

const projects = [
    {
        title: '50 Shades of Zombies',
        description: 'A Roblox game where players survive waves of zombies, upgrade weapons, and explore custom levels. I handle gameplay mechanics, progression, and polish in Roblox Studio.',
        repo: 'https://github.com/arnv-dev/50-shades-of-zombies.git',
        tags: ['Roblox', 'Game', 'Lua'],
    },
    {
        title: 'Flow',
        description: 'A macOS music player built with sleek controls, rhythm-inspired visuals, and smooth playback. Flow shows how I combine design with native application development.',
        repo: 'https://github.com/arnv-dev/Flow.git',
        tags: ['macOS', 'App', 'UI'],
    },
    {
        title: 'Portfolio Website',
        description: 'A modern online resume built with vanilla HTML, CSS, and JavaScript. This site is designed to grow as I add new work and skills.',
        repo: 'https://github.com/arnv-dev/zenarc-site.git',
        tags: ['Web', 'Portfolio', 'Interactive'],
    },
];

const categories = ['All', 'Web', 'Game', 'App'];

const moods = [
    { id: 'creative', label: 'Creative', primary: '#5ce1e6', secondary: '#4db4ff' },
    { id: 'focused', label: 'Focused', primary: '#a78bfa', secondary: '#f472b6' },
    { id: 'energetic', label: 'Energetic', primary: '#fbbf24', secondary: '#f97316' },
    { id: 'calm', label: 'Calm', primary: '#34d399', secondary: '#22d3ee' },
];

const quotes = [
    "The only way to do great work is to love what you do.",
    "Code is like humor. When you have to explain it, it's bad.",
    "First, solve the problem. Then, write the code.",
    "Simplicity is the soul of efficiency.",
    "Make it work, make it right, make it fast.",
];

let currentMood = 'creative';
let activeCategory = 'All';
let currentQuote = quotes[0];

document.addEventListener('DOMContentLoaded', () => {
    initParticles();
    initCursorGlow();
    initTyping();
    initSkillFilter();
    initProjectFilter();
    renderProjects();
    initMoodSwitcher();
    initMathGame();
    initTypeRacer();
    initClickerGame();
    initScrollAnimations();
    initNavHighlight();
    initContactForm();
    initStatsAnimation();
});

function initParticles() {
    const canvas = document.getElementById('particles');
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationId;

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    resize();
    window.addEventListener('resize', resize);

    class Particle {
        constructor() {
            this.reset();
        }

        reset() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 0.5;
            this.speedX = (Math.random() - 0.5) * 0.5;
            this.speedY = (Math.random() - 0.5) * 0.5;
            this.opacity = Math.random() * 0.5 + 0.1;
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
                this.reset();
            }
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(92, 225, 230, ${this.opacity})`;
            ctx.fill();
        }
    }

    for (let i = 0; i < 50; i++) {
        particles.push(new Particle());
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            p.update();
            p.draw();
        });
        animationId = requestAnimationFrame(animate);
    }

    animate();
}

function initCursorGlow() {
    const glow = document.getElementById('cursorGlow');
    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        glow.style.opacity = '1';
    });

    document.addEventListener('mouseleave', () => {
        glow.style.opacity = '0';
    });

    function animate() {
        currentX += (mouseX - currentX) * 0.1;
        currentY += (mouseY - currentY) * 0.1;
        glow.style.left = currentX + 'px';
        glow.style.top = currentY + 'px';
        requestAnimationFrame(animate);
    }

    animate();
}

function initTyping() {
    const typingElement = document.getElementById('typingText');
    const words = ['Roblox games.', 'native macOS apps.', 'interactive websites.', 'modern interfaces.'];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 100;

    function type() {
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            typingElement.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 50;
        } else {
            typingElement.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
            typeSpeed = 100;
        }

        if (!isDeleting && charIndex === currentWord.length) {
            typeSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            typeSpeed = 500;
        }

        setTimeout(type, typeSpeed);
    }

    setTimeout(type, 1000);
}

function initSkillFilter() {
    const filterContainer = document.getElementById('skillFilter');
    const skillsGrid = document.getElementById('skillsGrid');

    categories.forEach(category => {
        const pill = document.createElement('button');
        pill.className = `filter-pill ${category === 'All' ? 'active' : ''}`;
        pill.textContent = category;
        pill.addEventListener('click', () => {
            document.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
            activeCategory = category;
            renderSkills();
        });
        filterContainer.appendChild(pill);
    });

    renderSkills();
}

function renderSkills() {
    const skillsGrid = document.getElementById('skillsGrid');
    const filteredSkills = activeCategory === 'All' 
        ? skills 
        : skills.filter(s => s.category === activeCategory);

    skillsGrid.innerHTML = '';
    filteredSkills.forEach((skill, index) => {
        const chip = document.createElement('div');
        chip.className = 'skill-chip';
        chip.textContent = skill.label;
        chip.style.animationDelay = `${index * 0.05}s`;
        chip.style.animation = 'fadeInUp 0.4s ease-out forwards';
        skillsGrid.appendChild(chip);
    });
}

function initProjectFilter() {
    const filterContainer = document.getElementById('projectFilter');
    const projectCategories = ['All', 'Web', 'Game', 'App'];

    projectCategories.forEach(category => {
        const pill = document.createElement('button');
        pill.className = `filter-pill ${category === 'All' ? 'active' : ''}`;
        pill.textContent = category;
        pill.addEventListener('click', () => {
            document.querySelectorAll('#projectFilter .filter-pill').forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
            renderProjects(pill.textContent);
        });
        filterContainer.appendChild(pill);
    });

    const searchInput = document.getElementById('projectSearch');
    searchInput.addEventListener('input', () => {
        renderProjects(document.querySelector('#projectFilter .filter-pill.active').textContent, searchInput.value);
    });
}

function renderProjects(filter = 'All', search = '') {
    const projectsGrid = document.getElementById('projectsGrid');
    let filtered = projects;

    if (filter !== 'All') {
        filtered = filtered.filter(p => p.tags.some(tag => 
            tag.toLowerCase() === filter.toLowerCase()
        ));
    }

    if (search) {
        const s = search.toLowerCase();
        filtered = filtered.filter(p => 
            p.title.toLowerCase().includes(s) || 
            p.description.toLowerCase().includes(s) ||
            p.tags.some(tag => tag.toLowerCase().includes(s))
        );
    }

    projectsGrid.innerHTML = '';
    if (filtered.length === 0) {
        projectsGrid.innerHTML = '<p style="color: var(--muted); text-align: center; grid-column: 1 / -1;">No projects found. Try a different search.</p>';
        return;
    }

    filtered.forEach((project, index) => {
        const card = document.createElement('article');
        card.className = 'project-card';
        card.style.animation = `fadeInUp 0.5s ease-out ${index * 0.1}s forwards`;
        card.style.opacity = '0';
        card.innerHTML = `
            <div>
                <h3>${project.title}</h3>
                <p>${project.description}</p>
            </div>
            <div class="project-tags">
                ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
            </div>
            <a class="project-link" href="${project.repo}" target="_blank" rel="noreferrer">View Repo</a>
        `;
        projectsGrid.appendChild(card);
    });
}

function initMoodSwitcher() {
    const moodContainer = document.getElementById('moodOptions');
    const moodDisplay = document.getElementById('currentMood');

    moods.forEach(mood => {
        const btn = document.createElement('button');
        btn.className = `mood-btn ${mood.id === currentMood ? 'active' : ''}`;
        btn.dataset.mood = mood.id;
        btn.textContent = mood.label;
        btn.addEventListener('click', () => {
            currentMood = mood.id;
            document.querySelectorAll('.mood-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            moodDisplay.textContent = mood.label;
            applyMood(mood);
        });
        moodContainer.appendChild(btn);
    });
}

function applyMood(mood) {
    const root = document.documentElement;
    root.style.setProperty('--accent', mood.primary);
    root.style.setProperty('--accent-strong', mood.secondary);
}

function initMathGame() {
    const problemEl = document.getElementById('mathProblem');
    const answerInput = document.getElementById('mathAnswer');
    const feedbackEl = document.getElementById('mathFeedback');
    const submitBtn = document.getElementById('mathSubmit');

    let currentAnswer = 0;

    function generateProblem() {
        const ops = ['+', '-', '*'];
        const op = ops[Math.floor(Math.random() * ops.length)];
        let a, b;

        if (op === '*') {
            a = Math.floor(Math.random() * 12) + 1;
            b = Math.floor(Math.random() * 12) + 1;
        } else if (op === '-') {
            a = Math.floor(Math.random() * 50) + 20;
            b = Math.floor(Math.random() * a);
        } else {
            a = Math.floor(Math.random() * 100);
            b = Math.floor(Math.random() * 100);
        }

        currentAnswer = op === '+' ? a + b : op === '-' ? a - b : a * b;
        problemEl.textContent = `${a} ${op} ${b} = ?`;
        answerInput.value = '';
        feedbackEl.textContent = '';
        feedbackEl.className = 'math-feedback';
    }

    submitBtn.addEventListener('click', () => {
        const userAnswer = parseInt(answerInput.value);
        if (isNaN(userAnswer)) {
            feedbackEl.textContent = 'Please enter a number!';
            feedbackEl.className = 'math-feedback wrong';
            return;
        }

        if (userAnswer === currentAnswer) {
            feedbackEl.textContent = 'Correct! Great job!';
            feedbackEl.className = 'math-feedback correct';
            setTimeout(generateProblem, 1500);
        } else {
            feedbackEl.textContent = `Wrong! The answer was ${currentAnswer}. Try another!`;
            feedbackEl.className = 'math-feedback wrong';
            setTimeout(generateProblem, 2000);
        }
    });

    answerInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') submitBtn.click();
    });

    generateProblem();
}

function initTypeRacer() {
    const quoteDisplay = document.getElementById('quoteDisplay');
    const typeInput = document.getElementById('typeInput');
    const wpmEl = document.getElementById('wpm');
    const accuracyEl = document.getElementById('accuracy');

    function loadQuote() {
        currentQuote = quotes[Math.floor(Math.random() * quotes.length)];
        quoteDisplay.innerHTML = currentQuote.split('').map(char => `<span>${char}</span>`).join('');
    }

    loadQuote();
    typeInput.value = '';

    let startTime = null;
    let timerInterval = null;

    typeInput.addEventListener('input', () => {
        if (!startTime) {
            startTime = Date.now();
            timerInterval = setInterval(updateStats, 1000);
        }

        const inputText = typeInput.value;
        const quoteSpans = quoteDisplay.querySelectorAll('span');
        let correct = 0;

        quoteSpans.forEach((span, i) => {
            span.className = '';
            if (i < inputText.length) {
                if (inputText[i] === currentQuote[i]) {
                    span.className = 'correct';
                    correct++;
                } else {
                    span.className = 'incorrect';
                }
            }
        });

        if (inputText.length > 0 && inputText.length <= currentQuote.length) {
            quoteSpans[inputText.length - 1]?.classList.add('current');
        }

        updateStats();
    });

    function updateStats() {
        const inputText = typeInput.value;
        const timeElapsed = (Date.now() - startTime) / 1000 / 60;
        const words = inputText.length / 5;
        const wpm = timeElapsed > 0 ? Math.round(words / timeElapsed) : 0;
        const accuracy = inputText.length > 0 ? Math.round((correct / inputText.length) * 100) : 100;

        wpmEl.textContent = wpm;
        accuracyEl.textContent = accuracy;
    }

    typeInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && typeInput.value.trim() === currentQuote) {
            clearInterval(timerInterval);
            alert(`Done! WPM: ${wpmEl.textContent}, Accuracy: ${accuracyEl.textContent}%`);
            loadQuote();
            typeInput.value = '';
            startTime = null;
            wpmEl.textContent = '0';
            accuracyEl.textContent = '100';
        }
    });
}

function initClickerGame() {
    const clickerBtn = document.getElementById('clickerBtn');
    const clickCountEl = document.getElementById('clickCount');
    const clickTimerEl = document.getElementById('clickTimer');
    const resetBtn = document.getElementById('clickerReset');

    let count = 0;
    let timeLeft = 10;
    let timerInterval = null;
    let gameActive = false;

    clickerBtn.addEventListener('click', () => {
        if (!gameActive) {
            gameActive = true;
            count = 0;
            timeLeft = 10;
            clickCountEl.textContent = '0';
            clickTimerEl.textContent = '10';
            clickerBtn.disabled = false;

            timerInterval = setInterval(() => {
                timeLeft--;
                clickTimerEl.textContent = timeLeft;
                if (timeLeft <= 0) {
                    clearInterval(timerInterval);
                    gameActive = false;
                    clickerBtn.disabled = true;
                    alert(`Time's up! You clicked ${count} times!`);
                }
            }, 1000);
        }

        if (gameActive) {
            count++;
            clickCountEl.textContent = count;
            clickerBtn.style.transform = `scale(${1 + Math.random() * 0.1})`;
            setTimeout(() => {
                clickerBtn.style.transform = 'scale(1)';
            }, 100);
        }
    });

    resetBtn.addEventListener('click', () => {
        clearInterval(timerInterval);
        gameActive = false;
        count = 0;
        timeLeft = 10;
        clickCountEl.textContent = '0';
        clickTimerEl.textContent = '10';
        clickerBtn.disabled = false;
    });
}

function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.section').forEach(section => {
        observer.observe(section);
    });
}

function initNavHighlight() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.site-nav a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

function initContactForm() {
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = form.querySelector('button');
        const originalText = btn.textContent;
        btn.textContent = 'Message Sent!';
        btn.style.background = 'linear-gradient(135deg, #34d399, #22d3ee)';
        
        setTimeout(() => {
            btn.textContent = originalText;
            btn.style.background = '';
            form.reset();
        }, 2000);
    });
}

function initStatsAnimation() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statNumbers = entry.target.querySelectorAll('.stat-number');
                statNumbers.forEach(stat => {
                    const target = parseInt(stat.dataset.target);
                    animateNumber(stat, target);
                });
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    const statsGrid = document.querySelector('.stats-grid');
    if (statsGrid) {
        observer.observe(statsGrid);
    }
}

function animateNumber(element, target) {
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 30);
}
