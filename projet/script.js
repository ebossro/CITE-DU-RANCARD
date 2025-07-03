function commencer() {
  document.querySelector('.container-sections:not(.items-sections)').style.display = 'none';
  document.getElementById('itemsSection').style.display = 'block';


}

// option de choix

document.addEventListener('DOMContentLoaded', () => {
  const ticketRadios = document.querySelectorAll('input[name="ticket"]');
  const ticketItems = document.querySelectorAll('.options-items');

  // Fonction pour mettre à jour la classe 'selected'
  function updateSelectedClass() {
    ticketItems.forEach(item => {
      // Trouver le radio bouton à l'intérieur de cet "item"
      const radio = item.querySelector('input[type="radio"]');
      if (radio && radio.checked) {
        item.classList.add('selected');
      } else {
        item.classList.remove('selected');
      }
    });
  }

  // Écouteur d'événement pour chaque radio bouton
  ticketRadios.forEach(radio => {
    radio.addEventListener('change', updateSelectedClass);
  });

  // Appel initial pour définir l'état par défaut (si un radio est déjà coché dans le HTML)
  updateSelectedClass();
});



// Gestion de la sélection des artistes
document.addEventListener('DOMContentLoaded', () => {
  const selectionButtons = document.querySelectorAll('.btn-selection');
  const maxSelections = 3;
  let selectedArtistsCount = 0;

  selectionButtons.forEach(button => {
    button.addEventListener('click', () => {
      const infoGroup = button.closest('.info-group'); 

      if (infoGroup.classList.contains('selected')) {
        // Si l'artiste est déjà sélectionné, le désélectionner
        infoGroup.classList.remove('selected');
        button.innerHTML = '<i class="fa-solid fa-music"></i> Sélectionner';
        selectedArtistsCount--;
      } else {
        // Si l'artiste n'est pas sélectionné
        if (selectedArtistsCount < maxSelections) {
          // Si le nombre maximum n'est pas atteint, le sélectionner
          infoGroup.classList.add('selected');
          button.innerHTML = '<i class="fa-solid fa-music"></i> Retirer';
          selectedArtistsCount++;
        } else {
          // Si le nombre maximum est atteint, informer l'utilisateur (facultatif)
          alert(`Vous ne pouvez sélectionner que ${maxSelections} artistes au maximum.`);
        }
      }
    });
  });

  // Gérer le clic sur le bouton "Sélectionné" (l'overlay) pour désélectionner

  const overlayButtons = document.querySelectorAll('.selection-overlay-button');
  overlayButtons.forEach(overlayButton => {
    overlayButton.addEventListener('click', () => {
      const infoGroup = overlayButton.closest('.info-group');
      if (infoGroup.classList.contains('selected')) {
        infoGroup.classList.remove('selected');
        // Trouvez le bouton btn-selection à l'intérieur du même infoGroup et mettez à jour son texte
        const mainSelectionButton = infoGroup.querySelector('.btn-selection');
        if (mainSelectionButton) {
          mainSelectionButton.innerHTML = '<i class="fa-solid fa-music"></i> Sélectionner';
        }
        selectedArtistsCount--;
      }
    });
  });
});







