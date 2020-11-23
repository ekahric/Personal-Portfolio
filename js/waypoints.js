/*========== WAYPOINTS ==========*/
$(function(){ 
    function onScrollInit( items, trigger ) { 
        items.each( function() { 
        var osElement = $(this),  
            osAnimationClass = osElement.attr('data-animation'), 
            osAnimationDelay = osElement.attr('data-delay'); 

            osElement.css({ 
                '-webkit-animation-delay':  osAnimationDelay, 
                '-moz-animation-delay':     osAnimationDelay, 
                'animation-delay':          osAnimationDelay 
            });

            var osTrigger = ( trigger ) ? trigger : osElement;

            osTrigger.waypoint(function() { 
                osElement.addClass('animated').addClass(osAnimationClass); 
                },{
                    triggerOnce: true, 
                    offset: '70%'
            });
        });
    }

    onScrollInit( $('.os-animation') ); 
    onScrollInit( $('.staggered-animation'), $('.staggered-animation-container') ); 
});