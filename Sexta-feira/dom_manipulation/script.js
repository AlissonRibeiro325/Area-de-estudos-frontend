const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
    e.preventDefault();

    const nome = form.nome.value.trim();
    const email = form.email.value.trim();
    const mensagem = form.mensagem.value.trim();

    const resultado = document.getElementById('resultado');

    if (nome && email && mensagem) {
        resultado.textContent = "Mensagem enviada com sucesso!";
        resultado.style.color = "green";
        form.reset(); 
    } else {
        resultado.textContent = "Por favor, preencha todos campos.";
        resultado.style.color = "red";
    }
})