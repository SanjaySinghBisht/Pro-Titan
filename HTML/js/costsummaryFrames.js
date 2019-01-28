$(document).ready(function () {
    $('.verticleSlider li').click(function () {
        $('.verticleSlider li').removeClass('active');
        $(this).addClass('active');
    });
});