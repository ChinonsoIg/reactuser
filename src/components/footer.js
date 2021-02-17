import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudDownloadAlt } from "@fortawesome/free-solid-svg-icons";


const Footer = ({ totalPages, handleClick, selectedUsers }) => {

  const pages = [...Array(totalPages).keys()].map(num => num + 1);
  // console.log('Pages: ',selectedUsers);

  const downloadUser = () => {
    fetch(`https://randomuser.me/api/?seed=${selectedUsers}&format=csv&dl`)
      .then(res => {
        // const filters = res.filter(user => {user})
        res.blob().then(blob => {
          let url = window.URL.createObjectURL(blob);
          let a = document.createElement("a");
          a.href = url;
          a.download = "people.json";
          a.click();
        });
      });
      // console.log('in dnload');
  }

  return (
    <div className="footer">
      <div 
        className="download" 
        onClick={() => downloadUser()}>
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

export default Footer;
