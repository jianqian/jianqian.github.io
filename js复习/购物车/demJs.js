var tbody = document.querySelector(".tb");
tbody.addEventListener("click",function(e){
	var target = e.target;
	if(target.className==="plus"){
		var next = target.nextSibling;
		var nextHtml = next.innerHTML;
		if(Number(nextHtml)===0)
		{

		}else{
	    	next.innerHTML = Number(nextHtml)-1;

		}
	}else if(target.className==="add")
	{
		var previous = target.previousSibling;
		var preiousHtml = previous.innerHTML;
		previous.innerHTML = Number(preiousHtml)+1;
	}
    var priceOne = (document.querySelector("#priceOne")).innerHTML;
    var first = (document.querySelector("#first")).innerHTML;
    var sumFrist = document.querySelector("#sumFrist");
    sumFrist.innerHTML = Number(priceOne)*Number(first);

    var priceSecond = (document.querySelector("#priceSecond")).innerHTML;
    var second = (document.querySelector("#second")).innerHTML;
    var sumSecond = document.querySelector("#sumSecond");
    sumSecond.innerHTML = Number(priceSecond)*Number(second);

    var sumsum = document.querySelector(".sumsum");
    sumsum.innerHTML = Number(sumSecond.innerHTML)+Number(sumFrist.innerHTML);
})