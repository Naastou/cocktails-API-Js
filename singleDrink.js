import fetchDrinks from "./src/fetchDrinks.js";
import displayDrink from "./src/displaySingleDrink.js";

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const presentDrink = async () => {
  // récupère les infos du cocktail
  const id = localStorage.getItem("drink");

  if (id) {
    const cocktails = await fetchDrinks(url + id);
    // affiche les infos du cocktail
    displayDrink(cocktails);
  } else {
    window.location = "./index.html";
  }
};

window.addEventListener("DOMContentLoaded", () => {
  presentDrink();
});
