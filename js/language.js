/**
 * Sistema de Internacionalização
 * Este script gerencia a alternância entre idiomas (português e inglês)
 */

// Objeto para armazenar as traduções
const translations = {
    pt: {},
    en: {}
};

// Função para inicializar o sistema de idiomas
function initLanguageSystem() {
    // Definir idioma padrão (português)
    let currentLanguage = localStorage.getItem('preferredLanguage') || 'pt';
    
    // Configurar o seletor de idioma
    const languageSelect = document.getElementById('language-select');
    if (languageSelect) {
        languageSelect.value = currentLanguage;
        languageSelect.addEventListener('change', function() {
            changeLanguage(this.value);
        });
    }
    
    // Aplicar o idioma atual
    applyLanguage(currentLanguage);
}

// Função para mudar o idioma
function changeLanguage(lang) {
    // Salvar preferência do usuário
    localStorage.setItem('preferredLanguage', lang);
    
    // Aplicar o idioma
    applyLanguage(lang);
}

// Função para aplicar o idioma selecionado
function applyLanguage(lang) {
    // Selecionar todos os elementos com a classe 'lang'
    const elements = document.querySelectorAll('.lang');
    
    elements.forEach(element => {
        // Obter o texto correspondente ao idioma
        const text = element.getAttribute(`data-${lang}`);
        
        // Se o elemento tiver o atributo correspondente ao idioma, aplicar o texto
        if (text) {
            // Verificar se é um elemento de input
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                if (element.getAttribute('placeholder')) {
                    element.setAttribute('placeholder', text);
                }
            } else {
                element.textContent = text;
            }
        }
    });
    
    // Atualizar o atributo lang do HTML
    document.documentElement.lang = lang;
}

// Inicializar o sistema de idiomas quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', initLanguageSystem);
