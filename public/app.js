// allow navbar to have a dark background when scrolled down 
const navbar = document.querySelector('.navbar');
const imgscontainer = document.querySelector('.imgs');
var i = 1;

window.onscroll = () => {
    if (window.scrollY > 10) {
        navbar.classList.add('nav-active');
    } else {
        navbar.classList.remove('nav-active');
    }
};

//logic for shopping cart
const shoppingCartIcon = document.getElementById('shoppingCartIcon');
const shoppingCartContents = document.getElementById("shopping-cart-contents");
shoppingCartIcon.addEventListener("mousedown", function(){
    if(shoppingCartContents.classList.contains("hide")){
        shoppingCartContents.classList.add("show");
        shoppingCartContents.classList.remove("hide");
    }else{
        shoppingCartContents.classList.remove("show");
        shoppingCartContents.classList.add("hide");
    }

})
