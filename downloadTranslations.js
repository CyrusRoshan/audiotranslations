document.querySelector('button').onclick = () => {
        var toLang = document.querySelector('#toLang').value;

        var words = document.querySelector('#words').value.split(',');

        words.forEach((word, i) => {
                word = word.trim();
                setTimeout(() => {
                        chrome.downloads.download({
                                url: `https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=${word}&tl=${toLang}&total=1&idx=0&textlen=${word.length}`,
                                filename: `${word}.mp3`,
                        }, ()=>{})
                }, getRandomInt(0, 2000) * i);
        })
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
