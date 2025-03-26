import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, addValue } from './store/slices/counterSlices';
import { useState } from 'react';
import './App.css';



export default function App() {
    const count = useSelector((state) => state.counter.myCountValue);
    const dispatch = useDispatch();
    const [customValue, setCustomValue] = useState("");

    const handleIncrement = (number = 1) => {
        dispatch(increment(number));
    };

    const handleDecrement = () => {
        dispatch(decrement());
    };

    const handleAddCustomValue = () => {
        const value = Number(customValue);
        if (!isNaN(value)) {
            dispatch(addValue(value));
            setCustomValue("");
        }
    };

    return (
        <div className='practice-4'>
            <h1>Redux Counter</h1>
            <p>Count is: {count}</p>

            <div>
              <button onClick={handleDecrement}>Decrement -1</button>
              <button onClick={() => handleIncrement(1)}>Increment +1</button>
              <button onClick={() => handleIncrement(3)}>Increment +3</button>
            </div>

            <div>
                <input 
                    type="number" 
                    value={customValue} 
                    onChange={(e) => setCustomValue(e.target.value)} 
                    placeholder="Введите число"
                />
                <button onClick={handleAddCustomValue}>Добавить</button>
            </div>
        </div>
    );
}
