import faker from "faker";

export const mount = (element) => {
  let cart = "";

  cart += `<div>You have ${faker.random.number()} items in your cart.</div>`;

  element.innerHTML = cart;
};

const mountElement = document.querySelector("#dev-cart");

if (process.env.NODE_ENV === "development" && mountElement) {
  mount(mountElement);
}
