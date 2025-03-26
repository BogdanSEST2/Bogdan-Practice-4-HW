import { createSlice } from "@reduxjs/toolkit";

const myCounterSlice = createSlice({
    name: 'counter',
    initialState: {
        myCountValue: 0,
    },
    reducers: {
        increment: (state, action) => {
            state.myCountValue += action.payload;
        },
        decrement: (state) => {
            state.myCountValue -= 1;
        },
        addValue: (state, action) => {
            state.myCountValue += action.payload;
        }
    },   
});

export const { increment, decrement, addValue } = myCounterSlice.actions;
export default myCounterSlice.reducer;
