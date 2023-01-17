import styles from "./UserInput.module.sass";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import { useState } from "react";

export default function UserInput(props) {
  const [isValid, setIsValid] = useState(false);
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  const checkInput = () => {
    if (name.trim().length === 0) {
      setIsValid(false);
    } else if (name.trim().length > 0) {
      setIsValid(true);
    }
  };

  const nameChangeHandler = (event) => {
    checkInput();
    setName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    checkInput();
    setAge(event.target.value);
  };

  const onClickHandler = (event) => {
    event.preventDefault();
    checkInput();
    if (isValid) {
      const user = {
        id: Math.random().toString(),
        name: name,
        age: age,
      };
      props.onAddUser(user);
      setName("");
      setAge(0);
      setIsValid(false);
    }
  };

  return (
    <Card className={styles.userInput}>
      <form>
        <label>Username</label>
        <input type="text" value={name} onChange={nameChangeHandler} />
        <label>Age (years)</label>
        <input type="number" value={age} onChange={ageChangeHandler} />
      </form>
      <Button type="submit" text="Add user" onClick={onClickHandler} />
    </Card>
  );
}
