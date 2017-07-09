document.addEventListener('DOMContentLoaded', function() {
  var copyUrlbutton = document.getElementById('grabPageUrl');
  chrome.extension.getBackgroundPage();
  copyUrlbutton.addEventListener('click', function() {
    console.log('test');

    chrome.tabs.getSelected(null, function(tab) {
      tabUrl = tab.url;
      console.log(tabUrl);
    });
  }, false);
}, false);