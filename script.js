let xp = 0;
let level = 1;
let xpToLevel = 100;

const xpValue = document.getElementById("xp-value");
const gainXPButton = document.getElementById("gain-xp");
// Delete Later
const resetXPButton = document.getElementById("reset-xp");


const levelValue = document.getElementById("level-value");
const xpFill = document.getElementById("xp-fill");

// Load Saved XP if it exists
if (localStorage.getItem('xp')) {
    xp = parseInt(localStorage.getItem("xp"));
    xpValue.textContent = xp;
}

// LOAD SAVED LEVEL (level now persists)

if (localStorage.getItem("level")) {
    level = parseInt(localStorage.getItem("level"));
    levelValue.textContent = level;
}

// UPDATE XP BAR UPDATE (calculates bar width)
function updateXPBar() {
    const percent = (xp / xpToLevel) * 100;
    xpFill.style.width = percent + "%";
}

// Reset XP, Level Button
resetXPButton.addEventListener("click", () => {
    xp = 0;
    level = 1;

    xpValue.textContent = xp;
    levelValue.textContent = level;

    localStorage.setItem("xp", xp);
    localStorage.setItem("level", level);


    updateXPBar();
});


// Add click event to XP button, Check for level-up (modify existing xp event to look like this:)
gainXPButton.addEventListener("click", () => {
    xp += 10;
    xpValue.textContent = xp;

    if (xp >= xpToLevel) {
        xp -= xpToLevel;  //rollover excess xp
        level++;
        levelValue.textContent = level;
        localStorage.setItem("level", level);

        // Trigger level animation
        levelValue.classList.remove("level-burst");
        void levelValue.offsetWidth;
        levelValue.classList.add("level-burst");
    }

    // Animation
    
   xpValue.classList.remove("xp-gain");
   void xpValue.offsetWidth;   // force reflow
   xpValue.classList.add("xp-gain");
   
    localStorage.setItem("xp", xp)

    updateXPBar();
    });

