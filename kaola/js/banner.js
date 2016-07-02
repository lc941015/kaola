$('.banner').hover(function() {
	$(this).find('.banner_contents').show();
}, function() {
	$(this).find('.banner_contents').hide();
})


function moveImg() {
	time = setInterval(function() {
		console.info($('.banner_main li'));
		$('.banner_main li').eq(index).fadeTo(500, 0.25, function() {
			index++;
			if (index > 6) {
				index = 0;
			}
			$(this).hide();
			$(this).css({
				opacity: 1
			});
			$('.banner_main li').eq(index).fadeIn(500);
		});
	}, 3000)
}

var index = 0;
var index2;
var time
moveImg();
$('.banner_contents_img img').hover(function() {
	clearInterval(time);
	$(this).css({
		opacity: '1'
	});

	index2 = $(this).parents().parents().index();
	$('.banner_main li').eq(index).fadeTo(500, 0.25, function() {
		$(this).hide();
		$(this).css({
			opacity: 1
		});
		$('.banner_main li').eq(index2).fadeIn(500);
	});
}, function() {
	$(this).css({
		opacity: '0.4'
	});
	index = $(this).parents().parents().index();
	moveImg();
})


//var index=0
//$('#right').click(function(){
//	if(index<7){
//	$('.banner_contents_img').children().eq(index).hide();
//	index++;
//	}
//})
//$('#left').click(function(){
//	if(index>0){
//	index--;
//	$('.banner_contents_img').children().eq(index).show();
//	}
//})