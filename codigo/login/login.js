var emailInput = document.querySelector('input[type="text"]');
var passwordInput = document.querySelector('input[type="password"]');
var loginButton = document.querySelector('button');

// Add an event listener to the button
loginButton.addEventListener('click', function() {
    // Get the values from the input fields
    var email = emailInput.value;
    var password = passwordInput.value;

    // Perform authentication logic here
    if (email === 'lucas.gatinho' && password === '12345') {
        // Redirect to the profile page if login is successful
        window.location.href = '/codigo/perfil/index.html';
    } else {
        // Display an error message if login fails
        alert('Credenciais inválidas. Por favor, tente novamente.');
    }
});
