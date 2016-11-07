<?php
  require_once('connect.php');

  

	 $query=mysql_query("select * from tb_item_cat where parent_id=0");
	

	 $array = array(
			'data'=> array()
	      );

	 $index = 0;
	 while ($row=mysql_fetch_array($query)) {



	 	//获取第二级
		$query1=mysql_query("select * from tb_item_cat where parent_id=".$row["id"]);
		  
			  $arrayName = array();
		      $index1 = 0;
		      while ($row1=mysql_fetch_array($query1)) {
		      		//获取第三级
		      		$query2=mysql_query("select * from tb_item_cat where parent_id=".$row1["id"]);

		      		$index2 = 0;
		      		$array2 = array();
		      		while($row2 = mysql_fetch_array($query2)) {
		      			$array2[$index2] = '/product/'.$row2['id'].'.html|'.$row2["name"];
		      			$index2++;
		      		}


		      		//第二级的代码
		      	 	$arrayName[$index1] =  array(
		      	 		'u' => '/product/'.$row1['id'],
		      	 		'n' => '<a href="/product/'.$row1['id'].'">'.$row1['name'].'</a>',
		      	 		'i' => $array2
		      	 	);
		      	 	$index1++;
		      	 
		      }
		  
	      
	     



	      	//获取第一级
			$array['data'][$index] = array('u' => '/product/'.$row['id'], 
				'n'=>'<a href="/product/'.$row['id'].'">'.$row['name'].'</a>','i'=> $arrayName);
	      $index = $index + 1;


	      


	

	 }

	 echo json_encode($array);
?>