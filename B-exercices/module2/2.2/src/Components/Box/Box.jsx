import { useState } from 'react';
import './Box.css';

const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];

const Box = () => {
    const [colorIndex, setColorIndex] = useState(0);
    return (
        <div className="color-box"
        style={{ backgroundColor : colors[colorIndex]}}>
        <h2>Box</h2>
        <button className='color-box__button'
            onClick={() => {
                setColorIndex((colorIndex + 1) % colors.length);
            }}> click her to change to {colors[colorIndex + 1]} </button>
        </div>
        
    );
    }

export default Box;