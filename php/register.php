<?php
	header("content-type:text/html;charset=utf-8");
	
	$username = $_GET["username"];
	$userpwd = $_GET["userpwd"];
	$conpwd=$_GET["conpwd"];
	$conn=new mysqli("127.0.0.1","root","","database");
	
	$ip = $_SERVER['REMOTE_ADDR'];//ip地址
	
	$sql="select count(*) as num from admin3 where username='$username'";	//检查用户名在数据库是否存在
	//取回sql语句执行后的记录集
	$result = $conn->query($sql);
	//记录集是一张二维表

	$row = $result->fetch_assoc();
//	$row= $result->fetch_assoc();	//参数的数据函数
		
	if($row["num"]==0&&$userpwd==$conpwd){	//用户名可以注册，没有被注册
		$sql="INSERT INTO admin3 ( username, pwd , conpwd) VALUES( '$username','$userpwd','$conpwd' )";
			$conn->query($sql);
//		echo "<script>alert('注册成功');location.href='login.html'</script>";		
			echo 2 ;
	}else if($row["num"]==0&&$userpwd!==$conpwd){
//		echo "<script>alert('注册失败');</script>";

		echo 0 ;	//确认密码
	}else{
		echo  1;
	}
	



//	while($row = $result->fetch_assoc()) {
//	    echo $row["id"]." ---- ".$row["password"]."<br>";
//	}
//	echo "注册成功";
	
//	$user = $_GET["username"];
	
//	echo "$user"
	
	//echo "hello world"
//	echo "用户名：$username , 密码：$userpwd , email：$email";
//	//设置数据源
//		$db=mysql_connect("localhost:8000","root","");
////	连接数据源
//		mysql_select_db("project",$db);
////	设置字符格式
//		mysql_query("set names utf8");
////	编写sql语句
//		$sql="INSERT INTO admin ( username, pwd, email ) VALUES( '$username','$userpwd', '$email' )";
//		
////	执行sql语句
//		$row =mysql_query($sql);	//执行insert delete update

//		echo $row		//1

?>