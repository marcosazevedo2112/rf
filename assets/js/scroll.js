function verifyScroll(){
  const scroll = window.scrollY;
  const headerLogo =   document.querySelector('header .desktop .logo-header');
  const headerBar = document.querySelector('header .desktop');
  if(scroll>=200){
  headerLogo.classList.add('active')
  headerBar.classList.add('active')
  }else{
    headerLogo.classList.remove('active')
    headerBar.classList.remove('active')
  }
}

setInterval(verifyScroll, 100);