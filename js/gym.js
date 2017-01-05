window.onload = function() {

    // Функция проверки каким браузером пользуеться пользовартель
    function getBrowserId() {

        var
            aKeys = ["MSIE", "Firefox", "Safari", "Chrome", "Opera"],
            sUsrAg = navigator.userAgent,
            nIdx = aKeys.length - 1;

        for (nIdx; nIdx > -1 && sUsrAg.indexOf(aKeys[nIdx]) === -1; nIdx--);

        return nIdx

    }

    // Функция добавления класса Если используешь Хром (оперу)
    function addClassForChrom() {
        var addElement = document.getElementsByClassName("headerText");
        console.log(addElement);

        if (getBrowserId() == 3) {
            for (var i = 0; i < addElement.length; i++) {
                addElement[i].classList.add('forChrom');
            }
        }

    };
    addClassForChrom();

    //#trainersBox

    var trainers = function trainersGym() {



        $('#Mike').click(function() {

            // $("#trainersBox").toggle();
            $("#trainersBox").css("display", "block");
            $("#trainersImg").attr('src', '../Images/Gym/trainers/Mike1.jpg');
            $('h3#trainersName').html('Mike Smith');
            $("#trainersAge").html('since 2005');
            $('#trainersHistory').html('He has a Level 1 Crossfit Certificate and primarily concentrates his training in traditional weightlifting accessory movements, Crossfit, and Olympic lifting. His goal as a trainer is “functional fitness that is applicable to day to day life that improves everyone’s quality of life.”');
            $('#trainersTel').html('tel: 415-434-3423');

        });

        $('#Jack').click(function() {

            $("#trainersBox").css("display", "block");
            $("#trainersImg").attr('src', '../Images/Gym/trainers/Jack1.jpg');
            $('h3#trainersName').html('Jack Russell');
            $("#trainersAge").html('since 2013');
            $('#trainersHistory').html("Jack was born and raised in Lafayette, La. He is 25 years old and graduated from Lafayette High School in 2008, then attended the University of Louisiana at Lafayette where he studied Kinesiology exercise science and graduated in 2013.");
            $('#trainersTel').html('tel: 415-538-2000');
        });


        $('#Missi').click(function() {

            $("#trainersBox").css("display", "block");
            $("#trainersImg").attr('src', '../Images/Gym/trainers/Missi1.jpg');
            $('h3#trainersName').html('Missi Krause');
            $("#trainersAge").html('since 2000');
            $('#trainersHistory').html(' Missi is a specialist in Physical Education, bodybuilding and fitness. Also Missi record holder in powerlifting world championships medalist and world bodybuilding Europe (bodyfitness), champion UBPF USA California 2014 "Athletic Physicist" category,');
            $('#trainersTel').html('tel: 415-788-8710');
        });


        $('#Nellie').click(function() {

            $("#trainersBox").css("display", "block");
            $("#trainersImg").attr('src', '../Images/Gym/trainers/Nellie1.jpg');
            $('h3#trainersName').html('Nellie Crochet');
            $("#trainersAge").html('since 2005');
            $('#trainersHistory').html('Nellie is a head of the Department for group programs, fitness trainer and aerobic power lines, class "A reasonable body", a personal trainer. A participant of international fitness convention Go Sport, 2013.Her speciality is group training and diversified ');
            $('#trainersTel').html('tel: 125-235-0985');
        });

        $('#Kenny').click(function() {

            $("#trainersBox").css("display", "block");
            $("#trainersImg").attr('src', '../Images/Gym/trainers/Kenny1.jpg');
            $('h3#trainersName').html('Kenney Vo');
            $("#trainersAge").html('since 2013');
            $('#trainersHistory').html(' Kenny is 30 years old. He works as trainer since 2013. He specializes in powerlifting and olympic lifting. If you prefer to work with large weights, then Kenny will teach you how to develop your body ');
            $('#trainersTel').html('tel: 641-244-7785');
        });




    }();




    // Фунция нижнего слайдера
    var sliderMy = function slider() {
        var parentEl = document.querySelector("#switch"),
            img = document.createElement("img"),
            div = document.createElement("div"),
            ul = document.createElement('ul');


        // Добавление элементов ;

        parentEl.appendChild(div);
        div.appendChild(ul);
        parentEl.appendChild(img);

        ul.id = "list";
        div.id = "switchDivText";

        // Создание списка
        var data = ["Our nutritionists will work out the right diet for you",
            "Our trainers will help you find the right method of training",
            "We'll find you a convenient schedule workouts",
            "The sports system  will raise your tone and morale"
        ];

        for (var i = 0, ln = data.length; i < ln; i++) {

            var li = document.createElement('li');
            li.innerHTML = data[i];
            ul.appendChild(li);
        }
        ////////// 

        img.width = "250";
        img.height = "250";
        img.id = "switchPicture";

        var arrSrc = ["../Images/Gym/slaider/ptrainer0.png", "../Images/Gym/slaider/ptrainer1.png", "../Images/Gym/slaider/ptrainer2.png", "../Images/Gym/slaider/ptrainer3.png"],
            indx = 0,
            len = arrSrc.length;

        (function pictureBox() {
            img.src = arrSrc[indx];
            indx = ++indx % len;          // indx = indx !== len-1 ? ++indx : indx = 0;
            setTimeout(pictureBox, 3000);
        })()

            

        	

        	// Добавление цвета li

$(function() {
    var item = $("#list li"),
        indx = -1,
        len = item.length;
    (function go() {
        item.eq(indx).css("color", "")
        indx = ++indx % len;            
        item.eq(indx).css("color", "red")
        setTimeout(go, 3000)
    }())
});



}();

    /// Animation

 $( function animationPhoto() {

    $("#imageMin_1").delay(1000);
    $("#imageMin_1").fadeOut(2000);
    $("#imageMin_1").queue(function(){
   		$(this).attr("src", changePhoto);
   		$(this).dequeue(); 
   	});
    $("#imageMin_1").fadeIn(2000); 
   
  animationPhoto(); 	
   
});




    function changePhoto(indx, attributeValue) {

        var img = document.getElementById('imageMin_1');

        var arrSrc = ["../Images/Gym/imageMin_1/1min_2.jpg", "../Images/Gym/imageMin_1/1min_1.jpg"];

        var indx = 0;
        var len = arrSrc.length;

        (function pictureBox() {
            img.src = arrSrc[indx];
            indx = ++indx % len;
            setTimeout(pictureBox, 3000);

        })()
    }




}

