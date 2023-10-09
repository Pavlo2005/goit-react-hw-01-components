import styles from '../friends.module.css';

export const FriendsItem = ({ avatar, name, isOnline }) => {
    return (
        <li className={styles.item}>
            <span className={styles.status}>{name}</span>
            <img className={styles.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={styles.name}></p>
        </li>
    );
};