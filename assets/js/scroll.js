function verifyScroll(){
  const scroll = window.scrollY;
  const headerLogo =   document.querySelector('header .desktop .logo');
  if(scroll>=200){
  headerLogo.classList.add('active')
  }else{
    headerLogo.classList.remove('active')
  }
}

setInterval(verifyScroll, 100);