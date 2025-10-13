$(document).ready(function() {

    $('#mobile-btn').on('click', function () {

        $('#mobile-menu').toggleClass('active');

        $(this).find('i').toggleClass('fa-bars fa-xmark');

    });

    const $header = $('header');

    const $sections = $('section');

    const $navItems = $('.nav-item');

    console.log('Seções encontradas:', $sections.length); 

    $(window).on('scroll', function () {

        const scrollPos = $(window).scrollTop();

        $header.css('box-shadow', scrollPos > 0 ? '0 5px 1px rgba(0,0,0,0.1)' : 'none');

        let activeIndex = 0;

        $sections.each(function(i) {

            const $section = $(this);

            const sectionTop = $section.offset().top - $header.outerHeight() - 50;

            const sectionBottom = sectionTop + $section.outerHeight();

            if (scrollPos >= sectionTop && scrollPos < sectionBottom) {

                activeIndex = i;

                return false;

            }

        });

        $navItems.removeClass('active');

        $($navItems[activeIndex]).addClass('active');

    });

    $(window).trigger('scroll');
});