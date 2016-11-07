<?php
  require_once('connect.php');

  //注册的时候，检测用户名、手机、email是否已经被占用

  //username  phone  email
  $type = $_GET["type"];

  $param = $_GET["param"];

  

	if($type == "" || $param == "") {
		$code = -100;
		$msg = "参数为空";

	}else{
		$query=mysql_query("select * from tb_user where ".$type." ='".$param."'");
		$row=mysql_fetch_array($query);
		//没有获取到数据
		if(empty($row)) {
			$code = 1;
			$msg = "可用";
		}else{
			
			if($type == "username") {
				$code = -1;
				$msg = "用户名已被注册";
			}else if($type == "phone"){
				$code = -2;
				$msg = "手机号已被注册";
			}else if($type == "email"){
				$code = -3;
				$msg = "EMail已被注册";
			}else{
				$code = 0;
				$msg = "无效参数";
			}
		}

	}

	
	$array = array(
		'code' => $code,
		'msg' => $msg 
	);

	echo json_encode($array);
?>