<?php
	require_once('connect.php');

	//返回首页滚动轮播图

	
	$query=mysql_query("select * from tb_content order by id desc");
	

	 $array = array();

	 $index = 0;
	 while ($row=mysql_fetch_array($query)) {
	 	$array[$index] = array(
	 		'title' => $row["title"],
	 		'sub_title' => $row["sub_title"],
	 		'title_des' => $row["title_des"],
	 		'url' => $row["url"],
	 		'pic' => $row["pic"],
	 		'content' => $row['content']
	 	);

	 	$index++;
	 }

	 echo json_encode($array);

?>