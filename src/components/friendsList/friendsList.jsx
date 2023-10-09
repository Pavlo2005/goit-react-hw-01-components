import styles from './friends.module.css';
import '../../index.css';
import { FriendsList } from './friendsList/friendsList';


export const Friends = ({ friends }) => {

    console.log(friends);

    return (
        <section className={`container ${styles.section}`}>
            <ul className={styles.friendList}>
                {
                    friendsList.map(friend => (
                        <FriendsList key={friend.id} avatar={friend.avatar} isOnline={friend.isOnline} name={friend.name} />
                    ))
                }
            </ul>
        </section>
    );
};