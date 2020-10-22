
$(window).scroll(function(){
    if($("#menu").offset().top > 95){
        $("#menu").addClass("nav2");
    }else{
        $("#menu").removeClass("nav2");
    }
});

let animado = document.querySelectorAll(".animado");
function mostrarScroll(){
    let scrollTop = document.documentElement.scrollTop;
    for (var i=0; i < animado.length; i++){
        let alturaAnimado = animado[i].offsetTop;
        let tamanoPantalla = window.innerHeight/1.3;
        // console.log(tamanoPantalla);
        if(alturaAnimado - tamanoPantalla <scrollTop){
            animado[i].style.opacity = 1;
            animado[i].classList.add("mostrarArriba");
        }
    }
}
window.addEventListener('scroll', mostrarScroll);

// let loading = document.querySelectorAll(".loading");
// for(var i=0; i<loading.length; i++){
//     loading[i].addEventListener("load", function(){
//         loading[i].classList.add("figura");
//         loading[i].classList.add("style-1")
//         console.log("loading");
//     });
// }

window.addEventListener('load', function(){
    console.log("loading");
    // $(".loader").addClass("loader-close");
    $("#loader").removeClass("lds-spinner");
    $("#loader").removeClass("loader");
})
