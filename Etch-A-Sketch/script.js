document.getElementById("etchcontainer").style.cursor = "url(1.png) 0 25, auto";

let bgcolor = document.getElementById("customcolor").value;

function color(e) {
    switch (e) {
        case 1:
            document
                .getElementById("customcolor")
                .addEventListener("change", watchColorPicker, false);

            function watchColorPicker(event) {
                bgcolor = `${event.target.value}`;
            }
            console.log("test1");
            eventlistener();
            break;
        case 2:
            bgcolor = document.getElementById("customcolor").value;

            console.log("test1");
            eventlistener();
            document.getElementById("etchcontainer").style.cursor =
                "url(1.png) 0 25, auto";
            break;
        case 3:
            blendcolor();
            document.getElementById("etchcontainer").style.cursor =
                "url(2.png) 0 25, auto";
            break;
        case 4:
            lightenevent();
            document.getElementById("etchcontainer").style.cursor =
                "url(3.png) 0 25, auto";
            break;
        case 5:
            darkenevent();
            document.getElementById("etchcontainer").style.cursor =
                "url(4.png) 0 25, auto";
            break;
        case 6:
            erase();
            document.getElementById("etchcontainer").style.cursor =
                "url(5.png) 0 25, auto";
            break;
        case 7:
            clear();
            document.getElementById("etchcontainer").style.cursor =
                "url(1.png) 0 25, auto";
            break;
        case 8:
            bgcolor = "rgb(22,62,140)";
            document.getElementById("customcolor").value = "#163E8C";
            eventlistener();
            break;
        case 9:
            bgcolor = "rgb(89,217,134)";
            document.getElementById("customcolor").value = "#59D986";
            eventlistener();
            break;
        case 10:
            bgcolor = "rgb(242,200,73)";
            document.getElementById("customcolor").value = "#F2C849";
            eventlistener();
            break;
        case 11:
            bgcolor = "rgb(242,106,27)";
            document.getElementById("customcolor").value = "#F26A1B";
            eventlistener();
            break;
        case 12:
            bgcolor = "rgb(217,34,17)";
            document.getElementById("customcolor").value = "#D92211";
            eventlistener();
            break;
        case 13:
            randomcolor();
            document.getElementById("customcolor").value = "#163E8C";
            break;

        default:
            bgcolor = "rgb(0,255,0)";
            break;
    }
}

let n = 16;
document.querySelectorAll(".column").forEach(function (a) {
    a.remove();
});
document.querySelectorAll(".row").forEach(function (a) {
    a.remove();
});

for (let j = 0; j < n; j++) {
    let column = document.createElement("div");
    column.setAttribute("class", "column");
    column.setAttribute("id", "column" + j);
    document.getElementById("etchcontainer").appendChild(column);
    for (let k = 0; k < n; k++) {
        let row = document.createElement("div");
        row.setAttribute("class", "row");
        row.setAttribute("id", "row");
        row.setAttribute("draggable", "false");
        row.setAttribute("ondragstart", "return false");
        let coln = "column" + j;
        document.getElementById(coln).appendChild(row);
    }
}

let slider = document.getElementById("slider");
slider.value = 16;

slider.oninput = function () {
    n = this.value;
    document.querySelectorAll(".column").forEach(function (a) {
        a.remove();
    });
    document.querySelectorAll(".row").forEach(function (a) {
        a.remove();
    });

    for (let j = 0; j < n; j++) {
        let column = document.createElement("div");
        column.setAttribute("class", "column");
        column.setAttribute("id", "column" + j);
        document.getElementById("etchcontainer").appendChild(column);
        for (let k = 0; k < n; k++) {
            let row = document.createElement("div");
            row.setAttribute("class", "row");
            row.setAttribute("id", "row");
            row.setAttribute("draggable", "false");
            row.setAttribute("ondragstart", "return false");
            let coln = "column" + j;
            document.getElementById(coln).appendChild(row);
        }
    }
    eventlistener();

    let slidertext = document.getElementById("slider").value;

    document.getElementById(
        "slidertext"
    ).textContent = `Artboard: ${slidertext} x ${slidertext}`;
};

function eventlistener() {
    removeeventlistener();
    let div;

    div = document.getElementsByClassName("row");

    for (let i = 0; i < div.length; i++) {
        (function (i) {
            div[i].addEventListener("mousemove", function (e) {
                if (e.buttons == 1) {
                    div[i].style.backgroundColor = bgcolor;
                }
            });
        })(i);
    }

    for (let i = 0; i < div.length; i++) {
        div[i].addEventListener("click", () => {
            div[i].style.backgroundColor = bgcolor;
        });
    }
}

eventlistener();

