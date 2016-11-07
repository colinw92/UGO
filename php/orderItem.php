<?php 
	//根据ID查询商品
	require_once('connect.php');

	$query=mysql_query(" select title,num,price,total_fee,pic_path from tb_order_item");

    $results = array();
	 while ($row=mysql_fetch_array($query)) {
	 	$tmpArray = array(
	 		'title' => $row["title"],
	 		'num' => $row["num"],
	 		'price' => $row["price"],
	 		'total_fee' => $row["total_fee"],
	 		'pic_path' => $row["pic_path"]
	 	);
        $results[] = $tmpArray;
	 }
	 echo json_encode($results);
 ?>