var botaoAdiciona = document.querySelector('#adicionar-paciente');

botaoAdiciona.addEventListener('click', function(event){

  event.preventDefault();
  var form = document.querySelector('#adicionaPaciente');
  var ul = document.querySelector('#mensagens-erro');
  var paciente = montaPaciente(form);
  var erros = validaPaciente(paciente);


  if(erros.length>0){
   exibeMensagemDeErro(erros);
   return;
  }

adicionaPacienteNaTabela(paciente);

  ul.innerHTML= '';
  
  form.reset();
  
})

function adicionaPacienteNaTabela(paciente){
  var tr = montaTr(paciente);
  var tabela = document.querySelector('#tabela-pacientes');
  tabela.appendChild(tr);
}

function montaPaciente(form){
  var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value, form.altura.value)
  }
  return paciente;
}

function criarTd(dado, classe){
  var td = document.createElement('td');
  td.classList.add(classe)
  td.textContent = dado;
  return td
}

function montaTr(objeto){
  var tr = document.createElement('tr');
  tr.classList.add("paciente");
  tr.appendChild(criarTd(objeto.nome, "info-nome"));
  tr.appendChild(criarTd(objeto.peso, "info-peso"));
  tr.appendChild(criarTd(objeto.altura, "info-altura"));
  tr.appendChild(criarTd(objeto.gordura, "info-gordura"));
  tr.appendChild(criarTd(objeto.imc, "info-imc"));
  return tr;
}

function validaPaciente(paciente){

  var erros = [];

  if(paciente.nome.length == 0){
    erros.push('O nome nao pode ser em branco');
  } 

  if(paciente.peso.length == 0){
    erros.push('O peso nao pode ser em branco');
  }else if(!validaPeso(paciente.peso)){
    erros.push('O peso eh invalido');
  }

  if(paciente.altura.length == 0){
    erros.push('A altura nao pode ser em branco');
  }else if(!validaAltura(paciente.altura)){
    erros.push('A altura eh invalida');
  }

  if(paciente.gordura.length == 0){
    erros.push('A gordura nao pode ser em branco');
  } 
  
  return erros;
}

function exibeMensagemDeErro(erros){
  var ul = document.querySelector('#mensagens-erro');
  ul.innerHTML = '';
  erros.forEach(erro => {
    var li = document.createElement('li');
    li.textContent = erro;
    ul.appendChild(li);
  });
}