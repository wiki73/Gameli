import './App.css';
import { useState, useEffect, useCallback } from 'react';
import LeftPanel from './components/LeftPanel/LeftPanel';
import CenterPanel from './components/CenterPanel/CenterPanel';
import RightPanel from './components/RightPanel/RightPanel';

import { ConfigContext } from "./ConfigContext";
import configJson from "./config.json";


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

  const addTask = useCallback((description, sizeTask) => {
    const newTask = { id: Date.now(), description };
    
    switch (sizeTask) {
      case 'little':
        setLittleTasks((prev) => [...prev, newTask]);
        break;
      case 'medium':
        setMediumTasks((prev) => [...prev, newTask]);
        break;
      case 'large':
        setLargeTasks((prev) => [...prev, newTask]);
        break;
      default:
        console.warn(`Unknown task size: ${sizeTask}`);
    }
  }, []);


  const [config, setConfig] = useState(null);
  const [configLoading, setConfigLoading] = useState(true);
  const [configError, setConfigError] = useState(null);

  useEffect(() => {
    const fetchConfig = async () => {
      try {
        setConfigLoading(true);
        setConfigError(null);
        const response = await fetch("./config.json");
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const configData = await response.json();
        console.log('Конфиг загружен:', configData.credit);
        setConfig(configData);
      } catch (error) {
        console.error('Ошибка загрузки конфига:', error);
        setConfigError(error.message);
      } finally {
        setTimeout(() => {setConfigLoading(false);}, 1000); // Искусственная задержка
        
      }
    };

    fetchConfig();
  }, []);


  if (configLoading) {
    return (
      <div style={{position: "absolute", top: 0, left: 0, bottom: 0, right: 0,}}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <p style={{fontSize: "2.5em"}}>Загрузка конфигурации...</p>
        </div>
      </div>
    );
  }

  if (configError) {
    return (
      <div className="App">
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <p>Ошибка загрузки конфигурации: {configError}</p>
        </div>
      </div>
    );
  }

  return (
    <ConfigContext.Provider value={config}>
    <div className="App">
      <LeftPanel
        className="left-panel"
        littleTasks={littleTasks}
        mediumTasks={mediumTasks}
        largeTasks={largeTasks}
        addTask={addTask}
        // useContext
      />
      <CenterPanel className="center-panel" />
      <RightPanel />
    </div>
    </ConfigContext.Provider>
  );
}

export default App;
