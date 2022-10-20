import {reducer} from "./todoReducer";
import {combineReducers, configureStore} from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    todoList : reducer
})

export const store = configureStore({
    reducer: rootReducer
})