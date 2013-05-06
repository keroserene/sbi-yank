// Search-By-Image URL-yank - chrome extension
// 2013-05-06  ~keroserene

// Asumes |tabid| is newly opened to a fresh image search.
function sbiHack(tabid, info) {
  console.log('Tab ID: '    + tabid);
  console.log('Image URL: ' + info.srcUrl);
  chrome.tabs.executeScript(
      tabid,
      {file: 'yank.js'},
      function() {
        chrome.tabs.sendMessage(tabid, info);
      }
  );
}

// Click Handler for the Context Menu.
function sbiClickHandler(info, tab) {
  chrome.tabs.create(
      { url: "https://images.google.com/" },
      function(tab) {
        sbiHack(tab.id, info)
      });
}

// Expose sbiHack option when you right-click on any image.
chrome.contextMenus.create({
    "title": "Search-By-Image Result URLs",
    "contexts": ["image"],
    "id": "sbihack"
});
chrome.contextMenus.onClicked.addListener(sbiClickHandler);
