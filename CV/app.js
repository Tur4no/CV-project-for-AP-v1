const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

//Modal

const modal = document.getElementById('contacto');
const openBtn = document.querySelector('.navbar__btn');
const closeBtn = document.querySelector('.close__btn')

openBtn.addEventListener('click', function(){
    modal.style.display = 'block';
});

closeBtn.addEventListener('click', function(){
    modal.style.display = 'none';
});

window.addEventListener('click', function(e){
    if ( e.target === modal){
        modal.style.display ='none';
    }
});