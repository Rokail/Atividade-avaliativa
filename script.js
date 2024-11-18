const telefoneInput = document.getElementById('telefone');
const cpfInput = document.getElementById('cpf');

Inputmask("(99) 99999-9999").mask(telefoneInput);
Inputmask("999.999.999-99").mask(cpfInput);

const formCadastro = document.getElementById('formCadastro');
formCadastro.addEventListener('submit', (e) => {
  e.preventDefault();


  const usuario = {
    nome: document.getElementById('nome').value,
    email: document.getElementById('email').value,
    telefone: telefoneInput.value,
    cpf: cpfInput.value,
    senha: document.getElementById('senha').value,
  };

  localStorage.setItem('usuario', JSON.stringify(usuario));

  alert('Seu cadastro foi realizado com sucesso!');

  window.location.href = 'perfil.html';
});
