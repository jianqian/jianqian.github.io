var max=5;
var now=5;
function show(){
	var next=now+1;
	if(next==max+1){
	next=1;
	}
	document.getElementById("pic"+next).style.display="block";
	document.getElementById("pic"+now).style.display="none";
	if(now==max){
		now=1;
	}else{
		now++;
	}
	setTimeout("show()",1000);
}
function checkName(){
				var a=document.getElementById("name").value;
				if(a==""){
					document.getElementById("nameSpan").innerHTML="<span>name cannot empty</span>";
				}else if(a.length<3){
					document.getElementById("nameSpan").innerHTML="name cannot under three place";
				}else{
					document.getElementById("nameSpan").innerHTML="correct";
				}
			}

function checkEmile(){
				var a=document.getElementById("emile").value;
				var b=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
				if (b.test(a)){
					document.getElementById("emailSpan").innerHTML="correct";
				}else{
					document.getElementById("emailSpan").innerHTML="incorrect";
				}
			}
