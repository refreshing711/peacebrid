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

	// 1 当鼠标在小图上移动时，move  和  big 这两个区域显示
$('#small').mousemove(function(e) {
    $('#move').show();
    $('#big').show();

    // 鼠标的坐标
    var mx = e.pageX;
    var my = e.pageY;

    // 2 设置鼠标的合理移动范围
    var sl = $('#small').offset().left; //计算small距离页面左边的距离
    var st = $('#small').offset().top; //计算small距离页面左边的距离

    var mw = $('#move').width() / 2; //move宽度的一半
    var mh = $('#move').height() / 2; //move 高度的一半

    var newLeft = mx - sl - mw;
    var newTop = my - st - mh;


    var minleft = 0;
    var maxleft = $('#small').width() - $('#move').width();
    var mintop = 0;
    var maxtop = $('#small').height() - $('#move').height();

    if (newLeft < minleft) {
        newLeft = 0;
    }

    if (newLeft > maxleft) {
        newLeft = maxleft;
    }

    if (newTop < mintop) {
        newTop = 0;
    }

    if (newTop > maxtop) {
        newTop = maxtop;
    }

    // 3 控制蒙版层跟着鼠标移动
    $('#move').css('left', newLeft + 'px').css('top', newTop + 'px');


    // 4 让大图随着蒙版层的移动而移动
    var sw = $('#small').width();
    var bw = $('#bigPic').width();
    var sh = $('#small').height();
    var bh = $('#bigPic').height();



    var x = bw * newLeft / sw;
    var y = bh * newTop / sh;

    $('#bigPic').css('left', -x + 'px').css('top', -y + 'px');



})

$('#small').mouseout(function() {
    $('#move').hide();
    $('#big').hide();
})


$('#list img').each(function() {
    $(this).click(function() {
        var s = $(this).attr('src');
        // 赋值给大图和small中的图片
        $('#bigPic').attr('src', s);
        $('#small img').attr('src', s);

    })
})


$(function(){
	loadCart();
	
	$("#buy").click(function(){
		location.href="shopcart.html";
	})
	
	$(".good .add .addToCart").click(function(e){
		//console.log($(this).parents());
		var goodId=$(this).parents(".detail-main").attr("data-good-id");
	//	console.log(goodId);
		var goodSrc=$(this).parents(".glass-left").find(".shopimg").attr("src");
	//	console.log(goodSrc);
		var goodName=$(this).parent().siblings("h3").html();
	//	console.log(goodName);
		
		var goodSerial=$(this).parents(".detail-main").find(".shopnum").html();
		
	//	console.log(goodSerial);
		
//		console.log($(this).parent().siblings(".price").children("span"))
		
		var goodMagic=$(this).parent().siblings(".price").children("span").children("b").html();
//	console.log(goodMagic);
	
	
	
	var goodColor=$(this).parent().siblings(".p2").children("a").attr("title");
//	console.log(goodColor);
	
	
	
	var goodSize=$(this).parent().siblings(".p3").children("a").html();
//	console.log(goodSize);
	
	
	var goodNum=$(this).parent().siblings(".p4").children().eq(2).val();
//	console.log(goodNum);
	var goodShoppe=$(this).parent().siblings(".price").children("p").children("del").html();
//	console.log(goodShoppe);
	
	
	var goodPrice=$(this).parent().siblings(".price").children("ul").children().eq(1).html();
//	console.log(goodPrice);
	
	var cartStr=$.cookie("cart")?$.cookie("cart"):"";
	var cartObj=convertCartStrToObj(cartStr);
	
//	console.log(cartObj)
		if(goodId in cartObj){
			cartObj[goodId].num+=1;
		}else{
			cartObj[goodId]={
				src:goodSrc,
				name:goodName,
				serial:goodSerial,
				magic:goodMagic,
				color:goodColor,
				size:goodSize,
				num:goodNum,
				shoppe:goodShoppe,
				price:goodPrice
			};
		}
		//购物车信息存回cookie
		
		cartStr=convertObjToCartStr(cartObj);
		
//		存入cookie

		$.cookie("cart",cartStr,{expires:7,path:"/"});
		
		
	//	购物车（0）
//		var number=$("#buy").val();
//		
//		console.log(number)
//	

//		(function(){
//		var n=	$("#buy").val()
//		var num=parseInt(n);
//		return num+1
//		})()
//		
//		console.log(num)
		
		var cloneImg = $(this).parents(".glass-left").find(".shopimg").clone().css({width:50,height:50});
					cloneImg.fly({
						start : {
							top : e.clientY,
							left : e.clientX
						},
						end :{
							top : $("#buy").offset().top,
							left : $("#buy").offset().left,
							width:0,
							height:0
						},
						autoPlay : true,
						onEnd : function(){
							$("#buy").val(function(index,v){
						//"购物车（0）"
						var pattern = /(\d+)/;
						var num = parseInt(v.match(pattern)[1]);
						return "购物车(" + (num + 1) + ")";
					});
					cloneImg.remove();
						}
					})
					
					
					
					
		
	})
});


		function convertCartStrToObj(cartStr){
			if(!cartStr){
				return{};
			}
			var goods=cartStr.split(":");
			var obj={};
			for(var i=0;i<goods.length;i++){
				var data=goods[i].split(",");
				
				obj[data[0]]={
					src:data[1],
					name:data[2],
					serial:data[3],
					magic:data[4],
					color:data[5],
					size:data[6],
					num:data[7],
					shoppe:data[8],
					price:data[9]
				}
			}
			return obj;
		}
		function convertObjToCartStr(obj){
			
			var cartStr="";
			for(var id in obj){
				if(cartStr){
					cartStr+=":";
				}
				
				cartStr+=id+","+
	obj[id].src+","+obj[id].name+","+obj[id].serial+","+obj[id].magic+","+obj[id].color+","+obj[id].size+","+obj[id].num+","+obj[id].shoppe+","+obj[id].price;
					
			}
			return cartStr;
		}
		
	function loadCart(){
		var cartStr=$.cookie("cart")?$.cookie("cart"):"";
		var cartObj=convertCartStrToObj(cartStr);
		
		var total=0;
		for(var id in cartObj){
			total+=cartObj[id].num;
			
		}
		
		$("#buy").val("购物车(" + total + ")");
		//$("#buy").val(total)
	}

		
		
		
		

		
	
	$(".glass-right .i1").click(function(){
			$(this).parent().siblings("ul").children().eq(0).animate({
				"top":554
			})
			$(this).parent().siblings("ul").children().eq(1).animate({
				"top":830
			})
			$(this).parent().siblings("ul").children().eq(2).animate({
				"top":0
			})
			$(this).parent().siblings("ul").children().eq(3).animate({
				"top":276
			})
	})
	$(".glass-right .i2").click(function(){
//			$(this).parent().siblings("ul").children().animate({
//				"top":0
			})
	
	
	
	
	$(".main-center .tab1 .ul-img li").mouseenter(function(){
		$(this).children().children().eq(1).css("display","block")
	})
	$(".main-center .tab1 .ul-img li").mouseleave(function(){
		$(this).children().children().eq(1).css("display","none")
	})
	
	
	$(".main-center  .main-tab li").click(function(){
		var ind=$(this).index()
		$(this).removeClass("slected").eq(ind).addClass("selected");
		$(".main-center .tab").fadeOut().eq(ind).fadeIn()
//		console.log($(this).parent().siblings())
//		$(this).parent().removeClass("checked").eq(ind).addClass("checked");
		
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


	
	

}