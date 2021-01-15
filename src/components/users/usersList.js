import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import '../../App.css';

import { USER_PER_PAGE } from "../../utils/constants";
import User from "./user";
import Footer from "../footer";

const UsersList = ({ username }) => {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  // To select how many persons you can view per page
  const startIndex = (page - 1) * USER_PER_PAGE;
  const selectedUsers = items.slice(startIndex, startIndex + USER_PER_PAGE)

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
        <Footer totalPages={totalPages} handleClick={handleClick} />
      </>
    );
  }
}

export default UsersList;