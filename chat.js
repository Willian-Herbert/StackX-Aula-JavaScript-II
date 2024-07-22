/**
 * Chatlab - Conceitos de array/object em Javascript.
 * 
 * Implemente as funções a partir daqui.
 */
let listaMensagens = [];
let htmlPrint = '';

function adicionarMensagem(apelido, mensagem) {
  listaMensagens.push({
    apelido: apelido,
    mensagem: mensagem
  })
  formatarMensagens();
}

function formatarMensagens() {
  htmlPrint = '';

  for(i = 0; i < listaMensagens.length; i++){
    let obj = listaMensagens[i];
    
    htmlPrint += `
    <div class="chat-message">
      <span class="chat-message-apelido">
        ${obj.apelido}
      </span>
      <span class="chat-message-item">
        ${obj.mensagem}
      </span>
    </div>` 
  }
  atualizarHTML();
  return htmlPrint;
}

function atualizarHTML(){
  let divMsg = document.getElementById('chat-messages')
  divMsg.innerHTML = htmlPrint;
}

function commitMessageClickHandler() {
  let msgBox = document.getElementById('message-input')

  if(msgBox.value.trim().length == 0){
    msgBox.focus();
    return;
  }
    
  adicionarMensagem('Aluno StackX', msgBox.value);
  msgBox.value = '';
}

// --------------------------------
// Não remover estas linhas
// --------------------------------
module.exports =
{
  listaMensagens,
  adicionarMensagem,
  formatarMensagens,
  atualizarHTML,
  commitMessageClickHandler
};
// --------------------------------