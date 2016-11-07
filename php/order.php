<?php 
	//写入订单
	require_once('connect.php');


	//时间戳
	$order_id = time();
	$payment = $_GET["payment"];

	$user_id = $_COOKIE['userid'];
	$buyer_nick =$_COOKIE['name'];
	if($user_id == "") {
		$array = array('code' => -1, 'msg' => '请先登录');
	}else{
		$result = mysql_query("INSERT INTO tb_order (order_id, payment, payment_type,status,user_id,buyer_nick) 
		VALUES (".$order_id.",".$payment.", 1,6,".$user_id.",'".$buyer_nick."')");

		if($result) {
			$array = array('code' => 1, 'msg' => '记录成功');
		}else{
			$array = array('code' => 0, 'msg' => '记录失败');
		}

	}


	
	echo json_encode($array);

 ?>