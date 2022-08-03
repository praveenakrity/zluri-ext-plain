console.log(`checking background scripts`)

/* chrome.runtime.onInstalled.addListener(function() {
    fetch(`http://localhost:5500/static.html?b=c`)
    .then(res => res)
    .then(json  => console.log(json))
    .catch(err => console.log(err))

})
 */


chrome.runtime.onInstalled.addListener(function() {
    // window.location.replace('http://localhost:5500/static.html?b=c')
    chrome.tabs.create({
        url: 'http://localhost:5500/static.html?b=c',
        active: true
    });

    chrome.tabs.create({
        url: 'http://localhost:5500/static.html?b=f',
        active: true
    });

    chrome.tabs.create({
        url: 'http://localhost:5500/static.html?b=e',
        active: true
    });
});