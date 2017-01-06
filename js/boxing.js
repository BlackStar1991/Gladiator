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
          $("#aboutBox").toggle(a.is(":hidden"))
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


 $(function () {
        var b = $('div[id^="couch_"]');
        $('#photosTreners').on("click", "div", function () {  // По клику на иконку тренера
            $('#text_trainersBox').hide();
            var a = $(this).index(),
                a = b.eq(a).show();
            b.not(a).hide();
        })

        $('.closeTrainer').on('click', function () { // Срываем все истории через крестик
            $('div[id^="couch_"]').hide();
            $('#text_trainersBox').show();
        });
    });

    var photoCouch = $('<div></div>').css({'display': 'none', 'position': 'absolute'});

    $(function () {
        $('table').prepend(photoCouch);
        $('td').mouseover(function (e) {
            photoCouch.css({top: (e.pageY - 720) + 'px', left: (e.pageX - 230) + 'px'});
            var photoCouchCssClass = getPhotoCouchCssClass(this);
            if (photoCouchCssClass !== false) {
                photoCouch.removeClass();
                photoCouch.addClass('circleTrener');
                photoCouch.addClass(photoCouchCssClass);
                photoCouch.show();
            }
        }).mouseout(function () {
            photoCouch.hide();
        })
    })


function getPhotoCouchCssClass(element) {
    var text = $(element).text()

    switch (text) {
        case 'Abraham':
            var histClass = "img_AbrahamOrtega";
            break;
        case 'Eugene':
            var histClass = "img_SmetanaEugene";
            break;
        case 'Oleg':
            var histClass = "img_KiryuhinOleg";
            break;
        case 'Evgeniya':
            var histClass = "img_SilichevaEvgeniya";
             break;
        case 'Dmitry':
            var histClass = "img_MaduluDmitry";
            break;

        default:
            var histClass = false;
            break;
    }

    return histClass;
}

//  Слайдер
function ownCarusel(){
  var owl = $('.owl-carousel');
        owl.owlCarousel({
                items: 1,
                margin:10,
                loop: true,
                autoHeight: true,

        });
        
        owl.on('mousewheel', '.owl-stage', function (e) {
                if (e.deltaY > 0) {
                        owl.trigger('next.owl');
                } else {
                        owl.trigger('prev.owl');
                }
                e.preventDefault();
        });


        $(".gloveRight").click(function () {
                owl.trigger("next.owl");
        });
        $(".gloveLeft").click(function () {
                owl.trigger("prev.owl");
        });


} ownCarusel();









}