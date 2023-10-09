import styles from './profile.module.css';
import '../../index.css';


export const Profile = ({ user }) => {
    return (
        <div className='container'>
            <div className={`${styles.profile}`}>
                <div className={styles.description}>
                    <img className={styles.avatar}
                        src={user.avatar}
                        alt="User avatar"
                    />
                    <p className={styles.name}>{user.username}</p>
                    <p className={styles.tag}>@{user.tag}</p>
                    <p className={styles.location}>{user.location}</p>
                </div>
                <ul className={styles.stats}>
                    <li className={styles.stat}>
                        <p className={styles.label}>Followers</p>
                        <p className={styles.quantity}>{user.stats.followers}</p>
                    </li>
                    <li className={styles.stat}>
                        <p className={styles.label}>Views</p>
                        <p className={styles.quantity}>{user.stats.views}</p>
                    </li>
                    <li className={styles.stat}>
                        <p className={styles.label}>Likes</p>
                        <p className={styles.quantity}>{user.stats.likes}</p>
                    </li>
                </ul>
            </div >
        </div>
    );
};