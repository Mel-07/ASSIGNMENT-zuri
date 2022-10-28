const navBtn = document.querySelector('#navbtn');
const menuCl =document.querySelector('.grid-menu')
const bodyCl = document.querySelector('.grid-body')








navBtn.addEventListener('click',menu);

function menu(e){
       if(menuCl.style.display === 'none'){
        menuCl.style.display ="grid"
   
       }
       else{
        menuCl.style.display ="none"
       }
 
    bodyCl.classList.toggle('body')
}