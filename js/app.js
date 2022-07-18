$(document).ready(function () {
	$(".slider").slick({
		arrows: true, //Убирает или включает стрелки
		dots: true, //Убирает или включает точки
		fade: false, //Затухание
		adaptiveHeight: true,
		infinite: false,
		edgeFriction: 0.15,
		// autoplay:true,
		// autoplaySpeed:2000
	});
});
$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger, .menu').toggleClass('active')

	})
})