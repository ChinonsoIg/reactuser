import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../../App.css";

import { USER_PER_PAGE } from "../../utils/constants";
import User from "./user";
import Footer from "../footer";

const UsersList = ({ username, queryList }) => {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  // const [res, setRes] = useState([]);

  // To select how many persons you can view per page
  const startIndex = (page - 1) * USER_PER_PAGE;
  const selectedUsers = items.slice(startIndex, startIndex + USER_PER_PAGE);

  const location = useLocation();
  const UserArray = [];

  const getData = () => {
    fetch(`https://randomuser.me/api/?results=18&gender=${username}`)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.results);
          // setRes(result);
          // Why can't I use item here? It gives empty array even though it has been set.
          // console.log('Re: ',result.results);
          UserArray.unshift(result.results);
          window.localStorage.setItem('userdata', JSON.stringify(UserArray));

          setTotalPages(Math.ceil(result.results.length / USER_PER_PAGE));          
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }

  console.log('Q. list: ',items);
  
  // "location" is passed into the useEffect to trigger a new “page view” event whenever the URL changes.
  useEffect(() => {
    getData();

    // eslint-disable-next-line
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
        {selectedUsers.filter((user) => {
          if (queryList == "") {
            return user;
          } else if (user.name.first.toLowerCase().includes(queryList.toLowerCase()) ||
          user.name.last.toLowerCase().includes(queryList.toLowerCase())) {
            return user;
          }
        }).map(i => (
          <User user={i}  key={i.login.uuid} />        
        ))}
        <Footer 
          totalPages={totalPages} 
          handleClick={handleClick}
          selectedUsers={selectedUsers} 
          />
      </>
    );
  }
}

export default UsersList;