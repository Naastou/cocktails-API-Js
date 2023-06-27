import { showLoading } from "./toggleLoading.js";

const loading = document.querySelector(".loading");

const fetchDrinks = async (url) => {
  // montre le chargement
  showLoading();
  // récupère les cocktails

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP response error: ${response.status}`);
    }
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
    loading.textContent = "There was an error...";
  }
};

export default fetchDrinks;
