document.addEventListener("DOMContentLoaded", function () {
  // Get the navbar element
  const navbar = document.querySelector("nav");

  // Add a scroll event listener to the window
  window.addEventListener("scroll", function () {
    // Check if the scroll position is greater than 50 pixels
    if (window.scrollY > 50) {
      // If it is, add a class to change the background
      navbar.classList.add("scrolled");
    } else {
      // If not, remove the class
      navbar.classList.remove("scrolled");
    }

  
  });
});





