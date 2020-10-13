var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){
    
    event.target.parentNode.classList.add("fadeOut");

    setTimeOut(function(){

        event.target.parentNode.remove();
    }, 500);
})
