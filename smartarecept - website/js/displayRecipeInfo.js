// Get recipe information (id) from the URL
const searchParams = new URLSearchParams(window.location.search);
const recipeId = searchParams.get("id");

// Function to fetch recipe details using the recipe ID
async function fetchRecipeById(recipeAddressAndId) {
  const appId = "&app_id=77721252";
  const appKey = "&app_key=a05e185221bf0ccc0dc76a4b8a4692e1";
  const url = recipeAddressAndId + appId + appKey;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  } catch (error) {
    console.error("Error making API call: ", error);
    return null;
  }
}

// Function to display recipe details on the page
async function displayRecipeDetails() {
  const recipeInfoContainer = document.getElementById("recipeInfoContainer");
  try {
    const response = await fetchRecipeById(recipeId);
    const recipeObject = response.recipe;

    const recipeItem = document.createElement("article");
    recipeItem.innerHTML = `
      <h2>${recipeObject.label}</h2>
      <picture>
        <source media="(min-width: 650px)" srcset="${recipeObject.image}">
        <source media="(min-width: 465px)" srcset="${recipeObject.images.SMALL.url}">
       <img src="${recipeObject.image}" alt="${recipeObject.label}">
      </picture>
      <aside class="recipe-details">
       <p>This recipe is for ${recipeObject.yield} servings</p>
        <ul>
         ${recipeObject.ingredientLines.map((ingredient) => `<li>${ingredient}</li>`).join("")}
        </ul>
     </aside>
      <hr>
      <a href="${recipeObject.url}" target="_blank">Go to recipe website ${recipeObject.source} for more information</a>
    `;

    recipeInfoContainer.appendChild(recipeItem);
  } catch (error) {
    console.error("Error fetching recipe details:", error);
  }
}

displayRecipeDetails();
