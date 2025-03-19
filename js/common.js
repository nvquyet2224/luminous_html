const modules = index.modules;
const $ = modules.$;

function apartmentSwiper() {
  if (document.querySelector(".detailSlider")) {
    new modules.Swiper(".detailSlider", {
      modules: [modules.Pagination],
      effect: "slide",
      loop: true,
      speed: 1000,
      preloadImages: false,
      lazy: true,
      disableOnInteraction: true,
      pauseOnMouseEnter: true,
      slidesPerView: 1,
      spaceBetween: 24,
      allowTouchMove: true,
      watchOverflow: true,
      initialSlide: 0,
      autoHeight: false,
      pagination: {
        el: ".detail__body .swiper-pagination",
        clickable: true,
      },
      on: {
        init: function () { },
        transitionStart: function () { },
        transitionEnd: function () { },
      },
    });
  }
}

function navClick() {
  // Open menu
  if (document.querySelector(".toggle-menu")) {
    document.querySelector(".toggle-menu").addEventListener("click", () => {
      const menu = document.querySelector(".header");
      document.querySelector("html, body").classList.add("no-scroll");
      menu.classList.add("open-menu");
    });
  }
  // Close menu
  if (document.querySelector(".close-menu")) {
    document.querySelector(".close-menu").addEventListener("click", () => {
      const menu = document.querySelector(".header");
      menu.classList.remove("open-menu");
      document.querySelector("html, body").classList.remove("no-scroll");
    });
  }

}

// Fake data for view detail
const apartments = [
  {
    name: 'Căn hộ',
    value: 17,
    information: [
      {
        name: 'price',
        value: '230 m vnd'
      },
      {
        name: 'size',
        value: '989 sq.ft.'
      },
      {
        name: 'layout',
        value: '2x2 A'
      }
    ],
    floor: [
      {
        thumb: 'images/apartment-floor.png'
      },
      {
        thumb: 'images/apartment-floor.png'
      }
    ],
    mapPath: 'images/apartment-map.png'
  },
  {
    name: 'Căn hộ',
    value: 22,
    information: [
      {
        name: 'price',
        value: '230 m vnd'
      },
      {
        name: 'size',
        value: '989 sq.ft.'
      },
      {
        name: 'layout',
        value: '2x2 A'
      }
    ],
    floor: [
      {
        thumb: 'images/apartment-floor.png'
      },
      {
        thumb: 'images/apartment-floor.png'
      }
    ],
    mapPath: 'images/apartment-map.png'
  },
  {
    name: 'Căn hộ',
    value: 112,
    information: [
      {
        name: 'price',
        value: '230 m vnd'
      },
      {
        name: 'size',
        value: '989 sq.ft.'
      },
      {
        name: 'layout',
        value: '2x2 A'
      }
    ],
    floor: [
      {
        thumb: 'images/apartment-floor.png'
      },
      {
        thumb: 'images/apartment-floor.png'
      }
    ],
    mapPath: 'images/apartment-map.png'
  },
  {
    name: 'Căn hộ',
    value: 24,
    information: [
      {
        name: 'price',
        value: '230 m vnd'
      },
      {
        name: 'size',
        value: '989 sq.ft.'
      },
      {
        name: 'layout',
        value: '2x2 A'
      }
    ],
    floor: [
      {
        thumb: 'images/apartment-floor.png'
      },
      {
        thumb: 'images/apartment-floor.png'
      }
    ],
    mapPath: 'images/apartment-map.png'
  }
];

function initApartmentDetail(index) {
  let ind = +index;
  const apartment = apartments[ind];

  // Update apartment detail
  $('#apartmentDetailTitle').html(apartment.name);
  $('#apartmentDetailValue').html(apartment.value);
  $('#apartmentDetailMap').attr('src', apartment.mapPath);

  let informationHtml = '';
  for (let info of apartment.information) {
    informationHtml += `
     <div class="information__item">
        <span class="information__title">${info.name}</span>
        <span class="information__value">${info.value}</span>
    </div>
    `;
  }

  $('#apartmentDetailInfomation').html(informationHtml);


  let galleryItem = '';
  for (let fl of apartment.floor) {
    galleryItem += `
      <div class="swiper-slide">
        <img fetchpriority="low" loading="lazy" width="447" height="257"
            src="${fl.thumb}" alt="detail">
      </div>
      `
  }

  let htmlGallery = `
    <div class="detailSlider swiper">
        <div class="swiper-wrapper">
           ${galleryItem}
        </div>
    </div>
    <div class="swiper-pagination"></div>
  `;

  $('#apartmentDetailGallery').html(htmlGallery);


  // Build gallery slider
  setTimeout(function () {
    apartmentSwiper();
  }, 150);

}


