import "./App.sass";
import UserInput from "./components/UserInput/UserInput";
import UsersList from "./components/Users/UsersList/UsersList";
import { useState } from "react";

function App() {
  const [users, setUsers] = useState([
    { id: "1", name: "Anna", age: 34 },
    { id: "2", name: "John", age: 24 },
  ]);

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
