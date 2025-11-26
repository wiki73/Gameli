import './LeftPanel.css';
import React from 'react';
import LeftPanelColumn from './LeftPanelColumn';
import ModalWindowAddTask from './ModalWindowAddTask';

function LeftPanel({ littleTasks, mediumTasks, largeTasks, addTask }) {
    return (
        <div className="LeftPanel">
            <LeftPanelColumn title={"Короткие"} tasks={littleTasks} />
            <LeftPanelColumn title={"Средние"} tasks={mediumTasks} />
            <LeftPanelColumn title={"Большие"} tasks={largeTasks} />
            <ModalWindowAddTask addTask={addTask} />

        </div>
    );
}

export default LeftPanel;