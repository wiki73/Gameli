import React from 'react';
import './LeftPanelColumn.css';
import LeftPanelItem from './LeftPanel_Item';

function LeftPanelColumn({title, tasks = []}) {
    return (
        <div className="LeftPanelColumn">
            <h2>{title}</h2>
            {tasks.length > 0 ? (
                tasks.map(item => (
                    <LeftPanelItem 
                        key={item.id}
                        itemKey={item.id} 
                        description={item.description} 
                    />
                ))
            ) : (
                <p>No tasks available</p>
            )}
        </div>
    );
}

export default LeftPanelColumn;