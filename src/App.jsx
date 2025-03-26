import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { increment, decrement, addValue } from './store/slices/counterSlices';

export default function App() {
    const dispatch = useDispatch();
    const count = useSelector((state) => state.counter.myCountValue);
    const [customValue, setCustomValue] = useState("");

    const handleAddCustomValue = () => {
        const value = Number(customValue);
        if (!isNaN(value)) {
            dispatch(addValue(value));
            setCustomValue("");
        }
    };
    const handleDecrement = () => {
        dispatch(decrement());
    };
    const handleIncrement = (number = 1) => {
        dispatch(increment(number));
    };

    return (
        <div className='practice-4'>
            <h1>Счётчик в Redux</h1>
            <p>Значение: {count}</p>
            <div>
                <button onClick={handleDecrement}>-1</button>
                <button onClick={() => handleIncrement(1)}>+1</button>
                <button onClick={() => handleIncrement(3)}>+3</button>
            </div>
            <div>
                <input type="number" value={customValue} onChange={(e) => setCustomValue(e.target.value)} placeholder="Введите число"/>
                <button onClick={handleAddCustomValue}>Add</button>
            </div>
        </div>
    );
}
