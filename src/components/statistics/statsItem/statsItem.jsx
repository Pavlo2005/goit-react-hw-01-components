import styles from '../statistics.module.css';

export const StatsItem = ({ label, percentage }) => {
    return (
        <li className={styles.item}>
            <p className={styles.label}>{label}</p>
            <p className={styles.percentage}>{`${percentage}%`}</p>
        </li>
    );
};