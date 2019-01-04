'use strict';
if(!window.console) window.console = {};
if(!window.console.memory) window.console.memory = function() {};
if(!window.console.debug) window.console.debug = function() {};
if(!window.console.error) window.console.error = function() {};
if(!window.console.info) window.console.info = function() {};
if(!window.console.log) window.console.log = function() {};

// sticky footer
//-----------------------------------------------------------------------------
if(!Modernizr.flexbox) {
  (function() {
    var
      $pageWrapper = $('#page-wrapper'),
      $pageBody = $('#page-body'),
      noFlexboxStickyFooter = function() {
        $pageBody.height('auto');
        if($pageBody.height() + $('#header').outerHeight() + $('#footer').outerHeight() < $(window).height()) {
          $pageBody.height($(window).height() - $('#header').outerHeight() - $('#footer').outerHeight());
        } else {
          $pageWrapper.height('auto');
        }
      };
    $(window).on('load resize', noFlexboxStickyFooter);
  })();
}
if(ieDetector.ieVersion == 10 || ieDetector.ieVersion == 11) {
  (function(){
    var
      $pageWrapper = $('#page-wrapper'),
      $pageBody = $('#page-body'),
      ieFlexboxFix = function() {
        if($pageBody.addClass('flex-none').height() + $('#header').outerHeight() + $('#footer').outerHeight() < $(window).height()) {
          $pageWrapper.height($(window).height());
          $pageBody.removeClass('flex-none');
        } else {
          $pageWrapper.height('auto');
        }
      };
    ieFlexboxFix();
    $(window).on('load resize', ieFlexboxFix);
  })();
}

