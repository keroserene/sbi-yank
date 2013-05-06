// Search-By-Image URL-yank - content script
// 2013-05-06  ~keroserene

console.log('Extracting result URLs...');
// Can't just use the <cite> tags - img search truncates/formats long urls :(
var results = $('h3.r').find('a.l');
var urls = $.map(results, function(result, i) { return result.href; });
console.log(urls);
// Hack the DOM to expose the urls on the right.
$('body').append(
    '<div id="sbi-yank-results" style="' +
    'position: fixed; z-index: 989;' +
    'min-width: 200px; max-width: 433px; height:100%; right:0; top:0;' +
    'background-color: rgba(255,255,255,0.7); color: #000; font-size: 12px;' +
    'margin: 0; padding: 40px 30px; border-left: 2px solid #333;' +
    '"><h4>' + urls.length + ' URLs yanked [on this page]</h4>' +
    '<ul style="">' +
    $.map(urls, function(url, i) {
      return '<li><a href="' + url + '" target="_blank">' + url + '</a></li>';
    }).join('') +
    '</ul></div>'
    );
