
document.querySelector(".hamburger").addEventListener("click",()=>{
    document.querySelector(".mobilenav").style.left="0";
    document.querySelector(".hamburger").style.display="none"
})
document.querySelector(".close").addEventListener("click",()=>{
    document.querySelector(".mobilenav").style.left="-140%";
    document.querySelector(".hamburger").style.display="block"
})
document.querySelector("main").addEventListener("click",()=>{
    document.querySelector(".mobilenav").style.left="-140%";
    document.querySelector(".hamburger").style.display="block"
})

