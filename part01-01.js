// let pizza1 = new Pizza();
// console.log(pizza1.toppings);
// pizza1.addTopping("mushrooms");
// pizza1.addTopping("peppers");
// console.log(pizza1.toppings);

// let pizza2 = new Pizza();
// console.log(pizza2.toppings);
// pizza2.addTopping("more cheese");
// console.log(pizza2.toppings);

// const pizza1 = {
//   toppings: ["cheese"],
//   addTopping: function(topping) {
//     this.toppings.push(topping);
//   }
// }

// const pizza2 = {
//   toppings: ["cheese"],
//   addTopping: function(topping) {
//     this.toppings.push(topping);
//   }
// }

// class Pizza {

//   constructor(size, crust) {
//     this.size = size;
//     this.crust = crust;
//     this.toppings = ["cheese"];
//   }

//   addTopping(topping) {
//     this.toppings.push(topping);
//   }
// }

// let pizza = new Pizza('large', 'thin');

// let pizza = {
//   size: 'large',
//   crust: 'thin',
//   toppings: ["cheese"]
// }

class Pizza {

  // replace our custom getters / setters with these ones!
  get price() {
    const basePrice = 10;
    const toppingPrice = 2;
    return basePrice + this.toppings.length * toppingPrice;
  }

  set size(size) {
    if (size === 's' || size === 'm' || size === 'l') {
      this._size = size;
    }
  }
}

// DRIVER CODE
const pizza = new Pizza();
pizza.price;      // instead of getPrice()
pizza.size = 's'; // instead of setSize(size)
