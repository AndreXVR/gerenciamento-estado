import { configureStore } from "@reduxjs/toolkit";
import todolistReducer from "./slices/todolist.slice";

export const store = configureStore({
    reducer: {
        todolist: todolistReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;