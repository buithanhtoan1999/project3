import { atom } from "recoil";
export const cartState = atom({
  key: "cart",
  default: [],
});
export const loginState = atom({
  key: "login",
  default: false,
});

export const addToCart = (cart, product) => {
  const newCart = [...cart];
  let foundIndex = -1;
  cart.forEach((element, index) => {
    if (element.product.id === product.id) {
      foundIndex = index;
    }
  });
  if (foundIndex >= 0) {
    newCart[foundIndex] = {
      ...cart[foundIndex],
      quantity: cart[foundIndex].quantity + 1,
    };
    return newCart;
  }
  newCart.push({
    product,
    quantity: 1,
  });
  return newCart;
};

export const changeQuantity = (cart, id, quantity) => {
  const newCart = [...cart];
  cart.forEach((element, index) => {
    if (element.product.id === id) {
      newCart[index] = {
        ...cart[index],
        quantity: quantity,
      };
    }
  });
  return newCart;
};

export const removeCart = (cart, product) => {
  const newCart = [...cart];
  let foundIndex = -1;
  cart.forEach((element, index) => {
    if (element.product.id === product.id) {
      foundIndex = index;
    }
  });
  newCart.splice(foundIndex, 1);
  return newCart;
};
export const productListState = atom({
  key: "prodcuctList",
  default: [
    {
      id: 1,
      name: "Áo Phao Bomber SUPER 1283",
      price: "795,000₫",
      image: "../../img/ao1.jpg",
      quantity: 1,
    },
    {
      id: 2,
      name: "Áo Gio SUPER 1283",
      price: "795,000₫",
      image: "../../img/ao1.jpg",
    },
    {
      id: 3,
      name: "Áo AKk Bomber SUPER 1283",
      price: "795,000₫",
      image: "",
      quantity: 1,
    },
    {
      id: 4,
      name: "Áo Phao Bomber SUPER 1283",
      price: "795,000₫",
      image: "",
      quantity: 1,
    },
    {
      id: 5,
      name: "Áo Phao Bomber SUPER 1283",
      price: "795,000₫",
      image: "",
      quantity: 1,
    },
    {
      id: 6,
      name: "Áo Phao Bomber SUPER 1283",
      price: "795,000₫",
      image: "",
      quantity: 1,
    },
    {
      id: 7,
      name: "Áo Phao Bomber SUPER 1283",
      price: "795,000₫",
      image: "",
      quantity: 1,
    },
    {
      id: 8,
      name: "Áo Phao Bomber SUPER 1283",
      price: "795,000₫",
      image: "",
      quantity: 1,
    },
  ],
});
