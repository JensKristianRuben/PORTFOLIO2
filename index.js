const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const projectsContainer = document.getElementById("projectsContainer");
const slidingViewport = document.getElementById("viewport");


function calculateMaxSlideWitdh() {
  const projectsContainerChildren = Array.from(projectsContainer.children); //nødt til at caste det til et array

  let allProjectWidth = 0;
  const gap = 16;
  projectsContainerChildren.forEach((element) => {
    const projectWith = element.offsetWidth; //nødvændig for at få bredde - den kan ikke læses hvis den ikke er sat inline
    allProjectWidth += projectWith + gap ;
  });

  return (maxSlideWitdh = allProjectWidth - slidingViewport.offsetWidth);
}


let currentSpot = 0;
const slideWidth = 50; // in pixels
let scrollInterval;

previousButton.addEventListener("mouseenter", () => {
  scrollInterval = setInterval(() => {
    if (currentSpot < 0) {
      currentSpot += slideWidth;
      console.log(currentSpot);
      projectsContainer.style.transform = `translateX(${currentSpot}px)`;
    }
  }, 80);
});

nextButton.addEventListener("mouseenter", () => {
  scrollInterval = setInterval(() => {
    if (currentSpot > -calculateMaxSlideWitdh()) { // læg mærke til minus foran funktionen
      currentSpot -= slideWidth;
      console.log(currentSpot);
      projectsContainer.style.transform = `translateX(${currentSpot}px)`;
    }
  }, 80);
});

previousButton.addEventListener("mouseleave", () => clearInterval(scrollInterval));
nextButton.addEventListener("mouseleave", () => clearInterval(scrollInterval));
