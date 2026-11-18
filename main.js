// carrosel inicio
let indice = 0;

function mudarSlide(direcao) {

    const slides = document.querySelectorAll(".slide");

    slides[indice].classList.remove("ativo");

    indice += direcao;

    if (indice >= slides.length) {
        indice = 0;
    }

    if (indice < 0) {
        indice = slides.length - 1;
    }

    slides[indice].classList.add("ativo");
}

