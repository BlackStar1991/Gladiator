window.onload = function() {

    function changeTemp() {


        // Задаем температуру с сайта через Json
        
        function getTemperatureFromSite () {

       var weatherAPI = "http://api.openweathermap.org/data/2.5/weather/?q=Kiev,ua&APPID=f0339be7c539a4d3f1c5e9e662331218&units=metric";

			$(document).ready(function(){
	   			 $.getJSON(weatherAPI, {
	        format: "json"
	   		 }).done(function( data ) {
		    $('#ambientTemperature p:eq(0)').html((data.main.temp).toFixed(1)); // берем оттуда только температуру temp и вставляем куда надо
	   		// console.log;
	   		$('#waterTemperature p:eq(0)').html( Math.round((((data.main.temp) - 3)*100)/100)  ); 

	   		 });
		});
		
        }getTemperatureFromSite ();
        


        $('#changeTemp').on('click', function() {


            var zzz = $('#changeTemp').text();


            if (zzz == 'change to Fahrenheit') {

                var C = $('#temperatureC').text();
                var Wc = $("#waterTemperature p:eq(0)").text();

                function toF ( temp ) {
                var temperatuta = ((temp * 1.8) + 32).toFixed(1);
           		return temperatuta }
           	
           		 var temperatureInFahrenheit = toF ( C ); // узнаем температуру воздуха в Фаренгейтах
           		 var temperatureInFahrenheit = toF ( C ); // узнаем температуру воды в Фаренгейтах
           		 var temperatureWaretInFahrenheit = toF ( Wc ); 

                $('#changeTemp').text('change to Celsius'); // Меняем имя строки
                $('#degrees').html(' <sup>o</sup>F');
                $('#temperatureC').html(temperatureInFahrenheit); // меняем значение на Фарингейты
                $('#waterTemperature p:eq(0)').html(temperatureWaretInFahrenheit);

            } else if (zzz == 'change to Celsius') {

                var F = ($('#temperatureC').text());
                 var Wf = $("#waterTemperature p:eq(0)").text();

                 function toF (temp) {

                 	var temperatuta = ((temp - 32) / 1.8).toFixed(1)
					return temperatuta 
                 }

           		 var temperatureInCelsius = toF ( F );
           		 var temperatureWaretInCelsius = toF ( Wf ); 


                // var changeToC = Math.round((( * 100) / 100).toFixed(2));
                $('#temperatureC').html(temperatureInCelsius); // преводим обратно в Цельсии
                $('#waterTemperature p:eq(0)').html(temperatureWaretInCelsius);
                $('#changeTemp').text('change to Fahrenheit');
                $('#degrees').html(' <sup>o</sup>C')
            }

        })

    } changeTemp();


// переключалка слайдов картинки


function mainImg () {

	   var img = document.querySelector("#poolImg img");

	   var arrSrc = ["../Images/Swimming/sw1.jpg", "../Images/Swimming/sw2.jpg", "../Images/Swimming/sw3.jpg", "../Images/Swimming/sw4.jpg", "../Images/Swimming/sw5.jpg", "../Images/Swimming/sw6.jpg"],
            indx = 0,
            len = arrSrc.length;

        (function pictureBox() {
            img.src = arrSrc[indx];
            indx = ++indx % len;
            setTimeout(pictureBox, 5000);
        })()
}
mainImg ();

 		
 	function openTraining (training, box){

 	training.on('click', function () {

 		$('div[id$="_Box"]').not(box).hide(); // прячем все боксы которые НЕ указавый
 		box.toggle('slow');
 		$('#information >*').not(training).removeClass('open'); // удаляем все классы open
 		training.toggleClass('open');
 	
 	})

 } 	

   var $es = $('#easy') ;
   var $av = $('#average') ;
   var $ha = $('#hard') ;

   var $es_box = $('#easy_Box') ;
   var $av_box = $('#average_Box') ;
   var $ha_box = $('#hard_Box') ;

 	openTraining ( $es, $es_box);
 	openTraining ( $av, $av_box);
	openTraining ( $ha, $ha_box);




 // openTraining ();




}
