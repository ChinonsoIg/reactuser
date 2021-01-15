import '../App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import UsersList from "./users/usersList";
import UsersDetail from "./users/usersDetail";
import UsersHeader from "./users/usersHeader";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faMale, faFemale, faEnvelope, faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';

const Home = () => {

  return (
    <Router>
    <div className="container-fluid homeinterface">
    <div className="my-grid">
      <div className="section-one">
        <h1 className="m-1 pb-2">Hello,<span className="font-weight-bold">Emerald</span></h1>
        <p className="m-1 pb-2">
          <small>Welcome to your dashboard, kindly sort through the user base</small>
        </p>
      </div>
      <div className="section-two">
        <div className="search-container p-1">
          <form action="">
            <input
              type="text"
              placeholder="Find a user"
              name="search"
              className="search-form"/>
          </form>
        </div>
      </div>
      <div className="section-three">
        <p className="m-1 pb-2 pt-2">Show users</p>
        <div className="m-1 icons-grid">
          <div className="icons-subgrid">            
            <div className="icon-background all-users">
              <Link to="/">
                <FontAwesomeIcon 
                  icon={faUsers}
                  style={{color: "white"}} />
              </Link>
            </div>
            <p className="icon-name">
              <small>All users</small>
            </p>
          </div>

          <div className="icons-subgrid">            
            <div className="icon-background male-users">
              <Link to="/male-users">
                <FontAwesomeIcon 
                  icon={faMale}
                  style={{color: "white"}} />
              </Link>
            </div>            
            <p className="icon-name">
              <small>Male users</small>
            </p>            
          </div>

          <div className="icons-subgrid">         
            <div className="icon-background female-users">
              <Link to="/female-users">
                <FontAwesomeIcon 
                  icon={faFemale}
                  style={{color: "white"}} />
              </Link>
            </div>            
            <p className="icon-name">
              <small>Female users</small>
            </p>            
          </div>

        </div>
      </div>
    </div>
    </div>

    <div
      className="container-fluid usersinterface"
      >
      <Switch>
        <Route path="/male-users">
          <UsersHeader userGender="Male" />
          <UsersList username="male" />
        </Route>
        <Route path="/female-users">
          <UsersHeader userGender="Female" />
          <UsersList username="female" />
        </Route>
        <Route path="/">
          <UsersHeader userGender="All" />
          <UsersList username="all" />
        </Route>
      </Switch>
    </div>
    
    </Router>
  );
}

export default Home;