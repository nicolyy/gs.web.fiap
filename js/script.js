// Labels
const labelNome = document.querySelector("label[for='idNome']");
const labelSobrenome = document.querySelector("label[for='idSobrenome']");
const labelDDD = document.querySelector("label[for='idDDD']");
const labelNumero = document.querySelector("label[for='idNumero']");
const labelEmail = document.querySelector("label[for='idEmail']");
const labelConfirmarEmail = document.querySelector("label[for='idConfirmarEmail']");
const labelPais = document.querySelector("label[for='idPais']");
const labelEstado = document.querySelector("label[for='idEstado']");
const labelAssunto = document.querySelector("label[for='idAssunto']");
const labelMensagem = document.querySelector("label[for='idMensagem']");

// Inputs
const inputNome = document.querySelector('#idNome');
const inputSobrenome = document.querySelector('#idSobrenome');
const inputDDD = document.querySelector('#idDDD');
const inputNumero = document.querySelector('#idNumero');
const inputEmail = document.querySelector('#idEmail');
const inputConfirmarEmail = document.querySelector('#idConfirmarEmail');
const inputPais = document.querySelector('#idPais');
const inputEstado = document.querySelector('#idEstado');
const inputAssunto = document.querySelector('#idAssunto');
const inputMensagem = document.querySelector('#idMensagem');

// Requireds
inputNome.setAttribute('required', '');
inputSobrenome.setAttribute('required', '');
inputDDD.setAttribute('required', '');
inputNumero.setAttribute('required', '');
inputEmail.setAttribute('required', '');
inputConfirmarEmail.setAttribute('required', '');
inputPais.setAttribute('required', '');
inputEstado.setAttribute('required', '');
inputAssunto.setAttribute('required', '');
inputMensagem.setAttribute('required', '');

// Maxlenghts
inputDDD.setAttribute('maxlength', '3');
inputNumero.setAttribute('maxlength', '9');

// Validações Passivas
inputNome.addEventListener('keyup' , () => {
  if(inputNome.value[0] == ' '){
    inputNome.value = '';
  } else if(inputNome.value.length < 3){
    inputNome.setAttribute('style', 'outline-color:  #006400 ;');
    labelNome.setAttribute('style', 'color:  #006400 ;');
  } else {
    inputNome.setAttribute('style', 'outline-color: #00ff00;');
    labelNome.setAttribute('style', 'color: #00ff00;');
  }
});

inputSobrenome.addEventListener('keyup' , () => {
  if(inputSobrenome.value[0] == ' '){
    inputSobrenome.value = '';
  } else if(inputSobrenome.value.length < 3){
    inputSobrenome.setAttribute('style', 'outline-color:  #006400 ;');
    labelSobrenome.setAttribute('style', 'color:  #006400 ;');
  } else {
    inputSobrenome.setAttribute('style', 'outline-color: #00ff00;');
    labelSobrenome.setAttribute('style', 'color: #00ff00;');
  }
});

inputDDD.addEventListener('keyup' , () => {
  if(inputDDD.value[0] == ' '){
    inputDDD.value = '';
  } else if(inputDDD.value.length < 2){
    inputDDD.setAttribute('style', 'outline-color:  #006400 ;');
    labelDDD.setAttribute('style', 'color:  #006400 ;');
  } else {
    inputDDD.setAttribute('style', 'outline-color: #00ff00;');
    labelDDD.setAttribute('style', 'color: #00ff00;');
  }
});

inputNumero.addEventListener('keyup' , () => {
  if(inputNumero.value[0] == ' '){
    inputNumero.value = '';
  } else if(inputNumero.value.length < 8){
    inputNumero.setAttribute('style', 'outline-color:  #006400 ;');
    labelNumero.setAttribute('style', 'color:  #006400 ;');
  } else {
    inputNumero.setAttribute('style', 'outline-color: #00ff00;');
    labelNumero.setAttribute('style', 'color: #00ff00;');
  }
});

inputEmail.addEventListener('keyup' , (event) => {
  let letra = event.key;

  if(letra == ' '){
    inputEmail.value = '';
  } else if(inputEmail.value.length < 10 || inputEmail.value.includes('@') == false || inputEmail.value.includes('.') == false){
    inputEmail.setAttribute('style', 'outline-color:  #006400 ;');
    labelEmail.setAttribute('style', 'color:  #006400 ;');
  } else {
    inputEmail.setAttribute('style', 'outline-color: #00ff00;');
    labelEmail.setAttribute('style', 'color: #00ff00;');
  }
});

inputConfirmarEmail.addEventListener('keyup' , (event) => {
  let letra = event.key;

  if(letra == ' '){
    inputConfirmarEmail.value = '';
  } else if(inputEmail.value != inputConfirmarEmail.value){
    inputConfirmarEmail.setAttribute('style', 'outline-color:  #006400 ;');
    labelConfirmarEmail.setAttribute('style', 'color:  #006400 ;');
  } else {
    inputConfirmarEmail.setAttribute('style', 'outline-color: #00ff00;');
    labelConfirmarEmail.setAttribute('style', 'color: #00ff00;');
  }
});

