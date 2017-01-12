
 <?php
    require "db.php";


    $data = $_POST;
	if( isset($data['do_signup']) )
	{

		$errors = array();
		if( trim($data['login']) == '')
		{
			$errors[] = 'Введите логин';
		}
		if( trim($data['email']) == '')
		{
			$errors[] = 'Введите email';
		}
		if( $data['password'] == '')
		{
			$errors[] = 'Введите password';
		}
		if( $data['password'] != $data['password'] )
		{
			$errors[] = 'Повторный пароль введен не верно!';
		}
		if( $data['name'] != $data['name'] )
		{
			$errors[] = 'Введите имя';
		}
		if( $data['name'] != $data['surname'] )
		{
			$errors[] = 'Введите Фамилию';
		}
		if( $data['tel'] != $data['tel'] )
		{
			$errors[] = 'Введите свой мобильный телефон';
		}


		if( empty($errors))
		{
		    // Evrething GOOD
			$user = R::dispense('users');
			$user->login =$data['login'];
			$user->email =$data['email'];
			$user->password = password_hash($data['password'], PASSWORD_DEFAULT);
			$user->name =$data['name'];
			$user->surname =$data['surname'];
			$user->tel =$data['tel'];

			R::store($user);
			// echo '<div style="color: green;">Вы успешно зарегестрированны</div><hr>';
		}else
		{
			$myError = array_shift($errors);
			// echo '<div style="color: red;">'. array_shift($errors) .'</div><hr>';
		}


	}
?>


<!DOCTYPE html>
<html lang="en">

<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>

<title>
	Register
</title>

<link rel="stylesheet" href="../libs/normalize.css">
<link href="../style/style.css" type="text/css" rel="stylesheet"> 
<link href="../style/register.css" type="text/css" rel="stylesheet">  
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>


<body>


	<header>
		<?php
		include ('header.php');
		?>
	</header>

	<!-- MAIN -->   

	<main>     
		<span class="ask">Please fill in the registration form </span>
		<div class="field">
			<form action="/signup.php" method="POST">
				<a href="" id="trigger_link"><div class="photo"></div></a>
				<input type="file" id="my_file" accept="image/jpeg,image/png,image/gif">

				<!--  -->
				<div class="register">	
					<fieldset>
						<legend>*General information</legend>
						
							
							<?php
							 echo '<p class="errorRegistred" style="color: red;">'. $myError . '</p>';
							?>
						
						<label><p>Nickname  <input type="text"  name="login" placeholder="Nickname" autofocus></p></label>	


						<label><p>Email  <input type="email"  name="email" placeholder="email@gmail.com"></p></label>	

						<label><p>Password  <input type="password"  name="password" placeholder="Password"></p></label>	 

						<label><p>Confirmation Password <input type="password"  name="password_2" placeholder="Password"></p></label>

						<label>	<p>Your Name  <input type="text"  name="name" placeholder="Name"></p></label>	
						<label>	<input type="text" name="surname" placeholder="Surname"> </p></label>
						<label>	<br><p>Contact number <input type="tel"  name="tel" placeholder="+380..."></p></label>
					</fieldset>

					<fieldset>
						<legend> Additional Information</legend>
						<p> Sex   <label><input type="radio" name="sex" value="Male" checked>Male</label>
							      <label><input type="radio" name="sex" value="Female">Female</label></p>

							<label><p>Date of Birth <input type="date"  name="dataBirth" placeholder="dataBirth"></p></label>

							<label><p>Your weight (kg) <input type="text"  name="weight" placeholder="kg"> <br></p> </label>

							<label><p>Your growth (cm) <input type="text"  name=" growth" placeholder="cm"></p></label>

							<label><p><a href="">You are familiar with the <u>policy of the club?</u></a> <input type="checkbox" name="policy"></p></label>

						</fieldset>
						<label><button type="submit" name="do_signup">Register</button></label>
					</div>			
				</form>
				<div id="moto"></div>
			</div>
		</main>  

		<script type="text/javascript" src="../js/register.js"></script>
	</body>
	</html>