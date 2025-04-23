const modules = index.modules;
const $ = modules.$;

let scrollPosition = 0;
function togglePopup(show) {
  console.log(window.scrollY);
  const body = document.body;

  if (show) {
    // Lưu vị trí cuộn hiện tại
    scrollPosition = window.scrollY;
    // Gắn lớp no-scroll và giữ vị trí
    //body.style.position = 'fixed';
    $('body').addClass('no-scroll');
    body.style.top = `-${scrollPosition}px`;
    //body.style.width = '100%';
  } else {
    // Gỡ lớp no-scroll và khôi phục vị trí cuộn
    //body.style.position = '';
    //body.style.top = '';
    $('body').removeClass('no-scroll');
    window.scrollTo(0, scrollPosition); // Đặt lại vị trí cuộn
  }
}


function apartmentSwiper() {
  if (document.querySelector(".detailSlider")) {
    new modules.Swiper(".detailSlider", {
      modules: [modules.Pagination],
      effect: "slide",
      loop: false,
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
      //document.querySelector("body").classList.add("no-scroll");
      menu.classList.add("open-menu");
      togglePopup(true);
    });
  }
  // Close menu
  if (document.querySelector(".close-menu")) {
    document.querySelector(".close-menu").addEventListener("click", () => {
      const menu = document.querySelector(".header");
      menu.classList.remove("open-menu");
      //document.querySelector("body").classList.remove("no-scroll");
      togglePopup(false);
    });
  }

}

// Fake data for view detail
const apartments = [
  {
    slogan: 'Duyên dáng, gọn gàng',
    name: 'Danube',
    information: ['1PN', '32.55 - 78.61 m<sup>2</sup>', '31 căn', 'Tầng 8-15'],
    content: 'Không gian sống hiện đại, hòa mình vào thiên nhiên với thiết kế xanh độc đáo. Căn hộ mang đến trải nghiệm tiện nghi, sang trọng, tích hợp công nghệ thông minh, cùng hệ thống tiện ích đẳng cấp.',
    floor: [
      {
        thumb: 'images/danube-detail1.jpg'
      },
      {
        thumb: 'images/danube-detail2.jpg'
      }
    ],
    mapPath: 'images/apartment-map.png'
  },
  {
    slogan: 'Sung túc, chan hòa',
    name: 'nile',
    information: ['2PN', '73.10-91.86 m<sup>2</sup>', '26 căn', 'Tầng 8-15'],
    content: 'Không gian sống hiện đại, hòa mình vào thiên nhiên với thiết kế xanh độc đáo. Căn hộ mang đến trải nghiệm tiện nghi, sang trọng, tích hợp công nghệ thông minh, cùng hệ thống tiện ích đẳng cấp.',
    floor: [
      {
        thumb: 'images/nile-detail.jpg'
      }
    ],
    mapPath: 'images/apartment-map.png'
  },
  {
    slogan: 'Rộng lớn, sống động',
    name: 'amazon',
    information: ['3PN', '101.54-123.34 m<sup>2</sup>', '4 căn', 'Tầng 16'],
    content: 'Không gian sống hiện đại, hòa mình vào thiên nhiên với thiết kế xanh độc đáo. Căn hộ mang đến trải nghiệm tiện nghi, sang trọng, tích hợp công nghệ thông minh, cùng hệ thống tiện ích đẳng cấp.',
    floor: [
      {
        thumb: 'images/amazon-detail.jpg'
      }
    ],
    mapPath: 'images/apartment-map.png'
  },
  {
    slogan: 'Hùng vĩ, mạnh mẽ',
    name: 'victoria',
    information: ['Penthouse', '473.42 m<sup>2</sup>', '1 căn', 'Tầng 17'],
    content: 'Không gian sống hiện đại, hòa mình vào thiên nhiên với thiết kế xanh độc đáo. Căn hộ mang đến trải nghiệm tiện nghi, sang trọng, tích hợp công nghệ thông minh, cùng hệ thống tiện ích đẳng cấp.',
    floor: [
      {
        thumb: 'images/victoria-detail1.jpg'
      },
      {
        thumb: 'images/victoria-detail2.jpg'
      },
      {
        thumb: 'images/victoria-detail3.jpg'
      },
      {
        thumb: 'images/victoria-detail4.jpg'
      }
    ],
    mapPath: 'images/apartment-map.png'
  }
];

