// ================= DARK / LIGHT MODE =================

const themeButton = document.getElementById("themeButton");

themeButton.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        themeButton.textContent = "☀️";

    } else {

        themeButton.textContent = "🌙";

    }

});


// ================= NAVBAR SCROLL =================

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.forEach(function (item) {
            item.classList.remove("active");
        });

        link.classList.add("active");

    });

});


// ================= PROJECT BUTTONS =================

const projectLinks = document.querySelectorAll(".project-link");

projectLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        if (link.getAttribute("href") === "#") {

            event.preventDefault();

            alert("Project link will be added soon!");

        }

    });

});


// ================= PAGE LOAD MESSAGE =================

console.log("Welcome to Revathi's Portfolio!");


// ================= SCROLL ANIMATION =================

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold: 0.15
    }
);

sections.forEach(function (section) {

    observer.observe(section);

});
