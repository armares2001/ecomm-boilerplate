import { mount as productsMount } from 'products/ProductsIndex';
import { mount as cartMount } from 'cart/CartShow';


console.log('Container!');
// productsMount(document.querySelector("#dev-products"));
productsMount(document.querySelector("#test1"));
cartMount(document.querySelector("#test2"));