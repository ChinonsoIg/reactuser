import { useState } from "react";
import '../../App.css';

const UsersHeader = ({ userGender, setQueryList }) => {
  
  // console.log(query)

  return (
    <>
      <div className="header-panel">
        <h1 className="font-weight-bold text1">
          {userGender}
        </h1>
        <small className="text2">Filter by</small>
        <input 
          type="text"
          // value={query}
          onChange={(e) => setQueryList(e.target.value)}
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