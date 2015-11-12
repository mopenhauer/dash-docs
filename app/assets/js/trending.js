// Using JSONP
$.ajax({
    url: "https://osc.hul.harvard.edu/dash/services/dash/top/trending/jsonp.php", 
    dataType: "jsonp",
    jsonp: "callback",
    jsonpCallback: 'callback',
    success: function( response ) {
      var list = $("ol.trending-works");
      var handle_pattern = new RegExp("^1\/[0-9]*$");
      $.each(response, function(index, item){
        if (handle_pattern.test(item.handle)){
          var url = "https://dash.harvard.edu/handle/" + item.handle;
          var li = $("<li>");
          var a = $("<a>").attr("href", url).text(item.title);
          li.append(a).appendTo(list);
        }
      });
    },
    error: function(){
      $("ol.trending-works").hide().parent().append('<p style="font-size: .69em;">(Currently Unavailable)</p>');
    }
});
