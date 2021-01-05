// declare variables
const cartBtn = $(".cart-btn");
const closeCartBtn = $(".close-cart");
const clearCartBtn = $(".clear-cart");
const cartDOM = $(".cart");
const cartOverlay = $(".cart-overlay");
const cartItems = $(".cart-items");
const cartTotal = $(".cart-total");
const cartContent = $(".cart-content");
const productsDOM = $(".products-center");
// cart
let cart = [];

// getting the products
class Products{
  async getProducts(){
    try{
      let result =  await fetch('products.json');
      let data = await result.json();
      return data;
    } catch(error){
      console.log(error);
    }
  }
}
// display products
class UI{}
// local storage
class Storage{}

document.addEventListener("DOMContentLoaded", ()=>{
  const ui =  new UI();
  const products = new Products();

  // get all products
  products.getProducts().then(data => console.log(data));
});