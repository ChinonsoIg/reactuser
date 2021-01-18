import '../../App.css';

const UsersHeader = ({ userGender }) => {
  return (
    <>
      <div className="header-panel">
        <h1 className="font-weight-bold text1">
          {userGender}
        </h1>
        <small className="text2">Filter by</small>
        <input 
          type="text"
          placeholder="Find in list"
          className="find-in-list" />

        <select className="option-select">
          <option>Country</option>
          <option>Nigeria</option>
        </select>
        <small className="text3">Show country</small>
      </div>
    </>
  );
}

export default UsersHeader;