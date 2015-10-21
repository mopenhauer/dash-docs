 // Stories  // 
   var storyChange = function(){
        var tabs = $('main .osc-carousel .nav-tabs > li');
        var active = tabs.filter('.active');
        var next = active.next('li').length? active.next('li').find('a') : tabs.filter(':first-child').find('a');
        // Use the Bootsrap tab show method
        next.tab('show');
    }
    var storyCycle = setInterval(storyChange, 6000);
    // click event handler
    $(function(){
        $('.nav-tabs a').click(function(e) {
            e.preventDefault();
            // Show the clicked tabs associated tab-pane
            $(this).tab('show');
            // Stop the slidesjpw  
            clearInterval(storyCycle);
        });
    });
    // stop
    $("main .stop-button").click(function(){
      clearInterval(storyCycle);
      $(this).html('stopped');
    });

// Stats
    var tabChange = function(){
        var tabs = $('aside .osc-carousel .nav-tabs > li');
        var active = tabs.filter('.active');
        var next = active.next('li').length? active.next('li').find('a') : tabs.filter(':first-child').find('a');
        // Use the Bootsrap tab show method
        next.tab('show');
    }
    // Tab Cycle function
    var tabCycle = setInterval(tabChange, 5000);
    // click event handler
    $(function(){
        $('.nav-tabs a').click(function(e) {
            e.preventDefault();
            // Stop the cycle
            clearInterval(tabCycle);
            // Show the clicked tabs associated tab-pane
            $(this).tab('show');
        });
    });
