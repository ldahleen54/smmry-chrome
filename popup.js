chrome.browserAction.onClicked.addListener(function(tab) { 
  chrome.tabs.getCurrent(function(tab){
        console.log(tab.url);
    }
  );
});