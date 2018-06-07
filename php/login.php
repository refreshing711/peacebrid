<?php
	header("content-type:text/html;charset=utf-8");
	
	$username = isSet($_GET["username"]) ? $_GET["username"] : '';
	$userpwd = isSet($_GET["userpwd"]) ? $_GET["userpwd"] : '';
	
	$conn = new mysqli("127.0.0.1", "root", "", "database");
	
	$sql = "select count(*) as num from admin3 where username='$username' and pwd='$userpwd'";	//  
	
	$result = $conn->query($sql);
	
	
	$row = $result->fetch_assoc();
	

	if( $row["num"]==1){
//		echo '{"status":"success", "msg":"登录成功"}';
//	}else{
//		echo '{"status":"error", "msg":"登录失败：用户名不存在"}';
		echo 0;
//}else if($row["num"]==1){
//		echo 1;
}else{
		echo 1;
}
?>