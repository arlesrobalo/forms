$(document).ready(function(){
  $('#health-form').submit(function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    var formData = $(this).serialize();
    $.ajax({
      type: 'POST',
      url: $(this).attr('action'), // Usa a URL definida no atributo action do formulário
      data: formData,
      dataType: 'json', // Espera-se que a resposta seja JSON
      success: function(response) {
        if(response.result === "success") {
          alert("Formulário enviado com sucesso!");
          // Aqui você pode redirecionar o usuário ou limpar o formulário
          // window.location.href = "pagina_de_sucesso.html";
          // $('#health-form').trigger("reset");
        } else {
          // Se o servidor retornar um resultado diferente de sucesso
          alert("Houve um problema ao enviar o formulário.");
        }
      },
error: function(jqXHR, textStatus, errorThrown) {
  console.error("Erro na comunicação com o servidor: ", textStatus, errorThrown);
  console.log(jqXHR.responseText); // Adicione esta linha para ver a resposta do servidor
  alert('Houve um erro ao enviar o formulário.');
}
    });
  });
});
