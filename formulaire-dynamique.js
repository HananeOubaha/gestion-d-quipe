// Sélection des éléments
const addPlayerBtn = document.getElementById("add-player-btn");
const playerModal = document.getElementById("player-modal");
const cancelBtn = document.getElementById("cancel-btn");
const playerForm = document.getElementById("player-form");
const cardsContainer = document.getElementById("cards-container");
const playerPositionSelect = document.getElementById("Position"); 
const Statistiques = document.querySelector(".statistiques"); 

// Ouvrir le modal
addPlayerBtn.addEventListener("click", () => {
    playerModal.classList.remove("hidden");
});

// Fermer le modal
cancelBtn.addEventListener("click", () => {
    playerModal.classList.add("hidden");
});

// Fonction pour mettre à jour les inputs en fonction de la position du joueur
function updateInputs(position) {
    if (position === "GK") {
        Statistiques.innerHTML = `
            <div><input type="number" id="playerDiving" placeholder="Diving" name="playerDiving" min="0" max="100" required></div>
            <div><input type="number" id="playerHandling" placeholder="Handling" name="playerHandling" min="0" max="100" required></div>
            <div><input type="number" id="playerKicking" placeholder="Kicking" name="playerKicking" min="0" max="100" required></div>
            <div><input type="number" id="playerReflexes" placeholder="Reflexes" name="playerReflexes" min="0" max="100" required></div>
            <div><input type="number" id="playerSpeed" placeholder="Speed" name="playerSpeed" min="0" max="100" required></div>
            <div><input type="number" id="playerPositioning" placeholder="Positioning" name="playerPositioning" min="0" max="100" required></div>
        `;
    } else {
        Statistiques.innerHTML = `
            <div><input type="number" id="playerPace" placeholder="Pace" name="playerPace" min="0" max="100" required></div>
            <div><input type="number" id="playerShooting" placeholder="Shooting" name="playerShooting" min="0" max="100" required></div>
            <div><input type="number" id="playerPassing" placeholder="Passing" name="playerPassing" min="0" max="100" required></div>
            <div><input type="number" id="playerDribbling" placeholder="Dribbling" name="playerDribbling" min="0" max="100" required></div>
            <div><input type="number" id="playerDefending" placeholder="Defending" name="playerDefending" min="0" max="100" required></div>
            <div><input type="number" id="playerPhysical" placeholder="Physical" name="playerPhysical" min="0" max="100" required></div>
        `;
    }
}

// Ajouter un événement pour la sélection de la position du joueur
playerPositionSelect.addEventListener("change", () => {
    updateInputs(playerPositionSelect.value);
});

