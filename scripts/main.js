$$('body').classList.add('enhanced-bitbucket');

optionsApi.getAll((options) => {
  if (options.hideDeletedInDiff) {
    $$('body').classList.add('hide-deleted-in-diff');
  }
  
  if (options.hideDeletedDiffInDiff) {
    $$('body').classList.add('hide-deleted-diff-in-diff');
  }
})

// Diffs

  // Hide diffs for deleted files
const setDiffClasses = () => {
  if (window.location.pathname.match(/\/diff$/)) {
    let interval;
    interval = setInterval(() => {
      const diffs = $('.bb-udiff');
      if (diffs.length === 0) {
        return
      }
      
      clearInterval(interval);

      diffs.forEach((container) => {
        const typeEl = $$('.diff-entry-lozenge', container)
        if (typeEl && typeEl.textContent === 'Deleted') {
          $addClass('delete-diff', container);
        }
      })
    }, 200)
  }
};

let lastLocaltionHref
setInterval(() => {
  if (lastLocaltionHref !== undefined && lastLocaltionHref !== location.href) {
    window.dispatchEvent(new Event('locationChanged'));
  }
  lastLocaltionHref = location.href
}, 500);


setDiffClasses();
window.addEventListener('locationChanged', () => setDiffClasses());