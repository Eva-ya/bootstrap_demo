$(function(){
	setInterval(function(){
		$(".content_a .inner_box img").eq(0).fadeOut(2000,
			function(){
				$(this).appendTo($(this).parent());
				$(this).css("display","block");
			});
	},3000); 
	var he_a=$("#about").offset().top;
	console.log(he_a)
	$(".content_a .container img.down").click(function(){
		$("body").animate({
			scrollTop:he_a
		});
	})
	$(document).scroll(function(){
		var doc_he=$(this).scrollTop();
		if(doc_he>0){
			$("nav.navbar-fixed-top").addClass("navbar_brand");
			$(".navbar-logo").addClass("navbar_logo");
			$(".navbar-toggle .icon-bar").css("background","white");
			$("#bs-example-navbar-collapse-1 ul a").css("color","white");
			$("#bs-example-navbar-collapse-1 ul").stop().animate({
				marginTop:"10px"
			},300)
			
		} 
		else{
			$("nav.navbar-fixed-top").removeClass("navbar_brand");
			$(".navbar-logo").removeClass("navbar_logo");
			$(".navbar-toggle .icon-bar").css("background","black");
			$("#bs-example-navbar-collapse-1 ul a").css("color","black");
			$("#bs-example-navbar-collapse-1 ul").stop().animate({
				marginTop:"30px"
			},300)
		} 
		
	})
	var flag_nav=true;
	$(".navbar-header button").click(function(){
		if(flag_nav){
			$("#bs-example-navbar-collapse-1").css("color","white");
			$(".container-fluid").addClass("navbar_brand");
			$(".navbar-toggle .icon-bar").css("background","white");
			$(".navbar-brand").addClass("navbar_brand");
			$("#navLogo").addClass("navbar_logo");
			$("#bs-example-navbar-collapse-1 ul a").css("color","white");
			$("#bs-example-navbar-collapse-1").css("background","black");
			$("#bs-example-navbar-collapse-1 ul").stop().animate({
				marginTop:"10px"
			},300)
		
		}else{
			$("#bs-example-navbar-collapse-1").css("color","black");
			$(".container-fluid").removeClass("navbar_brand");
			$(".navbar-toggle .icon-bar").css("background","black");
			$(".navbar-brand").removeClass("navbar_brand");
			$("#navLogo").removeClass("navbar_logo");
			$("#bs-example-navbar-collapse-1 ul a").css("color","black");
			$("#bs-example-navbar-collapse-1").css("background","transparent");
			$("#bs-example-navbar-collapse-1 ul").stop().animate({
				marginTop:"30px"
			},300)
			}
		flag_nav=!flag_nav;
	})	
	
})
