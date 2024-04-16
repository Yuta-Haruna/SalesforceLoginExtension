chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ accounts: [] }); // 初期設定として空のアカウントリストを保存
    });

    // ポップアップからのログイン要求を受け取る
    chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
        if (message.type === 'login') {
            const { username, password } = message;
            chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { type: 'login', username, password });
        });
    }
});
