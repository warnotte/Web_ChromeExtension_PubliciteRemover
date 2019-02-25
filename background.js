chrome.browserAction.onClicked.addListener(function(tab) {
	console.log('Turning ' + tab.url + ' red!');
	
	chrome.tabs.executeScript({
        file: 'jquery-3.3.1.min.js'
    });
	
	chrome.tabs.executeScript(null,	{
		file : 'clean_content.js'
	});
});