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


})








}