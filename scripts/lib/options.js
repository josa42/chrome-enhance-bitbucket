const optionsApi = (() => {
  const defaults = {
    ignoreWhitespaceInDiff: true,
    hideDeletedInDiff: true
  };
  
  const getAll = (callback) => {
    chrome.storage.sync.get((options) => {
      callback(Object.assign({}, defaults, options));
    });
  };
  
  const get = (key, callback) => {
    chrome.storage.sync.get(key, (options) => {
      options = Object.assign({}, defaults, options)
    });
  };
  
  
  const set = (key, value) => {
    chrome.storage.sync.set({ [key]: value }, () => getAll((options) => {
      chrome.runtime.sendMessage({ type: 'options-changed', options });
    }));
  };
  
  return { get, getAll, set };
})()