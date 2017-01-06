window.onload = function() {


var owl = $('.owl-carousel');
        owl.owlCarousel({
                items: 1,
                loop: true,
                autoHeight: true,
                autoplay:true,
                autoplayTimeout: 3000,
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


        $(".next_button").click(function () {
                owl.trigger("next.owl");
        });
        $(".prev_button").click(function () {
                owl.trigger("prev.owl");
        });





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

