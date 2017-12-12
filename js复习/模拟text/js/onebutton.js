function $(selector){
    if (selector instanceof  Object){
        $.prototype.dom=selector;
    }else {
        $.prototype.dom=document.querySelector(selector);
    }
    return $.prototype;
}
$.prototype.click=function(fun){
    this.dom.onclick=fun;
}
$.prototype.text=function(){
    return this.dom.innerHTML;
}

