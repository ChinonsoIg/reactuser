import '../../App.css';
import UsersHeader from "./usersHeader";

const UsersDetail = () => {
  return (
    <>
      <UsersHeader />
      <p><span>&larr;</span>RESULTS</p>
      <div className="user-detail">
        <img src="https://www.w3schools.com/css/img_5terre.jpg" alt="Profile pic" className="avatar-user-detail" />
        <div className="text-user-detail">
          <p className="font-weight-bold">Mr Chinonso 
            <span className="age">24</span>
          </p>
          <p>Address</p>
          <p className="email">Email</p>
          <p className="joined">Joined:</p>
          <p>Telephone</p>
          <p>Mobile</p>
        </div>
      </div>
    </>
  );
}

export default UsersDetail;