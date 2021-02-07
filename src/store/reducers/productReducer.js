const productReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_PRODUCT_SUCCESS":
      const { product } = action;
      return {
        ...state,
        product,
      };

    case "GET_PRODUCT_ERROR":
      console.log(action.err);
      return state;
  }
  return state;
};

export default productReducer;

// const initialState = [
//   {
//     category: 2,
//     type: "t-shirt",
//     description:
//       "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
//     id: 1,
//     image:
//       "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
//     title: "Mens blue Casual Premium Slim Fit T-Shirts ",
//     price: 50,
//   },
//   {
//     category: 1,
//     type: "t-shirt",
//     description:
//       "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
//     id: 2,
//     image:
//       "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
//     title: "women blue Casual Premium Slim Fit T-Shirts ",
//     price: 100,
//   },
//   {
//     category: 2,
//     type: "t-shirt",
//     description:
//       "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
//     id: 3,
//     image:
//       "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
//     title: "Mens green Casual Premium Slim Fit T-Shirts ",
//     price: 50,
//   },
//   {
//     category: 1,
//     type: "t-shirt",
//     description:
//       "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
//     id: 4,
//     image:
//       "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
//     title: "Women green Casual Premium Slim Fit T-Shirts ",
//     price: 100,
//   },
//   {
//     category: 2,
//     type: "t-shirt",
//     description:
//       "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
//     id: 8,
//     image:
//       "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
//     title: "Mens yellow Casual Premium Slim Fit T-Shirts ",
//     price: 50,
//   },
//   {
//     category: 1,
//     type: "t-shirt",
//     description:
//       "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
//     id: 6,
//     image:
//       "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
//     title: "Women yellow Casual Premium Slim Fit T-Shirts ",
//     price: 100,
//   },
// ];
