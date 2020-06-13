$(document).ready(function(){
	$(".btn").one("click", function(){
    	var randomValue1 = Math.round(Math.random()*900);
		$(".car1").animate({left:randomValue1+'px'})
		var randomValue2 = Math.round(Math.random()*900);
		$(".car2").animate({left:randomValue2+'px'})

		if(randomValue1>randomValue2){
			$("#car1").delay("slow").fadeIn();
		}
		else if(randomValue1<randomValue2){
			$("#car2").delay("slow").fadeIn()
		}
  });
})




