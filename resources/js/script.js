
$('.js--scroll-to-plan').click(function () {
  $('html, body').animate({ scrollTop: $('.js--section-plans').offset().top }, 1000)
})

$('.js--scroll-to-get-online').click(function () {
  $('html, body').animate({ scrollTop: $('.js--section-get-online').offset().top }, 1000)
})


$('.js--scroll-to-info').click(function () {
  $('html, body').animate({ scrollTop: $('.js--section-info').offset().top }, 1000)
})

$('.js--scroll-to-testmonials').click(function () {
  $('html, body').animate({ scrollTop: $('.js--section-testmonials').offset().top }, 1000)
})

$('.js--scroll-to-footer').click(function () {
  $('html, body').animate({ scrollTop: $('.js--footer').offset().top }, 1000)
})
new WOW().init();


