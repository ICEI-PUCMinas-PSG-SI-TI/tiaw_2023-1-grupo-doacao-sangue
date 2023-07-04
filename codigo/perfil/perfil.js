
window.onload = () => {

    usuario = JSON.parse(localStorage.getItem('usuario'));

    if(usuario != null){
        usuarios = JSON.parse(localStorage.getItem('usuarios'));

        usuarioCadastrado = usuarios.filter(user => (user.email == usuario.email))[0];

        document.getElementById('nascimento').textContent = usuarioCadastrado.datanascimento;
        document.getElementById('email').textContent = usuarioCadastrado.email;
        document.getElementById('nome').textContent = usuarioCadastrado.nome;
        document.getElementById('tipoSangue').textContent = usuarioCadastrado.tiposangue;

    }
}