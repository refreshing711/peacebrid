//1.设置导入文件的路径
require.config({
	paths : {
		jquery : "jquery-1.11.3",
		slide: 'slide',
		
		
	}
})

require(['jquery','cookie','a','b','drag'],function($,cookie,a,b,drag){
	$(function(){
//		$.cookie('key','value',{expires : 7,path : '/'});
////		alert($.cookie('key'));
////		alert(a.a);
////		alert(b.fn());
//		drag.drag('box');
		
		
		slide.slide("banner")
		
		
	})
})
