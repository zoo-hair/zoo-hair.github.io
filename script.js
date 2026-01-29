// ==================== CUSTOM PIXEL CURSOR ====================
const cursor = document.querySelector('.pixel-cursor');
let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateCursor() {
    const dx = mouseX - cursorX;
    const dy = mouseY - cursorY;
    
    cursorX += dx * 0.1;
    cursorY += dy * 0.1;
    
    if (cursor) {
        cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
    }
    
    requestAnimationFrame(animateCursor);
}

animateCursor();

// Interactive hover effects
document.querySelectorAll('a, button, .project-card, .about-card, .skill-tag, .social-btn').forEach(element => {
    element.addEventListener('mouseenter', () => {
        if (cursor) cursor.style.transform = `translate(${cursorX}px, ${cursorY}px) scale(1.5)`;
    });
    
    element.addEventListener('mouseleave', () => {
        if (cursor) cursor.style.transform = `translate(${cursorX}px, ${cursorY}px) scale(1)`;
    });
});

// ==================== TERMINAL MODE TOGGLE ====================
const terminalToggle = document.getElementById('terminal-mode-toggle');
const guiMode = document.getElementById('gui-mode');
const terminalMode = document.getElementById('terminal-mode');
const terminalInput = document.getElementById('terminal-input');
const terminalOutput = document.getElementById('terminal-output');

let isTerminalMode = false;

function toggleTerminalMode() {
    isTerminalMode = !isTerminalMode;
    
    if (isTerminalMode) {
        guiMode.style.display = 'none';
        terminalMode.style.display = 'block';
        if (terminalInput) terminalInput.focus();
    } else {
        guiMode.style.display = 'block';
        terminalMode.style.display = 'none';
    }
}

if (terminalToggle) {
    terminalToggle.addEventListener('click', toggleTerminalMode);
}

// Keyboard shortcut: Ctrl+~ to toggle terminal mode
document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key === '`') {
        e.preventDefault();
        toggleTerminalMode();
    }
});

