import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./features/todo/todoSlice";


export const store = configureStore({
    reducer:{
        todos:todoSlice,
    },
})

export type RootState = ReturnType<typeof store.getState> //using this we can get the type of our global state , which is required to access it