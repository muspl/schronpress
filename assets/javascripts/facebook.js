jQuery(document).ready(function($) {
  $.ajaxSetup({ cache: true });
  $.getScript('//connect.facebook.net/pl_PL/all.js', function(){
    FB.init({
      appId   : '317736431736355',
      xfbml   : true,
      cookie  : true,
      version : 'v2.0'
    });     
    
    // FB.getLoginStatus();

    // Google Analytics events are defined here
    FB.Event.subscribe('edge.create', function(targetUrl) {
      _gaq.push(['_trackSocial', 'facebook', 'like', targetUrl]);
    });

    FB.Event.subscribe('edge.remove', function(targetUrl) {
      _gaq.push(['_trackSocial', 'facebook', 'unlike', targetUrl]);
    });
  });
});