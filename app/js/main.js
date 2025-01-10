const mySidebar = document.getElementById("mySidebar");
const mainHeader = document.getElementById("mainHeader");
const sidebarBtns = document.querySelectorAll(".sidebarBtns");

sidebarBtns.forEach(item => {
    item.addEventListener("click", toggleNav)
})

function toggleSidebar() {
    mySidebar.classList.toggle("active");
    mainHeader.classList.toggle("active");
}