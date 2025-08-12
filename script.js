// Wait for the entire page to be loaded before running the script
window.onload = function() {
    // Get the "Learn More" button by its ID
    const learnMoreButton = document.getElementById('learn-more-button');

    // Get the paragraph and section to update
    const getStartedText = document.getElementById('get-started-text');
    const getStartedCard = document.getElementById('get-started-card');

    // Add a click event listener to the button
    learnMoreButton.addEventListener('click', function(event) {
        // Prevent the default link behavior of the anchor tag
        event.preventDefault();

        // Change the text content of the paragraph
        getStartedText.textContent = "You've clicked the 'Learn More' button! This is just a simple example of how you can make your site interactive with JavaScript.";

        // You can also add more dynamic changes, like adding a class for styling
        getStartedCard.classList.add('active');

        // Log a message to the browser's console
        console.log("Button was clicked!");
    });
};
