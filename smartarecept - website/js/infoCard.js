// Function to show or hide the content of info cards on index.html
function toggleInfo(containerIndex) {
    // Get all elements with the class 'container'
    var containers = document.querySelectorAll('.container');

    // Select the chosen container based on the index
    var selectedContainer = containers[containerIndex - 1];

    // Get the first <p> element inside the selected container
    var paragraphs = selectedContainer.getElementsByTagName('p')[0];

    // Get the first <h3> element inside the selected container
    var heading = selectedContainer.getElementsByTagName('h3')[0];

    // Get the screen width
    var screenWidth = window.innerWidth;

    // Check the screen width and adjust the content
    if (screenWidth < 710) {
        // For smaller screens: show or hide the paragraphs based on the current state
        if (paragraphs.style.display === 'none' || paragraphs.style.display === '') {
            paragraphs.style.display = 'block';
        } else {
            paragraphs.style.display = 'none';
        }
    } else {
        // For larger screens: toggle between heading and paragraphs based on the current state
        if (paragraphs.style.display === 'none' || paragraphs.style.display === '') {
            // If the paragraphs are hidden or the display style hasn't been set yet
            paragraphs.style.display = 'block';
            heading.style.display = 'none';
        } else {
            // Otherwise, if the paragraphs are visible
            paragraphs.style.display = 'none';
            heading.style.display = 'block';
        }
    }
}

// Get all elements with the class 'container'
var containerElements = document.querySelectorAll('.container');

// Add click listener for each container
for (var i = 0; i < containerElements.length; i++) {
    containerElements[i].addEventListener('click', function() {
        // Find the index of the current container in the list of containers
        var containerIndex = Array.prototype.indexOf.call(containerElements, this) + 1;
        
        // Call the toggleInfo function with the calculated index
        toggleInfo(containerIndex);
    });
}
