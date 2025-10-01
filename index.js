const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const projectsContainer = document.getElementById("projectsContainer");

// jeg vil gerne have fat i containeren der indeholder projekterne
// jeg vil gerne flytte containeren hen ad x aksen når jeg klikker på knapperne


let currentSpot = 0;
const slideWidth = 200; // in pixels

previousButton.addEventListener("click", () => {
    currentSpot += slideWidth;
    console.log("prev button was clicked: ", currentSpot);

    if (currentSpot <= 0) {
        return;
    }


    projectsContainer.style.transform = `translateX(${currentSpot}px)`;


});

nextButton.addEventListener("click", () => {
    currentSpot -= slideWidth;
    console.log("Next button was clicked: ", currentSpot);


    if (currentSpot <= -2000) {
        return;
    }



    projectsContainer.style.transform = `translateX(${currentSpot}px)`;

});

