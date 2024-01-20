import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userid: 0
}

export const counterSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, actions) => {
            state.userType = actions.payload;
        }
    }
});

export const { setUser } = counterSlice.actions;
export default counterSlice.reducer;