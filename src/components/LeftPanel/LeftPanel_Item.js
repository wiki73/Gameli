import React, { useContext } from 'react';
import './LeftPanelColumn.css';
import { GameContext } from "../../config/GameContext";



const hadleClick = (dispatch) => {
    dispatch({ type: 'ADD_EXP', amount: 10 });
    dispatch({ type: 'ADD_GOLD', amount: 5 });
}

function LeftPanelItem({key, description}) {
    const {dispatch } = useContext(GameContext);  

    return (
        <div className="LeftPanelItem">
            <p>{description}</p>
            <button onClick={() => hadleClick(dispatch)}>Завершить</button>
        </div>
    )
}


export default LeftPanelItem;