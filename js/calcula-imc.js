var pacientes = document.querySelectorAll('.paciente');

pacientes.forEach(paciente => {

  var tdPeso = paciente.querySelector('.info-peso');
  var tdAltura = paciente.querySelector('.info-altura');
  var tdImc = paciente.querySelector('.info-imc');

  var peso = tdPeso.textContent;
  var altura = tdAltura.textContent;

  var pesoValido = validaPeso(peso);
  var alturaValida = validaAltura(altura);

  if(!pesoValido){
    tdImc.textContent = 'Peso invalido!';
    paciente.classList.add('paciente-invalido');
  }
  if(!alturaValida){
    tdImc.textContent = 'Altura invalida!';
    paciente.classList.add('paciente-invalido');
  }
  if(alturaValida && pesoValido){
    tdImc.textContent = calculaImc(peso, altura);
  }

});

function calculaImc(peso, altura){
  var imc = 0;
  imc = peso/(altura**2);
  return imc.toFixed(2);
}

function validaPeso(peso){
  if(peso>0 && peso<1000){
    return true;
  }else{
    return false;
  }
}

function validaAltura(altura){
  if(altura>0 && altura<3){
    return true;
  }else{
    return false;
  }
}
