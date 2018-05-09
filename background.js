
chrome.browserAction.onClicked.addListener(function(activeTab){
  alert("test");
  chrome.tabs.query({
      active: true,               // Select active tabs
      lastFocusedWindow: true     // In the current window
  },
  function(array_of_Tabs){
      // Since there can only be one active tab in one active window,
      //  the array has only one element
      console.log("test");
  	  const numSentences = 9;
      var tab = array_of_Tabs[0];
      var url = "http://smmry.com/" + tab.url + "#&SM_LENGTH=" + numSentences;
      // var text = httpGet(url);
      // alert(text);
      chrome.tabs.create({ url: url });

  });
  //
  // function httpGet(theUrl){
  //   var xmlHttp = new XMLHttpRequest();
  //   xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
  //   xmlHttp.send( null );
  //   return xmlHttp.responseText;
  // }

//   function httpGetAsync(theUrl, callback){
//     // alert("test");
//     var xmlHttp = new XMLHttpRequest();
//     xmlHttp.onreadystatechange = function() {
//         if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
//           alert("response");
//           callback(xmlHttp.responseText);
//         }
//         // alert("response2");
//
//     }
//     xmlHttp.open("GET", theUrl, true);
//     xmlHttp.send(null);
  // }
    //chrome.tabs.create({ url: newURL });
