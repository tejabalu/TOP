var picPaths = [
    "",
    "/images/icons-01.svg",
    "/images/icons-02.svg",
    "/images/icons-03.svg",
];
var imgO = new Array();
var curPic = 0;
let flag = true;
for (i = 1; i <= picPaths.length; i++) {
    imgO[i] = new Image();
    imgO[i].src = picPaths[i];
}

function swapImage() {
    if (!flag) {
        return;
    }
    curPic = ++curPic > picPaths.length - 1 ? 1 : curPic;
    imgCont.src = imgO[curPic].src;
    setTimeout(swapImage, 500);
}

imgCont = document.getElementById("yournemesisid");
swapImage();

function gameresult(playerchoice, computerchoice) {
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
    computerchoice = Math.round(Math.random() * 2.5 + 0.5);
    computerchoiceimg(computerchoice);
    return gameresult(1, computerchoice);
}

function playerchoice2() {
    computerchoice = Math.round(Math.random() * 2.5 + 0.5);
    computerchoiceimg(computerchoice);
    return gameresult(2, computerchoice);
}

function playerchoice3() {
    computerchoice = Math.round(Math.random() * 2.5 + 0.5);
    computerchoiceimg(computerchoice);
    return gameresult(3, computerchoice);
}

function computerchoiceimg(computerchoice) {
    flag = false;
    imgCont.src = imgO[computerchoice].src;
}

let wincount = 0;
let losscount = 0;

document.getElementById("wins").textContent = `Wins: ${wincount}`;
document.getElementById("losses").textContent = `Losses: ${losscount}`;

function win() {
    wincount++;
    document.getElementById("wins").textContent = `Wins: ${wincount}`;
    document.getElementById("result").textContent = "You won!";
}

function loose() {
    losscount++;
    document.getElementById("losses").textContent = `Losses: ${losscount}`;
    document.getElementById("result").textContent = "You lost!";
}

function draw() {
    document.getElementById("result").textContent = "Draw!";
}

async function resumescroll() {
    flag = true;
    swapImage();
}

let idleTimer = null;
let idleState = false;
let swaptimeout = null;
let rangevalue = 0;

function showresult(time) {
    flag = false;
    clearTimeout(idleTimer);
    if (idleState == true) {
        $("#result").removeClass("inactive");
    }
    idleState = false;
    idleTimer = setTimeout(function () {
        $("#result").addClass("inactive");
        idleState = true;
    }, time);
    clearTimeout(swaptimeout);
    swaptimeout = setTimeout(() => {
        flag = true;
        swapImage();
    }, 3000);
    rangevalue = losscount - wincount;
    console.log(rangevalue);
    document.getElementById("range").value = rangevalue;
}

$(".uimages").click(function () {
    showresult(2000);
    showrange();
});

function showrange(wincount, losscount) {
    rangevalue = losscount - wincount;
    document.getElementsByClassName("slider").value = "rangevalue";
}
