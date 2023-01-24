import styles from "./UserInput.module.sass";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import { useState, Fragment } from "react";
import Modal from "../UI/Modal/Modal";

export default function UserInput(props) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const [isValid, setIsValid] = useState(true);

  const checkIfValid = () => {
    if (name.trim().length === 0 || age.trim().length === 0) {
      return false;
    }
    if (+age < 1) {
      return false;
    }

    return true;
  };

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (!checkIfValid()) {
      setIsValid(false);
      return;
    } else {
      setIsValid(true);
    }
    const user = {
      id: Math.random().toString(),
      name: name,
      age: age,
    };
    props.onAddUser(user);
    setName("");
    setAge("");
  };

  const onCloseModalHandler = () => {
    setIsValid(true);
  };

  return (
    <Fragment>
      {isValid ? (
        ""
      ) : (
        <Modal
          title="Error"
          text="You submitted blank content. Please, write name or/and age and submit again"
          onClose={onCloseModalHandler}
        />
      )}
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
          <input
            id="age"
            type="number"
            value={age}
            onChange={ageChangeHandler}
          />
          <Button type="submit">Add user</Button>
        </form>
      </Card>
    </Fragment>
  );
}
