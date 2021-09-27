import React, { useState } from "react";
import i from './../App.module.css'
import MenuRGB from "./MenuRGB";
import MenuSelect from "./MenuSelect";
import { ReactComponent as DropDownLogo } from "./../drop-down-arrow.svg"

function Input() {
    let [color, setColor] = useState('#0000FF');
    let [isRgbActive, setIsRgbActive] = useState(false);
    let [isSelectActive, setIsSelectActive] = useState(false);
    let [background, setBackground] = useState({backgroundColor: color});

    const onSelectClick = () => {
        setIsSelectActive(true)
    };

    const onColorClick = () => {
        setIsRgbActive(true)
    };

    const onInputChange = (e) => {
        setColor(e.target.value);
        setBackground({backgroundColor: color})
    }

    const onColorChange = (newColor) => {
        setBackground({backgroundColor: newColor})
    };

    return (
        <>
            <div className={i.inputContainer}>
                <div className={i.input}>
                    <input className={i.inputText} type="text" value={color} placeholder="#0000FF" onChange={onInputChange} />
                </div>
                <div className={i.colorContainer}>
                    <div style={background} className={i.colorDiv} onClick={onColorClick}></div>
                </div>
                <div className={i.selectDiv} onClick={onSelectClick}>
                    <DropDownLogo />
                </div>
            </div>

            {isRgbActive ? <MenuRGB color={color} onColorChange={onColorChange} /> : null}
            {isSelectActive ? <MenuSelect onColorChange={onColorChange} /> : null}
        </>
    )
}

export default Input;
