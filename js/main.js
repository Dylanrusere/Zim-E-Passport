// Hamburger Menu
const hamMenu = document.querySelector(".ham_menu");
const offMenu = document.querySelector(".offScreenMenu");

hamMenu.addEventListener("click", () => {
    hamMenu.classList.toggle("active");
    offMenu.classList.toggle("active");
});

// Pre-Loader
window.addEventListener("load", () => {
  const loader = document.querySelector(".preloader");

  loader.classList.add("preloader_hidden");

  loader.addEventListener("transitionend", () => {
      document.body.removeChild("loader");
  })
});


// Counter 
let targetNumber1 = 999;
let targetNumber2 = 199;
let counter1 = 0;
let counter2 = 0;
let counterElement1 = document.getElementById("counter_thousand");
let counterElement2 = document.getElementById("counter_percentage");

function incrementCounter1() {
    counter1++;
    counterElement1.textContent = counter1;

    if (counter1 <= targetNumber1) {
      setTimeout(incrementCounter1, 50);
    }
  }

  function incrementCounter2() {
    counter2++;
    counterElement2.textContent = counter2;

    if (counter2 <= targetNumber2) {
      setTimeout(incrementCounter2, 100);
    }
  }

incrementCounter1();
incrementCounter2();

// Slider


// Search Bar
const searchInput = document.getElementById("search_input");
const searchButton = document.getElementById("search_icon");

searchButton.addEventListener("click", () => {
  const searchTerm = searchInput.value.trim();
  if (searchTerm !== '') {
    
    console.log("Searching for:", searchTerm);
  }
});

searchInput.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    searchButton.click();
  }
});


$('.testimonials-container').owlCarousel({
  loop:true,
  autoplay:true,
  autoplayTimeout:6000,
  margin:10,
  nav:true,
  navText:["<i class='fa-solid fa-arrow-left'></i>",
           "<i class='fa-solid fa-arrow-right'></i>"],
  responsive:{
      0:{
          items:1,
          nav:false
      },
      600:{
          items:1,
          nav:true
      },
      768:{
          items:2
      },
  }
})

