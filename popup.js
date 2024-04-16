document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.getElementById('loginButton');
    const accountSelect = document.getElementById('accountSelect');

    // 保存されたアカウント情報を取得してドロップダウンに表示
    chrome.storage.sync.get(['accounts'], function(data) {
        data.accounts.forEach((account, index) => {
            let option = document.createElement('option');
            option.text = account.username;
            option.value = index;
            accountSelect.add(option);
        });
    });

    // ログインボタンがクリックされたときの処理
    loginButton.addEventListener('click', () => {
        const selectedIndex = accountSelect.value;
        const selectedAccount = data.accounts[selectedIndex];
        chrome.runtime.sendMessage({
            type: 'login',
            username: selectedAccount.username,
            password: selectedAccount.password
        });
    });
});
