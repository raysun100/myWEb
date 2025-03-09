const chatMessages = document.getElementById('chat-messages');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');

sendButton.addEventListener('click', sendMessage);
userInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const messageText = userInput.value.trim();
    if (messageText) {
        addUserMessage(messageText);
        userInput.value = '';

        // 模擬機器人回覆 (實際應用中應從伺服器端獲取)
        setTimeout(() => {
            addBotMessage(generateBotResponse(messageText));
        }, 500);
    }
}

function addUserMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', 'user-message');
    messageElement.textContent = message;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function addBotMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', 'bot-message');
    messageElement.textContent = message;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function generateBotResponse(userMessage) {
    // 簡單的規則式回覆 (實際應用中應使用更複雜的邏輯或 AI 模型)
    if (userMessage.includes('訂單')) {
        return '請提供您的訂單編號，以便我查詢。';
    } else if (userMessage.includes('退貨')) {
        return '請提供您的退貨原因，以便我為您處理。';
    } else {
        return '請詳細描述您的問題，我會盡力協助您。';
    }
}
