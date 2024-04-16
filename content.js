// バックグラウンドからのメッセージを受け取り、自動ログインを実行
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === 'login') {
        const { username, password } = message;
        document.getElementById('username').value = username;
        document.getElementById('password').value = password;
        document.forms[0].submit();
    }
});
