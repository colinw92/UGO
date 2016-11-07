<?php 
	//购物车 的增，删，改
	require_once('connect.php');

	$userid = $_COOKIE['userid'];
	if($userid == "") {
		$code = -1;
		$msg = "请先登录";
	}else{
		//要使用的功能  add  delete  update只更新数量
		$type = $_GET["type"];


		if($type == "delete") {
			$id = $_GET["id"];	

			$result = mysql_query("delete from tb_cart where id=".$id);
			if($result) {
				$code = 1;
				$msg = "删除成功";
			}else{
				$code = 0;
				$msg = "删除失败";
			}

		}else if($type == "update") {
			$num = $_GET["num"];
			$id = $_GET["id"];	

			$result = mysql_query("update tb_cart set num=".$num." where id=".$id);
			if($result) {
				$code = 1;
				$msg = "更新成功";
			}else{
				$code = 0;
				$msg = "更新失败";
			}
		}else{
			
			$itemid = $_GET["item_id"];
			$itemtitle = $_GET["item_title"];
			$itemimg = $_GET["item_image"];
			$itemprice = $_GET["item_price"];
			$num = $_GET["num"];

			$result = mysql_query("INSERT INTO tb_cart (user_id, item_id, item_title,item_image,item_price,num) 
		VALUES (".$userid.",".$itemid.",'".$itemtitle."','".$itemimg."',".$itemprice.",".$num.")");

			//http://127.0.0.1/taotao/php/cart.php?type=add&item_id=1474391927&user_id=7&item_price=5&num=1&item_title=haha&item_image=uuu

			if($result) {
				$code = 1;
				$msg = "加入购物车成功";
			}else{
				$code = 0;
				$msg = "加入购物车失败";
			}
		}
	}

	

	$array = array('code' => $code, 'msg' => $msg);


	echo json_encode($array);
 ?>