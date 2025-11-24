import ReactDOM from 'react-dom/client';
import './LeftPanelColumn.css';


function LeftPanelItem({key, description}) {
    return (
        <div className="LeftPanelItem">
            <p>{description}</p>
        </div>
    )
}

export default LeftPanelItem;