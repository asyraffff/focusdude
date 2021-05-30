const textarea = document.getElementById("blocked-sites");

textarea.placeholder = [
  "reddit.com",
  "youtube.com",
  "facebook.com",
  "instagram.com",
  "twitter.com/home",
  "^https?://([\w\d]+\.)?google\.com"
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
  chrome.storage.sync.set({
    blockedSites: blockedSites
  }, function() {
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 2500);
  });
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('save-options').addEventListener('click', saveOptions);
