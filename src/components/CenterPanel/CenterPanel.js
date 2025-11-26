import React, { useState, useEffect, useContext } from "react";
import './CenterPanel.css';
import levi from './levi.png';
import { ConfigContext } from "../../ConfigContext";

function CenterPanel() {
    const config = useContext(ConfigContext);
    const [xp, setXp] = useState(0);
    const [money, setMoney] = useState(0);

    // Обновляем состояние когда config загружается
    useEffect(() => {
        if (config && config.credit) {
            setXp(config.credit.xp);
            setMoney(config.credit.money);
        }
    }, [config]);

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