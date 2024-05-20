//A store is one central state of truth
import { configureStore } from "@reduxjs/toolkit";

//import the API
import { cryptoApi } from "../services/cryptoApi";

export default configureStore({
    reducer: {
        [cryptoApi.reducerPath]: cryptoApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cryptoApi.middleware),
});