
const cartButton = document.querySelector("#cart-button");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");

// modal show


// cartButton.addEventListener('click', function (event){
//     modal.classList.add("is-open");
// });

// close


// cartButton.addEventListener('click', function (event){
//     modal.classList.remove("is-open");
// });

cartButton.addEventListener('click', toggleModal);
close.addEventListener('click', toggleModal);

function toggleModal(){
    modal.classList.toggle("is-open");
}

// animate wowo js

new WOW().init();


