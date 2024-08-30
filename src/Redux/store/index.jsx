import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "../userSlice"
import AuthReducer from "../loginSlice"
import DataReducer from "../testSlice"
import FrontendReducer from "../testSlice"
import DeleteReducer from "../deleteSlice"

export const store = configureStore({
    reducer: {
        register: registerReducer,
        auth: AuthReducer,
        data: DataReducer,
        frontend: FrontendReducer,
        delete: DeleteReducer,
    },
})