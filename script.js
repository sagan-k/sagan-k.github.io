function changeColor() {
    const colors = ["rgb(255, 0, 0)", "rgb(255, 115, 0)", "rgb(238, 255, 0)", "rgb(67, 255, 20)", "rgb(22, 56, 248)", "rgb(140, 0, 255)"];
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.getElementById("title").style.color=randomColor;
}

let themeNum = 0;
function changeTheme() {
    const themes = ["", "theme-purple","theme-jade"];
    themeNum += 1;
    if (themeNum >= themes.length) {
        themeNum = 0;
    };
    document.body.className = themes[themeNum];
    document.getElementById("themeDeclare").innerHTML = "Theme: " + themes[themeNum];
}


function defaultTheme() {
    document.body.className = "";
    document.getElementById("title").style.color="";
    document.getElementById("themeDeclare").innerHTML = "Theme:" + " Default";
    
}