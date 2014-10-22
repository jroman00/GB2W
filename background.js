var mint = "https://www.mint.com",
	gb2w_urls = [
		"http://i.imgur.com/BzkfAp9.png",
		"http://i.imgur.com/jMaXe6D.jpg",
		"http://i.imgur.com/KvmO4rV.jpg",
		"http://i.imgur.com/9U9bKhb.jpg",
		"http://i.imgur.com/ztrTy9C.jpg"
	];

Array.prototype.randomElement = function() {
	return this[Math.floor(Math.random() * this.length)]
}

chrome.webRequest.onBeforeRequest.addListener(
	function(details) {
		if (details.url.search(/(amazon|ebay|forever21)\.com/i) !== -1) {
			return {
				redirectUrl: mint
			};
		}

		return {
			redirectUrl: gb2w_urls.randomElement()
		};
	},
	{
		urls: [
			"*://*.amazon.com/*",
	        "*://*.ebay.com/*",
	        "*://*.facebook.com/*",
	        "*://*.forever21.com/*"
		]
	},
	["blocking"]
);
