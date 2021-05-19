var nome = document.getElementById("nome");
var senha = document.getElementById("senha");

function Enviar()  {
    var recebendoNome = nome.value;
    var recebendoSenha = senha.value;

     var nomeT = false;
     var senhaT = false;

    switch(recebendoNome){
        case "Livia":
            nomeT = true;
            alert("Nome válido");
        break;
        
        default:
            alert("Nome inválido");
        break;
    }

    switch(recebendoSenha){
        case "142536": 
             senhaT = true;
             alert("Senha válida");
        break;

        default:
            alert("Senha inválida, tente novamente.")
        break;
    }

    if(nomeT == true && senhaT == true){
        alert(`Bem vindo(a), ${recebendoNome}!`);
    }
    if(!recebendoNome || !recebendoSenha){
        alert("Preeencha todos os campos!")
    }


}

