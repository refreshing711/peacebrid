define(function(){
	return {
		drag : function(id){
			let $ele = $('#' + id);
			$ele.mousedown(function(evt){
				var disX = evt.pageX - $ele.offset().left;
				var disY = evt.pageY - $ele.offset().top;
				$(document).mousemove(function(evt){
					$ele.css({left : evt.pageX - disX,top : evt.pageY - disY});
				})
				$(document).mouseup(function(){
					$(this).off();
				})
				return false;
			})
		}
	}
})
