import { useState } from "react";

export default function InputComponent () {
    const [text, setText ] = useState('');

    const handleInput = (event) => {
        setText(event.target.value)
    }
}