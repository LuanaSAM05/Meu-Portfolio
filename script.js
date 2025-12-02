// Cria uma nova instância da biblioteca Typed.js
// ".text" = seleciona o elemento HTML que vai receber o texto animado
var typed = new Typed(".text", {

    // Lista de frases que vão aparecer digitando
    strings: ["Web Developer", "Front-End Developer", "UI Designer"],

    // Velocidade ao digitar (em milissegundos por caractere)
    typeSpeed: 100,

    // Velocidade ao apagar
    backSpeed: 100,

    // Tempo de espera antes de começar a apagar
    backDelay: 1000,

    // Faz a animação ficar repetindo para sempre
    loop: true
});
