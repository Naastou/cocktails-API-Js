import { hideLoading } from "./toggleLoading.js";
import get from "./getElement.js";

const displayDrink = (data) => {
  console.log(data);

  // cache le chargements
  hideLoading();
  // affiche les infos d'un cocktail

  let SingleDrinkSection = get(".single-drink");
  let dishthtml = `
    <img src=${data.drinks[0].strDrinkThumb}  class="drink-img" />
      <article class="drink-info">
        <h2 class="drink-name">${data.drinks[0].strDrink}</h2>
        <p class="drink-description">${data.drinks[0].strInstructions}</p>
        <ul class="drink-ingredients">
        <li>${data.drinks[0].strIngredient1}</li>
        <li>${data.drinks[0].strIngredient2}</li>
        <li>${data.drinks[0].strIngredient3}</li>
        <li>${data.drinks[0].strIngredient4}</li>
        </ul>
        <a href="./index.html" class="btn">all cocktails</a>
      </article>
  `;

  SingleDrinkSection.innerHTML = dishthtml;
};

export default displayDrink;
