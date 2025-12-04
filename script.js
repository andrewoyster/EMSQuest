// EMS CE categories + required hours
const categories = [
    { id: "airway", name: "Airway / Respiration", hours: 0, required: 6, badge: "Sigil of Breathcraft" },
    { id: "cardio", name: "Cardiology", hours: 0, required: 8, badge: "Heartforge Crest" },
    { id: "trauma", name: "Trauma", hours: 0, required: 4, badge: "Guardian Steelmark" },
    { id: "medical", name: "Medical", hours: 0, required: 8, badge: "Ailment Sage Emblem" },
    { id: "ops", name: "Operations", hours: 0, required: 6, badge: "Orderkeeper Gear-Sigil" },
];

let unlockedBadges = [];

function renderCategories() {
    const container = document.getElementById("categories");
    container.innerHTML = "";

    categories.forEach(cat => {
        const percent = Math.min((cat.hours / cat.required) * 100, 100);

        const html = `
            <div class="category">
                <h3>${cat.name} (${cat.hours}/${cat.required} hrs)</h3>
                <div class="progress-bar">
                    <div class="progress-bar-fill" style="width:${percent}%"></div>
                </div>
                <button onclick="addHour('${cat.id}')">+ Add 1 Hour</button>
            </div>
        `;

        container.innerHTML += html;
    });
}

function addHour(catId) {
    const cat = categories.find(c => c.id === catId);
    cat.hours++;

    // Badge unlock logic
    if (cat.hours >= cat.required && !unlockedBadges.includes(cat.badge)) {
        unlockedBadges.push(cat.badge);
        alert(`🎉 You unlocked the ${cat.badge}!`);
        renderBadges();
    }

    renderCategories();
}

function renderBadges() {
    const container = document.getElementById("badges");
    container.innerHTML = "";

    unlockedBadges.forEach(b => {
        container.innerHTML += `<div class="badge">🏅 ${b}</div>`;
    });
}

// Initial render
renderCategories();
renderBadges();
