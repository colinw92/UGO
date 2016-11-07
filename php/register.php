<?php
  require_once('connect.php');

  //用户名、密码、手机、邮箱

  $username = $_POST["name"];
  $password = $_POST["pwd"];
  $phone = $_POST["phone"];
  $email = $_POST["email"];

  $result = mysql_query("INSERT INTO tb_user (username, password, phone,email)
	VALUES ('".$username."', '".$password."', '".$phone."','".$email."')");


	 if($result) {
	 	$code = 1;
	 	$msg = '注册成功';
	 }else{
	 	$code = 0;
	 	$msg = '注册失败';
	 }

	 $array = array(
	 	'code' => $code,
	 	'msg' => $msg
	 );



	 //{'code': 1, 'msg': ''}
	 echo json_encode($array);
  

  


?>