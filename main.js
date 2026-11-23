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


const formulario = document.getElementById("formWhatsApp");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    // Pegar os dados digitados
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;

    // Número do WhatsApp da empresa
    const telefone = "5511943385510";

    // Criar mensagem
    const mensagem = `Olá! Meu nome é ${nome}.
Meu e-mail é ${email}.

Gostaria de entrar em contato com o Cordeirinho!`;

    // Criar link do WhatsApp
    const link = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;

    // Abrir WhatsApp
    window.open(link, "_blank");

});