// ==================== TERMINAL COMMANDS ====================
const terminalCommands = {
    help: () => `
Available commands:
  help        - Show this help message
  about       - Display information about me
  projects    - List all projects
  skills      - Show my skills
  contact     - Display contact information
  github      - Show GitHub stats
  snake       - Play snake game
  clear       - Clear terminal
  whoami      - Display current user
  ls          - List available sections
  cat <file>  - Display file contents
  pwd         - Print working directory
  matrix      - Enter the Matrix
  exit        - Return to GUI mode
`,
    
    about: () => `
╔════════════════════════════════════════╗
║            ABOUT ME                    ║
╠════════════════════════════════════════╣
║ Name: Juhair Islam Sami                ║
║ Role: CS Sophomore | Game Dev         ║
║ Location: Dhaka, Bangladesh 🇧🇩         ║
║ University: UIU                        ║
║                                        ║
║ Interests:                             ║
║  • Game Development                    ║
║  • Pixel Art & Animation               ║
║  • Low-Level Programming               ║
║  • CLI Tools                           ║
║  • Data Structures & Algorithms        ║
║                                        ║
║ Motto: "If it can be imagined,        ║
║         it can be coded!"              ║
╚════════════════════════════════════════╝
`,
    
    projects: () => `
📁 PROJECTS:

[1] 🔐 CLI Encryption Tool
    Status: ✅ COMPLETE
    Tech: C, File I/O
    Description: Command-line encryption utility

[2] 🕹️ Retro Pixel Office Adventure
    Status: 🎮 LIVE
    Tech: Phaser 3, JavaScript
    Description: 2D platformer game

[3] 🌐 REST API Service
    Status: 🔨 BUILDING
    Tech: Spring Boot, Java
    Description: Full-featured RESTful API

[4] ⚡ Hackathon Mini Apps
    Status: 🏆 COMPLETE (3HR BUILD)
    Tech: Java, APIs
    Description: Rapid-prototype applications

[5] 🖼️ Pixel Art Generator
    Status: 🎨 WIP
    Tech: Python, PIL
    Description: Image to pixel art converter

[6] 🎫 Ticket Management System
    Status: ✅ COMPLETE
    Tech: C
    Description: CLI ticket booking system

Type 'exit' to return to GUI and see full details.
`,
    
    skills: () => `
💻 SKILLS:

Languages:
  C         ████████████████░░ 85%
  C++       ████████████████░░ 80%
  Java      ███████████████░░░ 75%
  Python    ██████████████░░░░ 70%
  JS        ███████████████░░░ 78%

Frameworks:
  Phaser 3  ████████████████░░ 82%
  Spring    ████████████░░░░░░ 60%
  HTML5     ████████████████░░ 90%
  CSS3      ████████████████░░ 88%

Tools:
  Git, GitHub, VS Code, Linux, CLI, Vim, GCC, Maven

Creative:
  Pixel Art, Sprite Design, Animation, UI/UX, Game Design
`,
    
    contact: () => `
📧 CONTACT INFORMATION:

Email:    geraltofmalitola@gmail.com
GitHub:   github.com/zoo-hair
LinkedIn: linkedin.com/in/zuhair-islam
Discord:  zoohair0140
Location: Dhaka, Bangladesh 🇧🇩

Status:
  ✅ Available for collaborations
  ✅ Open to freelance projects
  ✅ Always learning something new

Feel free to reach out!
`,
    
    github: () => `
🐙 GITHUB STATS:

Fetching GitHub statistics...
(Check GitHub Stats section in GUI mode for live data)

GitHub: github.com/zoo-hair
Public Repos: 13+
Active Contributor: Yes
Languages: C, C++, Java, Python, JavaScript

Type 'exit' to see detailed GitHub stats in GUI mode.
`,
    
    snake: () => `
🐍 SNAKE GAME:

The snake game is best played in GUI mode!
Type 'exit' to return to GUI and play the game.

Controls:
  Arrow Keys or WASD - Move snake
  SPACE - Pause/Resume
  R - Restart

High Score: ${localStorage.getItem('snakeHighScore') || 0}
`,
    
    clear: () => 'CLEAR_TERMINAL',
    
    whoami: () => 'zoo-hair',
    
    ls: () => `
home/
├── about.txt
├── projects/
├── skills.txt
├── contact.txt
├── games/
│   └── snake.exe
└── github/
`,
    
    cat: (args) => {
        const file = args[0];
        if (!file) return 'Usage: cat <filename>';
        
        const files = {
            'about.txt': terminalCommands.about(),
            'skills.txt': terminalCommands.skills(),
            'contact.txt': terminalCommands.contact(),
            'roles.txt': 'Game Developer | CS Student | Pixel Artist | Code Wizard'
        };
        
        return files[file] || `cat: ${file}: No such file or directory`;
    },
    
    pwd: () => '/home/zoo-hair/portfolio',
    
    matrix: () => {
        activateMatrixMode();
        return '🎮 Entering the Matrix...';
    },
    
    exit: () => {
        toggleTerminalMode();
        return 'Returning to GUI mode...';
    }
};

// Process terminal commands
if (terminalInput) {
    terminalInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const command = terminalInput.value.trim();
            const parts = command.split(' ');
            const cmd = parts[0].toLowerCase();
            const args = parts.slice(1);
            
            // Add command to output
            const commandLine = document.createElement('div');
            commandLine.innerHTML = `<span style="color: var(--primary-color);">zoo-hair@portfolio:~$</span> ${command}`;
            terminalOutput.appendChild(commandLine);
            
            // Execute command
            let output = '';
            if (terminalCommands[cmd]) {
                output = terminalCommands[cmd](args);
            } else if (command === '') {
                output = '';
            } else {
                output = `Command not found: ${cmd}. Type 'help' for available commands.`;
            }
            
            // Handle special commands
            if (output === 'CLEAR_TERMINAL') {
                terminalOutput.innerHTML = '';
                const welcome = document.querySelector('.terminal-welcome').cloneNode(true);
                terminalOutput.appendChild(welcome);
            } else {
                const outputDiv = document.createElement('pre');
                outputDiv.style.whiteSpace = 'pre-wrap';
                outputDiv.style.margin = '0.5rem 0 1rem 0';
                outputDiv.textContent = output;
                terminalOutput.appendChild(outputDiv);
            }
            
            // Clear input
            terminalInput.value = '';
            
            // Scroll to bottom
            terminalOutput.scrollTop = terminalOutput.scrollHeight;
        }
    });
}

