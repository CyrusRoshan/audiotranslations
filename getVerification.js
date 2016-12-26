chrome.webRequest.onBeforeRequest.addListener(
    function(request) {
        if (request.method == 'POST') {
            chrome.storage.sync.set({'url': request.url}, function() {});
        }
        return
    },

    {urls: ['https://www.google.com/async/translate/*']},
    ['requestBody']
);
