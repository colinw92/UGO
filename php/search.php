<?php 
	//查询商品，带分页

	// select * from tableName where 条件 limit 当前页码*页面容量-1 , 页面容量
	//select * from tb_item where title like '%手机%' LIMIT 1, 3
	require_once('connect.php');

	//当前页码
	$currentPage = $_GET["page"];
	//页面容量
	$pageCount = $_GET["pageCount"];
	//查询的内容
	$q = $_GET["q"];


	
	//如果没有页码查询全部
	if($currentPage == "" || $pageCount == "") {
		$query=mysql_query("select * from tb_item where title like '%".$q."%'");
		
	}else{
		//分页
		$query=mysql_query("select * from tb_item where title like '%".$q."%' LIMIT ".$currentPage*($pageCount-1).", ".$pageCount);
		
	}


	 $tmpArray = array();

	 $index = 0;
	 while ($row=mysql_fetch_array($query)) {
	 	$tmpArray[$index] = array(
	 		'id' => $row["id"],
	 		'title' => $row["title"],
	 		'sell_point' => $row["sell_point"],
	 		'price' => $row["price"],
	 		'image' => $row["image"]
	 	);

	 	$index++;
	 }



	 $query1=mysql_query("select count(*) from tb_item where title like '%".$q."%'");
	$row1=mysql_fetch_array($query1);


	 $array = array('count' => $row1[0], data => $tmpArray);

	 echo json_encode($array);


 ?>