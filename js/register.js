//onload=function(){
//	$.ajax({
//				type : "GET",
//				
//				url : 'php/register.php',
//				
//				data : {
//					username: '$username',
//					userpwd : '$userpwd',
//					conpwd	: '$conpwd'
//				},
//				success : function(data){
//					alert(data);
//				}
//			})
//	
//	
//	
//}




    $('#register').click(function(){  
        var username=$('#username').val();  
        var password1=$("#userpwd").val();  
 		var conpwd=$("#conpwd").val();
        if(username!=""&&password1!=""&&conpwd!=""){  
            $.ajax({  
                type:"GET",  
                url:"php/register.php",  
                dataType:"JSON",  
                data:{  
                    "username":username,  
                    "userpwd":password1,
                    "conpwd":conpwd
                },  
                success:function(data){  
                    switch(data){  
                        case 1://用户已存在  
                            alert("该用户已存在！请换一个用户名注册。")  
                            break;  
                        case 2://注册成功  
                            alert("注册成功！");  
//                          $.cookie("user",username);  
//                          $.cookie("limit",0);  
                //            window.location.href="index.php";  
                            break;  
                        case 0://验证码错误  
                            alert("请重新确认密码！");  
                            break;  
                    }  
                      
                }  
            })  
        }else{  
            alert("请检查您的输入！");  
        }  
    })