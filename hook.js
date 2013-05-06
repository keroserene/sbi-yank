// Search-By-Image URL-sbi search hook - content script
// 2013-05-06  ~keroserene

// Prepare the search-by-image box for listener.
console.log('Opening SBI box.');
var sbiLink = document.getElementsByClassName('gsst_a')[0];
if (undefined == sbiLink) {
  console.log('sbixurl warning: No Search-By-Image button found!')
}
sbiLink.click();

// Wait for the requested image url before firing an sbi request.
// |info| is a contextMenu OnClickData.
chrome.extension.onMessage.addListener(
  function(info, from, callback) {
    var url = info.srcUrl;
    console.log('Automatic Search-By-Image: ' + url);
    // Assume we're focused correctly after the initial sbi-box is opened.
    sbi_input = document.activeElement
    sbi_input.value = url;
    sbi_input.form.submit();
    callback();  // Fires the next content script which does actual url yanking.
});
