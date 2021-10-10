let burger = document.querySelector('.head-burger'),
    adaptiveMenu = document.querySelector('.head-menu');

    burger.addEventListener('click', function(){
        burger.classList.toggle('_active'),
        adaptiveMenu.classList.toggle('_active');
        
    });

$(document).ready(function(){
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
    // $('.adv-box').slick('setPosition');
    $('.adv-box').slick({
        responsive: [
            {
                breakpoint: 5000,
                settings: 'unslick'
            },
            {
                breakpoint: 840,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                    adaptiveHeight: true,
    
                }
            }
        ]
    });
    
});