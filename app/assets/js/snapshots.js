// Using JSONP
$.ajax({
    url: "https://osc.hul.harvard.edu/dash/services/dash/snapshots.php", 
    dataType: "jsonp",
    jsonp: "callback",
    jsonpCallback: 'snapshots',
    success: function( response ) {
      var panels = $("aside div.tab-pane");
      $.each(panels, function(index, value){
        if (response[index].url) {
          $(this).append('<a href="'+ response[index].url +'"><img src="'+ response[index].image +'" alt="" height="92" width="138"><span>'+ response[index].label +'</span></a>');
        } else {
          $(this).append('<a href="https://osc.hul.harvard.edu/dash/mydash"><img src="/docs/assets/img/downloads_map.png" alt="" height="92" width="138"><span>Visit MyDASH Stats</span></a>');
        }
      });
    }
});
