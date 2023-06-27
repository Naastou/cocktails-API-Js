import get from "./getElement.js";
import { hideLoading } from "./toggleLoading.js";

let drinkSection = get(".section-center");
const title = get(".title");

const displayDrinks = async ({ drinks }) => {
  // cache les chargements

  hideLoading();
  // affiche les cocktails
  if (drinks === null) {
    title.innerHTML = `Please enter a valid Input`;
    drinkSection.innerHTML = "";
  } else {
    title.innerHTML = "";
    let drinkItems = drinks.map(function (item) {
      return `
  <a href="drink.html">
    <article class="cocktail" data-id=${item.idDrink}>
       <img src = ${item.strDrinkThumb}>
       <h3>${item.strDrink}</h3>
     </article>
   </a>
  `;
    });

    drinkSection.innerHTML = drinkItems.join("");
  }
  return drinkSection;
};

export default displayDrinks;
