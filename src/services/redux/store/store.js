import {configureStore} from "@reduxjs/toolkit";

import {reducers} from "../slices/slices";

export const store = configureStore({
    reducer: reducers,
});
