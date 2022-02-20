
let switchCode= document.getElementById("switchMode");
switchMode.onclick=function(){
    let theme= document.getElementById("theme");
   const navbar=document.querySelector('#navbar');


    if(theme.getAttribute("href")=="lightMode.css"){
        theme.href="darkMode.css";
       navbar.classList.remove('navbar-light','bg-light');
       navbar.classList.add('navbar-dark','bg-dark');
        document.querySelector('.themetoggle span').textContent = 'dark_mode';

    }else{
        theme.href="lightMode.css"
        navbar.classList.remove('navbar-dark','bg-dark');
        navbar.classList.add('navbar-light','bg-light');
        document.querySelector('.themetoggle span').textContent = 'wb_sunny';
    }
}