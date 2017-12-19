$(".game_sm").on("click",function(){
	$(".yxsm").show()
	setTimeout(function(){
		$(".yxsm").hide()
	},4000)	
})
setTimeout(function(){
	$(".yxsm").hide()
},4000)	
$(".tanchahg-father-x").on("click",function(){
	$(".yxsm").hide()
})
$(".tanchahg-father-x-two").on("click",function(){
	$(".yxsm").hide()
})

$(".chongwan").on("click",function(){
	$(".cxw").show()
})
$(".tanchahg-fathe-right").on("click",function(){
	$(".cxw").hide()
})
$(".tanchahg-fathe-left").on("click",function(){
	$(".cxw").hide()
})

