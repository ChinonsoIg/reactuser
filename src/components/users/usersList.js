import '../../App.css';
import UsersHeader from "./usersHeader"



const Users = () => {
  return (
    <div>
      <UsersHeader />

      <div className="card content-panel">
        
        <img src="https://www.w3schools.com/css/img_5terre.jpg" alt="Profile pic" className="avatar-user-list" />
        <div className="card-text">
          <p>Shalom Chinonso</p>
          <p>Address</p>
          <p>Email and phone number</p>
        </div>
        <div className="arrow-bg">
          <span className="arrow">&#x2192;</span>
        </div>
        
      </div>
    </div>
  );
}

export default Users;