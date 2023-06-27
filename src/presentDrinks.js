import fetchDrinks from "./fetchDrinks.js";
import displayDrinks from "./displayDrinks.js";
import setDrink from "./setDrink.js";

const presentDrinks = async (url) => {
  // récupère les cocktails

  const cocktails = await fetchDrinks(url);
  console.log(cocktails);
  const section = await displayDrinks(cocktails);

  // affiche les cocktails

  if (section) {
    setDrink(section);
  }
};

export default presentDrinks;
