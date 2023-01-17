import styles from "./UserInput.module.sass";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import { useState } from "react";

export default function UserInput(props) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (name.trim().length === 0 || age.trim().length === 0) {
      console.log(`${name} is invalid name`);
      return;
    }
    if (+age < 1) {
      console.log(`${age} is invalid age`);
      return;
    }
    const user = {
      id: Math.random().toString(),
      name: name,
      age: age,
    };
    props.onAddUser(user);
    setName("");
    setAge(0);
  };

  return (
    <Card className={styles.userInput}>
      <form onSubmit={onSubmitHandler}>
        <label>Username</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={nameChangeHandler}
        />
        <label>Age (years)</label>
        <input id="age" type="number" value={age} onChange={ageChangeHandler} />
        <Button type="submit">Add user</Button>
      </form>
    </Card>
  );
}
