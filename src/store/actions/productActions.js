export const getProduct = (productId) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to database
    const firestore = getFirestore();

    //   const profile = getState().firebase.profile;
    //   const authorId = getState().firebase.auth.uid;
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
