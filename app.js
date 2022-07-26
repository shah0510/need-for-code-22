var subMenu = document.getElementById("submenu")
function sub(){
    if (subMenu.style.display == 'block') {
        subMenu.style.display = "none";
    } else {
        subMenu.style.display = "block";
    }
}
window.onclick = function (event)