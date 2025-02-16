// This is the background script for the adFreind Chrome extension.
// You can add event listeners and other background tasks here.

chrome.runtime.onInstalled.addListener(() => {
    console.log('adFreind extension installed');
});
