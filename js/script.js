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

inputEmail.addEventListener('keyup' , () => {
  if(inputEmail.value.length < 10 || inputEmail.value.includes('@') == false || inputEmail.value.includes('.') == false){
    inputEmail.setAttribute('style', 'outline-color: red;');
    labelEmail.setAttribute('style', 'color: red;');
  } else {
    inputEmail.setAttribute('style', 'outline-color: green;');
    labelEmail.setAttribute('style', 'color: green;');
  }
});

inputConfirmarEmail.addEventListener('keyup' , () => {
  if(inputEmail.value != inputConfirmarEmail.value){
    inputConfirmarEmail.setAttribute('style', 'outline-color: red;');
    labelConfirmarEmail.setAttribute('style', 'color: red;');
  } else {
    inputConfirmarEmail.setAttribute('style', 'outline-color: green;');
    labelConfirmarEmail.setAttribute('style', 'color: green;');
  }
});