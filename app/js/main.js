const mySidebar = document.getElementById("mySidebar");
const mainHeader = document.getElementById("mainHeader");
const sidebarOpenBtn = document.querySelector(".openbtn");
const sidebarCloseBtn = document.querySelector(".closebtn");

sidebarOpenBtn.addEventListener("click", openNav);
sidebarCloseBtn.addEventListener("click", closeNav);

function toggleNav() {
    
}

function openNav() {
    mySidebar.style.width = "250px";
    mainHeader.style.marginLeft = "250px";
}

function closeNav() {
    mySidebar.style.width = "0";
    mainHeader.style.marginLeft = "0";
}