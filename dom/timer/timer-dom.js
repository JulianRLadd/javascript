console.log("time to start the timer!");
let pause = false;
let tens = 0;
let ones = 0;
let mins = 0;

function timer(){
    tens = tens;
    ones = ones;
    mins = mins;
    const timer = setInterval(()=>{
        document.querySelector('p').innerHTML=`${mins}:${tens}${ones}`;
        ones++;
        if (ones > 9){
            ones=0;
            tens+=1;
        }
        if (pause){
            clearInterval(timer)
        }
        if(tens>5){
            tens=0;
            mins+=1;
        }
    }, 1000);
}
function commmence(){
    pause = false
    ifReset = false
    timer()
}

function freeze(){
    pause = true;
}

function resetter(){
    clearInterval(timer)
    ones = 0;
    tens= 0;
    mins = 0;
    document.querySelector('p').innerHTML="0:00";
}
const start = document.querySelector('#start')
start.addEventListener("click",commmence)
const stop = document.querySelector('#stop')
stop.addEventListener("click",freeze)
const reset = document.querySelector('#reset')
reset.addEventListener("click", resetter)
