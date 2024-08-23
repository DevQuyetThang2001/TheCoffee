const menu = document.getElementById("ct-top-menu");
const btnToggle = document.getElementById('ct-btn-menu');


document.addEventListener('click',(e) => {
    if(btnToggle.contains(e.target)){
        menu.classList.toggle('hidden')
        menu.classList.toggle('ct-topmenu-expanded')
    }
    else {
        if(menu.classList.contains('ct-topmenu-expanded')){
            menu.classList.remove('ct-topmenu-expanded')
            menu.classList.add('hidden')
        }
        
    }

})