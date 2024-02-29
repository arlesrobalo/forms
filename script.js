
const form = document.forms['submit-to-google-sheet'];
form.addEventListener('submit', e => {
  e.preventDefault();
  fetch('SUA_URL_DA_WEB_APP', {
    method: 'POST',
    body: new FormData(form),
  })
  .then(response => response.json())
  .then(response => alert('Formulário enviado com sucesso!'))
  .catch(error => console.error('Erro ao enviar o formulário:', error));
});
