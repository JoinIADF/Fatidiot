/* Paste in browser console while game is open to hide lounge bar when reading */
(function () {
  const hide = () => {
    const tr = document.getElementById('tweetReader');
    const open = tr && !tr.classList.contains('hidden');
    const bar = document.getElementById('loungeMobBar');
    if (open) {
      document.body.classList.add('reading-tweets');
      if (bar) {
        bar.classList.remove('show');
        bar.style.cssText = 'display:none!important;visibility:hidden!important;pointer-events:none!important;opacity:0!important;z-index:-1!important';
      }
    }
  };
  const tr = document.getElementById('tweetReader');
  if (tr) {
    const obs = new MutationObserver(hide);
    obs.observe(tr, { attributes: true, attributeFilter: ['class'] });
  }
  const style = document.createElement('style');
  style.textContent = `#tweetReader { z-index: 500 !important; } body.reading-tweets #loungeMobBar, body.reading-tweets #loungeMobBar.show, #loungeMobBar.reading-hidden { display: none !important; visibility: hidden !important; pointer-events: none !important; opacity: 0 !important; z-index: -1 !important; }`;
  document.head.appendChild(style);
  hide();
  setInterval(hide, 250);
  console.log('[fatidiot] hide-on-read active');
})();
