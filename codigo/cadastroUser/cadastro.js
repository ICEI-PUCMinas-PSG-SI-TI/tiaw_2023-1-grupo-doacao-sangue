var entrarButton = document.getElementById('enviar');
var email= document.getElementById('email');
var password = document.getElementById('password');
var datanascimento = document.getElementById('datanascimento');
var tiposangue = document.getElementById('tiposangue');
var nome = document.getElementById('nome');

var usuarios = JSON.parse(localStorage.getItem('usuarios'));

entrarButton.addEventListener('click',  function() {
    
    var usuario = {};

    if(nome.value != ''){
        usuario.nome = nome.value;
    }
    
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

    if(usuarios.length > 0){
        usuarios.forEach(user => {
            if(usuario.email == user.email){
                existe = true;
            }
             window.location.href = '/codigo/login/login.html';
        })
    }else{
        window.location.href = '/codigo/login/login.html';
    }
   
    
    if(existe == true){
        alert("Usuário já existe")
    }else{
        usuarios.push(usuario);
        alert("Usuário cadastrado");
    }
    
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
})