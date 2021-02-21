export const getQuery = (query) => {
  console.log(query);
  return (dispatch) =>
    dispatch({
      type: "GET_PRODUCT_SEARCH_QUERY",
      query,
    });
};

export const getProduct = (productId) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to database
    const firestore = getFirestore();

    firestore
      .collection("products")
      .doc(productId)
      .get()
      .then((res) => {
        const product = res.data();

        dispatch({ type: "GET_PRODUCT_SUCCESS", product });
      })
      .catch((err) => {
        dispatch({ type: "GET_PRODUCT_ERROR", err });
      });
  };
};

export const addTocart = (cartItem) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to database
    const firestore = getFirestore();
    // const profile = getState().firebase.profile;
    const userId = getState().firebase.auth.uid;
    firestore
      .collection("cart")
      .add({
        ...cartItem,
        userId: userId,
        createdAt: new Date(),
      })
      .then(() => {
        dispatch({ type: "ADD_TO_CART_SUCCESS", cartItem });
      })
      .catch((err) => {
        dispatch({ type: "ADD_TO_CART_ERROR", err });
      });
  };
};

export const removeProduct = (cartId) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("cart")
      .doc(cartId)
      .delete()
      .then((res) => {
        dispatch({ type: "DELETE_CART_PRODUCT" });
      })
      .catch((err) => {
        dispatch({ type: "DELETE_CART_ERROR", err });
      });
  };
};

export const addProductQuantity = (id, num, price) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("cart")
      .doc(id)
      .update({
        quantity: num + 1,
        totalPrice: price * (num + 1),
      })
      .then((res) => {
        dispatch({ type: "UPDATE_PRODUCT_QUANTITY" });
      })
      .catch((err) => {
        dispatch({ type: "UPDATE_PRODUCT_ERROR", err });
      });
  };
};

export const subProductQuantity = (id, num, price) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    if (num === 0) {
      firestore
        .collection("cart")
        .doc(id)
        .update({
          quantity: 0,
          totalPrice: 0,
        })
        .then((res) => {
          dispatch({ type: "UPDATE_PRODUCT_QUANTITY" });
        })
        .catch((err) => {
          dispatch({ type: "UPDATE_PRODUCT_ERROR", err });
        });
    } else {
      firestore
        .collection("cart")
        .doc(id)
        .update({
          quantity: num - 1,
          totalPrice: price * (num - 1),
        })
        .then((res) => {
          dispatch({ type: "UPDATE_PRODUCT_QUANTITY" });
        })
        .catch((err) => {
          dispatch({ type: "UPDATE_PRODUCT_ERROR", err });
        });
    }
  };
};

export const addingStagedCart = (cartItems) => {
  return (dispatch) =>
    dispatch({
      type: "STAGED_CART_PRODUCTS",
      cartItems: cartItems,
    });
};
