window.onload = function() {

//// Слайдер 
//  hwSlideSpeed - Скорость анимации перехода слайда.
// hwTimeOut - время до автоматического перелистывания слайдов.
// hwNeedLinks - включает или отключает показ ссылок "следующий - предыдущий".
// Значения true или false   


function mySlider () {
var hwSlideSpeed = 700;
var hwTimeOut = 3000;
var hwNeedLinks = true;

$(document).ready(function(e) {
    $('.slide').css({
        "position": "absolute",
        "top": '0',
        "left": '0'
    }).hide().eq(0).show();
    var slideNum = 0;
    var slideTime;
    slideCount = $(".slider .slide").length;
    var animSlide = function(arrow) {
        clearTimeout(slideTime);
        $('.slide').eq(slideNum).fadeOut(hwSlideSpeed);
        if (arrow == "next") {
            if (slideNum == (slideCount - 1)) { slideNum = 0; } else { slideNum++ }
        } else if (arrow == "prew") {
            if (slideNum == 0) { slideNum = slideCount - 1; } else { slideNum -= 1 }
        } else {
            slideNum = arrow;
        }
        $('.slide').eq(slideNum).fadeIn(hwSlideSpeed, rotator);
        $(".control-slide.active").removeClass("active");
        $('.control-slide').eq(slideNum).addClass('active');
    }
    if (hwNeedLinks) {
        var $linkArrow = $('<a id="prewbutton" href="#">&lt;</a><a id="nextbutton" href="#">&gt;</a>')
            .prependTo('.slider');
        $('#nextbutton').click(function() {
            animSlide("next");
            return false;
        })
        $('#prewbutton').click(function() {
            animSlide("prew");
            return false;
        })
    }
    var $adderSpan = '';
    $('.slide').each(function(index) {
        $adderSpan += '<span class = "control-slide">' + index + '</span>';
    });
    $('<div class ="sli-links">' + $adderSpan + '</div>').appendTo('.slider-wrap');
    $(".control-slide:first").addClass("active");
    $('.control-slide').click(function() {
        var goToNum = parseFloat($(this).text());
        animSlide(goToNum);
    });
    var pause = false;
    var rotator = function() {
        if (!pause) { slideTime = setTimeout(function() { animSlide('next') }, hwTimeOut); }
    }
    $('.slider-wrap').hover(
        function() { clearTimeout(slideTime);
            pause = true; },
        function() {
            pause = false;
            rotator();
        });
    rotator();
});
}
mySlider();



    ///// Переключалка по секциям гимнастики

var $youngButt = $('.youngButton'),
    $baseButt =$('.baseButton'),
    $armsButt =$('.armsButton'),
    $ringsButt =$('.ringsButt');

var mainBoxGymnastics =$('#mainBoxGymnastics');


var $mainSection =$('#mainBoxHiden'),
    $youngSection =$('#Young'),
    $baseSection =$('#Base'),
    $handstandSection =$('#Handstand'),
    $ringsSection =$('#Rings');


 function chooseSection(button, section) {

    button.click(function() {

         mainBoxGymnastics.children().not(section).hide();
          section.toggle();
   
var display =  section.css("display");

    if(display=="none")
    {
         $mainSection.show();
    }

});


}

chooseSection($youngButt, $youngSection);
chooseSection($baseButt,  $baseSection);
chooseSection($armsButt,  $handstandSection);
chooseSection($ringsButt, $ringsSection);





    ///// ВИдио постер по нажатию

function play() {
    var id = this.dataset.id;
    if(id) {
        var embed = document.createElement('iframe');
      embed.allowFullscreen = true;
      embed.name = 'video-' + Math.random();
      embed.src = 'https://www.youtube.com/embed/' + id + '?autoplay=1';
      this.appendChild(embed);
      this.classList.add('video--play');
      this.removeEventListener('click', play);
    }
  }
  
  var i, videos = document.querySelectorAll('.video');
  
  for(i = 0; i < videos.length; i++) {
    videos[i].addEventListener('click', play);
  }







}

