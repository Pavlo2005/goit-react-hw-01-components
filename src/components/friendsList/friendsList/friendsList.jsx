import styles from '../friends.module.css';

export const FriendsList = ({ avatar, name, isOnline }) => {
    return (
        <li className={styles.item}>
            <span className={styles.status}></span>
            <img className={styles.avatar} src="" alt="User avatar" width="48" />
            <p className={styles.name}></p>
        </li>
    );
};