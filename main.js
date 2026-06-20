let img = document.querySelector('.imge');
let container = document.querySelector('.container');


function Phones(src){
    img.src = src;
}

function Colors(color){
    container.style.background = color;
}

function Hover(color){
    document.documentElement.style.setProperty('--theme-color', color);
}