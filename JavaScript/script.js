document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const responseDiv = document.getElementById('form-response');

    // Validação simples
    if (!nome || !email) {
        responseDiv.textContent = 'Por favor, preencha todos os campos.';
        responseDiv.style.color = 'red';
        responseDiv.classList.remove('hidden');
        return;
    }

    responseDiv.textContent = `Obrigado, ${nome}! Sua mensagem foi enviada.`;
    responseDiv.style.color = 'green';
    responseDiv.classList.remove('hidden');

    // Reseta o formulário
    this.reset();

    // Esconde a mensagem após alguns segundos
    setTimeout(() => {
        responseDiv.classList.add('hidden');
    }, 3000);
});
