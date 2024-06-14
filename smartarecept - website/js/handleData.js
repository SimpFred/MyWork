export function displayRecipes(APIResponse) {
  const recipes = APIResponse.hits;
  
  // Get the recipe container from the DOM tree
  const recipeContainer = document.getElementById("recipeContainer");
  
  // Clear the container before adding new recipes
  recipeContainer.innerHTML = "";
  
  recipes.forEach((recipe) => {
    // Create a new <article> element for each recipe
    const recipeItem = document.createElement("article");
    
    // Add the "recipe-item" class for styling
    recipeItem.classList.add("recipe-item");
    
    // Fill in the content for the recipe element
    recipeItem.innerHTML = `
        <picture>
          <source media="(min-width: 650px)" srcset="${recipe.recipe.image}">
          <source media="(min-width: 465px)" srcset="${recipe.recipe.images.SMALL.url}">
          <img src="${recipe.recipe.image}" alt="${recipe.recipe.label}">
        </picture>
  
        <h4>${recipe.recipe.label}</h4>
        <hr>
        <p><span class="ingredient-count">${recipe.recipe.ingredients.length}</span> Ingredients</p>
      `;
    
    // Add a click listener for each recipe
    recipeItem.addEventListener("click", () => {
      // Navigate to a new page with the recipe's ID
      const recipeAddressAndId = recipe._links.self.href;
      window.location.href = `recipePage.html?id=${recipeAddressAndId}`;
    });
    
    // Add the recipe element to the recipe container
    recipeContainer.appendChild(recipeItem);
  });
}
