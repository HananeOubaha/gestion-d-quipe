//  la fonction responsable de l'affichage du pop up d'ajout
function openForm() {
    document.getElementById('popup-ajout').classList.remove('hidden');
  }
  function closeForm() {
    document.getElementById('popup-ajout').classList.add('hidden');
  }

  function submitPlayerForm(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const picture =document.getElementById('picture').value;
    const nationality = document.getElementById('nationality').value;
    const club = document.getElementById('club').value;
    const rating = document.getElementById('rating').value;
    const pace = document.getElementById('pace').value;
    const shooting = document.getElementById('shooting').value;
    const passing = document.getElementById('passing').value;
    const dribbling = document.getElementById('dribbling').value;
    const defending = document.getElementById('defending').value;
    const physical = document.getElementById('physical').value;
         
    card.innerHtml = `
    <div class ="caract-joueur">
        <div class="badge">${rating}</div>
        <img class="player-image" src="${picture}" alt="Player">
        <p class="name">${name}</p>
        <div class="statistiques">
        <p>${pace}</p>
        <p>${shooting}</p>
        <p>${passing}</p>
        <p>${dribbling}</p>
        <p>${defending}</p>
        <p>${physical}</p>
         <img class="club" src="${club}" alt="club">
        <img class="nationality" src="${nationality}" alt="Nationality">
        </div>
        </div>
    `;
    document.getElementById(`player`).appendChild(card);
  closeForm();
 }

  