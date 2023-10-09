import styles from './statistics.module.css';
import '../../index.css';
import { StatsItem } from './statsItem/statsItem';


export const Statistics = ({ data }) => {

    console.log(data);

    return (
        <section className={`container ${styles.statistics}`}>
            <h2 className={styles.title}>Upload stats</h2>

            <ul className={styles.statList}>
                {
                    data.map(element => (
                        <StatsItem key={element.id} label={element.label} percentage={element.percentage} />
                    ))
                }
            </ul>
        </section>
    );
};