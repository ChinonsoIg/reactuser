import { useState, useEffect } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import '../../App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';


const User = ({ user }) => {

  let match = useRouteMatch();

  return (
    
    <div className="card content-panel">
      <img src={user.picture.medium} alt="Profile pic" className="avatar-user-list" />

      <div className="card-text">
        <p className="font-weight-bold">
          {`${user.name.first} ${user.name.last}`}
        </p>
        <p>
          <i>{`${user.location?.street?.number} ${user.location?.street?.name}`}</i>
        </p>
        <small>
          <FontAwesomeIcon icon={faEnvelope} />&nbsp;
          {user.email} &nbsp; &nbsp;
          <FontAwesomeIcon icon={faPhoneVolume}/>&nbsp;
          {user.phone}
        </small>
      </div>

      <div className="arrow-bg">
        <Link to={`${match.url}/:${user.login.uuid}`}>
          <span className="arrow">&#x2192;</span>
        </Link>
      </div>  
    </div>
    
  )
};

export default User;