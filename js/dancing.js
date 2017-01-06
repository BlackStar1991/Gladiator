window.onload = function () {

	var $danceStyles = $('#danceStyles'),
	$untilSelect = $('.untilSelect');

	$danceStyles.on('click', 'li', function () {

		var b = $('div[id^="section_"]');

		var a = $(this).index(),
		a = b.eq(a).toggle();
		b.not(a).hide();

		$danceStyles.find('li').removeClass('buttonPushed');
		$(this).addClass('buttonPushed');

		if (b.is(":visible")) {
			$untilSelect.hide();
		} else {
			$untilSelect.show();
		}

	});

// OWN slider

var owl = $('.owl-carousel');
var prevBut = $('.prev'),
nextBut = $('.next');

function ownCarusel(){
	
	owl.owlCarousel({
		items: 1,
		margin: 10,
		loop: true,
		autoHeight: true,
		autoplay:true,
		autoplayTimeout:4000,
		smartSpeed: 1500,
		autoplayHoverPause:true

	});



	owl.on('mousewheel', '.owl-stage', function (e) {
		if (e.deltaY > 0) {
			owl.trigger('next.owl');
		} else {
			owl.trigger('prev.owl');
		}
		e.preventDefault();
	});

	$('.play').on('click',function(){
		owl.trigger('play.owl.autoplay',[1000])
	});
	$('.stop').on('click',function(){
		owl.trigger('stop.owl.autoplay')
	});

	nextBut.click(function () {
		owl.trigger("next.owl");
	});
	prevBut.click(function () {
		owl.trigger("prev.owl");
	});


}

ownCarusel();


		// YOUNG


		var $trainersYoung = $('#trainersYoung'),
		$sliderContainer = $('.slider-container'),
		$textBlock = $('#textBlock'),
		$informationAboutTrainer = $('#informationAboutTrainer');

		$trainersYoung.on('click', 'div', function () {

			// if ($('div[id^="info_"]').is(':visible')) {
			// 	hideInfTren();

			$textBlock.hide();
			$sliderContainer.hide();
			$informationAboutTrainer.show();

			var b = $('div[id^="info_"]');

			var a = $(this).index(),
			a = b.eq(a).toggle();
			b.not(a).hide();


		});

		$informationAboutTrainer.find('.close').on('click', function () {
			hideInfTren();
		});

		function hideInfTren(){
			$textBlock.show();
			$sliderContainer.show();
			$informationAboutTrainer.hide();
		}


		// YOUNG END

		// BALLET
		var $scheduleBox = $('.scheduleBox'),
		minContainer = $('.minContainer'),
		JenniferImg = $('.JenniferImg'),
		EdmundImg = $('.EdmundImg'),
		AshleyImg = $('.AshleyImg'),
		$JenniferMariani = $('.JenniferMariani'),
		$EdmundStripe = $('.EdmundStripe'),
		$AshleyMcNeil = $('.AshleyMcNeil');

		var balletTeacher = $('#balletTeacher'),
		bigTeacher = $('#bigTeacher'),


		bigJennifer = $('#bigJennifer'),
		bigEdmund = $('#bigEdmund '),
		bigAshley = $('#bigAshley');

		var legs = $('#legs'),
		carousel =$('.carousel'),
		BlockBallroom = $('#BlockBallroom');


		function toggleBlock(pictureTrainer, bigPhoto, trainerInfo) {

			pictureTrainer.on('click',  function () {

			// 	bigTeacher.show();
			// bigTeacher.not(bigPhoto).hide();	

			bigPhoto.show();

				minContainer.show();
				minContainer.children().not(trainerInfo).hide();
				// $('.minContainer:not(content)').hide();	
				// minContainer.children().hide();
				
				balletTeacher.hide();

				legs.hide();
				carousel.hide();
				BlockBallroom.hide();
				$scheduleBox.hide();
			});
		}

		toggleBlock(JenniferImg,  bigJennifer, $JenniferMariani);
		toggleBlock(EdmundImg,    bigEdmund, $EdmundStripe);
		toggleBlock(AshleyImg,    bigAshley, $AshleyMcNeil);

		$('.close').on('click', function () {
			minContainer.hide();
			balletTeacher.show();
			bigTeacher.hide();


			legs.show();
			carousel.show();
			BlockBallroom.show();
			$scheduleBox.show();
		})



// Карусель

	// CAROUSEL

		// Исправляет свойство browser for jQuery
		jQuery.browser = {};
		jQuery.browser.mozilla = /mozilla/.test(navigator.userAgent.toLowerCase()) && !/webkit/.test(navigator.userAgent.toLowerCase());
		jQuery.browser.webkit = /webkit/.test(navigator.userAgent.toLowerCase());
		jQuery.browser.opera = /opera/.test(navigator.userAgent.toLowerCase());
		jQuery.browser.msie = /msie/.test(navigator.userAgent.toLowerCase());

		

		var loadImage = function ($image, src, callback) {

			$image.bind("load", function (evt) {
				$image.unbind("load");
				callback($image);
			}).each(function () {
				if ($image[0].complete) {
					$image.trigger("load");
				}
			});

			if ($.browser.webkit) {
				$image.attr('src', '');
			}
			$image.attr('src', src);
		};

		var createItem = function ($image, angle, options) {
			var loaded = false, 
			orgWidth, 
			orgHeight, 
			$originDiv, 
			sizeRange = (1 - options.minScale) * 0.5,that;
			$image.css({
				opacity: 0,
				position: 'absolute'
			});

			$originDiv = $image.wrap('<div style="position:absolute;">').parent();
			that = {
				update: function (ang) {
					var sinVal, scale, x, y;

					ang += angle;

					sinVal = Math.sin(ang);
					scale = ((sinVal + 1) * sizeRange) + options.minScale;

					x = ((Math.cos(ang) * options.radiusX) * scale) +
					options.width / 2;
					y = ((sinVal * options.radiusY) * scale) + options.height / 2;
					$originDiv.css({
						left: (x >> 0) + 'px',
						top: (y >> 0) + 'px',
						zIndex: (scale * 100) >> 0
					});

					if (loaded) {
						$image.css({
							width: (orgWidth * scale) + 'px',
							height: (orgHeight * scale) + 'px',
							top: ((-orgHeight * scale) / 2) + 'px',
							left: ((-orgWidth * scale) / 2) + 'px'
						});
					}
				}
			};

			loadImage($image, $image.attr('src'), function ($image) {

				loaded = true;

				orgWidth = $image.width();
				orgHeight = $image.height();

				$image.animate({
					opacity: 1
				}, 1000);
			});
			return that;
		};


		var createCarousel = function ($wrap, options) {
			var items = [],
			rot = 0,
			pause = false,
			unpauseTimeout = 0,

			rotAmount = ( Math.PI * 2) * (options.frameRate/options.rotRate),
			$images = $('img', $wrap),
// Рассчитываем угловой интервал между элементами.
spacing = (Math.PI / $images.length) * 2,

angle = Math.PI / 2,
i;

$wrap.bind('mouseover mouseout', function (evt) {

	if (!$(evt.target).is('img')) {
		return;
	}

	if (evt.type === 'mouseover') {

		clearTimeout(unpauseTimeout);

		pause = true;
	} else {
		unpauseTimeout = setTimeout(function () {
			pause = false;
		}, 200);
	}
});

for (i = 0; i < $images.length; i++) {
	var image = $images[i];
	var item = createItem($(image), angle, options);
	items.push(item);
	angle += spacing;
}

setInterval(function () {
	if (!pause) {

		rot += rotAmount;
	}
	for (i = 0; i < items.length; i++) {
		items[i].update(rot);
	}
}, options.frameRate);
};





$.fn.Carousel = function(options) {
	this.each( function() {

		options = $.extend({}, $.fn.Carousel.defaults, options);

		$(this).css({
			position:'relative',
			width: options.width+'px',
			height: options.height +'px'
		});
		createCarousel($(this),options);
	});
};


$.fn.Carousel.defaults = {
				radiusX:340, // Горизонтальный радиус.
				radiusY:80, // Вертикальный радиус.
				width:512, // Ширина элемента-обертки.
				height:300, // Высота элемента-обертки.
				frameRate: 30, // Кадровая частота в миллисекундах.
				rotRate: 25000, // Время, затрачиваемое на полный оборот карусели.
				minScale:0.60 // Минимальный масштаб, применяемый к самому
// удаленному элементу.
};

$('.carousel').Carousel();



}