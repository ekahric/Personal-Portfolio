/*========== NAVBAR EFFECTS ==========*/

$(document).ready(function() { 
        $(window).scroll(function() { 
          if($(this).scrollTop() > 300) { 
              $('.navbar').addClass('solid'); 
          } else {
              $('.navbar').removeClass('solid'); 
          }
        });
});





/*========== MOBILE NAV ON CLICKING  ==========*/

$(document).ready(function () { 
    $(document).click(function (event) { 
        var clickover = $(event.target);
        var _opened = $(".navbar-collapse").hasClass("show");
        if (_opened === true && !clickover.hasClass("navbar-toggler")) { 
            $(".navbar-toggler").click(); 
        }
    });
});








/*========== SMOOTH SCROLLING TO LINKS ==========*/

$(document).ready(function(){ 
  $("a").on('click', function(event) {

    
    if (this.hash !== "") {
      
      event.preventDefault();

     
      var hash = this.hash;
      

      $('html, body').animate({
        scrollTop: $(hash).offset().top 
      }, 500, function(){
   
        
        window.location.hash = hash;
        
      });
    } 
  });
});









/*========== BOUNCING DOWN ARROW ==========*/

$(document).ready(function(){
$(window).scroll(function(){ 
    $(".arrow").css("opacity", 1 - $(window).scrollTop() / 250); 
  
  });
});














/*========== TOP SCROLL BUTTON ==========*/

$(document).ready(function() { 
  $(window).scroll(function() { 
    if ($(this).scrollTop() > 600) { 
      $('.top-scroll').fadeIn(); 
    } else { 
      $('.top-scroll').fadeOut(); 
    }
  });
});




