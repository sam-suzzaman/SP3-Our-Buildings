// For Sidebar =================
const sidebar = document.querySelector(".sidebar");
const showingSidebarBtn = document.querySelector(".toggler");
const closingSidebarBtn = document.querySelector(".sidebar-controller");
let isSidebarShow = false;
showingSidebarBtn.addEventListener("click", handleSidebar);
closingSidebarBtn.addEventListener("click", handleSidebar);

function handleSidebar() {
    isSidebarShow = !isSidebarShow;
    if (isSidebarShow) {
        sidebar.classList.add("sidebar-show");
    } else {
        sidebar.classList.remove("sidebar-show");
    }
}
