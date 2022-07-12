
document.addEventListener('DOMContentLoaded',function(){
    const menuButton = document.querySelector(".menu__button")
    const menu = document.querySelector(".menu__list")

    menuButton.addEventListener('click', function(){
        console.log(1);
        if (menu.classList.contains('active')) {
            menu.classList.remove('active');
        } else{
            menu.classList.add('active');
        }
    });

});



