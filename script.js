//fondo matrix
let canvas = document.querySelector("canvas");

let ctx = canvas.getContext("2d");
let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;
let str = "KCATS OBLIB KCATS OBLIB KCATS OBLIB KCATS OBLIB ";
let matrix = str.split("");
let font = 5;
let col = width / font;
let arr = [];

for(let i = 0; i < col; i++) {
    arr[i] = 1;
}

const draw = () => {
    ctx.fillStyle = "rgba(0,0,0,0.05)";
    ctx.fillRect(0, 0, width, height);
    ctx.fillStyle = "#4B0082";
    ctx.font = `$(font)px system-iu`;

    for(let i = 0; i < arr.length; i++) {
        let txt = matrix[Math.floor(Math.random() * matrix.length)];
        ctx.fillText(txt, i * font, arr[i] * font);

        if(arr[i] * font > height && Math.random() > 0.975) {
            arr[i] = 0;      
        }

        arr[i]++;
    }
}

setInterval(draw, 50);

window.addEventListener("resize", () => location.reload());


//boton vibratorio
function vibrate() {
    if(navigator){
        /* navigator.vibrate([2000, 1000, 3000, 10000, 3000, 1000, 2000, 1000, 2000, 1000, 2000]) */
        navigator.vibrate([200, 100, 200, 100, 700, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 
        1200, 200, 100, 200, 100, 700, 100, 200, 100, 200, 1200, 200, 100, 200, 100, 700, 100, 200, 100, 200, 
        100, 200, 100, 700, 100, 700, 100, 200, 100, 200, 100, 700, 100, 200, 100, 700, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 1200,
        700, 100, 200, 100, 1200, 200, 100, 700, 100, 200, 100, 200, 100, 200, 100, 700, 1200, 200, 100, 
        700, 100, 700, 100, 200, 100, 200, 100, 700, 100, 200, 100, 700, 100, 700, 100, 700, 100, 700, 100, 700, 
        100, 200, 100, 200, 100, 700, 100, 200, 100, 200, 100, 700, 100, 700, 100, 700, 100, 200, 100, 700, 100, 700, 100, 
        200, 100, 700, 100, 200, 100, 200, 100, 200, 100, 700, 100, 700, 100, 700, 100, 700, 100, 200, 100])
    }
}

/*const boton = document.getElementById("info");

boton.addEventListener("click", function(){
    alert(". .-. . ... / . .-.. / ..-. ..- - ..- .-. --- / -.. . / .-.. .- / .--. .-. --- --. .-. .- -- .- -.-. .. --- -.");
});*/

function copiar(){
    var origen = document.getElementById('target1');
    var destino = document.getElementById('target2');
    var copyFrom = document.createElement("textarea");
    copyFrom.textContent = origen.value;
    var body = document.getElementsByTagName('body')[0];
    body.appendChild(copyFrom);
    copyFrom.select();
    document.execCommand('copy');
    body.removeChild(copyFrom);
    destino.focus();
    document.execCommand('paste');
  }