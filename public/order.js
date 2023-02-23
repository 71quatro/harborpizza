let shoppingCart = [];

document.getElementById("item-custom-pizza").addEventListener("click", function() {
    document.querySelector(".menu-items-container").classList.add("hide");
    document.querySelector(".pizza-builder-section").classList.remove("hide");

});
document.getElementById("item-cheese-pizza").addEventListener("click", function() {
    const cheesePizza = {name: "Cheese Pizza", size: "14 inch", price: "6.99"};
    shoppingCart.push(cheesePizza);
    console.log(shoppingCart);
});

document.getElementById("item-pepperoni-pizza").addEventListener("click", function() {
    const pepperoniPizza = {name: "Pepperoni Pizza", size: "14 inch", price: "7.99"};
    shoppingCart.push(pepperoniPizza);
    console.log(shoppingCart);
});

document.getElementById("item-supreme-pizza").addEventListener("click", function() {
    const supremePizza = {name: "Supreme Pizza", size: "14 inch", price: "14.99"};
    shoppingCart.push(supremePizza);
    console.log(shoppingCart);
});

document.getElementById("item-meatlover-pizza").addEventListener("click", function() {
    const meatloverPizza = {name: "Meat Lover Pizza", size: "14 inch", price: "11.99"};
    shoppingCart.push(meatloverPizza);
    console.log(shoppingCart);
});

document.getElementById("item-vegetarian-pizza").addEventListener("click", function() {
    const vegetarianPizza = {name: "Vegetarian Pizza", size: "14 inch", price: "11.99"};
    shoppingCart.push(vegetarianPizza);
    console.log(shoppingCart);
});

document.getElementById("item-hawaiian-pizza").addEventListener("click", function() {
    const hawaiianPizza = {name: "Hawaiian Pizza", size: "14 inch", price: "8.99"};
    shoppingCart.push(hawaiianPizza);
    console.log(shoppingCart);
});

document.getElementById("item-calzone").addEventListener("click", function() {
    document.querySelector(".menu-items-container").classList.add("hide");
    document.querySelector(".calzone-builder-section").classList.remove("hide");

});

document.getElementById("item-spaghetti").addEventListener("click", function() {
    const spaghetti = {name: "Spaghetti with Meatballs", price: "6.99"};
    shoppingCart.push(spaghetti);
    console.log(shoppingCart);
});

document.getElementById("item-lasagna").addEventListener("click", function() {
    const lasagna = {name: "Lasagna", price: "6.99"};
    shoppingCart.push(lasagna);
    console.log(shoppingCart);
});

document.getElementById("item-ravioli").addEventListener("click", function() {
    const ravioli = {name: "Ravioli", price: "6.99"};
    shoppingCart.push(ravioli);
    console.log(shoppingCart);
});

document.getElementById("item-sandwich").addEventListener("click", function() {
    document.querySelector(".menu-items-container").classList.add("hide");
    document.querySelector(".sandwich-builder-section").classList.remove("hide");
});

document.getElementById("item-salad").addEventListener("click", function() {
    //navigate to salad menu
});

document.getElementById("item-wings").addEventListener("click", function() {
    const wings = {name: "Wings", price: "7.99"};
    shoppingCart.push(wings);
    console.log(shoppingCart);
});

document.getElementById("item-drinks").addEventListener("click", function() {
    //navigate to drinks menu
});

document.getElementById("item-extras").addEventListener("click", function() {
    //navigate to extra menu
});

const goBackToMenu = () =>{
    console.log(shoppingCart);
    document.querySelector(".menu-items-container").classList.remove("hide");
    document.querySelector(".calzone-builder-section").classList.add("hide");
    document.querySelector(".sandwich-builder-section").classList.add("hide");
    document.querySelector(".pizza-builder-section").classList.add("hide");
}

const addPizzaToCart = (item) =>{
    let toppingList = [];
    let checkboxes = document.querySelectorAll("input[name='toppings']:checked");
    checkboxes.forEach((item)=>{
        toppingList.push(item.value);
        item.checked = false;
    })
    let price = 6.99;

    price += toppingList.length;
    
    const cpizza = {name: "Custom Pizza", toppings: toppingList, price:price};
    shoppingCart.push(cpizza);
    console.log(shoppingCart);
}

const addCalzoneToCart = (item) =>{
    let toppingList = [];
    let checkboxes = document.querySelectorAll("input[name='toppings']:checked");
    checkboxes.forEach((item)=>{
        toppingList.push(item.value);
        item.checked = false;
    })
    let price = 6.99;

    if(toppingList.length > 2){
        price += (toppingList.length - 2)*.75;
    }
    
    const calzone = {name: "Calzone", toppings: toppingList, price:price};
    shoppingCart.push(calzone);
    console.log(shoppingCart);
}

const addSandwichToCart = (item) =>{
    let protein = document.querySelectorAll("input[type='radio']:checked");
    let veggies = document.querySelectorAll("input[type='checkbox']:checked");
    let veggiesList = [];
    protein[0].checked = false;
    veggies.forEach((item)=>{
        veggiesList.push(item.value);
        item.checked = false;
    })
    const sandwich = {name: "Sandwich", protein: protein[0].value, veggies: veggiesList, price:"4.99"};
    shoppingCart.push(sandwich);
    console.log(shoppingCart);
}