function updateTime() {
    const timeDisplay = document.getElementById('currentTime');
    const now = new Date();
    
    const options = {
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit',
        hour12: true,
        timeZoneName: 'short'
    };
    
    // Add custom styling format
    timeDisplay.textContent = now.toLocaleTimeString('en-US', options);
}

// Initial full update and then start interval
updateTime();
setInterval(updateTime, 1000);

// Add simple cursor glow effect if on desktop/fine pointer
const cursorGlow = document.createElement('div');
cursorGlow.style.cssText = `
    position: fixed;
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%);
    border-radius: 50%;
    pointer-events: none;
    transform: translate(-50%, -50%);
    z-index: 1;
    transition: 0s;
`;

if (window.matchMedia("(pointer: fine)").matches) {
    document.body.appendChild(cursorGlow);
    document.addEventListener('mousemove', (e) => {
        cursorGlow.style.left = e.clientX + 'px';
        cursorGlow.style.top = e.clientY + 'px';
    });
}
