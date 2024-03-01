$(document).ready(function(){
  $('#health-form').submit(function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    var formData = $(this).serialize(); // Serializa os dados do formulário
    $.ajax({
      type: 'POST',
      url: $(this).attr('action'), // Usa a URL do atributo action do formulário
      data: formData,
      dataType: 'json', // Espera-se que a resposta seja JSON
      success: function(response) {
        if(response.result === "success") {
          alert("Formulário enviado com sucesso!");
          // Aqui você pode redirecionar o usuário ou limpar o formulário
          // window.location.href = "pagina_de_sucesso.html";
          // $('#health-form').trigger("reset");
        } else {
          alert("Houve um problema ao enviar o formulário.");
        }
      },
      error: function(error) {
        alert('Erro na comunicação com o servidor.');
      }
    });
  });
});
