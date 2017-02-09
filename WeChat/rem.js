var designWidth=1080;
function resize() {
    var Width=document.documentElement.clientWidth;
    var Font=Width/designWidth*100;
    document.documentElement.style.fontSize=Font+"px";
}
window.addEventListener("resize",resize);
resize();