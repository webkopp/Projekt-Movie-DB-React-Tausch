import { useState } from 'react';
import './button.css'


const Button = () => {
    const [button, setButton] = useState()
    return (
        <>
            <button onClick={props.func}>{props.name}</button>
        </>
    );
}

export default Button;