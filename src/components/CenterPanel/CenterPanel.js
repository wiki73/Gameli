import React, { use, useState } from "react";
import './CenterPanel.css';
import levi from './levi.png';

function CenterPanel() {
    const [xp, setXp] = useState(1234);
    const [money, setMoney] = useState(2412);
    return (
        <div className="CenterPanel">
            <h2>Center Panel</h2>
            <img className="img-ang" src={levi} alt="King" />
            <div className="div-xp-and-money">
                <p>{xp} Опыт</p>
                <p>{money} Денег</p>
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