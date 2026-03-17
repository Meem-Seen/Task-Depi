let checkoutbtn = document.querySelector('.checkout_btn');
const loginIcon = document.querySelector(".login-icon");
const loggedinText = document.querySelector(".loggedin");
const loggedOutText = document.querySelector(".loggedin");
const helloUser = document.querySelector(".helloUser");
let userName  = localStorage.getItem(JSON.parse("currentUser","name"));
const addToCartBtn = document.querySelector(".add-cart");



function isLoggedIn() {
    return localStorage.getItem('loginStatus') === 'true';
}



if(isLoggedIn()){
  alert(" logged ");
}
else{
    alert(" login ");
}
 checkoutbtn.innerText = "check out";
loginIcon.setAttribute("href","#");
loggedinText.classList.toggle("hidden")