// Soumettre le formulaire
playerForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Récupérer les valeurs du formulaire
    const name = document.getElementById("player-name").value;
    const nationality = document.getElementById("player-nationality").value;
    const image = document.getElementById("player-image").value;
    const position = document.getElementById('Position').value;
    const club = document.getElementById("player-club").value;
    const rating = document.getElementById("player-rating").value;
    // Récupérer les statistiques spécifiques à la position
    const pace = position !== "GK" ? document.getElementById("playerPace").value : null;
    const shooting = position !== "GK" ? document.getElementById("playerShooting").value : null;
    const passing = position !== "GK" ? document.getElementById("playerPassing").value : null;
    const dribbling = position !== "GK" ? document.getElementById("playerDribbling").value : null;
    const defending = position !== "GK" ? document.getElementById("playerDefending").value : null;
    const physical = position !== "GK" ? document.getElementById("playerPhysical").value : null;

    // Statistiques gardien
    const diving = position === "GK" ? document.getElementById("playerDiving").value : null;
    const handling = position === "GK" ? document.getElementById("playerHandling").value : null;
    const kicking = position === "GK" ? document.getElementById("playerKicking").value : null;
    const reflexes = position === "GK" ? document.getElementById("playerReflexes").value : null;
    const speed = position === "GK" ? document.getElementById("playerSpeed").value : null;
    const positioning = position === "GK" ? document.getElementById("playerPositioning").value : null;

    // Créer une nouvelle carte
    const card = document.createElement("div");
    card.className =
        "card rounded-lg shadow-lg p-4 flex flex-col items-center relative cursor-pointer";
    card.dataset.position = position; 
    card.innerHTML = `
          <div class="absolute top-3 left-3 text-black font-bold text-xl">${rating}</div>
           <div class="absolute top-3 right-3 text-black font-bold text-lg">${position}</div>
           <img src=${image} alt="${name}" class="w-24 h-24 rounded-full border-2 border-white mt-10"/>
           <div class="text-black font-bold text-sm mt-4">${name}</div>
           ${position === "GK" ? `
             <div class="flex gap-x-1 mt-4 text-black text-sm font-bold">
            <div>DIV <span class="font-normal">${diving}</span></div>
            <div>HAN <span class="font-normal">${handling}</span></div>
            <div>KIC <span class="font-normal">${kicking}</span></div>
            <div>REF <span class="font-normal">${reflexes}</span></div>
            <div>SPD <span class="font-normal">${speed}</span></div>
            <div>POS <span class="font-normal">${positioning}</span></div>
        </div>` : `
             <div class="flex gap-x-1 mt-4 text-black text-sm font-bold">
            ${pace ? `<div>PAC <span class="font-normal">${pace}</span></div>` : ""}
            ${shooting ? `<div>SHO <span class="font-normal">${shooting}</span></div>` : ""}
            ${passing ? `<div>PAS <span class="font-normal">${passing}</span></div>` : ""}
            ${dribbling ? `<div>DRI <span class="font-normal">${dribbling}</span></div>` : ""}
            ${defending ? `<div>DEF <span class="font-normal">${defending}</span></div>` : ""}
            ${physical ? `<div>PHY <span class="font-normal">${physical}</span></div>` : ""}
        </div>`}
           <div class="flex justify-center items-center space-x-2 mt-2">
               <img src=${nationality} alt="Nationalité" class="w-6 h-6 rounded-full"/>
               <img src=${club} alt="Club" class="w-6 h-6 rounded-full"/>
            </div>
            <button class="delete-btn absolute top-0 left-1/2 transform -translate-x-1/2 p-2 bg-red-500 text-white rounded-full">X</button>
    `;
    const deleteButton = card.querySelector(".delete-btn");
    deleteButton.addEventListener("click", () => { 
        card.remove(); 
    });
    card.addEventListener("click", () => handleCardClick(card));
    cardsContainer.appendChild(card);
    playerForm.reset();
    playerModal.classList.add("hidden");
});

function handleCardClick(card) {
    if (card.querySelector(".action-container")) return;
    const actionContainer = document.createElement("div");
    actionContainer.className = "action-container absolute bg-white text-black rounded p-2 mt-2 shadow-lg flex gap-2";
    const activateButton = document.createElement("button");
    activateButton.textContent = "Activer";
    activateButton.className = "bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600";
    const deactivateButton = document.createElement("button");
    deactivateButton.textContent = "Désactiver";
    deactivateButton.className = "bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600";
    actionContainer.appendChild(activateButton);
    actionContainer.appendChild(deactivateButton);
    card.appendChild(actionContainer);
    activateButton.addEventListener("click", () => {
        const playerPosition = card.dataset.position; 
        const targetPosition = document.getElementById(playerPosition); 

        if (targetPosition) {
            targetPosition.innerHTML = ""; 
            targetPosition.appendChild(card);
            actionContainer.remove();
        } else {
            alert("Position non trouvée sur le terrain !");
        }
    });

    deactivateButton.addEventListener("click", () => {
        cardsContainer.appendChild(card);
        actionContainer.remove();
    });

    document.addEventListener(
        "click",
        (e) => {
            if (!card.contains(e.target)) {
                actionContainer.remove();
            }
        },
        { once: true }
    );
}