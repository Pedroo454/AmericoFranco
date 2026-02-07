// Script para toggle do menu hamburger em mobile
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    // Fecha o menu ao clicar em um link (opcional para melhor UX)
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
        });
    });
});

// Função simples para galeria (expansão de imagem, se necessário - aqui apenas placeholder)
function openImage(src) {
    // Exemplo: abrir em modal (adicione HTML para modal se quiser)
    alert('Imagem clicada: ' + src);
    // Para implementar modal, adicione um elemento <div id="modal"> no HTML e manipule com JS.
}
