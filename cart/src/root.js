// const cartText = `<div>you have ${faker.random.number()} in your cart</div>`;

// document.querySelector("#dev-cart").innerHTML = cartText;

import faker from "faker";

const mount = (el) => {
  const cartText = `<div>you have ${faker.random.number()} in your cart</div>`;

  for (let i = 0; i < 5; i++) {
    const name = faker?.commerce?.productName();
    cart += `<div>${name}</div>`;
  }
  el.innerHTML = cartText;
};

if (process.env.NODE_ENV !== "production") {
  const el = document.querySelector("#dev-cart");
  if (el) {
    mount(el);
  }
}

export { mount };
