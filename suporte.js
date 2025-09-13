function sendMessage() {
    var messageInput = document.getElementById('mensagem-input');
    var userMessage = messageInput.value.trim();

    if (!userMessage) {
        messageInput.style.border = '1px solid red';
        return;
    }
    messageInput.style.border = 'none';

    showHistorico(userMessage, getBotResponse(userMessage));

    messageInput.value = '';
    messageInput.focus();
}

function getBotResponse(userMessage) {
    // Converte para minúsculas para facilitar comparação
    var msg = userMessage.toLowerCase();

    if (msg.includes('oi') || msg.includes('olá') || msg.includes('ola')) {
        return "Olá! Como posso ajudar você hoje?";
    } else if (msg.includes('horas') || msg.includes('que horas')) {
        var now = new Date();
        return `Agora são ${now.getHours()}:${now.getMinutes().toString().padStart(2, '0')}.`;
    } else if (msg.includes('tudo bem') || msg.includes('como vai')) {
        return "Estou bem, obrigado por perguntar! E você?";
    } else if (msg.includes('adeus') || msg.includes('tchau')) {
        return "Até mais! Se precisar, volte sempre.";
    } else if (msg.includes('ajuda')) {
        return "Claro! Diga qual é sua dúvida que tentarei ajudar.";
    } else {
        return "Desculpe, não entendi. Pode reformular sua pergunta?";
    }
}

function showHistorico(userMessage, botResponse) {
    var historico = document.getElementById("Historico");

    // Mensagem do usuário
    var boxMessage = document.createElement("div");
    boxMessage.className = "box-my-message";

    var myMessage = document.createElement("p");
    myMessage.className = "my-message";
    myMessage.innerText = userMessage;

    boxMessage.appendChild(myMessage);
    historico.appendChild(boxMessage);

    // Resposta do bot
    var boxResponseMessage = document.createElement("div");
    boxResponseMessage.className = "box-response-message";

    var chatResponse = document.createElement("p");
    chatResponse.className = "chat-response";
    chatResponse.innerText = botResponse;

    boxResponseMessage.appendChild(chatResponse);
    historico.appendChild(boxResponseMessage);

    // Scroll para o final do histórico
    historico.scrollTop = historico.scrollHeight;
}
