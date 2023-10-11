import styles from './statistics.module.css';
import '../../index.css';
import { StatsItem } from './statsItem/statsItem';


export const Statistics = ({ data, title }) => {

    console.log(data);

    const statisticsTitle = title ? <h2 className={styles.title}>{title}</h2> : '';

    return (
        <section className={`container ${styles.statistics}`}>
            {statisticsTitle}

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