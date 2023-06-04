// import "products/ProductsIndex"

import faker from "faker";

console.log("cart");

const mount=(el)=>{
    const cartText=`<div>You have ${faker.random.number()} items in your cart</div>`;

    // const cartEl=document.querySelector("#dev-cart");

    el.innerHTML=cartText;
};

if (process.env.NODE_ENV === 'development') {
    const el = document.querySelector('#dev-cart');

    // Assuming our container doesnt have an element
    // with id 'dev-products'....
    if (el) {
        // We are probably running in isolation
        mount(el);
    }
}

export { mount };
