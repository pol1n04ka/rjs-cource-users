import "./App.sass";
import UserInput from "./components/UserInput/UserInput";
import UsersList from "./components/Users/UsersList/UsersList";
import { useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    setUsers((prevState) => {
      return [user, ...prevState];
    });
  };

  return (
    <div className="App">
      <UserInput onAddUser={addUser} />
      <UsersList users={users} />
    </div>
  );
}

export default App;
