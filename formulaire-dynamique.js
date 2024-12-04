
const addPlayerBtn = document.getElementById("add-player-btn");
const playerModal = document.getElementById("player-modal");
const cancelBtn = document.getElementById("cancel-btn");
const addBtn = document.getElementById("add-btn");
const editBtn = document.getElementById("edit-btn");
const playerForm = document.getElementById("player-form");
const cardsContainer = document.getElementById("cards-container");
const playerPositionSelect = document.getElementById("Position"); 
const Statistiques = document.querySelector(".statistiques"); 

let editingCard = null;

addPlayerBtn.addEventListener("click", () => {
    playerModal.classList.remove("hidden");
    addBtn.classList.remove("hidden");
    editBtn.classList.add("hidden");
    playerForm.reset();
    Statistiques.innerHTML = "";  
});

cancelBtn.addEventListener("click", () => {
    playerModal.classList.add("hidden");
});

// Fonction pour mettre à jour les inputs en fonction de la position du joueur
function updateInputs(position) {
    if (position === "GK") {
        Statistiques.innerHTML = `
            <div><input type="text" id="playerDiving" placeholder="Diving" name="playerDiving"class="w-full px-4 py-2 " min="0" max="100" ></div>
            <div><input type="text" id="playerHandling" placeholder="Handling" name="playerHandling"class="w-full px-4 py-2 " min="0" max="100" ></div>
            <div><input type="text" id="playerKicking" placeholder="Kicking" name="playerKicking" class="w-full px-4 py-2 " min="0" max="100" ></div>
            <div><input type="text" id="playerReflexes" placeholder="Reflexes" name="playerReflexes" class="w-full px-4 py-2 " min="0" max="100" ></div>
            <div><input type="text" id="playerSpeed" placeholder="Speed" name="playerSpeed" min="0" class="w-full px-4 py-2 " max="100" ></div>
            <div><input type="text" id="playerPositioning" placeholder="Positioning" name="playerPositioning" class="w-full px-4 py-2 " min="0" max="100"></div>
        `;
    } else {
        Statistiques.innerHTML = `
            <div><input type="text" id="playerPace" placeholder="Pace" name="playerPace" class="w-full px-4 py-2 " min="0" max="100" ></div>
            <div><input type="text" id="playerShooting" placeholder="Shooting" name="playerShooting" class="w-full px-4 py-2 " min="0" max="100" ></div>
            <div><input type="text" id="playerPassing" placeholder="Passing" name="playerPassing" class="w-full px-4 py-2 " min="0" max="100" ></div>
            <div><input type="text" id="playerDribbling" placeholder="Dribbling" name="playerDribbling" class="w-full px-4 py-2 " min="0" max="100" ></div>
            <div><input type="text" id="playerDefending" placeholder="Defending" name="playerDefending" class="w-full px-4 py-2 " min="0" max="100" ></div>
            <div><input type="text" id="playerPhysical" placeholder="Physical" name="playerPhysical" class="w-full px-4 py-2 " min="0" max="100" ></div>
        `;
    }
}


playerPositionSelect.addEventListener("change", () => {
    updateInputs(playerPositionSelect.value);
});

function validateInput(value, regex) {
    return regex.test(value);
}
// Soumettre le formulaire
playerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("player-name").value;
    const nationality = document.getElementById("player-nationality").value;
    const image = document.getElementById("player-image").value;
    const position = document.getElementById('Position').value;
    const club = document.getElementById("player-club").value;
    const rating = document.getElementById("player-rating").value;

    const nameRegex = /^(?!\s*$)[a-zA-Z]{3,}(\s[a-zA-Z]{3,})*$/;
     const urlRegex = /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp))$/i;
     const ratingRegex = /^100$|^\d{1,2}$/; 
     const attributeRegex = /^100$|^\d{1,2}$/; 

     if (!validateInput(name, nameRegex)) {
        alert("Nom invalide. Utilisez uniquement des lettres et des espaces.");
        return;
    }
    if (!validateInput(image, urlRegex)) {
        alert("URL d'image invalide.");
        return;
    }
    if (!validateInput(nationality, urlRegex)) {
        alert("URL de nationalité invalide.");                                                                                                                                                          
        return;
    }
    if (!validateInput(club, urlRegex)) {
        alert("URL de club invalide.");
        return;
    }
if (isNaN(Number(rating)) || !validateInput(rating, ratingRegex)) {
    alert("Note invalide. Entrez un nombre entre 0 et 100.");
    return;
}
    const pace = position !== "GK" ? document.getElementById("playerPace").value : null;
    const shooting = position !== "GK" ? document.getElementById("playerShooting").value : null;
    const passing = position !== "GK" ? document.getElementById("playerPassing").value : null;
    const dribbling = position !== "GK" ? document.getElementById("playerDribbling").value : null;
    const defending = position !== "GK" ? document.getElementById("playerDefending").value : null;
    const physical = position !== "GK" ? document.getElementById("playerPhysical").value : null;

    const diving = position === "GK" ? document.getElementById("playerDiving").value : null;
    const handling = position === "GK" ? document.getElementById("playerHandling").value : null;
    const kicking = position === "GK" ? document.getElementById("playerKicking").value : null;
    const reflexes = position === "GK" ? document.getElementById("playerReflexes").value : null;
    const speed = position === "GK" ? document.getElementById("playerSpeed").value : null;
    const positioning = position === "GK" ? document.getElementById("playerPositioning").value : null;

     // Vérification pour les joueurs autres que "GK"
