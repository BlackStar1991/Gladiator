window.onload = function() {



//  Слайдер
function ownCarusel(){
  var owl = $('.owl-carousel');
        owl.owlCarousel({
                items: 1,
                margin:10,
                loop: true,
                autoHeight: true,
                autoplay:true,
                autoplayTimeout:3000,
                autoplayHoverPause:true

        });

        $('.play').on('click',function(){
           owl.trigger('play.owl.autoplay',[1000])
        });
            $('.stop').on('click',function(){
              owl.trigger('stop.owl.autoplay')
            });

}ownCarusel();



 function changeSection() {

  var b = $('div[id^="section_"]');
  $('#sectionsAerobics').on("click", "li", function() {
   var a = $(this).index(),
   a = b.eq(a).toggle();
   b.not(a).hide();

   $('#videoBox').toggle(a.is(":hidden"));
   $('#sectionsAerobics h2').toggle(a.is(":hidden"));
   $('#textBox1 #mainAerobics').toggle(a.is(":hidden"));

   

     if($('#textBox1 video').css('display') == 'none') {  // отталкиваемся от скрыт ли видио фаил

        // $('#sectionsAerobics').toggleClass('sectionsStyleFirst sectionsStyleSecond');
        $('#sectionsAerobics').removeClass('sectionsStyleFirst');
        $('#sectionsAerobics').addClass('sectionsStyleSecond');
      } 
      else {

       $('#sectionsAerobics').removeClass('sectionsStyleSecond');
       $('#sectionsAerobics').addClass('sectionsStyleFirst');
     }  // надо как то упростить

   });
}; changeSection();


var trainerLogo = $('#coachesFull > div');

$(function() { 

  $('#allAerobicTrainers').on("click", ".square ", function() {


    $('#allAerobicTrainers').removeClass('wobbling');
    $('#allAerobicTrainers').addClass('shiftRight rotation');


    $('div #mainAerobics').css('background','none');

    var o1= $(this);



    if (o1.hasClass('Circle')) {

      return;

    }

    var e1=o1.get(0); 
    var o2=o1.parent().find('.Circle');


    if (o2.length==0) {
      o1.addClass('Circle');

      giveNewPlace();
      addInformationOfTrainer();
      fillOutInformation();

      return;
    };

    o2.removeClass('Circle');
    o1.addClass('Circle');


    var e2=o2.get(0);
              var c1=e1.className.match(/coachNumber\d+/)[0]; // Данная строка вообще не понятна () 
              var c2=e2.className.match(/coachNumber\d+/)[0];
              // alert(c2+'<->'+c1);
              o1.removeClass(c1);
              o2.removeClass(c2);
              o1.addClass(c2);
              o2.addClass(c1);

              $('#informationAboutTrainer').remove();
              giveNewPlace ();
              console.log('Calling addInformationOfTrainer #2');
              addInformationOfTrainer();
              fillOutInformation();


            });

});

$(function() { 

  $('#mainAerobics h2').on('click', function() {


    giveOldPlace();
    $('#allAerobicTrainers').removeClass('shiftRight rotation');
    $('#allAerobicTrainers').addClass('wobbling');


    $('div #mainAerobics').css('background','url("../Images/Aerobics/motivation.png") no-repeat 70% 70%');




  });

});



function fillOutInformation() {

 if ( $('.Circle').hasClass('trainer_BuffDudes') ) {

  $('#photoTrainer').attr({'src':'../Images/Aerobics/Coaches/Buff-Dudes.jpg'});
  $('#trainerName').append('Buff Dudes');
  $('#trainerSkills').append('spesialist in<br>Aqua aerobics');
  $('#trainerMoto').append('<q>If you know what you want, you are more likely to get it</q>');    
  $('#trainerTel').append('tel:4564-423-34-34');
}

else if ( $('.Circle').hasClass('trainer_AlenaMaslova') ) {

  $('#photoTrainer').attr({'src':'../Images/Aerobics/Coaches/Alena-Maslova.jpg'});
  $('#trainerName').append('Alena Maslova');
  $('#trainerSkills').append('spesialist in<br>Cardiovascular training ');
  $('#trainerMoto').append('Teachers open the door, but you must enter by yourself');    
  $('#trainerTel').append('tel:4564-456-30-11');
}

else if ( $('.Circle').hasClass('trainer_ArinaBogdanova') ) {

  $('#photoTrainer').attr({'src':'../Images/Aerobics/Coaches/Arina-Bogdanova.jpg'});
  $('#trainerName').append('Arina<br>Bogdanova');
  $('#trainerSkills').append('spesialist in<br>Toning exercises');
  $('#trainerMoto').append('A man is not old as long as he is seeking something');    
  $('#trainerTel').append('tel:6574-234-32-23');
}

else if ( $('.Circle').hasClass('trainer_AnnaStauro') ) {

  $('#photoTrainer').attr({'src':'../Images/Aerobics/Coaches/Anna-Stauro.jpg'});
  $('#trainerName').append('Anna Stauro');
  $('#trainerSkills').append('spesialist in<br>Toning exercises ');
  $('#trainerMoto').append('Smile and conquer the world!');    
  $('#trainerTel').append('tel:5665-654-67-55');
}

else if ( $('.Circle').hasClass('trainer_IrinaSalnikova') ) {

  $('#photoTrainer').attr({'src':'../Images/Aerobics/Coaches/Irina-Salnikova.jpg'});
  $('#trainerName').append('Irina<br>Salnikova');
  $('#trainerSkills').append('spesialist in<br>Zumba');
  $('#trainerMoto').append('The Road will be mastered by the going');    
  $('#trainerTel').append('tel:5674-643-63-09');
}

else if ( $('.Circle').hasClass('trainer_AlionaDyumaeva') ) {

  $('#photoTrainer').attr({'src':'../Images/Aerobics/Coaches/Aliona-Dyumaeva.jpg'});
  $('#trainerName').append('Aliona<br>Dyumaeva');
  $('#trainerSkills').append('spesialist in<br>Zumba ');
  $('#trainerMoto').append('Dance for yourself. If someone understands - well, if not - it does not matter, keep doing what you love! ');    
  $('#trainerTel').append('tel:5778-765-64-12');
}


} 



function giveOldPlace () {

  var oldDiv = $('#allAerobicTrainers > div');

  for (var i = 0; i < oldDiv.length; i++) {

    oldDiv.eq(i).css({'top':'', 'left':''}); 
  }

  $('.square > *').remove();

  oldDiv.removeClass('Circle');

}



function giveNewPlace () {

  var newDiv = $('#allAerobicTrainers > div:not(.Circle)');

  $('.Circle').css({'top':'15%', 'left':'15%'}); 

  newDiv.css({'top':'0', 'left':'0'});    

  newDiv.eq(0).css({'top':'0',
    'left':'41%'});

  newDiv.eq(1).css({'top':'15%',
    'left':'77%'});

  newDiv.eq(2).css({'top':'65%',
    'left':'77%'});

  newDiv.eq(3).css({'top':'65%',
    'left':'5%'});

  newDiv.eq(4).css({'top':'15%',
    'left':'5%'});
}





function addInformationOfTrainer() {
  console.log('Function: addInformationOfTrainer');

  $('.Circle').append('<div id="informationAboutTrainer">');

  var infTrainer = $('#informationAboutTrainer');
  infTrainer.prepend('<img id="photoTrainer" width="175" height="262" alt="coach">');
  infTrainer.append('<div id="textInformationAboutTrainer">');

  var textInfTrainer = $('#textInformationAboutTrainer');
  textInfTrainer.append('<p id="trainerName">');
  textInfTrainer.append('<p id="trainerSkills">');
  textInfTrainer.append('<p id="trainerMoto">');
  infTrainer.append('<p id="trainerTel">');
};  





}
