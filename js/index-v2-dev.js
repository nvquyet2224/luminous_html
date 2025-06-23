(function () {
        if (typeof jQuery !== "undefined" && typeof jQuery.fn.slick !== "undefined") {
            jQuery('.wb__believe--slider').slick({
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: true,
                autoplaySpeed: 3000,
            });
            jQuery('.wb__university--slider > .vc_column-inner > .wpb_wrapper').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: true,
            autoplaySpeed: 3000,
            });
            jQuery('.wb__leading--hover').css({'height':  '0px'});
            jQuery('.wb__our--section .vc_vc_column, .wb__our--section .wpb_column').on('mouseenter', function() {
                const detailH = jQuery(this).find('.wb__leading--hover__body').innerHeight();
                console.log(detailH);
                jQuery(this).find('.wb__leading--hover').css({'height':  detailH + 'px'})
            }).on('mouseleave', function() {
                console.log('mouseleave');
                jQuery(this).find('.wb__leading--hover').css({'height':  '0px'});
            });
        } else {
            console.error("Slick Slider chưa được load!");
        }
})();