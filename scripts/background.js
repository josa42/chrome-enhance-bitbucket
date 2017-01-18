let options = {};

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  switch (request.type) {
    case 'options-changed':  
      return options = request.options;
  }
});

optionsApi.getAll((_options) => options = _options)

chrome.webRequest.onBeforeRequest.addListener((details) => {
  if (!options.ignoreWhitespaceInDiff) {
    return;
  }
  
  const url = new URL(details.url)
  
  if (url.pathname.match(/\/(pull-requests\/\d+)(\/.+\/(diff|commits|activity)$|$)/) && !url.searchParams.has("w")) {
    url.searchParams.set("w", "1")
    return { redirectUrl: url.toString() }
  }
},{
  urls: [ 'https://bitbucket.org/*' ],
  types: [ 'main_frame' ]
},[
  'blocking'
])