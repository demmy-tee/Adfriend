console.log('Content script loaded');

// Function to replace ads
function replaceAds() {
    const ads = document.querySelectorAll('.ad'); // Adjust the selector based on the ad elements you want to target
    ads.forEach(ad => {
        const replacement = document.createElement('div');
        replacement.innerText = 'This ad has been replaced with meaningful content!';
        ad.parentNode.replaceChild(replacement, ad);
    });
}

// Listen for messages from the popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "replaceAds") {
        replaceAds();
        sendResponse({ status: "Ads replaced" });
    }
});
async function getQuote() {
    const quotes = [
        'The best Way to predict the future is to create it',
        'Believe in yourself and all that you are',
        ' Do what you can with what you have, where you are.',
        'Stay positive, work hard and make it happen',
    ];
    return quotes[Math.floor(Math.random() * quotes.length)];
}

// Function to replace ad elements with meaningful content
async function replaceAds() {
    const adSelectors = [
        "iframe", "[id^='ad_']", "[class*='ad-']", "[data-ad-slot]", "[aria-label = 'Ads']"
    ];
    adSelectors.forEach(selector => {
        document.querySelectorAll(selector).forEach
            (async ad => {
                const quote = await getQuote();

                //replace ads with meaningful content
                const replacement = document.createElement("div");
                replacement.textContent = quote;

                replacement.style.cssText = `
                background: #f9f9f9
                padding: 10px;
                color:#333;
                text-align: center;
                `;
                ad.replaceWith(replacement);
            });
    });
}

replaceAds();

const observer = new MutationObserver(() => replaceAds());
observer.observe(document.body, { childList: true, subtree: true });