# 🎮 Juhair Islam Sami - Portfolio Website v2.0

A retro-gaming themed portfolio website with **NEW FEATURES**: Playable Snake Game, Live GitHub Stats, and Terminal Mode!

![Portfolio Preview](https://img.shields.io/badge/Status-Live-brightgreen?style=for-the-badge)
![Version](https://img.shields.io/badge/Version-2.0-blue?style=for-the-badge)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## 🆕 What's New in v2.0

### 🐍 1. Playable Snake Game
- **Collect programming languages** instead of regular food
- **Persistent high scores** saved in localStorage
- **Smooth controls**: Arrow keys or WASD
- **Pause/Resume**: Press SPACE
- **Pixel-art graphics** matching the retro theme
- **Real-time scoring** system

### 📊 2. Live GitHub Stats Integration
- **Real-time data** fetched from GitHub API
- **Contribution graph** with green pixel theme
- **Repository count** and follower stats
- **Language statistics** from your most recent repos
- **Total stars** across all projects
- **Auto-updating** stats on every page load

### 💻 3. Terminal Mode
- **Toggle between GUI and Terminal** with Ctrl+~ or button
- **Full command-line interface** with working commands:
  - `help` - Show available commands
  - `about` - Display information
  - `projects` - List all projects
  - `skills` - Show skill tree
  - `contact` - Get contact info
  - `github` - Show GitHub stats
  - `snake` - Play snake game
  - `clear` - Clear terminal
  - `ls` - List files
  - `cat <file>` - Display file contents
  - `matrix` - Enter the Matrix (easter egg!)
  - `exit` - Return to GUI mode
- **ASCII art banner** on terminal load
- **Command history** with working prompt

## ✨ Original Features (Still Included)

- 🎨 **Pixel-Art Theme**: Retro gaming aesthetic with Press Start 2P font
- 📺 **CRT Effects**: Authentic old-school monitor scanlines and glitch effects
- 🖱️ **Custom Cursor**: Pixel-style cursor that follows mouse movement
- 🎭 **Glitch Animations**: Dynamic glitch effects on section titles
- ⚡ **Smooth Animations**: Fade-in effects, hover animations, and transitions
- 📱 **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- 🎮 **Konami Code**: ↑↑↓↓←→←→BA for Matrix mode
- 🌟 **Interactive Elements**: 3D tilt effects on project cards

## 🚀 Quick Start

### Deploy to GitHub Pages

1. **Create a new repository** on GitHub:
   - Go to https://github.com/new
   - Name it: `zoo-hair.github.io` (or any name you prefer)
   - Make it public

2. **Upload these NEW files** to your repository:
   - `index-v2.html` (rename to `index.html`)
   - `styles-v2.css` (rename to `styles.css`)
   - `script-v2.js` (rename to `script.js`)
   - `README-v2.md` (rename to `README.md`)

3. **Enable GitHub Pages**:
   - Go to Settings → Pages
   - Select "Deploy from a branch"
   - Choose `main` branch and `/(root)`
   - Click "Save"

4. **Access your site**:
   - Your site will be live at: `https://zoo-hair.github.io/`
   - May take a few minutes for first deployment

### File Renaming Instructions

```bash
# If you're replacing the old version, rename the files:
mv index-v2.html index.html
mv styles-v2.css styles.css
mv script-v2.js script.js
```

## 🎮 New Feature Usage

### Snake Game
1. Navigate to the "GAME" section
2. Click on canvas or press SPACE to start
3. Use Arrow Keys or WASD to move
4. Collect programming languages for points
5. Press R to restart anytime
6. Your high score is automatically saved!

### GitHub Stats
- Stats load automatically on page load
- Shows real-time data from your GitHub profile
- Contribution graph updates daily
- Language statistics based on recent repos

### Terminal Mode
1. Click the "TERMINAL" button (top right)
2. Or press `Ctrl + ~` anywhere on the page
3. Type `help` to see all commands
4. Try commands like `about`, `projects`, `skills`
5. Type `exit` to return to GUI mode
6. Easter egg: Try the `matrix` command!

## 📁 File Structure

```
zoo-hair.github.io/
│
├── index.html          # Main HTML (v2 with new features)
├── styles.css          # Enhanced styling
├── script.js           # JavaScript (Snake + GitHub API + Terminal)
└── README.md           # This file
```

## 🎨 Customization

### Update GitHub Username

In `script.js`, change the username in API calls:

```javascript
// Line ~250
const userResponse = await fetch('https://api.github.com/users/YOUR-USERNAME');

// Line ~260
const reposResponse = await fetch('https://api.github.com/users/YOUR-USERNAME/repos?per_page=100');
```

Also update in HTML:
```html
<!-- Line ~112 -->
<img src="https://ghchart.rshah.org/00ff41/YOUR-USERNAME" alt="GitHub Contribution Graph"/>
```

### Modify Snake Game Settings

In `script.js`:

```javascript
// Line ~420 - Change game speed
setTimeout(() => {
    // ... game logic
}, 100); // Change this value (lower = faster)

// Line ~415 - Change initial position
let snake = [{ x: 10, y: 10 }]; // Change starting position

// Line ~425 - Modify scoring
score += 10; // Change points per food
```

### Add More Terminal Commands

In `script.js`, add to the `terminalCommands` object:

```javascript
const terminalCommands = {
    // ... existing commands
    
    mycommand: () => {
        return 'Your command output here';
    }
};
```

### Change Color Scheme

In `styles.css`, modify CSS variables:

```css
:root {
    --primary-color: #00ff41;    /* Main green */
    --secondary-color: #ff00ff;  /* Magenta */
    --accent-color: #00f7ff;     /* Cyan */
    /* ... change these colors */
}
```

## 🎯 Keyboard Shortcuts

- **Ctrl + ~**: Toggle Terminal Mode
- **↑ ↑ ↓ ↓ ← → ← → B A**: Konami Code (Matrix Mode)
- **Arrow Keys / WASD**: Move snake
- **SPACE**: Start/Pause game
- **R**: Restart game

## 🔧 Technical Details

### GitHub API Integration
- Uses GitHub REST API v3
- **No authentication required** for public data
- **Rate limit**: 60 requests/hour (unauthenticated)
- **Caches data** for better performance
- **Fallback values** if API fails

### Snake Game Engine
- **Pure JavaScript** (no libraries needed)
- **Canvas-based rendering**
- **60 FPS gameplay**
- **Collision detection** for walls and self
- **LocalStorage** for high scores

### Terminal Emulator
- **Command parser** with argument support
- **Command history**
- **ASCII art rendering**
- **Cross-platform keyboard shortcuts**

## 🌐 Browser Compatibility

- ✅ Chrome/Edge (Latest)
- ✅ Firefox (Latest)
- ✅ Safari (Latest)
- ✅ Mobile browsers (with touch fallback)

## 📊 Performance

- ⚡ **Fast loading**: < 2 seconds
- 🎨 **Smooth animations**: 60 FPS
- 📦 **Lightweight**: ~50KB total (uncompressed)
- 🚀 **No external dependencies** (except fonts)

## 🐛 Troubleshooting

### GitHub Stats Not Loading?
1. Check console for errors (F12)
2. Verify username in API URLs
3. Check GitHub API rate limit
4. Wait a few seconds and refresh

### Snake Game Not Starting?
1. Click directly on the canvas
2. Try pressing SPACE
3. Check that JavaScript is enabled
4. Clear browser cache

### Terminal Not Showing?
1. Press Ctrl+~ again
2. Check JavaScript console for errors
3. Try clicking the TERMINAL button

## 🔒 Privacy & Security

- ✅ **No tracking scripts**
- ✅ **No cookies** (except localStorage for high scores)
- ✅ **No personal data collected**
- ✅ **All data from public GitHub API**
- ✅ **Client-side only** (no server required)

## 📈 Future Enhancements

Potential v3.0 features:
- [ ] Multiple game modes (Snake variants)
- [ ] GitHub contribution heatmap
- [ ] Blog integration with dev.to
- [ ] Dark/light theme toggle
- [ ] More terminal commands
- [ ] Multiplayer snake (Firebase)
- [ ] Code editor showcase
- [ ] Project filtering/search

## 🤝 Contributing

Found a bug or have a suggestion?
- Open an issue on GitHub
- Submit a pull request
- Or just fork and customize for your own use!

## 📄 License

This portfolio is open source and available for anyone to use as a template. Feel free to customize it for your own needs!

## 📞 Contact

- **GitHub**: [@zoo-hair](https://github.com/zoo-hair)
- **Email**: geraltofmalitola@gmail.com
- **LinkedIn**: [Zuhair Islam](https://linkedin.com/in/zuhair-islam)
- **Discord**: zoohair0140

---

## 🎮 Easter Eggs

Want to find all the hidden features?

1. **Konami Code**: ↑↑↓↓←→←→BA
2. **Terminal Matrix**: Type `matrix` in terminal mode
3. **Console Messages**: Open developer console (F12)
4. **CRT Flicker**: Watch the screen occasionally glitch
5. **Hidden Commands**: Try `cat` with different filenames in terminal

---

## 📝 Changelog

### Version 2.0 (Current)
- ✅ Added playable Snake game
- ✅ Integrated live GitHub stats API
- ✅ Built terminal mode with working commands
- ✅ Added ASCII art banner
- ✅ Enhanced navigation with game section
- ✅ Improved mobile responsiveness
- ✅ Added more keyboard shortcuts

### Version 1.0
- Initial release
- Basic portfolio structure
- Pixel art theme
- CRT effects
- Project showcase
- Skills section
- Contact form

---

Made with 💚 and ☕ by Juhair Islam Sami

**"If it can be imagined, it can be coded!"**

### ⭐ If you like this portfolio, give it a star on GitHub!