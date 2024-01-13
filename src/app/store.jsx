import { configureStore } from "@reduxjs/toolkit";
import { booksApi } from "../features/booksslice";

const store =configureStore({
    reducer: {
        //[] dd reducers here
        [booksApi.reducerPath]: booksApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});

export default store;