let img =document.querySelector('.img');

let container =document.querySelector('.container');

let body =document.querySelector('body');


function phones (phone){
    img.src=phone;
}

function colors (color){
    container.style.background = color;
}
function circls (circl){
    body.style.background = circl;
}