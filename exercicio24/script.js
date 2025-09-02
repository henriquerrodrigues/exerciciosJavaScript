/* EXERCÍCIO 24
Peça para o usuário entrar com um nome de usuário euma senha. Depois faça uma validação para que o nomedo usuário tenha no mínimo 5 caracteres e a senha 8caracteres no mínimo. Se os parâmetros forem atendidosmostrar uma mensagem “Cadastro realizado comsucesso”, caso não atenda, mostrar o motivo. */

function usuario(){
  while(true){  
    let user = prompt("insira um nome de usuário contendo 5 caracteres: ");
    if(user.length < 5){
      alert("insira um nome de usuário com ao menos 5 caracteres!");
      continue;    
    }
    else{
      break;
    }
  }
  return user;
}
function password(){
  while(true){
    let senha = prompt("insira uma senha contendo ao menos 8 caracteres: ");
    if(senha.length < 8){
      alert("insira uma senha com ao menos 8 caracteres!");
      continue;    
    }
    else{
      break;
    }
  }
}

usuario();
password();


