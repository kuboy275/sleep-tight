$(document).ready(function() {
    // Scroll Nav bar
    $(window).scroll(function(e) {
        var st = $(this).scrollTop();
        if (st > 100) {
            $('.header-nav').addClass('fixed');
        } else {
            $('.header-nav').removeClass('fixed');

        }
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