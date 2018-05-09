
chrome.browserAction.onClicked.addListener(function(activeTab)
{
  chrome.tabs.query({
      active: true,               // Select active tabs
      lastFocusedWindow: true     // In the current window
  },
  function(array_of_Tabs) {
      // Since there can only be one active tab in one active window,
      //  the array has only one element
  	  const numSentences = 9;
      var tab = array_of_Tabs[0];
      var url = "http://smmry.com/" + tab.url + "#&SM_LENGTH=" + numSentences;
      httpGetAsync(url, function(responseText) {
         console.log(responseText)
      });
      chrome.tabs.create({ url: url });
  });
  function httpGetAsync(theUrl, callback)
  {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true);
    xmlHttp.send(null);
  }
    //chrome.tabs.create({ url: newURL });
});
