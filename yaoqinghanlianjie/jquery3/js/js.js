$(function(){
	$("#skin li").click(function(){
		var i=$(this).index();
		$(this).addClass("selected").siblings("li").removeClass("selected");
		$("#cssfile").attr("href","styles/skin/skin_"+i+".css")
	})//换肤

	$(".nav li").hover(function(){
		$(this).find(".jnNav").slideDown(700);
	},function(){
		$(this).find(".jnNav").slideUp(700);
	})//下拉菜单

	$(function(){
		$(".jqzoom").jqzoom();
	})//放大镜（有插件）

	$(".tab_menu ul li").click(function(){
		$(this).addClass("selected").siblings("li").removeClass("selected");
		var n=$(this).index();
		$(".tab_box div").eq(n).show().siblings("div").hide();
	})//选项卡

	$(".pro_size ul li").click(function(){
		$(this).addClass("cur").siblings("li").removeClass("cur");
		var t=$(this).text();
		$(".pro_size strong").text(t);
	})//尺寸变化

	$(".color_change ul li img").click(function(){
		$(this).addClass("hover").parent().siblings().find("img").removeClass("hover");
		var imgSrc=$(this).attr("src");//完整的路径
		var i=imgSrc.lastIndexOf(".");//.的索引
		var newImgSrc=imgSrc.substring(0,i);//前半截的路径
		var jpgImgSrc=imgSrc.substring(i);//.jpg

		$("#bigImg").attr("src",newImgSrc+"_one_small"+jpgImgSrc);
		var color=imgSrc.substring(15,i);
		$(".imgList li").hide();
		$(".imgList").find(".imgList_"+color).show();
		$(".imgList").find(".imgList_"+color).find("a").click();
		var t=$(this).attr("alt");
		$(".color_change strong").text(t);
	})//放大镜变色效果

	$("#num_sort").change(function(){
		var t=$(this).val();
		$(".pro_price strong").text(200*t);
	})//总计

	$(".rating li a").click(function(){
		var c=$(this).parent().attr("class");
		$(this).parent().parent().attr("class","rating "+c+"star");
	})
})