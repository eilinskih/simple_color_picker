import React, { useState } from "react";
import i from './Input.module.css'
import MenuRGB from "./MenuRGB";
import MenuSelect from "./MenuSelect";
function Input() {
    let [color, setColor] = useState('#0000ff'); 
    let [isRgbActive, setIsRgbActive] = useState(false);
    let [isSelectActive, setIsSelectActive] = useState(false);
    let [background, setBackground] = useState({ backgroundColor: color });
    let [hexValue, setHexValue] = useState(color);

    const onSelectClick = () => {
        setIsSelectActive(isSelectActive ? false : true);
        setIsRgbActive(false);
    };

    const onColorClick = () => {
        setIsRgbActive(isRgbActive ? false : true);
        setIsSelectActive(false);
    };

    const onInputChange = (e: any) => {
        setColor(e.target.value);
        setBackground({ backgroundColor: color });
    };

    const onColorChange = (newColor: string) => {
        setBackground({ backgroundColor: newColor });
    };

    const changeHexValue = (val: string) => {
        setHexValue(val);
    };

    return (
        <>
            <div className={i.inputContainer}>
                <div className={i.input}>
                    <input className={i.inputText} type="text" value={hexValue} placeholder="#0000ff" onChange={onInputChange} />
                </div>
                <div className={i.colorContainer}>
                    <div style={background} className={i.colorDiv} onClick={onColorClick}></div>
                </div>
                <div className={i.selectDiv} onClick={onSelectClick}>
                    <div className={isSelectActive ? i.triangleBottomAct : i.triangleBottom} ></div>
                </div>
            </div>

            {isRgbActive ? <MenuRGB changeHexValue={changeHexValue} setColor={setColor} color={color} setActive={setIsRgbActive} onColorChange={onColorChange} /> : null}
            {isSelectActive ? <MenuSelect changeHexValue={changeHexValue} onColorChange={onColorChange} setColor={setColor} setActive={setIsSelectActive} /> : null}
        </>
    )
};

export default Input;
