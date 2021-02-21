const initialState = {
  products: [],
  cart: [],
  mes: "",
  product: {},
  query: "",
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
      return state;

    case "GET_PRODUCT_SEARCH_QUERY":
      console.log(action.query);
      return {
        ...state,
        query: action.query,
      };

    case "ADD_TO_CART_SUCCESS":
      return state;

    case "ADD_TO_CART_ERROR":
      console.log(action.err);
      return state;

    case "DELETE_CART_PRODUCT":
      return state;
    case "UPDATE_PRODUCT_QUANTITY":
      return state;
    case "STAGED_CART_PRODUCTS":
      return {
        ...state,
        cart: [...action.cartItems],
      };
    case "ORDER_SUCCESS":
      return {
        ...state,
        mes: action.message,
        err: false,
      };
    case "ORDER_FAILED":
      return {
        ...state,
        mes: action.err.message,
      };
    case "SET_ERR":
      return {
        ...state,
        err: action.err,
      };
  }
  return state;
};

export default productReducer;