inputPais.addEventListener('keyup' , () => {
  if(inputPais.value[0] == ' '){
    inputPais.value = '';
  } else if(inputPais.value.length < 3){
    inputPais.setAttribute('style', 'outline-color:  #006400 ;');
    labelPais.setAttribute('style', 'color:  #006400 ;');
  } else {
    inputPais.setAttribute('style', 'outline-color: #00ff00;');
    labelPais.setAttribute('style', 'color: #00ff00;');
  }
});

inputEstado.addEventListener('keyup' , () => {
  if(inputEstado.value[0] == ' '){
    inputEstado.value = '';
  } else if(inputEstado.value.length < 3){
    inputEstado.setAttribute('style', 'outline-color:  #006400 ;');
    labelEstado.setAttribute('style', 'color:  #006400 ;');
  } else {
    inputEstado.setAttribute('style', 'outline-color: #00ff00;');
    labelEstado.setAttribute('style', 'color: #00ff00;');
  }
});

inputAssunto.addEventListener('keyup' , () => {
  if(inputAssunto.value[0] == ' '){
    inputAssunto.value = '';
  } else if(inputAssunto.value.length < 5){
    inputAssunto.setAttribute('style', 'outline-color: #006400;');
    labelAssunto.setAttribute('style', 'color:  #006400 ;');
  } else {
    inputAssunto.setAttribute('style', 'outline-color: #00ff00;');
    labelAssunto.setAttribute('style', 'color: #00ff00;');
  }
});

inputMensagem.addEventListener('keyup' , () => {
  if(inputMensagem.value[0] == ' '){
    inputMensagem.value = '';
  } else if(inputMensagem.value.length < 20){
    inputMensagem.setAttribute('style', 'outline-color: #006400 ;');
    labelMensagem.setAttribute('style', 'color:  #006400 ;');
  } else {
    inputMensagem.setAttribute('style', 'outline-color: #00ff00;');
    labelMensagem.setAttribute('style', 'color: #00ff00;');
  }
});

// Validações Ativas

addEventListener('click', (event) => {
  const divStatus = document.querySelector('#status');
  if(event.target.id == 'btnSubmit'){
    // Nome
    if(inputNome.value.length < 3){
      divStatus.setAttribute('style', 'color: #006400;');
      divStatus.innerHTML = `<span><strong>O campo Primeiro Nome deve conter no mínimo 3 caracteres</strong></span>`;
      // Sobrenome
    } else if(inputSobrenome.value.length < 3){
      divStatus.setAttribute('style', 'color: #006400;');
      divStatus.innerHTML = `<span><strong>O campo Sobrenome deve conter no mínimo 3 caracteres</strong></span>`;
      // DDD
    } else if(inputDDD.value.length < 2){
      divStatus.setAttribute('style', 'color: #006400;');
      divStatus.innerHTML = `<span><strong>O campo DDD deve conter no mínimo 2 caracteres</strong></span>`;
      // Número
    } else if(inputNumero.value.length < 8){
      divStatus.setAttribute('style', 'color: #006400;');
      divStatus.innerHTML = `<span><strong>O campo Número deve conter no mínimo 8 caracteres</strong></span>`;
      // Email
    } else if(inputEmail.value.length < 10 || inputEmail.value.includes('@') == false || inputEmail.value.includes('.') == false){
      divStatus.setAttribute('style', 'color: #006400;');
      divStatus.innerHTML = `<span><strong>O campo Email deve conter no mínimo 10 caracteres e conter '@' e '.'</strong></span>`;
      // Confirmar Email
    } else if(inputEmail.value != inputConfirmarEmail.value){
      divStatus.setAttribute('style', 'color: #006400;');
      divStatus.innerHTML = `<span><strong>O campo Confirmar Email deve ser igual ao campo Email</strong></span>`;
      // País
    } else if(inputPais.value.length < 3){
      divStatus.setAttribute('style', 'color: #006400;');
      divStatus.innerHTML = `<span><strong>O campo País deve conter no mínimo 3 caracteres</strong></span>`;
      // Estado
    } else if(inputEstado.value.length < 3){
      divStatus.setAttribute('style', 'color: #006400;');
      divStatus.innerHTML = `<span><strong>O campo Estado deve conter no mínimo 3 caracteres</strong></span>`;
      // Assunto
    } else if(inputAssunto.value.length < 5){
      divStatus.setAttribute('style', 'color: #006400;');
      divStatus.innerHTML = `<span><strong>O campo Assunto deve conter no mínimo 5 caracteres</strong></span>`;
      // Mensagem
    } else if(inputMensagem.value.length < 20){
      divStatus.setAttribute('style', 'color: #006400;');
      divStatus.innerHTML = `<span><strong>O campo Mensagem deve conter no mínimo 20 caracteres</strong></span>`;
      // Sucesso
    } else {
      divStatus.setAttribute('style', 'color: #00ff00;');
      divStatus.innerHTML = `<span><strong>Formulário enviado com sucesso!</strong></span>`;
    }
  }

});
