import React, { useState } from "react";
import r from './MenuRGB.module.css';

type PropsType = {
    onColorChange: Function
    setColor: Function
    setActive: Function
    color: string
    changeHexValue: Function
};

function MenuRGB(props: PropsType) {
    let redRef: any = React.createRef();
    let greenRef: any = React.createRef();
    let blueRef: any = React.createRef();
    let [colorRange, setColorRange] = useState(props.color);

    const rgb2hex: (col: string) => string = (col) => {
        let rgb = col.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
        return (rgb && rgb.length === 4) ? "#" +
            ("0" + parseInt(rgb[1], 10).toString(16)).slice(-2) +
            ("0" + parseInt(rgb[2], 10).toString(16)).slice(-2) +
            ("0" + parseInt(rgb[3], 10).toString(16)).slice(-2) : '';
    };

    const onRangeChange = () => {
        props.onColorChange(`rgb(${redRef.current.value}, ${greenRef.current.value}, ${blueRef.current.value})`);
        setColorRange(`rgb(${redRef.current.value}, ${greenRef.current.value}, ${blueRef.current.value})`);
        props.changeHexValue(rgb2hex(`rgb(${redRef.current.value}, ${greenRef.current.value}, ${blueRef.current.value})`));
    };

    const onCancelClick = () => {
        props.onColorChange(props.color);
        props.setActive(false);
        props.changeHexValue(rgb2hex(props.color));
    };

    const onSaveClick = () => {
        props.onColorChange(colorRange);
        props.setColor(rgb2hex(colorRange));
        props.setActive(false);
        props.changeHexValue(rgb2hex(`rgb(${redRef.current.value}, ${greenRef.current.value}, ${blueRef.current.value})`));
    }

    return (
        <>
            <div className={r.container}>
                <div className={r.triangleTop}></div>
                <div className={r.inputGroup} onChange={onRangeChange}>
                    <div>
                        <label htmlFor="red">R</label>
                        <input ref={redRef} className={r.red} type="range" id="red" name="red"
                            min="0" max="255" />
                    </div>
                    <div>
                        <label htmlFor="green">G</label>
                        <input ref={greenRef} className={r.green} type="range" id="green" name="green"
                            min="0" max="255" />
                    </div>
                    <div>
                        <label htmlFor="blue">B</label>
                        <input ref={blueRef} className={r.blue} type="range" id="blue" name="blue"
                            min="0" max="255" />
                    </div>
                </div>
                <div className={r.buttons}>
                    <button onClick={onCancelClick}>Cancel</button>
                    <button onClick={onSaveClick}>Save</button>
                </div>
            </div>
        </>
    )
};

export default MenuRGB;