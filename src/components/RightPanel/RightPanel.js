import React from "react";
import './RightPanel.css';
import RightPanelItem from "./RightPanelItem";

function RightPanel() {
    return (
        <div className="RightPanel">
            <h2>Right Panel</h2>
            <div className="list-item">
                <RightPanelItem />
                <RightPanelItem />
                <RightPanelItem />
                <RightPanelItem />
                <RightPanelItem />
                <RightPanelItem />
                <RightPanelItem />
                <RightPanelItem />
                <RightPanelItem />
            </div>
            
        </div>
    );
}


export default RightPanel;