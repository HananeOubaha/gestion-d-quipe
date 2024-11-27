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
  }
  