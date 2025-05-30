/**
 * Main Page Script
 * Este script gerencia o carrossel, navegação e efeitos da página principal
 */

document.addEventListener('DOMContentLoaded', function() {
    // Inicializar efeito de header transparente/sólido ao rolar
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Inicializar carrosséis
    initCarousels();
    
    // Adicionar animações de entrada
    addEntryAnimations();
    
    // Configurar navegação para páginas de detalhes
    setupDetailNavigation();
});

// Função para inicializar os carrosséis
function initCarousels() {
    const carousels = document.querySelectorAll('.carousel');
    
    carousels.forEach(carousel => {
        const container = carousel.querySelector('.carousel-container');
        const leftControl = carousel.querySelector('.carousel-control.left');
        const rightControl = carousel.querySelector('.carousel-control.right');
        
        // Configurar controles de navegação
        if (leftControl && rightControl && container) {
            // Calcular a largura de deslocamento (20% da largura visível)
            const scrollAmount = container.clientWidth * 0.8;
            
            // Controle esquerdo
            leftControl.addEventListener('click', function() {
                container.scrollBy({
                    left: -scrollAmount,
                    behavior: 'smooth'
                });
            });
            
            // Controle direito
            rightControl.addEventListener('click', function() {
                container.scrollBy({
                    left: scrollAmount,
                    behavior: 'smooth'
                });
            });
        }
    });
}

// Função para adicionar animações de entrada
function addEntryAnimations() {
    // Animar elementos ao entrar na viewport
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.animate-on-scroll:not(.animated)');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;
            
            // Se o elemento estiver visível na viewport
            if (elementTop < window.innerHeight && elementBottom > 0) {
                element.classList.add('animated');
                
                // Adicionar classe de animação específica
                if (element.dataset.animation) {
                    element.classList.add(element.dataset.animation);
                } else {
                    element.classList.add('fade-in');
                }
            }
        });
    };
    
    // Executar uma vez no carregamento
    animateOnScroll();
    
    // Adicionar ao evento de scroll
    window.addEventListener('scroll', animateOnScroll);
}

// Função para configurar navegação para páginas de detalhes
function setupDetailNavigation() {
    const detailLinks = document.querySelectorAll('[data-detail-page]');
    
    detailLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const detailPage = this.getAttribute('data-detail-page');
            if (detailPage) {
                // Redirecionar para a página de detalhes
                window.location.href = `pages/${detailPage}.html`;
            }
        });
    });
}
