import { displayRecipes } from "./handleData.js";
import { APICall } from "./APISearch.js";

// Get the form and search input using DOM
const searchForm = document.getElementById("searchForm");
const searchInput = searchForm.querySelector("input[name='query']");

// Add an event listener for when the form is submitted
searchForm.addEventListener("submit", async function (event) {
    // Prevent the form from being submitted in the usual way
    event.preventDefault();

    // Get the value from the search input
    const searchQuery = searchInput.value;

    try {
        // Try to fetch data and display recipes
        await fetchDataAndDisplayRecipes(searchQuery);
    } catch (error) {
        // If an error occurs, log the error message to the console
        console.error("Error fetching and displaying data:", error);
    }
});

// Function to fetch data and display recipes
export async function fetchDataAndDisplayRecipes(searchQuery) {
    try {
        // Try to make an API call using the search query
        const APIResponse = await APICall(searchQuery);
        
        // Display the recipes using the API response
        displayRecipes(APIResponse);
    } catch (error) {
        // If an error occurs, log the error message to the console
        console.error("Error fetching data:", error);
    }
}
