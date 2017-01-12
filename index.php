<?php
require "includes/db.php";
?> 


<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>

    <title>My first site</title>
    <!--  <link rel="stylesheet" type="text/css" href="reset css/reset.css"> -->
    <link href="libs/normalize.css" rel="stylesheet" type="text/css" >
    <link href="style/style.css" type="text/css" rel="stylesheet">
</head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
<body>

    <header>
     <?php
     include ('includes/header.php');
     ?>
 </header>

 <!-- MAIN -->

 <main>
    <div class="field">
        <a href="sections/Gym.php">
            <div class="block" id="gymBox"></div>
        </a>
        <a href="sections/Aerobics.php">
            <div class="block" id="aerobicsBox">
            </div>
        </a>
        <a href="sections/Dancing.php">
            <div class="block" id="dancingBox">
            </div>
        </a>
        <a href="sections/PoleDancing.php">
            <div class="block" id="poleDancingBox">
            </div>
        </a>
        <a href="sections/Swimming.php">
            <div class="block" id="swimmingBox">
            </div>
        </a>
        <a href="sections/Boxing.php">
            <div class="block" id="boxBox">
            </div>
        </a>
    </div>

    <img class="motivTrainers" src="Images/bar.jpg" width="1200px" height="361px" alt="bar">

    <div id="field-min">

        <div class="trainer">

            <img src="Images/trainer/Annette-Papa.png" class="circle">

            <div class="textblock">
                <h3>Annette Papa</h3>
                <div class="close"></div>
                <span>
                    I’m a personal trainer in Toronto, Ontario. I’ve been moving by way of dance since I was…like conceived.
                    I’ve been teaching dance since I was 16, working out for almost a decade and personal training since 2009.
                    Like many women I know, I battled with food, self-confidence + body image issues in my early twenties, and I know what it’s like to have an unhealthy “relationship” with food. Binge eating was my drug of choice.
                    After 3 years of counselling, lovely real + safe friends, and figuring out life is more than obsessing over one’s body…
                </span>
                <br>
                <a href="mailto:Annette@freedom-training.com">сontact</a>
                <a class="social social-fb" href="https://www.facebook.com/apfreedomtraining?ref=hl"
                target="_blanck"></a>
            </div>

        </div>

        <div class="trainer">

            <img src="Images/trainer/Vasia.png" class="circle">

            <div class="textblock">
                <h3>Vasil Virastjuk</h3>
                <div class="close"></div>
                <span>
                    Vasil is a professional coach of powerlifting also he's a Ukrainian athlete, 
                    Honored Master of Sports of Ukraine, holder of the title "The strongest man in the world",
                    multiple world champion in the all-around force. 
                    He will teach how to increase your strength.
                </span>

            </div>

        </div>

        <div class="trainer">

            <img src="Images/trainer/Vivien_Feld.png" class="circle">

            <div class="textblock">
                <h3>Vivien Feld</h3>
                <div class="close"></div>
                <span>
                    Vivien is a very knowledgeable instructor and a passionate poler. 
                    she believes in doing things by the book and if I ask her to do something it will be done quickly,
                    correctly and without fuss. She loves pole as a sport and fitness and dedicates a great deal of time, 
                    money and energy to pole for little return.
                </span>
                <br>
                <a href="mailto:info@poledancecommunity.com">сontact</a>
                <a class="social social-fb" href="https://www.facebook.com/PoleDanceCommunity" target="_blanck"></a>
            </div>

        </div>

        <div class="trainer">

            <img src="Images/trainer/mike-tyson.png" class="circle">

            <div class="textblock">
                <h3>Mike Tyson</h3>
                <div class="close"></div>
                <span>
                    Mike was one of the most successful fighters in the world. 
                    Now in retirement, he will teach you how to achieve their goals.
                </span>
                <br>
                <a href="mailto:">сontact</a>
                <a class="social social-fb" href="https://www.facebook.com/miketyson/?ref=br_rs" target="_blanck"></a>
            </div>

        </div>

        <div class="trainer">

            <img src="Images/trainer/MichaelFred.png" class="circle">

            <div class="textblock">
                <h3>Michael Fred Phelps II</h3>
                <div class="close"></div>
                <span>
                    Phelps - the only one in the history of the 18-time Olympic champion, 26-time champion in swimming. 
                    He - the absolute record for the number of awards (22) in the history of the Olympic Games.
                    He'll teach you swimming well
                </span>
                <br>
                <a href="mailto:">сontact</a>
                <a class="social social-fb" href="https://www.facebook.com/michaelphelps/?ref=br_rs&rf=108224035875457"
                target="_blanck"></a>
            </div>

        </div>

    </div>

</main>

<footer>
   <?php

   include('includes/footer.php');
   ?>
</footer>
<script type="text/javascript" src="js/script.js" charset="UTF-8"></script>
</body>
</html>