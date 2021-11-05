$(document).ready(function() {
    // Scroll Nav bar
    let lastScrollTop = 20;
    $(window).scroll(function(e) {
        $('.header-nav .navbar-collapse').removeClass('show');
        let scrollTop = $(this).scrollTop();
        if (scrollTop > lastScrollTop) {
            $('.header-nav').removeClass('fixed');
        } else if (scrollTop < lastScrollTop) {
            $('.header-nav').addClass('fixed');
        }
        if (scrollTop <= $('header').height()) {
            $('.header-nav').removeClass('fixed');
        }
        lastScrollTop = scrollTop;
    })

    // open and close social share btn
    let btnOpenShareMore = $('.btn-open-share');
    let btnCloseShareMore = $('.btn-close-share');
    let shareMore = $('.share-more');

    btnOpenShareMore.each(function(index) {
        $(this).on('click', function(e) {
            $(this).css('display', 'none');
            $(shareMore[index]).css('display', 'flex');
        })
    });


    btnCloseShareMore.each(function(index) {
        $(this).on('click', function(e) {
            $(shareMore[index]).css('display', 'none');
            $(btnOpenShareMore[index]).css('display', 'block');
        })
    });



})