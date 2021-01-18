import React from "react";
import { useRouteMatch, useHistory } from "react-router-dom";

import '../../App.css';

const UsersDetail = () => {

  const match = useRouteMatch();
  const history = useHistory();

  const handleReturn = () => {
    const backURL = match.path.slice(0,-4);
    console.log('returned');
    return history.push(backURL);    
  }
    
  const items = JSON.parse(window.localStorage.getItem('userdata'));
  const params = match.params.id;
  const userId = params.slice(1);

  const item = items[0].filter((selection) => {
    return selection.login.uuid === userId;
  })

  return (
    <>
      <p>
        <span className="return" onClick={handleReturn}>&larr; RESULTS</span>
      </p>
      {item.map(i => (
        <div 
          user={i} 
          key={i.login.uuid}className="user-detail">
          <img src={i.picture.large} alt="Profile pic" className="avatar-user-detail" />
          <div className="text-user-detail">
            <p className="font-weight-bold">
              {`${i.name.title} ${i.name.first} ${i.name.last}`}
              <span className="age">{i.dob.age}</span>
            </p>
            <p>
              {`${i.location?.street?.number} ${i.location?.street?.name} ${i.location.city} ${i.location.state}`}
            </p>
            <p className="email">{i.email}</p>
            <p className="joined">
              Joined: {i.registered.date}
            </p>
            <p>{i.phone}</p>
            <p>{i.cell}</p>
          </div>
        </div>
      ))}
    </>
  );
}

export default UsersDetail;