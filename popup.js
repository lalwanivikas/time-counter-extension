/* Update the relevant fields with the new data */
function setDOMInfo(info) {
    document.getElementById('para').textContent  = ": " + info.para;
    document.getElementById('words').textContent = ": " + info.words;
    document.getElementById('time').textContent = ": " + info.time + " mins";
}

/* Once the DOM is ready... */
window.addEventListener('DOMContentLoaded', function() {
    /* ...query for the active tab... */
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function(tabs) {
        /* ...and send a request for the DOM info... */
        chrome.tabs.sendMessage(
                tabs[0].id,
                {from: 'popup', subject: 'DOMInfo'},
                /* ...also specifying a callback to be called 
                 *    from the receiving end (content script) */
                setDOMInfo);
    });
});