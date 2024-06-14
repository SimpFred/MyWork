import { fetchDataAndDisplayRecipes } from "./index.js";

// Function that waits for 5 milliseconds to let the page load
// completely and then checks if there is anything in the search field.
// If so, it means that the user has used the back button in the browser.
// Therefore, the page should load with the data that was there before.
window.onload = function () {
    setTimeout(function () {
        const searchForm = document.getElementById("searchForm");
        const searchInput = searchForm.querySelector("input[name='query']");
        const searchQuery = searchInput.value.trim();

        if (searchQuery === "") {
            return;
        } else {
            fetchDataAndDisplayRecipes(searchQuery);
        }
    }, 5);
};
