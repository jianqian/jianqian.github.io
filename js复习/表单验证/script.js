//home

var  lis=document.querySelectorAll(".btn");    //querySelectorAll找到全部
 var  divs=document.querySelectorAll(".app"); //找到全部的app
        
    for(var i=0;i<lis.length;i++){//给所有li绑定noclick事件
         lis[i].index=i;
         lis[i].onclick=function(){
            
             for(j=0;j<lis.length;j++){
                lis[j].className="selected";
                divs[j].style.display="none";
             }
            lis[this.index].className="selected";
            divs[this.index].style.display="block";
         }
    };

        $(document).ready(function(){
			$(".img1").click(function(){
				$(".img0").attr("src","img/maldives_1.jpg");
			})
			$(".img2").click(function(){
				$(".img0").attr("src","img//maldives_2.jpg");
			})
			$(".img3").click(function(){
				$(".img0").attr("src","img//maldives_3.jpg");
			})
			$(".img4").click(function(){
				$(".img0").attr("src","img//maldives_4.jpg");
			})
		});


//contain
function checkName(){
				var a=document.getElementById("name").value;
				if(a==""){
					document.getElementById("nameSpan").innerHTML="<span>姓名不能为空</span>";
				}else if(a.length<3){
					document.getElementById("nameSpan").innerHTML="姓名不能少于3位";
				}else{
					document.getElementById("nameSpan").innerHTML="正确";
				}
			};

function checkText(){
				var a=document.getElementById("email").value;
				var b=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
				if (b.test(a)){
					document.getElementById("emailSpan").innerHTML="正确";
				}else{
					document.getElementById("emailSpan").innerHTML="不正确";
				}
			}

 function btn(){
        var name=document.getElementById("nameSpan");
        var email=document.getElementById("emailSpan");
        if(name.innerHTML=="正确"&& email.innerHTML=="正确"){
            var h11=document.querySelector("form");
            var form1=document.querySelector("fieldset");
            h11.style.display="none";
            form1.style.display="none";
            var div1=document.querySelector("#main-img");
            div1.style.display="block";

        }else {
            return false;
        }

    }

//about
var aboutli=document.querySelectorAll(".about-li");
var aboutdiv=document.querySelectorAll(".about-div");
for (var i=0;i<aboutli.length;i++){
    aboutli[i].index=i;
    aboutli[i].onclick=function(){
        for (var j=0;j<aboutli.length;j++){
            aboutli[j].className="";
            aboutdiv[j].style.display="none";
        }
        aboutli[this.index].className="active";
        aboutdiv[this.index].style.display="block";
    }
}