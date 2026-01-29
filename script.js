// ==================== BIOS BOOT SEQUENCE ====================
const bootMessages = [
    "Z-BIOS v2.1.0 (C) 2026 ZOO-HAIR INC.",
    "CPU: ANTIGRAVITY X-1 @ 4.20GHz",
    "MEMORY CHECK: 65536KB OK",
    "--------------------------------------",
    "DETECTING PRIMARY MASTER... 512GB SSD",
    "DETECTING PRIMARY SLAVE... NONE",
    "NETWORK: DHAKA_NODE CONNECTING...",
    "IP ADDRESS: 192.168.1.101",
    "STATUS: CONNECTION ESTABLISHED",
    "--------------------------------------",
    "LOADING KERNEL...",
    "MOUNTING /ROOT/PORTFOLIO...",
    "INITIATING GUI...",
    "SYSTEM READY."
];

async function runBootSequence() {
    const bootScreen = document.getElementById('boot-screen');
    const bootLog = document.getElementById('boot-log');
    if (!bootScreen || !bootLog) return;

    for (const msg of bootMessages) {
        const line = document.createElement('div');
        line.textContent = msg;
        bootLog.appendChild(line);
        
        // Random slight delay for realism
        await new Promise(resolve => setTimeout(resolve, Math.random() * 150 + 30));
        
        // Auto-scroll inside boot screen if needed
        bootScreen.scrollTop = bootScreen.scrollHeight;
    }

    // Hold for a moment
    await new Promise(resolve => setTimeout(resolve, 600));
    
    // Fade out and remove
    bootScreen.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    bootScreen.style.opacity = '0';
    bootScreen.style.transform = 'scale(1.1)';
    
    setTimeout(() => {
        bootScreen.remove();
        // Trigger initial decryption for the hero title since it's now visible
        const heroTitle = document.querySelector('.hero-content h1');
        if (heroTitle) {
            decryptText(heroTitle, heroTitle.textContent);
        }
    }, 800);
}

// ==================== CUSTOM PIXEL CURSOR ====================
const cursor = document.querySelector('.pixel-cursor');
let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    // Enable custom cursor styles once mouse moves
    if (cursor && !document.body.classList.contains('custom-cursor-active')) {
        document.body.classList.add('custom-cursor-active');
    }
});

function animateCursor() {
    const dx = mouseX - cursorX;
    const dy = mouseY - cursorY;
    
    cursorX += dx * 0.15; // Slightly faster for better feel
    cursorY += dy * 0.15;
    
    if (cursor) {
        cursor.style.left = `${cursorX}px`;
        cursor.style.top = `${cursorY}px`;
        cursor.style.transform = 'translate(-50%, -50%)'; // Ensure it's centered
    }
    
    requestAnimationFrame(animateCursor);
}

animateCursor();

// Interactive hover effects
document.querySelectorAll('a, button, .project-card, .about-card, .skill-tag, .social-btn').forEach(element => {
    element.addEventListener('mouseenter', () => {
        if (cursor) cursor.classList.add('hovering');
    });
    
    element.addEventListener('mouseleave', () => {
        if (cursor) cursor.classList.remove('hovering');
    });
});

// Click effects
document.addEventListener('mousedown', () => {
    if (cursor) cursor.classList.add('clicking');
});

document.addEventListener('mouseup', () => {
    if (cursor) cursor.classList.remove('clicking');
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
  Git, GitHub, VS Code, Linux, CLI, Vim, GCC, Maven, IntelliJ, Clion, Antigravity, Gradle Groovy

Creative:
  Pixel Art, Sprite Design, Animation, Game Design, tilemap creator
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

// Command history
let commandHistory = [];
let historyIndex = -1;

// Process terminal commands
if (terminalInput) {
    terminalInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const command = terminalInput.value.trim();
            if (command) {
                commandHistory.push(command);
                historyIndex = commandHistory.length;
            }
            
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
                const welcomeArea = document.querySelector('.terminal-welcome');
                if (welcomeArea) {
                    const welcome = welcomeArea.cloneNode(true);
                    terminalOutput.appendChild(welcome);
                }
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
        } else if (e.key === 'ArrowUp') {
            if (historyIndex > 0) {
                historyIndex--;
                terminalInput.value = commandHistory[historyIndex];
            }
        } else if (e.key === 'ArrowDown') {
            if (historyIndex < commandHistory.length - 1) {
                historyIndex++;
                terminalInput.value = commandHistory[historyIndex];
            } else {
                historyIndex = commandHistory.length;
                terminalInput.value = '';
            }
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
const logElement = document.getElementById('game-event-log');

const gridSize = 20;
const tileCount = canvas ? canvas.width / gridSize : 20;

let snake = [{ x: 10, y: 10 }];
let velocity = { x: 0, y: 0 };
let food = { x: 15, y: 15 };
let score = 0;
let baseSpeed = 120;
let currentSpeed = baseSpeed;
let gameRunning = false;
let gamePaused = false;
let gameOver = false;

const programmingLanguages = ['C', 'C++', 'Java', 'Python', 'JS', 'PHP', 'Ruby', 'Go', 'Rust', 'Swift'];
let currentFoodType = programmingLanguages[0];

function addGameLog(message) {
    if (!logElement) return;
    const line = document.createElement('div');
    line.className = 'log-line';
    line.textContent = `> ${message}`;
    logElement.appendChild(line);
    logElement.scrollTop = logElement.scrollHeight;
    
    // Keep only last 10 lines
    while (logElement.children.length > 10) {
        logElement.removeChild(logElement.firstChild);
    }
}

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
    currentSpeed = baseSpeed;
    gameRunning = true;
    gamePaused = false;
    gameOver = false;
    
    document.getElementById('current-score').textContent = score;
    document.getElementById('game-start-screen').style.display = 'none';
    document.getElementById('game-over-screen').style.display = 'none';
    
    addGameLog('System initialized.');
    addGameLog('Loading snake kernel...');
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
    }, currentSpeed);
}

