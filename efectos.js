$(document).ready(function(){

    // Efecto Menu
    $('.menu a').each(function(index, elemento){
        $(this).css({
            'top': '-200px'
        });

        $(this).animate({
            'top': '0'
        }, 2000 + (index * 500));
    });
// Efecto Header
    if ($(window).width() > 800 ){
        $('header .textos').css({
            opacity:0,
            marginTop: 0
        });
        $('header .textos').animate({
            opacity:1,
            marginTop: '-52px'
        },1500 );
    }
// Scroll elementos menu
        var nuestroProducto = $('#nuestro-producto').offset().top,
            portafolio = $('#imagenes').offset().top;
            nuestrosServicios = $('#nuestros-servicios').offset().top,
            contacto = $('#contacto').offset().top;
    
        $('#btn-nuestro-producto').on('click', function(e){
            e.preventDefault();
            $('html, body').animate({
                scrollTop: 400
            }, 500);
        });
    
        $('#btn-portafolio').on('click', function(e){
            e.preventDefault();
            $('html, body').animate({
                scrollTop: portafolio
            }, 500);
        });
    
        $('#btn-nuestros-servicios').on('click', function(e){
            e.preventDefault();
            $('html, body').animate({
                scrollTop: nuestrosServicios -25
            }, 500);
        });
        
        $('#btn-contacto').on('click', function(e){
            e.preventDefault();
            $('html, body').animate({
                scrollTop: contacto
            }, 500);
        });
    });