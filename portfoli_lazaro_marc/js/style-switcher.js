//COLORS
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", ()=>{
    document.querySelector(".style-switcher").classList.toggle("open");
});

//amagar switcher
window.addEventListener("click", (e) => {
    if (document.querySelector(".style-switcher").classList.contains("open")) {
      if (e.target !== document.querySelector(".style-switcher") && !document.querySelector(".style-switcher").contains(e.target)) {
        document.querySelector(".style-switcher").classList.remove("open"); // Se cierra el style-switcher
      }
    }
  });
  

const alteranteStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color) {
    alteranteStyles.forEach((style) => {
        if(color === style.getAttribute("title")){
            style.removeAttribute("disabled");
        } else{
            style.setAttribute("disabled", "true");
        }
    })
    
}

//TEMA FOSC O CLAR

const dayNight = document.querySelector(".day-night");
const logoImg = document.querySelector(".logo img");

dayNight.addEventListener("click", () =>{
  dayNight.querySelector("i").classList.toggle("fa-sun");
  dayNight.querySelector("i").classList.toggle("fa-moon");
  document.body.classList.toggle("dark");
  
  if (document.body.classList.contains("dark")) {
    logoImg.src = "./images/logo_marc_night.svg";
    logoImg.setAttribute("data-theme", "dark");
  } else {
    logoImg.src = "./images/logo_marc.svg";
    logoImg.setAttribute("data-theme", "light");
  }
})

window.addEventListener("load", ()=> {
  if (document.body.classList.contains("dark")) {
    dayNight.querySelector("i").classList.add("fa-sun");
    logoImg.src = "./images/logo_marc_night.svg";
    logoImg.setAttribute("data-theme", "dark");
  } else {
    dayNight.querySelector("i").classList.add("fa-moon");
    logoImg.setAttribute("data-theme", "light");
  }
})



