$(document).ready(function() {
   
    $('#mobile-btn').on('click', function () {

        $('#mobile-menu').toggleClass('active');

        const icon = $(this).find('i');
        icon.toggleClass('fa-bars fa-xmark');

    });

});