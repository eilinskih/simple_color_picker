import React from "react";
import r from './MenuRGB.module.css';

function MenuRGB(props) {
    let redRef = React.createRef()
    return (
        <>
            <div className={r.container} >
                <div>
                    <label htmlFor="red">R</label>
                    <input className={r.red} type="range" id="red" name="red"
                        min="0" max="255" />
                </div>
                <div>
                    <label htmlFor="green">G</label>
                    <input className={r.green} type="range" id="green" name="green"
                        min="0" max="255" />
                </div>
                <div>
                    <label htmlFor="blue">B</label>
                    <input className={r.blue} type="range" id="blue" name="blue"
                        min="0" max="255" />
                </div>
                <div className={r.buttons}>
                    <button>Cancel</button>
                    <button>Save</button>
                </div>

            </div>
        </>
    )
}

export default MenuRGB;