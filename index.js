// show menu
const showMenu =(toggleId,navId)=>{
    const toggle = doucument.getElementById(toggleId),
            nav = doucument.getElementById(navId);

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        });
    }
}
showMenu('nav_toggle','nav_menu');

// active menu

const navLink = document.querySelectorAll('.nav_link');
navLink.forEach(n => n.classList.remove('active'))
function linkAction(){
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active');

    const navMenu = document.getElementById('nav_menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click',linkAction))