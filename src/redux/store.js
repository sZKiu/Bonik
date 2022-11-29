import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/productSlice";
import lastProductReducer from "./slices/lastProduct";

export default configureStore({
  reducer: {
    product: productReducer,
    lastProduct: lastProductReducer,
  },
});