function initApartmentDetail(index) {
  let ind = +index;
  const apartment = apartments[ind];

  // Update apartment detail
  $('#apartmentDetailTitle').html(apartment.slogan);
  $('#apartmentDetailValue').html(apartment.name);
  $('#apartmentDetailMap').attr('src', apartment.mapPath);

  let informationHtml = '';
  for (let info of apartment.information) {
    informationHtml += `
     <div class="information__item">
        <span class="information__value">${info}</span>
    </div>
    `;
  }

  $('#apartmentDetailInfomation').html(informationHtml);
  $('#apartmentDetailContent').html(apartment.content);
  

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
    
    setTimeout(function(){
      $('.block__detail.active .apartment__sub--detail').animate({ scrollTop: top }, 0, function () {});
    },50);

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
    setTimeout(() => {
      
    }, 100);
    
    // Change image
    $('.apartment__main--img img.active').removeClass('active');
    $('.apartment__main--img img[data-index='+ index +']').addClass('active');
  });


  // Close dropdown when click out
  $(document).on('click', function (event) {
    if (!$(event.target).closest('.is-dropdown, .select, .language, .share-but').length) {
      // Nếu click bên ngoài phần tử với id 'yourElement'
      $('.open').removeClass('open');
    }
  });

 // open side order form + change title form
  $('#btnOrderSideForm').on('click', function () {
    $('#orderFormTitle').html(`nhận thông tin <br>về căn hộ luminous <span class="number number__font">141</span>`);
    //$('body').addClass('no-scroll');
    $('.side').addClass('active');
    togglePopup(true);
  });

  // Cần phài tách ra để xử lý trên ios
  $('.but-order').on('click', function () {
    $('#orderFormTitle').html(`nhận thông tin <br>về căn hộ luminous <span class="number number__font">141</span>`);
    //$('body').addClass('no-scroll');
    $('.side').addClass('active');
    // chỗ này không cần off scroll
  });

  // open side order form + change title form
  $('#leaseBut').on('click', function () {
    $('#orderFormTitle').html(`thuê văn phòng`);
    //$('body').addClass('no-scroll');
    $('.side').addClass('active');
    togglePopup(true);
  });
  

  // Close side form
  $('.side--close').on('click', function () {
    //$('body').removeClass('no-scroll');
    $('.side').removeClass('active');
    togglePopup(false);
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

    // Scroll to top
    const top = $('.apartment__box').offset().top;
    $('html, body').animate({ scrollTop: top }, 350, function () {
      setTimeout(() => {
        $('.header').removeClass('sticky');
      }, 30);
    });

    // chỗ này không cần off scroll

  });


  // Close form and back to list [ or detail ]
  $('.order-form--close').on('click', function () {

    $('.apartment__sub--block.active, .apartment__main--img img.active').removeClass('active');

    // Reset apartment__sub--block
    $('.apartment__sub--block.block__list').addClass('active');
    $('.apartment__main--img img:nth-child(1)').addClass('active');

  });


  // Fake book success
  $('#orderSubmit, #sideSubmit').on('click', function () {
    $('.page').addClass('blur');
    $('.message__onpage').addClass('active');
  });

  // View all in mobile
  $('#apartmentViewAll').on('click', function () {
    $('.apartment__sub--block.active, .apartment__main--img img.active').removeClass('active');
    //$('body').addClass('no-scroll');
    $('.apartment__sub').addClass('active');
    $('.apartment__sub--block.block__list').addClass('active');
    $('.apartment__main--img img:nth-child(1)').addClass('active');
    togglePopup(true);
  });

  // Close block_list and back to main screen
  $('#backToMainScreen').on('click', function () {
    //$('body').removeClass('no-scroll');
    $('.apartment__sub').removeClass('active');
    togglePopup(false);
  });

  // Close detail and back to block__list
  $('#closeDetail').on('click', function () {

    $('.apartment__sub--block.active, .apartment__main--img img.active').removeClass('active');

    // Reset apartment__sub--block
    $('.apartment__sub--block.block__list').addClass('active');
    $('.apartment__main--img img:nth-child(1)').addClass('active');

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
    togglePopup(true);
    // Scroll to top
    const top = $('.apartment__box').offset().top;
    $('html, body').animate({ scrollTop: top }, 350, function () {
      setTimeout(() => {
        $('.header').removeClass('sticky');
      }, 30);
    });

  });

  $('.goto-bottom').on('click', function () {

    // Scroll to top
    if ($('.section.contact').length) {
      const top = $('.section.contact').offset().top;
      $('html, body').animate({ scrollTop: top }, 350, function () { });
    }

  });

  // Submit contact event fake success
  $('#btnConactSubmit').on('click', function () {
    $('.page').addClass('blur');
    //$('body').addClass('no-scroll');
    $('.message__onpage').addClass('active');
    togglePopup(true);
  });

  // Close message onepage
  $('.message__close--onpage').on('click', function () {
    $('.page').removeClass('blur');
    //$('body').removeClass('no-scroll');
    $('.message__onpage').removeClass('active');
    togglePopup(false);

  });

  // Scrol to section

  $('.nav-menu li').on('click', function () {
    const section = $(this).attr('data-page');
    if ($('*[data-section=' + section + ']')) {
      $('.header').removeClass('open-menu');
      $('html, body').removeClass('no-scroll');
      const top = $('*[data-section=' + section + ']').offset().top;
      $('html, body').animate({
        scrollTop: top
      }, 500, function () {
        if (section === 'tien-ich') {
          const top = $('*[data-section=' + section + ']').offset().top;
          $('html, body').animate({
            scrollTop: top - 50
          }, 10);
        }
      });
    }

  });



})();
