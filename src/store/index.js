import { configureStore } from '@reduxjs/toolkit';
import myCounterSlice from './slices/counterSlices'


const myFirstReduxStorage = configureStore({
    reducer: {
        counter: myCounterSlice,
    }
});

export default myFirstReduxStorage;
