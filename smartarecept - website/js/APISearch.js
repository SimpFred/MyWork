export async function APICall(input) {
    // Base address and API keys
    const address = "https://api.edamam.com/api/recipes/v2?type=public&q=";
    const appId = "&app_id=77721252";
    const appKey = "&app_key=a05e185221bf0ccc0dc76a4b8a4692e1";
    
    // Limit the results to main courses
    const onlyMainCourse = "&dishType=Main%20course";
    
    // Encode the search query with percent-encoding for URL
    const searchQuery = encodeStringWithPercent20(input);
    
    // Create the complete URL for the API call
    const url = address + searchQuery + appId + appKey + onlyMainCourse;
    
    try {
        // Perform the API call and handle errors
        const response = await fetch(url);
        
        // If the network status is not OK, throw an error
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
    
        // Return the JSON response from the API call
        return response.json();
    } catch (error) {
        // Log the error message if something goes wrong during the API call
        console.error("Error making API call: ", error);
        return null; // Return null on error
    }
}

// Function to encode string with spaces as "%20" for URL
function encodeStringWithPercent20(inputString) {
    return inputString.replace(/ /g, "%20");
}
