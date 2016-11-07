<?php 
	//根据ID查询商品
	require_once('connect.php');

	$query=mysql_query(" select receiver_city,receiver_name,receiver_address,receiver_mobile from tb_order_shipping LIMIT 3");

    $results = array();
	 while ($row=mysql_fetch_array($query)) {
	 	$tmpArray = array(
	 		'receiver_city' => $row["receiver_city"],
	 		'receiver_name' => $row["receiver_name"],
	 		'receiver_address' => $row["receiver_address"],
	 		'receiver_mobile' => $row["receiver_mobile"],
	 	);
        $results[] = $tmpArray;
	 }
	 echo json_encode($results);
 ?>