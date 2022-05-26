import React from "react";
import Card from "./Card"

export default props =>{
    const {min, max} = props
    return (
        <Card title="Média dos Numeros" green>
            <div>
                <span>
                    <span>Resultado:</span>
                    <strong>{(min + max) / 2}</strong>
                </span>
            </div>
        </Card>
    )
}