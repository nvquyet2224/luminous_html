(function () {
        if (typeof jQuery !== "undefined" && typeof jQuery.fn.slick !== "undefined") {
            jQuery('.wb__believe--slider').slick({
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: true,
                //autoplay: true,
                autoplaySpeed: 3000,
            });
            jQuery('.wb__university--slider > .vc_column-inner > .wpb_wrapper').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: true,
            //autoplay: true,
            autoplaySpeed: 3000,
            });
        } else {
            console.error("Slick Slider chưa được load!");
        }
    })();