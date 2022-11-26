// create function logReceipt that accepts menu items (1 or many) as objects
// with these properties: {descr, price}
// i.e. {descr: 'Coke', price: 1.99}
// function should log each item to the console and log a total price

const logReceipt = function(...menuItems) {
  let totalPrice = 0;
  
  const addToTotal = function(price) {
    totalPrice += price
    console.log(price)
  }

  menuItems.forEach((menuItems)=>{
    console.log(menuItems.descr + ' = $' + menuItems.price)
    addToTotal(menuItems.price)
  })
  console.log('total price before tax = ' + '$' + (totalPrice))
  console.log('total price with tax = ' + '$' + (totalPrice * 1.10).toFixed(2))
}

// Check
logReceipt(
  { descr: 'Burrito', price: 5.99 },
  { descr: 'Chips & Salsa', price: 2.99 },
  { descr: 'Sprite', price: 1.99 }
);
// should log something like:
// Burrito - $5.99
// Chips & Salsa - $2.99
// Sprite - $1.99
// Total - $10.97
