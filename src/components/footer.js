import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudDownloadAlt } from '@fortawesome/free-solid-svg-icons';


const footer = ({ totalPages, handleClick }) => {
  const pages = [...Array(totalPages).keys()].map(num => num + 1);

  return (
    <div className="footer">
      <div className="download">
        <FontAwesomeIcon icon={faCloudDownloadAlt} />&nbsp;
        <small>Download results</small>
      </div>
    
      <div className="pagination">
        {
          pages.map(num => (
            <button
              key={num}
              onClick={() => handleClick(num)}
              >{num}
            </button>
          ))
        }
      </div>
    </div>
  )
}

export default footer;
