import styles from "./Button.module.sass";

export default function Button(props) {
  return (
    <button
      type={props.type || "button"}
      className={`${props.className} ${styles.button}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}
