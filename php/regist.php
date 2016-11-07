<?php

	if($_POST['phone'] && $_POST['pwd'] && $_POST["pwd"] === $_POST["rpwd"]) {
		$arr = array(
			'code'=>10000,
			'msg'=>'注册成功,恭喜 '.$_POST['phone'].'用户',
			'time'=>'10'
		);
	} else {
		$arr = array(
			'code'=>10002,
			'msg'=>'注册失败',
			'time'=>'10'
		);
	}

	echo json_encode($arr);

?>