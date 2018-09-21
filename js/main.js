$('.slideshow').cycle({
        speed: 600,
        manualSpeed: 100
});

$(document).ready(function() {
    $('#menu-toggle').click(function(){
        $('#mobile-dashboard').slideToggle();
    });    
});