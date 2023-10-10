import styles from '../friends.module.css';
import { StatusAvatar } from './friendsItem.styled';


export const FriendsItem = ({ avatar, name, isOnline }) => {
    return (
        <li className={styles.item}>
            <img className={styles.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={styles.name}>{name}</p>
            <StatusAvatar isOnline={isOnline} ></StatusAvatar>
        </li>
    );
};