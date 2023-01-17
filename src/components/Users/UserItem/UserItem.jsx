import styles from "./UserItem.module.sass";

export default function UserItem(props) {
  const onClickHandler = (event) => {
    console.log(event);
  };

  return (
    <div className={styles.user} onClick={onClickHandler}>
      {props.name} ({props.age} years old)
    </div>
  );
}
