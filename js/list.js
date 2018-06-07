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



var Lis=$(".list-mainbg .list-main .list-main-left ul>li")
$.each(Lis,function(){
	$(this).not().has("ul").css("list-style","none");
	
	
	//$("li:not(:has(ul))").css("list-style","none");
$(this).has("ul").css({	
//$("li:has(ul)").css({
	"list-style":"url(image/list-2.png)"

})
$(this).has("ul").click(function(){
//$("li:has(ul)").click(function(){
	var ul=$(this).children("ul")
	if(ul.is(':visible')){
		$(this).css({
			"list-style":"url(image/list-2.png)"
		})
		ul.hide(1000);
	
	}else{
	$(this).css({
		"list-style":"url(image/list-1.png)"
	})	
		
		ul.show(1000);
	}
})

	//固定栏
	$(".fixed ul li:eq(0)").mouseenter(function(){
		$(this).css("background","#fff")
		$(this).children().children("span").css("color","#cd0000")
		$(this).children().children("i").css({
			"background-position":"0px -37px"
		})
	})
	$(".fixed ul li:eq(0)").mouseleave(function(){
		$(this).css("background","#cd0000")
		$(this).children().children("span").css("color","#fff")
		$(this).children().children("i").css({
			"background-position":"0px 0px"
		})
	})

	$(".fixed ul li:eq(2)").mouseenter(function(){
		$(this).css("background","#fff")
		$(this).children().children("span").css("color","#cd0000")
		$(this).children().children("i").css({
			"background-position":"-74px -37px"
		})
	})
	$(".fixed ul li:eq(2)").mouseleave(function(){
		$(this).css("background","#cd0000")
		$(this).children().children("span").css("color","#fff")
		$(this).children().children("i").css({
			"background-position":"-74px 0px"
		})
	})
	
	$(".fixed ul li:eq(3)").mouseenter(function(){
		$(this).css("background","#fff")
		$(this).children().children("span").css("color","#cd0000")
		$(this).children().children("i").css({
			"background-position":"-113px -37px"
		})
	})
	$(".fixed ul li:eq(3)").mouseleave(function(){
		$(this).css("background","#cd0000")
		$(this).children().children("span").css("color","#fff")
		$(this).children().children("i").css({
			"background-position":"-113px 0px"
		})
	})
	
	$(".fixed ul li:eq(3)").click(function(){
		$('html').animate({"scrollTop":0},5000);
	})

})








}