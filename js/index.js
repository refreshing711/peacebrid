onload=function(){
		
		$(".head-top ul:eq(0) li:eq(0)").hover(function(){
			$(this).children("img").css("display","block")
		},function(){
			$(this).children("img").css("display","none")
		})
		
		var lis=$(".head-navbg .head-nav ul li:not(.notcheck)")
		$.each(lis,function(){
			$(this).hover(function(){
				$(this).children(".head-nav-mainbg").css("display","block")
				$(this).parents().eq(1).siblings().css("display","block")
			},function(){
				$(this).children(".head-nav-mainbg").css("display","none")
				$(this).parents().eq(1).siblings().css("display","none")
			})
		})
	
		
		
		var wire=$(".tabbg .tab .tab-ul ul li");
		
		$.each(wire,function(){
			$(this).hover(function(){
				$(this).find(".img").stop().animate({
					
					"top":15
				})
				
			},function(){
				$(this).find(".img").stop().animate({
					
					"top":0
				})
			})
		})
	
		var tab=$(".tabbg .tab .tab-main ul li");
		$.each(tab,function(){
//			$(this).mouseenter(function(){
//				var ind=$(this).index();
//				$(this).removeClass("tab-main-li").eq(ind).addClass("tab-main-li");
//				$(this).children().removeClass("checked").eq(ind).addClass("checked")
//			})
			
			
			$(this).hover(function(){
				$(this).children().css("display","block")
			},function(){
				$(this).children().css("display","none")
			},function(){
				$(this).children(".checked").css("display","block")
				
			})
			console.log($(this).children(".checked"))
//			$(this).mouseenter(function(){
//				$(this).children().css("display","block")
//			})
//			$(this).mouseenter(function(){
//				$(this).children().css("display","none");
//				$(this).children(".checked").css("display")
//			})

//			$(this).mouseenter(function(){
//				var ind=$(this).index();
//				$(this).removeClass("tab-main-li").eq(ind).addClass("tab-main-li");
//				
//				$(this).children("ul").css("display","none")
//				console.log($(this).children())
//			})
			
		})
	
	
	
	
			
			
	
}