function randomcolor() {
    removeeventlistener();
    let div;

    div = document.getElementsByClassName("row");

    for (let i = 0; i < div.length; i++) {
        (function (i) {
            div[i].addEventListener("mousemove", function (e) {
                if (e.buttons == 1) {
                    div[i].style.backgroundColor =
                        "#" + Math.floor(Math.random() * 16777215).toString(16);
                    document.getElementById("customcolor").value =
                        div[i].style.backgroundColor;
                }
            });
        })(i);
    }

    for (let i = 0; i < div.length; i++) {
        div[i].addEventListener("click", () => {
            div[i].style.backgroundColor =
                "#" + Math.floor(Math.random() * 16777215).toString(16);
        });
    }
}

function blend(color1, color2) {
    let colorArr1 = color1
        .slice(color1.indexOf("(") + 1, color1.indexOf(")"))
        .split(", ");
    let colorArr2 = color2
        .slice(color2.indexOf("(") + 1, color2.indexOf(")"))
        .split(", ");

    var color3 = [
        0.5 * colorArr1[0] + 0.5 * colorArr2[0],
        0.5 * colorArr1[1] + 0.5 * colorArr2[1],
        0.5 * colorArr1[2] + 0.5 * colorArr2[2],
    ];
    color3 = "rgb(" + color3.toString() + ")";
    return color3;
}

function blendcolor() {
    removeeventlistener();
    let div;

    div = document.getElementsByClassName("row");

    for (let i = 0; i < div.length; i++) {
        (function (i) {
            div[i].addEventListener("mouseenter", function (e) {
                if (e.buttons == 1) {
                    color2 = color1;
                    color1 = div[i].style.backgroundColor;
                    bgcolor = blend(color1, color2);
                    div[i].style.backgroundColor = `${bgcolor}`;
                }
            });
        })(i);
    }

    for (let i = 0; i < div.length; i++) {
        div[i].addEventListener("mousedown", () => {
            color1 = div[i].style.backgroundColor;
            color2 = color1;
            bgcolor = blend(color1, color2);
            div[i].style.backgroundColor = `${bgcolor}`;
        });
    }
}

function removeeventlistener() {
    var oldElement = document.getElementById("etchcontainer");
    var newElement = oldElement.cloneNode(true);
    oldElement.parentNode.replaceChild(newElement, oldElement);
}

let lcolor;
function darkencolor(lcolor) {
    let colorArr = lcolor
        .slice(lcolor.indexOf("(") + 1, lcolor.indexOf(")"))
        .split(", ");

    var color3 = [colorArr[0] * 0.95, colorArr[1] * 0.95, colorArr[2] * 0.95];
    color3 = "rgb(" + color3.toString() + ")";
    return color3;
}

function darkenevent() {
    removeeventlistener();
    let div;

    div = document.getElementsByClassName("row");

    for (let i = 0; i < div.length; i++) {
        (function (i) {
            div[i].addEventListener("mousemove", function (e) {
                if (e.buttons == 1) {
                    lcolor = div[i].style.backgroundColor;
                    bgcolor = darkencolor(lcolor);
                    div[i].style.backgroundColor = bgcolor;
                }
            });
        })(i);
    }

    for (let i = 0; i < div.length; i++) {
        div[i].addEventListener("click", () => {
            lcolor = div[i].style.backgroundColor;
            bgcolor = darkencolor(lcolor);
            div[i].style.backgroundColor = bgcolor;
        });
    }
}

function lightencolor(lcolor) {
    let colorArr = lcolor
        .slice(lcolor.indexOf("(") + 1, lcolor.indexOf(")"))
        .split(", ");

    var color3 = [
        colorArr[0] * 1.1 + 5,
        colorArr[1] * 1.1 + 5,
        colorArr[2] * 1.1 + 5,
    ];
    color3 = "rgb(" + color3.toString() + ")";
    return color3;
}

function lightenevent() {
    removeeventlistener();
    let div;

    div = document.getElementsByClassName("row");

    for (let i = 0; i < div.length; i++) {
        (function (i) {
            div[i].addEventListener("mousemove", function (e) {
                if (e.buttons == 1) {
                    lcolor = div[i].style.backgroundColor;
                    bgcolor = lightencolor(lcolor);
                    div[i].style.backgroundColor = bgcolor;
                }
            });
        })(i);
    }

    for (let i = 0; i < div.length; i++) {
        div[i].addEventListener("click", () => {
            lcolor = div[i].style.backgroundColor;
            bgcolor = lightencolor(lcolor);
            div[i].style.backgroundColor = bgcolor;
        });
    }
}

function clear() {
    let div = document.getElementsByClassName("row");

    for (let i = 0; i < div.length; i++) {
        div[i].style.backgroundColor = "";
    }
    eventlistener();
}

function erase() {
    let div;

    div = document.getElementsByClassName("row");

    for (let i = 0; i < div.length; i++) {
        (function (i) {
            div[i].addEventListener("mousemove", function (e) {
                if (e.buttons == 1) {
                    div[i].style.backgroundColor = "";
                }
            });
        })(i);
    }

    for (let i = 0; i < div.length; i++) {
        div[i].addEventListener("click", () => {
            div[i].style.backgroundColor = "";
        });
    }
}