// ==================== GITHUB STATS API ====================
async function fetchGitHubStats() {
    try {
        // Fetch user data
        const userResponse = await fetch('https://api.github.com/users/zoo-hair');
        const userData = await userResponse.json();
        
        // Update stats
        document.getElementById('total-repos').textContent = userData.public_repos;
        document.getElementById('followers').textContent = userData.followers;
        document.getElementById('following').textContent = userData.following;
        document.getElementById('github-repos').textContent = userData.public_repos;
        
        // Fetch repositories for total stars
        const reposResponse = await fetch('https://api.github.com/users/zoo-hair/repos?per_page=100');
        const reposData = await reposResponse.json();
        
        const totalStars = reposData.reduce((sum, repo) => sum + repo.stargazers_count, 0);
        document.getElementById('total-stars').textContent = totalStars;
        
        // Get language statistics
        const languages = {};
        for (const repo of reposData.slice(0, 10)) { // Top 10 repos
            if (repo.language) {
                languages[repo.language] = (languages[repo.language] || 0) + 1;
            }
        }
        
        // Display top languages
        const languagesGrid = document.getElementById('languages-grid');
        if (languagesGrid) {
            const sortedLanguages = Object.entries(languages)
                .sort((a, b) => b[1] - a[1])
                .slice(0, 6);
            
            languagesGrid.innerHTML = '';
            sortedLanguages.forEach(([lang, count]) => {
                const percentage = ((count / reposData.length) * 100).toFixed(1);
                const langDiv = document.createElement('div');
                langDiv.className = 'language-item';
                langDiv.innerHTML = `
                    <div class="language-name">${lang}</div>
                    <div class="language-percentage">${percentage}%</div>
                `;
                languagesGrid.appendChild(langDiv);
            });
        }
        
        console.log('✅ GitHub stats loaded successfully');
    } catch (error) {
        console.error('Error fetching GitHub stats:', error);
        // Set default values on error
        document.getElementById('total-repos').textContent = '13+';
        document.getElementById('followers').textContent = '--';
        document.getElementById('following').textContent = '--';
        document.getElementById('total-stars').textContent = '--';
    }
}

// Fetch GitHub stats on load
window.addEventListener('load', fetchGitHubStats);

// ==================== SNAKE GAME ====================
const canvas = document.getElementById('snakeCanvas');
const ctx = canvas ? canvas.getContext('2d') : null;

const gridSize = 20;
const tileCount = canvas ? canvas.width / gridSize : 20;

let snake = [{ x: 10, y: 10 }];
let velocity = { x: 0, y: 0 };
let food = { x: 15, y: 15 };
let score = 0;
let gameRunning = false;
let gamePaused = false;
let gameOver = false;

const programmingLanguages = ['C', 'C++', 'Java', 'Python', 'JS', 'PHP', 'Ruby', 'Go', 'Rust', 'Swift'];
let currentFoodType = programmingLanguages[0];

// Load high score
let highScore = parseInt(localStorage.getItem('snakeHighScore')) || 0;
if (document.getElementById('high-score')) {
    document.getElementById('high-score').textContent = highScore;
}

function startGame() {
    if (!canvas) return;
    
    snake = [{ x: 10, y: 10 }];
    velocity = { x: 0, y: 0 };
    score = 0;
    gameRunning = true;
    gamePaused = false;
    gameOver = false;
    
    document.getElementById('current-score').textContent = score;
    document.getElementById('game-start-screen').style.display = 'none';
    document.getElementById('game-over-screen').style.display = 'none';
    
    placeFood();
    gameLoop();
}

function gameLoop() {
    if (!gameRunning || gamePaused) return;
    
    setTimeout(() => {
        clearCanvas();
        moveSnake();
        drawFood();
        drawSnake();
        checkCollision();
        
        if (gameRunning && !gameOver) {
            gameLoop();
        }
    }, 100);
}

