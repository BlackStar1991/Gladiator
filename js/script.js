$(document).ready( function(){

// Скрипт для рейтинга

function set_rate(event, el) {
    // Позиция клика относительно элемента
    event = event || window.event;
    if (event.clientX <= el.clientWidth) {
        var rate = Math.ceil(event.clientX / el.clientWidth*5);
        // Теперь значение rate от 1 до 5 можно обрабатывать как надо,
        // например, отправить на сервер через AJAX

    document.getElementById('rate').innerHTML='Your Rate is '+rate;
        el.getElementsByTagName('div')[0].style.width=rate*20+'%';

    }
};
// /

//////////// Отображение скрытых элементов



function closeTrainer() {

    $('.close').on('click', function() {
        $(this).parent().hide("slow");

    });

}
closeTrainer();


function openTrainer() {
    $('.trainer').on('click', function() {

        $(this).find('.textblock').show();

    })
}
openTrainer();


/* Карточный стиль*/

function BlockShow() {  
    var coords = document.querySelector(".block").getBoundingClientRect();
    var widthBlock = coords.width;
    var heightBlock = coords.height;
    $('.block').on('mousemove', function(e) {
        coords = e.target.getBoundingClientRect();
         leftBlock = coords.left;
        topBlock = coords.top;
        degY = e.pageX - leftBlock - widthBlock/2
        degX = -e.pageY + topBlock + heightBlock/2
        e.target.style.transform = 'perspective(5000px) rotateX(' + degX/20 + 'deg) rotateY(' + degY/20 + 'deg)';
    });

}BlockShow()







/////////// Gym HTML


  
// Reristation
// Интересная фича, запрещает пользователю вводить буквы
// <input type="text" size="15" onkeyup="return proverka(this);" onchange="return proverka(this);" />
// <script type="text/javascript">
// function proverka(input) {
//     input.value = input.value.replace(/[^\d,]/g, '');
// };
 
// </script>

})