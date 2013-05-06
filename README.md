# sbi-yank

Chrome Extension which let's you right-click any image and directly obtain
result URLs from Search-By-Image results. Experimental :)

## how it works

While this extension is enabled, right-click any image and click on the
search-by-image contextMenu option.

![contextMenu sbi-URL-yank option](http://i.imgur.com/aODowDX.png)

It'll open a new Google Image Search tab for you and
automatically open the Search by image box (because they decided to be tricky
and hide it behind javascript/obfuscated URLs).

![auto filled search-by-image query](http://i.imgur.com/h24P0fU.png)

It will automatically fill the query with your image's URL
and fire the search request.

Once the results page has loaded, this extension will extract just
the result URLs and expose them directly in the DOM.

![yanked result urls](http://i.imgur.com/IsNqHxc.png)

## install in chrome

This is experimental and I don't feel like packaging a legit chrome
extension (yet) - the easiest thing at the moment would be:

1. `git clone http://github.com/keroserene/sbi-yank`
2. Open `chrome://extensions`
3. "Load unpacked extension..." the `sbi-yank` folder.
