import { atom } from "recoil";
export const cartState = atom({
  key: "cart",
  default: [],
});
export const addToCart = (cart, product) => {
  console.log("pro", product);
  const newCart = [...cart];
  let foundIndex = -1;
  cart.forEach((element, index) => {
    if (element.product.product.id === product.product.id) {
      foundIndex = index;
    }
  });
  console.log("f", foundIndex);
  if (foundIndex >= 0) {
    console.log(1111);
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
    if (element.product.product.id === id) {
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
    if (element.product.product.id === product.product.product.id) {
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
      product: {
        id: 1,
        name: "Áo Phao Bomber SUPER 1283",
        price: "795,000₫",
        image: "../../img/ao1.jpg",
      },
      quantity: 1,
    },
    {
      product: {
        id: 2,
        name: "Áo Gio SUPER 1283",
        price: "795,000₫",
        image: "../../img/ao1.jpg",
      },
      quantity: 1,
    },
    {
      product: {
        id: 3,
        name: "Áo AKk Bomber SUPER 1283",
        price: "795,000₫",
        image: "",
      },
      quantity: 1,
    },
    {
      product: {
        id: 4,
        name: "Áo Phao Bomber SUPER 1283",
        price: "795,000₫",
        image: "",
      },
      quantity: 1,
    },
    {
      product: {
        id: 5,
        name: "Áo Phao Bomber SUPER 1283",
        price: "795,000₫",
        image: "",
      },
      quantity: 1,
    },
    {
      product: {
        id: 6,
        name: "Áo Phao Bomber SUPER 1283",
        price: "795,000₫",
        image: "",
      },
      quantity: 1,
    },
    {
      product: {
        id: 7,
        name: "Áo Phao Bomber SUPER 1283",
        price: "795,000₫",
        image: "",
      },
      quantity: 1,
    },
    {
      product: {
        id: 8,
        name: "Áo Phao Bomber SUPER 1283",
        price: "795,000₫",
        image: "",
      },
      quantity: 1,
    },
  ],
});
