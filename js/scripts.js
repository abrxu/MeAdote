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


// Sidebar
    function showSidebar() {
        const sidebar = document.querySelector('.sidebar')
        sidebar.style.display = 'flex'
    }

    function hideSidebar() {
        const sidebar = document.querySelector('.sidebar')
        sidebar.style.display = 'none'
    }
