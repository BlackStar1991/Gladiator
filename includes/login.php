<?php
// require "db.php";

$data = $_POST;

if( isset($data['do_login']) )
{

	$errors = array();
	$user = R::findOne('users', 'login = ?', array($data['login'])); 

	if( $user )
	{
			// Login существует в базе
		if( password_verify($data['password'], $user->password))
		{
				// Всё хорошо логиним пользователя 
			$_SESSION['logged_user'] = $user;
			echo '<div style="color: green;">Всё хорошо можете перейти на <a href="/">главную страницу</a></div><hr>';

		}else{

			$errors[] = 'Пароль не верен';
		}


	}else{
		$errors[] = 'Пользователь с таким Логином не найден';
	}

	if( ! empty($errors))
	{
		echo '<div style="color: red;">'. array_shift($errors) .'</div><hr>';
	}
}
?>




<form autocomplete="on" action="login.php" method="POST">
	
		
		<input class="block_bar" type="text" name="login" value="<?php echo @$data['login']; ?>">
	
	
		
		<input class="block_bar" type="password" name="password" value="<?php echo @$data['password']; ?>">
	
		
		<button class="likeSubmit" type="submit" name="do_login"></button>
		<div class="underBut">&#9658;</div>

	<div>
                <a href="../includes/signup.php">Register</a>
                <a href="/">/ Forgot the password?</a>
            </div>

</form>


<!-- <form >
            <input  type="text" name="Login" placeholder="Login">
            <input  type="password" name="Password" placeholder="Password">
            <div id="likeSubmit">&#9658;</div>
            
        </form> -->