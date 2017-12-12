
function $(selector){
    //如果$在调用的时候前面没有new，那么这个$方法里的this是window对象；
    //如果$在调用的时候前面有new，那么$方法中的this是实例；
    //this.dom=document.querySelector(selector);


    //console.log(this);
    //var obj= $.prototype.init(selector);
    //return obj;

    $.prototype.dom=document.querySelector(selector);
    return $.prototype;
}

//
//
//$.prototype.init=function(selector){
//    this.dom=document.querySelector(selector);
//    console.log(this);
//    return this;
//}
//


$.prototype.click=function(fun){
    this.dom.onclick=fun;
    console.log(fun);
}