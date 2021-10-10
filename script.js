let burger = document.querySelector('.head-burger'),
    adaptiveMenu = document.querySelector('.head-menu'),
    body = document.body,
    list = document.querySelectorAll('.list-el');

    burger.addEventListener('click', function(){
        burger.classList.toggle('_active'),
        adaptiveMenu.classList.toggle('_active'),
        body.classList.toggle('_lock');  
        
        for(listEl of list) {
            listEl.classList.toggle('_active');
        }
    });

$(document).ready(function(){
    $('.adv-box').slick({
        arrows: true,
        adaptiveHeight: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        speed: 500,
        waitForAnimate: false,
        responsive: [
            {
                breakpoint: 2000,
                settings: 'unslick'
            },
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: true,
                }
            },
            {
                breakpoint: 840,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                    infinite: true,
                }
            }
        ]
    });
    $('.slider').slick({
        arrows: true,
        adaptiveHeight: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        speed: 500,
        initialSlide: 3,
        // autoplay: true,
        // autoplaySpeed: 700,
        pauseonHover: true,
        pauseonActive: true,
        // variableWidth: true,
        waitForAnimate: false,
        centerMode: true,
        responsive: [
            {
                breakpoint: 900,
                settings:{
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 600,
                settings:{
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 500,
                settings:{
                    slidesToShow: 1,
                    variableWidth: true,
                }
            }
        ]

    });  
    $('.adv-box, .slider').slick('setPosition');
});