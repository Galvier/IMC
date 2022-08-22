function start() {
  var buttonCalculateImc = document.querySelector('#button-calculate-imc');
  buttonCalculateImc.addEventListener('click', handleButtonClick);

  var inputWeight = document.querySelector('#input-weight');
  var inputHeight = document.querySelector('#input-height');

  inputWeight.addEventListener('input', handleButtonClick);
  inputHeight.addEventListener('input', handleButtonClick);

  handleButtonClick();
}

function calculateImc(weight, height) {
  return weight / (height * height);
}

function handleButtonClick() {
  var inputWeight = document.querySelector('#input-weight');
  var inputHeight = document.querySelector('#input-height');
  var imcResult = document.querySelector('#imc-result');
  var imcStatus = document.querySelector('#imc-status');

  var weight = Number(inputWeight.value);
  var height = Number(inputHeight.value);

  var imc = calculateImc(weight, height);
  var formattedImc = imc.toFixed(2).replace('.', ',');

  imcResult.textContent = formattedImc;
  
  if (imc >=16 && imc<=16.9 ) {
    return imcStatus.textContent = "Muito abaixo do peso";
  } else if (imc >16.9 && imc<=18.4){
    return imcStatus.textContent = "Abaixo do peso";
  } else if (imc >18.4 && imc<=24.9){
    return imcStatus.textContent = "Peso normal";
  } else if (imc >24.9 && imc<=29.9){
    return imcStatus.textContent = "Acima do peso";
  } else if (imc >29.9 && imc<=34.9){
    return imcStatus.textContent = "Obesidade grau I";
  } else if (imc >34.9 && imc<=40){
    return imcStatus.textContent = "Obesidade grau II";
  } else if (imc >40){
    return imcStatus.textContent = "Obesidade grau III";
  } else {
    return imcStatus.textContent = "Inexistente"
  }
  
}
start();
