(function ($) {
    "use strict";

    /*--
        Commons Variables
    -----------------------------------*/
    var $window = $(window),
        $body = $('body');

    /*--
        Custom script to call Background
        Image & Color from html data attribute
    -----------------------------------*/
    $('[data-bg-image]').each(function () {
        var $this = $(this),
            $image = $this.data('bg-image');
        $this.css('background-image', 'url(' + $image + ')');
    });
    $('[data-bg-color]').each(function () {
        var $this = $(this),
            $color = $this.data('bg-color');
        $this.css('background-color', $color);
    });
    $('[data-color]').each(function () {
        var $this = $(this),
            $color = $this.data('color');
        $this.css('color', $color);
    });

    /*--
        Header Sticky
    -----------------------------------*/
    $window.on('scroll', function () {
        if ($window.scrollTop() > 80) {
            $('.mexi-header').addClass('is-sticky');
        } else {
            $('.mexi-header').removeClass('is-sticky');
        }
    });


    /*--
        Off Canvas Function
    -----------------------------------*/
    $('.mexi-mobile-menu-toggle, .mexi-mobile-menu-close').on('click', '.toggle', function () {
        $body.toggleClass('mobile-menu-open');
    });
    $('.mexi-site-mobile-menu').on('click', '.menu-toggle', function (e) {
        e.preventDefault();
        var $this = $(this);
        if ($this.siblings('.mexi-sub-menu:visible').length) {
            $this.siblings('.mexi-sub-menu').slideUp().parent().removeClass('open').find('.mexi-sub-menu').slideUp().parent().removeClass('open');
        } else {
            $this.siblings('.mexi-sub-menu').slideDown().parent().addClass('open').siblings().find('.mexi-sub-menu').slideUp().parent().removeClass('open');
        }
    });
    $body.on('click', function (e) {
        if (!$(e.target).closest('.mexi-site-main-mobile-menu').length && !$(e.target).closest('.mexi-mobile-menu-toggle').length) {
            $body.removeClass('mobile-menu-open');
        }
    });


})(jQuery);