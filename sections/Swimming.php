<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>SwimmingPool</title>
    <link  href="../libs/normalize.css" rel="stylesheet">
    <link href="../style/style.css" rel="stylesheet">
    <link rel="stylesheet" href="../style/swimming.css">
    <link rel="stylesheet" href="../libs/font-awesome-4.7.0/font-awesome-4.7.0/css/font-awesome.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
</head>


<body>
<header>
    <?php include ('../includes/header.php'); ?>
</header>

<div class="field">

    <div id="swimmingHeader">
        <div id="titleSwimming">

            <img id="logoLeft" src="../Images/Swimming/swimmer2.png" width="80" height="137" alt="swimerLogo">
            <h1> Swimming </h1>
        </div>
        <div id="temperatureBox">

            <h2><em class="fa fa-thermometer-half"></em> Temperature</h2>
            <div id="ambientTemperature">
                <div class="bobber">
                    <p id="temperatureC" class="bigText"></p>
                </div>
                <div class="jar">
                    <p>ambient</p>
                </div>
            </div>
            <div id="waterTemperature">
                <div class="bobber">
                    <p class="bigText"></p>
                </div>
                <div class="jar">
                    <p>water</p>
                </div>
            </div>
            <div id="changeTemperature">
                <p id="degrees" class="bigText"><sup>o</sup>C</p>
                <p id="changeTemp">change to Fahrenheit</p>
            </div>
        </div>
    </div>

    <div id="poolImg">
        <img src="../Images/Swimming/sw1.jpg" width="900" height="450" alt="swimming">
    </div>

    <div id="information">
        <p>Swimmers Gladiator's club offers you special programs to improve skills:</p>

        <p id="easy" class="closed">An Easy Interval Swim Workout</p>
        <p id="average" class="closed">A Swim Workout to Develop your Kicking</p>
        <p id="hard" class="closed">An Advanced Endurance Swim Workout</p>

        <div id="swimmingTraining">

            <!--  Easy -->
            <div id="easy_Box">
                <div class="info_Box">
                    <p>Time: 10-15 minutes</p>
                    <p>Difficulty: Easy</p>
                    <p>This 800 yard swim provides beginners an easy introduction to interval swimming. This interval
                        workout will help you develop strength in a wide range of muscle movement, as you will be
                        practicing intervals in all four strokes.</p>

                </div>

                <div class="trainingProgram">
                    <u> An Easy Interval Swim Workout: </u>
                    <ul>
                        <li>200 yard freestyle warm up with no rests.</li>
                        <li>Intervals: Alternate between “sprinting” and “resting” paced laps for each set, with 30
                            seconds rest between each stroke.
                            <ul>
                                <li>Two sets of 50 yard butterfly intervals</li>
                                <li>Two sets of 50 yard backstroke intervals</li>
                                <li>Two sets of 50 yard freestyle intervals</li>
                                <li>Two sets of 50 yard breast stroke intervals.</li>
                            </ul>

                        </li>
                        <li>200 yard freestyle cool down with no rests.</li>
                    </ul>

                </div>

            </div>

            <!-- Average -->

            <div id="average_Box">
                <div class="info_Box">
                    <p>Time: 10-15 minutes</p>
                    <p>Difficulty: Easy</p>
                    <p>This easy, 600 yard swim workout requires you to utilize a kickboard to help you focus on
                        developing leg strength and kicking technique.</p>
                </div>

                <div class="trainingProgram">
                    <u> A Swim Workout to Develop your Kicking: </u>
                    <ul>
                        <li>100 yard freestyle warm up, then rest 30 seconds.</li>
                        <li>With a kickboard:
                            <ul>
                                <li>Two sets of 50 yard freestyle kick, resting 15 seconds between each set.</li>
                                <li>Two sets of 50 yard breast stroke kick, resting 15 seconds between each set.</li>
                                <li>Two sets of 50 yard butterfly kick, resting 15 seconds between each set.</li>
                                <li>Two sets of 50 yard backstroke kick, resting 15 seconds between each set.</li>
                            </ul>

                        </li>
                        <li>100 yard freestyle cool down.</li>
                    </ul>

                </div>

            </div>

            <!-- Hard -->
            <div id="hard_Box">
                <div class="info_Box">
                    <p>Time: 60 minutes</p>
                    <p>Difficulty: Hard</p>
                    <p>If you ever find yourself in the middle of the ocean, a mile away from land, don’t panic! This
                        2700 yard endurance swim workout will prepare you for those Life of Pi situations (minus the
                        tiger). Well, that might be an exaggeration. But this workout will get you toned and fit. That I
                        can promise. </p>
                </div>

                <div class="trainingProgram">
                    <u> Cody’s Endurance Swim Workout: </u>
                    <ul>
                        <li>500 yards warm up, mix all strokes</li>
                        <li>200 yards freestyle, alternating sprints and easy laps</li>
                        <li>100 yards butterfly</li>
                        <li>100 yards backstroke</li>
                        <li>100 yards breastroke</li>
                        <li>4 sets of 100 yards freestyle, resting :15 between sets</li>
                        <li>4 sets of 200 yards IM, resting :30 between sets</li>
                        <li>500 yards cool down, mix all strokes</li>
                    </ul>

                </div>

            </div>

        </div>

    </div>

</div>
    <footer>
 <?php
    include('../includes/footer.php');
 ?>
</footer>



<script src="../js/swimming.js"></script>
</body>
</html>
