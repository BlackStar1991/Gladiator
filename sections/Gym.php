<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Gym</title>
    <link rel="stylesheet" type="text/css" href="../style/style.css">
    <link rel="stylesheet" type="text/css" href="../style/Gym_style.css">
</head>

<body>

 <header>
    <?php
    include ('../includes/header.php');
   ?>
</header>

    <div class="field">
        <h1> Training in the gym </h1>
        <div id="blockText1">
            <p class="headerText">ABOUT OUR GYM</p>
            <p>Located in California, Gladiator’s Gym caters to serious athletes who are looking to take their game to the next level. Our gym has been called the “mixed martial arts” of the training world due to our expertise in improving ALL aspects of athletic performance. Whether you’re looking to improve your strength, speed, power, agility, mobility, or sport-specific endurance – Gladiator’s will get you there. It is no coincidence that athletes from all 50 states and over a dozen different countries have been making the trek to San Francisco (and now California) since 2003 to experience our world-class training. </p>
        </div>
        <img id="imageMin_1" src="../Images/Gym/imageMin_1/1min_1.jpg" class="photo_right disappearance" alt="imageMin_1" width="600" height="461">
        <div id="blockText2">
            <p class="headerText">PERSONAL TRAINING</p>
            Are you, or do you have a family member who is…
            <ul>
                <li>new to exercise?</li>
                <li>struggling with depression or anxiety?</li>
                <li>suffering from weight issues or obesity?</li>
                <li>post-physical therapy?</li>
                <li>struggling with a fitness plateau?</li>
                <li>seeking to prevent sports injuries?</li>
                <li>seeking to improve coordination, mood/affect, flexibility or self-esteem?</li>
            </ul>
            Gladiator’s Gym has a team of personal trainers with unique specialties.
        </div>
        <img id="imageMin_2" class="photo_left disappearance" src="../Images/Gym/imageMin_2/2min_1.jpg" width="700" height="467">
        <img id="imageMin_3" class="photo_right disappearance" src="../Images/Gym/imageMin_3/3min_1.jpg" width="700" height="467">
        <div id="blockText3">
            <p class="headerText">WE'RE WEITING ON YOU</p>
            <ul>
                <li>Our gym is open 24 hours a day, 7 days a week</li>
                <li>We have professional fitness equipments to train all muscle groups</li>
                <li>Gladiator’s Gym is the place where you can make new friends</li>
                <li>You can contact with our trainers and they will help you:
                </li>
            </ul>
            <div id="trainersGym">
                <a id="Mike">Mike</a>
                <a id="Jack">Jack</a>
                <a id="Missi">Missi</a>
                <a id="Nellie">Nellie</a>
                <a id="Kenny">Kenny</a>
                <div id="trainersBox">
                    <img id="trainersImg" width="150" height="150" alt="trainer">
                    <h3 id="trainersName"></h3>
                    <p id="trainersAge"> </p>
                    <p id='trainersHistory'></p>
                    <p id="trainersTel"> </p>
                </div>
            </div>
        </div>
        <div id="switch"></div>
        <div id="string">
            <h4>GLADIATOR’S GYM: CORE VALUES </h4>
            <div id="box">
                <p>LEAD FROM THE FRONT</p>
                <p>ALWAYS OVER-DELIVER</p>
                <p>BE TRANSPARENT</p>
                <p>DEVELOP RELATIONSHIPS</p>
                <p>PROVIDE A POSITIVE & MOTIVATING TRAINING ATMOSPHERE</p>
            </div>
        </div>
    </div>
<footer>
    <?php

    include('../includes/footer.php');
 ?>
</footer>
    <script type="text/javascript" src="../libs/jQuery/jquery-3.1.0.min.js"></script>
    <script type="text/javascript" src="../js/gym.js"></script>
</body>

</html>
