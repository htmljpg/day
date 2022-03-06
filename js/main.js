window.addEventListener('DOMContentLoaded', () => {
    let triggers = document.querySelectorAll('[data-target]');
    triggers.forEach(function (trigger) {
        trigger.addEventListener('click', function () {
            let target = document.querySelector(trigger.getAttribute('data-target'));

            if (trigger.classList.contains('active')) {
            trigger.classList.remove('active');
            document.body.classList.remove('active');
            } else {
            trigger.classList.add('active');
            document.body.classList.add('active');
            }

            if (target) {
            if (target.classList.contains('active')) {
                target.classList.remove('active');
                target.nextSibling().classList.remove('active');
                document.body.classList.remove('active');
            } else {
                target.classList.add('active');
                target.nextElementSibling.classList.add('active');
                document.body.classList.add('active');
            }
            }
        });
    });

    // aos
    AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    })

    // header scroll
    let className = "fixed";
    let scrollTrigger = 70;

    window.onscroll = function() {
        // We add pageYOffset for compatibility with IE.
        if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
            document.getElementById("header").classList.add(className);
            document.querySelector(".scrolled-offset").classList.add('active');
        } else {
            document.getElementById("header").classList.remove(className);
            document.querySelector(".scrolled-offset").classList.remove('active');
        }
    };


    const navLinks = document.querySelectorAll('.nav__link');
    navLinks.forEach(navLink => {
        navLink.addEventListener('click', e => {
            e.preventDefault();
            document.getElementById('nav').classList.remove('active');
        });
    });


});

$(document).ready(function(){
    
    $(window).resize(function() {
        $(".page").css("padding-top", $(".page__row--nav").height());
        $(".page__row--top").css("padding-bottom", $(".page__row--nav").height());
        $(".page__row--nav").css("top", $(".page__row--top").height());
    }).resize();
    
    // Nav
    jQuery(window).scroll(function(){
        var $sections = $('.page__row');
        $sections.each(function(i,el){
            var top  = $(el).offset().top-$(".page__row--header").height() - 30;
            var bottom = top +$(el).height();
            var scroll = $(window).scrollTop();
            var id = $(el).attr('id');
            if( scroll > top && scroll < bottom && scroll > 0){
                $('.scrollto.active').removeClass('active');
                $('.scrollto[href="#'+id+'"]').addClass('active');

            }
        })
     });

    $(".nav__items").on("click",".scrollto", function (event) {
        event.preventDefault();
        
        var id  = $(this).attr('href'),

            top = $(id).offset().top;

        $('body,html').animate({scrollTop: top - $(".page__row--header").height()}, 800);
    });
    
  });