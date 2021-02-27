
//panel de navegación móvil
menu.addEventListener("click", (e)=>{
    menu.classList.toggle("hide");
    logo.classList.toggle("blurred");
    menu.classList.toggle("tap") && setTimeout(
        ()=>menu.classList.toggle("tap"), 
        350
    );
    menuBar.classList.toggle("fix")

})


//barra de navegacion movil
document.addEventListener("scroll", (e)=>{
    barra.classList.toggle("scrolled", window.scrollY > 180) 
})