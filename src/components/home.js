import '../App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faMale, faFemale } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
  return (
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
            {/* <i className="fa fa-search"></i> */}
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
              <FontAwesomeIcon icon={faUsers} />
            </div>            
            <p className="icon-name">
              <small>All users</small>
            </p>
          </div>
          <div className="icons-subgrid">
            <div className="icon-background male-users">
              <FontAwesomeIcon icon={faMale} />
            </div>            
            <p className="icon-name">
              <small>Male users</small>
            </p>
          </div>
          <div className="icons-subgrid">
            <div className="icon-background female-users">
              <FontAwesomeIcon icon={faFemale} />
            </div>
            <p className="icon-name">
              <small>Female users</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;