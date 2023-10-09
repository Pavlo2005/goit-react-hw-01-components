import styles from './friends.module.css';
import '../../index.css';
import { FriendsItem } from './frindsItem/friendsItem';


export const Friends = ({ friends }) => {

    console.log(friends);

    return (
        <section className={`container ${styles.section}`}>
            <ul className={styles.friend}>
                {
                    friends.map(friend => (
                        <FriendsItem key={friend.id} avatar={friend.avatar} isOnline={friend.isOnline} name={friend.name} />
                    ))
                }
            </ul>
        </section>
    );
};