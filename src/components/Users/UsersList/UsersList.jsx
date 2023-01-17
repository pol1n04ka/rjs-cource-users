import styles from "./UsersList.module.sass";
import Card from "../../UI/Card/Card";

export default function UsersList(props) {
  return (
    <Card className={styles.usersList}>
      <ul>
        {props.users.map((user) => {
          return (
            <li key={user.id}>
              {user.name} ({user.age} years old)
            </li>
          );
        })}
      </ul>
    </Card>
  );
}
