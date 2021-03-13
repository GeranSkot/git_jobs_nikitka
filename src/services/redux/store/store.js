import {configureStore} from "@reduxjs/toolkit";
import {reducers} from "../slices/slices";

// eslint-disable-next-line import/prefer-default-export
export const store = configureStore({
    reducer: reducers,
});