import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import '../../App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';

import UsersList from "./usersList";
import UsersDetail from "./usersDetail";
import UsersHeader from "./usersHeader";
import Pagination from "../pagination";
// import Users from "./usersList";

const User = ({ user }) => {
  console.log(user);
  return (
    <>
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
          <span className="arrow">&#x2192;</span>
        </div>        
      </div>
      {/* <Pagination /> */}
    </>
  )
};

export default User;