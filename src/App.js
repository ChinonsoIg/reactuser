import './App.css';

import Home from "./components/home";
import UsersList from "./components/users/usersList";
import UsersDetail from "./components/users/usersDetail";

function App() {
  return (
    <div className="main">
      <div
        className="container-fluid homeinterface"
        >
          <Home />
      </div>
      <div
        className="container-fluid usersinterface"
        >
          <UsersList />
      </div>
    </div>
  );
}

export default App;
