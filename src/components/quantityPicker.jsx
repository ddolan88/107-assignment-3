import "./quantityPicker.css";
import {useState} from 'react';

const QuantityPicker = () => {
    let [quantity, setQuantity] = useState(0);
    
   
    const handleIncrease = () => {
        setQuantity(quantity+1);
    };

    const handleDecrease = () => {
        setQuantity(quantity-1);
    };

    

    return(
        <div className="quantityPicker">
            <button className="btn btn-secondary btn-sm" onClick={handleDecrease}>-</button>
            <label>{quantity}</label>
            <button className="btn btn-secondary btn-sm" onClick={handleIncrease}>+</button>
        </div>
    )
}

export default QuantityPicker;