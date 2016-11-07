<?php 
	//根据ID查询商品
	require_once('connect.php');


	$id = $_GET["id"];

	$query=mysql_query("select * from tb_item where id=".$id);

	
	 while ($row=mysql_fetch_array($query)) {
	 	$tmpArray = array(
	 		'id' => $row["id"],
	 		'title' => $row["title"],
	 		'sell_point' => $row["sell_point"],
	 		'price' => $row["price"],
	 		'image' => $row["image"]
	 	);
	 
	 }

	 echo json_encode($tmpArray);
 ?>