function clearCanvas() {
    if (!ctx) return;
    
    // Background with subtle grid
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.strokeStyle = 'rgba(0, 255, 65, 0.05)';
    ctx.lineWidth = 1;
    for(let i=0; i<=canvas.width; i+=gridSize) {
        ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i, canvas.height); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(0, i); ctx.lineTo(canvas.width, i); ctx.stroke();
    }
}

function drawSnake() {
    if (!ctx) return;
    
    snake.forEach((segment, index) => {
        const isHead = index === 0;
        
        if (isHead) {
            ctx.fillStyle = '#00ff41';
            ctx.shadowBlur = 15;
            ctx.shadowColor = '#00ff41';
        } else {
            // Gradient effect for body
            const greenVal = Math.max(100, 255 - (index * 5));
            ctx.fillStyle = `rgb(0, ${greenVal}, 65)`;
            ctx.shadowBlur = 5;
            ctx.shadowColor = 'rgba(0, 255, 65, 0.5)';
        }
        
        // Draw segment as a "data block"
        ctx.fillRect(
            segment.x * gridSize + 1,
            segment.y * gridSize + 1,
            gridSize - 2,
            gridSize - 2
        );
        
        // Add "connector" lines between segments
        if (index > 0) {
            ctx.strokeStyle = ctx.fillStyle;
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(segment.x * gridSize + gridSize/2, segment.y * gridSize + gridSize/2);
            ctx.lineTo(snake[index-1].x * gridSize + gridSize/2, snake[index-1].y * gridSize + gridSize/2);
            ctx.stroke();
        }
    });
    
    ctx.shadowBlur = 0;
}

function moveSnake() {
    if (velocity.x === 0 && velocity.y === 0) return;
    
    const head = { x: snake[0].x + velocity.x, y: snake[0].y + velocity.y };
    snake.unshift(head);
    
    if (head.x === food.x && head.y === food.y) {
        score += 10;
        document.getElementById('current-score').textContent = score;
        
        // Speed up
        currentSpeed = Math.max(50, baseSpeed - Math.floor(score / 20) * 5);
        
        addGameLog(`Package installed: ${currentFoodType}.exe`);
        addGameLog(`Data throughput: ${1000 - currentSpeed}MB/s`);
        
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
    
    // Glowing food "node"
    const x = food.x * gridSize + gridSize / 2;
    const y = food.y * gridSize + gridSize / 2;
    
    // Pulsing effect
    const pulse = Math.sin(Date.now() / 200) * 4;
    
    ctx.fillStyle = '#ff00ff';
    ctx.shadowBlur = 20 + pulse;
    ctx.shadowColor = '#ff00ff';
    
    // Diamond shape for "node"
    ctx.beginPath();
    ctx.moveTo(x, y - (gridSize/2 - 2 + pulse/2));
    ctx.lineTo(x + (gridSize/2 - 2 + pulse/2), y);
    ctx.lineTo(x, y + (gridSize/2 - 2 + pulse/2));
    ctx.lineTo(x - (gridSize/2 - 2 + pulse/2), y);
    ctx.closePath();
    ctx.fill();
    
    // Label
    ctx.shadowBlur = 0;
    ctx.fillStyle = '#fff';
    ctx.font = '9px "Press Start 2P"';
    ctx.textAlign = 'center';
    ctx.fillText(currentFoodType, x, y + 25);
}

function placeFood() {
    food.x = Math.floor(Math.random() * tileCount);
    food.y = Math.floor(Math.random() * tileCount);
    currentFoodType = programmingLanguages[Math.floor(Math.random() * programmingLanguages.length)];
    
    if (snake.some(s => s.x === food.x && s.y === food.y)) placeFood();
}

function checkCollision() {
    const head = snake[0];
    
    if (head.x < 0 || head.x >= tileCount || head.y < 0 || head.y >= tileCount ||
        snake.slice(1).some(s => s.x === head.x && s.y === head.y)) {
        endGame();
    }
}

function endGame() {
    gameRunning = false;
    gameOver = true;
    
    // Shake effect on death
    const container = document.querySelector('.game-canvas-container');
    if (container) {
        container.style.animation = 'glitch-anim 0.2s 3';
        setTimeout(() => container.style.animation = '', 600);
    }
    
    addGameLog('CRITICAL_FAILURE!');
    addGameLog('Segmentation fault (core dumped)');
    
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
    changeDirection(key);
});

