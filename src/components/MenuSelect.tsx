import React from 'react';
import s from './MenuSelect.module.css';
 
type PropsType = {
    onColorChange: Function
    setColor: Function
    setActive: Function
    changeHexValue: Function
}

function MenuSelect(props: PropsType) {

    const commonClick: (color: string) => void = (color) => {
        props.onColorChange(color);
        props.changeHexValue(color);
        props.setColor(color);
        props.setActive(false);
    };

    const onRedClick = () => {
        commonClick("#ff0000")
    };

    const onYellowClick = () => {
        commonClick("#ffff00")
    };

    const onGreenClick = () => {
        commonClick("#00ff00")
    };

    const onBlueClick = () => {
        commonClick("#3200ff")
    };
    return (
        <>
            <div className={s.container}>
                <div className={s.triangleTop}></div>
                <div className={s.colorItem}>
                    <span>RED</span>
                    <div className={s.red} onClick={onRedClick}></div>
                </div>
                <div className={s.colorItem}>
                    <span>YELLOW</span>
                    <div className={s.yellow} onClick={onYellowClick}></div>
                </div>
                <div className={s.colorItem}>
                    <span>GREEN</span>
                    <div className={s.green} onClick={onGreenClick}></div>
                </div>
                <div className={s.colorItem} >
                    <span>BLUE</span>
                    <div className={s.blue} onClick={onBlueClick}></div>
                </div>
            </div>
        </>
    )
}

export default MenuSelect;