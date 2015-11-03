// Using JSONP
$.ajax({
    url: "https://osc.hul.harvard.edu/dash/services/dash/top/trending/jsonp.php", 
    dataType: "jsonp",
    jsonp: "callback",
    jsonpCallback: 'callback',
    success: function( response ) {
        var list = $("ol.trending-works");
        $.each(response, function(index, value){
          list.append('<li><a href="' + value.link + '">' + value.title + '</a></li>');
        });
    }
});
