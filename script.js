let xp = 0;

const xpValue = document.getElementById("xp-value");
const gainXPButton = document.getElementById("gain-xp");

// Load Saved XP if it exists
if (localStorage.getItem('xp')) {
    xp = parseInt(localStorage.getItem("xp"));
    xpValue.textContent = xp;
}

// Add click event to XP button
gainXPButton.addEventListener("click", () => {
    xp += 10;
    xpValue.textContent = xp;
    localStorage.setItem("xp", xp)
    });