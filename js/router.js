
(function(){
  var siteView = document.getElementById('site-view');
  var dashView = document.getElementById('dashboard-view');
  function showDashboard(pushHash){
    siteView.style.display = 'none';
    dashView.style.display = '';
    window.scrollTo(0,0);
    if (pushHash !== false) history.pushState(null, '', '#resultados');
  }
  function showSite(pushHash){
    dashView.style.display = 'none';
    siteView.style.display = '';
    window.scrollTo(0,0);
    if (pushHash !== false) history.pushState(null, '', location.pathname + location.search);
  }
  document.addEventListener('click', function(e){
    var goDash = e.target.closest('.js-goto-dashboard');
    if (goDash) { e.preventDefault(); showDashboard(); return; }
    var goSite = e.target.closest('.js-goto-site');
    if (goSite) { e.preventDefault(); showSite(); return; }
  });
  window.addEventListener('popstate', function(){
    if (location.hash === '#resultados') showDashboard(false);
    else showSite(false);
  });
  if (location.hash === '#resultados') showDashboard(false);
  else showSite(false);
})();

