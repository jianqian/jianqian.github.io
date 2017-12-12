/**
 * Created by lenovo on 17/10/9 009.
 */
var tbody=document.querySelector(".tb");
tbody.addEventListener("click",function(e){
    //单价加减
    var target= e.target;
    if (target.className==="plus"){
        var next=target.nextSibling;
        var nexthtml=next.innerHTML;
        if (Number(nexthtml)===0){

        }else {
            next.innerHTML=Number(nexthtml)-1;
        }
    }else if(target.className==="add"){
        var previous=target.previousSibling;
        var previoushtml=previous.innerHTML;
        previous.innerHTML=Number(previoushtml)+1;
    }

    //苹果合计
    var priceOne=(document.querySelector("#priceOne")).innerHTML;
    var first=(document.querySelector("#first")).innerHTML;
    var sumFirst=document.querySelector("#sumFirst");
    sumFirst.innerHTML=Number(priceOne)*Number(first);


    //小米合计
    var priceSecond=(document.querySelector("#priceSecond")).innerHTML;
    var second=(document.querySelector("#second")).innerHTML;
    var sumSecond=document.querySelector("#sumSecond");
    sumSecond.innerHTML=Number(priceSecond)*Number(second);

    //华为合计
    var priceThird=(document.querySelector("#priceThird")).innerHTML;
    var third=(document.querySelector("#third")).innerHTML;
    var sumThird=document.querySelector("#sumThird");
    sumThird.innerHTML=Number(priceThird)*Number(third);

    //总的合计
    var sumsum=document.querySelector("#sumsum");
    sumsum.innerHTML=Number(sumFirst.innerHTML)+Number(sumSecond.innerHTML)+Number(sumThird.innerHTML);
})