if (
    position !== "GK" &&
    (
        isNaN(Number(pace)) ||
        isNaN(Number(shooting)) ||
        isNaN(Number(passing)) ||
        isNaN(Number(dribbling)) ||
        isNaN(Number(defending)) ||
        isNaN(Number(physical)) ||
        !validateInput(pace, attributeRegex) ||
        !validateInput(shooting, attributeRegex) ||
        !validateInput(passing, attributeRegex) ||
        !validateInput(dribbling, attributeRegex) ||
        !validateInput(defending, attributeRegex) ||
        !validateInput(physical, attributeRegex)
    )
) {
    alert("Statistiques invalides. Entrez des nombres entre 0 et 100.");
    return;
}

// Vérification pour le gardien "GK"
if (
    position === "GK" &&
    (
        isNaN(Number(diving)) ||
        isNaN(Number(handling)) ||
        isNaN(Number(kicking)) ||
        isNaN(Number(reflexes)) ||
        isNaN(Number(speed)) ||
        isNaN(Number(positioning)) ||
        !validateInput(diving, attributeRegex) ||
        !validateInput(handling, attributeRegex) ||
        !validateInput(kicking, attributeRegex) ||
        !validateInput(reflexes, attributeRegex) ||
        !validateInput(speed, attributeRegex) ||
        !validateInput(positioning, attributeRegex)
    )
) {
    alert("Statistiques invalides pour gardien.");
    return;
}
    // Création de ma nouvelle carte
    const card = editingCard || document.createElement("div");
    card.className = "card rounded-lg shadow-lg p-4 flex flex-col items-center relative cursor-pointer";
    card.dataset.position = position; 
    card.innerHTML = `
          <div  class="absolute top-3 left-3 text-white font-bold text-xl">${rating}</div>
           <div class="absolute top-3 right-3 text-white font-bold text-lg">${position}</div>
           <img src=${image} alt="${name}" class="w-24 h-24 rounded-full border-2 border-white mt-10"/>
           <div class="text-white font-bold text-sm mt-4">${name}</div>
           ${position === "GK" ? `
             <div class="flex gap-x-1 mt-4 text-white text-sm font-bold">
            <div>DIV <span class="font-normal">${diving}</span></div>
            <div>HAN <span class="font-normal">${handling}</span></div>
            <div>KIC <span class="font-normal">${kicking}</span></div>
            <div>REF <span class="font-normal">${reflexes}</span></div>
            <div>SPD <span class="font-normal">${speed}</span></div>
            <div>POS <span class="font-normal">${positioning}</span></div>
        </div>` : `
             <div class="flex gap-x-1 mt-4 text-white text-sm font-bold">
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
    playerModal.classList.add("hidden");
    playerForm.reset();
   
     addBtn.classList.remove("hidden");
     editBtn.classList.add("hidden");
     editingCard = null;  
 });

 function handleCardClick(card) {
     const name = card.querySelector(".text-white.font-bold.text-sm").textContent;
     const rating = card.querySelector(".absolute.top-3.left-3").textContent;
     const position = card.dataset.position;
     const nationality = card.querySelector("img[alt='Nationalité']").src;
     const club = card.querySelector("img[alt='Club']").src;
     const image = card.querySelector("img[alt='" + name + "']").src;
 
     // Remplir le formulaire avec les informations du joueur
     document.getElementById("player-name").value = name;
     document.getElementById("player-rating").value = rating;
     document.getElementById("Position").value = position;
     document.getElementById("player-nationality").value = nationality;
     document.getElementById("player-club").value = club;
     document.getElementById("player-image").value = image;
 
     updateInputs(position);
     addBtn.classList.add("hidden");
     editBtn.classList.remove("hidden");
     editingCard = card;
     if (card.querySelector(".action-container")) return;
     const actionContainer = document.createElement("div");
     actionContainer.className = "action-container absolute bg-white text-white rounded p-2 mt-2 shadow-lg flex gap-2";
     
     // Boutons "Activer", "Désactiver" et "Éditer"
     const activateButton = document.createElement("button");
     activateButton.textContent = "Activer";
     activateButton.className = "bg-green-400 text-white px-3 py-1 rounded hover:bg-green-600";
 
     const deactivateButton = document.createElement("button");
     deactivateButton.textContent = "Désactiver";
     deactivateButton.className = "bg-orange-600 text-white px-3 py-1 rounded hover:bg-red-600";
 
     const editButton = document.createElement("button");
     editButton.textContent = "Éditer";
     editButton.className = "bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600";
     actionContainer.appendChild(activateButton);
     actionContainer.appendChild(deactivateButton);
     actionContainer.appendChild(editButton);

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
 
     editButton.addEventListener("click", () => {
         document.getElementById("player-name").value = name;
         document.getElementById("player-rating").value = rating;
         document.getElementById("Position").value = position;
         document.getElementById("player-nationality").value = nationality;
         document.getElementById("player-club").value = club;
         document.getElementById("player-image").value = image;
         updateInputs(position);
 
         addBtn.classList.add("hidden");
         editBtn.classList.remove("hidden");
         editingCard = card;
         playerModal.classList.remove("hidden");
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