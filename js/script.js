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
    inputNome.setAttribute('style', 'outline-color: red;');
    labelNome.setAttribute('style', 'color: red;');
  } else {
    inputNome.setAttribute('style', 'outline-color: green;');
    labelNome.setAttribute('style', 'color: green;');
  }
});

inputSobrenome.addEventListener('keyup' , () => {
  if(inputSobrenome.value[0] == ' '){
    inputSobrenome.value = '';
  } else if(inputSobrenome.value.length < 3){
    inputSobrenome.setAttribute('style', 'outline-color: red;');
    labelSobrenome.setAttribute('style', 'color: red;');
  } else {
    inputSobrenome.setAttribute('style', 'outline-color: green;');
    labelSobrenome.setAttribute('style', 'color: green;');
  }
});

inputDDD.addEventListener('keyup' , () => {
  if(inputDDD.value[0] == ' '){
    inputDDD.value = '';
  } else if(inputDDD.value.length < 2){
    inputDDD.setAttribute('style', 'outline-color: red;');
    labelDDD.setAttribute('style', 'color: red;');
  } else {
    inputDDD.setAttribute('style', 'outline-color: green;');
    labelDDD.setAttribute('style', 'color: green;');
  }
});

inputNumero.addEventListener('keyup' , () => {
  if(inputNumero.value[0] == ' '){
    inputNumero.value = '';
  } else if(inputNumero.value.length < 8){
    inputNumero.setAttribute('style', 'outline-color: red;');
    labelNumero.setAttribute('style', 'color: red;');
  } else {
    inputNumero.setAttribute('style', 'outline-color: green;');
    labelNumero.setAttribute('style', 'color: green;');
  }
});

inputEmail.addEventListener('keyup' , (event) => {
  let letra = event.key;

  if(letra == ' '){
    inputEmail.value = '';
  } else if(inputEmail.value.length < 10 || inputEmail.value.includes('@') == false || inputEmail.value.includes('.') == false){
    inputEmail.setAttribute('style', 'outline-color: red;');
    labelEmail.setAttribute('style', 'color: red;');
  } else {
    inputEmail.setAttribute('style', 'outline-color: green;');
    labelEmail.setAttribute('style', 'color: green;');
  }
});

inputConfirmarEmail.addEventListener('keyup' , (event) => {
  let letra = event.key;

  if(letra == ' '){
    inputConfirmarEmail.value = '';
  } else if(inputEmail.value != inputConfirmarEmail.value){
    inputConfirmarEmail.setAttribute('style', 'outline-color: red;');
    labelConfirmarEmail.setAttribute('style', 'color: red;');
  } else {
    inputConfirmarEmail.setAttribute('style', 'outline-color: green;');
    labelConfirmarEmail.setAttribute('style', 'color: green;');
  }
});

inputPais.addEventListener('keyup' , () => {
  if(inputPais.value[0] == ' '){
    inputPais.value = '';
  } else if(inputPais.value.length < 3){
    inputPais.setAttribute('style', 'outline-color: red;');
    labelPais.setAttribute('style', 'color: red;');
  } else {
    inputPais.setAttribute('style', 'outline-color: green;');
    labelPais.setAttribute('style', 'color: green;');
  }
});

inputEstado.addEventListener('keyup' , () => {
  if(inputEstado.value[0] == ' '){
    inputEstado.value = '';
  } else if(inputEstado.value.length < 3){
    inputEstado.setAttribute('style', 'outline-color: red;');
    labelEstado.setAttribute('style', 'color: red;');
  } else {
    inputEstado.setAttribute('style', 'outline-color: green;');
    labelEstado.setAttribute('style', 'color: green;');
  }
});

inputAssunto.addEventListener('keyup' , () => {
  if(inputAssunto.value[0] == ' '){
    inputAssunto.value = '';
  } else if(inputAssunto.value.length < 5){
    inputAssunto.setAttribute('style', 'outline-color: red;');
    labelAssunto.setAttribute('style', 'color: red;');
  } else {
    inputAssunto.setAttribute('style', 'outline-color: green;');
    labelAssunto.setAttribute('style', 'color: green;');
  }
});

inputMensagem.addEventListener('keyup' , () => {
  if(inputMensagem.value[0] == ' '){
    inputMensagem.value = '';
  } else if(inputMensagem.value.length < 20){
    inputMensagem.setAttribute('style', 'outline-color: red;');
    labelMensagem.setAttribute('style', 'color: red;');
  } else {
    inputMensagem.setAttribute('style', 'outline-color: green;');
    labelMensagem.setAttribute('style', 'color: green;');
  }
});

// Validações Ativas

addEventListener('click', (event) => {
  const divStatus = document.querySelector('#status');
  if(event.target.id == 'btnSubmit'){
    // Nome
    if(inputNome.value.length < 3){
      divStatus.setAttribute('style', 'color: #ff0000;');
      divStatus.innerHTML = `<span><strong>O campo Primeiro Nome deve conter no mínimo 3 caracteres</strong></span>`;
      // Sobrenome
    } else if(inputSobrenome.value.length < 3){
      divStatus.setAttribute('style', 'color: #ff0000;');
      divStatus.innerHTML = `<span><strong>O campo Sobrenome deve conter no mínimo 3 caracteres</strong></span>`;
      // DDD
    } else if(inputDDD.value.length < 2){
      divStatus.setAttribute('style', 'color: #ff0000;');
      divStatus.innerHTML = `<span><strong>O campo DDD deve conter no mínimo 2 caracteres</strong></span>`;
      // Número
    } else if(inputNumero.value.length < 8){
      divStatus.setAttribute('style', 'color: #ff0000;');
      divStatus.innerHTML = `<span><strong>O campo Número deve conter no mínimo 8 caracteres</strong></span>`;
      // Email
    } else if(inputEmail.value.length < 10 || inputEmail.value.includes('@') == false || inputEmail.value.includes('.') == false){
      divStatus.setAttribute('style', 'color: #ff0000;');
      divStatus.innerHTML = `<span><strong>O campo Email deve conter no mínimo 10 caracteres e conter '@' e '.'</strong></span>`;
      // Confirmar Email
    } else if(inputEmail.value != inputConfirmarEmail.value){
      divStatus.setAttribute('style', 'color: #ff0000;');
      divStatus.innerHTML = `<span><strong>O campo Confirmar Email deve ser igual ao campo Email</strong></span>`;
      // País
    } else if(inputPais.value.length < 3){
      divStatus.setAttribute('style', 'color: #ff0000;');
      divStatus.innerHTML = `<span><strong>O campo País deve conter no mínimo 3 caracteres</strong></span>`;
      // Estado
    } else if(inputEstado.value.length < 3){
      divStatus.setAttribute('style', 'color: #ff0000;');
      divStatus.innerHTML = `<span><strong>O campo Estado deve conter no mínimo 3 caracteres</strong></span>`;
      // Assunto
    } else if(inputAssunto.value.length < 5){
      divStatus.setAttribute('style', 'color: #ff0000;');
      divStatus.innerHTML = `<span><strong>O campo Assunto deve conter no mínimo 5 caracteres</strong></span>`;
      // Mensagem
    } else if(inputMensagem.value.length < 20){
      divStatus.setAttribute('style', 'color: #ff0000;');
      divStatus.innerHTML = `<span><strong>O campo Mensagem deve conter no mínimo 20 caracteres</strong></span>`;
      // Sucesso
    } else {
      divStatus.setAttribute('style', 'color: #00ff00;');
      divStatus.innerHTML = `<span><strong>Formulário enviado com sucesso!</strong></span>`;
    }
  }

});
