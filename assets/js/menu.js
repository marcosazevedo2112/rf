(()=>{
  const hamburger = document.querySelector("#menu-hamb");
  const menu = document.querySelector("#menu-mobile");
  const close = document.querySelector("#menu-close");

  if(hamburger == undefined || menu == undefined || close == undefined){
    console.error("#menu-hamb || #menu-mobile || #menu-close não achados");
    return;
  }
  hamburger.addEventListener("click", ()=>{
    menu.classList.toggle("active");
  });
  close.addEventListener("click", ()=>{
    menu.classList.toggle("active");
  })

})()