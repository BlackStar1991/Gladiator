<!DOCTYPE html>
<html>

  <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>

   <title>
   Register
   </title>

	<link rel="stylesheet" type="text/css" href="normalize.css">
 <link href="style.css" type="text/css" rel="stylesheet"> 
 <link href="register.css" type="text/css" rel="stylesheet">  
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>


<body>


<!-- HEAD -->
<header>
    <div class="block-absolute"><b>It's firt web-page
        <br>created by Andry Zirka</b>
    </div>
    <a href="MySite.html">
        <img src="Images/logoGladiator.png" width="300" height="300" alt='logoSite'>
    </a>
    <ul class="main-menu">
        <li>
            <a>Forum</a>
        </li>
        <li>
            <a>Services</a>
            <ul class="sub-menu-services">
                <li>
                    <a href="Gym.html">
                        <img src="Images/icons/menu/gym.png" width="32" height="32">Gym</a>
                </li>
                <li>
                    <a href="Swimming.html">
                        <img src="Images/icons/menu/swimming.png" width="32" height="32">Swimming</a>
                </li>
                <li>
                    <a href="Aerobics.html">
                        <img src="Images/icons/menu/aerobics.png" width="32" height="32">Aerobics</a>
                </li>
                <li>
                    <a href="Dancing.html">
                        <img src="Images/icons/menu/dancing.png" width="32" height="32">Dancing</a>
                </li>
                <li>
                    <a href="PoleDancing.html">
                        <img src="Images/icons/menu/poledancing.png" width="32" height="32">Pole Dancing</a>
                </li>
                <li>
                    <a href="Boxing.html">
                        <img src="Images/icons/menu/boxing.png" width="32" height="32">Boxing</a>
                </li>

                <li>
                    <a href="Gymnastics.html">
                        <img src="Images/icons/menu/gymnast.png" width="32" height="32">Gymnastics</a>
                </li>
            </ul>
        </li>
        <li>
            <a>Store</a>
            <ul class="sub-menu-store">
                <li>
                    <a href="">Sports nutrition</a>
                    <ul class="pro-sub-menu-store">
                        <li>
                            <a>
                                Energetic
                                <img src="Images/icons/menu/energetic.png" width="32" height="32"></a>
                        </li>
                        <li>
                            <a>
                                Vitamins and minerals
                                <img src="Images/icons/menu/vitamins.png" width="32" height="32"></a>
                        </li>
                        <li>
                            <a>
                                Bars
                                <img src="Images/icons/menu/bars.png" width="32" height="32"></a>
                        <li>
                            <a href="Protein.html">
                                Protein
                                <img src="Images/icons/menu/protein.png" width="32" height="32"></a>
                    </ul>
                <li>
                    <a href="">Stuff Sports</a>
                </li>
                <li>
                    <a href="">ECR</a>
                </li>
            </ul>
        </li>
    </ul>
    <div id="toolbar">
        <form  autocomplete="on">
            <input class="block_bar" type="text" name="Login" placeholder="Login">
            <input class="block_bar" type="password" name="Password" placeholder="Password">
            <div id="likeSubmit">&#9658;</div>
            <div>
                <a href="Register.html">Register</a>
                <a href="">/ Forgot the password?</a>
            </div>
        </form>
    </div>
</header>
<!-- HEAD END -->
  
 <!-- MAIN -->   

<main>     
	<h1>Please fill in the registration form </h1>

 	<div class="field">
<form>




	<a  href=""><div id="avatar" class="photo">
	 <!--  <p> Download photo 150px x 200px </p>  -->

	</div></a>


<!--  -->
<div class="register">	
  <fieldset>
  	<legend>*General information</legend>
	
	<p>
	Nickname  <input type="text"  name="name" placeholder="Nickname"> 
	</p>	
	<p>	  	   
	Email  <input type="text"  name="eamil" placeholder="email@gmail.com"> 
	</p>
	
	<p>
	Password  <input type="password"  name="password" placeholder="Password"> <br>
 	Confirmation Password <input type="password"  name="Confirmation_password" placeholder="Password"> 
 	</p>

	<p>
	Your Name  <input type="text"  name="name" placeholder="Name"> 
		  	   <input type="text" name="surname" placeholder="Surname"> 
	</p>

    <p>
    Contact number <input type="text"  name="number" placeholder="+380...">  
    </p>

	</fieldset>

	<fieldset>
	<legend> Additional Information</legend>
	<p>
		<label> Sex   <input type="radio" name="sex" value="Male" checked>Male 
     		 <input type="radio" name="sex" value="Female" > Female   
     		
  </label>
	</p>

	<p>
	Date of Birth 
	<input type="text"  name="Day" placeholder="Day"> 
	<input type="text"  name="Month" placeholder="Month">  
	<input type="text"  name="Year" placeholder="Year">       
	</p>

	<p>
		Your weight (kg) <input type="text"  name="weight" placeholder="kg"> <br>
	</p>

	<p>
		Your growth (cm) <input type="text"  name=" growth" placeholder="cm"> 
	</p>



	<p>
	<a href="">You are familiar with the <u> policy of the club? </u> </a> <input type="checkbox" name="policy"> 
	</p>

	</fieldset>


 <input type="submit" value="Register">   

</div>

<div id="moto"></div>

</form>
 	</div>
	

	</main>  
 <script type="text/javascript" src="script.js" charset="UTF-8"></script> 

	</body>
</html>