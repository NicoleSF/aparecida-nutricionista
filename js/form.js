var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(){
    event.preventDefault(); // define o comportamento padrão e não recarrega a página perdendo os dados
    
    var form = document.querySelector("#form-adiciona");
    //Extraindo informações do paciente do formulário
     var paciente = obtemPacienteDoFormulario(form);

    // cria a tr e a td do paciente (o título da coluna e a linha de informações)
    var pacienteTr = montaTr(paciente);

    var erros = validaPaciente(paciente);
    console.log(erros);

    if(erros.length > 0){
        exibeMensagensDeErro(erros);
        
        return; //sai antes de adicionar na tabela
    }
    
    
  
    // adicionando o paciente na tabela
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);

    form.reset();
     
})

function exibeMensagensDeErro(erros){

        var ul = document.querySelector("#mensagens-erro");
        erros.forEach(function(erro){
            var li = document.createElement("li");
            li.textContext = erro;
            ul.appendChild(li);
        });
}

function obtemPacienteDoFormulario(form){

    var paciente = { //criando um objeto. Pega uma informação do mundo real e passa pra linguagem

        nome: form.nome.value, //os objetos recebem dois pontos. Propriedades
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;

}

function montaTr(paciente){
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");


    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome")); //colocar como um apêndice de uma tag principal
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dado, classe){

    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validaPaciente(paciente){

    var erros = [];

    if(validaPeso(paciente.peso)){
        erros.push("Peso é inválido");
    }

    if(validaAltura(paciente.altura)){
        erros.push("Altura é inválida");
    

    }

    return erros;
}