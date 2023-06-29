var entrarButton = document.getElementById('enviar');
var email= document.getElementById('email');
var password = document.getElementById('password');
var datanascimento = document.getElementById('datanascimento');
var tiposangue = document.getElementById('tiposangue');

var usuarios = JSON.parse(localStorage.getItem('usuarios'));

entrarButton.addEventListener('click',  function() {
    
    var usuario = {};
    
    if(email.value != ''){
        usuario.email = email.value;
    }

    if(password.value != ''){
        usuario.senha = password.value;
    }

    if(datanascimento.value != ''){
        usuario.datanascimento = datanascimento.value;
    }

    if(tiposangue.value != ''){
        usuario.tiposangue = tiposangue.value;
    }

    if(usuarios == null){
        usuarios = [];
    }

    var existe = false;
    usuarios.forEach(user => {
        if(usuario.email == user.email){
            existe = true;
        }
    window.location.href = '/codigo/login/login.html';
    })
    
    if(existe == true){
        alert("Usuario ja existe")
    }else{
        usuarios.push(usuario);
    }
    
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
})

