const btnLogin = document.getElementById('btnLogin');
const modal = document.getElementById('modal');
const closeModal = document.getElementById('closeModal');
const formCadastro = document.getElementById('formCadastro');

btnLogin.addEventListener('click', () => {
  modal.style.display = 'flex';
});

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});


formCadastro.addEventListener('submit', (e) => {
  e.preventDefault();

  const usuario = {
    nome: document.getElementById('nome').value,
    email: document.getElementById('email').value,
    telefone: document.getElementById('telefone').value,
    cpf: document.getElementById('cpf').value,
    senha: document.getElementById('senha').value,
  };

  localStorage.setItem('usuario', JSON.stringify(usuario));
  alert('Seu cadastro foi realizado!');
  modal.style.display = 'none';
  window.location.href = 'perfil.html';
});


if (window.location.pathname.includes('perfil.html')) {
  const userProfile = document.getElementById('userProfile');
  const usuario = JSON.parse(localStorage.getItem('usuario'));

  if (usuario) {
    userProfile.innerHTML = `
      <p><strong>Nome:</strong> ${usuario.nome}</p>
      <p><strong>Email:</strong> ${usuario.email}</p>
      <p><strong>Telefone:</strong> ${usuario.telefone}</p>
      <p><strong>CPF:</strong> ${usuario.cpf}</p>
    `;
  } else {
    userProfile.innerHTML = `<p>Nenhum dado encontrado.</p>`;
  }
}