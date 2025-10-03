const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const projectsContainer = document.getElementById("projectsContainer");



let currentSpot = 0;
const slideWidth = 50; // in pixels

previousButton.addEventListener("mouseenter", () => {

    if (currentSpot === 0) {
        return;
    }

    currentSpot += slideWidth;
    console.log("prev button was clicked: ", currentSpot);
    projectsContainer.style.transform = `translateX(${currentSpot}px)`;


});

nextButton.addEventListener("mouseenter", () => {
    
    if (currentSpot <= -2000) {
        return;
    }

    currentSpot -= slideWidth;
    console.log("Next button was clicked: ", currentSpot);

    projectsContainer.style.transform = `translateX(${currentSpot}px)`;

});