(function () {
  navClick();
  apartmentSwiper();

  // Open dropdown
  $('.is-dropdown').on('click', function () {
    if ($(this).parent().hasClass('open')) {
      $(this).parent().removeClass('open');
    } else {
      $('.open').removeClass('open');
      $(this).parent().addClass('open');
    }
  });

  // Open share block
  $('.share-but').on('click', function () {
    if ($(this).hasClass('open')) {
      $(this).removeClass('open');
    } else {
      $('.open').removeClass('open');
      $(this).addClass('open');
    }
  });

  // Fake select apartment item
  $('.select__box li').on('click', function () {
    let text = $(this).html();
    let index = $(this).attr('data-index');
    initApartmentDetail(index);
    $('.apartment__drop h3').html(text);
    $('.open').removeClass('open');
    console.log('Rebuil slider detail');
  });


  // Close dropdown when click out
  $(document).on('click', function (event) {
    if (!$(event.target).closest('.is-dropdown, .select, .language, .share-but').length) {
      // Nếu click bên ngoài phần tử với id 'yourElement'
      console.log('Clicked outside!');
      $('.open').removeClass('open');
    }
  });


  // Scroll to contact
  $('#btnScrollToOrder').on('click', function () {
    $('.side').addClass('active');
  });

  // Close side form
  $('.side--close').on('click', function () {
    $('.side').removeClass('active');
  });


  // Select apartment item
  $('.apartment__sub--item').on('click', function () {
    let index = $(this).attr('data-index');

    $('.apartment__main--img img.active, .apartment__sub--block.active').removeClass('active');
    $('.apartment__main--img img[data-index=' + index + ']').addClass('active');

    // Reset apartment__sub--block
    $('.apartment__sub--block.block__detail').addClass('active');


    // Trigger to build apartment detail
    $('.select__box li[data-index=' + index + ']').trigger('click');

  });

  $('.apartment__sub--item').on('mouseover', function () {
    if ($(window).width() > 1024) {
      let index = $(this).attr('data-index');
      $('.apartment__main--img img.active').removeClass('active');
      $('.apartment__main--img img[data-index=' + index + ']').addClass('active');
    }
  })


  // Back to apartment list
  $('#backToApartmentList').on('click', function () {

    $('.apartment__sub--block.active').removeClass('active');

    // Reset apartment__sub--block
    $('.apartment__sub--block.block__list').addClass('active');


  });

  // Open Order form
  $('.but-order').on('click', function () {

    $('.apartment__sub--block.active').removeClass('active');

    // Reset apartment__sub--block
    $('.apartment__sub--block.block__form').addClass('active');

  });

  // Close form and back to list [ or detail ]
  $('.order-form--close').on('click', function () {

    $('.apartment__sub--block.active').removeClass('active');

    // Reset apartment__sub--block
    $('.apartment__sub--block.block__list').addClass('active');

  });


  // Fake book success
  $('#orderSubmit, #sideSubmit').on('click', function () {
    $('.page').addClass('blur');
    $('.message__onpage').addClass('active');
  });

  // View all in mobile
  $('#apartmentViewAll').on('click', function () {
    $('.apartment__sub--block.active').removeClass('active');
    $('.apartment__sub').addClass('active');
    $('.apartment__sub--block.block__list').addClass('active');
  });

  // Close block_list and back to main screen
  $('#backToMainScreen').on('click', function () {
    $('.apartment__sub').removeClass('active');
  });

  // Close detail and back to block__list
  $('#closeDetail').on('click', function () {

    $('.apartment__sub--block.active').removeClass('active');

    // Reset apartment__sub--block
    $('.apartment__sub--block.block__list').addClass('active');

  });


  // View apartment detail

  // Close detail and back to block__list
  $('.apartment__nav--item').on('click', function () {

    let index = $(this).attr('data-index');
    $('.apartment__sub--block.active').removeClass('active');
    $('.apartment__sub').addClass('active');
    $('.apartment__sub--block.block__detail').addClass('active');

    // Trigger to build apartment detail
    $('.select__box li[data-index=' + index + ']').trigger('click');

  });

  // Submit contact event fake success
  $('#btnConactSubmit').on('click', function () {
    $('.page').addClass('blur');
    $('.message__onpage').addClass('active');
  });

  // Close message onepage
  $('.message__close--onpage').on('click', function () {
    $('.page').removeClass('blur');
    $('.message__onpage').removeClass('active');

  });

  // Scrol to section
  
  $('.nav-menu li').on('click', function () {
    const section = $(this).attr('data-page');
    if($('*[data-section='+ section +']')) {
      $('.header').removeClass('open-menu');
      $('html, body').removeClass('no-scroll');
      const top = $('*[data-section='+ section +']').offset().top;
      $('html, body').animate({
        scrollTop: top
    }, 500);
    }

  });



})();
