
chrome.browserAction.onClicked.addListener(function(activeTab)
{
chrome.tabs.query({
    active: true,               // Select active tabs
    lastFocusedWindow: true     // In the current window
}, function(array_of_Tabs) {
    // Since there can only be one active tab in one active window, 
    //  the array has only one element
	const numSentences = 9;
    var tab = array_of_Tabs[0];
    // Example:
    var url = "http://smmry.com/" + tab.url + "#&SM_LENGTH=" + numSentences;
	var newURL = "http://www.youtube.com/watch?v=oHg5SJYRHA0";
    chrome.tabs.create({ url: url });
	
    // ... do something with url variable
});
	
  
    //chrome.tabs.create({ url: newURL });
});