function clearCanvas() {
    if (!ctx) return;
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function drawSnake() {
    if (!ctx) return;
    
    snake.forEach((segment, index) => {
        // Head is brighter
        if (index === 0) {
            ctx.fillStyle = '#00ff41';
            ctx.shadowBlur = 15;
            ctx.shadowColor = '#00ff41';
        } else {
            ctx.fillStyle = '#00cc33';
            ctx.shadowBlur = 5;
            ctx.shadowColor = '#00cc33';
        }
        
        ctx.fillRect(
            segment.x * gridSize,
            segment.y * gridSize,
            gridSize - 2,
            gridSize - 2
        );
    });
    
    ctx.shadowBlur = 0;
}

function moveSnake() {
    const head = { x: snake[0].x + velocity.x, y: snake[0].y + velocity.y };
    snake.unshift(head);
    
    // Check if food eaten
    if (head.x === food.x && head.y === food.y) {
        score += 10;
        document.getElementById('current-score').textContent = score;
        
        if (score > highScore) {
            highScore = score;
            localStorage.setItem('snakeHighScore', highScore);
            document.getElementById('high-score').textContent = highScore;
        }
        
        placeFood();
    } else {
        snake.pop();
    }
}

function drawFood() {
    if (!ctx) return;
    
    ctx.fillStyle = '#ff00ff';
    ctx.shadowBlur = 20;
    ctx.shadowColor = '#ff00ff';
    ctx.fillRect(
        food.x * gridSize,
        food.y * gridSize,
        gridSize - 2,
        gridSize - 2
    );
    
    // Draw language text
    ctx.shadowBlur = 0;
    ctx.fillStyle = '#fff';
    ctx.font = '10px "Press Start 2P"';
    ctx.textAlign = 'center';
    ctx.fillText(
        currentFoodType,
        food.x * gridSize + gridSize / 2,
        food.y * gridSize + gridSize / 2 + 3
    );
}

function placeFood() {
    food.x = Math.floor(Math.random() * tileCount);
    food.y = Math.floor(Math.random() * tileCount);
    currentFoodType = programmingLanguages[Math.floor(Math.random() * programmingLanguages.length)];
    
    // Make sure food doesn't spawn on snake
    const onSnake = snake.some(segment => segment.x === food.x && segment.y === food.y);
    if (onSnake) {
        placeFood();
    }
}

function checkCollision() {
    const head = snake[0];
    
    // Wall collision
    if (head.x < 0 || head.x >= tileCount || head.y < 0 || head.y >= tileCount) {
        endGame();
        return;
    }
    
    // Self collision
    for (let i = 1; i < snake.length; i++) {
        if (head.x === snake[i].x && head.y === snake[i].y) {
            endGame();
            return;
        }
    }
}

function endGame() {
    gameRunning = false;
    gameOver = true;
    
    document.getElementById('final-score').textContent = score;
    document.getElementById('game-over-screen').style.display = 'block';
}

function restartGame() {
    startGame();
}

// Game controls
document.addEventListener('keydown', (e) => {
    if (!gameRunning && !gameOver && (e.key === ' ' || e.code === 'Space')) {
        e.preventDefault();
        startGame();
        return;
    }
    
    if (!gameRunning) return;
    
    // Pause
    if (e.key === ' ' || e.code === 'Space') {
        e.preventDefault();
        gamePaused = !gamePaused;
        if (!gamePaused) gameLoop();
        return;
    }
    
    // Restart
    if (e.key === 'r' || e.key === 'R') {
        restartGame();
        return;
    }
    
    // Movement
    const key = e.key.toLowerCase();
    
    if ((key === 'arrowup' || key === 'w') && velocity.y === 0) {
        velocity = { x: 0, y: -1 };
    } else if ((key === 'arrowdown' || key === 's') && velocity.y === 0) {
        velocity = { x: 0, y: 1 };
    } else if ((key === 'arrowleft' || key === 'a') && velocity.x === 0) {
        velocity = { x: -1, y: 0 };
    } else if ((key === 'arrowright' || key === 'd') && velocity.x === 0) {
        velocity = { x: 1, y: 0 };
    }
});

// Click to start
if (canvas) {
    canvas.addEventListener('click', () => {
        if (!gameRunning && !gameOver) {
            startGame();
        }
    });
}

// Make restartGame globally accessible
window.restartGame = restartGame;

// ==================== SMOOTH SCROLLING ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target && !isTerminalMode) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ==================== INTERSECTION OBSERVER ====================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fade-in-up 0.8s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements
document.querySelectorAll('.about-card, .project-card, .skill-category, .contact-content > *, .github-stat-card').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// ==================== ACTIVE NAV LINK ====================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function setActiveLink() {
    if (isTerminalMode) return;
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= (sectionTop - 150)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.style.color = 'var(--text-light)';
        link.style.border = '2px solid transparent';
        
        if (link.getAttribute('href') === `#${current}`) {
            link.style.color = 'var(--primary-color)';
            link.style.border = '2px solid var(--primary-color)';
        }
    });
}

