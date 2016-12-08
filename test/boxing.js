window.onload = function() {


//  Рабочий Скрипт

    $(function() {
     

        var b = $('#contextBoxing').find("div[id^='text_']");


        $('#sidebarBox').on( "click", "li", function() {

              $('div[id^="couch_"]').hide(); // Как-то надо оптимизировать? Скрывает текст об тренерах, если не нажали крестик

             var a = $(this).index(),
                 a = b.eq(a).toggle();
                 b.not(a).hide();

          $("#videoBox").toggle(a.is(":hidden"))
    })
});


// 

$(function() { 

    var b = $('div[id^="couch_"]');

  $('#photosTreners').on("click", "div", function() {  // По клику на иконку тренера



            $('#text_trainersBox').hide();

             var a = $(this).index(),
                 a = b.eq(a).show();
                 b.not(a).hide();

  })

 $('.closeTrainer').on('click', function() { // Срываем все истории через крестик

    $('div[id^="couch_"]').hide();
    $('#text_trainersBox').show();


 });


});

 //////// 

var hint = $('<div class="circleTrener"> </div>').css({'display':'none', 'position':'absolute'});
 
 var photoCouch = hint;


$(function() { 



 $('table td').on('mouseover', function () {

  if ($(this).text() =='Abraham') {    
      var photoCouch = hint.addClass("img_AbrahamOrtega")
    } else if ( $(this).text() =='Eugene') { var photoCouch = hint.addClass("img_SmetanaEugene")

    }else { var photoCouch = hint }

    return photoCouch;

    console.log($(this).text());


})


var hintShown = false;
$('table').prepend(photoCouch);

$('body').mousemove(function(e){
    if(!hintShown)return;
  photoCouch.css({top:(e.pageY-810)+'px', left:(e.pageX-230)+'px'}); // Как оптимизировать ? В зависимости от разрешения экрана "подсказка" отображается по разному
});

$('td').mouseover(function(){
    photoCouch.css('display','block');
  hintShown=true;
}).mouseout(function(){
    photoCouch.css('display','none');
  hintShown=false;
})

})


}



//     // var $button_textBoxingClub = $('#button_textBoxingClub'),     
//     //     $button_textMotivation = $('#button_textMotivation'),
//     //     $button_scheduleBox = $('#button_scheduleBox'),
//     //     $button_trainersBox = $('#button_trainersBox'),
//     //     $button_galleryBox = $('#button_galleryBox'),

//     //     $textBoxingClub = $('#text_BoxingClub'),
//     //     $textMotivation = $('#text_Motivation'),
//     //     $scheduleBox = $('#text_scheduleBox'),
//     //     $trainersBox = $('#text_trainersBox'),
//     //     $galleryBox = $('#text_galleryBox');
