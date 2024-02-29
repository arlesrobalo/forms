
 const form = document.forms['submit-to-google-sheet'];
  form.addEventListener('submit', e => {
    e.preventDefault();
    fetch('https://script.google.com/macros/s/AKfycbx56V6WtCIq2KYc24dqw1kJxZOwOEqEeuNR9MhhahcPwbFnzJW4lm1xIBAJnQ7l5Ll7/exec', {
      method: 'POST',
      body: new FormData(form),
    })
    .then(response => response.json())
    .then(response => alert('Formulário enviado com sucesso!'))
    .catch(error => console.error('Erro ao enviar o formulário:', error));
  });
