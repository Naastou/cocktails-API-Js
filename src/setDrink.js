// récupère l'id du coktail cliqué et le stocke dnas le local storage

const setDrink = (section) => {
  section.addEventListener("click", function (e) {
    const idCocktail = e.target.parentElement.dataset.id;

    localStorage.setItem("drink", idCocktail);
  });
};

export default setDrink;
