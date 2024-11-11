const screen = document.getElementById("puterscreen");

const btn1 = document.getElementById("btn-1");
const btn2 = document.getElementById("btn-2");
const btn3 = document.getElementById("btn-3");
const btn4 = document.getElementById("btn-4");

function setScreenHome() {
    screen.src = "asset/screen/home.png";
}

function setScreenCode() {
    screen.src = "asset/screen/code.png";
}

function setScreenOffline() {
    screen.src = "asset/screen/offline.png";
}

function setScreenGit() {
    screen.src = "asset/screen/git.png";
}

function noSignal() {
    screen.src = "asset/screen/staticanim.gif";
}

btn1.addEventListener('mouseover', setScreenHome);
btn1.addEventListener('mouseout', noSignal);

btn2.addEventListener('mouseover', setScreenCode);
btn2.addEventListener('mouseout', noSignal);

btn3.addEventListener('mouseover', setScreenOffline);
btn3.addEventListener('mouseout', noSignal);

btn4.addEventListener('mouseover', setScreenGit);
btn4.addEventListener('mouseout', noSignal);
