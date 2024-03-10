import faker from "faker";
const cartText = `<div>Yu have a ${faker.random.number()} items in cart`;
document.querySelector("#cart-dev").innerHTML = cartText;
