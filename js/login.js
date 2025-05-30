/**
 * Login Page Script
 * Este script gerencia o formulário de login/captação e integração com EmailJS
 */

document.addEventListener('DOMContentLoaded', function() {
    // Atualizar o ano atual no rodapé
    const currentYearElement = document.querySelector('.current-year');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }
    
    // Configurar o formulário de captação
    const signupForm = document.getElementById('signup-form');
    const successMessage = document.createElement('div');
    successMessage.className = 'success-message';
    
    // Adicionar mensagem de sucesso após o formulário
    if (signupForm) {
        signupForm.after(successMessage);
        
        // Adicionar evento de envio do formulário
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Obter os valores do formulário
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            
            // Validar os campos
            if (!name || !email || !phone) {
                alert('Por favor, preencha todos os campos.');
                return;
            }
            
            // Configurar EmailJS
            // ÁREA EDITÁVEL: Substitua 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID' e 'YOUR_USER_ID' pelos seus dados do EmailJS
            const serviceID = 'YOUR_SERVICE_ID';
            const templateID = 'YOUR_TEMPLATE_ID';
            const userID = 'YOUR_USER_ID';
            
            // Preparar os parâmetros para o EmailJS
            const params = {
                name: name,
                email: email,
                phone: phone
            };
            
            // Mostrar indicador de carregamento
            const submitButton = signupForm.querySelector('button[type="submit"]');
            const originalButtonText = submitButton.textContent;
            submitButton.disabled = true;
            
            // Verificar o idioma atual para exibir o texto de carregamento
            const currentLang = localStorage.getItem('preferredLanguage') || 'pt';
            submitButton.textContent = currentLang === 'pt' ? 'Enviando...' : 'Sending...';
            
            // Enviar o e-mail usando EmailJS
            // Comentado para evitar erros sem as credenciais corretas
            /*
            emailjs.send(serviceID, templateID, params, userID)
                .then(function() {
                    // Exibir mensagem de sucesso
                    successMessage.style.display = 'block';
                    successMessage.textContent = currentLang === 'pt' ? 
                        'Dados enviados com sucesso!' : 
                        'Data sent successfully!';
                    
                    // Limpar o formulário
                    signupForm.reset();
                    
                    // Redirecionar para a página principal após 2 segundos
                    setTimeout(function() {
                        window.location.href = 'main.html';
                    }, 2000);
                })
                .catch(function(error) {
                    console.error('Erro ao enviar e-mail:', error);
                    alert(currentLang === 'pt' ? 
                        'Ocorreu um erro ao enviar os dados. Por favor, tente novamente.' : 
                        'An error occurred while sending the data. Please try again.');
                })
                .finally(function() {
                    // Restaurar o botão
                    submitButton.disabled = false;
                    submitButton.textContent = originalButtonText;
                });
            */
            
            // SIMULAÇÃO DE ENVIO (remova este bloco quando implementar o EmailJS acima)
            setTimeout(function() {
                // Exibir mensagem de sucesso
                successMessage.style.display = 'block';
                successMessage.textContent = currentLang === 'pt' ? 
                    'Dados enviados com sucesso!' : 
                    'Data sent successfully!';
                
                // Limpar o formulário
                signupForm.reset();
                
                // Redirecionar para a página principal após 2 segundos
                setTimeout(function() {
                    window.location.href = 'main.html';
                }, 2000);
                
                // Restaurar o botão
                submitButton.disabled = false;
                submitButton.textContent = originalButtonText;
            }, 1500);
        });
    }
});
