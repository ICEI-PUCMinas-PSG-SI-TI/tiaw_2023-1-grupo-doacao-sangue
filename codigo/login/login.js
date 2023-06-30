var emailInput = document.querySelector('input[type="text"]');
var passwordInput = document.querySelector('input[type="password"]');
var loginButton = document.querySelector('button');


// adciona evento ao botão
loginButton.addEventListener('click', function() {
    var email = emailInput.value;
    var password = passwordInput.value;

    const usuarios = JSON.parse(localStorage.getItem("usuarios"))

    // autentica as informações de login
    if (usuarios.some(user => user.email == email && user.senha == password)) {
        
        usuario = {
            "email": email,
            "logado": true
        }

        localStorage.setItem('usuario', JSON.stringify(usuario))
        
        window.location.href = '/codigo/perfil/index.html';
    } else {
        alert('Credenciais inválidas. Por favor, tente novamente.');
    }
});

