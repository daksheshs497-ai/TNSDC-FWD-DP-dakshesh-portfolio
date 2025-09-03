// Animate progress bars on scroll

function animateSkills() {

  let skills = document.querySelectorAll(".progress-bar");

  skills.forEach(bar => {

    let value = bar.getAttribute("data-skill");

    let rect = bar.getBoundingClientRect();

    if (rect.top < window.innerHeight - 50) {

      bar.style.width = value + "%";

    }

  });

}

window.addEventListener("scroll", animateSkills);

window.addEventListener("load", animateSkills);

// Smooth scrolling for navbar

document.querySelectorAll("nav a").forEach(anchor => {

  anchor.addEventListener("click", function(e) {

    e.preventDefault();

    document.querySelector(this.getAttribute("href"))

      .scrollIntoView({ behavior: "smooth" });

  });

});