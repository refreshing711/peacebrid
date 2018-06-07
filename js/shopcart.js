onload=function(){
	
	$(function(){
		var cartStr=$.cookie("cart")?$.cookie("cart"):"";
		
		if(!cartStr){
			$(".blank").css({
				display:"block"
			});
		}else{
			var cartObj=convertCartStrToObj(cartStr);
			
			for(var id in cartObj){
				var good=cartObj[id];
				var str='<ul class="goodInfo" data-good-id="'+id+'">' +
				'<li><img src="'+good.src+'"/></li>'+
				'<li>'+good.name+'</li>'+
				'<li>'+good.serial+'</li>'+
				'<li>'+good.magic+'</li>'+
				'<li class="num">'+'<a href="javascript:;" class=minus>-</a>'+
				'<input type="text" value="'+good.num+'" />'+ 
			'<a href="javascript:;" class="plus">+</a>'+
			'</li>'+
		'<li>'+good.color+'</li>'+
		'<li>'+good.size+'</li>'+
		'<li>'+good.shoppe+'</li>'+
		'<li>'+good.price+'</li>'+
		'<li class="total">'+good.num*good.price+'</li>'+
		'<li><a href="javascript:;" class="del">删除</a></li>'+
		'</ul>'   ;
		
		$(str).appendTo(".cartList");
		
			}
		$(".goodInfo a.del").click(function(){
			var id=$(this).parents('.goodInfo').remove().attr("data-good-id");
			var cartStr=$.cookie("cart")?$.cookie("cart"):"";
			var cartObj=convertCartStrToObj(cartStr);
			
			delete cartObj[id];
			
			$.cookie('cart',convertObjToCartStr(cartObj),{
				expires:7,
				path:"/"
			});
		})
			
			
			
			
		//给增加按钮添加事件
					$(".goodInfo a.plus").click(function() {

						var id = $(this).parents('.goodInfo').attr("data-good-id");

						var cartStr = $.cookie("cart") ? $.cookie("cart") : "";
						var cartObj = convertCartStrToObj(cartStr);
						cartObj[id].num += 1;
						//将页面上显示的数量加1
						$(this).siblings("input").val("" + cartObj[id].num);
						//更新页面上的小计
						$(this).parent().siblings('.total').html(cartObj[id].num * cartObj[id].price + "");
						//将信息放回cookie
						$.cookie('cart', convertObjToCartStr(cartObj), {
							expires: 7,
							path: "/"
						});
					});
					//给减按钮添加点击事件
					$(".goodInfo a.minus").click(function(){
						var id = $(this).parents('.goodInfo').attr("data-good-id");
						var cartStr = $.cookie("cart") ? $.cookie("cart") : "";
						var cartObj = convertCartStrToObj(cartStr);
						if(cartObj[id].num > 1){ //商品数量减少不能少于1
							cartObj[id].num -= 1;
							//将页面上显示的数量减1
							$(this).siblings("input").val("" + cartObj[id].num);
							//更新页面上的小计
							$(this).parent().siblings('.total').html(cartObj[id].num * cartObj[id].price + "");
							//将信息放回cookie
							$.cookie('cart', convertObjToCartStr(cartObj), {
								expires: 7,
								path: "/"
							});
						}
						
						
					});
			
			//改数量的input绑定一个blur事件
					$(".goodInfo li.num input").blur(function(){
						var id = $(this).parents('.goodInfo').attr("data-good-id");
						var cartStr = $.cookie("cart") ? $.cookie("cart") : "";
						var cartObj = convertCartStrToObj(cartStr);
						//判断用户输入是否合法
						var pattern = /^\d+$/;
						if(!pattern.test($(this).val())){
							cartObj[id].num = 1;
							$(this).val("1");
						}else{
							//修改一下数量
						cartObj[id].num = parseInt($(this).val());
						}
						
						
							$(this).siblings("input").val("" + cartObj[id].num);
							//更新页面上的小计
							$(this).parent().siblings('.total').html(cartObj[id].num * cartObj[id].price + "");
							//将信息放回cookie
							$.cookie('cart', convertObjToCartStr(cartObj), {
								expires: 7,
								path: "/"
							});
					})
			
			
		}
	
	});
	
	function convertCartStrToObj(cartStr){
			if(!cartStr){
				return{};
			}
			
			var goods=cartStr.split(":");
			var obj={};
			for(var i=0; i<goods.length; i++){
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
	
	
	
	function converObjTocartStr(obj){
		
		
		var cartStr="";
		for(var id in obj){
			if(cartStr){
				cartStr+=":";
			}
			cartStr+=id+","+obj[id].src+","+obj[id].name+","+obj[id].serial+","+obj[id].magic+","+obj[id].color+","+obj[id].size+","+obj[id].num+","+obj[id].shoppe+","+obj[id].price;
			
		}
		return cartStr;
	}
	
	
	
	function loadCart(){
				var cartStr = $.cookie("cart") ? $.cookie("cart") : "";
					var cartObj = convertCartStrToObj(cartStr);
					//获取到购物车中所有商品的数量
					var total = 0;
					for(var id in cartObj){
						total += cartObj[id].num;
					}
					$("#buy").html("购物车(" + total + ")");
			}
	
	
	
	
}
