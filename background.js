chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    console.log('Received username:', message.username);
    console.log('Received password:', message.password);
    // 応答メッセージを送信
    sendResponse({status: 'Data received successfully'});
});
