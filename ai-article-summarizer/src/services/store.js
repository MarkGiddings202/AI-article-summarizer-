import { configureStore } from "@reduxjs/toolkit";

import { articleApi } from "./article";

export const store = configureStore({
    reducer: {
        [articleApi.reducerPath]: articleApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(articleApi.middleware)
})

// here we're configuring a global state that saves the entire information of our application
// the reducer helps get only a specific part of the state
// in this case it's going to be the articleAPI on line 3
// this is taken from the redux documentation
// https://redux-toolkit.js.org/
// https://redux-toolkit.js.org/usage/usage-with-typescript#configurestore 
