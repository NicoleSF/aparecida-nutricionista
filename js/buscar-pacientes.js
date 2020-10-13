var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function(){
    console.log("Buscando pacientes...");

    var xhr = new XMLHttpRequest(); // fazer requisições

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes"); 
    
    xhr.addEventListener("load", function(){
        var erroAjax = document.querySelector("#erro-ajax");
        if(xhr.status == 200){
            erroAjax.classList.add("invisivel");
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta); //devolve um objeto javascript. "Parseia" e entende que é um array
            
            pacientes.forEach(function(paciente){
                adicionaPacienteNaTabela(paciente);
            });
        }else {

            console.log(xhr.status);
            console.log(xhr.responseText);
            
            erroAjax.classList.remove("invisivel");
        }

       
    });
    
    xhr.send();
});