import styles from './transactionHistory.module.css';
import '../../index.css';
import { TransactionItem } from './transactionItem/transactionItem';


export const TransactionHistory = ({ transactions }) => {

    console.log(transactions);

    return (
        <section className={`container ${styles.section}`}>
            <table className={styles.transactionContainer}>
                <thead>
                    <tr className={styles.transactionTitles}>
                        <th className={styles.transactionTitle}>Type</th>
                        <th className={styles.transactionTitle}>Amount</th>
                        <th className={styles.transactionTitle}>Currency</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        transactions.map((transaction, index) => (
                            <TransactionItem key={transaction.id} index={index} type={transaction.type} amount={transaction.amount} currency={transaction.currency} />
                        ))
                    }
                </tbody>
            </table>
        </section>
    );
};