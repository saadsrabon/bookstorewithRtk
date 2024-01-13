import { configureStore } from "@reduxjs/toolkit";

const store =configureStore({
    reducer: {
        // dd reducers here
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});

export default store;