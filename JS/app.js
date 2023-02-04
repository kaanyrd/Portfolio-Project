const barSide = document.getElementById("sidebar");
const barBtn = document.getElementById("sidebar-btn");
const closeBtn = document.getElementById("close-btn");
const navBar = document.getElementById("navbar")

barBtn.addEventListener("click", ()=>{
    barSide.classList.add("showBar")
})

closeBtn.addEventListener("click", ()=>{
    barSide.classList.remove("showBar")
})

window.addEventListener("scroll", ()=>{
    if (window.pageYOffset >80){
        navBar.classList.add("navbar-fixed")
    }
    else{
        navBar.classList.remove("navbar-fixed")
    }
})
