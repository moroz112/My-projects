$(function(){
    var page_h = document.body.clientHeight;
    $('#ff').css('height','page_h');
    var inp = $('#b-layout__search');
    $(window).scroll(function(){
        if($(this).scrollTop() > 20 && inp.hasClass('default')){
            inp.removeClass('default').addClass('fixed');
        } else if($(this).scrollTop() < 20 && inp.hasClass('fixed')){
            inp.removeClass('fixed').addClass('default');
        }
    });
    var g = $('.b-layout__results');
    g.removeClass('fff').addClass('ddd');
    if(g.hasClass('ddd')){

    }
});