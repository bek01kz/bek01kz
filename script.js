 function big(element){
	element.style.fontSize = "18px";
}
function small(element){
	element.style.fontSize = "15px";
}

function load(){
	$(".header").animate({opacity:'1'}, "slow");
	$(".rl").animate({opacity:'1'}, "slow");
	$(".top5").animate({opacity:'1'}, "slow");
	$(".divtop5").animate({opacity:'1'}, "slow");
	$("#id1").animate({top: '350px'},"slow");
	$("#id2").animate({left: '450px'},"slow");
}
function popup(){
   	document.querySelector(".popup").style.display = "flex";
    $(".popup").animate({opacity: "1"}, "slow");
    document.body.style.overflow = "hidden";  
}

function close_popup(){
    $(".popup").animate({opacity: "0"}, "slow");
    document.querySelector(".popup").style.display = "none";
    document.body.style.overflow = "scroll";
    
}


      