import { createSlice } from "@reduxjs/toolkit";

const initialState =
    {
        status:false,
        userdate: null
    }
const authSlice = createSlice(
    {
        name: "auth",
        initialState,
        reducers:
        {
            login:(state , aution ) => 
                {
                    state.status =true;
                    state.userdate = aution.payload.userdate;
                },
                logout: (state) =>
                {
                    state.status = false;
                    state.userdate = null;
                }
        }
    }
)
export const {login, logout} = authSlice.actions;
export default authSlice.reducer;