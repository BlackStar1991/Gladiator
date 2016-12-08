window.onload = function () {

		// alert('WTF?')

		console.log('ok');

		//untilSelect

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

		$trainersYoung.on('')

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
				var width = $('#slider-container').width();

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

		function toggleBlock(pictureTrainer, content, bigPhoto) {

				pictureTrainer.on('click', function () {

						minContainer.children().hide();
						content.show();

						balletTeacher.hide();
						// bigPhoto.show();
						bigTeacher.show();
						// bigTeacher.find('img:not(bigPhoto)').hide(); // Надо как-то исправить

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
		})

}