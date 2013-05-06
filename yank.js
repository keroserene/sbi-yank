// Search-By-Image URL-yank - content script
// 2013-05-06  ~keroserene

// Open the search-by-image box.
var sbiLink = document.getElementsByClassName('gsst_a')[0];
if (undefined == sbiLink) {
  console.log('sbixurl warning: No Search-By-Image button found!')
}
sbiLink.click();

// Wait for the requested image url before running the automation.
// Automate those horrific Search-By-Image shenanigans and yank URLs.
chrome.extension.onMessage.addListener(
  // |msg| is a contextMenu OnClickData
  function(msg, from, callback) {
    var url = msg.srcUrl;
    console.log('Automatic Search-By-Image: ' + url);
    // Assume we're focused correctly after the initial sbi-box is opened.
    sbi_input = document.activeElement
    sbi_input.value = url;
    sbi_input.form.submit();
});
