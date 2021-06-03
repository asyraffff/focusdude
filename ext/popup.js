const textarea = document.getElementById("blocked-sites");

textarea.placeholder = [
  "reddit.com",
  "youtube.com",
  "facebook.com",
  "instagram.com",
  "twitter.com/home",
  "^https?://([\\w\\d]+\\.)?google\\.com"
].join("\n");

function restoreOptions() {
  chrome.storage.sync.get({
    blockedSites: '',
  }, function(storage) {
    document.getElementById('blocked-sites').value = storage.blockedSites;
  });
}

function saveOptions() {
  var blockedSites = document.getElementById('blocked-sites').value;

  if (blockedSites == "") {
    chrome.storage.sync.set({
      blockedSites: blockedSites
    }, function() {
      // chrome.browserAction.setBadgeText({
      //   text: 'OFF'
      // });

      chrome.browserAction.setIcon({
                path: {
                    19: "icons/not_active_icon.png"
                }
            });
    });

  } else {
    chrome.storage.sync.set({
      blockedSites: blockedSites
    }, function() {
      var status = document.getElementById('status');

      // chrome.browserAction.setBadgeText({
      //   text: 'ON'
      // });

      chrome.browserAction.setIcon({
                  path: {
                      19: "icons/active_icon.png"
                  }
              });

      status.textContent = 'Options saved.';
      setTimeout(function() {
        status.textContent = '';
      }, 2500);
    });
  }
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('save-options').addEventListener('click', saveOptions);
