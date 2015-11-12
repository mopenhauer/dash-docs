// Using JSONP
$.ajax({
  url: "https://osc.hul.harvard.edu/dash/services/dash/snapshots.php", 
  dataType: "jsonp",
  jsonp: "callback",
  jsonpCallback: 'snapshots',
  success: function( response ) {
    var image_pattern = new RegExp("^[0-9a-z_\-]*\.png$");
    
    // Loops through panels instead of response because the tab controls are already in the DOM
    // ... and I think that is correct.
    // Therefore this feed needs to serve info in a reliable order.
    var panels = $("aside div.tab-pane");
    $.each(panels, function(index){
      try {
        // predefined protocol + domain only
        if ("mydash" == response[index].url_domain) {
          var url = "https://osc.hul.harvard.edu/dash/mydash?" + encodeURI(response[index].url_path);  
        } else if ("dash" == response[index].url_domain){
          var url = "https://dash.harvard.edu/" + encodeURI(response[index].url_path);
        } else {
          var url = "https://osc.hul.harvard.edu/dash/mydash";
        }
        // predefined image location only
        if (image_pattern.test(response[index].image_file)){
          var image_url = "https://osc.hul.harvard.edu/sites/all/modules/mydash/images/snapshots/" + response[index].image_file;
        } else {
          var image_url = "/docs/assets/img/downloads_map.png";
        }
        // assemble elements
        var span = $("<span>").text(response[index].label);
        var img = $("<img>").attr("src", image_url).attr("alt", "").attr("height", "92").attr("width", "138");
        var a = $("<a>").attr("href", url);
        // append
        a.append(img).append(span).appendTo($(this));
      } catch (e){
        // benign placeholder
        $(this).append('<a href="https://osc.hul.harvard.edu/dash/mydash"><img src="/docs/assets/img/downloads_map.png" alt="" height="92" width="138"><span>Visit MyDASH Stats</span></a>');          
      }
    });
  },
  error: function(){
    var panels = $("aside div.tab-pane");
    $.each(panels, function(index){
      $(this).append('<a href="https://osc.hul.harvard.edu/dash/mydash"><img src="/docs/assets/img/downloads_map.png" alt="" height="92" width="138"><span>Visit MyDASH Stats</span></a>');          
    });
  }
});
