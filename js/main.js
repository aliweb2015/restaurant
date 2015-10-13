

$(document).ready(function(){

    function goToByScroll(id){
        $('html,body').animate({scrollTop: $(id).offset().top},'slow');
    }

    $('.navbar a').click(function(){
        goToByScroll($(this).attr('href'));
        return false;
    });






$('#Amenu').hide();
    $(window).scroll(function(){
        if($(window).scrollTop()>100){
            $('#Amenu').fadeIn("slow");
            $('#Bmenu').fadeOut("slow");

        }
    });

    $(window).scroll(function(){
        if($(window).scrollTop()<100){
            $('#Amenu').fadeOut("slow");
            $('#Bmenu').fadeIn("slow");

        }

    });


    $(window).scroll(function() {
        if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
            $('#return-to-top').fadeIn(200);    // Fade in the arrow
        } else {
            $('#return-to-top').fadeOut(200);   // Else fade out the arrow
        }
    });
    $('#return-to-top').click(function() {      // When arrow is clicked
        $('body,html').animate({
            scrollTop : 0                       // Scroll to top of body
        }, 500);
    });


});

