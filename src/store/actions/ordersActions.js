export const placeOrder = (cartItems, contactDetails) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to database
    const firestore = getFirestore();
    // const profile = getState().firebase.profile;
    const userId = getState().firebase.auth.uid;
    firestore
      .collection("orders")
      .add({
        userId: userId,
        cartItems: [...cartItems],
        contactDetails: { ...contactDetails },
        createdAt: new Date(),
      })
      .then(() => {
        dispatch({
          type: "ORDER_SUCCESS",
          message: "Order have been placed successfully!",
        });
      })
      .catch((err) => {
        dispatch({ type: "ORDER_FAILED", err });
      });
  };
};

export const setErr = () => {
  return (dispatch) => {
    dispatch({
      type: "SET_ERR",
      err: true,
    });
  };
};
