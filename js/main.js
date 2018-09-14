$('.slideshow').cycle({
    speed: 600,
    manualSpeed: 100
});

$('#menu-toggle').click(function(){
    $('#mobile-dashboard').slideToggle();
});