function changeDirection(key) {
    if ((key === 'arrowup' || key === 'w' || key === 'up') && velocity.y === 0) {
        velocity = { x: 0, y: -1 };
    } else if ((key === 'arrowdown' || key === 's' || key === 'down') && velocity.y === 0) {
        velocity = { x: 0, y: 1 };
    } else if ((key === 'arrowleft' || key === 'a' || key === 'left') && velocity.x === 0) {
        velocity = { x: -1, y: 0 };
    } else if ((key === 'arrowright' || key === 'd' || key === 'right') && velocity.x === 0) {
        velocity = { x: 1, y: 0 };
    }
}

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

// ==================== BACKGROUND MATRIX RAIN ====================
function initBackgroundMatrix() {
    const canvas = document.getElementById('matrix-bg');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    const binary = "01";
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);
    
    function draw() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = '#00ff41'; // Green accent
        ctx.font = fontSize + 'px monospace';
        
        for (let i = 0; i < drops.length; i++) {
            const text = binary[Math.floor(Math.random() * binary.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            
            drops[i]++;
        }
    }
    
    setInterval(draw, 50); // Slower for subtlety and performance
}

function activateMatrixMode() {
    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.zIndex = '9997';
    canvas.style.pointerEvents = 'none';
    canvas.style.opacity = '0.5';
    document.body.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const matrix = "01";
    const fontSize = 16;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);
    
    function drawMatrix() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = '#00ff41'; // Primary green accent
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
    
    // Auto-remove after 10 seconds
    setTimeout(() => {
        clearInterval(matrixInterval);
        canvas.remove();
    }, 10000);
    
    console.log('🎮 Matrix mode enabled with binary rain!');
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
    runBootSequence();
    initBackgroundMatrix();
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

// ==================== HUD CLOCK ====================
function updateHUDClock() {
    const clock = document.getElementById('hud-clock');
    if (clock) {
        const now = new Date();
        clock.textContent = now.toLocaleTimeString('en-US', { hour12: false });
    }
}
setInterval(updateHUDClock, 1000);

// ==================== TEXT DECRYPTION EFFECT ====================
function decryptText(element, targetText, duration = 1000) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890@#$%^&*()_+';
    let iteration = 0;
    const interval = setInterval(() => {
        element.textContent = targetText.split('')
            .map((char, index) => {
                if (index < iteration) return targetText[index];
                return chars[Math.floor(Math.random() * chars.length)];
            })
            .join('');
        
        if (iteration >= targetText.length) clearInterval(interval);
        iteration += targetText.length / 30;
    }, 30);
}

// Observe section titles for decryption
const decryptObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const title = entry.target;
            const originalText = title.getAttribute('data-text') || title.textContent;
            decryptText(title, originalText);
            decryptObserver.unobserve(title);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.section-title').forEach(title => {
    decryptObserver.observe(title);
});

console.log('✅ Hacker HUD systems active.');
// ==================== HUD LIVE FEED ====================
function updateHUD() {
    const clockEl = document.getElementById('hud-clock');
    const latencyEl = document.getElementById('hud-latency');

    // Update Clock
    setInterval(() => {
        const now = new Date();
        const timeStr = now.getHours().toString().padStart(2, '0') + ':' + 
                        now.getMinutes().toString().padStart(2, '0') + ':' + 
                        now.getSeconds().toString().padStart(2, '0');
        if (clockEl) clockEl.textContent = timeStr;
    }, 1000);

    // Update Latency (Random Jitter)
    setInterval(() => {
        const latency = Math.floor(Math.random() * 8) + 10; // Random between 10-18ms
        if (latencyEl) latencyEl.textContent = `LATENCY: ${latency}ms`;
    }, 3000);
}

// ==================== SCROLL REVEAL SYSTEM ====================
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => observer.observe(el));
}

// Initialize on load
window.addEventListener('load', () => {
    updateHUD();
    initScrollReveal();
});
