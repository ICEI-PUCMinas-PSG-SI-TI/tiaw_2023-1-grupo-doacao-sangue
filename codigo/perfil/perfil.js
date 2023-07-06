
window.onload = () => {

    usuario = JSON.parse(localStorage.getItem('usuario'));

    if(usuario != null){
        usuarios = JSON.parse(localStorage.getItem('usuarios'));

        usuarioCadastrado = usuarios.filter(user => (user.email == usuario.email))[0];

        document.getElementById('nascimento').textContent = usuarioCadastrado.datanascimento.replace(/^(\d{4})-(\d{2})-(\d{2})$/, '$3/$2/$1')
        document.getElementById('email').textContent = usuarioCadastrado.email;
        document.getElementById('nome').textContent = usuarioCadastrado.nome;
        document.getElementById('tipoSangue').textContent = usuarioCadastrado.tiposangue;

    }
}
    fetch("detalhes.json")
    .then(function(response){
    return response.json();
        })
    .then(function(products){
    let placeholder = document.querySelector("#data-output");
    let out = "";
   for(let product of products){
      out += `
         <tr>
            <td>${product.name}</td>
            <td>${product.texto}</td>
            <td>${product.text}</td>
         </tr>
      `;
   }
 
   placeholder.innerHTML = out;
});
    