// Sélection des éléments
const addPlayerBtn = document.getElementById("add-player-btn");
const playerModal = document.getElementById("player-modal");
const cancelBtn = document.getElementById("cancel-btn");
const playerForm = document.getElementById("player-form");
const cardsContainer = document.getElementById("cards-container");
// Ouvrir le modal
addPlayerBtn.addEventListener("click", () => {
    playerModal.classList.remove("hidden");
});

// Fermer le modal
cancelBtn.addEventListener("click", () => {
    playerModal.classList.add("hidden");
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
    const pace = document.getElementById("player-pace").value;
    const shooting = document.getElementById("player-shooting").value;
    const passing = document.getElementById("player-passing").value;
    const dribbling = document.getElementById("player-dribbling").value;
    const defending = document.getElementById("player-defending").value;
    const physical = document.getElementById("player-physical").value;

    // Créer une nouvelle carte
    const card = document.createElement("div");
    card.className =
        "card rounded-lg shadow-lg p-4 flex flex-col items-center relative";

    card.innerHTML = `
          <div class="absolute top-3 left-3 text-black font-bold text-xl">${rating}</div>
           <div class="absolute top-3 right-3 text-black font-bold text-lg">${position}</div>
           <img src=${image}alt="${name}" class="w-24 h-24 rounded-full border-2 border-white mt-10"/>
           <div class="text-black font-bold text-sm mt-4">${name}</div>
            <div class="flex  gap-x-1 mt-4 text-black text-sm font-bold">
            <div>PAC <span class="font-normal">${pace}</span></div>
            <div>SHO <span class="font-normal">${shooting}</span></div>
            <div>PAS <span class="font-normal">${passing}</span></div>
            <div>DRI <span class="font-normal">${dribbling}</span></div>
            <div>DEF <span class="font-normal">${defending}</span></div>
            <div>PHY <span class="font-normal">${physical}</span></div>
           </div>
           <div class="flex justify-center items-center space-x-2 mt-2">
               <img src=${nationality}alt="Nationalité" class="w-6 h-6 rounded-full"/>
              <img src=${club}alt="Club"class="w-6 h-6 rounded-full"/>
            </div>
    `;

    // Ajouter la carte au conteneur
    cardsContainer.appendChild(card);

    // Réinitialiser et fermer le modal
    playerForm.reset();
    playerModal.classList.add("hidden");
});