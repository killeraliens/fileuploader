import React from 'react';
import './ControlBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRedoAlt, faTrashAlt, faCloudDownloadAlt } from '@fortawesome/free-solid-svg-icons';

class ControlBar extends React.Component {
  render() {
    return(
      <div className="ControlBar">
        <button className="ControlBar_btn"><FontAwesomeIcon icon={faRedoAlt}/></button>
        <button className="ControlBar_btn"><FontAwesomeIcon icon={faTrashAlt}/></button>
        <button className="ControlBar_btn"><FontAwesomeIcon icon={faCloudDownloadAlt}/></button>
      </div>
    )
  }
}

export default ControlBar;
