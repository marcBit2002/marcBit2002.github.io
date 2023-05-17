//typing
var typed = new Typed(".typing", {
  strings: [
    "",
    "Web Designer",
    "Web Developer",
    "Mobile Designer",
    "App Developer",
  ],
  typeSpeed: 100,
  BackSpeed: 40,
  loop: true,
});

//aside

document.addEventListener("DOMContentLoaded", function () {
    // Selecciona la lista de navegación y todos los elementos de la lista
    const navList = document.querySelectorAll(".nav li a");
    // Selecciona todas las secciones
    const allSection = document.querySelectorAll(".section");
  
    // Agrega un controlador de eventos 'click' a cada enlace en la lista de navegación
    navList.forEach((a) => {
      a.addEventListener("click", function () {
        // Elimina la clase 'back-section' de todas las secciones
        removeBackSection();
        // Elimina la clase 'active' de todos los enlaces en la lista de navegación
        navList.forEach((link) => {
          if (link.classList.contains("active")) {
            // Agrega la clase 'back-section' a la sección correspondiente al enlace activo
            addBackSection(link);
          }
          link.classList.remove("active");
        });
        // Agrega la clase 'active' al enlace en el que se hizo clic
        this.classList.add("active");
        // Muestra la sección correspondiente al enlace en el que se hizo clic
        showSection(this);
      });
    });
  
    // Selecciona el botón 'Hire Me' y agrega un controlador de eventos 'click'
    document.querySelector(".hire-me").addEventListener("click", function () {
      // Muestra la sección correspondiente al botón 'Hire Me'
      showSection(this);
      // Actualiza la clase 'active' en la lista de navegación
      updateNav(this);
      // Elimina la clase 'back-section' de todas las secciones
      removeBackSection();
      // Agrega la clase 'back-section' a la sección correspondiente al botón 'Hire Me'
      addBackSection(this);
    });
    // Selecciona el botón 'Services'
    document.querySelector(".services").addEventListener("click", function () {
      showSection(this);
      updateNav(this);
      removeBackSection();
      addBackSection(this);
    });
    // Selecciona el botón 'Portfolio'
    document.querySelector(".portfolio").addEventListener("click", function () {
      showSection(this);
      updateNav(this);
      removeBackSection();
      addBackSection(this);
    });

    document.querySelector(".web").addEventListener("click", function () {
      showSection(this);
      updateNav(this);
      removeBackSection();
      addBackSection(this);
    });

    document.querySelector(".desktop").addEventListener("click", function () {
      showSection(this);
      updateNav(this);
      removeBackSection();
      addBackSection(this);
    });
    
  
    // Selecciona el botón de alternancia de navegación y el contenedor 'aside'
    const navTogglerBtn = document.querySelector(".nav-toggler");
    const aside = document.querySelector(".aside");
  
    // Agrega un controlador de eventos 'click' al botón de alternancia de navegación
    navTogglerBtn.addEventListener("click", () => {
      // Alterna la clase 'open' en el contenedor 'aside' y en el botón de alternancia de navegación
      aside.classList.toggle("open");
      navTogglerBtn.classList.toggle("open");
      // Alterna la clase 'open' en todas las secciones
      allSection.forEach((section) => section.classList.toggle("open"));
    });
  
    // Muestra la sección correspondiente al elemento proporcionado
    function showSection(element) {
      const target = element.getAttribute("href").split("#")[1];
      allSection.forEach((section) => section.classList.remove("active"));
      document.querySelector("#" + target).classList.add("active");
    }

   
    
  
    //Actualiza la clase 'active' en la lista de navegación en función del elemento proporcionado
    function updateNav(element) {
      navList.forEach((link) => link.classList.remove("active"));
      const target = element.getAttribute("href").split("#")[1];
      navList.forEach((link) => {
        if (target === link.getAttribute("href").split("#")[1]) {
          link.classList.add("active");
        }
      });
    }


    
  
    // Elimina la clase 'back-section' de todas las secciones
    function removeBackSection() {
      allSection.forEach((section) => section.classList.remove("back-section"));
    }
  
    // Agrega la clase 'back-section' a la sección correspondiente al elemento proporcionado
    function addBackSection(element) {
      const target = element.getAttribute("href").split("#")[1];
      document.querySelector("#" + target).classList.add("back-section");
    }
  });
  