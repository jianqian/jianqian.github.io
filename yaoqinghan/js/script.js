var swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});



//音乐
var mp3 = document.querySelector("#mp3");
var mp3btn=document.querySelector("#mp3btn");
mp3btn.addEventListener("click",function(){
    if(mp3.paused)
    {
        mp3.play();
        mp3btn.style.animationPlayState="running"
    }else{
        mp3.pause();
        mp3btn.style.animationPlayState="paused"
    }
})