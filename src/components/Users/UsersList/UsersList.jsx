import styles from "./UsersList.module.sass";
import Card from "../../UI/Card/Card";
import UserItem from "../UserItem/UserItem";

export default function UsersList(props) {
  const returnUsers = props.users.map((user) => {
    return <UserItem key={user.id} name={user.name} age={user.age} />;
  });

  return <Card className={styles}>{returnUsers}</Card>;
}
