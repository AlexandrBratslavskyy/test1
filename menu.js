var myMenu = document.getElementById("menu");
var num = 0;

document.getElementById("Open").addEventListener("click", function () {
    num = 0;
    myMenu.style.left = num+"px";
});
document.getElementById("Close").addEventListener("click", function () {
    num = -110;
    myMenu.style.left = num+"px";
});
document.getElementById("Reset").addEventListener("click", function () {
    document.getElementById("bg").style.backgroundImage = "none";
});
document.getElementById("ShowApp").addEventListener("click", function () {
    document.getElementById("app1").style.display = "block";
});
document.getElementById("HideApp").addEventListener("click", function () {
    document.getElementById("app1").style.display = "none";
});