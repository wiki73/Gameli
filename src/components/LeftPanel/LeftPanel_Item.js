import React, { useContext } from 'react';
import './LeftPanelColumn.css';
import { ConfigContext } from "../../ConfigContext";

const handleclick = (itemKey, description, config) => {
    if (!config || !config.sphere_coefficients || !config.base_xp) {
        console.warn('Config not loaded yet or missing required data');
        return;
    }
    
    const xpGained = config.sphere_coefficients["programming"] * config.base_xp["small_task"];
    console.log(`Task completed! XP gained: ${xpGained}`);
}

function LeftPanelItem({itemKey, description}) {
    const config = useContext(ConfigContext);

    return (
        <div onClick={() => handleclick(itemKey,description, config)} className="LeftPanelItem">
            <p>{description}</p>
        </div>
    )
}

export default LeftPanelItem;