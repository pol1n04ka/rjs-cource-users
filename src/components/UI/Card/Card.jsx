import styles from './Card.module.sass'

export default function Card(props) {
    return <div className={`${props.className} ${styles.card}`}>
        {props.children}
    </div>
}