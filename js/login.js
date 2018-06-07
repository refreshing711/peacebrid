    $('#login').click(function(){  
        var username=$('#username').val();  
        var userpwd1=$("#userpwd").val();   
        if(username!=""&&userpwd1!=""){  //&&code.length==4
            $.ajax({  
                type:"GET",  
                url:"php/login.php",  
                dataType:"JSON",  
                data:{  
                    "username":username,  
                    "userpwd":userpwd1
                },  
                success:function(data){  
                    switch(data){  
                        case 0://用户登录成功  
                          alert("登录成功");   location.href="http://localhost:8000/peacebrid/index.html";
                        break;
						
                        case 1://密码错误  
                            alert("账号或密码错误！");  
                            break;  
//                      case 2://用户不存在  
//                          alert("该用户不存在！");  
//                          break;   
                    }  
                      
                }  
            })  
        }else{  
            alert("请检查您的输入！");  
        }  
    })  