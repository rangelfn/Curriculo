function showConfirmation() {
  // Obter os dados do formulário
  var name = document.getElementsByName('name')[0].value;
  var email = document.getElementsByName('email')[0].value;
  var phone = document.getElementsByName('phone')[0].value;
  var message = document.getElementsByName('message')[0].value;

  console.log('Nome:', name);
  console.log('Email:', email);
  console.log('Telefone:', phone);
  console.log('Mensagem:', message);

  // Montar a mensagem de confirmação
  var confirmationMessage =
    'Nome: ' + name + '\n' +
    'Email: ' + email + '\n' +
    'Telefone: ' + phone + '\n' +
    'Mensagem: ' + message;

  // Atualizar o conteúdo da div de confirmação
  var confirmationDiv = document.getElementById('confirmation-message');
  confirmationDiv.innerHTML = confirmationMessage;

  // Mostrar a div de confirmação
  confirmationDiv.style.display = 'block';

  // Mostrar o alerta com os dados do formulário
  var userConfirmation = confirm(confirmationMessage);

  // Redirecionar se confirmado
  if (userConfirmation) {
    window.location.href = 'index.html';
  }

  return false; // Evitar a ação padrão do formulário
}
