import React from "react";

export default function Tile(props) {

    let style = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }

    return (
        <div className="tile" style={style} onClick={props.holdDie} >
            <h2>{props.value}</h2>
        </div>
    );
}