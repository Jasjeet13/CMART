// Get references to the logo and loading text elements
const loadingText = document.getElementById('loading-text');

// After 5 seconds, fade out the loading text
setTimeout(() => {
    loadingText.style.animation = 'fadeOut 1s ease-in-out';
}, 5000);