window.addEventListener('scroll', setActiveLink);
window.addEventListener('load', setActiveLink);

// ==================== GLITCH EFFECT ====================
function randomGlitch() {
    const glitchElements = document.querySelectorAll('.glitch');
    
    glitchElements.forEach(element => {
        const shouldGlitch = Math.random() > 0.95;
        
        if (shouldGlitch) {
            element.style.animation = 'none';
            setTimeout(() => {
                element.style.animation = '';
            }, 50);
        }
    });
}

setInterval(randomGlitch, 3000);

// ==================== STATS COUNTER ANIMATION ====================
function animateStats() {
    const statValues = document.querySelectorAll('.stat-value');
    
    statValues.forEach(stat => {
        const text = stat.textContent;
        const match = text.match(/(\d+\.?\d*)/);
        
        if (match) {
            const target = parseFloat(match[1]);
            const suffix = text.replace(match[0], '');
            let current = 0;
            const increment = target / 50;
            const isDecimal = text.includes('.');
            
            const timer = setInterval(() => {
                current += increment;
                
                if (current >= target) {
                    stat.textContent = isDecimal ? target.toFixed(1) + suffix : Math.ceil(target) + suffix;
                    clearInterval(timer);
                } else {
                    stat.textContent = isDecimal ? current.toFixed(1) + suffix : Math.ceil(current) + suffix;
                }
            }, 30);
        }
    });
}

const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateStats();
            heroObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const heroSection = document.querySelector('.hero-section');
if (heroSection) {
    heroObserver.observe(heroSection);
}

// ==================== KONAMI CODE ====================
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);
    
    if (konamiCode.join('') === konamiSequence.join('')) {
        activateMatrixMode();
    }
});

function activateMatrixMode() {
    document.body.style.filter = 'hue-rotate(180deg)';
    
    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.zIndex = '9997';
    canvas.style.pointerEvents = 'none';
    canvas.style.opacity = '0.3';
    document.body.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%";
    const fontSize = 16;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);
    
    function drawMatrix() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = '#0F0';
        ctx.font = fontSize + 'px monospace';
        
        for (let i = 0; i < drops.length; i++) {
            const text = matrix[Math.floor(Math.random() * matrix.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            
            drops[i]++;
        }
    }
    
    const matrixInterval = setInterval(drawMatrix, 35);
    
    setTimeout(() => {
        document.body.style.filter = '';
        clearInterval(matrixInterval);
        canvas.remove();
    }, 10000);
    
    console.log('🎮 KONAMI CODE ACTIVATED! Matrix mode enabled for 10 seconds.');
}

// ==================== PROJECT CARD TILT ====================
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px) scale(1.02)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = '';
    });
});

// ==================== CONSOLE EASTER EGG ====================
console.log('%c🎮 PLAYER STATS LOADED', 'color: #00ff41; font-family: monospace; font-size: 20px; font-weight: bold;');
console.log('%cHey there, fellow developer! 👾', 'color: #00f7ff; font-family: monospace; font-size: 14px;');
console.log('%cTry the Konami Code: ↑ ↑ ↓ ↓ ← → ← → B A', 'color: #ff00ff; font-family: monospace; font-size: 12px;');
console.log('%cOr press Ctrl+~ to enter Terminal Mode!', 'color: #00ff41; font-family: monospace; font-size: 12px;');
console.log('%cWant to collaborate? Reach out at geraltofmalitola@gmail.com', 'color: #00ff41; font-family: monospace; font-size: 12px;');

// ==================== PAGE LOAD ANIMATION ====================
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 1s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// ==================== SKILL BARS ANIMATION ====================
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBars = entry.target.querySelectorAll('.skill-progress');
            progressBars.forEach(bar => {
                bar.style.animation = 'skill-fill 1.5s ease-out forwards';
            });
            skillObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

document.querySelectorAll('.skill-category').forEach(category => {
    skillObserver.observe(category);
});

console.log('✅ All systems loaded successfully!');