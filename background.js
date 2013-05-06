// Search-By-Image URL-yank - chrome extension
// Automates those horrific Search-By-Image shenanigans and yanks URLs.
// 2013-05-06  ~keroserene

var sbitabs = [];  // Track generated tabs to be sbi'd.

// Helper which injects jquery, then a content script.
function $cript(tabid, source) {
  chrome.tabs.executeScript(
      tabid,
      {file: 'jquery.min.js'},
      function() {
        chrome.tabs.executeScript(
            tabid,
            {file: source});
      });
}

// Click Handler for the Context Menu.
function sbiClickHandler(info, tab) {
  chrome.tabs.create(
      { url: "https://images.google.com/" },
      function(tab) {
        console.log('Tab ID: '    + tab.id);
        console.log('Image URL: ' + info.srcUrl);
        sbitabs.push(tab.id);
        chrome.tabs.executeScript(
            tab.id,
            {file: 'hook.js'},  // Sends the search-by-image request.
            function() {        // Callback yanks urls after results load.
              chrome.tabs.sendMessage(
                  tab.id,
                  info,
                  function() { $cript(tab.id, 'yank.js'); });
            });
      });
}

// Expose sbiHack option when you right-click on any image.
chrome.contextMenus.create({
    "title": "Yank Search-By-Image URLs!",
    "contexts": ["image"],
    "id": "sbihack"
});
chrome.contextMenus.onClicked.addListener(sbiClickHandler);
