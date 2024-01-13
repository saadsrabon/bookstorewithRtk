import { configureStore } from "@reduxjs/toolkit";

const store =configureStore({
    reducer: {
        //[] dd reducers here
        [booksApi.reducerPath]: booksApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});

export default store;