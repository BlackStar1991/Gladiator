window.onload = function () {

		var $danceStyles = $('#danceStyles');

		$danceStyles.on('click', 'li', function () {

				var b = $('div[id^="section_"]');

				var a = $(this).index(),
						a = b.eq(a).toggle();
				b.not(a).hide();

				$danceStyles.find('li').removeClass('buttonPushed');
				$(this).addClass('buttonPushed');

				if (b.is(":visible")) {
						$('#untilSelect').hide();
				} else {
						$('#untilSelect').show();
				}

		});

		// YOUNG



		var $trainersYoung = $('#trainersYoung');

	

		$trainersYoung.on('click', 'div', function () {

				$('#textBlock').hide();
				$('#slider-container').hide();
				$('#informationAboutTrainer').show();

				var b = $('div[id^="info_"]');

				var a = $(this).index(),
						a = b.eq(a).toggle();
				b.not(a).hide();

		})

		$('#informationAboutTrainer .close').on('click', function () {
				$('#textBlock').show();
				$('#slider-container').show();
				$('#informationAboutTrainer').hide();
		})

		// slider

		function Slider() {
				var width = $('#slider-container').width(width);

				//dimensions
				$('.slides>li').width(width);
				$('.slides').width(width * $('.slides>li').length);

				//positioning
				$('.slides').css('left', -width);
				$('.slides>li:last-child').prependTo('.slides');

				//move slides forward
				function nextSlide() {
						$('.slides').animate({
								'margin-left': -width
						}, 500, function () {
								$('.slides>li:first-child').appendTo('.slides');
								$('.slides').css('margin-left', 0);
						});
				}

				//move slides backwards
				function prevSlide() {
						$('.slides').animate({
								'margin-left': width
						}, 500, function () {
								$('.slides>li:last-child').prependTo('.slides');
								$('.slides').css('margin-left', 0);
						});
				}

				//controls
				$('.next').click(nextSlide);
				$('.prev').click(prevSlide);
		}

		Slider();

		// YOUNG END

		// BALLET
		var $scheduleBox = $('.scheduleBox'),
				minContainer = $('#minContainer'),
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


		function toggleBlock(pictureTrainer, content, bigPhoto) {

				pictureTrainer.on('click', function () {

						minContainer.children().hide();
						content.show();

						balletTeacher.hide();
						
						bigTeacher.show();
						// bigTeacher.find('img:not(bigPhoto)').hide(); // Надо как-то исправить

						legs.hide();
						carousel.hide();
						BlockBallroom.hide();


				});
		}

		toggleBlock(JenniferImg, $JenniferMariani, bigJennifer);
		toggleBlock(EdmundImg, $EdmundStripe, bigEdmund);
		toggleBlock(AshleyImg, $AshleyMcNeil, bigAshley);

		$('.close').on('click', function () {
				minContainer.children().hide();
				$scheduleBox.show();
				balletTeacher.show();
				bigTeacher.hide();


				legs.show();
				carousel.show();
				BlockBallroom.show();

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
// Привязываем событие загрузки ДО ТОГО, КАК задавать src.
				$image.bind("load", function (evt) {
// Изображение загрузилось, поэтому отвязываем событие
// и совершаем обратный вызов.
						$image.unbind("load");
						callback($image);
				}).each(function () {
// В Gecko-подобных браузерах проверяем свойство complete
// и инициируем событие вручную, если изображение загрузится.
						if ($image[0].complete) {
								$image.trigger("load");
						}
				});
// В браузерах Webkit следующая строка обеспечивает срабатывание
// события загрузки, если image src эквивалентно image src последнего
// изображения. При этом изначально мы задаем в качестве src
// пустую строку.
				if ($.browser.webkit) {
						$image.attr('src', '');
				}
				$image.attr('src', src);
		};


// Создаем элемент карусели.
		var createItem = function ($image, angle, options) {
				var loaded = false, // Флаг, указывающий, что изображение загрузилось.
						orgWidth, // Оригинальная, немасштабированная ширина изображения.
						orgHeight, // Оригинальная, немасштабированная высота изображения.
						$originDiv, // Изображение прикрепляется к этому элементу div.
// Диапазон, применяемый при расчетах масштаба, гарантирует,
// что самый передний элемент имеет масштаб 1,
// а самый дальний элемент имеет масштаб, определенный
// в options.minScale.
						sizeRange = (1 - options.minScale) * 0.5,that;
// Объект для хранения общедоступной функции обновления.

// Делаем изображение невидимым,
// задаем для него абсолютное расположение
				$image.css({
						opacity: 0,
						position: 'absolute'
				});
// Создаем элемент div ($originDiv). К нему будет
// прикрепляться изображение.
				$originDiv = $image.wrap('<div style="position:absolute;">').parent();
				that = {
						update: function (ang) {
								var sinVal, scale, x, y;
// Вращаем элемент.
								ang += angle;
// Рассчитываем масштаб.
								sinVal = Math.sin(ang);
								scale = ((sinVal + 1) * sizeRange) + options.minScale;
// Рассчитываем положение и zIndex того div,
// который служит началом координат.
								x = ((Math.cos(ang) * options.radiusX) * scale) +
										options.width / 2;
								y = ((sinVal * options.radiusY) * scale) + options.height / 2;
								$originDiv.css({
										left: (x >> 0) + 'px',
										top: (y >> 0) + 'px',
										zIndex: (scale * 100) >> 0
								});
// Если изображение загрузилось, обновляем его параметры
// в соответствии с рассчитанным масштабом.
// Размещаем его относительно элемента div, выбранного
// в качестве начала координат так, чтобы div с началом
// координат располагался в центре.
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
				// Загружаем изображение и задаем функцию обратного вызова.
				loadImage($image, $image.attr('src'), function ($image) {

						loaded = true;
// Сохраняем значения высоты и ширины изображения
// для последующих вычислений масштаба.
						orgWidth = $image.width();
						orgHeight = $image.height();
// Теперь элемент медленно вырисовывается на экране.
						$image.animate({
								opacity: 1
						}, 1000);
				});
				return that;
		};

		// Создаем карусель.
		var createCarousel = function ($wrap, options) {
				var items = [],
						rot = 0,
						pause = false,
						unpauseTimeout = 0,
// Теперь рассчитываем угол вращения, приходящийся
// на один шаг frameRate.
						rotAmount = ( Math.PI * 2) * (options.frameRate/options.rotRate),
						$images = $('img', $wrap),
// Рассчитываем угловой интервал между элементами.
						spacing = (Math.PI / $images.length) * 2,
// Это угловое значение для первого элемента,
// с которого начинается карусель.
						angle = Math.PI / 2,
						i;
// Создаем функцию, вызываемую, когда указатель мыши наводится
// на элемент либо уходит с него.
				$wrap.bind('mouseover mouseout', function (evt) {
// Сработало ли событие на этом элементе?
// Если нет, происходит возврат функции.
						if (!$(evt.target).is('img')) {
								return;
						}
// При событии mouseover карусель приостанавливается.
						if (evt.type === 'mouseover') {
// Останавливаем задержку unpause, если она работает.
								clearTimeout(unpauseTimeout);
// Указываем, что карусель приостановлена.
								pause = true;
						} else {
// При событии mouseout перезапускаем карусель, но после
// небольшой задержки, чтобы избежать резких рывков
// при движении мыши от одного элемента к другому.
								unpauseTimeout = setTimeout(function () {
										pause = false;
								}, 200);
						}
				});
// Этот цикл перебирает изображения из списка и создает
// из каждого изображения элемент карусели.
				for (i = 0; i < $images.length; i++) {
						var image = $images[i];
						var item = createItem($(image), angle, options);
						items.push(item);
						angle += spacing;
				}
// Цикл setInterval будет вращать все элементы карусели каждые
// 30 миллисекунд, если карусель не остановлена.
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
// Пользовательские параметры объединяются со стандартными
// параметрами.
						options = $.extend({}, $.fn.Carousel.defaults, options);
// Каждому элементу-обертке сообщается относительное положение
// (так действует абсолютное расположение элементов в карусели),
// а значения высоты и ширины задаются такими,
// как указано в параметрах.
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