import React, { useContext, useState } from "react";
import { GameContext } from "../../config/GameContext";
import './CenterPanel.css';
import levi from './levi.png';

function CenterPanel() {
    const { state } = useContext(GameContext);
    return (
        <div className="CenterPanel">
            <h2>Center Panel</h2>
            <img className="img-ang" src={levi} alt="King" />
            <div className="div-xp-and-money">
                <p>{state.exp} Опыт</p>
                <p>{state.gold} Денег</p>
            </div>
            <div className="div-inventory-shop-records">
                <div>Инвентарь</div>
                <div>Магазин</div>
                <div>Послужной список</div>
            </div>
        </div>
    );
}


export default CenterPanel;