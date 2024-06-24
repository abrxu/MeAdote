document.addEventListener("DOMContentLoaded", function() {
    // Botão "Quero adotar"
    document.querySelector('a[href="#adoption-form-header"]').addEventListener("click", function(event) {
        event.preventDefault();
        scrollToTarget("#adoption-form-header", -250);
    });

    // Botão "Sobre nós"
    document.querySelector('a[href="sobre-header"]').addEventListener("click", function(event) {
        event.preventDefault();
        scrollToTarget("#sobre-header", -100);
    });

    // Função para rolar suavemente até o elemento alvo
    function scrollToTarget(target, offset) {
        const targetElement = document.querySelector(target);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - offset,
                behavior: "smooth"
            });
        }
    }
});

    // Botão de rolar para o topo
    const scrollToTopButton = document.getElementById('scroll-to-top');

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) { // Exibe o botão quando rolar mais de 300px
            scrollToTopButton.style.display = 'block';
        } else {
            scrollToTopButton.style.display = 'none';
        }
    });

    scrollToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    function showSidebar() {
        const sidebar = document.querySelector('.sidebar')
        sidebar.style.display = 'flex'
    }

    function hideSidebar() {
        const sidebar = document.querySelector('.sidebar')
        sidebar.style.display = 'none'
    }
