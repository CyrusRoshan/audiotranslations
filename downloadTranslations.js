document.querySelector('button').onclick = () => {
        var fromLang = document.querySelector('#fromLang').value;
        var toLang = document.querySelector('#toLang').value;

        var words = document.querySelector('#words').value.split(',');

        var downloadFrom = document.querySelector('#settings [name="downloadFrom"]').checked;
        var downloadTo = document.querySelector('#settings [name="downloadTo"]').checked;

        chrome.storage.sync.get('url', function(url) {
        	if (!url) {
                        
                }
        });
}
