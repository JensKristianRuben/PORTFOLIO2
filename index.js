const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const projectsContainer = document.getElementById("projectsContainer");





let currentSpot = 0;
const slideWidth = 50; // in pixels
let scrollInterval;

previousButton.addEventListener("mouseenter", () => {

   scrollInterval = setInterval(() => {

        if(currentSpot < 0) {
            currentSpot += slideWidth;
            console.log(slideWidth);
            projectsContainer.style.transform = `translateX(${currentSpot}px)`;
            
        } 
   }, 80);
});

nextButton.addEventListener("mouseenter", () => {
    
    scrollInterval = setInterval(() => {

        if (currentSpot > -2000) {
            currentSpot -= slideWidth;
            console.log(slideWidth);
            projectsContainer.style.transform = `translateX(${currentSpot}px)`
            
        }
    }, 80);
});

previousButton.addEventListener("mouseleave", () => clearInterval(scrollInterval))
nextButton.addEventListener("mouseleave", () => clearInterval(scrollInterval))

