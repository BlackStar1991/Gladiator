window.onload = function() {

    // alert("vse ok")

    function DataColor() {

     var date = new Date(); // // 2016, 8, 1, 22, 8, 1, 0 7 августа 2016, 22:08:05

     if (date.getDay() == 0) {
         $('table tr td:nth-child(8)').addClass('colorDay') // Sun				  
     } else if (date.getDay() == 1) {
         $('table tr td:nth-child(2)').addClass('colorDay') //Mon
     } else if (date.getDay() == 2) {
         $('table tr td:nth-child(3)').addClass('colorDay') //Thur
     } else if (date.getDay() == 3) {
         $('table tr td:nth-child(4)').addClass('colorDay') //Wed
     } else if (date.getDay() == 4) {
         $('table tr td:nth-child(5)').addClass('colorDay') //Thus
     } else if (date.getDay() == 5) {
         $('table tr td:nth-child(6)').addClass('colorDay') //Fri
     } else if (date.getDay() == 6) {
         $('table tr td:nth-child(7)').addClass('colorDay') //Satur
     }

     // проверяет есть ли в столбце класс, если есть добавляет ещё один				

     if (date.getHours() >= 0 && date.getHours() < 10 && date.getMinutes() >= 0 && date.getMinutes() <= 59) {
         $('#second_row td[class]').addClass('colorHour')
     } else if (date.getHours() == 10 && date.getMinutes() >= 0 && date.getMinutes() <= 59) {
         $('#third_row td[class]').addClass('colorHour')
     } else if (date.getHours() == 11 && date.getMinutes() >= 0 && date.getMinutes() <= 59) {
         $('#fourth_row td[class]').addClass('colorHour')
     } else if (date.getHours() == 12 && date.getMinutes() >= 0 && date.getMinutes() <= 59) {
         $('#fifth_row td[class]').addClass('colorHour')
     } else if (date.getHours() == 13 && date.getMinutes() >= 0 && date.getMinutes() <= 59) {
         $('#sixth_row td[class]').addClass('colorHour')
     } else if (date.getHours() == 14 && date.getMinutes() >= 0 && date.getMinutes() <= 59) {
         $('#seventh_row td[class]').addClass('colorHour')
     } else if (date.getHours() == 15 && date.getMinutes() >= 0 && date.getMinutes() <= 59) {
         $('#eighth_row td[class]').addClass('colorHour')
     } else if (date.getHours() == 16 && date.getMinutes() >= 0 && date.getMinutes() <= 59) {
         $('#ninth_row td[class]').addClass('colorHour')
     } else if (date.getHours() == 17 && date.getMinutes() >= 0 && date.getMinutes() <= 59) {
         $('#tenth_row td[class]').addClass('colorHour')
     } else if (date.getHours() == 18 && date.getMinutes() >= 0 && date.getMinutes() <= 59) {
         $('#eleventh_row td[class]').addClass('colorHour')
     } else if (date.getHours() == 19 && date.getMinutes() >= 0 && date.getMinutes() <= 59) {
         $('#twelfth_row td[class]').addClass('colorHour')
     } else if (date.getHours() == 20 && date.getMinutes() >= 0 && date.getMinutes() <= 59) {
         $('#thirteenth_row td[class]').addClass('colorHour')
     }

 }
 DataColor();




    $('body').append('<div id="blackout"></div>');
    var boxWidth = 250;

    function centerBox() {

        /* определяем нужные данные */
        var winWidth = $(window).width();
        var winHeight = $(document).height();
        var scrollPos = $(window).scrollTop();

        /* Вычисляем позицию */

        var disWidth = (winWidth - boxWidth) / 2 ;
        var disHeight = scrollPos ;

        /* Добавляем стили к блокам */
        $('.popup-box').css({ 'left': disWidth + 'px', 'top': disHeight + 'px' });
        $('#blackout').css({ 'width': winWidth + 'px', 'height': winHeight + 'px' });

        return false;
    }
    centerBox();



///////////
    function showPopUpBox() {

        $('#trainersPole #name1').on('click', (function() {


           
              $('.popup-box ').toggle();
              $('#blackout').toggle();
              $('.PopImg_box').attr({
                  'alt': 'Vivien_Feld',
                  'src': 'Images/Pole Dancing/TrainersPole/Vivien_Feld_Pole.jpg',
                  'width': '315',
                  'height': '450'
              });
              $('.trainerName_box').html('<h2>Vivien Feld</h2>');
              $('.trainerInform_box').html('<p>   <strong> Professional Qualifications: </strong>  </br>Gymnastikteacher ( 3 Years education) </br>Sporttherapist  </br> Aerobicteacher </br>Stepaerobicteacher </br>Teacher for people with heart problems  </br>Aquagymnastikteacher </br>Polebatics Bronce and Silver Poledance Teacher </br>OC Polefitness Level 1-7 Teacher </br>Loft 1 Pole Fitness Beginner and Advanced Teacher </br> International IPSF Judge  </br> Poledancetraining since 2008 </br> Poledanceteaching since 2009  </p>');
              $('.trainerRewards_box').html('<p> <strong>Fitness/Pole Qualifications: </strong>  </br> Polebatics Bronce and Silver Poledance Teacher  </br>OC Polefitness Level 1-7 Teacher </br> Loft 1 Pole Fitness Beginner and Advanced Teacher </br>International IPSF Judge </br>Poledancetraining since 2008 </br>Poledanceteaching since 2009 </br>Trainings with Zoraya Judd, Marion Crampe, Steven Retchless, Alex Shukin, Felix Cane, Oona Kivela, Alexandra Vazmitzel, Alessandra Marchetti, Sarah Scott, Pantera, Jamilla Deville...  </p>');
              $('.trainerMoto_box').html(" <q> I started teaching dance with 16 years old. I studied Gymnastikteacher and teached till now. Its my main job and I very like it. I hope you'll love this sport as well as I </q>");
              $('.trainerContacts_box > img ').wrap('<a> </a>');
              $('.trainerContacts_box > a:eq(0)').attr({ 'href': 'https://www.facebook.com/vivien.feld?fref=ts', 'target': '_new' });


              jQuery.each($(".trainerContacts_box a"), function(index, value) {

                  if ($(value).attr("href") == undefined) {
                      $(value).hide();
                  }
              }); // Проверка есть ли атрибут href у ссылки

          })
);

		$('#trainersPole #name2').on('click', (function() {


      
              $('.popup-box ').toggle();
              $('#blackout').toggle();
              $('.PopImg_box').attr({
                  'alt': 'Elena_Goncharenko',
                  'src': 'Images/Pole Dancing/TrainersPole/Elena_Goncharenko_Pole.jpg',
                  'width': '315',
                  'height': '450'
              });
              $('.trainerName_box').html('<h2>Elena Goncharenko</h2>');
              $('.trainerInform_box').html('<p>   <strong> Professional Qualifications: </strong>  </br>Coach toward pole dance, exotic pole dance. ( 2 Years education) </br>Sporttherapist  </br> Aerobicteacher  </p>');
              $('.trainerRewards_box').html('<p> <strong>Fitness/Pole Qualifications: </strong> </br>MK: Olga "Pole dance" codes (2014).  </br> MK for private dances Shandruk E. and E. Miller (2012-2013) participant of the All-Ukrainian championship, "Best School pole dance" (Kiev 2014) - 4th place </br> participant of the All-Ukrainian championship "Best Coach pole sport" (Kiev 2015) III place nakonkurse "Queen of the pole dance star 2015" </br>Participant Summer pole dance fest 2105 (category "pro")(2015) </br> MK Yulia Shikuly "Exotic pole dance" (2015) </br> MK Eva Bembo "Exotic pole dance" (2015) </br>MK Mila Phil "Exotic Hard" (2016)  </p>');
              $('.trainerMoto_box').html(" <q> For me dance on the pylon - the feeling of complete freedom. This is what comes from the heart, helps to better understand themselves, and sometimes to heal the soul. Whatever happens, come to the gym! </br> Dance, energizes, achieve new heights, they learn about unfamiliar faces yourself, feel free </q>");
              $('.trainerContacts_box > img ').wrap('<a> </a>');
              $('.trainerContacts_box > a:eq(0)').attr({ 'href': 'https://www.facebook.com/danilovapoledance', 'target': '_new' });
              $('.trainerContacts_box > a:eq(1)').attr({ 'href': 'https://vk.com/danilovapoledance', 'target': '_new' });



              jQuery.each($(".trainerContacts_box a"), function(index, value) {

                  if ($(value).attr("href") == undefined) {
                      $(value).hide();
                  }
              }); // Проверка есть ли атрибут href у ссылки

          })



        )
    }
    showPopUpBox();

    
    var $close = $('.close'),
    	$blackout = $('#blackout'),
		$popupBox = $('.popup-box');


	function HideShadow(button){

		button.on('click', (function() {

				$blackout.hide();
				$popupBox.hide('slow');
				
			 })
		)

	}
	HideShadow($close);
	HideShadow($blackout);


}
