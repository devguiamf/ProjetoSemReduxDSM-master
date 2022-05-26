import React from "react";
import './Intervalo.css'

import Card from "./Card";
export default props => {
    const {min, max} = props;
    const aleratorio = Math.floor (Math.random() * (max - min + 1)) + min;

    return(
        <Card title='Sorteio dos Números' purple>
            <div>
                <span>
                    <span>Resultado: </span>
                    <strong>{ aleratorio }</strong>
                </span>
            </div>
        </Card>
    )
}