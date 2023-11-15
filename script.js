var crsr = document.querySelector(".custom-cursor");
var bubble = document.querySelector("#bottom-box");
let timer = 20;
let score = 0;
let hitTarget = Math.floor(Math.random()*10);

document.querySelector(".main").addEventListener('mousemove',function(dets){
    crsr.style.top = dets.y+"px";
    crsr.style.left = dets.x+"px";
});

bubble.addEventListener('click', function(dets){
    var clickedNum = Number(dets.target.textContent);
    if(clickedNum === hitTarget){
        increaseScore();
        makeBubble();
        getHitTarget();
    }
});

function increaseScore(){
    score += 10;
    document.querySelector("#score").textContent = score; 
}

function getHitTarget(){
    hitTarget = Math.floor(Math.random()*10);
    document.querySelector("#hit").textContent = hitTarget;
}

function runTimer(){
    var timerInterval =  setInterval(() => {
        if(timer>0){
            timer--;
            document.querySelector("#time").textContent = timer;
        }else{
            clearInterval(timerInterval);
            bubble.innerHTML = `
            <div style="display:flex; align-items:center; justify-content:center; flex-direction:column;">
            <h2>Game Over</h2>
            <h2>Total Score: ${score}</h2>
            </div>
            `
            
        }
    }, 1000);
}

function makeBubble(){
    var clutter = "";
    for(let i=1;i<=216;i++){
        let rand = Math.floor(Math.random()*10);
        clutter += `<div class="bubble">${rand}</div>`;
    }
    bubble.innerHTML = clutter;
}

makeBubble();
runTimer();
getHitTarget();