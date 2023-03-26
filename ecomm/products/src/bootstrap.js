import faker from "faker";

export const mount = (element) => {
  let products = "";

  for (let i = 0; i < 5; i++) {
    products += `<div>${faker.commerce.productName()}</div>`;
  }

  element.innerHTML = products;
};

const mountElement = document.querySelector("#dev-products");

if (process.env.NODE_ENV === "development" && mountElement) {
  mount(mountElement);
}
