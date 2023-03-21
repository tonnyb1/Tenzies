import React from "react";

export default function Tile(props) {
    return (
        <div className="tile">
            <h2>{props.value}</h2>
        </div>
    );
}