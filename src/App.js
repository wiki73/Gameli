import './App.css';
import { useState } from 'react';
import LeftPanel from './components/LeftPanel/LeftPanel';
import CenterPanel from './components/CenterPanel/CenterPanel';
import RightPanel from './components/RightPanel/RightPanel';

import { GameProvider } from "./config/GameProvider";

function App() {
  const [littleTasks, setLittleTasks] = useState([
    { id: 1, description: 'Мелкая задача 1' },
    { id: 2, description: 'Мелкая задача 2' },
    { id: 3, description: 'Мелкая задача 3' },
  ]);

  const [mediumTasks, setMediumTasks] = useState([
    { id: 1, description: 'Средняя задача 1' },
    { id: 2, description: 'Средняя задача 2' },
    { id: 3, description: 'Средняя задача 3' },
  ]);

  const [largeTasks, setLargeTasks] = useState([
    { id: 1, description: 'Большая задача 1' },
    { id: 2, description: 'Большая задача 2' },
    { id: 3, description: 'Большая задача 3' },
  ]);

  function addTask(description, sizeTask) {
    {console.log(sizeTask);}
    const newTask = { id: Date.now(), description };
    if (sizeTask === 'little') {
    setLittleTasks((prev) => [...prev, newTask]);
    }
    if (sizeTask === 'medium') {
      setMediumTasks((prev) => [...prev, newTask]);
    }
    if (sizeTask === 'large') {
      setLargeTasks((prev) => [...prev, newTask]);
    }
    
  }

  return (
    <GameProvider>
    <div className="App">
      <LeftPanel
        className="left-panel"
        litteTasks={littleTasks}
        mediumTasks={mediumTasks}
        largeTasks={largeTasks}
        addTask={addTask}
      />
      <CenterPanel className="center-panel"/>
      <RightPanel />
    </div>
    </GameProvider>
  );
}

export default App;
