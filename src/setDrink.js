// récupère l'id du coktail cliqué et le stocke dnas le local storage

const setDrink = (section) => {
  console.log(section);
  section.addEventListener("click", function (e) {
    const idCocktail = e.target.parentElement.dataset.id;
    console.log(idCocktail);
    localStorage.setItem("drink", idCocktail);
  });
};

export default setDrink;
