import './LeftPanel.css';
import React from 'react';
import LeftPanelColumn from './LeftPanelColumn';
import ModalWindowAddTask from './ModalWindovAddTask';

function LeftPanel({ litteTasks, mediumTasks, largeTasks, addTask }) {
    return (
        <div className="LeftPanel">
            <LeftPanelColumn title={"Котокие"} tasks={litteTasks} />
            <LeftPanelColumn title={"Средние"} tasks={mediumTasks} />
            <LeftPanelColumn title={"Большие"} tasks={largeTasks} />
            <ModalWindowAddTask addTask={addTask} />

        </div>
    );
}

export default LeftPanel;