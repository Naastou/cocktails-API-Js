import get from "./getElement.js";
import presentDrinks from "./presentDrinks.js";

const baseUrl = "https://thecocktaildb.com/api/json/v1/1/search.php?s=";

const form = get(".search-form");
const searchBar = form.querySelector(".search-form > input");

// écoute le formulaire et affiche les cocktails
searchBar.addEventListener("input", async (e) => {
  // recupere le mot saisi
  let searchWord = e.target.value;

  //affichage des resultats

  presentDrinks(baseUrl + searchWord);
});
