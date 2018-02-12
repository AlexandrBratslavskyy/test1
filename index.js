var ch1 = document.getElementById("ch1");
var ch2 = document.getElementById("ch2");
var ch3 = document.getElementById("ch3");
var num1 = 1;
var num2 = 2;
var num3 = 3;
var zoom = document.getElementById("zoom");
var zoomcontrols = document.getElementById("zoomcontrols");
var zoomnum = 1;
var plus = document.getElementById("plus");
var minus = document.getElementById("minus");
var width = 100;
var widthchg = 10;
var height = 70;
var heightchg = 7;
var Previous = document.getElementById("Previous");
var Next = document.getElementById("Next");

document.getElementById("BG1").addEventListener("click", function () {
    var num1 = 1;
    var num2 = 2;
    var num3 = 3;
    ch1.style.backgroundImage = "url(imgs/i"+num1+".jpg)";
    ch2.style.backgroundImage = "url(imgs/i"+num2+".jpg)";
    ch3.style.backgroundImage = "url(imgs/i"+num3+".jpg)";
});
document.getElementById("BG2").addEventListener("click", function () {
    var num1 = 4;
    var num2 = 5;
    var num3 = 6;
    ch1.style.backgroundImage = "url(imgs/i"+num1+".jpg)";
    ch2.style.backgroundImage = "url(imgs/i"+num2+".jpg)";
    ch3.style.backgroundImage = "url(imgs/i"+num3+".jpg)";
});
document.getElementById("BG3").addEventListener("click", function () {
    var num1 = 7;
    var num2 = 8;
    var num3 = 9;
    ch1.style.backgroundImage = "url(imgs/i"+num1+".jpg)";
    ch2.style.backgroundImage = "url(imgs/i"+num2+".jpg)";
    ch3.style.backgroundImage = "url(imgs/i"+num3+".jpg)";
});
document.getElementById("BG4").addEventListener("click", function () {
    var num1 = 10;
    var num2 = 11;
    var num3 = 12;
    ch1.style.backgroundImage = "url(imgs/i"+num1+".jpg)";
    ch2.style.backgroundImage = "url(imgs/i"+num2+".jpg)";
    ch3.style.backgroundImage = "url(imgs/i"+num3+".jpg)";
});
ch1.addEventListener("mouseenter", function () {
    zoom.style.backgroundImage = "url(imgs/i"+num1+".jpg)";
    zoomcontrols.style.display = "block";
    zoomnum = num1;
});
ch2.addEventListener("mouseenter", function () {
    zoom.style.backgroundImage = "url(imgs/i"+num2+".jpg)";
    zoomcontrols.style.display = "block";
    zoomnum = num2;
});
ch3.addEventListener("mouseenter", function () {
    zoom.style.backgroundImage = "url(imgs/i"+num3+".jpg)";
    zoomcontrols.style.display = "block";
    zoomnum = num3;
});
document.getElementById("MakeBG").addEventListener("click", function () {
    document.getElementById("bg").style.backgroundImage = "url(imgs/i"+zoomnum+".jpg)";
});
plus.addEventListener("click", function () {
    width += widthchg;
    height += heightchg;
    zoom.style.width = width+"%";
    zoom.style.height = height+"%";
});
minus.addEventListener("click", function () {
    width -= widthchg;
    height -= heightchg;
    zoom.style.width = width+"%";
    zoom.style.height = height+"%";
});
Previous.addEventListener("click", function () {
    num1 -= 3;
    num2 -= 3;
    num3 -= 3;
    if (num1 == -2){
        num1 = 10;
        num2 = 11;
        num3 = 12;}
    ch1.style.backgroundImage = "url(imgs/i"+num1+".jpg)";
    ch2.style.backgroundImage = "url(imgs/i"+num2+".jpg)";
    ch3.style.backgroundImage = "url(imgs/i"+num3+".jpg)";
});
Next.addEventListener("click", function () {
    num1 += 3;
    num2 += 3;
    num3 += 3;
    if (num3 == 15){
        num1 = 1;
        num2 = 2;
        num3 = 3;}
    ch1.style.backgroundImage = "url(imgs/i"+num1+".jpg)";
    ch2.style.backgroundImage = "url(imgs/i"+num2+".jpg)";
    ch3.style.backgroundImage = "url(imgs/i"+num3+".jpg)";
});