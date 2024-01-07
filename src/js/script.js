//hamburger
const hamburger = document.querySelector('#hamburger');
const nawMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click',function(){
    hamburger.classList.toggle('hamburger-active');
    nawMenu.classList.toggle('hidden');
});

//navbar fixed
window.onscroll = function(){
   const header = document.querySelector('header') ;
   const fixedNav = header.offsetTop;

   if(window.pageYOffset > fixedNav){
    header.classList.add('nav-fixed');
   }else{
    header.classList.remove('nav-fixed');
   }
};