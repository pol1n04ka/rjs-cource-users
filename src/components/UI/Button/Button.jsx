import styles from "./Button.module.sass";

export default function Button(props) {
  return (
    <button
      type={props.type}
      className={`${props.className} ${styles.button}`}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
}
