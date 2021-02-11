const initialState = {
  products: [],
  cart: [],
};

const productReducer = (state = initialState, action) => {
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

    case "ADD_TO_CART_SUCCESS":
      return state;

    case "ADD_TO_CART_ERROR":
      console.log(action.err);
      return state;

    case "DELETE_CART_PRODUCT":
      return state;
    case "UPDATE_PRODUCT_QUANTITY":
      return state;
  }
  return state;
};

export default productReducer;
