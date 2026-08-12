// =====================================================
// ELEMENTOS
// =====================================================

const header = document.getElementById("header");
const navbar = document.getElementById("navbar");
const menuToggle = document.getElementById("menuToggle");
const menuIcon = menuToggle.querySelector("i");


// =====================================================
// ABRIR / FECHAR MENU MOBILE
// =====================================================

menuToggle.addEventListener("click", () => {

    navbar.classList.toggle("active");

    const menuAberto =
        navbar.classList.contains("active");

    if (menuAberto) {

        menuIcon.classList.remove("fa-bars");
        menuIcon.classList.add("fa-xmark");

    } else {

        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");

    }

});


// =====================================================
// FECHAR MENU AO CLICAR EM LINK
// =====================================================

const navLinks =
    document.querySelectorAll(".navbar a");

navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");

        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");

    });

});


// =====================================================
// HEADER COM SOMBRA AO ROLAR
// =====================================================

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


// =====================================================
// FECHAR MENU AO CLICAR FORA
// =====================================================

document.addEventListener("click", (event) => {

    const clicouNoMenu =
        navbar.contains(event.target);

    const clicouNoBotao =
        menuToggle.contains(event.target);

    if (
        !clicouNoMenu &&
        !clicouNoBotao &&
        navbar.classList.contains("active")
    ) {

        navbar.classList.remove("active");

        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");

    }

});


// =====================================================
// CORRIGIR MENU AO AUMENTAR A TELA
// =====================================================

window.addEventListener("resize", () => {

    if (window.innerWidth > 1050) {

        navbar.classList.remove("active");

        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");

    }

});