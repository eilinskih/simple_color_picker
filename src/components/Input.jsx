import React, { useState } from "react";
import './../App.css'
import MenuRGB from "./MenuRGB";
import MenuSelect from "./MenuSelect";
import { ReactComponent as DropDownLogo } from "./../drop-down-arrow.svg"

function Input() {
    let [color, setColor] = useState('#0000FF');
    let [isRgbActive, setIsRgbActive] = useState(false);
    let [isSelectActive, setIsSelectActive] = useState(false);
    let background = {
        backgroundColor: color
    };

    const onSelectClick = () => {
        setIsSelectActive(true)
    };

    const onColorClick = () => {
        setIsRgbActive(true)
    };

    const onInputChange = (e) => {
        setColor(e.target.value)
    }

    const onColorChange = (newColor) => {
        setColor(newColor)
    };

    return (
        <>
            <div className="input-container">
                <div className="input">
                    <input type="text" value={color} placeholder="#0000FF" onChange={onInputChange} />
                </div>
                <div className="color-container">
                    <div style={background} className="color-div" onClick={onColorClick}></div>
                </div>
                <div className="select-div" onClick={onSelectClick}>
                    <DropDownLogo />
                </div>
            </div>

            {isRgbActive ? <MenuRGB onColorChange={onColorChange} /> : null}
            {isSelectActive ? <MenuSelect onColorChange={onColorChange} /> : null}
        </>
    )
}

export default Input;
