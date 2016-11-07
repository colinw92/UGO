<?php
  require_once('connect.php');

  $name = $_POST["name"];
  $pwd = $_POST["pwd"];

  if($name == "" || $pwd == "") {
  	 $array = array(
	 	'code' => '0', 
	 	'msg' => '请输入用户名和密码'
	 );
	 //{'code': 1, 'msg': ''}
	 echo json_encode($array);
  }else{


  		$query=mysql_query("select * from tb_user where username ='".$name."'");
	$row=mysql_fetch_array($query);



	 if($row["password"] == $pwd) {
	 	$code = 1;
	 	$msg = '登录成功';

	 	//记录cookie
	 	setcookie("name",$name); 
	 	setcookie("userid", $row["id"]);
	 }else{
	 	$code = 0;
	 	$msg = '登录失败';
	 }

	 $array = array(
	 	'code' => $code, 
	 	'msg' => $msg
	 );



	 //{'code': 1, 'msg': ''}
	 echo json_encode($array);
  }

  


?>