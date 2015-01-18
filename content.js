/* Inform the backgrund page that 
 * this tab should have a page-action */
chrome.runtime.sendMessage({
    from:    'content',
    subject: 'showPageAction'
});

/* Listen for message from the popup */
chrome.runtime.onMessage.addListener(function(msg, sender, response) {
    /* First, validate the message's structure */
    if ((msg.from === 'popup') && (msg.subject === 'DOMInfo')) {
        /* Collect the necessary data 
         * (For your specific requirements `document.querySelectorAll(...)`
         *  should be equivalent to jquery's `$(...)`) */
        var domInfo = {
            para:    document.querySelectorAll('p').length,
            words:   $('p').text().split(' ').length,
            time:    ($('p').text().split(' ').length / 250).toFixed(1)
        };
        /* Directly respond to the sender (popup), 
         * through the specified callback */
        response(domInfo);
    }
});