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






}