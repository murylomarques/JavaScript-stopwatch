/* Stopwatch Variables */
var time ;
var hor = 0;
var min = 0;
var seg = 0;
var mili = 0
/*---------------------------------------*/

/*Passing the onclick function to the buttons*/
document.container.sta.onclick = () =>  start();
document.container.stp.onclick = () =>  stop();
document.container.brk.onclick = () =>  reset();
/*----------------------------------------------*/ 

/* Functions responsible for time  */
function start(){
    stop();
    time = setInterval(() => { watch() }, 10)
}
function stop(){
    clearInterval(time);
}
function reset(){
    stop()
    time = 0
    hor = 0;
    min = 0;
    seg = 0;
    document.getElementById('hora').innerText = '00'
    document.getElementById('minu').innerText = '00'
    document.getElementById('se').innerText = '00'
}

function watch(){
    if ((mili+=1) == 99) {
        mili = 0;
        seg++;
    }
    if (seg == 60) {
        seg = 0;
        min++;
    }
    if (min == 60) {
        min = 0;
        hor++;
    }
    document.getElementById('Hour').innerText = retonadata(hor)
    document.getElementById('minutos').innerText = retonadata(min)
    document.getElementById('seconds').innerText = retonadata(seg)
    
}
function retonadata(x){
    if( x < 10){
        return `0${x}`
    }else{
        return x
    }
}
/*--------------------------------------------------------------------------*/