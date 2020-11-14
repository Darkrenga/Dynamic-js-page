let contentWrapper = document.getElementById("main");

function linkHandler() {
    for (const link of links) {
        let htmlLink = document.getElementById(link.linkName);
        htmlLink.onclick = function() {
            contentWrapper.innerHTML = link.replaceWith;
        }
    }
}

linkHandler();


