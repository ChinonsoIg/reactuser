import './App.css';

import Home from "./components/home";
import Users from "./components/users/usersList"

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
        style={{backgroundColor:'orange'}}
        >
          <Users />
      </div>
    </div>
  );
}

export default App;
