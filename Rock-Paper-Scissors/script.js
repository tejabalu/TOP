var picPaths = ['','/images/icons-01.svg','/images/icons-02.svg','/images/icons-03.svg'];
var imgO = new Array();
var curPic = 0;
let flag = true;
for(i=1; i <= picPaths.length; i++) {
    imgO[i] = new Image();
    imgO[i].src = picPaths[i];
}

const timer = ms => new Promise(res => setTimeout(res, ms))

function swapImage() {
    if (!flag) {
        let tout = setTimeout(resumescroll, 3000);
        return;
    }
    curPic = (++curPic > picPaths.length-1)? 1 : curPic;
    imgCont.src = imgO[curPic].src;
    setTimeout(swapImage,500);
}

imgCont = document.getElementById('yournemesisid');
swapImage();


function gameresult (playerchoice, computerchoice) {
    switch (playerchoice) {
        case 1:    
            if (computerchoice == 1) {
                draw();  
            } else if (computerchoice == 2) {
                loose();    
            } else {
                win();    
            }
            break;
        case 2:
            if (computerchoice == 2) {
                draw();  
            } else if (computerchoice == 3) {
                loose();    
            } else {
                win();
            }
            break;
        case 3:
            if (computerchoice == 3) {
                draw();  
            } else if (computerchoice == 1) {
                loose();    
            } else {
                win();
            }
            break;
    }
}

function playerchoice1() {
    computerchoice = Math.round(Math.random()*(2.5)+0.5);
    computerchoiceimg(computerchoice);
    return gameresult(1, computerchoice)
}

function playerchoice2() {
    computerchoice = Math.round(Math.random()*(2.5)+0.5);
    computerchoiceimg(computerchoice);
    return gameresult(2, computerchoice)
}

function playerchoice3() {
    computerchoice = Math.round(Math.random()*(2.5)+0.5);
    computerchoiceimg(computerchoice);
    return gameresult(3, computerchoice)
}

function computerchoiceimg(computerchoice) {
    flag = false;
    imgCont.src = imgO[computerchoice].src;
}

let wincount = 0;
let losscount = 0;
document.getElementById("wins").textContent = `Wins: ${wincount}`
document.getElementById("losses").textContent = `Losses: ${losscount}`

function win() {
    document.getElementById("wins").textContent = `Wins: ${wincount}`
    document.getElementById("result").textContent = "You won!"
    wincount++;
}

function loose() {
    document.getElementById("losses").textContent = `Losses: ${losscount}`
    document.getElementById("result").textContent = "You lost!"
    losscount++;
}

function draw() {
    document.getElementById("result").textContent = "Draw!"
}



async function resumescroll() {
    flag = true;
    swapImage();
}

// window.setTimeout("closeresult()", 500);

// function closeresult(){
//     document.getElementById("result").style.display = "none";
// }