$(document).ready(function() {

	$("#banners").owlCarousel({
		items: 1,
		nav: false,
		dots: true,
	});

	$("#arrivals").owlCarousel({
		items: 1,
		nav: false,
		dots: true,
		margin: 30,
		responsive: {
			480: {
				items: 3,
			},
			768: {
				items: 4
			}
		}
	});

});
