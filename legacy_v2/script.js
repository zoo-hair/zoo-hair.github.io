/* ============================================================
   ZOO-HAIR PORTFOLIO TERMINAL
   Full rewrite with async commands + themes
   ============================================================ */

/* ==================== BOOT SEQUENCE ==================== */

const bootMessages = [
    "Z-BIOS v2.2.0 (C) 2026 ZOO-HAIR INC.",
    "CPU: GGG X-1 @ 4.20GHz",
    "MEMORY CHECK: 65536KB OK",
    "NETWORK: DHAKA_NODE CONNECTING...",
    "STATUS: CONNECTION ESTABLISHED",
    "LOADING KERNEL...",
    "SYSTEM READY."
];

async function runBootSequence() {
    const screen = document.getElementById("boot-screen");
    const log = document.getElementById("boot-log");
    if (!screen || !log) return;

    for (const msg of bootMessages) {
        const line = document.createElement("div");
        line.textContent = msg;
        log.appendChild(line);
        screen.scrollTop = screen.scrollHeight;
        await new Promise(r => setTimeout(r, 70 + Math.random() * 120));
    }

    await new Promise(r => setTimeout(r, 500));
    screen.style.opacity = "0";
    setTimeout(() => screen.remove(), 800);
}

document.addEventListener("DOMContentLoaded", runBootSequence);

/* ==================== TERMINAL ENGINE ==================== */

class Terminal {
    constructor(outputEl) {
        this.output = outputEl;
        this.prompt = "zoo-hair@portfolio:~$";
        this.history = [];
        this.historyIndex = 0;
    }

    async run(input) {
        const command = input.trim();
        if (!command) return;

        this.printCommand(command);

        const [cmd, ...args] = command.split(/\s+/);
        const handler = terminalCommands[cmd];

        if (!handler) {
            this.printOutput(
                `<div class="command-output">command not found: ${cmd}</div>`
            );
            return;
        }

        try {
            const result = handler(args);
            if (result instanceof Promise) {
                this.printOutput(`<div class="command-output">loading...</div>`);
                const resolved = await result;
                this.replaceLastOutput(resolved);
            } else {
                this.printOutput(result);
            }
        } catch (err) {
            this.printOutput(
                `<div class="command-output error">Error: ${err.message}</div>`
            );
        }
    }

    printCommand(cmd) {
        this.output.insertAdjacentHTML(
            "beforeend",
            `<div class="terminal-line">
                <span class="prompt">${this.prompt}</span>
                <span class="command-text">${this.escape(cmd)}</span>
            </div>`
        );
        this.scroll();
    }

    printOutput(html) {
        if (!html) return;
        if (html === "CLEAR_TERMINAL") {
            this.output.innerHTML = "";
            return;
        }
        this.output.insertAdjacentHTML(
            "beforeend",
            `<div class="command-output">${html}</div>`
        );
        this.scroll();
    }

    replaceLastOutput(html) {
        const outputs = this.output.querySelectorAll(".command-output");
        if (outputs.length) {
            outputs[outputs.length - 1].outerHTML =
                `<div class="command-output">${html}</div>`;
        }
        this.scroll();
    }

    scroll() {
        this.output.scrollTop = this.output.scrollHeight;
    }

    escape(text) {
        return text.replace(/[&<>]/g, c =>
            ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c])
        );
    }
}

/* ==================== TERMINAL SETUP ==================== */

const terminalOutput = document.getElementById("terminal-output");
const terminalInput = document.getElementById("terminal-input");
const terminal = new Terminal(terminalOutput);

terminalInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        const value = terminalInput.value;
        terminalInput.value = "";

        if (value.trim()) {
            terminal.history.push(value);
            terminal.historyIndex = terminal.history.length;
        }

        terminal.run(value);
    }

    if (e.key === "ArrowUp") {
        e.preventDefault();
        if (terminal.historyIndex > 0) {
            terminal.historyIndex--;
            terminalInput.value = terminal.history[terminal.historyIndex];
        }
    }

    if (e.key === "ArrowDown") {
        e.preventDefault();
        if (terminal.historyIndex < terminal.history.length - 1) {
            terminal.historyIndex++;
            terminalInput.value = terminal.history[terminal.historyIndex];
        } else {
            terminal.historyIndex = terminal.history.length;
            terminalInput.value = "";
        }
    }

    if (e.key === "Tab") {
        e.preventDefault();
        const value = terminalInput.value.trim();
        if (!value) return;

        const matches = Object.keys(terminalCommands)
            .filter(c => c.startsWith(value));

        if (matches.length === 1) {
            terminalInput.value = matches[0];
        } else if (matches.length > 1) {
            terminal.printOutput(matches.join("  "));
        }
    }
});

/* ==================== THEMES ==================== */

function setTheme(name) {
    document.body.dataset.theme = name;
}

/* ==================== COMMANDS ==================== */

const terminalCommands = {

    help: () => `
Available commands:
  help
  about
  skills
  projects
  github <username>
  weather <city>
  theme <matrix|amber|classic|reset>
  clear
`,

    about: () => `
Hi, I'm Juhair Islam Sami.
CSE student, game & web developer.
I love terminals, pixel art and systems programming.
`,

    skills: () => `
Languages:
  JavaScript, C, C++, Python

Tools:
  Phaser.js, Node.js, Git
`,

    projects: () => `
Projects:
- OfficeVerse
- Retro Terminal Portfolio
- Browser Games
`,

    github: async ([username]) => {
        if (!username) return "Usage: github <username>";

        const res = await fetch(`https://api.github.com/users/${username}`);
        if (!res.ok) return "GitHub user not found";

        const u = await res.json();
        return `
GitHub: ${u.login}
Repos: ${u.public_repos}
Followers: ${u.followers}
Following: ${u.following}
`;
    },

    weather: async (args) => {
        const city = args.join(" ");
        if (!city) return "Usage: weather <city>";

        const res = await fetch(
            `https://wttr.in/${encodeURIComponent(city)}?format=j1`
        );
        if (!res.ok) return "Weather service unavailable";

        const data = await res.json();
        const current = data.current_condition[0];

        return `
Weather in ${city}:
  Temp: ${current.temp_C}°C
  Feels Like: ${current.FeelsLikeC}°C
  Condition: ${current.weatherDesc[0].value}
`;
    },

    theme: ([name]) => {
        if (!name) return "Usage: theme <matrix|amber|classic|reset>";
        setTheme(name === "reset" ? "classic" : name);
        return `Theme set to ${name}`;
    },

    clear: () => "CLEAR_TERMINAL"
};

/* ==================== AUTO FOCUS ==================== */

terminalInput.focus();
document.addEventListener("click", () => terminalInput.focus());
