import { useState } from "react";
import "./ColorBox.css"

const getColor = (arr) => {
    const idx = Math.floor(Math.random() * arr.length);
    return arr[idx];
}
function ColorBox({ colors }) {
    const [color, setColor] = useState(getColor(colors));
    const changeColor = () => {
        const randomColor = getColor(colors);

        setColor(randomColor);
    }
    return (
        <div
            className="ColorBox"
            onClick={changeColor}
            style={{ backgroundColor: color }}>

        </div>
    )


}

export default ColorBox;