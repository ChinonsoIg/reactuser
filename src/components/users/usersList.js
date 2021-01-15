import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import '../../App.css';

import { USER_PER_PAGE } from "../../utils/constants";
import User from "./user";
import Pagination from "../pagination";

const UsersList = ({ username }) => {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const startIndex = (page - 1) * USER_PER_PAGE;
  const selectedUsers = items.slice(startIndex, startIndex + USER_PER_PAGE)

  // console.log(items.length);
  console.log(totalPages)

  const history = useHistory();
  const location = useLocation();

  const getData = () => {
    fetch(`https://randomuser.me/api/?results=12&gender=${username}`)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.results);
          setTotalPages(Math.ceil(result.results.length / USER_PER_PAGE));
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }

  useEffect(() => {
    getData();
  }, [location])

  const handleClick = (num) => {
    setPage(num)
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        {selectedUsers.map(i => (
          <User user={i} key={i.login.uuid} />        
        ))}
        <Pagination totalPages={totalPages} handleClick={handleClick} />
      </>
      // <div>
      //   {items.map((item, id) => (
      //   <div className="card content-panel" key={id}>
          
      //     <img src={item.picture.medium} alt="Profile pic" className="avatar-user-list" />

      //     <div className="card-text">
      //       <p className="font-weight-bold">
      //         {item.name.first} &nbsp;
      //         {item.name.last}
      //       </p>
      //       <p>{`${item.location?.street?.number} ${item.location?.street?.name}`}</p>
      //       <p>{`${item.email} ${item.phone}`}</p>
      //     </div>

      //     <div className="arrow-bg">
      //       <span className="arrow">&#x2192;</span>
      //     </div>
      //   </div>
      //   ))}
        
      // </div>
    );
  }
}

export default UsersList;