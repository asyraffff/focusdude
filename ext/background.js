var goFuckingWorkURL = "https://asyraffff.github.io/focusdude/";

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (! tab.url) {
    return;
  }

  chrome.storage.sync.get({
    blockedSites: '',
  }, function(storage) {
    var blockedSites = storage.blockedSites.split('\n'),
      shouldBlock = false;

    blockedSites.forEach(function (url) {
      if (url.length > 0 && tab.url.search(url) >= 0) {
        chrome.tabs.update(tab.id, {url: goFuckingWorkURL});
      }
    });
  });
});