$(function() {

// placeholder
//-----------------------------------------------------------------------------
  $('input[placeholder], textarea[placeholder]').placeholder();
    $('.top-nav li a').each(function () {
        var location = window.location.href;
        var link = this.href;
        if(location == link) {
            $(this).addClass('active');
        }
    });
    $('.sub-nav_btn').on('click', function () {
        if($(this).hasClass('open-tab')){
            $('.sub-nav .tabs_header').addClass('tabs-open').slideDown();
            $(this).addClass('nav_btn-active');
            $(this).removeClass('open-tab');
        }else{
            $(this).removeClass('nav_btn-active');
            $('.tabs_header').removeClass('tabs-open');
            $('.sub-nav .tabs_header').removeClass('tabs-open').slideUp();
            $(this).addClass('open-tab');
        }
    });
    $('.top-nav-btn').on('click', function () {
        if($(this).hasClass('top-nav-btn_open')){
            $(this).removeClass('top-nav-btn_open');
            $('.top-nav').removeClass('top-nav_open');
            $('body').removeClass('body_open');
        }else{
            $(this).addClass('top-nav-btn_open');
            $('.top-nav').addClass('top-nav_open');
            $('body').addClass('body_open');
        }
    });

    if($('.fancybox').length) {
        $('.fancybox').fancybox();
    }
    $('.equipment-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<button class="slick-prev"><i class="mdi mdi-arrow-left"></i>Предыдущая</button>',
        nextArrow: '<button class="slick-next">Следующая<i class="mdi mdi-arrow-right"></i></button>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    $('.service-gallery_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<button class="slick-prev"><i class="mdi mdi-arrow-left"></i>Предыдущая</button>',
        nextArrow: '<button class="slick-next">Следующая<i class="mdi mdi-arrow-right"></i></button>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    dots: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    $('.certificate-slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        prevArrow: '<button class="slick-prev"><i class="mdi mdi-arrow-left"></i>Предыдущая</button>',
        nextArrow: '<button class="slick-next">Следующая<i class="mdi mdi-arrow-right"></i></button>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    dots: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    $('.service-tabs .tabs__nav a').on('click', function (e) {
        e.preventDefault();
        var $this = $(this);
        var tabItemId = $this.attr('href');
        $('.tabs__nav a').removeClass('active');
        $this.addClass('active');
        $('.tabs__content-item').removeClass('tabs__content-item-visible');
        $(tabItemId).addClass('tabs__content-item-visible');
        $('.service-gallery_slider').slick("setPosition", 0);
    });
    $('.table-item tbody').jScrollPane("setPosition", 0);
    $('.tabs__nav a').on('click', handler);
        function handler(e){
        e.preventDefault();
        var $this = $(this);
        var tabItemId = $this.attr('href');
        $('.tabs__nav a').removeClass('active');
        $this.addClass('active');
        $('.tabs__content-item').removeClass('tabs__content-item-visible');
        $(tabItemId).addClass('tabs__content-item-visible');
        $('.service-gallery_slider').slick("setPosition", 0);
        $('.gallery-slider').slick("setPosition", 0);
        $('.table-item tbody').jScrollPane("setPosition", 0);
        };
    $(".tabs li a").click(function () {
        $('html, body').animate({
            scrollTop: $(".tabs__content").offset().top - 150
        }, 2000);
    });
    $(".service-tabs li a").click(function () {
        $('html, body').animate({
            scrollTop: $(".tabs__content").offset().top - 150
        }, 2000);
    });

    $('.map-container').on('click', function () {
        $(this).addClass('map-open');
    });
    $('.contact-form label').on('click', function () {
        $('.contact-form label').removeClass('label-active');
        $(this).addClass('label-active');
    });
    $('.map-cont .link-item a').on('click', function (e) {
        e.preventDefault();
        var $this = $(this),
            $thisPopup = $this.parents('.map-cont').find('.popup-contact');
        $thisPopup.addClass('popup-contact-open');
    });
    $('.top-btn a').on('click', function (e) {
        e.preventDefault();
        $('.popup-top').addClass('popup-top-open');
    });
    $('.popup-overlay').on('click', function () {
        $('.popup-contact').removeClass('popup-contact-open');
        $('.popup-top').removeClass('popup-top-open');
    });
    $('.close').on('click', function () {
        $('.popup-contact').removeClass('popup-contact-open');
        $('.popup-top').removeClass('popup-top-open');
    });
    $('.gallery-slider').slick({
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        prevArrow: '<button class="slick-prev"><i class="mdi mdi-arrow-left"></i>Предыдущая</button>',
        nextArrow: '<button class="slick-next">Следующая<i class="mdi mdi-arrow-right"></i></button>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    dots: false,
                    slidesToScroll: 1
                }
            }
        ]
    });

});
function checkResize() {
    var windowSize = $(window).width();
    var galSlider = $('.gallery-slider');
    if (windowSize >= 992) {
        $('.tabs-nav__header a').on('click', function (e) {
            e.preventDefault();
            var $this = $(this);
            var tabItemId = $this.attr('href');
            $('.tabs-nav__header a').removeClass('active');
            $this.addClass('active');
            $('.tabs__content-header').removeClass('tabs__content-header-visible');
            $(tabItemId).addClass('tabs__content-header-visible');
            $('.gallery-slider').slick("setPosition", 0);
        });
        $(galSlider).addClass('gallery-slider_page');
        $(galSlider).removeClass('gallery-slider_mobile');
    }else{
        $(galSlider).addClass('gallery-slider_mobile');
        $(galSlider).removeClass('gallery-slider_page');
        $('.sub_tab-nav .sub_tab-nav-link').on("click", function () {
            var $this = $(this),
                $thisItem = $this.closest('.sub_tab-nav'),
                $thisContent = $thisItem.find('ul');
            if($thisItem.hasClass('open')) {
                $thisItem.removeClass('open');
                $thisContent.stop(true, true).slideUp();
            } else {
                $thisItem.addClass('open').siblings().removeClass('open').find('ul').stop(true, true).slideUp();
                $thisContent.stop(true, true).slideDown();
            }
        });
        // $('.tabs__nav a').on('click', function(e) {
        //     e.preventDefault();
        //     var target = $(this).attr('href'),
        //         offset = - 140;
        //     $('html, body').animate({
        //         scrollTop: $(target).offset().top + offset
        //     }, 800);
        //     $('.table-item tbody').jScrollPane("setPosition", 0);
        // });
    }
}
checkResize();
$(window).resize(checkResize);
$(window).scroll(function () {
    if ($(this).scrollTop() > 20) {
        $('.header').addClass('header-scroll');

    }else {
        $('.header').removeClass('header-scroll');
    }
});
$(window).scroll(function () {
    if ($(this).scrollTop() > 700) {
        $('.scroll-top').fadeIn().css('display','block');
    }else {
        $('.scroll-top').fadeOut().css('display','none');
    }
});
$('.scroll-top').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 500);
    return false;
});
jQuery(function($){
    $(document).mouseup(function (e){
        var div1 = $(".sub-nav .tabs_header");
        if (!div1.is(e.target)
            && div1.has(e.target).length === 0) {
            div1.removeClass('tabs-open').slideUp();
        }
    });
});
jQuery(function($){
    $(document).mouseup(function (e){
        var div2 = $(".contact-form label");
        if (!div2.is(e.target)
            && div2.has(e.target).length === 0) {
            div2.removeClass('label-active');
        }
    });
});
jQuery(function($){
    $(document).mouseup(function (e){
        var div3 = $(".map-container");
        if (!div3.is(e.target)
            && div3.has(e.target).length === 0) {
            div3.removeClass('map-open');
        }
    });
});
$(window).load(function() {
    var wow = new WOW({
        boxClass:     'wow',
        animateClass: 'animated',
        offset:       200,
        mobile:       false,
        live:         true,
        callback:     function(box) {
        }
    });
    wow.init();
});

