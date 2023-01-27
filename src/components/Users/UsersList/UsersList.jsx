import styles from "./UsersList.module.sass";
import Card from "../../UI/Card/Card";

export default function UsersList(props) {
  const blankText = () => {
    return <p className={styles.blank}>You don't have any users yet</p>;
  };

  const listOfUsers = () => {
    return (
      <ul>
        {props.users.map((user) => {
          return (
            <li key={user.id}>
              {user.name} ({user.age} years old)
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <Card className={styles.usersList}>
      {props.users.length === 0 ? blankText() : listOfUsers()}
    </Card>
  );
}
