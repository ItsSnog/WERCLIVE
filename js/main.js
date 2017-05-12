$('#myCarousel').on('slid.bs.carousel', function () {

	if ($("#first_item").hasClass("active")) {
		$(".main").css({
			'background': "url('./img/bg-new.png')",
			"background-size": "100% 100%"
		});
		$(".text-nav").css({
			"color": "#271435"
		});
		$(".circle_style").css({
			"background-color": "#271435"
		});
		$(".carousel-caption h1").css({
			"font-size": "20px",
			"color": "#000",
			"font-weight": "600",
			"margin-bottom": "15px"
		})	
	}
	if ($("#second_item").hasClass("active")) {
		$(".main").css({
			"background": "url('./img/bg-slide2.png')",
			"background-size": "100% 100%"
		});
		$(".text-nav").css({
			"color": "white"
		});
		$(".circle_style").css({
			"background-color": "white"
		});
		$(".carousel-caption h1").css({
			"font-size": "36px",
			"color": "white",
			"margin-left": "40px",
			"text-transform":"uppercase",
			"font-family":"arial"
		})	
	}
});