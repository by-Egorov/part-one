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
// $(document).ready(function () {
// 	$('.header__burger').click(function (event) {
// 		$('.header__burger, .nav__inner').toggleClass('active')

// 	})
// })

const headerBurger = document.querySelector('.header__burger')
const navInner = document.querySelector('.nav__inner')
const bodyLock = document.querySelector('body')

headerBurger.addEventListener('click', function () {
	headerBurger.classList.toggle('active')
	navInner.classList.toggle('active')

	if (navInner.classList.contains('active')) {
		bodyLock.classList.add('lock')
	} else {
		bodyLock.classList.remove('lock')
	}
})